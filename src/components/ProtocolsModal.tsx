import React, { useState } from 'react';
import { X, Plus, Trash2, Play, BookMarked, Clock, AlertTriangle, Edit2, Check } from 'lucide-react';
import { useAppContext } from '../context';
import type { Protocol } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS, formatHour } from '../types';

interface Props {
  onClose: () => void;
}

const PROTOCOL_COLORS = [
  '#6366F1', '#8B5CF6', '#EC4899', '#F97316',
  '#22C55E', '#0EA5E9', '#F59E0B', '#14B8A6',
];

export default function ProtocolsModal({ onClose }: Props) {
  const { state, dispatch } = useAppContext();
  const [view, setView] = useState<'list' | 'create' | 'preview'>('list');
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [confirmApply, setConfirmApply] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  // Create form state
  const [formName, setFormName] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formColor, setFormColor] = useState(PROTOCOL_COLORS[0]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const timelineHasEntries = state.prescription.timeline.some(s => s.entries.length > 0);

  const saveFromTimeline = () => {
    if (!formName.trim()) return;
    const entries = state.prescription.timeline.flatMap(slot =>
      slot.entries.map(e => ({ frascoId: e.frascoId, hour: slot.hour }))
    );
    if (entries.length === 0) return;

    if (editingId) {
      dispatch({
        type: 'UPDATE_PROTOCOL',
        payload: { id: editingId, name: formName, description: formDesc, color: formColor, entries, createdAt: new Date().toISOString() },
      });
    } else {
      dispatch({
        type: 'ADD_PROTOCOL',
        payload: { id: `proto-${Date.now()}`, name: formName, description: formDesc, color: formColor, entries, createdAt: new Date().toISOString() },
      });
    }
    setView('list');
    setFormName(''); setFormDesc(''); setFormColor(PROTOCOL_COLORS[0]); setEditingId(null);
  };

  const startEdit = (p: Protocol) => {
    setEditingId(p.id);
    setFormName(p.name);
    setFormDesc(p.description);
    setFormColor(p.color);
    setView('create');
  };

  const applyProtocol = (id: string) => {
    dispatch({ type: 'APPLY_PROTOCOL', payload: id });
    setConfirmApply(null);
    onClose();
  };

  const previewProtocol = state.protocols.find(p => p.id === previewId);

  // Group entries by hour for preview
  const groupByHour = (entries: Protocol['entries']) => {
    const map: Record<number, string[]> = {};
    entries.forEach(e => {
      if (!map[e.hour]) map[e.hour] = [];
      const f = state.frascos.find(f => f.id === e.frascoId);
      if (f) map[e.hour].push(f.name);
    });
    return map;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col" style={{ height: '85vh' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <BookMarked size={20} className="text-blue-700" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Protocolos Prontos</h2>
              <p className="text-xs text-gray-500">Salve e aplique conjuntos de frascos com 1 clique</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400"><X size={20} /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">

          {/* ── LIST VIEW ── */}
          {view === 'list' && (
            <div className="space-y-4">
              {/* Save from current timeline */}
              <div className={`rounded-xl border-2 border-dashed p-4 ${timelineHasEntries ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">💾 Salvar prescrição atual como protocolo</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {timelineHasEntries
                        ? `${state.prescription.timeline.filter(s => s.entries.length > 0).length} horários preenchidos na timeline`
                        : 'A timeline está vazia — arraste frascos primeiro'}
                    </p>
                  </div>
                  <button
                    disabled={!timelineHasEntries}
                    onClick={() => { setEditingId(null); setFormName(''); setFormDesc(''); setView('create'); }}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${timelineHasEntries ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    <Plus size={14} /> Salvar
                  </button>
                </div>
              </div>

              {/* Protocol list */}
              {state.protocols.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <BookMarked size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Nenhum protocolo salvo ainda.</p>
                  <p className="text-xs mt-1">Monte uma prescrição na timeline e salve como protocolo.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {state.protocols.map(p => {
                    const hourCount = new Set(p.entries.map(e => e.hour)).size;
                    const frascoCount = p.entries.length;
                    return (
                      <div key={p.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-3 p-4">
                          {/* Color swatch */}
                          <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                            style={{ backgroundColor: p.color }}>
                            {p.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-800 truncate">{p.name}</p>
                            {p.description && <p className="text-xs text-gray-500 truncate">{p.description}</p>}
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                <Clock size={11} /> {hourCount} horários
                              </span>
                              <span className="text-xs text-gray-400">· {frascoCount} frascos</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <button onClick={() => { setPreviewId(p.id); setView('preview'); }}
                              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Ver detalhes">
                              <BookMarked size={15} />
                            </button>
                            <button onClick={() => startEdit(p)}
                              className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors" title="Editar nome">
                              <Edit2 size={15} />
                            </button>
                            <button onClick={() => setConfirmDelete(p.id)}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors" title="Excluir">
                              <Trash2 size={15} />
                            </button>
                            <button onClick={() => setConfirmApply(p.id)}
                              className="flex items-center gap-1.5 ml-1 px-3 py-1.5 text-xs font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                              <Play size={12} /> Aplicar
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ── CREATE / EDIT VIEW ── */}
          {view === 'create' && (
            <div className="space-y-4">
              <button onClick={() => { setView('list'); setEditingId(null); }} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                ← Voltar
              </button>
              <h3 className="font-semibold text-gray-800">{editingId ? 'Editar Protocolo' : 'Salvar Protocolo'}</h3>

              {/* Preview of what will be saved */}
              {!editingId && (
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Frascos da timeline atual:</p>
                  {state.prescription.timeline.filter(s => s.entries.length > 0).map(slot => (
                    <div key={slot.hour} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-gray-400 w-12 flex-shrink-0 pt-0.5">{formatHour(slot.hour)}</span>
                      <div className="flex flex-wrap gap-1">
                        {slot.entries.map(e => {
                          const f = state.frascos.find(f => f.id === e.frascoId);
                          if (!f) return null;
                          return (
                            <span key={e.instanceId}
                              className="text-xs px-2 py-0.5 rounded-full text-white font-medium"
                              style={{ backgroundColor: CATEGORY_COLORS[f.category] }}>
                              {f.name.length > 30 ? f.name.slice(0, 28) + '…' : f.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do protocolo *</label>
                <input
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="Ex: Protocolo Emagrecimento 60 dias"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição (opcional)</label>
                <textarea
                  value={formDesc}
                  onChange={e => setFormDesc(e.target.value)}
                  placeholder="Ex: Para pacientes com sobrepeso + resistência insulínica + disbiose"
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cor do protocolo</label>
                <div className="flex gap-2">
                  {PROTOCOL_COLORS.map(c => (
                    <button key={c} onClick={() => setFormColor(c)}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      style={{ backgroundColor: c }}>
                      {formColor === c && <Check size={14} className="text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={saveFromTimeline}
                disabled={!formName.trim()}
                className={`w-full py-2.5 text-sm font-semibold rounded-xl transition-colors ${formName.trim() ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                {editingId ? '✓ Salvar alterações' : '✓ Salvar protocolo'}
              </button>
            </div>
          )}

          {/* ── PREVIEW VIEW ── */}
          {view === 'preview' && previewProtocol && (
            <div className="space-y-4">
              <button onClick={() => setView('list')} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                ← Voltar
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: previewProtocol.color }}>
                  {previewProtocol.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{previewProtocol.name}</h3>
                  {previewProtocol.description && <p className="text-xs text-gray-500">{previewProtocol.description}</p>}
                </div>
              </div>

              <div className="space-y-2">
                {Object.entries(groupByHour(previewProtocol.entries))
                  .sort(([a], [b]) => Number(a) - Number(b))
                  .map(([hour, names]) => (
                    <div key={hour} className="flex items-start gap-3 py-2 border-b border-gray-50">
                      <span className="text-sm font-mono font-semibold text-gray-500 w-14 flex-shrink-0 pt-0.5">{formatHour(Number(hour))}</span>
                      <div className="flex flex-col gap-1">
                        {names.map((n, i) => {
                          const f = state.frascos.find(f => f.name === n);
                          return (
                            <span key={i} className="text-xs px-2.5 py-1 rounded-full text-white font-medium inline-block"
                              style={{ backgroundColor: f ? CATEGORY_COLORS[f.category] : '#6B7280' }}>
                              {n}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>

              <button onClick={() => setConfirmApply(previewProtocol.id)}
                className="w-full py-2.5 text-sm font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <Play size={15} /> Aplicar este protocolo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Confirm apply */}
      {confirmApply && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-yellow-100 rounded-full"><AlertTriangle size={20} className="text-yellow-600" /></div>
              <h3 className="font-semibold text-gray-800">Aplicar protocolo?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              Isso vai <strong>substituir toda a timeline atual</strong> com os frascos do protocolo "<strong>{state.protocols.find(p => p.id === confirmApply)?.name}</strong>".
            </p>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setConfirmApply(null)} className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">Cancelar</button>
              <button onClick={() => applyProtocol(confirmApply)} className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">Aplicar</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm delete */}
      {confirmDelete && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-red-100 rounded-full"><AlertTriangle size={20} className="text-red-600" /></div>
              <h3 className="font-semibold text-gray-800">Excluir protocolo?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              Excluir "<strong>{state.protocols.find(p => p.id === confirmDelete)?.name}</strong>"? Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">Cancelar</button>
              <button onClick={() => { dispatch({ type: 'DELETE_PROTOCOL', payload: confirmDelete }); setConfirmDelete(null); }}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">Excluir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
