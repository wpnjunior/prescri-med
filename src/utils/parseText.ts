import type { Ingredient } from '../types';

export interface ParsedFrasco {
  name: string;
  ingredients: Ingredient[];
  posology: string;
  quantity: string;
  duration: string;
  instructions: string;
}

export function parseCompoundingText(raw: string): ParsedFrasco {
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

  let name = '';
  let posology = '';
  let quantity = '';
  let duration = '';
  let instructions = '';
  const ingredients: Ingredient[] = [];

  // Try to extract a name from the first non-empty line if it looks like a title
  if (lines.length > 0 && !lines[0].includes(':')) {
    name = lines[0];
  }

  for (const line of lines) {
    const lower = line.toLowerCase();

    // Posologia
    if (/posologia\s*[:\-]/i.test(line)) {
      posology = line.replace(/posologia\s*[:\-]\s*/i, '').trim();
      continue;
    }

    // Quantidade / Qtd
    if (/quantidade\s*[:\-]|qtd\s*[:\-]/i.test(line)) {
      quantity = line.replace(/quantidade\s*[:\-]\s*|qtd\s*[:\-]\s*/i, '').trim();
      continue;
    }

    // Duração / Duração do tratamento
    if (/dura[cç][aã]o\s*[:\-]/i.test(line)) {
      duration = line.replace(/dura[cç][aã]o\s*[:\-]\s*/i, '').trim();
      continue;
    }

    // Modo de uso / Instrução / Observação
    if (/modo de uso\s*[:\-]|instru[cç][aã]o\s*[:\-]|observa[cç][aã]o\s*[:\-]|obs\s*[:\-]/i.test(line)) {
      instructions = line.replace(/modo de uso\s*[:\-]\s*|instru[cç][aã]o\s*[:\-]\s*|observa[cç][aã]o\s*[:\-]\s*|obs\s*[:\-]\s*/i, '').trim();
      continue;
    }

    // Skip header-like lines we already handled
    if (lower === name.toLowerCase()) continue;

    // Ingredient pattern: "Name DOSE_VALUE DOSE_UNIT" e.g. "Melatonina 5mg" or "L-Carnitina 500 mg"
    const ingredientMatch = line.match(
      /^([A-Za-zÀ-ÿ\s\-\.0-9]+?)\s+(\d+(?:[.,]\d+)?\s*(?:mcg|mg|g|ui|bi|ml|µg|ug|%|bi UFC)?)\s*$/i
    );
    if (ingredientMatch) {
      const ingName = ingredientMatch[1].trim();
      const ingDose = ingredientMatch[2].trim();
      // avoid adding lines that are clearly posology or quantity text
      if (ingName && ingDose && ingName.split(' ').length <= 6) {
        ingredients.push({ name: ingName, dose: ingDose });
        continue;
      }
    }

    // Alternative ingredient pattern with colon separation: "Substância: 5mg"
    const colonIngredient = line.match(/^([^:]+):\s*(\d+(?:[.,]\d+)?\s*(?:mcg|mg|g|ui|bi|ml|µg|ug|%|bi UFC)?)\s*$/i);
    if (colonIngredient) {
      ingredients.push({ name: colonIngredient[1].trim(), dose: colonIngredient[2].trim() });
      continue;
    }
  }

  // Fallback: scan for inline dose patterns across all text
  if (ingredients.length === 0) {
    const dosePattern = /([A-Za-zÀ-ÿ][\w\sÀ-ÿ\-\.]{1,40}?)\s+(\d+(?:[.,]\d+)?\s*(?:mcg|mg|g|ui|bi|ml|µg|ug|%))/gi;
    let match;
    while ((match = dosePattern.exec(raw)) !== null) {
      const ingName = match[1].trim();
      const ingDose = match[2].trim();
      if (
        ingName.length > 1 &&
        ingName.split(' ').length <= 5 &&
        !/posologia|quantidade|dura[cç]|modo|instru|obs/i.test(ingName)
      ) {
        ingredients.push({ name: ingName, dose: ingDose });
      }
    }
  }

  return { name, ingredients, posology, quantity, duration, instructions };
}
