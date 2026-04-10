import React, { useState, useEffect } from 'react';
import {
  DndContext, DragEndEvent, DragOverlay, DragStartEvent,
  PointerSensor, useSensor, useSensors,
} from '@dnd-kit/core';
import { LayoutList, BookMarked, FlaskConical, Eye } from 'lucide-react';
import { AppProvider, useAppContext } from './context';
import FrascoLibrary from './components/FrascoLibrary';
import PrescriptionPanel from './components/PrescriptionPanel';
import AddFrascoModal from './components/AddFrascoModal';
import DoctorSettingsModal from './components/DoctorSettingsModal';
import FrascoManagerModal from './components/FrascoManagerModal';
import ProtocolsModal from './components/ProtocolsModal';
import FrascoFusionModal from './components/FrascoFusionModal';
import PanoramicViewModal from './components/PanoramicViewModal';
import type { Frasco } from './types';
import { CATEGORY_COLORS } from './types';
import { hasPendingCallback, getCallbackCode, clearCallbackFromUrl, exchangeToken, signPdfVidaas } from './utils/vidaas';
import { getPDFBase64 } from './utils/pdf';

function AppInner() {
  const { state, dispatch } = useAppContext();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingFrasco, setEditingFrasco] = useState<Frasco | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [managerOpen, setManagerOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);
  const [fusionOpen, setFusionOpen] = useState(false);
  const [fusionPreSelected, setFusionPreSelected] = useState<string[]>([]);
  const [panoramicOpen, setPanoramicOpen] = useState(false);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [vidaasStatus, setVidaasStatus] = useState<'idle' | 'signing' | 'done' | 'error'>('idle');
  const [vidaasMsg, setVidaasMsg] = useState('');

  useEffect(() => {
    if (!hasPendingCallback()) return;
    const code = getCallbackCode();
    if (!code) return;
    clearCallbackFromUrl();
    setVidaasStatus('signing');
    setVidaasMsg('Autenticado! Gerando e assinando PDF...');
    (async () => {
      try {
        const accessToken = await exchangeToken(code);
        const { base64, filename } = await getPDFBase64(state);
        const signedBlob = await signPdfVidaas(accessToken, base64, filename);
        const url = URL.createObjectURL(signedBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename.replace('.pdf', '_assinado.pdf');
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setVidaasStatus('done');
        setVidaasMsg('PDF assinado digitalmente e baixado com sucesso! ✅');
        setTimeout(() => setVidaasStatus('idle'), 5000);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Erro desconhecido.';
        setVidaasStatus('error'); setVidaasMsg(msg);
        setTimeout(() => setVidaasStatus('idle'), 8000);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const handleDragStart = (event: DragStartEvent) => setActiveDragId(event.active.id as string);

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDragId(null);
    const { active, over } = event;
    if (!over) return;
    const overId = over.id as string;
    if (!overId.startsWith('hour-')) return;
    const hour = parseInt(overId.replace('hour-', ''), 10);
    const frascoId = (active.data.current as { frascoId: string })?.frascoId;
    if (!frascoId) return;
    const instanceId = `inst-${frascoId}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    dispatch({ type: 'ADD_TO_TIMELINE', payload: { hour, frascoId, instanceId } });
  };

  const activeFrasco = activeDragId ? state.frascos.find(f => f.id === activeDragId) : null;

  const handleOpenAdd = () => { setEditingFrasco(null); setAddModalOpen(true); };
  const handleEditFrasco = (frasco: Frasco) => { setEditingFrasco(frasco); setAddModalOpen(true); };
  const handleCloseModal = () => { setAddModalOpen(false); setEditingFrasco(null); };
  const handleOpenFusion = (preSelectedIds?: string[]) => {
    setFusionPreSelected(preSelectedIds ?? []);
    setFusionOpen(true);
  };

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-screen bg-slate-100 overflow-hidden">

        {/* VIDaaS banner */}
        {vidaasStatus !== 'idle' && (
          <div className={`px-4 py-2 text-sm font-medium text-center flex-shrink-0 ${
            vidaasStatus === 'signing' ? 'bg-yellow-400 text-yellow-900' :
            vidaasStatus === 'done'    ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {vidaasStatus === 'signing' && <span className="animate-pulse">⏳ </span>}
            {vidaasMsg}
          </div>
        )}

        {/* Top nav bar */}
        <header className="flex items-center justify-between px-5 py-3 bg-blue-800 text-white shadow-md flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-800 text-xs font-bold">Rx</span>
              </div>
              <span className="text-lg font-bold tracking-tight">PrescriMed</span>
            </div>
            <span className="text-blue-300 text-sm hidden sm:block">Sistema de Prescrição em Frascos</span>
          </div>

          {/* Center nav buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPanoramicOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors border border-indigo-500"
              title="Visão panorâmica de todos os frascos"
            >
              <Eye size={14} />
              <span className="hidden sm:block">Ver Todos</span>
            </button>
            <button
              onClick={() => setManagerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors border border-blue-600"
              title="Gerenciar todos os frascos"
            >
              <LayoutList size={14} />
              <span className="hidden sm:block">Gerenciar Frascos</span>
            </button>
            <button
              onClick={() => handleOpenFusion()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors border border-emerald-500"
              title="Fundir frascos"
            >
              <FlaskConical size={14} />
              <span className="hidden sm:block">Fundir Frascos</span>
            </button>
            <button
              onClick={() => setProtocolsOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors border border-purple-500"
              title="Protocolos prontos"
            >
              <BookMarked size={14} />
              <span className="hidden sm:block">Protocolos</span>
              {state.protocols.length > 0 && (
                <span className="bg-white text-purple-700 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {state.protocols.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-blue-200">
            <span className="hidden md:block">{state.doctor.name}</span>
            <span className="hidden md:block text-blue-400">•</span>
            <span className="hidden md:block">CRM {state.doctor.crm}</span>
          </div>
        </header>

        {/* Main layout */}
        <div className="flex flex-1 overflow-hidden">
          <div className="w-[35%] flex-shrink-0 overflow-hidden">
            <FrascoLibrary onAddFrasco={handleOpenAdd} onEditFrasco={handleEditFrasco} onOpenFusion={handleOpenFusion} onOpenPanoramic={() => setPanoramicOpen(true)} />
          </div>
          <div className="flex-1 overflow-hidden">
            <PrescriptionPanel onOpenSettings={() => setSettingsOpen(true)} />
          </div>
        </div>
      </div>

      {/* Drag overlay */}
      <DragOverlay>
        {activeFrasco && (
          <div className="bg-white rounded-lg shadow-2xl border-l-4 p-3 w-48 pointer-events-none rotate-2 scale-105"
            style={{ borderLeftColor: CATEGORY_COLORS[activeFrasco.category] }}>
            <p className="text-xs font-semibold text-gray-700 truncate">{activeFrasco.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {activeFrasco.ingredients.slice(0, 2).map(i => `${i.name} ${i.dose}`).join(', ')}
            </p>
          </div>
        )}
      </DragOverlay>

      {/* Modals */}
      {addModalOpen && <AddFrascoModal editingFrasco={editingFrasco} onClose={handleCloseModal} />}
      {settingsOpen && <DoctorSettingsModal onClose={() => setSettingsOpen(false)} />}
      {managerOpen && <FrascoManagerModal onClose={() => setManagerOpen(false)} onEditFrasco={handleEditFrasco} />}
      {protocolsOpen && <ProtocolsModal onClose={() => setProtocolsOpen(false)} />}
      <FrascoFusionModal open={fusionOpen} onClose={() => { setFusionOpen(false); setFusionPreSelected([]); }} preSelectedIds={fusionPreSelected} />
      {panoramicOpen && <PanoramicViewModal onClose={() => setPanoramicOpen(false)} onEditFrasco={handleEditFrasco} />}
    </DndContext>
  );
}

export default function App() {
  return <AppProvider><AppInner /></AppProvider>;
}
