import React, { useState } from 'react';
import {
  X, Link as LinkIcon, ShoppingBag, Plus, Trash2, Package,
  ClipboardPaste, FlaskConical, FileText, Sparkles, Check, AlertCircle,
} from 'lucide-react';
import type { Category, FrascoSource, Frasco, Ingredient } from '../types';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../types';
import { useAppContext } from '../context';

// ── Constants ──────────────────────────────────────────────────────────────
const STORE_OPTIONS: { key: FrascoSource; label: string; color: string; bg: string; icon: string }[] = [
  { key: 'growth',       label: 'Growth',      color: '#D97706', bg: '#FEF3C7', icon: '💪' },
  { key: 'doctorsfirst', label: 'DoctorsFirst', color: '#0065B3', bg: '#DBEAFE', icon: '🩺' },
  { key: 'farmacia',     label: 'Farmácia',     color: '#059669', bg: '#D1FAE5', icon: '🏪' },
  { key: 'custom',       label: 'Outro',        color: '#6B7280', bg: '#F3F4F6', icon: '📦' },
];

const PRODUCT_CATEGORIES: Category[] = [
  'sono', 'ansiedade', 'tireoide', 'intestino', 'gordura', 'cerebro',
  'hormonal', 'imunidade', 'lipoedema', 'dislipidemia', 'diabetes',
  'disposicao', 'inflamacao', 'detox', 'antiparasitario', 'desmame',
  'libido', 'fertilidade', 'musculo', 'osso', 'base', 'jejum', 'farmacia', 'outro',
];

type TabMode = 'link' | 'frasco' | 'manual';

const TABS: { key: TabMode; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
  { key: 'link',   label: 'Colar Link',   icon: <LinkIcon size={16} />,      color: '#059669', desc: 'Cole o link do produto e ele vira um item com botão de compra' },
  { key: 'frasco', label: 'Colar Frasco',  icon: <FlaskConical size={16} />,  color: '#8B5CF6', desc: 'Cole o texto do frasco e os ingredientes são extraídos automaticamente' },
  { key: 'manual', label: 'Manual',        icon: <FileText size={16} />,      color: '#3B82F6', desc: 'Preencha campo por campo' },
];

// ── Ingredient parser ──────────────────────────────────────────────────────
function parseIngredients(text: string): Ingredient[] {
  const lines = text
    .split(/\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0);

  const results: Ingredient[] = [];
  for (const line of lines) {
    // Try multiple patterns
    let match: RegExpMatchArray | null;

    // Pattern 1: "Nome - dose" or "Nome – dose"
    match = line.match(/^(.+?)\s*[-–—]\s*([\d][^\n]*)$/);
    if (match) { results.push({ name: match[1].trim(), dose: match[2].trim() }); continue; }

    // Pattern 2: "Nome dose" where dose starts with a number
    // e.g. "Vitamina D3 10.000UI" or "L-Glutamina 5.000mg"
    match = line.match(/^(.+?)\s+([\d][\d.,]*\s*(?:mg|g|mcg|µg|UI|IU|ml|un|caps?|comp|%|billion|bilhões?|milhões?|kcal|cal|ppm)[\w/]*(?:\s*[\w()®]*)*)\s*$/i);
    if (match) { results.push({ name: match[1].trim(), dose: match[2].trim() }); continue; }

    // Pattern 3: "Nome .......... dose" (dotted separator)
    match = line.match(/^(.+?)\s*[.]{2,}\s*(.+)$/);
    if (match) { results.push({ name: match[1].trim(), dose: match[2].trim() }); continue; }

    // Pattern 4: "Nome: dose"
    match = line.match(/^(.+?):\s*(.+)$/);
    if (match) { results.push({ name: match[1].trim(), dose: match[2].trim() }); continue; }

    // Pattern 5: Tab separated "Nome\tdose"
    match = line.match(/^(.+?)\t+(.+)$/);
    if (match) { results.push({ name: match[1].trim(), dose: match[2].trim() }); continue; }

    // Pattern 6: "(dose) Nome" — some formats put dose first
    match = line.match(/^\(?([\d][\d.,]*\s*(?:mg|g|mcg|µg|UI|IU|ml)[\w/]*)\)?\s+(.+)$/i);
    if (match) { results.push({ name: match[2].trim(), dose: match[1].trim() }); continue; }

    // Fallback: entire line as ingredient name, no dose
    // Skip lines that look like headers/titles (very short or all caps instruction-like)
    const clean = line.replace(/^[-•*·▪◦►→]\s*/, '').replace(/^\d+[.)]\s*/, '');
    if (clean.length > 1) {
      results.push({ name: clean, dose: '' });
    }
  }
  return results;
}

