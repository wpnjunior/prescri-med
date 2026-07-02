/**
 * Script to merge all manipulated frascos per category into "super frascos"
 * Reads all group files, deduplicates ingredients, outputs new seedData
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Read all TS files as text and extract the arrays
const dir = resolve('./src/data');

function extractFrascos(filename) {
  const content = readFileSync(resolve(dir, filename), 'utf-8');
  const frascos = [];

  // Match each frasco object block
  const regex = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*category:\s*'([^']+)'([\s\S]*?)\n\s*\}/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const [full, id, name, category, rest] = match;

    // Extract tier
    const tierMatch = rest.match(/tier:\s*'([^']+)'/);
    const tier = tierMatch ? tierMatch[1] : null;

    // Extract posology
    const posMatch = rest.match(/posology:\s*'([^']+)'/);
    const posology = posMatch ? posMatch[1] : '';

    // Extract quantity
    const qtyMatch = rest.match(/quantity:\s*'([^']+)'/);
    const quantity = qtyMatch ? qtyMatch[1] : '';

    // Extract duration
    const durMatch = rest.match(/duration:\s*'([^']+)'/);
    const duration = durMatch ? durMatch[1] : '';

    // Extract instructions
    const instrMatch = rest.match(/instructions:\s*'([^']+)'/);
    const instructions = instrMatch ? instrMatch[1] : '';

    // Extract ingredients
    const ingredients = [];
    const ingRegex = /\{\s*name:\s*'([^']+)',\s*dose:\s*'([^']+)'\s*\}/g;
    let ingMatch;
    while ((ingMatch = ingRegex.exec(rest)) !== null) {
      ingredients.push({ name: ingMatch[1], dose: ingMatch[2] });
    }

    frascos.push({ id, name, category, tier, posology, quantity, duration, instructions, ingredients });
  }

  return frascos;
}

// Load all manipulated frascos
console.log('Loading frasco files...');
const allFrascos = [
  ...extractFrascos('seedData.ts'),   // BASE_FRASCOS
  ...extractFrascos('frascos-group1.ts'),
  ...extractFrascos('frascos-group2.ts'),
  ...extractFrascos('frascos-group3.ts'),
  ...extractFrascos('frascos-group4.ts'),
];

console.log(`Total manipulated frascos loaded: ${allFrascos.length}`);

// Group by category
const byCategory = {};
for (const f of allFrascos) {
  if (!byCategory[f.category]) byCategory[f.category] = [];
  byCategory[f.category].push(f);
}

console.log('\nCategories found:');
for (const [cat, frascos] of Object.entries(byCategory)) {
  console.log(`  ${cat}: ${frascos.length} frascos, ${frascos.reduce((sum, f) => sum + f.ingredients.length, 0)} total ingredients`);
}

// Category labels for naming
const LABELS = {
  sono: '🌙 Super Sono',
  ansiedade: '🧘 Super Ansiedade',
  tireoide: '🦋 Super Tireoide',
  intestino: '🫁 Super Intestino',
  gordura: '🔥 Super Emagrecer',
  cerebro: '🧠 Super Cérebro',
  hormonal: '⚡ Super Hormonal',
  imunidade: '🛡️ Super Imunidade',
  lipoedema: '💜 Super Lipoedema',
  dislipidemia: '❤️ Super Dislipidemia',
  diabetes: '🩸 Super Diabetes',
  disposicao: '☀️ Super Disposição',
  inflamacao: '🔻 Super Anti-Inflamatório',
  detox: '🍃 Super Detox',
  antiparasitario: '🛡️ Super Antiparasitário',
  desmame: '💊 Super Desmame',
  libido: '🔥 Super Libido',
  fertilidade: '🌸 Super Fertilidade',
  musculo: '💪 Super Músculo',
  osso: '🦴 Super Osso',
  base: '📦 Super Base',
  jejum: '☀️ Super Jejum',
  outro: 'Super Outro',
};

// Merge into super frascos
const superFrascos = [];

for (const [category, frascos] of Object.entries(byCategory)) {
  // Collect all unique ingredients (deduplicate by name, keep all doses seen)
  const ingredientMap = new Map();

  for (const f of frascos) {
    for (const ing of f.ingredients) {
      const key = ing.name.toLowerCase().trim();
      if (!ingredientMap.has(key)) {
        ingredientMap.set(key, { name: ing.name, dose: ing.dose });
      } else {
        // Keep the one with the higher dose (try to parse numbers)
        const existing = ingredientMap.get(key);
        const existNum = parseFloat(existing.dose.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        const newNum = parseFloat(ing.dose.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
        if (newNum > existNum) {
          ingredientMap.set(key, { name: ing.name, dose: ing.dose });
        }
      }
    }
  }

  const mergedIngredients = Array.from(ingredientMap.values());

  // Sort ingredients: patented first (® ™), then alphabetically
  mergedIngredients.sort((a, b) => {
    const aPat = a.name.includes('®') || a.name.includes('™') ? 0 : 1;
    const bPat = b.name.includes('®') || b.name.includes('™') ? 0 : 1;
    if (aPat !== bPat) return aPat - bPat;
    return a.name.localeCompare(b.name, 'pt-BR');
  });

  const label = LABELS[category] || `Super ${category}`;
  const count = frascos.length;

  superFrascos.push({
    id: `super-${category}`,
    name: label,
    category,
    posology: `Conforme prescrição médica. Fórmula concentrada com ${mergedIngredients.length} substâncias.`,
    quantity: '60 cápsulas/sachês',
    duration: '2 meses',
    instructions: `Super Frasco: ${mergedIngredients.length} ingredientes únicos combinados de ${count} fórmulas. Selecione as substâncias desejadas e ajuste as doses conforme o paciente.`,
    ingredients: mergedIngredients,
  });

  console.log(`\n✅ ${label}: ${mergedIngredients.length} ingredientes únicos (de ${count} frascos)`);
}

// Generate TypeScript output
let output = `import type { Frasco } from '../types';

// ═══════════════════════════════════════════════════════════════════════════
// SUPER FRASCOS — 1 por categoria com TODAS as substâncias combinadas
// Gerado automaticamente por merge-super-frascos.mjs
// ═══════════════════════════════════════════════════════════════════════════

export const SUPER_FRASCOS: Frasco[] = [\n`;

for (const sf of superFrascos) {
  output += `  {\n`;
  output += `    id: '${sf.id}', name: '${sf.name}', category: '${sf.category}',\n`;
  output += `    posology: '${sf.posology.replace(/'/g, "\\'")}',\n`;
  output += `    quantity: '${sf.quantity}', duration: '${sf.duration}',\n`;
  output += `    instructions: '${sf.instructions.replace(/'/g, "\\'")}',\n`;
  output += `    ingredients: [\n`;
  for (const ing of sf.ingredients) {
    const name = ing.name.replace(/'/g, "\\'");
    const dose = ing.dose.replace(/'/g, "\\'");
    output += `      { name: '${name}', dose: '${dose}' },\n`;
  }
  output += `    ],\n`;
  output += `  },\n`;
}

output += `];\n`;

writeFileSync(resolve(dir, 'super-frascos.ts'), output, 'utf-8');

console.log(`\n═══════════════════════════════════════════`);
console.log(`Total: ${superFrascos.length} super frascos criados`);
console.log(`Total ingredientes: ${superFrascos.reduce((s, f) => s + f.ingredients.length, 0)}`);
console.log(`Arquivo salvo: src/data/super-frascos.ts`);
