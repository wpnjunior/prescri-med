// ═══════════════════════════════════════════════════════════════════════════
// TIER GENERATOR — Premium → Intermediário → Essencial
// ═══════════════════════════════════════════════════════════════════════════
// Pega um frasco Premium (branded) e gera versões "downgraded" automaticamente,
// substituindo ingredientes patenteados por equivalentes genéricos/intermediários.
//
// Filosofia (do Manual Mestre v2):
// - Essencial: ingredientes não-branded, formas básicas, baixo custo
// - Intermediário: formas otimizadas (fitossomadas, padronizadas) sem branded
// - Premium: branded patenteados completos

import type { Frasco, Ingredient, Tier } from '../types';

// ── Mapa de substituições ──────────────────────────────────────────────────
// Cada branded → { intermediário, essencial, ratio? }
// ratio: multiplicador da dose (alguns substitutos precisam dose maior pra equivalência)

interface Substitution {
  int: { name: string; ratio?: number };
  ess: { name: string; ratio?: number };
}

const SUBSTITUTION_MAP: Record<string, Substitution> = {
  // Açafrão
  'affron®': {
    int: { name: 'Açafrão padronizado 2% safranal' },
    ess: { name: 'Açafrão (Crocus sativus) extrato seco', ratio: 2 },
  },
  'Saffrin®': {
    int: { name: 'Açafrão padronizado 2%' },
    ess: { name: 'Açafrão extrato seco', ratio: 2 },
  },

  // Curcumina
  'CurQfen®': {
    int: { name: 'Curcumina fitossomada' },
    ess: { name: 'Curcumina + Piperina', ratio: 1.5 },
  },
  'CurQfen® (curcumina + fenugreek)': {
    int: { name: 'Curcumina fitossomada' },
    ess: { name: 'Curcumina + Piperina', ratio: 1.5 },
  },
  'CurcuWIN®': {
    int: { name: 'Curcumina fitossomada' },
    ess: { name: 'Curcumina + Piperina', ratio: 1.5 },
  },
  'Meriva®': {
    int: { name: 'Curcumina fitossomada' },
    ess: { name: 'Curcumina + Piperina', ratio: 1.5 },
  },

  // Ashwagandha
  'Sensoril®': {
    int: { name: 'Ashwagandha extrato padronizado 5% withanólidos' },
    ess: { name: 'Ashwagandha (Withania somnifera) extrato seco', ratio: 1.5 },
  },
  'KSM-66®': {
    int: { name: 'Ashwagandha extrato padronizado 5%' },
    ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 },
  },
  'KSM-66® Ashwagandha': {
    int: { name: 'Ashwagandha extrato padronizado 5%' },
    ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 },
  },
  'Sensoril® (ashwagandha)': {
    int: { name: 'Ashwagandha extrato padronizado 5%' },
    ess: { name: 'Ashwagandha extrato seco', ratio: 1.5 },
  },

  // Berberina
  'BioBerON™': {
    int: { name: 'Berberina fitossomada' },
    ess: { name: 'Berberina HCl', ratio: 2 },
  },
  'BioBerON™ (berberina otimizada)': {
    int: { name: 'Berberina fitossomada' },
    ess: { name: 'Berberina HCl', ratio: 2 },
  },
  'GlucoVantage®': {
    int: { name: 'Di-hidroberberina genérica' },
    ess: { name: 'Berberina HCl', ratio: 3 },
  },
  'GlucoVantage® (di-hidroberberina)': {
    int: { name: 'Di-hidroberberina genérica' },
    ess: { name: 'Berberina HCl', ratio: 3 },
  },

  // Citrus / cromo
  'Crominex® 3+': {
    int: { name: 'Cromo niacinato' },
    ess: { name: 'Cromo picolinato' },
  },
  'Crominex® 3+ (cromo elementar)': {
    int: { name: 'Cromo niacinato' },
    ess: { name: 'Cromo picolinato' },
  },
  'Crominex® 3+ (cromo patenteado)': {
    int: { name: 'Cromo niacinato' },
    ess: { name: 'Cromo picolinato' },
  },
  'CitrusiM®': {
    int: { name: 'Citrus aurantium (extrato padronizado bioflavonoides)' },
    ess: { name: 'Hesperidina + Diosmina', ratio: 1.5 },
  },
  'CitrusiM® (citrus bioflavonoides)': {
    int: { name: 'Citrus aurantium padronizado' },
    ess: { name: 'Hesperidina + Diosmina', ratio: 1.5 },
  },
  'CitrusiM® (citrus bioflavonoides patenteados)': {
    int: { name: 'Citrus aurantium padronizado' },
    ess: { name: 'Hesperidina + Diosmina', ratio: 1.5 },
  },
  'Eriomin®': {
    int: { name: 'Eriocitrina genérica' },
    ess: { name: 'Hesperidina', ratio: 1.5 },
  },
  'Eriomin® (eriocitrina)': {
    int: { name: 'Eriocitrina genérica' },
    ess: { name: 'Hesperidina', ratio: 1.5 },
  },
  'Eriomin® (flavonoides cítricos patenteados)': {
    int: { name: 'Eriocitrina genérica' },
    ess: { name: 'Hesperidina', ratio: 1.5 },
  },
  'Berganina®': {
    int: { name: 'Bergamota padronizada (BPF flavonoides)' },
    ess: { name: 'Bergamota extrato seco', ratio: 1.5 },
  },
  'Berganina® (bergamota)': {
    int: { name: 'Bergamota padronizada' },
    ess: { name: 'Bergamota extrato seco', ratio: 1.5 },
  },

  // Resveratrol
  'ResviTech™': {
    int: { name: 'Trans-resveratrol micronizado' },
    ess: { name: 'Resveratrol (Polygonum cuspidatum)' },
  },
  'ResviTech™ (resveratrol enriquecido)': {
    int: { name: 'Trans-resveratrol micronizado' },
    ess: { name: 'Resveratrol (Polygonum cuspidatum)' },
  },
  'ResviTech™ (resveratrol)': {
    int: { name: 'Trans-resveratrol micronizado' },
    ess: { name: 'Resveratrol (Polygonum cuspidatum)' },
  },

  // Pinho/Pycnogenol
  'Pycnogenol®': {
    int: { name: 'Extrato de pinho marítimo padronizado 65%' },
    ess: { name: 'Extrato de semente de uva (OPC)', ratio: 2 },
  },
  'Pycnogenol® (extrato de pinho marítimo)': {
    int: { name: 'Extrato de pinho marítimo padronizado 65%' },
    ess: { name: 'Extrato de semente de uva (OPC)', ratio: 2 },
  },
  'Pycnogenol® (pinho marítimo)': {
    int: { name: 'Extrato de pinho marítimo padronizado 65%' },
    ess: { name: 'Extrato de semente de uva (OPC)', ratio: 2 },
  },

  // CoQ10
  'Ubiquinol Kaneka®': {
    int: { name: 'Ubiquinol genérico' },
    ess: { name: 'CoQ10 ubiquinona', ratio: 2 },
  },
  'Ubiquinol Kaneka® (CoQ10 reduzida)': {
    int: { name: 'Ubiquinol genérico' },
    ess: { name: 'CoQ10 ubiquinona', ratio: 2 },
  },
  'Ubiquinol Kaneka® (CoQ10)': {
    int: { name: 'Ubiquinol genérico' },
    ess: { name: 'CoQ10 ubiquinona', ratio: 2 },
  },

  // Magnésio
  'Magtein®': {
    int: { name: 'Magnésio L-treonato genérico' },
    ess: { name: 'Magnésio bisglicinato', ratio: 1.2 },
  },
  'Magtein® (magnésio L-treonato)': {
    int: { name: 'Magnésio L-treonato genérico' },
    ess: { name: 'Magnésio bisglicinato', ratio: 1.2 },
  },

  // Zembrin / Sceletium
  'Zembrin®': {
    int: { name: 'Sceletium tortuosum extrato padronizado' },
    ess: { name: 'Sceletium tortuosum extrato seco', ratio: 2 },
  },
  'Zembrin® (Sceletium tortuosum)': {
    int: { name: 'Sceletium tortuosum extrato padronizado' },
    ess: { name: 'Sceletium tortuosum extrato seco', ratio: 2 },
  },

  // GABA
  'PharmaGABA®': {
    int: { name: 'GABA fermentado genérico' },
    ess: { name: 'GABA' },
  },
  'PharmaGABA® (GABA fermentado)': {
    int: { name: 'GABA fermentado genérico' },
    ess: { name: 'GABA' },
  },

  // LacFer / Lactoferrina
  'LacFer™': {
    int: { name: 'Lactoferrina genérica' },
    ess: { name: 'Lactoferrina (concentrada)' },
  },
  'LacFer™ (lactoferrina patenteada)': {
    int: { name: 'Lactoferrina genérica' },
    ess: { name: 'Lactoferrina (concentrada)' },
  },
  'LacFer™ (lactoferrina)': {
    int: { name: 'Lactoferrina genérica' },
    ess: { name: 'Lactoferrina (concentrada)' },
  },

  // Miodesin
  'Miodesin®': {
    int: { name: 'Mix anti-inflamatório (Boswellia + Uncaria + Curcumina)' },
    ess: { name: 'Boswellia serrata extrato seco', ratio: 1.5 },
  },
  'Miodesin® (Cordia + Maytenus + Uncaria)': {
    int: { name: 'Mix Boswellia + Uncaria + Curcumina' },
    ess: { name: 'Boswellia serrata extrato seco', ratio: 1.5 },
  },

  // Brain Factor / cognição
  'Brain Factor-7®': {
    int: { name: 'Proteína de seda hidrolisada (BF-7 genérico)' },
    ess: { name: 'Fosfatidilcolina', ratio: 2 },
  },
  'Brain Factor-7® (proteína de seda)': {
    int: { name: 'Proteína de seda hidrolisada genérica' },
    ess: { name: 'Fosfatidilcolina', ratio: 2 },
  },
  'Brain Factor-7® (proteína de seda hidrolisada)': {
    int: { name: 'Proteína de seda hidrolisada genérica' },
    ess: { name: 'Fosfatidilcolina', ratio: 2 },
  },
  'CitoRepair™ 2.0': {
    int: { name: 'Citicolina (CDP-Colina)' },
    ess: { name: 'Alfa-GPC' },
  },
  'CitoRepair™ 2.0 (mitocondrial neural)': {
    int: { name: 'Citicolina (CDP-Colina)' },
    ess: { name: 'Alfa-GPC' },
  },

  // enXtra / Galanga
  'enXtra®': {
    int: { name: 'Alpinia galanga padronizada' },
    ess: { name: 'Alpinia galanga extrato seco', ratio: 1.5 },
  },
  'enXtra® (Alpinia galanga)': {
    int: { name: 'Alpinia galanga padronizada' },
    ess: { name: 'Alpinia galanga extrato seco', ratio: 1.5 },
  },

  // Neuravena / Aveia
  'Neuravena®': {
    int: { name: 'Aveia (Avena sativa) extrato padronizado' },
    ess: { name: 'Aveia extrato seco', ratio: 1.5 },
  },
  'Neuravena® (extrato de aveia)': {
    int: { name: 'Aveia extrato padronizado' },
    ess: { name: 'Aveia extrato seco', ratio: 1.5 },
  },

  // Clock (cronobiológico — difícil substituir, então mantém só essencial básico)
  'Clock®': {
    int: { name: 'Mix circadiano (melatonina + magnésio + L-teanina)' },
    ess: { name: 'Melatonina 0,3mg + Magnésio bisglicinato 200mg' },
  },
  'Clock® (sincronizador)': {
    int: { name: 'Mix circadiano genérico' },
    ess: { name: 'Melatonina + Magnésio' },
  },
  'Clock® (sincronizador circadiano)': {
    int: { name: 'Mix circadiano genérico' },
    ess: { name: 'Melatonina + Magnésio' },
  },
  'Clock® (ingrediente cronobiológico)': {
    int: { name: 'Mix circadiano genérico' },
    ess: { name: 'Melatonina + Magnésio' },
  },

  // Hormonais
  'Ormonelle™': {
    int: { name: 'Mix isoflavonas de soja + Cimicífuga + Trifolium' },
    ess: { name: 'Isoflavonas de soja', ratio: 1.5 },
  },
  'Ormonelle™ (suporte neuroendócrino feminino)': {
    int: { name: 'Mix isoflavonas + Cimicífuga' },
    ess: { name: 'Isoflavonas de soja', ratio: 1.5 },
  },
  'EVA360™': {
    int: { name: 'Vitamina E + Selênio + Tocotrienóis' },
    ess: { name: 'Vitamina E natural' },
  },
  'EVA360™ (antioxidante feminino)': {
    int: { name: 'Vit E + Selênio + Tocotrienóis' },
    ess: { name: 'Vitamina E natural' },
  },
  'MyoQuiron™': {
    int: { name: 'Mio-inositol + D-Quiroinositol (40:1)' },
    ess: { name: 'Mio-inositol' },
  },
  'MyoQuiron™ (eixo ovariano)': {
    int: { name: 'Mio-inositol + D-Quiroinositol' },
    ess: { name: 'Mio-inositol' },
  },

  // PEA
  'PEA BioActive®': {
    int: { name: 'PEA micronizada (palmitoiletanolamida)' },
    ess: { name: 'PEA (palmitoiletanolamida)' },
  },
  'PEA BioActive® (palmitoiletanolamida)': {
    int: { name: 'PEA micronizada' },
    ess: { name: 'PEA' },
  },

  // BIOintestil
  'BIOintestil®': {
    int: { name: 'Mix probiótico (Saccharomyces + Lactobacillus)' },
    ess: { name: 'Saccharomyces boulardii' },
  },
  'BIOintestil® (modulador microbioma)': {
    int: { name: 'Mix probiótico genérico' },
    ess: { name: 'Saccharomyces boulardii' },
  },
  'BIOintestil® (extrato patenteado)': {
    int: { name: 'Mix probiótico genérico' },
    ess: { name: 'Saccharomyces boulardii' },
  },

  // Pele
  'SiliciuMax®': {
    int: { name: 'Silício orgânico (ácido ortossilícico)' },
    ess: { name: 'Sílica + Biotina' },
  },
  'SiliciuMax® (silício orgânico)': {
    int: { name: 'Silício orgânico genérico' },
    ess: { name: 'Sílica + Biotina' },
  },
  'Keranat®': {
    int: { name: 'Mix capilar (millet + biotina + sílica)' },
    ess: { name: 'Biotina + L-cisteína' },
  },
  'Keranat® (extrato de millet)': {
    int: { name: 'Mix capilar genérico' },
    ess: { name: 'Biotina + L-cisteína' },
  },

  // Serenzo / Citrus
  'Serenzo™': {
    int: { name: 'Citrus aurantium dulcis padronizado' },
    ess: { name: 'Casca de laranja amarga (Citrus aurantium)', ratio: 1.5 },
  },
  'Serenzo™ (citrus padronizado)': {
    int: { name: 'Citrus aurantium dulcis padronizado' },
    ess: { name: 'Casca de laranja amarga', ratio: 1.5 },
  },

  // Peptídeos / anabolizantes
  'PeptiStrong®': {
    int: { name: 'Peptídeos de fava bioativos genéricos' },
    ess: { name: 'Whey protein hidrolisado', ratio: 2 },
  },
  'PeptiStrong® (peptídeos de fava bioativos)': {
    int: { name: 'Peptídeos de fava bioativos' },
    ess: { name: 'Whey protein hidrolisado', ratio: 2 },
  },

  // Shilajit
  'Shilajit padronizado': {
    int: { name: 'Shilajit (resina) extrato padronizado' },
    ess: { name: 'Shilajit em pó' },
  },
};

