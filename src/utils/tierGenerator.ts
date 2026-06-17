// ═══════════════════════════════════════════════════════════════════════════
// TIER GENERATOR — Premium → Intermediário → Essencial
// ═══════════════════════════════════════════════════════════════════════════
// Pega um frasco Premium (branded) e gera versões "downgraded" automaticamente,
// substituindo ingredientes patenteados por equivalentes genéricos.
import type { Frasco, Ingredient } from '../types';

interface Substitution {
  int: { name: string; ratio?: number };
  ess: { name: string; ratio?: number };
}

const SUBSTITUTION_MAP: Record<string, Substitution> = {
  'affron®': { int: { name: 'Açafrão padronizado 2% safranal' }, ess: { name: 'Açafrão (Crocus sativus) extrato seco', ratio: 2 } },
  'CurQfen®': { int: { name: 'Curcumina fitossomada' }, ess: { name: 'Curcumina + Piperina', ratio: 1.5 } },
  'CurQfen® (curcumina + fenugreek)': { int: { name: 'Curcumina fitossomada' }, ess: { name: 'Curcumina + Piperina', ratio: 1.5 } },
  'Sensoril®': { int: { name: 'Ashwagandha extrato padronizado 5% withanólidos' }, ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 } },
  'Sensoril® (ashwagandha)': { int: { name: 'Ashwagandha extrato padronizado 5%' }, ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 } },
  'KSM-66®': { int: { name: 'Ashwagandha extrato padronizado 5%' }, ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 } },
  'KSM-66® Ashwagandha': { int: { name: 'Ashwagandha extrato padronizado 5%' }, ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 } },
  'BioBerON™': { int: { name: 'Berberina fitossomada' }, ess: { name: 'Berberina HCl', ratio: 2 } },
  'BioBerON™ (berberina otimizada)': { int: { name: 'Berberina fitossomada' }, ess: { name: 'Berberina HCl', ratio: 2 } },
  'GlucoVantage®': { int: { name: 'Di-hidroberberina genérica' }, ess: { name: 'Berberina HCl', ratio: 3 } },
  'GlucoVantage® (di-hidroberberina)': { int: { name: 'Di-hidroberberina genérica' }, ess: { name: 'Berberina HCl', ratio: 3 } },
  'Crominex® 3+': { int: { name: 'Cromo niacinato' }, ess: { name: 'Cromo picolinato' } },
  'Crominex® 3+ (cromo elementar)': { int: { name: 'Cromo niacinato' }, ess: { name: 'Cromo picolinato' } },
  'CitrusiM®': { int: { name: 'Citrus aurantium padronizado' }, ess: { name: 'Hesperidina + Diosmina', ratio: 1.5 } },
  'CitrusiM® (citrus bioflavonoides)': { int: { name: 'Citrus aurantium padronizado' }, ess: { name: 'Hesperidina + Diosmina', ratio: 1.5 } },
  'Eriomin®': { int: { name: 'Eriocitrina genérica' }, ess: { name: 'Hesperidina', ratio: 1.5 } },
  'Eriomin® (eriocitrina)': { int: { name: 'Eriocitrina genérica' }, ess: { name: 'Hesperidina', ratio: 1.5 } },
  'Berganina®': { int: { name: 'Bergamota padronizada' }, ess: { name: 'Bergamota extrato seco', ratio: 1.5 } },
  'Berganina® (bergamota)': { int: { name: 'Bergamota padronizada' }, ess: { name: 'Bergamota extrato seco', ratio: 1.5 } },
  'ResviTech™': { int: { name: 'Trans-resveratrol micronizado' }, ess: { name: 'Resveratrol (Polygonum cuspidatum)' } },
  'ResviTech™ (resveratrol enriquecido)': { int: { name: 'Trans-resveratrol micronizado' }, ess: { name: 'Resveratrol (Polygonum cuspidatum)' } },
  'Pycnogenol®': { int: { name: 'Extrato de pinho marítimo padronizado 65%' }, ess: { name: 'Extrato de semente de uva (OPC)', ratio: 2 } },
  'Pycnogenol® (extrato de pinho marítimo)': { int: { name: 'Extrato de pinho marítimo padronizado 65%' }, ess: { name: 'Extrato de semente de uva (OPC)', ratio: 2 } },
  'Ubiquinol Kaneka®': { int: { name: 'Ubiquinol genérico' }, ess: { name: 'CoQ10 ubiquinona', ratio: 2 } },
  'Ubiquinol Kaneka® (CoQ10 reduzida)': { int: { name: 'Ubiquinol genérico' }, ess: { name: 'CoQ10 ubiquinona', ratio: 2 } },
  'Magtein®': { int: { name: 'Magnésio L-treonato genérico' }, ess: { name: 'Magnésio bisglicinato', ratio: 1.2 } },
  'Magtein® (magnésio L-treonato)': { int: { name: 'Magnésio L-treonato genérico' }, ess: { name: 'Magnésio bisglicinato', ratio: 1.2 } },
  'Zembrin®': { int: { name: 'Sceletium tortuosum extrato padronizado' }, ess: { name: 'Sceletium tortuosum extrato seco', ratio: 2 } },
  'Zembrin® (Sceletium tortuosum)': { int: { name: 'Sceletium tortuosum extrato padronizado' }, ess: { name: 'Sceletium tortuosum extrato seco', ratio: 2 } },
  'PharmaGABA®': { int: { name: 'GABA fermentado genérico' }, ess: { name: 'GABA' } },
  'PharmaGABA® (GABA fermentado)': { int: { name: 'GABA fermentado genérico' }, ess: { name: 'GABA' } },
  'LacFer™': { int: { name: 'Lactoferrina genérica' }, ess: { name: 'Lactoferrina (concentrada)' } },
  'LacFer™ (lactoferrina patenteada)': { int: { name: 'Lactoferrina genérica' }, ess: { name: 'Lactoferrina (concentrada)' } },
  'Miodesin®': { int: { name: 'Mix anti-inflamatório (Boswellia + Uncaria + Curcumina)' }, ess: { name: 'Boswellia serrata extrato seco', ratio: 1.5 } },
  'Miodesin® (Cordia + Maytenus + Uncaria)': { int: { name: 'Mix Boswellia + Uncaria + Curcumina' }, ess: { name: 'Boswellia serrata extrato seco', ratio: 1.5 } },
  'Brain Factor-7®': { int: { name: 'Proteína de seda hidrolisada genérica' }, ess: { name: 'Fosfatidilcolina', ratio: 2 } },
  'Brain Factor-7® (proteína de seda)': { int: { name: 'Proteína de seda hidrolisada genérica' }, ess: { name: 'Fosfatidilcolina', ratio: 2 } },
  'CitoRepair™ 2.0': { int: { name: 'Citicolina (CDP-Colina)' }, ess: { name: 'Alfa-GPC' } },
  'CitoRepair™ 2.0 (mitocondrial neural)': { int: { name: 'Citicolina (CDP-Colina)' }, ess: { name: 'Alfa-GPC' } },
  'enXtra®': { int: { name: 'Alpinia galanga padronizada' }, ess: { name: 'Alpinia galanga extrato seco', ratio: 1.5 } },
  'enXtra® (Alpinia galanga)': { int: { name: 'Alpinia galanga padronizada' }, ess: { name: 'Alpinia galanga extrato seco', ratio: 1.5 } },
  'Neuravena®': { int: { name: 'Aveia extrato padronizado' }, ess: { name: 'Aveia extrato seco', ratio: 1.5 } },
  'Neuravena® (extrato de aveia)': { int: { name: 'Aveia extrato padronizado' }, ess: { name: 'Aveia extrato seco', ratio: 1.5 } },
  'Clock®': { int: { name: 'Mix circadiano (melatonina + magnésio + L-teanina)' }, ess: { name: 'Melatonina 0,3mg + Magnésio bisglicinato 200mg' } },
  'Clock® (sincronizador)': { int: { name: 'Mix circadiano genérico' }, ess: { name: 'Melatonina + Magnésio' } },
  'Clock® (sincronizador circadiano)': { int: { name: 'Mix circadiano genérico' }, ess: { name: 'Melatonina + Magnésio' } },
  'Ormonelle™': { int: { name: 'Mix isoflavonas + Cimicífuga' }, ess: { name: 'Isoflavonas de soja', ratio: 1.5 } },
  'Ormonelle™ (suporte neuroendócrino feminino)': { int: { name: 'Mix isoflavonas + Cimicífuga' }, ess: { name: 'Isoflavonas de soja', ratio: 1.5 } },
  'EVA360™': { int: { name: 'Vit E + Selênio + Tocotrienóis' }, ess: { name: 'Vitamina E natural' } },
  'EVA360™ (antioxidante feminino)': { int: { name: 'Vit E + Selênio + Tocotrienóis' }, ess: { name: 'Vitamina E natural' } },
  'MyoQuiron™': { int: { name: 'Mio-inositol + D-Quiroinositol' }, ess: { name: 'Mio-inositol' } },
  'MyoQuiron™ (eixo ovariano)': { int: { name: 'Mio-inositol + D-Quiroinositol' }, ess: { name: 'Mio-inositol' } },
  'PEA BioActive®': { int: { name: 'PEA micronizada' }, ess: { name: 'PEA (palmitoiletanolamida)' } },
  'PEA BioActive® (palmitoiletanolamida)': { int: { name: 'PEA micronizada' }, ess: { name: 'PEA' } },
  'BIOintestil®': { int: { name: 'Mix probiótico genérico' }, ess: { name: 'Saccharomyces boulardii' } },
  'BIOintestil® (modulador microbioma)': { int: { name: 'Mix probiótico genérico' }, ess: { name: 'Saccharomyces boulardii' } },
  'SiliciuMax®': { int: { name: 'Silício orgânico genérico' }, ess: { name: 'Sílica + Biotina' } },
  'SiliciuMax® (silício orgânico)': { int: { name: 'Silício orgânico genérico' }, ess: { name: 'Sílica + Biotina' } },
  'Keranat®': { int: { name: 'Mix capilar genérico' }, ess: { name: 'Biotina + L-cisteína' } },
  'Keranat® (extrato de millet)': { int: { name: 'Mix capilar genérico' }, ess: { name: 'Biotina + L-cisteína' } },
  'Serenzo™': { int: { name: 'Citrus aurantium dulcis padronizado' }, ess: { name: 'Casca de laranja amarga', ratio: 1.5 } },
  'Serenzo™ (citrus padronizado)': { int: { name: 'Citrus aurantium dulcis padronizado' }, ess: { name: 'Casca de laranja amarga', ratio: 1.5 } },
  'PeptiStrong®': { int: { name: 'Peptídeos de fava bioativos' }, ess: { name: 'Whey protein hidrolisado', ratio: 2 } },
  'PeptiStrong® (peptídeos de fava bioativos)': { int: { name: 'Peptídeos de fava bioativos' }, ess: { name: 'Whey protein hidrolisado', ratio: 2 } },
  'Shilajit padronizado': { int: { name: 'Shilajit (resina) extrato padronizado' }, ess: { name: 'Shilajit em pó' } },
};

