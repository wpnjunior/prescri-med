import React, { useState, useEffect } from 'react';
import { X, Brain, Sparkles, AlertCircle, Loader2, ChevronDown, ChevronUp, Star, FlaskConical } from 'lucide-react';
import type { Frasco } from '../types';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types';

interface AIInsightsModalProps {
  frasco: Frasco;
  onClose: () => void;
}

interface IngredientInsight {
  name: string;
  dose: string;
  funcao: string;
  mecanismo: string;
  marcaPatenteada?: string;
  observacao?: string;
}

interface AIResult {
  resumo: string;
  indicacoes: string;
  ingredientes: IngredientInsight[];
  sinergia: string;
  versoesPatentadas: string;
  cuidados: string;
}

const API_KEY_STORAGE = 'prescri_gemini_key';

function getApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE) ?? '';
}

function saveApiKey(key: string) {
  localStorage.setItem(API_KEY_STORAGE, key);
}

async function fetchAIInsights(frasco: Frasco, apiKey: string): Promise<AIResult> {
  const ingredientsList = frasco.ingredients
    .map(i => `- ${i.name}: ${i.dose}`)
    .join('\n');

  const prompt = `Você é um especialista em nutrologia e farmácia de manipulação integrativa. Analise este frasco manipulado e responda em JSON.

FRASCO: ${frasco.name}
CATEGORIA: ${CATEGORY_LABELS[frasco.category]}
POSOLOGIA: ${frasco.posology}
DURAÇÃO: ${frasco.duration}
INSTRUÇÕES: ${frasco.instructions}

COMPOSIÇÃO:
${ingredientsList}

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
  "cuidados": "cuidados, contraindicações ou interações importantes"
}`;

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
  // Filtra thinking parts (thought:true) e pega só o texto da resposta
  const text = parts
    .filter((p: any) => !p.thought)
    .map((p: any) => p.text ?? '')
    .join('')
    || (parts[0]?.text ?? '');
  if (!text) throw new Error('Resposta inválida da IA');
  // Remove markdown se ainda vier, extrai JSON
  const clean = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  try {
    return JSON.parse(clean) as AIResult;
  } catch {
    const jsonMatch = clean.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Resposta inválida da IA');
    return JSON.parse(jsonMatch[0]) as AIResult;
  }
}

export default function AIInsightsModal({ frasco, onClose }: AIInsightsModalProps) {
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
      const res = await fetchAIInsights(frasco, key);
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
              <div className="rounded-xl p-4" style={{ backgroundColor: catColor + '12' }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: catColor }}>Resumo Clínico</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.resumo}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Indicações Clínicas</p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{result.indicacoes}</p>
              </div>

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

              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-1">🔗 Sinergia do Frasco</p>
                <p className="text-sm text-gray-700 leading-relaxed">{result.sinergia}</p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-1">⭐ Sugestões de Marcas Patenteadas</p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{result.versoesPatentadas}</p>
              </div>

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