// ── Função principal: gera variantes Intermediário e Essencial ──────────────

/**
 * Detecta se um ingrediente é branded (tem ®, ™, ou está no mapa).
 */
function isBranded(name: string): boolean {
  if (/®|™/.test(name)) return true;
  return Object.keys(SUBSTITUTION_MAP).some(k => name.includes(k.replace(/®|™/g, '')));
}

/**
 * Substitui um ingrediente para o tier desejado.
 * Retorna null se o ingrediente não tem substituto (ingrediente já genérico).
 */
function substituteIngredient(ing: Ingredient, tier: 'int' | 'ess'): Ingredient | null {
  // Match exato no mapa
  const exact = SUBSTITUTION_MAP[ing.name];
  if (exact) {
    const sub = exact[tier];
    return {
      name: sub.name,
      dose: sub.ratio ? scaleDose(ing.dose, sub.ratio) : ing.dose,
    };
  }

  // Match parcial (ingrediente contém uma chave conhecida)
  for (const key of Object.keys(SUBSTITUTION_MAP)) {
    if (ing.name.includes(key.replace(/®|™/g, ''))) {
      const sub = SUBSTITUTION_MAP[key][tier];
      return {
        name: sub.name,
        dose: sub.ratio ? scaleDose(ing.dose, sub.ratio) : ing.dose,
      };
    }
  }

  // Não branded — mantém como está
  return ing;
}

