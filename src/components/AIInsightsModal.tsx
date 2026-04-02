import React, { useState, useEffect } from 'react';
import { X, Brain, Sparkles, AlertCircle, Loader2, ChevronDown, ChevronUp, Star, FlaskConical, Utensils, Coffee, Clock, Merge } from 'lucide-react';
import type { Frasco } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types';
import { useAppContext } from '../context';

interface AIInsightsModalProps {
  frasco: Frasco;
  onClose: () => void;
  onOpenFusion?: (preSelectedIds: string[]) => void;
}

interface IngredientInsight {
  name: string;
  dose: string;
  funcao: string;
  mecanismo: string;
  marcaPatenteada?: string;
  observacao?: string;
}

interface FusionSuggestion {
  frascoNome: string;
  motivo: string;
  sinergiaEsperada: string;
}

interface AIResult {
  resumo: string;
  indicacoes: string;
  ingredientes: IngredientInsight[];
  sinergia: string;
  versoesPatentadas: string;
  cuidados: string;
  fusoes: FusionSuggestion[];
  alertaComida: string[];
  melhorJejum: string[];
  timing: string;
}

const API_KEY_STORAGE = 'prescri_gemini_key';

function getApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE) ?? '';
}

function saveApiKey(key: string) {
  localStorage.setItem(API_KEY_STORAGE, key);
}

async function fetchAIInsights(frasco: Frasco, allFrascos: Frasco[], apiKey: string): Promise<AIResult> {
  const ingredientsList = frasco.ingredients
    .map(i => `- ${i.name}: ${i.dose}`)
    .join('\n');

  const otherFrascos = allFrascos
    .filter(f => f.id !== frasco.id)
    .map(f => `• "${f.name}" (${CATEGORY_LABELS[f.category]}): ${f.ingredients.map(i => i.name).join(', ')}`)
    .join('\n');

  const prompt = `Você é um especialista em nutrologia e farmácia de manipulação integrativa. Analise este frasco manipulado e responda em JSON.

FRASCO: ${frasco.name}
CATEGORIA: ${CATEGORY_LABELS[frasco.category]}
POSOLOGIA: ${frasco.posology}
DURAÇÃO: ${frasco.duration}
INSTRUÇÕES: ${frasco.instructions}

COMPOSIÇÃO:
${ingredientsList}

OUTROS FRASCOS DISPONÍVEIS NA BIBLIOTECA DO MÉDICO:
${otherFrascos || '(nenhum outro frasco disponível)'}

Responda APENAS com JSON válido neste formato exato (sem markdown, sem \`\`\`):
{
  "resumo": "resumo clínico do frasco em 2-3 frases",
  "indicacoes": "indicações clínicas principais",
  "ingredientes": [
    {
      "name": "nome do ingrediente",
      "dose": "dose como no frasco",
      "funcao": "função clínica principal em 1 frase",
      "mecanismo": "mecanismo de ação resumido",
      "marcaPatenteada": "versão patenteada premium SE EXISTIR (ex: KSM-66®, Creapure®, Bioperine®, Albion®) ou null",
      "observacao": "observação clínica relevante ou null"
    }
  ],
  "sinergia": "como os ingredientes trabalham juntos sinergicamente",
  "versoesPatentadas": "sugestões de marcas patenteadas para upgrade do frasco",
  "cuidados": "cuidados, contraindicações ou interações importantes",
  "fusoes": [
    {
      "frascoNome": "nome EXATO de um dos frascos da biblioteca acima que seria bom fundir com este",
      "motivo": "por que a fusão faz sentido clinicamente",
      "sinergiaEsperada": "qual sinergia se espera dos ingredientes combinados"
    }
  ],
  "alertaComida": ["lista de ingredientes DESTE frasco que são melhor absorvidos COM comida (especialmente gordura). Ex: vitaminas lipossolúveis, curcumina, CoQ10, resveratrol, astaxantina etc. Se nenhum, array vazio []"],
  "melhorJejum": ["lista de ingredientes DESTE frasco que são melhor absorvidos EM JEJUM. Ex: aminoácidos, probióticos, glutamina, NAC, minerais quelados etc. Se nenhum, array vazio []"],
  "timing": "recomendação geral de QUANDO tomar este frasco: jejum, com café da manhã, com almoço, à noite, antes de dormir etc. Explique o motivo."
}

IMPORTANTE sobre fusoes:
- Sugira de 1 a 3 frascos da lista acima que combinam bem com este
- Considere sinergias farmacológicas e clínicas reais
- Se não houver nenhum frasco compatível, retorne array vazio []
- Use o nome EXATO como aparece na lista

IMPORTANTE sobre alertaComida e melhorJejum:
- Analise CADA ingrediente do frasco
- Substâncias lipossolúveis (vitaminas A, D, E, K, CoQ10, curcumina, ômega-3, astaxantina, resveratrol, pycnogenol) -> alertaComida
- Substâncias que competem com alimentos ou são melhor em jejum (aminoácidos isolados, probióticos, glutamina, NAC, taurina, glicina, berberina, levotiroxina, ferro) -> melhorJejum
- Um ingrediente pode aparecer em ambas as listas se houver nuance`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 8192,
          responseMimeType: 'application/json',
        },
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = (err as any)?.error?.message ?? `Erro ${response.status}`;
    throw new Error(msg);
  }

  const data = await response.json();
  const parts: any[] = data.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .filter((p: any) => !p.thought)
    .map((p: any) => p.text ?? '')
    .join('')
    || (parts[0]?.text ?? '');
  if (!text) throw new Error('Resposta inválida da IA');
  const clean = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  try {
    return JSON.parse(clean) as AIResult;
  } catch {
    const jsonMatch = clean.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Resposta inválida da IA');
    return JSON.parse(jsonMatch[0]) as AIResult;
  }
}