function isBranded(name: string): boolean {
  if (/®|™/.test(name)) return true;
  return Object.keys(SUBSTITUTION_MAP).some(k => name.includes(k.replace(/®|™/g, '')));
}

function scaleDose(dose: string, ratio: number): string {
  const match = dose.match(/^([\d.,]+)\s*(\w+)/);
  if (!match) return dose;
  const num = parseFloat(match[1].replace(',', '.'));
  const unit = match[2];
  return `${Math.round(num * ratio)}${unit}`;
}

function substituteIngredient(ing: Ingredient, tier: 'int' | 'ess'): Ingredient {
  const exact = SUBSTITUTION_MAP[ing.name];
  if (exact) {
    const sub = exact[tier];
    return { name: sub.name, dose: sub.ratio ? scaleDose(ing.dose, sub.ratio) : ing.dose };
  }
  for (const key of Object.keys(SUBSTITUTION_MAP)) {
    if (ing.name.includes(key.replace(/®|™/g, ''))) {
      const sub = SUBSTITUTION_MAP[key][tier];
      return { name: sub.name, dose: sub.ratio ? scaleDose(ing.dose, sub.ratio) : ing.dose };
    }
  }
  return ing;
}

export function generateTiersFromPremium(premium: Frasco): [Frasco, Frasco] {
  const baseId = premium.id.replace(/-pre$|-prem$|-premium$/, '');
  const intermediate: Frasco = {
    ...premium,
    id: `${baseId}-int`,
    name: premium.name.replace(/Premium|Signature/g, 'Intermediário').replace(/\s+$/, ''),
    tier: 'intermediario',
    branded: false,
    ingredients: premium.ingredients.map(ing => substituteIngredient(ing, 'int')),
  };
  const essencial: Frasco = {
    ...premium,
    id: `${baseId}-ess`,
    name: premium.name.replace(/Premium|Signature/g, 'Essencial').replace(/\s+$/, ''),
    tier: 'essencial',
    branded: false,
    ingredients: premium.ingredients.map(ing => substituteIngredient(ing, 'ess')),
  };
  return [intermediate, essencial];
}

export function expandToAllTiers(premiums: Frasco[]): Frasco[] {
  const result: Frasco[] = [];
  for (const p of premiums) {
    const tagged: Frasco = { ...p, tier: p.tier ?? 'premium', branded: p.branded ?? true };
    const [intermediate, essencial] = generateTiersFromPremium(tagged);
    result.push(tagged, intermediate, essencial);
  }
  return result;
}

export const KNOWN_BRANDED_INGREDIENTS = Object.keys(SUBSTITUTION_MAP);

export function frascoIsBranded(frasco: Frasco): boolean {
  return frasco.ingredients.some(i => isBranded(i.name));
}
