import type { Frasco } from '../types';

/**
 * Estima preço médio do frasco em centavos (BRL) baseado no tier e nº de ingredientes.
 * Valores são estimativas para farmácias de manipulação brasileiras.
 */
export function getDefaultPrice(frasco: Frasco): number {
  const n = frasco.ingredients.length;

  // Base por tier
  const tierBase: Record<string, number> = {
    essencial: 4500,       // R$ 45
    intermediario: 8500,   // R$ 85
    premium: 14000,        // R$ 140
  };

  const base = frasco.tier ? (tierBase[frasco.tier] ?? 5000) : 3500;

  // Ajuste por nº de ingredientes (mais ingredientes = mais caro)
  const ingredientFactor = Math.max(0, (n - 3) * 800); // +R$8 por ingrediente acima de 3

  // Ajuste por ingredientes patenteados (marcas registradas)
  const patentedCount = frasco.ingredients.filter(i =>
    i.name.includes('®') || i.name.includes('™')
  ).length;
  const patentedBonus = patentedCount * 1200; // +R$12 por ingrediente patenteado

  return base + ingredientFactor + patentedBonus;
}
