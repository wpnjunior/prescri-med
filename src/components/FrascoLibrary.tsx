import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import type { Category, Tier, Frasco } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS, TIER_LABELS, TIER_COLORS } from '../types';
import { useAppContext } from '../context';
import FrascoCard from './FrascoCard';

interface FrascoLibraryProps {
  onAddFrasco: () => void;
  onEditFrasco: (frasco: Frasco) => void;
  onOpenFusion?: (preSelectedIds: string[]) => void;
}

const ALL_CATEGORIES: Category[] = [
  'base', 'sono', 'ansiedade', 'tireoide', 'intestino', 'gordura', 'cerebro', 'disposicao',
  'imunidade', 'inflamacao', 'detox', 'lipoedema', 'dislipidemia', 'diabetes',
  'antiparasitario', 'desmame', 'libido', 'fertilidade', 'musculo', 'osso',
  'hormonal', 'jejum', 'outro',
];

const ALL_TIERS: Tier[] = ['essencial', 'intermediario', 'premium'];

export default function FrascoLibrary({ onAddFrasco, onEditFrasco, onOpenFusion }: FrascoLibraryProps) {
  const { state, dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeTier, setActiveTier] = useState<Tier | null>(null);

  // Check if the active category has any frascos with tiers
  const categoryHasTiers = activeCategory
    ? state.frascos.some(f => f.category === activeCategory && f.tier)
    : false;

  // Count frascos per tier in active category
  const tierCounts = activeCategory
    ? ALL_TIERS.reduce((acc, tier) => {
        acc[tier] = state.frascos.filter(f => f.category === activeCategory && f.tier === tier).length;
        return acc;
      }, {} as Record<Tier, number>)
    : ({} as Record<Tier, number>);

  const filtered = state.frascos.filter(f => {
    const matchSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.ingredients.some(i => i.name.toLowerCase().includes(search.toLowerCase()));
    const matchCat = activeCategory ? f.category === activeCategory : true;
    const matchTier = activeTier ? f.tier === activeTier : true;
    return matchSearch && matchCat && matchTier;
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este frasco?')) {
      dispatch({ type: 'DELETE_FRASCO', payload: id });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-800">Biblioteca de Frascos</h2>
          <button
            onClick={onAddFrasco}
            className="flex items-center gap-1 bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Plus size={14} />
            Novo
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar frasco ou ingrediente..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="px-4 py-2 border-b border-gray-100 flex flex-wrap gap-1.5">
        <button
          onClick={() => { setActiveCategory(null); setActiveTier(null); }}
          className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
            activeCategory === null
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        {ALL_CATEGORIES.map(cat => {
          const count = state.frascos.filter(f => f.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => { setActiveCategory(activeCategory === cat ? null : cat); setActiveTier(null); }}
              className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors`}
              style={
                activeCategory === cat
                  ? { backgroundColor: CATEGORY_COLORS[cat], color: 'white' }
                  : { backgroundColor: `${CATEGORY_COLORS[cat]}20`, color: CATEGORY_COLORS[cat] }
              }
            >
              {CATEGORY_LABELS[cat]} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Tier sub-filters — only show when a category is selected and has tiered frascos */}
      {activeCategory && categoryHasTiers && (
        <div className="px-4 py-1.5 border-b border-gray-100 bg-gray-50 flex gap-1.5">
          <button
            onClick={() => setActiveTier(null)}
            className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
              activeTier === null
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Todos os Níveis
          </button>
          {ALL_TIERS.map(tier => {
            const count = tierCounts[tier] || 0;
            if (count === 0) return null;
            return (
              <button
                key={tier}
                onClick={() => setActiveTier(activeTier === tier ? null : tier)}
                className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors`}
                style={
                  activeTier === tier
                    ? { backgroundColor: TIER_COLORS[tier], color: 'white' }
                    : { backgroundColor: `${TIER_COLORS[tier]}15`, color: TIER_COLORS[tier], border: `1px solid ${TIER_COLORS[tier]}40` }
                }
              >
                {TIER_LABELS[tier]} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Card grid */}
      <div className="flex-1 overflow-y-auto p-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-sm">Nenhum frasco encontrado</p>
            <button
              onClick={onAddFrasco}
              className="mt-3 text-blue-600 text-sm hover:underline"
            >
              Adicionar frasco
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {filtered.map(frasco => (
              <FrascoCard
                key={frasco.id}
                frasco={frasco}
                onEdit={onEditFrasco}
                onDelete={handleDelete}
                onOpenFusion={onOpenFusion}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
