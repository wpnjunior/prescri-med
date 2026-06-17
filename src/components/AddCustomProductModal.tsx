import { useState } from 'react';
import { X, Link as LinkIcon, ClipboardPaste, FileText, Plus, Trash2, Check, AlertCircle, Wand2, Loader2, Sparkles } from 'lucide-react';
import type { Category, FrascoSource, Frasco, Ingredient } from '../types';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../types';
import { useAppContext } from '../context';
import { useToast } from '../contexts/ToastContext';
import { callAIJson, getAIKey, promptForKey, detectProvider } from '../utils/aiClient';

const PRODUCT_CATEGORIES: Category[] = [
  'sono', 'ansiedade', 'tireoide', 'intestino', 'gordura', 'cerebro', 'hormonal', 'imunidade',
  'lipoedema', 'dislipidemia', 'diabetes', 'disposicao', 'inflamacao', 'detox', 'antiparasitario',
  'desmame', 'libido', 'fertilidade', 'musculo', 'osso', 'pele', 'base', 'jejum', 'farmacia', 'outro',
];

const STORE_OPTIONS: { key: FrascoSource; label: string }[] = [
  { key: 'custom', label: '🔗 Genérico' }, { key: 'growth', label: '💪 Growth' },
  { key: 'doctorsfirst', label: '🩺 DoctorsFirst' }, { key: 'farmacia', label: '🏪 Farmácia' },
];

type TabMode = 'link' | 'frasco' | 'manual';

function genId(): string { return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }

// Parser regex simples (fallback sem IA)
function parseIngredients(text: string): Ingredient[] {
  const out: Ingredient[] = [];
  for (const raw of text.split(/\n|;/)) {
    const line = raw.trim();
    if (!line || line.length < 2) continue;
    let m = line.match(/^(.+?)\s*[-–:\t]\s*([\d.,]+\s*(?:mg|mcg|µg|g|ui|ufc|bilh|%)[^\s]*.*)$/i);
    if (!m) m = line.match(/^(.+?)\s+([\d.,]+\s*(?:mg|mcg|µg|g|ui|ufc)\b.*)$/i);
    if (m) out.push({ name: m[1].trim(), dose: m[2].trim() });
    else if (/[\d]/.test(line)) {
      const dm = line.match(/([\d.,]+\s*(?:mg|mcg|µg|g|ui|ufc|bilh|%)[^\s]*)/i);
      if (dm) out.push({ name: line.replace(dm[0], '').trim() || line, dose: dm[0] });
    }
  }
  return out;
}

interface AIFrascoResult {
  name: string; ingredients: Ingredient[]; posology?: string; quantity?: string; duration?: string; category?: Category;
}

async function analyzeWithAI(text: string): Promise<AIFrascoResult> {
  const userPrompt = `Analise o texto que descreve um frasco manipulado/suplemento e extraia em JSON:
"""
${text}
"""
Retorne JSON: {"name","ingredients":[{"name","dose"}],"posology","quantity","duration","category"}
category: uma de [sono,ansiedade,tireoide,intestino,gordura,cerebro,hormonal,imunidade,lipoedema,dislipidemia,diabetes,disposicao,inflamacao,detox,antiparasitario,desmame,libido,fertilidade,musculo,osso,pele,base,jejum,outro].
Extraia TODAS as substâncias com dose+unidade. Preserve nomes técnicos.`;
  return callAIJson<AIFrascoResult>({
    systemPrompt: 'Você é especialista em farmácia de manipulação. Extrai dados estruturados de fórmulas com precisão.',
    userPrompt, maxTokens: 2048,
  });
}