/**
 * Multiplica a dose de um ingrediente por um fator.
 * Ex: scaleDose("250mg", 1.5) → "375mg"
 */
function scaleDose(dose: string, ratio: number): string {
  const match = dose.match(/^([\d.,]+)\s*(\w+)/);
  if (!match) return dose;
  const num = parseFloat(match[1].replace(',', '.'));
  const unit = match[2];
  const scaled = Math.round(num * ratio);
  return `${scaled}${unit}`;
}

/**
 * Gera as variantes Intermediário e Essencial de um frasco Premium.
 * Retorna array com [intermediário, essencial].
 */
export function generateTiersFromPremium(premium: Frasco): [Frasco, Frasco] {
  const baseId = premium.id.replace(/-pre$|-prem$|-premium$/, '');

  const intermediate: Frasco = {
    ...premium,
    id: `${baseId}-int`,
    name: premium.name.replace(/Premium|Signature/g, 'Intermediário').replace(/\s+$/, ''),
    tier: 'intermediario',
    branded: false,
    ingredients: premium.ingredients.map(ing => substituteIngredient(ing, 'int') ?? ing),
  };

  const essencial: Frasco = {
    ...premium,
    id: `${baseId}-ess`,
    name: premium.name.replace(/Premium|Signature/g, 'Essencial').replace(/\s+$/, ''),
    tier: 'essencial',
    branded: false,
    ingredients: premium.ingredients.map(ing => substituteIngredient(ing, 'ess') ?? ing),
  };

  return [intermediate, essencial];
}

/**
 * Aplica o gerador a um array de frascos Premium e retorna os 3 tiers de cada.
 */
export function expandToAllTiers(premiums: Frasco[]): Frasco[] {
  const result: Frasco[] = [];
  for (const p of premiums) {
    // Marca o original como branded:true se ainda não estiver
    const tagged: Frasco = { ...p, tier: p.tier ?? 'premium', branded: p.branded ?? true };
    const [intermediate, essencial] = generateTiersFromPremium(tagged);
    result.push(tagged, intermediate, essencial);
  }
  return result;
}

/**
 * Lista de ingredientes branded conhecidos — usada para detectar e marcar
 * frascos como branded automaticamente.
 */
export const KNOWN_BRANDED_INGREDIENTS = Object.keys(SUBSTITUTION_MAP);

/**
 * Verifica se um frasco usa pelo menos 1 ingrediente branded.
 */
export function frascoIsBranded(frasco: Frasco): boolean {
  return frasco.ingredients.some(i => isBranded(i.name));
}
