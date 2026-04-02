import React, { useState, useMemo } from 'react';
import { FlaskConical, Search, Check, X, AlertTriangle, Beaker } from 'lucide-react';
import { useAppContext } from '../context';
import type { Category, Tier, Frasco, Ingredient } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS, TIER_LABELS, TIER_COLORS } from '../types';

interface Props {
  open: boolean;
  onClose: () => void;
  preSelectedIds?: string[];
}

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];
const ALL_TIERS = Object.keys(TIER_LABELS) as Tier[];

const FOOD_INGREDIENTS = [
  'Vitamina A', 'Vitamina D', 'Vitamina E', 'Vitamina K',
  'CoQ10', 'Ubiquinol', 'Curcum', 'CurQfen', 'Piperina',
  'Resveratrol', 'ResviTech', 'Omega', 'DHA', 'EPA', 'ADEK',
  'oleoso', 'lipossolúvel', 'Pycnogenol', 'Astaxantina',
];

const FASTING_INGREDIENTS = [
  'Glutamina', 'NAC', 'Glicina', 'Taurina',
  'Probiótico', 'Prebiótico', 'PHGG', 'Inulina',
  'FOS', 'Berberina', 'Aloe', 'Colágeno',
];

function matchesAny(ingredientName: string, keywords: string[]): boolean {
  const lower = ingredientName.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

export default function FrascoFusionModal({ open, onClose, preSelectedIds = [] }: Props) {
  const { state, dispatch } = useAppContext();

  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [initialized, setInitialized] = useState(false);

  // Apply pre-selected IDs when modal opens
  React.useEffect(() => {
    if (open && preSelectedIds.length > 0 && !initialized) {
      setSelectedIds(new Set(preSelectedIds));
      setInitialized(true);
    }
    if (!open) {
      setInitialized(false);
      setSelectedIds(new Set());
      setSearch('');
      setNameEdited(false);
      setFusedName('');
    }
  }, [open, preSelectedIds]);
  const [fusedName, setFusedName] = useState('');
  const [category, setCategory] = useState<Category>('outro');
  const [tier, setTier] = useState<Tier>('essencial');
  const [posology, setPosology] = useState('1 cápsula');
  const [quantity, setQuantity] = useState('30 cápsulas');
  const [nameEdited, setNameEdited] = useState(false);

  // ── Filtered frasco list ────────────────────────────────────────────────
  const filtered = useMemo(() => {
    if (!search.trim()) return state.frascos;
    const q = search.toLowerCase();
    return state.frascos.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.ingredients.some(i => i.name.toLowerCase().includes(q))
    );
  }, [state.frascos, search]);

  // ── Selected frascos ────────────────────────────────────────────────────
  const selectedFrascos = useMemo(
    () => state.frascos.filter(f => selectedIds.has(f.id)),
    [state.frascos, selectedIds],
  );

  // ── Auto-generate name ──────────────────────────────────────────────────
  const autoName = useMemo(() => {
    if (selectedFrascos.length === 0) return '';
    return 'Fusão: ' + selectedFrascos.map(f => f.name).join(' + ');
  }, [selectedFrascos]);

  const displayName = nameEdited ? fusedName : autoName;

  // ── Merge ingredients (deduplicate by name, keep highest dose) ──────────
  const mergedIngredients = useMemo(() => {
    const map = new Map<string, { ingredient: Ingredient; count: number }>();
    for (const frasco of selectedFrascos) {
      for (const ing of frasco.ingredients) {
        const key = ing.name.toLowerCase();
        const existing = map.get(key);
        if (existing) {
          existing.count += 1;
          // keep whichever dose string is "larger" (simple heuristic)
          const existingNum = parseFloat(existing.ingredient.dose) || 0;
          const newNum = parseFloat(ing.dose) || 0;
          if (newNum > existingNum) {
            existing.ingredient = { ...ing };
          }
        } else {
          map.set(key, { ingredient: { ...ing }, count: 1 });
        }
      }
    }
    return Array.from(map.values());
  }, [selectedFrascos]);

  // ── Food / fasting notes ────────────────────────────────────────────────
  const foodIngredients = mergedIngredients
    .filter(m => matchesAny(m.ingredient.name, FOOD_INGREDIENTS))
    .map(m => m.ingredient.name);

  const fastingIngredients = mergedIngredients
    .filter(m => matchesAny(m.ingredient.name, FASTING_INGREDIENTS))
    .map(m => m.ingredient.name);

  // ── Handlers ────────────────────────────────────────────────────────────
  const toggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleNameChange = (val: string) => {
    setFusedName(val);
    setNameEdited(true);
  };

  const canSave = selectedIds.size >= 2 && displayName.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    const newFrasco: Frasco = {
      id: `frasco-fusion-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: displayName.trim(),
      category,
      tier,
      ingredients: mergedIngredients.map(m => m.ingredient),
      posology,
      quantity,
      duration: '30 dias',
      instructions: [
        foodIngredients.length > 0 ? 'Melhor com comida (gordura).' : '',
        fastingIngredients.length > 0 ? 'Componentes ideais em jejum presentes.' : '',
      ].filter(Boolean).join(' '),
    };
    dispatch({ type: 'ADD_FRASCO', payload: newFrasco });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-all">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl flex flex-col" style={{ height: '90vh' }}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl">
              <FlaskConical size={22} className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">⚗️ Fundir Frascos</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Selecione 2 ou mais frascos para criar uma fusão
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <div className="flex flex-1 overflow-hidden">

          {/* LEFT SIDE — Frasco list (40%) */}
          <div className="w-2/5 border-r border-gray-100 flex flex-col">
            {/* Search */}
            <div className="px-4 py-3 border-b border-gray-100 flex-shrink-0">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Buscar frasco ou ingrediente..."
                  className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {selectedIds.size} selecionado(s) de {state.frascos.length}
              </p>
            </div>

            {/* List */}
            <div className="flex-1 overflow-auto">
              {filtered.length === 0 && (
                <p className="text-center py-12 text-gray-400 text-sm">Nenhum frasco encontrado</p>
              )}
              {filtered.map(f => {
                const isSelected = selectedIds.has(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => toggleSelect(f.id)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-50 transition-colors flex items-start gap-3 ${
                      isSelected ? 'bg-purple-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Checkbox */}
                    <div className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-purple-600 border-purple-600'
                        : 'border-gray-300'
                    }`}>
                      {isSelected && <Check size={13} className="text-white" />}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-800 truncate">{f.name}</p>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span
                          className="inline-block text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: CATEGORY_COLORS[f.category] }}
                        >
                          {CATEGORY_LABELS[f.category]}
                        </span>
                        {f.tier && (
                          <span
                            className="inline-block text-white text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                            style={{ backgroundColor: TIER_COLORS[f.tier] }}
                          >
                            {TIER_LABELS[f.tier]}
                          </span>
                        )}
                        <span className="text-[10px] text-gray-400">
                          {f.ingredients.length} ingrediente{f.ingredients.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE — Fusion preview (60%) */}
          <div className="w-3/5 flex flex-col overflow-auto">
            <div className="p-6 space-y-5">

              {/* Empty state */}
              {selectedIds.size === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Beaker size={48} className="mb-4 opacity-40" />
                  <p className="text-sm font-medium">Selecione frascos para iniciar a fusão</p>
                  <p className="text-xs mt-1">Mínimo de 2 frascos necessários</p>
                </div>
              )}

              {selectedIds.size > 0 && (
                <>
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Nome do novo frasco
                    </label>
                    <input
                      value={displayName}
                      onChange={e => handleNameChange(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Nome da fusão..."
                    />
                  </div>

                  {/* Category + Tier + Posology + Quantity */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Categoria
                      </label>
                      <select
                        value={category}
                        onChange={e => setCategory(e.target.value as Category)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {ALL_CATEGORIES.map(c => (
                          <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Tier
                      </label>
                      <select
                        value={tier}
                        onChange={e => setTier(e.target.value as Tier)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {ALL_TIERS.map(t => (
                          <option key={t} value={t}>{TIER_LABELS[t]}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Posologia
                      </label>
                      <input
                        value={posology}
                        onChange={e => setPosology(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Ex: 1 cápsula"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Quantidade
                      </label>
                      <input
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Ex: 30 cápsulas"
                      />
                    </div>
                  </div>

                  {/* Merged ingredients */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Ingredientes fundidos ({mergedIngredients.length})
                    </label>
                    {mergedIngredients.length === 0 ? (
                      <p className="text-sm text-gray-400">Nenhum ingrediente</p>
                    ) : (
                      <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 max-h-52 overflow-auto">
                        {mergedIngredients.map((m, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between px-3 py-2 text-sm ${
                              m.count > 1 ? 'bg-yellow-50' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-gray-800 font-medium">{m.ingredient.name}</span>
                              {m.count > 1 && (
                                <span className="text-[10px] font-semibold bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded-full">
                                  duplicado x{m.count}
                                </span>
                              )}
                            </div>
                            <span className="text-gray-500 text-xs font-mono">{m.ingredient.dose}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Food note */}
                  {foodIngredients.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle size={14} className="text-amber-600" />
                        <span className="text-xs font-semibold text-amber-800">
                          ⚠️ Melhor com comida:
                        </span>
                      </div>
                      <p className="text-xs text-amber-700 leading-relaxed">
                        {foodIngredients.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* Fasting note */}
                  {fastingIngredients.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Check size={14} className="text-green-600" />
                        <span className="text-xs font-semibold text-green-800">
                          ✅ Ideal em jejum:
                        </span>
                      </div>
                      <p className="text-xs text-green-700 leading-relaxed">
                        {fastingIngredients.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* Warning if less than 2 */}
                  {selectedIds.size < 2 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                      <AlertTriangle size={14} className="text-red-500" />
                      <span className="text-xs text-red-700">Selecione pelo menos 2 frascos para fundir.</span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Save button — sticky at the bottom */}
            {selectedIds.size > 0 && (
              <div className="mt-auto px-6 py-4 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
                <p className="text-xs text-gray-400">
                  {selectedIds.size} frasco(s) selecionado(s) · {mergedIngredients.length} ingrediente(s)
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!canSave}
                    className={`px-5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                      canSave
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <FlaskConical size={15} />
                    Criar Fusão
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
