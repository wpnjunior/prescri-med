import React, { useState } from 'react';
import { X, History, Trash2, Upload, Calendar, User, Clock, FlaskConical, Search } from 'lucide-react';
import { useAppContext } from '../context';

interface Props {
  onClose: () => void;
}

export default function PrescriptionHistoryModal({ onClose }: Props) {
  const { state, dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const filtered = state.savedPrescriptions.filter(sp => {
    if (!search) return true;
    const q = search.toLowerCase();
    return sp.patient.name.toLowerCase().includes(q) || sp.date.includes(q);
  });

  const handleLoad = (id: string) => {
    if (window.confirm('Carregar esta prescrição? A prescrição atual será substituída.')) {
      dispatch({ type: 'LOAD_PRESCRIPTION', payload: id });
      onClose();
    }
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_SAVED_PRESCRIPTION', payload: id });
    setConfirmDeleteId(null);
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch { return iso; }
  };

  const formatTimestamp = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }) +
        ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    } catch { return iso; }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <History size={20} className="text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Prescrições Salvas</h2>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
              {state.savedPrescriptions.length}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>

        {/* Search */}
        {state.savedPrescriptions.length > 3 && (
          <div className="px-6 py-3 border-b border-gray-100">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Buscar por paciente ou data..."
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* List */}
        <div className="flex-1 overflow-y-auto px-6 py-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <History size={40} className="mx-auto mb-3 text-gray-300" />
              {state.savedPrescriptions.length === 0 ? (
                <>
                  <p className="text-sm font-medium">Nenhuma prescrição salva ainda</p>
                  <p className="text-xs mt-1">Use o botão "Salvar" no painel de prescrição</p>
                </>
              ) : (
                <p className="text-sm">Nenhum resultado para "{search}"</p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map(sp => (
                <div key={sp.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between">
                    {/* Patient info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <User size={14} className="text-blue-500 flex-shrink-0" />
                        <h3 className="text-sm font-semibold text-gray-800 truncate">
                          {sp.patient.name || 'Paciente sem nome'}
                        </h3>
                        {sp.patient.age && (
                          <span className="text-xs text-gray-400">{sp.patient.age} anos</span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {formatDate(sp.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {sp.slotCount} horário{sp.slotCount !== 1 ? 's' : ''}
                        </span>
                        <span className="flex items-center gap-1">
                          <FlaskConical size={11} />
                          {sp.frascoCount} frasco{sp.frascoCount !== 1 ? 's' : ''}
                        </span>
                      </div>

                      <p className="text-[10px] text-gray-400 mt-1.5">
                        Salvo: {formatTimestamp(sp.savedAt)}
                        {sp.updatedAt !== sp.savedAt && ` | Atualizado: ${formatTimestamp(sp.updatedAt)}`}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 ml-3 flex-shrink-0">
                      <button onClick={() => handleLoad(sp.id)}
                        className="flex items-center gap-1 text-xs font-medium bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                        title="Carregar esta prescrição"
                      >
                        <Upload size={12} />
                        Carregar
                      </button>
                      {confirmDeleteId === sp.id ? (
                        <div className="flex items-center gap-1">
                          <button onClick={() => handleDelete(sp.id)}
                            className="text-[10px] font-bold bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                          >Excluir</button>
                          <button onClick={() => setConfirmDeleteId(null)}
                            className="text-[10px] text-gray-500 px-2 py-1 rounded hover:bg-gray-100"
                          >Não</button>
                        </div>
                      ) : (
                        <button onClick={() => setConfirmDeleteId(sp.id)}
                          className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                          title="Excluir"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-[10px] text-gray-400">
            As prescrições ficam salvas no navegador deste computador
          </p>
          <button onClick={onClose}
            className="text-sm px-4 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium"
          >Fechar</button>
        </div>
      </div>
    </div>
  );
}
