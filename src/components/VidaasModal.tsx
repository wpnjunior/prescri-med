import React, { useState } from 'react';
import { X, ShieldCheck, Key, ExternalLink, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { initiateVidaasAuth, saveClientId, loadClientId } from '../utils/vidaas';

interface Props {
  onClose: () => void;
  onStartAuth: () => void; // called after redirect begins (for any pre-auth logic)
}

export default function VidaasModal({ onClose }: Props) {
  const [clientId, setClientId] = useState(loadClientId());
  const [saveId, setSaveId] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAuthorize = async () => {
    if (!clientId.trim()) {
      setError('Informe o Client ID do VIDaaS.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      if (saveId) saveClientId(clientId.trim());
      // This redirects the page – no code after this runs
      await initiateVidaasAuth(clientId.trim());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erro desconhecido.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
              <ShieldCheck size={18} className="text-green-600" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-800">Assinar com VIDaaS</h2>
              <p className="text-xs text-gray-400">Assinatura digital ICP-Brasil</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-700 space-y-1.5">
            <p className="font-semibold text-blue-800">Como funciona:</p>
            <ol className="list-decimal ml-4 space-y-1">
              <li>Você informa seu <strong>Client ID</strong> do VIDaaS</li>
              <li>O app redireciona para o VIDaaS para você autenticar</li>
              <li>Após autenticação, o PDF é assinado digitalmente (ICP-Brasil)</li>
              <li>O arquivo assinado é baixado automaticamente</li>
            </ol>
          </div>

          {/* Client ID input */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              <Key size={12} className="inline mr-1" />
              Client ID do VIDaaS
            </label>
            <input
              type="text"
              value={clientId}
              onChange={e => setClientId(e.target.value)}
              placeholder="Ex: abc123-def456-..."
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 font-mono"
              disabled={loading}
            />
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveId}
                  onChange={e => setSaveId(e.target.checked)}
                  className="rounded"
                  disabled={loading}
                />
                <span className="text-xs text-gray-500">Salvar Client ID</span>
              </label>
              <a
                href="https://www.vidaas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
              >
                Obter Client ID <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Steps visual */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <CheckCircle2 size={13} className="text-green-500" />
              <span>Gerar PDF</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-1">
              <div className={`w-3.5 h-3.5 rounded-full border-2 ${loading ? 'border-green-500 bg-green-50' : 'border-gray-300'}`} />
              <span className={loading ? 'text-green-600 font-medium' : ''}>Autenticar VIDaaS</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300" />
              <span>Assinar & Baixar</span>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl p-3">
              <AlertCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}

          {/* Não tem Client ID? */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
            <p className="text-xs text-amber-700">
              <strong>Ainda não tem Client ID?</strong> Acesse{' '}
              <a
                href="https://www.vidaas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                vidaas.com.br
              </a>{' '}
              → Área do Desenvolvedor → Crie sua aplicação para obter o Client ID.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-5 pt-0">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleAuthorize}
            disabled={loading || !clientId.trim()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 transition-colors"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Redirecionando...
              </>
            ) : (
              <>
                <ShieldCheck size={14} />
                Autorizar e Assinar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
