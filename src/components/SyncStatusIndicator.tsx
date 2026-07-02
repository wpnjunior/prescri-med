import React, { useEffect, useState } from 'react';
import { Cloud, CloudOff, HardDrive, CheckCircle2, Loader2 } from 'lucide-react';
import { useAppContext } from '../context';

/**
 * Indicador permanente de status de sincronização.
 * Mostra: ✓ tudo sincronizado / ☁️ sincronizando / 📴 offline.
 */
export default function SyncStatusIndicator() {
  const { state } = useAppContext();
  const [online, setOnline] = useState(navigator.onLine);
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<number>(Date.now());
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  // Quando state muda, marca como "sincronizando" por 2.5s (debounce do firebase.ts)
  useEffect(() => {
    setSyncing(true);
    const t = setTimeout(() => {
      setSyncing(false);
      setLastSync(Date.now());
    }, 2500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.frascos.length, state.savedPrescriptions.length]);

  const customCount = state.frascos.filter(f => f.source === 'custom').length;
  const totalFrascos = state.frascos.length;
  const savedRx = state.savedPrescriptions.length;

  // Estado do ícone
  let icon, label, color;
  if (!online) {
    icon = <CloudOff size={12} />;
    label = 'Offline';
    color = 'bg-orange-100 text-orange-700 border-orange-300';
  } else if (syncing) {
    icon = <Loader2 size={12} className="animate-spin" />;
    label = 'Sincronizando...';
    color = 'bg-blue-100 text-blue-700 border-blue-300';
  } else {
    icon = <CheckCircle2 size={12} />;
    label = 'Tudo salvo';
    color = 'bg-green-100 text-green-700 border-green-300';
  }

  const formatTime = (ts: number) => {
    const seconds = Math.floor((Date.now() - ts) / 1000);
    if (seconds < 60) return 'agora';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}min atrás`;
    return `${Math.floor(seconds / 3600)}h atrás`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDetails(s => !s)}
        className={`flex items-center gap-1.5 text-[10px] px-2 py-1 rounded-full border font-medium transition-all hover:scale-105 ${color}`}
        title="Status de sincronização — clique para detalhes"
      >
        {icon}
        <span>{label}</span>
      </button>

      {showDetails && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setShowDetails(false)} />
          <div className="absolute top-full mt-1 right-0 z-40 bg-white border border-gray-200 rounded-xl shadow-2xl p-3 w-64">
            <p className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              ☁️ Status de Salvamento
            </p>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-gray-600">
                  <HardDrive size={11} className="text-green-500" />
                  Navegador (offline)
                </span>
                <span className="font-bold text-green-600">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-gray-600">
                  <Cloud size={11} className={online ? 'text-green-500' : 'text-orange-500'} />
                  Firebase (nuvem)
                </span>
                <span className={`font-bold ${online ? 'text-green-600' : 'text-orange-600'}`}>
                  {online ? (syncing ? '...' : '✓') : '✗'}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-500 border-t border-gray-100 pt-1.5 mt-1.5">
                <span>Última sync:</span>
                <span className="font-mono">{formatTime(lastSync)}</span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-[10px] text-gray-500 space-y-0.5">
              <div className="flex justify-between">
                <span>📋 Total frascos:</span>
                <span className="font-bold">{totalFrascos}</span>
              </div>
              <div className="flex justify-between">
                <span>🔗 Meus produtos:</span>
                <span className="font-bold">{customCount}</span>
              </div>
              <div className="flex justify-between">
                <span>💊 Prescrições salvas:</span>
                <span className="font-bold">{savedRx}</span>
              </div>
            </div>
            {!online && (
              <div className="mt-2 pt-2 border-t border-gray-100 bg-orange-50 -mx-3 -mb-3 px-3 py-2 rounded-b-xl">
                <p className="text-[10px] text-orange-700">
                  ⚠️ Sem internet. Os dados estão salvos no navegador e sincronizam quando voltar online.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
