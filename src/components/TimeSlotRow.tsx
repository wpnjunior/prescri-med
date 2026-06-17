import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { X, Edit3 } from 'lucide-react';
import type { TimeSlot, Frasco } from '../types';
import { CATEGORY_COLORS, formatHour } from '../types';
import { useAppContext } from '../context';

interface TimeSlotRowProps {
  slot: TimeSlot;
  frascoMap: Record<string, Frasco>;
  onEditFrasco?: (frasco: Frasco) => void;
}

export default function TimeSlotRow({ slot, frascoMap, onEditFrasco }: TimeSlotRowProps) {
  const { dispatch } = useAppContext();
  const { setNodeRef, isOver } = useDroppable({ id: `hour-${slot.hour}` });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleRemove = (instanceId: string) => {
    dispatch({ type: 'REMOVE_FROM_TIMELINE', payload: { hour: slot.hour, instanceId } });
  };

  const hasEntries = slot.entries.length > 0;

  return (
    <div ref={setNodeRef} className={`flex items-start gap-2 min-h-[52px] px-3 py-2 border-b border-gray-100 transition-colors ${isOver ? 'bg-blue-50' : hasEntries ? 'bg-white' : 'bg-gray-50/50'}`}>
      <div className="w-14 flex-shrink-0 pt-1">
        <span className="text-xs font-mono font-semibold text-gray-400">{formatHour(slot.hour)}</span>
      </div>
      <div className="flex-1 flex flex-wrap gap-1.5 min-h-[36px] items-start">
        {slot.entries.length === 0 && isOver && <div className="text-xs text-blue-400 italic pt-1">Soltar aqui...</div>}
        {slot.entries.length === 0 && !isOver && <div className="text-xs text-gray-300 italic pt-1">Arraste um frasco aqui</div>}
        {slot.entries.map(entry => {
          const frasco = frascoMap[entry.frascoId];
          if (!frasco) return null;
          const isHovered = hoveredId === entry.instanceId;
          return (
            <div key={entry.instanceId} className="relative" onMouseEnter={() => setHoveredId(entry.instanceId)} onMouseLeave={() => setHoveredId(null)}>
              <div className="flex items-center gap-1 pl-2 pr-1 py-1 rounded-full text-white text-xs font-medium shadow-sm cursor-pointer hover:shadow-md hover:ring-2 hover:ring-white transition-all"
                style={{ backgroundColor: CATEGORY_COLORS[frasco.category] }}
                onClick={(e) => { if ((e.target as HTMLElement).closest('button, a')) return; if (onEditFrasco) onEditFrasco(frasco); }}
                title={onEditFrasco ? 'Clique para editar este frasco' : undefined}>
                <span className="max-w-[140px] truncate">{frasco.name}</span>
                {frasco.purchaseUrl && (
                  <a href={frasco.purchaseUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                    className="ml-0.5 rounded-full hover:bg-white/30 p-0.5 flex-shrink-0 transition-colors" title="🛒 Comprar">🛒</a>
                )}
                <button onClick={(e) => { e.stopPropagation(); handleRemove(entry.instanceId); }} className="ml-0.5 rounded-full hover:bg-white/20 p-0.5 flex-shrink-0 transition-colors" title="Remover">
                  <X size={10} />
                </button>
              </div>
              {isHovered && (
                <div className="absolute z-50 left-0 top-full mt-1 w-72 bg-white border-2 rounded-lg shadow-2xl p-3 pointer-events-none" style={{ borderColor: CATEGORY_COLORS[frasco.category] }}>
                  <div className="flex items-start gap-2 mb-2 pb-2 border-b border-gray-100">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: CATEGORY_COLORS[frasco.category] }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-800 leading-tight">{frasco.name}</p>
                      {frasco.tier && <p className="text-[10px] text-gray-500 mt-0.5 capitalize">{frasco.tier}{frasco.branded && <span className="ml-1 text-purple-600 font-semibold">✨ Branded</span>}</p>}
                    </div>
                  </div>
                  <div className="space-y-0.5 mb-2">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Ingredientes ({frasco.ingredients.length})</p>
                    {frasco.ingredients.map((ing, i) => (
                      <div key={i} className="flex items-baseline gap-1.5 text-[11px]">
                        <span className="text-gray-700 font-medium flex-1">{ing.name}</span>
                        <span className="text-gray-500 font-mono text-[10px]">{ing.dose}</span>
                      </div>
                    ))}
                  </div>
                  {frasco.posology && (
                    <div className="border-t border-gray-100 pt-2 mt-2">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Posologia</p>
                      <p className="text-[11px] text-gray-600 leading-snug">{frasco.posology}</p>
                    </div>
                  )}
                  {onEditFrasco && <p className="text-[10px] text-blue-600 mt-2 pt-2 border-t border-gray-100 flex items-center gap-1"><Edit3 size={10} /> Clique para editar</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