// Try to extract a frasco name from pasted text
function extractFrascoName(text: string): string {
  const lines = text.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);
  // First line might be the title if it's short and doesn't look like an ingredient
  if (lines.length > 0) {
    const first = lines[0];
    const looksLikeIngredient = /\d+\s*(mg|g|mcg|µg|UI|IU|ml)/i.test(first);
    if (!looksLikeIngredient && first.length < 80) {
      return first.replace(/^[-•*·]\s*/, '').replace(/^\d+[.)]\s*/, '');
    }
  }
  return '';
}

interface Props {
  onClose: () => void;
}

export default function AddCustomProductModal({ onClose }: Props) {
  const { dispatch } = useAppContext();
  const [tab, setTab] = useState<TabMode>('link');

  // ── Link tab state ─────────────────────────────────────────────────────
  const [linkUrl, setLinkUrl] = useState('');
  const [linkName, setLinkName] = useState('');
  const [linkStore, setLinkStore] = useState<FrascoSource>('growth');
  const [linkCategory, setLinkCategory] = useState<Category>('outro');
  const [linkSaved, setLinkSaved] = useState<string[]>([]);

  // ── Frasco text tab state ──────────────────────────────────────────────
  const [frascoText, setFrascoText] = useState('');
  const [frascoName, setFrascoName] = useState('');
  const [frascoCategory, setFrascoCategory] = useState<Category>('outro');
  const [frascoPosology, setFrascoPosology] = useState('1 cápsula ao dia');
  const [frascoQuantity, setFrascoQuantity] = useState('30 cápsulas');
  const [frascoDuration, setFrascoDuration] = useState('30 dias');
  const [frascoInstructions, setFrascoInstructions] = useState('');
  const [parsedIngredients, setParsedIngredients] = useState<Ingredient[]>([]);
  const [frascoParsed, setFrascoParsed] = useState(false);
  const [frascoSaved, setFrascoSaved] = useState(false);

  // ── Manual tab state ───────────────────────────────────────────────────
  const [manName, setManName] = useState('');
  const [manUrl, setManUrl] = useState('');
  const [manStore, setManStore] = useState<FrascoSource>('growth');
  const [manCategory, setManCategory] = useState<Category>('outro');
  const [manIndicacoes, setManIndicacoes] = useState('');
  const [manHorario, setManHorario] = useState('');
  const [manPosology, setManPosology] = useState('1 cápsula ao dia');
  const [manQuantity, setManQuantity] = useState('30 cápsulas');
  const [manDuration, setManDuration] = useState('30 dias');
  const [manInstructions, setManInstructions] = useState('');
  const [manPrice, setManPrice] = useState('');
  const [manIngredients, setManIngredients] = useState<Ingredient[]>([{ name: '', dose: '' }]);

  // ── Handlers ───────────────────────────────────────────────────────────

  const handleSaveLink = () => {
    if (!linkName.trim()) { alert('Preencha o nome do produto'); return; }
    const frasco: Frasco = {
      id: `link-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: linkName.trim(),
      category: linkCategory,
      source: linkStore,
      purchaseUrl: linkUrl.trim() || undefined,
      posology: '1 cápsula ao dia',
      quantity: '30 cápsulas',
      duration: '30 dias',
      instructions: '',
      ingredients: [],
    };
    dispatch({ type: 'ADD_FRASCO', payload: frasco });
    setLinkSaved(prev => [...prev, linkName.trim()]);
    setLinkName('');
    setLinkUrl('');
  };

  const handleParseText = () => {
    const parsed = parseIngredients(frascoText);
    setParsedIngredients(parsed);
    setFrascoParsed(true);
    // Try to extract name from first line
    const extractedName = extractFrascoName(frascoText);
    if (extractedName && !frascoName) {
      setFrascoName(extractedName);
      // Remove the first line from ingredients if it was used as name
      if (parsed.length > 0 && parsed[0].name === extractedName && !parsed[0].dose) {
        setParsedIngredients(parsed.slice(1));
      }
    }
  };

  const handleSaveFrasco = () => {
    if (!frascoName.trim()) { alert('Preencha o nome do frasco'); return; }
    if (parsedIngredients.length === 0) { alert('Nenhum ingrediente encontrado. Cole o texto e clique em "Extrair".'); return; }
    const frasco: Frasco = {
      id: `text-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: frascoName.trim(),
      category: frascoCategory,
      source: 'manipulado',
      posology: frascoPosology.trim(),
      quantity: frascoQuantity.trim(),
      duration: frascoDuration.trim(),
      instructions: frascoInstructions.trim(),
      ingredients: parsedIngredients.filter(i => i.name.trim()),
    };
    dispatch({ type: 'ADD_FRASCO', payload: frasco });
    setFrascoSaved(true);
    setTimeout(() => {
      setFrascoText('');
      setFrascoName('');
      setParsedIngredients([]);
      setFrascoParsed(false);
      setFrascoSaved(false);
    }, 1500);
  };

  const handleSaveManual = () => {
    if (!manName.trim()) { alert('Preencha o nome do produto'); return; }
    const frasco: Frasco = {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: manName.trim(),
      category: manCategory,
      source: manStore,
      purchaseUrl: manUrl.trim() || undefined,
      indicacoes: manIndicacoes.trim() || undefined,
      horarioUso: manHorario.trim() || undefined,
      posology: manPosology.trim(),
      quantity: manQuantity.trim(),
      duration: manDuration.trim(),
      instructions: manInstructions.trim(),
      ingredients: manIngredients.filter(i => i.name.trim()),
    };
    dispatch({ type: 'ADD_FRASCO', payload: frasco });
    if (manPrice.trim()) {
      const cents = Math.round(parseFloat(manPrice.replace(',', '.')) * 100);
      if (!isNaN(cents) && cents > 0) {
        dispatch({ type: 'SET_FRASCO_PRICE', payload: { frascoId: frasco.id, price: cents } });
      }
    }
    onClose();
  };

  // ── Shared UI helpers ──────────────────────────────────────────────────

  const CategoryPicker = ({ value, onChange }: { value: Category; onChange: (c: Category) => void }) => (
    <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1">
      {PRODUCT_CATEGORIES.map(cat => (
        <button key={cat} type="button" onClick={() => onChange(cat)}
          className="text-xs px-2 py-0.5 rounded-full font-medium transition-colors"
          style={value === cat
            ? { backgroundColor: CATEGORY_COLORS[cat], color: 'white' }
            : { backgroundColor: `${CATEGORY_COLORS[cat]}20`, color: CATEGORY_COLORS[cat] }
          }
        >{CATEGORY_LABELS[cat]}</button>
      ))}
    </div>
  );

  const StorePicker = ({ value, onChange }: { value: FrascoSource; onChange: (s: FrascoSource) => void }) => (
    <div className="grid grid-cols-4 gap-1.5">
      {STORE_OPTIONS.map(opt => (
        <button key={opt.key} type="button" onClick={() => onChange(opt.key)}
          className="text-xs px-2 py-2 rounded-lg font-semibold transition-all text-center border-2"
          style={value === opt.key
            ? { backgroundColor: opt.color, color: 'white', borderColor: opt.color }
            : { backgroundColor: opt.bg, color: opt.color, borderColor: 'transparent' }
          }
        >{opt.icon} {opt.label}</button>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div className="px-6 pt-4 pb-0 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-green-600" />
              <h2 className="text-lg font-semibold text-gray-800">Adicionar Produto</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-all relative -mb-px"
                style={tab === t.key
                  ? { backgroundColor: 'white', color: t.color, borderBottom: '2px solid white', boxShadow: '0 -2px 6px rgba(0,0,0,0.05)' }
                  : { backgroundColor: '#F9FAFB', color: '#9CA3AF' }
                }
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab description ──────────────────────────────────────────────── */}
        <div className="px-6 pt-3 pb-1">
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <Sparkles size={12} />
            {TABS.find(t => t.key === tab)?.desc}
          </p>
        </div>

        {/* ── Body ─────────────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-3 space-y-4">

          {/* ═══════════════════════════════════════════════════════════════════
              TAB 1: COLAR LINK
             ═══════════════════════════════════════════════════════════════════ */}
          {tab === 'link' && (
            <>
              {/* URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <LinkIcon size={14} className="inline mr-1 text-green-500" />
                  Link do Produto
                </label>
                <input type="url" value={linkUrl} onChange={e => setLinkUrl(e.target.value)}
                  placeholder="Cole aqui o link do produto... https://www.exemplo.com/produto"
                  className="w-full border-2 border-green-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-400 font-mono text-green-700 bg-green-50/50"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto *</label>
                <input type="text" value={linkName} onChange={e => setLinkName(e.target.value)}
                  placeholder="Ex: Vitamina D3 10.000UI — Growth Clinical"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Store */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Loja</label>
                <StorePicker value={linkStore} onChange={setLinkStore} />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Categoria</label>
                <CategoryPicker value={linkCategory} onChange={setLinkCategory} />
              </div>

              {/* Save button */}
              <button onClick={handleSaveLink}
                className="w-full py-2.5 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                style={{ backgroundColor: STORE_OPTIONS.find(s => s.key === linkStore)?.color || '#059669' }}
              >
                <ShoppingBag size={16} />
                Salvar Produto com Link
              </button>

              {/* Saved list */}
              {linkSaved.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-700 mb-1.5 flex items-center gap-1">
                    <Check size={14} /> Produtos adicionados nesta sessão:
                  </p>
                  <div className="space-y-1">
                    {linkSaved.map((n, i) => (
                      <p key={i} className="text-xs text-green-600 flex items-center gap-1">
                        <span className="w-4 h-4 bg-green-200 rounded-full flex items-center justify-center text-green-800 text-[10px] font-bold">{i + 1}</span>
                        {n}
                      </p>
                    ))}
                  </div>
                  <p className="text-[10px] text-green-500 mt-2">Continue colando mais links ou feche para usar na prescrição</p>
                </div>
              )}
            </>
          )}

          {/* ═══════════════════════════════════════════════════════════════════
              TAB 2: COLAR FRASCO (TEXT PARSER)
             ═══════════════════════════════════════════════════════════════════ */}
          {tab === 'frasco' && (
            <>
              {/* Text area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <ClipboardPaste size={14} className="inline mr-1 text-purple-500" />
                  Cole o texto do frasco aqui
                </label>
                <textarea
                  value={frascoText}
                  onChange={e => { setFrascoText(e.target.value); setFrascoParsed(false); setFrascoSaved(false); }}
                  placeholder={`Cole o conteúdo do frasco. Formatos aceitos:\n\nVitamina D3 10.000UI\nMagnésio Quelato 400mg\nZinco Bisglicinato 30mg\n\nOu separado por traço:\nVitamina D3 - 10.000UI\nOmega 3 - 2g\n\nOu com dois pontos:\nVitamina D3: 10.000UI`}
                  rows={8}
                  className="w-full border-2 border-purple-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-400 font-mono text-purple-800 bg-purple-50/30 resize-none"
                />
              </div>

              {/* Extract button */}
              <button onClick={handleParseText}
                className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles size={16} />
                Extrair Ingredientes Automaticamente
              </button>

              {/* Parsed results */}
              {frascoParsed && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 space-y-3">
                  <p className="text-xs font-semibold text-purple-700 flex items-center gap-1">
                    <Check size={14} />
                    {parsedIngredients.length} ingrediente{parsedIngredients.length !== 1 ? 's' : ''} encontrado{parsedIngredients.length !== 1 ? 's' : ''}
                  </p>

                  {/* Editable ingredient list */}
                  <div className="space-y-1.5 max-h-40 overflow-y-auto">
                    {parsedIngredients.map((ing, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-5 h-5 bg-purple-200 rounded-full flex items-center justify-center text-purple-800 text-[10px] font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <input type="text" value={ing.name}
                          onChange={e => {
                            const copy = [...parsedIngredients];
                            copy[i] = { ...copy[i], name: e.target.value };
                            setParsedIngredients(copy);
                          }}
                          className="flex-1 border border-purple-200 rounded px-2 py-1 text-xs bg-white focus:ring-1 focus:ring-purple-400"
                        />
                        <input type="text" value={ing.dose}
                          onChange={e => {
                            const copy = [...parsedIngredients];
                            copy[i] = { ...copy[i], dose: e.target.value };
                            setParsedIngredients(copy);
                          }}
                          placeholder="dose"
                          className="w-28 border border-purple-200 rounded px-2 py-1 text-xs bg-white focus:ring-1 focus:ring-purple-400 font-semibold"
                        />
                        <button onClick={() => setParsedIngredients(parsedIngredients.filter((_, idx) => idx !== i))}
                          className="text-red-400 hover:text-red-600 p-0.5"><Trash2 size={12} /></button>
                      </div>
                    ))}
                    {/* Add ingredient */}
                    <button onClick={() => setParsedIngredients([...parsedIngredients, { name: '', dose: '' }])}
                      className="flex items-center gap-1 text-[10px] text-purple-500 hover:text-purple-700 font-medium mt-1"
                    ><Plus size={10} /> Adicionar ingrediente</button>
                  </div>

                  {parsedIngredients.some(i => !i.dose) && (
                    <p className="text-[10px] text-amber-600 flex items-center gap-1">
                      <AlertCircle size={10} />
                      Alguns ingredientes sem dose — você pode editar acima
                    </p>
                  )}

                  {/* Frasco details */}
                  <div className="border-t border-purple-200 pt-3 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Nome do Frasco *</label>
                      <input type="text" value={frascoName} onChange={e => setFrascoName(e.target.value)}
                        placeholder="Ex: Frasco Imunidade Premium"
                        className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Categoria</label>
                      <CategoryPicker value={frascoCategory} onChange={setFrascoCategory} />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Posologia</label>
                        <input type="text" value={frascoPosology} onChange={e => setFrascoPosology(e.target.value)}
                          className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-purple-400" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Quantidade</label>
                        <input type="text" value={frascoQuantity} onChange={e => setFrascoQuantity(e.target.value)}
                          className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-purple-400" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Duração</label>
                        <input type="text" value={frascoDuration} onChange={e => setFrascoDuration(e.target.value)}
                          className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-purple-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-medium text-gray-500 mb-0.5">Instruções (opcional)</label>
                      <input type="text" value={frascoInstructions} onChange={e => setFrascoInstructions(e.target.value)}
                        placeholder="Ex: Tomar com refeição gordurosa"
                        className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-purple-400" />
                    </div>

                    {/* Save frasco */}
                    <button onClick={handleSaveFrasco}
                      className={`w-full py-2 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                        frascoSaved ? 'bg-green-500' : 'bg-purple-600 hover:bg-purple-700'
                      }`}
                      disabled={frascoSaved}
                    >
                      {frascoSaved ? <><Check size={16} /> Frasco Salvo!</> : <><FlaskConical size={16} /> Criar Frasco</>}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ═══════════════════════════════════════════════════════════════════
              TAB 3: MANUAL (EXISTING FORM)
             ═══════════════════════════════════════════════════════════════════ */}
          {tab === 'manual' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Loja / Origem</label>
                <StorePicker value={manStore} onChange={setManStore} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                <input type="text" value={manName} onChange={e => setManName(e.target.value)}
                  placeholder="Ex: Vitamina D3 10.000UI"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <LinkIcon size={14} className="inline mr-1" /> Link de Compra
                </label>
                <input type="url" value={manUrl} onChange={e => setManUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 font-mono text-green-700" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Categoria</label>
                <CategoryPicker value={manCategory} onChange={setManCategory} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>
                  <input type="text" value={manPrice} onChange={e => setManPrice(e.target.value)}
                    placeholder="89,90" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horário de Uso</label>
                  <input type="text" value={manHorario} onChange={e => setManHorario(e.target.value)}
                    placeholder="Manhã" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Indicações</label>
                <input type="text" value={manIndicacoes} onChange={e => setManIndicacoes(e.target.value)}
                  placeholder="Saúde óssea, imunidade..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Posologia</label>
                  <input type="text" value={manPosology} onChange={e => setManPosology(e.target.value)}
                    className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Quantidade</label>
                  <input type="text" value={manQuantity} onChange={e => setManQuantity(e.target.value)}
                    className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Duração</label>
                  <input type="text" value={manDuration} onChange={e => setManDuration(e.target.value)}
                    className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-blue-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Instruções</label>
                <input type="text" value={manInstructions} onChange={e => setManInstructions(e.target.value)}
                  placeholder="Tomar com refeição"
                  className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:ring-1 focus:ring-blue-400" />
              </div>

              {/* Ingredients */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-gray-600">Ingredientes</label>
                  <button type="button" onClick={() => setManIngredients([...manIngredients, { name: '', dose: '' }])}
                    className="flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 font-medium"
                  ><Plus size={10} /> Adicionar</button>
                </div>
                <div className="space-y-1.5 max-h-32 overflow-y-auto">
                  {manIngredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <input type="text" value={ing.name}
                        onChange={e => { const c = [...manIngredients]; c[i] = { ...c[i], name: e.target.value }; setManIngredients(c); }}
                        placeholder="Nome" className="flex-1 border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-blue-400" />
                      <input type="text" value={ing.dose}
                        onChange={e => { const c = [...manIngredients]; c[i] = { ...c[i], dose: e.target.value }; setManIngredients(c); }}
                        placeholder="Dose" className="w-28 border border-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-blue-400" />
                      {manIngredients.length > 1 && (
                        <button onClick={() => setManIngredients(manIngredients.filter((_, idx) => idx !== i))}
                          className="text-red-400 hover:text-red-600 p-0.5"><Trash2 size={12} /></button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleSaveManual}
                className="w-full py-2.5 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                style={{ backgroundColor: STORE_OPTIONS.find(s => s.key === manStore)?.color || '#3B82F6' }}
              >
                <ShoppingBag size={16} /> Adicionar Produto
              </button>
            </>
          )}
        </div>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100">
          <p className="text-[10px] text-gray-400 flex items-center gap-1">
            <Package size={10} />
            {tab === 'link' && 'Produto fica na aba da loja selecionada'}
            {tab === 'frasco' && 'Frasco fica na aba Manipulados'}
            {tab === 'manual' && 'Produto fica na aba da loja selecionada'}
          </p>
          <button onClick={onClose}
            className="text-sm px-4 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-medium"
          >Fechar</button>
        </div>
      </div>
    </div>
  );
}
