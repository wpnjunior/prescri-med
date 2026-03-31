import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { X } from 'lucide-react';
import type { TimeSlot, Frasco } from '../types';
import { CATEGORY_COLORS, formatHour } from '../types';
import { useAppContext } from '../context';

interface TimeSlotRowProps {
  slot: TimeSlot;
  frascoMap: Record<string, Frasco>;
}

export default function TimeSlotRow({ slot, frascoMap }: TimeSlotRowProps) {
  const { dispatch } = useAppContext();
  const { setNodeRef, isOver } = useDroppable({
    id: `hour-${slot.hour}`,
  });

  const handleRemove = (instanceId: string) => {
    dispatch({
      type: 'REMOVE_FROM_TIMELINE',
      payload: { hour: slot.hour, instanceId },
    });
  };

  const hasEntries = slot.entries.length > 0;

  return (
    <div
      ref={setNodeRef}
      className={`flex items-start gap-2 min-h-[52px] px-3 py-2 border-b border-gray-100 transition-colors ${
        isOver ? 'bg-blue-50' : hasEntries ? 'bg-white' : 'bg-gray-50/50'
      }`}
    >
      {/* Hour label */}
      <div className="w-14 flex-shrink-0 pt-1">
        <span className="text-xs font-mono font-semibold text-gray-400">
          {formatHour(slot.hour)}
        </span>
      </div>

      {/* Drop zone content */}
      <div className="flex-1 flex flex-wrap gap-1.5 min-h-[36px] items-start">
        {slot.entries.length === 0 && isOver && (
          <div className="text-xs text-blue-400 italic pt-1">Soltar aqui...</div>
        )}
        {slot.entries.length === 0 && !isOver && (
          <div className="text-xs text-gray-300 italic pt-1">Arraste um frasco aqui</div>
        )}
        {slot.entries.map(entry => {
          const frasco = frascoMap[entry.frascoId];
          if (!frasco) return null;
          return (
            <div
              key={entry.instanceId}
              className="flex items-center gap-1 pl-2 pr-1 py-1 rounded-full text-white text-xs font-medium shadow-sm"
              style={{ backgroundColor: CATEGORY_COLORS[frasco.category] }}
            >
              <span className="max-w-[140px] truncate">{frasco.name}</span>
              <button
                onClick={() => handleRemove(entry.instanceId)}
                className="ml-0.5 rounded-full hover:bg-white/20 p-0.5 flex-shrink-0 transition-colors"
                title="Remover"
              >
                <X size={10} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
