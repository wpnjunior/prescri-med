import { useEffect, useState } from 'react';
import { CheckCircle, Cloud, HardDrive, Loader2, AlertTriangle, X } from 'lucide-react';

export interface ToastSaveData {
  type: 'frasco' | 'protocolo' | 'prescricao' | 'produto';
  name: string;
  action: 'criado' | 'atualizado' | 'salvo' | 'duplicado';
}

interface Props { data: ToastSaveData | null; onClose: () => void; }

const TYPE_LABEL: Record<ToastSaveData['type'], string> = {
  frasco: 'Frasco', protocolo: 'Protocolo', prescricao: 'Prescrição', produto: 'Produto',
};

export default function SaveToast({ data, onClose }: Props) {
  const [stage, setStage] = useState<'memory' | 'local' | 'cloud' | 'done' | 'cloud-failed'>('memory');

  useEffect(() => {
    if (!data) return;
    setStage('memory');
    const t1 = setTimeout(() => setStage('local'), 200);
    const t2 = setTimeout(() => setStage('cloud'), 600);
    const t3 = setTimeout(() => setStage(navigator.onLine ? 'done' : 'cloud-failed'), 3500);
    const t4 = setTimeout(() => onClose(), 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [data, onClose]);

  if (!data) return null;

  const stages = [
    { key: 'memory', icon: <CheckCircle size={14} className="text-green-500" />, label: 'Adicionado à sessão', done: ['local', 'cloud', 'done', 'cloud-failed'].includes(stage) },
    { key: 'local', icon: stage === 'memory' ? <Loader2 size={14} className="animate-spin text-gray-400" /> : <HardDrive size={14} className={['cloud', 'done', 'cloud-failed'].includes(stage) ? 'text-green-500' : 'text-gray-400'} />, label: 'Salvo no navegador (offline)', done: ['cloud', 'done', 'cloud-failed'].includes(stage) },
    { key: 'cloud', icon: stage === 'cloud' ? <Loader2 size={14} className="animate-spin text-gray-400" /> : stage === 'cloud-failed' ? <AlertTriangle size={14} className="text-orange-500" /> : <Cloud size={14} className={stage === 'done' ? 'text-green-500' : 'text-gray-400'} />, label: stage === 'cloud-failed' ? 'Sem internet — sincroniza ao reconectar' : 'Sincronizado na nuvem (Firebase)', done: stage === 'done' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] animate-fade-in pointer-events-auto">
      <div className="bg-white border-2 border-green-400 rounded-xl shadow-2xl p-4 min-w-[320px] max-w-md">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 rounded-full p-1.5"><CheckCircle size={18} className="text-green-600" /></div>
            <div>
              <p className="font-bold text-sm text-gray-800">{TYPE_LABEL[data.type]} {data.action}!</p>
              <p className="text-xs text-gray-500 truncate max-w-[260px]">{data.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-0.5 rounded"><X size={14} /></button>
        </div>
        <div className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
          {stages.map(s => (
            <div key={s.key} className="flex items-center gap-2 text-[11px]">
              <span className="flex-shrink-0">{s.icon}</span>
              <span className={s.done ? 'text-gray-700' : 'text-gray-400'}>{s.label}</span>
              {s.done && <span className="text-[10px] text-green-600 font-bold ml-auto">✓</span>}
            </div>
          ))}
        </div>
        {stage === 'done' && (
          <div className="mt-3 pt-2 border-t border-gray-100 bg-green-50 -mx-4 -mb-4 px-4 py-2 rounded-b-xl">
            <p className="text-[10px] text-green-700 font-medium text-center">✓ Não vai perder — salvo em 3 lugares (sessão + navegador + nuvem)</p>
          </div>
        )}
        {stage === 'cloud-failed' && (
          <div className="mt-3 pt-2 border-t border-gray-100 bg-orange-50 -mx-4 -mb-4 px-4 py-2 rounded-b-xl">
            <p className="text-[10px] text-orange-700 font-medium text-center">⚠️ Salvo só no navegador. Quando voltar a internet, sincroniza sozinho.</p>
          </div>
        )}
      </div>
    </div>
  );
}