export default function AddCustomProductModal({ onClose }: { onClose: () => void }) {
  const { dispatch } = useAppContext();
  const { showSaveToast } = useToast();
  const [tab, setTab] = useState<TabMode>('link');

  // Link tab
  const [url, setUrl] = useState('');
  const [linkName, setLinkName] = useState('');
  const [linkStore, setLinkStore] = useState<FrascoSource>('custom');
  const [linkCat, setLinkCat] = useState<Category>('outro');

  // Frasco tab
  const [frascoText, setFrascoText] = useState('');
  const [parsed, setParsed] = useState<Ingredient[]>([]);
  const [frascoName, setFrascoName] = useState('');
  const [frascoCat, setFrascoCat] = useState<Category>('outro');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleSaveLink = () => {
    if (!url.trim() || !linkName.trim()) { alert('Preencha nome e link.'); return; }
    const frasco: Frasco = {
      id: genId(), name: linkName.trim(), category: linkCat, source: linkStore === 'custom' ? 'custom' : linkStore,
      purchaseUrl: url.trim(), ingredients: [], posology: '', quantity: '', duration: '',
      instructions: 'Produto adicionado via link.',
    };
    dispatch({ type: 'ADD_FRASCO', payload: frasco });
    showSaveToast({ type: 'produto', name: frasco.name, action: 'criado' });
    setUrl(''); setLinkName('');
  };

  const handleParseText = () => {
    if (!frascoText.trim()) { alert('Cole o texto do frasco.'); return; }
    const ings = parseIngredients(frascoText);
    setParsed(ings);
    if (!frascoName) {
      const firstLine = frascoText.split('\n')[0]?.trim();
      setFrascoName(firstLine && firstLine.length < 60 ? firstLine : (ings[0]?.name ? `${ings[0].name} Composto` : 'Novo Frasco'));
    }
  };

  const handleAnalyzeAI = async () => {
    if (!frascoText.trim()) { alert('Cole o texto do frasco primeiro'); return; }
    let key = getAIKey();
    if (!key) { key = promptForKey(); if (!key) return; }
    setAiLoading(true); setAiError(null);
    try {
      const result = await analyzeWithAI(frascoText);
      setParsed(result.ingredients || []);
      if (result.name) setFrascoName(result.name);
      if (result.category) setFrascoCat(result.category);
    } catch (e: any) {
      setAiError(e?.message || 'Erro ao analisar com IA');
    } finally { setAiLoading(false); }
  };

  const handleSaveFrasco = () => {
    if (!frascoName.trim() || parsed.length === 0) { alert('Frasco precisa de nome e ao menos 1 ingrediente.'); return; }
    const frasco: Frasco = {
      id: genId(), name: frascoName.trim(), category: frascoCat, source: 'custom',
      ingredients: parsed.filter(i => i.name.trim()), posology: '', quantity: '', duration: '',
      instructions: 'Frasco criado via texto.',
    };
    dispatch({ type: 'ADD_FRASCO', payload: frasco });
    showSaveToast({ type: 'frasco', name: frasco.name, action: 'criado' });
    setFrascoText(''); setParsed([]); setFrascoName('');
  };

  const aiKey = getAIKey();
  const det = aiKey ? detectProvider(aiKey) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2"><Plus size={18} className="text-green-600" /> Adicionar Produto / Frasco</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>

        <div className="flex gap-1 px-4 pt-3">
          {([['link', '🔗 Colar Link', LinkIcon], ['frasco', '🧪 Colar Frasco', ClipboardPaste], ['manual', '✍️ Manual', FileText]] as const).map(([k, label]) => (
            <button key={k} onClick={() => setTab(k as TabMode)}
              className={`flex-1 text-xs font-semibold py-2 rounded-lg transition-colors ${tab === k ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {tab === 'link' && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500">Cole o link de compra de um produto pronto. Vira um frasco com botão "Comprar".</p>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Link do produto *</label>
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Nome do produto *</label>
                <input value={linkName} onChange={e => setLinkName(e.target.value)} placeholder="Ex: Creatina Creapure 300g" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Loja</label>
                <div className="flex flex-wrap gap-1.5">
                  {STORE_OPTIONS.map(s => (
                    <button key={s.key} onClick={() => setLinkStore(s.key)} className={`text-xs px-2.5 py-1 rounded-full font-medium ${linkStore === s.key ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}>{s.label}</button>
                  ))}
                </div>
              </div>
              <CatPicker value={linkCat} onChange={setLinkCat} />
              <button onClick={handleSaveLink} className="w-full py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">Salvar Produto</button>
            </div>
          )}

          {(tab === 'frasco' || tab === 'manual') && (
            <div className="space-y-3">
              <textarea value={frascoText} onChange={e => setFrascoText(e.target.value)} rows={7}
                placeholder={`Cole a fórmula em QUALQUER formato:\n\nVitamina D3 10.000UI\nMagnésio Quelato 400mg\nL-Glutamina 5000mg\n\nA IA (ou o extrator simples) identifica nome, ingredientes e doses.`}
                className="w-full border-2 border-purple-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-purple-500 font-mono text-purple-800 bg-purple-50/30 resize-none" />
              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleAnalyzeAI} disabled={aiLoading} className="py-2.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                  {aiLoading ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}{aiLoading ? 'Analisando...' : 'Analisar com IA'}
                </button>
                <button onClick={handleParseText} disabled={aiLoading} className="py-2.5 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60">
                  <Sparkles size={16} />Extrair (simples)
                </button>
              </div>
              {aiError && <div className="text-xs bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-2 flex items-start gap-1.5"><AlertCircle size={14} className="flex-shrink-0 mt-0.5" /><span>{aiError}</span></div>}
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                <span className="text-[11px] text-gray-600">{det && det.valid ? <>🤖 IA: <strong className="text-purple-700">{det.label}</strong></> : <>⚠️ Nenhuma chave de IA configurada</>}</span>
                <button type="button" onClick={() => promptForKey()} className="text-[11px] text-purple-600 hover:text-purple-800 underline font-medium">{det && det.valid ? 'Trocar chave' : 'Adicionar chave'}</button>
              </div>

              {parsed.length > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 space-y-3">
                  <p className="text-xs font-semibold text-purple-700 flex items-center gap-1"><Check size={14} />{parsed.length} ingrediente{parsed.length !== 1 ? 's' : ''} encontrado{parsed.length !== 1 ? 's' : ''}</p>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto">
                    {parsed.map((ing, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <input value={ing.name} onChange={e => setParsed(p => p.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} className="flex-1 border border-purple-200 rounded px-2 py-1 text-xs" />
                        <input value={ing.dose} onChange={e => setParsed(p => p.map((x, j) => j === i ? { ...x, dose: e.target.value } : x))} className="w-24 border border-purple-200 rounded px-2 py-1 text-xs" />
                        <button onClick={() => setParsed(p => p.filter((_, j) => j !== i))} className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
                      </div>
                    ))}
                  </div>
                  <input value={frascoName} onChange={e => setFrascoName(e.target.value)} placeholder="Nome do frasco" className="w-full border border-purple-200 rounded px-2 py-1.5 text-sm" />
                  <CatPicker value={frascoCat} onChange={setFrascoCat} />
                  <button onClick={handleSaveFrasco} className="w-full py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">Criar Frasco</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CatPicker({ value, onChange }: { value: Category; onChange: (c: Category) => void }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">Categoria</label>
      <div className="flex flex-wrap gap-1">
        {PRODUCT_CATEGORIES.map(cat => (
          <button key={cat} onClick={() => onChange(cat)} className="text-[11px] px-2 py-0.5 rounded-full font-medium"
            style={value === cat ? { backgroundColor: CATEGORY_COLORS[cat], color: 'white' } : { backgroundColor: `${CATEGORY_COLORS[cat]}20`, color: CATEGORY_COLORS[cat] }}>
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>
    </div>
  );
}
