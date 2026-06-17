import { useEffect, useState } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

const DISMISS_KEY = 'prescri_install_dismissed';

export default function InstallPWAButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true;
    setIsStandalone(standalone);
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(ios);
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed && Date.now() - parseInt(dismissed, 10) < 24 * 60 * 60 * 1000) return;
    const handler = (e: Event) => { e.preventDefault(); setInstallEvent(e as BeforeInstallPromptEvent); setShowBanner(true); };
    window.addEventListener('beforeinstallprompt', handler);
    if (ios && !standalone) setTimeout(() => setShowBanner(true), 2000);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!installEvent) return;
    await installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    if (outcome === 'accepted') setShowBanner(false);
    setInstallEvent(null);
  };
  const handleDismiss = () => { setShowBanner(false); localStorage.setItem(DISMISS_KEY, String(Date.now())); };

  if (isStandalone || !showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-2xl p-4 flex items-start gap-3 animate-fade-in">
      <div className="bg-white/20 rounded-lg p-2 flex-shrink-0"><Smartphone size={22} /></div>
      <div className="flex-1">
        <p className="font-bold text-sm mb-1">📱 Instalar como App</p>
        {isIOS ? (
          <p className="text-xs leading-relaxed text-blue-50">Toque em <strong>Compartilhar</strong> ↑ no Safari, depois <strong>"Adicionar à Tela de Início"</strong>.</p>
        ) : (
          <>
            <p className="text-xs leading-relaxed text-blue-50 mb-2">Instale o PrescriMed no seu dispositivo. Funciona offline e abre como app.</p>
            {installEvent && (
              <button onClick={handleInstall} className="bg-white text-blue-700 font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1.5">
                <Download size={12} /> Instalar agora
              </button>
            )}
          </>
        )}
      </div>
      <button onClick={handleDismiss} className="bg-white/10 hover:bg-white/20 rounded-lg p-1 flex-shrink-0 transition-colors" title="Fechar (24h)"><X size={14} /></button>
    </div>
  );
}
