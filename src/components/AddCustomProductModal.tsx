import React, { useState } from 'react';
import { X, Link, ShoppingBag, Plus, Trash2, Package } from 'lucide-react';
import type { Category, FrascoSource, Frasco, Ingredient } from '../types';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../types';
import { useAppContext } from '../context';

// ── Store options for the user to pick ─────────────────────────────────────
const STORE_OPTIONS: { key: FrascoSource; label: string; color: string; bg: string; icon: string }[] = [
  { key: 'growth',       label: 'Growth Clinical', color: '#D97706', bg: '#FEF3C7', icon: '💪' },
  { key: 'doctorsfirst', label: 'DoctorsFirst',    color: '#0065B3', bg: '#DBEAFE', icon: '🩺' },
  { key: 'farmacia',     label: 'Farmácia',        color: '#059669', bg: '#D1FAE5', icon: '🏪' },
  { key: 'custom',       label: 'Outro / Custom',  color: '#6B7280', bg: '#F3F4F6', icon: '📦' },
];

// ── Categories available for store products ────────────────────────────────
const PRODUCT_CATEGORIES: Category[] = [
  'sono', 'ansiedade', 'tireoide', 'intestino', 'gordura', 'cerebro',
  'hormonal', 'imunidade', 'lipoedema', 'dislipidemia', 'diabetes',
  'disposicao', 'inflamacao', 'detox', 'antiparasitario', 'desmame',
  'libido', 'fertilidade', 'musculo', 'osso', 'base', 'jejum', 'farmacia', 'outro',
];

interface Props {
  onClose: () => void;
}

export default function AddCustomProductModal({ onClose }: Props) {
  const { dispatch } = useAppContext();

  // ── Form state ─────────────────────────────────────────────────────────
  const [name, setName] = useState('');
  const [purchaseUrl, setPurchaseUrl] = useState('');
  const [store, setStore] = useState<FrascoSource>('growth');
  const [category, setCategory] = useState<Category>('outro');
  const [indicacoes, setIndicacoes] = useState('');
  const [horarioUso, setHorarioUso] = useState('');
  const [posology, setPosology] = useState('1 cápsula ao dia');
  const [quantity, setQuantity] = useState('30 cápsulas');
  const [duration, setDuration] = useState('30 dias');
  const [instructions, setInstructions] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: '', dose: '' }]);

  const addIngredient = () => setIngredients([...ingredients, { name: '', dose: '' }]);
  const removeIngredient = (i: number) => setIngredients(ingredients.filter((_, idx) => idx !== i));
  const updateIngredient = (i: number, field: 'name' | 'dose', value: string) => {
    const copy = [...ingredients];
    copy[i] = { ...copy[i], [field]: value };
    setIngredients(copy);
  };

  // ── Save ───────────────────────────────────────────────────────────────
  const handleSave = () => {
    if (!name.trim()) { alert('Preencha o nome do produto'); return; }

    const frasco: Frasco = {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: name.trim(),
      category,
      source: store,
      purchaseUrl: purchaseUrl.trim() || undefined,
      indicacoes: indicacoes.trim() || undefined,
      horarioUso: horarioUso.trim() || undefined,
      posology: posology.trim(),
      quantity: quantity.trim(),
      duration: duration.trim(),
      instructions: instructions.trim(),
      ingredients: ingredients.filter(i => i.name.trim()),
    };

    dispatch({ type: 'ADD_FRASCO', payload: frasco });

    // Optionally set price
    if (price.trim()) {
      const cents = Math.round(parseFloat(price.replace(',', '.')) * 100);
      if (!isNaN(cents) && cents > 0) {
        dispatch({ type: 'SET_FRASCO_PRICE', payload: { frascoId: frasco.id, price: cents } });
      }
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-green-600" />
            <h2 className="text-lg font-semibold text-gray-800">Adicionar Produto com Link</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* ── Body ─────────────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">

          {/* Store selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loja / Origem</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {STORE_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setStore(opt.key)}
                  className="text-sm px-3 py-2.5 rounded-lg font-semibold transition-all text-center border-2"
                  style={
                    store === opt.key
                      ? { backgroundColor: opt.color, color: 'white', borderColor: opt.color }
                      : { backgroundColor: opt.bg, color: opt.color, borderColor: 'transparent' }
                  }
                >
                  <span className="text-lg block mb-0.5">{opt.icon}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ex: Vitamina D3 10.000UI"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Purchase URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Link size={14} className="inline mr-1" />
              Link de Compra
            </label>
            <input
              type="url"
              value={purchaseUrl}
              onChange={e => setPurchaseUrl(e.target.value)}
              placeholder="https://www.exemplo.com/produto"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-green-700"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-1">
              {PRODUCT_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className="text-xs px-2.5 py-1 rounded-full font-medium transition-colors"
                  style={
                    category === cat
                      ? { backgroundColor: CATEGORY_COLORS[cat], color: 'white' }
                      : { backgroundColor: `${CATEGORY_COLORS[cat]}20`, color: CATEGORY_COLORS[cat] }
                  }
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preco (R$)</label>
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Ex: 89,90"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-[200px]"
            />
          </div>

          {/* Indicacoes + Horario */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Indicacoes</label>
              <textarea
                value={indicacoes}
                onChange={e => setIndicacoes(e.target.value)}
                placeholder="Saude ossea, imunidade..."
                rows={2}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horario de Uso</label>
              <input
                type="text"
                value={horarioUso}
                onChange={e => setHorarioUso(e.target.value)}
                placeholder="Manha com cafe da manha"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Posology, Quantity, Duration */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Posologia</label>
              <input
                type="text"
                value={posology}
                onChange={e => setPosology(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
              <input
                type="text"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duracao</label>
              <input
                type="text"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instrucoes</label>
            <input
              type="text"
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              placeholder="Tomar com refeicao"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Ingredients */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Ingredientes (opcional)</label>
              <button
                type="button"
                onClick={addIngredient}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                <Plus size={12} /> Adicionar
              </button>
            </div>
            <div className="space-y-2 max-h-36 overflow-y-auto">
              {ingredients.map((ing, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={ing.name}
                    onChange={e => updateIngredient(i, 'name', e.target.value)}
                    placeholder="Nome (ex: Vitamina D3)"
                    className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={ing.dose}
                    onChange={e => updateIngredient(i, 'dose', e.target.value)}
                    placeholder="Dose (ex: 10000UI)"
                    className="w-32 border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredient(i)}
                      className="text-red-400 hover:text-red-600 p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            <Package size={12} className="inline mr-1" />
            O produto ficara disponivel na aba da loja selecionada
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-sm px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="text-sm px-5 py-2 rounded-lg text-white font-semibold transition-colors flex items-center gap-1.5"
              style={{ backgroundColor: STORE_OPTIONS.find(s => s.key === store)?.color || '#3B82F6' }}
            >
              <ShoppingBag size={14} />
              Adicionar Produto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
