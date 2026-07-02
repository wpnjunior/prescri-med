// ═══════════════════════════════════════════════════════════════════════════
// LAYER DETECTOR — auto-classifica frascos em Base / Módulo / Ciclo
// ═══════════════════════════════════════════════════════════════════════════
// Filosofia (Manual Mestre v2 do Dr. Wagner):
// - BASE = uso contínuo, todo paciente (categoria: base, jejum)
// - MÓDULO = foco clínico (sono, intestino, hormonal, etc) — escolher 1-2
// - CICLO = tratamento temporário com prazo (detox, antiparasitario, pós-SIBO)

import type { Frasco, Layer } from '../types';

/**
 * Detecta a camada automaticamente baseado em categoria, nome e duração.
 */
export function detectLayer(frasco: Frasco): Layer {
  // Override explícito sempre vence
  if (frasco.layer) return frasco.layer;

  // Categoria 'base' ou 'jejum' = camada base
  if (frasco.category === 'base' || frasco.category === 'jejum') {
    return 'base';
  }

  // Categorias de ciclo temporário (com prazo curto)
  if (frasco.category === 'detox' || frasco.category === 'antiparasitario') {
    return 'ciclo';
  }

  // Pelo nome: detectar palavras-chave de ciclo
  const name = frasco.name.toLowerCase();
  if (
    name.includes('detox') ||
    name.includes('despara') ||
    name.includes('sibo') ||
    name.includes('ciclo') ||
    name.includes('antiparasit')
  ) {
    return 'ciclo';
  }

  // Pela duração
  if (frasco.duration) {
    const dur = frasco.duration.toLowerCase();
    if (
      dur.includes('21 dias') ||
      dur.includes('14 dias') ||
      dur.includes('14-21') ||
      dur.includes('30 dias (ciclo)')
    ) {
      return 'ciclo';
    }
  }

  // Default: módulo
  return 'modulo';
}

/**
 * Aplica detecção de camada a todos os frascos de um array, retornando novos
 * objetos com `layer` preenchido.
 */
export function tagLayers(frascos: Frasco[]): Frasco[] {
  return frascos.map(f => ({ ...f, layer: f.layer ?? detectLayer(f) }));
}

/**
 * Conta frascos por camada na prescrição atual (timeline).
 */
export function countLayers(frascos: Frasco[]): { base: number; modulo: number; ciclo: number } {
  const counts = { base: 0, modulo: 0, ciclo: 0 };
  for (const f of frascos) {
    const layer = f.layer ?? detectLayer(f);
    counts[layer]++;
  }
  return counts;
}

/**
 * Verifica se uma prescrição viola as regras do Manual Mestre.
 * Retorna lista de avisos (string vazia se OK).
 */
export interface LayerWarning {
  level: 'info' | 'warning' | 'error';
  message: string;
}

export function validateLayers(frascos: Frasco[]): LayerWarning[] {
  const warnings: LayerWarning[] = [];

  // Categorias de módulo distintos presentes
  const moduleCategories = new Set<string>();
  for (const f of frascos) {
    const layer = f.layer ?? detectLayer(f);
    if (layer === 'modulo') {
      moduleCategories.add(f.category);
    }
  }

  // Regra: máx 2 módulos distintos
  if (moduleCategories.size > 2) {
    warnings.push({
      level: 'warning',
      message: `${moduleCategories.size} categorias de módulo na prescrição (${Array.from(moduleCategories).join(', ')}). Manual Mestre recomenda no máximo 2 módulos simultâneos. Foque em 1 hierarquia clínica clara.`,
    });
  } else if (moduleCategories.size === 2) {
    warnings.push({
      level: 'info',
      message: `2 módulos ativos (${Array.from(moduleCategories).join(' + ')}). Manual recomenda 1 módulo principal — só usar 2 se houver hierarquia clínica clara.`,
    });
  }

  // Regra: Base obrigatória
  const counts = countLayers(frascos);
  if (counts.base === 0 && (counts.modulo > 0 || counts.ciclo > 0)) {
    warnings.push({
      level: 'warning',
      message: 'Nenhuma Base na prescrição. Manual Mestre: "Base + 1 módulo-alvo. Ciclos depois." Adicionar Base Essencial primeiro?',
    });
  }

  // Regra: Ciclo sem módulo é incomum
  if (counts.ciclo > 0 && counts.modulo === 0 && counts.base > 0) {
    warnings.push({
      level: 'info',
      message: 'Ciclo sem módulo-alvo. Possível, mas incomum — verificar se é intencional (ex: detox isolado de manutenção).',
    });
  }

  // Regra: Múltiplos ciclos simultâneos
  const ciclosAtivos = frascos.filter(f => (f.layer ?? detectLayer(f)) === 'ciclo');
  const ciclosCategories = new Set(ciclosAtivos.map(f => f.category));
  if (ciclosCategories.size > 1) {
    warnings.push({
      level: 'warning',
      message: `${ciclosCategories.size} ciclos diferentes simultâneos (${Array.from(ciclosCategories).join(', ')}). Recomenda-se um por vez.`,
    });
  }

  return warnings;
}
