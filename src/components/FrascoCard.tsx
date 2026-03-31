import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Edit2, Trash2, Sparkles } from 'lucide-react';
import type { Frasco } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types';
import AIInsightsModal from './AIInsightsModal';

interface FrascoCardProps {
  frasco: Frasco;
  onEdit: (frasco: Frasco) => void;
  onDelete: (id: string) => void;
}

export default function FrascoCard({ frasco, onEdit, onDelete }: FrascoCardProps) {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [showAI, setShowAI] = useState(false);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: frasco.id,
    data: { frascoId: frasco.id },
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.4 : 1,
    borderLeftColor: CATEGORY_COLORS[frasco.category],
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const closeContext = () => setContextMenu(null);

  const previewIngredients = frasco.ingredients.slice(0, 3);

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        onContextMenu={handleContextMenu}
        className="bg-white rounded-lg shadow-sm border border-gray-100 border-l-4 p-3 select-none hover:shadow-md transition-shadow relative group"
      >
        {/* Category badge */}
        <div
          className="inline-block text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
          style={{ backgroundColor: CATEGORY_COLORS[frasco.category] }}
        >
          {CATEGORY_LABELS[frasco.category]}
        </div>

        {/* Name */}
        <p className="text-sm font-semibold text-gray-800 leading-tight mb-1 pr-16">{frasco.name}</p>

        {/* Preview ingredients */}
        <div className="space-y-0.5">
          {previewIngredients.map((ing, i) => (
            <p key={i} className="text-xs text-gray-500 truncate">
              {ing.name} {ing.dose}
            </p>
          ))}
          {frasco.ingredients.length > 3 && (
            <p className="text-xs text-gray-400">+{frasco.ingredients.length - 3} mais...</p>
          )}
        </div>

        {/* Action buttons — visible on hover */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); setShowAI(true); }}
            className="p-1 rounded hover:bg-purple-50 text-gray-300 hover:text-purple-600 transition-colors"
            title="Análise IA"
          >
            <Sparkles size={12} />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onEdit(frasco); }}
            className="p-1 rounded hover:bg-gray-100 text-gray-300 hover:text-blue-600 transition-colors"
            title="Editar"
          >
            <Edit2 size={12} />
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onDelete(frasco.id); }}
            className="p-1 rounded hover:bg-gray-100 text-gray-300 hover:text-red-600 transition-colors"
            title="Excluir"
          >
            <Trash2 size={12} />
          </button>
        </div>
      </div>

      {/* Context menu */}
      {contextMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={closeContext} />
          <div
            className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-xl py-1 min-w-[160px]"
            style={{ left: contextMenu.x, top: contextMenu.y }}
          >
            <button
              className="w-full text-left px-4 py-2 text-sm text-purple-700 hover:bg-purple-50 flex items-center gap-2"
              onClick={() => { setShowAI(true); closeContext(); }}
            >
              <Sparkles size={14} /> Análise IA
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              onClick={() => { onEdit(frasco); closeContext(); }}
            >
              <Edit2 size={14} /> Editar
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
              onClick={() => { onDelete(frasco.id); closeContext(); }}
            >
              <Trash2 size={14} /> Excluir
            </button>
          </div>
        </>
      )}

      {/* AI Insights Modal */}
      {showAI && (
        <AIInsightsModal frasco={frasco} onClose={() => setShowAI(false)} />
      )}
    </>
  );
}
