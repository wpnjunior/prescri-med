import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import type { Frasco } from '../types';
import { LAYER_LABELS, LAYER_COLORS } from '../types';
import { countLayers, validateLayers } from '../utils/layerDetector';

interface Props { frascos: Frasco[]; }

export default function LayerValidator({ frascos }: Props) {
  if (frascos.length === 0) return null;
  const counts = countLayers(frascos);
  const warnings = validateLayers(frascos);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <div className="grid grid-cols-3 gap-px bg-gray-200">
        {(['base', 'modulo', 'ciclo'] as const).map(layer => (
          <div key={layer} className="bg-white px-3 py-2 text-center" title={LAYER_LABELS[layer]}>
            <div className="text-[9px] font-medium text-gray-500 uppercase tracking-wide">
              {LAYER_LABELS[layer].split(' ').slice(1).join(' ')}
            </div>
            <div className="text-lg font-bold mt-0.5" style={{ color: counts[layer] > 0 ? LAYER_COLORS[layer] : '#9CA3AF' }}>
              {counts[layer]}
            </div>
          </div>
        ))}
      </div>
      {warnings.length > 0 && (
        <div className="border-t border-gray-100 divide-y divide-gray-100">
          {warnings.map((w, i) => {
            const Icon = w.level === 'info' ? Info : AlertCircle;
            const c = w.level === 'error' ? { bg: 'bg-red-50', text: 'text-red-700', icon: 'text-red-500' }
              : w.level === 'warning' ? { bg: 'bg-amber-50', text: 'text-amber-700', icon: 'text-amber-500' }
              : { bg: 'bg-blue-50', text: 'text-blue-700', icon: 'text-blue-500' };
            return (
              <div key={i} className={`${c.bg} px-3 py-2 flex items-start gap-2`}>
                <Icon size={14} className={`${c.icon} flex-shrink-0 mt-0.5`} />
                <p className={`text-[11px] ${c.text} leading-relaxed`}>{w.message}</p>
              </div>
            );
          })}
        </div>
      )}
      {warnings.length === 0 && counts.base > 0 && (
        <div className="bg-green-50 border-t border-green-100 px-3 py-1.5 flex items-center gap-1.5">
          <CheckCircle size={12} className="text-green-600" />
          <span className="text-[11px] text-green-700 font-medium">Prescrição segue regras do Manual Mestre ✓</span>
        </div>
      )}
    </div>
  );
}