export default function AIInsightsModal({ frasco, onClose, onOpenFusion }: AIInsightsModalProps) {
  const { state } = useAppContext();
  const [apiKey, setApiKey] = useState(getApiKey());
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(!getApiKey());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expandedIngredient, setExpandedIngredient] = useState<number | null>(null);

  const catColor = CATEGORY_COLORS[frasco.category];

  useEffect(() => {
    if (apiKey && !result) runAnalysis(apiKey);
  }, []);

  const runAnalysis = async (key: string) => {
    setLoading(true); setError(null); setResult(null);
    try {
      const res = await fetchAIInsights(frasco, state.frascos, key);
      setResult(res);
    } catch (e: any) {
      setError(e.message ?? 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveKey = () => {
    const key = apiKeyInput.trim();
    if (!key) return;
    saveApiKey(key);
    setApiKey(key);
    setShowKeyInput(false);
    runAnalysis(key);
  };

  const findFrascoByName = (name: string): Frasco | undefined => {
    const lower = name.toLowerCase().trim();
    return state.frascos.find(f => f.name.toLowerCase().trim() === lower);
  };

  const handleFusionClick = (suggestedName: string) => {
    const target = findFrascoByName(suggestedName);
    if (target && onOpenFusion) {
      onOpenFusion([frasco.id, target.id]);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          style={{ borderTopColor: catColor, borderTopWidth: 3 }}>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg" style={{ backgroundColor: catColor + '20' }}>
              <Brain size={18} style={{ color: catColor }} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
                <Sparkles size={14} style={{ color: catColor }} /> Análise IA — Gemini
              </h2>
              <p className="text-xs text-gray-500 truncate max-w-xs">{frasco.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400"><X size={18} /></button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

          {/* API Key setup */}
          {showKeyInput && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <Sparkles size={16} />
                <span className="font-medium text-sm">Configure sua chave do Google Gemini</span>
              </div>
              <p className="text-xs text-blue-600">
                Gratuito! Obtenha sua chave em{' '}
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer"
                  className="underline font-medium">aistudio.google.com →</a>
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={e => setApiKeyInput(e.target.value)}
                  placeholder="AIza..."
                  className="flex-1 border border-blue-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onKeyDown={e => e.key === 'Enter' && handleSaveKey()}
                />
                <button onClick={handleSaveKey}
                  className="px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800">
                  Analisar
                </button>
              </div>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-10 gap-3 text-gray-500">
              <Loader2 size={32} className="animate-spin" style={{ color: catColor }} />
              <p className="text-sm">Analisando substâncias com Gemini...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-700">Erro na análise</p>
                <p className="text-xs text-red-600 mt-0.5">{error}</p>
                {apiKey && <button onClick={() => runAnalysis(apiKey)} className="mt-2 text-xs text-red-700 underline">Tentar novamente</button>}
                <button onClick={() => { setShowKeyInput(true); setError(null); }} className="mt-1 block text-xs text-red-700 underline">Alterar chave</button>
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="space-y-5">
              {/* Resumo */}
              <div className="rounded-xl p-4" style={{ backgroundColor: catColor + '12' }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: catColor }}>Resumo Clínico</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.resumo}</p>
              </div>

              {/* Timing recommendation — prominent */}
              {result.timing && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={15} className="text-indigo-600" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Melhor Horário para Tomar</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{result.timing}</p>
                </div>
              )}

              {/* Food / Fasting alerts side by side */}
              {(result.alertaComida?.length > 0 || result.melhorJejum?.length > 0) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.alertaComida?.length > 0 && (
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Utensils size={14} className="text-orange-600" />
                        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">Melhor com Comida</p>
                      </div>
                      <ul className="space-y-1">
                        {result.alertaComida.map((item, i) => (
                          <li key={i} className="text-xs text-orange-800 flex items-start gap-1.5">
                            <span className="text-orange-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.melhorJejum?.length > 0 && (
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Coffee size={14} className="text-teal-600" />
                        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Melhor em Jejum</p>
                      </div>
                      <ul className="space-y-1">
                        {result.melhorJejum.map((item, i) => (
                          <li key={i} className="text-xs text-teal-800 flex items-start gap-1.5">
                            <span className="text-teal-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Indicações */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Indicações Clínicas</p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{result.indicacoes}</p>
              </div>

              {/* Ingredientes */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Análise dos Ingredientes</p>
                <div className="space-y-2">
                  {result.ingredientes.map((ing, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setExpandedIngredient(expandedIngredient === i ? null : i)}
                      >
                        <div className="flex items-center gap-2 text-left">
                          <FlaskConical size={14} className="text-gray-400 shrink-0" />
                          <div>
                            <span className="text-sm font-medium text-gray-800">{ing.name}</span>
                            <span className="text-xs text-gray-400 ml-2">{ing.dose}</span>
                            {ing.marcaPatenteada && (
                              <span className="ml-2 inline-flex items-center gap-0.5 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                                <Star size={10} /> {ing.marcaPatenteada}
                              </span>
                            )}
                          </div>
                        </div>
                        {expandedIngredient === i ? <ChevronUp size={14} className="text-gray-400 shrink-0" /> : <ChevronDown size={14} className="text-gray-400 shrink-0" />}
                      </button>

                      {expandedIngredient === i && (
                        <div className="px-4 pb-3 space-y-2 bg-gray-50 border-t border-gray-100">
                          <div><span className="text-xs font-semibold text-gray-500">Função: </span><span className="text-xs text-gray-700">{ing.funcao}</span></div>
                          <div><span className="text-xs font-semibold text-gray-500">Mecanismo: </span><span className="text-xs text-gray-700">{ing.mecanismo}</span></div>
                          {ing.marcaPatenteada && <div><span className="text-xs font-semibold text-amber-600">⭐ Versão Premium: </span><span className="text-xs text-gray-700">{ing.marcaPatenteada}</span></div>}
                          {ing.observacao && <div className="bg-blue-50 rounded-lg px-3 py-1.5"><span className="text-xs text-blue-700">{ing.observacao}</span></div>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sinergia */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1">🔗 Sinergia do Frasco</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.sinergia}</p>
              </div>

              {/* Fusion suggestions */}
              {result.fusoes && result.fusoes.length > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Merge size={15} className="text-purple-600" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">Sugestões de Fusão</p>
                  </div>
                  <div className="space-y-3">
                    {result.fusoes.map((f, i) => {
                      const targetFrasco = findFrascoByName(f.frascoNome);
                      return (
                        <div key={i} className="bg-white rounded-lg p-3 border border-purple-100">
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-sm font-semibold text-purple-800 flex items-center gap-1.5">
                              <FlaskConical size={13} className="text-purple-500" />
                              {f.frascoNome}
                            </p>
                            {targetFrasco && onOpenFusion && (
                              <button
                                onClick={() => handleFusionClick(f.frascoNome)}
                                className="flex items-center gap-1 text-xs font-medium bg-purple-600 text-white px-2.5 py-1 rounded-lg hover:bg-purple-700 transition-colors"
                              >
                                <Merge size={11} /> Fundir
                              </button>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mb-1"><span className="font-medium text-purple-700">Motivo:</span> {f.motivo}</p>
                          <p className="text-xs text-gray-600"><span className="font-medium text-purple-700">Sinergia esperada:</span> {f.sinergiaEsperada}</p>
                          {!targetFrasco && (
                            <p className="text-[10px] text-gray-400 mt-1 italic">Frasco não encontrado na biblioteca</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Versões patenteadas */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-1">⭐ Sugestões de Marcas Patenteadas</p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{result.versoesPatentadas}</p>
              </div>

              {/* Cuidados */}
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-700 mb-1">⚠️ Cuidados e Observações</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.cuidados}</p>
              </div>
            </div>
          )}
        </div>

        {result && (
          <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
            <button onClick={() => { setShowKeyInput(true); setResult(null); }} className="text-xs text-gray-400 hover:text-gray-600 underline">Alterar chave</button>
            <button onClick={() => runAnalysis(apiKey)} className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
              <Loader2 size={12} /> Reanalisar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
