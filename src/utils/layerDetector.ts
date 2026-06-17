// ═══════════════════════════════════════════════════════════════════════════
// LAYER DETECTOR — auto-classifica frascos em Base / Módulo / Ciclo
// ═══════════════════════════════════════════════════════════════════════════
import type { Frasco, Layer } from '../types';

export function detectLayer(frasco: Frasco): Layer {
  if (frasco.layer) return frasco.layer;
  if (frasco.category === 'base' || frasco.category === 'jejum') return 'base';
  if (frasco.category === 'detox' || frasco.category === 'antiparasitario') return 'ciclo';
  const name = frasco.name.toLowerCase();
  if (name.includes('detox') || name.includes('despara') || name.includes('sibo') ||
      name.includes('ciclo') || name.includes('antiparasit')) return 'ciclo';
  if (frasco.duration) {
    const dur = frasco.duration.toLowerCase();
    if (dur.includes('21 dias') || dur.includes('14 dias') || dur.includes('14-21') ||
        dur.includes('30 dias (ciclo)')) return 'ciclo';
  }
  return 'modulo';
}

export function tagLayers(frascos: Frasco[]): Frasco[] {
  return frascos.map(f => ({ ...f, layer: f.layer ?? detectLayer(f) }));
}

export function countLayers(frascos: Frasco[]): { base: number; modulo: number; ciclo: number } {
  const counts = { base: 0, modulo: 0, ciclo: 0 };
  for (const f of frascos) counts[f.layer ?? detectLayer(f)]++;
  return counts;
}

export interface LayerWarning {
  level: 'info' | 'warning' | 'error';
  message: string;
}

export function validateLayers(frascos: Frasco[]): LayerWarning[] {
  const warnings: LayerWarning[] = [];
  const moduleCategories = new Set<string>();
  for (const f of frascos) {
    if ((f.layer ?? detectLayer(f)) === 'modulo') moduleCategories.add(f.category);
  }
  if (moduleCategories.size > 2) {
    warnings.push({ level: 'warning', message: `${moduleCategories.size} categorias de módulo (${Array.from(moduleCategories).join(', ')}). Manual Mestre recomenda no máximo 2 módulos simultâneos.` });
  } else if (moduleCategories.size === 2) {
    warnings.push({ level: 'info', message: `2 módulos ativos (${Array.from(moduleCategories).join(' + ')}). Manual recomenda 1 módulo principal — só usar 2 com hierarquia clínica clara.` });
  }
  const counts = countLayers(frascos);
  if (counts.base === 0 && (counts.modulo > 0 || counts.ciclo > 0)) {
    warnings.push({ level: 'warning', message: 'Nenhuma Base na prescrição. Manual Mestre: "Base + 1 módulo-alvo. Ciclos depois."' });
  }
  const ciclosCategories = new Set(frascos.filter(f => (f.layer ?? detectLayer(f)) === 'ciclo').map(f => f.category));
  if (ciclosCategories.size > 1) {
    warnings.push({ level: 'warning', message: `${ciclosCategories.size} ciclos diferentes simultâneos. Recomenda-se um por vez.` });
  }
  return warnings;
}
