import React, { useState, useMemo } from 'react';
import { X, Search, Trash2, Edit2, ChevronUp, ChevronDown, AlertTriangle } from 'lucide-react';
import { useAppContext } from '../context';
import type { Frasco, Category } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types';

interface Props {
  onClose: () => void;
  onEditFrasco: (f: Frasco) => void;
}

const ALL_CATS: Category[] = [
  'base', 'sono', 'ansiedade', 'tireoide', 'intestino', 'gordura', 'cerebro', 'disposicao',
  'imunidade', 'inflamacao', 'detox', 'lipoedema', 'dislipidemia', 'diabetes',
  'antiparasitario', 'desmame', 'libido', 'fertilidade', 'musculo', 'osso',
  'hormonal', 'jejum', 'outro',
];

export default function FrascoManagerModal({ onClose, onEditFrasco }: Props) {
  const { state, dispatch } = useAppContext();
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState<Category | 'all'>('all');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<'name' | 'category'>('category');
  const [sortAsc, setSortAsc] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null); // single id or 'bulk'

  const filtered = useMemo(() => {
    let list = state.frascos;
    if (catFilter !== 'all') list = list.filter(f => f.category === catFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.ingredients.some(i => i.name.toLowerCase().includes(q))
      );
    }
    list = [...list].sort((a, b) => {
      const va = sortKey === 'name' ? a.name : CATEGORY_LABELS[a.category];
      const vb = sortKey === 'name' ? b.name : CATEGORY_LABELS[b.category];
      return sortAsc ? va.localeCompare(vb, 'pt') : vb.localeCompare(va, 'pt');
    });
    return list;
  }, [state.frascos, catFilter, search, sortKey, sortAsc]);

  const toggleSelect = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === filtered.length) setSelected(new Set());
    else setSelected(new Set(filtered.map(f => f.id)));
  };

  const handleSort = (key: 'name' | 'category') => {
    if (sortKey === key) setSortAsc(a => !a);
    else { setSortKey(key); setSortAsc(true); }
  };

  const doDelete = (ids: string[]) => {
    ids.forEach(id => dispatch({ type: 'DELETE_FRASCO', payload: id }));
    setSelected(new Set());
    setConfirmDelete(null);
  };

  const SortIcon = ({ k }: { k: 'name' | 'category' }) =>
    sortKey === k
      ? (sortAsc ? <ChevronUp size={12} className="inline ml-0.5" /> : <ChevronDown size={12} className="inline ml-0.5" />)
      : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col" style={{ height: '88vh' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Gerenciador de Frascos</h2>
            <p className="text-xs text-gray-500 mt-0.5">{state.frascos.length} frascos na biblioteca</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400"><X size={20} /></button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-100 flex-shrink-0 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-48">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar frasco ou ingrediente..."
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setCatFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${catFilter === 'all' ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >Todos</button>
            {ALL_CATS.map(c => (
              <button
                key={c}
                onClick={() => setCatFilter(c)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${catFilter === c ? 'text-white border-transparent' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                style={catFilter === c ? { backgroundColor: CATEGORY_COLORS[c] } : {}}
              >{CATEGORY_LABELS[c]}</button>
            ))}
          </div>

          {/* Bulk delete */}
          {selected.size > 0 && (
            <button
              onClick={() => setConfirmDelete('bulk')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Trash2 size={13} /> Excluir selecionados ({selected.size})
            </button>
          )}
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 border-b border-gray-200 z-10">
              <tr>
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={filtered.length > 0 && selected.size === filtered.length}
                    onChange={toggleAll}
                    className="rounded"
                  />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700 w-28"
                  onClick={() => handleSort('category')}>
                  Categoria <SortIcon k="category" />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-700"
                  onClick={() => handleSort('name')}>
                  Nome <SortIcon k="name" />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-48 hidden lg:table-cell">
                  Ingredientes
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-32 hidden md:table-cell">
                  Posologia
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide w-24 hidden md:table-cell">
                  Duração
                </th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide w-24">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="text-center py-12 text-gray-400 text-sm">Nenhum frasco encontrado</td></tr>
              )}
              {filtered.map(f => (
                <tr key={f.id}
                  className={`hover:bg-gray-50 transition-colors ${selected.has(f.id) ? 'bg-blue-50' : ''}`}>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(f.id)}
                      onChange={() => toggleSelect(f.id)}
                      className="rounded"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className="inline-block text-white text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: CATEGORY_COLORS[f.category] }}
                    >
                      {CATEGORY_LABELS[f.category]}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <p className="font-medium text-gray-800 text-sm leading-tight">{f.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.quantity}</p>
                  </td>
                  <td className="px-3 py-3 hidden lg:table-cell">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {f.ingredients.slice(0, 3).map(i => `${i.name} ${i.dose}`).join(' · ')}
                      {f.ingredients.length > 3 && <span className="text-gray-400"> +{f.ingredients.length - 3}</span>}
                    </p>
                  </td>
                  <td className="px-3 py-3 hidden md:table-cell">
                    <p className="text-xs text-gray-600">{f.posology}</p>
                  </td>
                  <td className="px-3 py-3 hidden md:table-cell">
                    <p className="text-xs text-gray-600">{f.duration}</p>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => { onEditFrasco(f); onClose(); }}
                        className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Editar"
                      ><Edit2 size={14} /></button>
                      <button
                        onClick={() => setConfirmDelete(f.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                        title="Excluir"
                      ><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <p className="text-xs text-gray-400">
            {filtered.length} de {state.frascos.length} frascos
            {selected.size > 0 && <span className="text-blue-600 ml-2">· {selected.size} selecionados</span>}
          </p>
          <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
            Fechar
          </button>
        </div>
      </div>

      {/* Confirm delete dialog */}
      {confirmDelete && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-red-100 rounded-full"><AlertTriangle size={20} className="text-red-600" /></div>
              <h3 className="font-semibold text-gray-800">Confirmar exclusão</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              {confirmDelete === 'bulk'
                ? `Excluir ${selected.size} frascos selecionados? Esta ação não pode ser desfeita.`
                : `Excluir "${state.frascos.find(f => f.id === confirmDelete)?.name}"? Esta ação não pode ser desfeita.`
              }
            </p>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                Cancelar
              </button>
              <button
                onClick={() => doDelete(confirmDelete === 'bulk' ? [...selected] : [confirmDelete])}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
