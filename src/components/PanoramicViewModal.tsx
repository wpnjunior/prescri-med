import React, { useState, useMemo } from 'react';
import { X, Search, Heart, ChevronDown, ChevronUp, Shield, Star, Gem } from 'lucide-react';
import type { Category, Tier, Frasco } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS, TIER_COLORS, TIER_LABELS } from '../types';
import { useAppContext } from '../context';
import { getDefaultPrice } from '../data/defaultPrices';
import SubstanceTooltip from './SubstanceTooltip';

interface PanoramicViewModalProps {
  onClose: () => void;
  onEditFrasco: (frasco: Frasco) => void;
}

const ALL_TIERS: Tier[] = ['essencial', 'intermediario', 'premium'];

export default function PanoramicViewModal({ onClose, onEditFrasco }: PanoramicViewModalProps) {
  const { state, dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [filterTier, setFilterTier] = useState<Tier | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [priceInput, setPriceInput] = useState('');

  // Group and filter frascos
  const grouped = useMemo(() => {
    const filtered = state.frascos.filter(f => {
      const matchSearch = !search ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.ingredients.some(i => i.name.toLowerCase().includes(search.toLowerCase()));
      const matchTier = !filterTier || f.tier === filterTier;
      return matchSearch && matchTier;
    });

    const groups: Record<string, Frasco[]> = {};
    for (const f of filtered) {
      if (!groups[f.category]) groups[f.category] = [];
      groups[f.category].push(f);
    }

    // Sort categories by count descending
    return Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  }, [state.frascos, search, filterTier]);

  const totalFiltered = grouped.reduce((sum, [, frascos]) => sum + frascos.length, 0);

  const isFavorite = (id: string) => state.favorites.some(f => f.frascoId === id);

  const toggleFavorite = (frascoId: string) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: frascoId });
  };

  const getPrice = (frasco: Frasco) => {
    const custom = state.frascoPrices.find(p => p.frascoId === frasco.id);
    return custom ? custom.price : getDefaultPrice(frasco);
  };

  const handlePriceSave = (frascoId: string) => {
    const val = parseFloat(priceInput.replace(',', '.'));
    if (!isNaN(val) && val > 0) {
      dispatch({ type: 'SET_FRASCO_PRICE', payload: { frascoId, price: Math.round(val * 100) } });
    }
    setEditingPriceId(null);
  };

  const tierIcon = (tier?: Tier) => {
    if (tier === 'premium') return <Gem size={10} />;
    if (tier === 'intermediario') return <Star size={10} />;
    return <Shield size={10} />;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-7xl h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Visão Panorâmica</h2>
              <p className="text-xs text-gray-500">{totalFiltered} frascos • {grouped.length} categorias</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Search + Tier filter */}
          <div className="flex gap-3 items-center">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou ingrediente..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => setFilterTier(null)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                  !filterTier ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {ALL_TIERS.map(tier => (
                <button
                  key={tier}
                  onClick={() => setFilterTier(filterTier === tier ? null : tier)}
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors"
                  style={
                    filterTier === tier
                      ? { backgroundColor: TIER_COLORS[tier], color: 'white' }
                      : { backgroundColor: `${TIER_COLORS[tier]}15`, color: TIER_COLORS[tier], border: `1px solid ${TIER_COLORS[tier]}40` }
                  }
                >
                  {TIER_LABELS[tier]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {grouped.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-sm">Nenhum frasco encontrado</p>
            </div>
          ) : (
            grouped.map(([category, frascos]) => (
              <div key={category} className="border-b border-gray-100 last:border-b-0">
                {/* Category header */}
                <div
                  className="sticky top-0 z-10 px-6 py-2 bg-gray-50/95 backdrop-blur-sm flex items-center gap-2"
                  style={{ borderLeft: `4px solid ${CATEGORY_COLORS[category as Category]}` }}
                >
                  <span className="text-sm font-semibold" style={{ color: CATEGORY_COLORS[category as Category] }}>
                    {CATEGORY_LABELS[category as Category]}
                  </span>
                  <span className="text-xs text-gray-400">({frascos.length})</span>
                </div>

                {/* Frascos grid */}
                <div className="px-6 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {frascos.map(frasco => {
                    const expanded = expandedId === frasco.id;
                    const fav = isFavorite(frasco.id);
                    const price = getPrice(frasco);
                    const customPrice = state.frascoPrices.find(p => p.frascoId === frasco.id);

                    return (
                      <div
                        key={frasco.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-all hover:shadow-md ${
                          expanded ? 'ring-2 ring-blue-400 bg-blue-50/30' : 'bg-white hover:bg-gray-50'
                        }`}
                        onClick={() => setExpandedId(expanded ? null : frasco.id)}
                      >
                        {/* Compact header */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              {frasco.tier && (
                                <span
                                  className="inline-flex items-center gap-0.5 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                                  style={{ backgroundColor: TIER_COLORS[frasco.tier] }}
                                >
                                  {tierIcon(frasco.tier)}
                                  {TIER_LABELS[frasco.tier].replace(/^[^ ]+ /, '')}
                                </span>
                              )}
                              <span className="text-[10px] text-gray-400">
                                {frasco.ingredients.length} ingr.
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight truncate">{frasco.name}</p>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {/* Price */}
                            {editingPriceId === frasco.id ? (
                              <input
                                type="text"
                                value={priceInput}
                                onChange={e => setPriceInput(e.target.value)}
                                onBlur={() => handlePriceSave(frasco.id)}
                                onKeyDown={e => { if (e.key === 'Enter') handlePriceSave(frasco.id); if (e.key === 'Escape') setEditingPriceId(null); }}
                                onClick={e => e.stopPropagation()}
                                className="w-16 text-xs px-1.5 py-0.5 border border-blue-300 rounded focus:outline-none"
                                autoFocus
                              />
                            ) : (
                              <span
                                onClick={e => { e.stopPropagation(); setPriceInput(price > 0 ? String(price / 100) : ''); setEditingPriceId(frasco.id); }}
                                className={`text-xs font-medium cursor-pointer hover:underline ${customPrice ? 'text-blue-600' : 'text-gray-400'}`}
                                title="Clique para editar"
                              >
                                {price > 0 ? `~R$${(price / 100).toFixed(0)}` : '—'}
                              </span>
                            )}
                            {/* Favorite */}
                            <button
                              onClick={e => { e.stopPropagation(); toggleFavorite(frasco.id); }}
                              className={`p-1 rounded transition-colors ${fav ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
                            >
                              <Heart size={14} fill={fav ? 'currentColor' : 'none'} />
                            </button>
                            {/* Expand icon */}
                            {expanded ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
                          </div>
                        </div>

                        {/* Quick preview (always show first 2 ingredients) */}
                        {!expanded && (
                          <p className="text-xs text-gray-400 mt-1 truncate">
                            {frasco.ingredients.slice(0, 2).map(i => i.name).join(', ')}
                            {frasco.ingredients.length > 2 && ` +${frasco.ingredients.length - 2}`}
                          </p>
                        )}

                        {/* Expanded detail */}
                        {expanded && (
                          <div className="mt-3 space-y-2 border-t border-gray-100 pt-2">
                            {/* All ingredients with tooltips */}
                            <div>
                              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Ingredientes</p>
                              <div className="space-y-0.5">
                                {frasco.ingredients.map((ing, i) => (
                                  <SubstanceTooltip key={i} ingredientName={ing.name}>
                                    <p className="text-xs text-gray-600 cursor-help hover:text-blue-600 transition-colors">
                                      <span className="font-medium">{ing.name}</span> <span className="text-gray-400">{ing.dose}</span>
                                    </p>
                                  </SubstanceTooltip>
                                ))}
                              </div>
                            </div>

                            {/* Posology & instructions */}
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <p className="text-[10px] font-semibold text-gray-500 uppercase">Posologia</p>
                                <p className="text-gray-600">{frasco.posology}</p>
                              </div>
                              <div>
                                <p className="text-[10px] font-semibold text-gray-500 uppercase">Quantidade</p>
                                <p className="text-gray-600">{frasco.quantity} • {frasco.duration}</p>
                              </div>
                            </div>
                            {frasco.instructions && (
                              <div>
                                <p className="text-[10px] font-semibold text-gray-500 uppercase">Instruções</p>
                                <p className="text-xs text-gray-600">{frasco.instructions}</p>
                              </div>
                            )}

                            {/* Action button */}
                            <button
                              onClick={e => { e.stopPropagation(); onEditFrasco(frasco); onClose(); }}
                              className="text-xs text-blue-600 hover:underline font-medium"
                            >
                              Editar frasco
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
