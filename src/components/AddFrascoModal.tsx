import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Sparkles } from 'lucide-react';
import type { Category, Frasco, Ingredient } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types';
import { useAppContext } from '../context';
import { parseCompoundingText } from '../utils/parseText';

interface AddFrascoModalProps {
  editingFrasco?: Frasco | null;
  onClose: () => void;
}

const ALL_CATEGORIES: Category[] = [
  'sono', 'ansiedade', 'tireoide', 'intestino', 'gordura', 'cerebro', 'hormonal', 'imunidade', 'outro'
];

function generateId(): string {
  return `frasco-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

const emptyForm = (): {
  name: string;
  category: Category;
  ingredients: Ingredient[];
  posology: string;
  quantity: string;
  duration: string;
  instructions: string;
} => ({
  name: '',
  category: 'outro',
  ingredients: [{ name: '', dose: '' }],
  posology: '',
  quantity: '',
  duration: '',
  instructions: '',
});

export default function AddFrascoModal({ editingFrasco, onClose }: AddFrascoModalProps) {
  const { dispatch } = useAppContext();
  const [rawText, setRawText] = useState('');
  const [form, setForm] = useState(emptyForm());
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingFrasco) {
      setForm({
        name: editingFrasco.name,
        category: editingFrasco.category,
        ingredients: editingFrasco.ingredients.length > 0
          ? editingFrasco.ingredients
          : [{ name: '', dose: '' }],
        posology: editingFrasco.posology,
        quantity: editingFrasco.quantity,
        duration: editingFrasco.duration,
        instructions: editingFrasco.instructions,
      });
    }
  }, [editingFrasco]);

  const handleAnalyze = () => {
    if (!rawText.trim()) return;
    const parsed = parseCompoundingText(rawText);
    setForm(prev => ({
      ...prev,
      name: parsed.name || prev.name,
      ingredients: parsed.ingredients.length > 0 ? parsed.ingredients : prev.ingredients,
      posology: parsed.posology || prev.posology,
      quantity: parsed.quantity || prev.quantity,
      duration: parsed.duration || prev.duration,
      instructions: parsed.instructions || prev.instructions,
    }));
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const updated = form.ingredients.map((ing, i) =>
      i === index ? { ...ing, [field]: value } : ing
    );
    setForm({ ...form, ingredients: updated });
  };

  const addIngredient = () => {
    setForm({ ...form, ingredients: [...form.ingredients, { name: '', dose: '' }] });
  };

  const removeIngredient = (index: number) => {
    if (form.ingredients.length <= 1) return;
    setForm({ ...form, ingredients: form.ingredients.filter((_, i) => i !== index) });
  };

  const handleSave = () => {
    if (!form.name.trim()) {
      setError('Nome do frasco é obrigatório.');
      return;
    }
    if (form.ingredients.some(i => !i.name.trim())) {
      setError('Todos os ingredientes precisam ter nome.');
      return;
    }

    const frasco: Frasco = {
      id: editingFrasco ? editingFrasco.id : generateId(),
      name: form.name.trim(),
      category: form.category,
      ingredients: form.ingredients.filter(i => i.name.trim()),
      posology: form.posology,
      quantity: form.quantity,
      duration: form.duration,
      instructions: form.instructions,
    };

    if (editingFrasco) {
      dispatch({ type: 'UPDATE_FRASCO', payload: frasco });
    } else {
      dispatch({ type: 'ADD_FRASCO', payload: frasco });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">
            {editingFrasco ? 'Editar Frasco' : 'Novo Frasco'}
          </h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 text-gray-500">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {/* Raw text parse section */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm font-medium text-blue-800 mb-2 flex items-center gap-1">
              <Sparkles size={14} /> Analisar texto da farmácia
            </p>
            <textarea
              className="w-full text-sm border border-blue-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
              rows={5}
              placeholder={`Cole aqui o texto da farmácia de manipulação...\n\nExemplo:\nMelatonina 5mg\nGABA 500mg\nPostologia: 1 cápsula\nQuantidade: 30 cápsulas`}
              value={rawText}
              onChange={e => setRawText(e.target.value)}
            />
            <button
              onClick={handleAnalyze}
              disabled={!rawText.trim()}
              className="mt-2 flex items-center gap-1.5 bg-blue-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Sparkles size={14} /> Analisar texto
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Frasco *</label>
            <input
              type="text"
              value={form.name}
              onChange={e => { setForm({ ...form, name: e.target.value }); setError(''); }}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Frasco Sono Reparador"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Categoria *</label>
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setForm({ ...form, category: cat })}
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-all"
                  style={
                    form.category === cat
                      ? { backgroundColor: CATEGORY_COLORS[cat], color: 'white', boxShadow: `0 0 0 2px ${CATEGORY_COLORS[cat]}` }
                      : { backgroundColor: `${CATEGORY_COLORS[cat]}20`, color: CATEGORY_COLORS[cat] }
                  }
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ingredientes *</label>
            <div className="space-y-2">
              {form.ingredients.map((ing, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <input
                    type="text"
                    value={ing.name}
                    onChange={e => handleIngredientChange(i, 'name', e.target.value)}
                    placeholder="Nome da substância"
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={ing.dose}
                    onChange={e => handleIngredientChange(i, 'dose', e.target.value)}
                    placeholder="Dose (ex: 500mg)"
                    className="w-32 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => removeIngredient(i)}
                    disabled={form.ingredients.length <= 1}
                    className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 disabled:opacity-30 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addIngredient}
              className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
            >
              <Plus size={14} /> Adicionar ingrediente
            </button>
          </div>

          {/* Posology & Quantity */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Posologia</label>
              <input
                type="text"
                value={form.posology}
                onChange={e => setForm({ ...form, posology: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 1 cápsula"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
              <input
                type="text"
                value={form.quantity}
                onChange={e => setForm({ ...form, quantity: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 30 cápsulas"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duração</label>
            <input
              type="text"
              value={form.duration}
              onChange={e => setForm({ ...form, duration: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: 30 dias"
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instruções / Modo de uso</label>
            <textarea
              value={form.instructions}
              onChange={e => setForm({ ...form, instructions: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
              placeholder="Ex: Tomar 30 minutos antes de dormir"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            {editingFrasco ? 'Salvar alterações' : 'Adicionar frasco'}
          </button>
        </div>
      </div>
    </div>
  );
}
