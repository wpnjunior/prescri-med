// ── Unified AI Client — auto-detects provider from API key format ───────────
export const AI_KEY_STORAGE = 'prescri_ai_key';
const LEGACY_KEYS = ['prescri_anthropic_key', 'prescri_openai_key'];

export type AIProvider = 'anthropic' | 'openai' | 'google' | 'groq' | 'unknown';

export interface DetectedKey {
  provider: AIProvider;
  label: string;
  model: string;
  valid: boolean;
}

export function detectProvider(key: string): DetectedKey {
  const k = key.trim();
  if (!k) return { provider: 'unknown', label: 'Vazio', model: '', valid: false };
  if (k.startsWith('sk-ant-')) return { provider: 'anthropic', label: 'Claude (Anthropic)', model: 'claude-3-5-haiku-20241022', valid: k.length >= 30 };
  if (k.startsWith('sk-')) return { provider: 'openai', label: 'OpenAI (ChatGPT)', model: 'gpt-4o-mini', valid: k.length >= 30 };
  if (k.startsWith('AIza')) return { provider: 'google', label: 'Google Gemini', model: 'gemini-1.5-flash', valid: k.length >= 30 };
  if (k.startsWith('gsk_')) return { provider: 'groq', label: 'Groq (Llama 3.3 70B)', model: 'llama-3.3-70b-versatile', valid: k.length >= 30 };
  return { provider: 'unknown', label: 'Formato desconhecido', model: '', valid: false };
}

export function getAIKey(): string {
  const k = localStorage.getItem(AI_KEY_STORAGE);
  if (k) return k;
  for (const legacy of LEGACY_KEYS) {
    const v = localStorage.getItem(legacy);
    if (v) { localStorage.setItem(AI_KEY_STORAGE, v); return v; }
  }
  return '';
}

export function saveAIKey(key: string): void { localStorage.setItem(AI_KEY_STORAGE, key.trim()); }
export function clearAIKey(): void {
  localStorage.removeItem(AI_KEY_STORAGE);
  for (const legacy of LEGACY_KEYS) localStorage.removeItem(legacy);
}

export function promptForKey(): string {
  const existing = getAIKey();
  const msg = `Cole uma chave de IA válida.\n\nAceito:\n• Claude (sk-ant-...) — recomendado\n• OpenAI (sk-...)\n• Google Gemini (AIza...)\n• Groq (gsk_...)\n\nA chave fica salva só no seu navegador.`;
  const pasted = window.prompt(msg, existing);
  if (!pasted) return '';
  const detected = detectProvider(pasted);
  if (!detected.valid) { alert('Chave inválida — comece com sk-ant-, sk-, AIza ou gsk_.'); return ''; }
  saveAIKey(pasted);
  return pasted.trim();
}

export interface AICallOptions {
  systemPrompt?: string;
  userPrompt: string;
  maxTokens?: number;
  jsonMode?: boolean;
}

export async function callAI(opts: AICallOptions): Promise<string> {
  const key = getAIKey();
  if (!key) throw new Error('Nenhuma chave de IA configurada.');
  const detected = detectProvider(key);
  if (!detected.valid) throw new Error(`Chave inválida: ${detected.label}`);
  const maxTokens = opts.maxTokens ?? 2048;
  const systemPrompt = (opts.systemPrompt ?? '') + (opts.jsonMode ? '\n\nResponda APENAS com JSON válido, sem markdown, sem comentários.' : '');
  switch (detected.provider) {
    case 'anthropic': return callAnthropic(key, detected.model, systemPrompt, opts.userPrompt, maxTokens);
    case 'openai': return callOpenAI(key, detected.model, systemPrompt, opts.userPrompt, maxTokens);
    case 'google': return callGemini(key, detected.model, systemPrompt, opts.userPrompt, maxTokens);
    case 'groq': return callGroq(key, detected.model, systemPrompt, opts.userPrompt, maxTokens);
    default: throw new Error('Provedor desconhecido.');
  }
}

export async function callAIJson<T = unknown>(opts: AICallOptions): Promise<T> {
  const txt = await callAI({ ...opts, jsonMode: true });
  const clean = txt.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
  try { return JSON.parse(clean) as T; }
  catch {
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Resposta da IA não contém JSON válido.');
    return JSON.parse(match[0]) as T;
  }
}

async function callAnthropic(key: string, model: string, system: string, user: string, maxTokens: number): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
    body: JSON.stringify({ model, max_tokens: maxTokens, system: system || undefined, messages: [{ role: 'user', content: user }] }),
  });
  if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error((err as any)?.error?.message ?? `Anthropic erro ${res.status}`); }
  const data = await res.json();
  return data.content?.[0]?.text ?? '';
}

async function callOpenAI(key: string, model: string, system: string, user: string, maxTokens: number): Promise<string> {
  const messages: Array<{ role: string; content: string }> = [];
  if (system) messages.push({ role: 'system', content: system });
  messages.push({ role: 'user', content: user });
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, max_tokens: maxTokens, messages }),
  });
  if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error((err as any)?.error?.message ?? `OpenAI erro ${res.status}`); }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? '';
}

async function callGemini(key: string, model: string, system: string, user: string, maxTokens: number): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
  const body: any = { contents: [{ role: 'user', parts: [{ text: user }] }], generationConfig: { maxOutputTokens: maxTokens } };
  if (system) body.systemInstruction = { parts: [{ text: system }] };
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error((err as any)?.error?.message ?? `Gemini erro ${res.status}`); }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

async function callGroq(key: string, model: string, system: string, user: string, maxTokens: number): Promise<string> {
  const messages: Array<{ role: string; content: string }> = [];
  if (system) messages.push({ role: 'system', content: system });
  messages.push({ role: 'user', content: user });
  const tryModel = async (m: string) => {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({ model: m, max_tokens: maxTokens, messages }),
    });
    if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error((err as any)?.error?.message ?? `Groq erro ${res.status}`); }
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? '';
  };
  try { return await tryModel(model); }
  catch (err: any) {
    const msg = String(err?.message || '').toLowerCase();
    if (model !== 'llama-3.1-8b-instant' && (msg.includes('too large') || msg.includes('rate limit') || msg.includes('tpm') || msg.includes('tokens per minute'))) {
      return await tryModel('llama-3.1-8b-instant');
    }
    throw err;
  }
}
