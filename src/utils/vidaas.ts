// ─── VIDaaS Digital Signature Integration ────────────────────────────────────
// Valid Certificadora / VIDaaS – ICP-Brasil compliant cloud certificate
// OAuth2 PKCE flow (no client_secret needed – works 100% in browser)

const BASE = 'https://certificado.vidaas.com.br';

export const VIDAAS_STORAGE_KEY = 'vidaas_client_id';

// ── PKCE helpers ──────────────────────────────────────────────────────────────

function generateVerifier(): string {
  const arr = new Uint8Array(96);
  crypto.getRandomValues(arr);
  return btoa(String.fromCharCode(...arr))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
    .slice(0, 128);
}

async function generateChallenge(verifier: string): Promise<string> {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// ── Step 1: redirect user to VIDaaS for authentication ───────────────────────

export async function initiateVidaasAuth(clientId: string): Promise<void> {
  const verifier = generateVerifier();
  const challenge = await generateChallenge(verifier);

  // Persist for callback handling (survives page reload)
  sessionStorage.setItem('vidaas_verifier', verifier);
  sessionStorage.setItem('vidaas_client_id_session', clientId);

  const redirectUri = window.location.origin + window.location.pathname;
  sessionStorage.setItem('vidaas_redirect_uri', redirectUri);

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'signature_session',
    code_challenge: challenge,
    code_challenge_method: 'S256',
    lifetime: '900',
  });

  window.location.href = `${BASE}/v0/oauth/authorize?${params}`;
}

// ── Step 2: exchange code → access token ─────────────────────────────────────

export async function exchangeToken(code: string): Promise<string> {
  const verifier = sessionStorage.getItem('vidaas_verifier');
  const clientId = sessionStorage.getItem('vidaas_client_id_session');
  const redirectUri = sessionStorage.getItem('vidaas_redirect_uri');

  if (!verifier || !clientId || !redirectUri) {
    throw new Error('Sessão expirada. Por favor, inicie o processo novamente.');
  }

  const res = await fetch(`${BASE}/v0/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: verifier,
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Erro na autenticação VIDaaS (${res.status}): ${txt}`);
  }

  const json = await res.json();

  // Cleanup session
  sessionStorage.removeItem('vidaas_verifier');
  sessionStorage.removeItem('vidaas_client_id_session');
  sessionStorage.removeItem('vidaas_redirect_uri');

  return json.access_token as string;
}

// ── Step 3: sign the PDF ──────────────────────────────────────────────────────

export async function signPdfVidaas(
  accessToken: string,
  pdfBase64: string,
  filename: string,
): Promise<Blob> {
  const res = await fetch(`${BASE}/v1/signatures`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      alias: filename,
      documents: [
        {
          id: '1',
          type: 'pdf',
          alias: 'Receituário Médico',
          filename,
          content_base64: pdfBase64,
        },
      ],
      lifetime: 900,
      language: 'pt-br',
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Erro ao assinar documento (${res.status}): ${txt}`);
  }

  const json = await res.json();

  // VIDaaS may return signed content under different keys depending on version
  const signed: string =
    json?.documents?.[0]?.content_base64 ??
    json?.documents?.[0]?.signed_content_base64 ??
    json?.content_base64 ??
    json?.signedContent;

  if (!signed) {
    throw new Error('VIDaaS não retornou o documento assinado. Verifique o plano da sua conta.');
  }

  const binary = atob(signed);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: 'application/pdf' });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

export function hasPendingCallback(): boolean {
  const params = new URLSearchParams(window.location.search);
  return params.has('code') && sessionStorage.getItem('vidaas_verifier') !== null;
}

export function getCallbackCode(): string | null {
  return new URLSearchParams(window.location.search).get('code');
}

export function clearCallbackFromUrl(): void {
  const url = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, url);
}

export function saveClientId(id: string): void {
  localStorage.setItem(VIDAAS_STORAGE_KEY, id);
}

export function loadClientId(): string {
  return localStorage.getItem(VIDAAS_STORAGE_KEY) ?? '';
}
