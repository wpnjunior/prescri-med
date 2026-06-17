// ═══════════════════════════════════════════════════════════════════════════
// PROTOCOLO GESTACIONAL — 1º TRIMESTRE (12 semanas)
// ═══════════════════════════════════════════════════════════════════════════
// Baseado em evidências:
// - Choline 450mg pregnancy (AMA 2017, Spoelstra 2023, BBRF)
// - Vit D 4000 IU safe (Cochrane CD013446; Hollis 2011)
// - Methylfolate >folic acid (especialmente em MTHFR)
// - DHA 200mg+ (consensus Brasileiro Sociedade Brasileira de Pediatria)
// - B6 P5P 25mg náuseas (FDA-approved indication)
// - Ferro bisglicinato (Milman 2024 — 64% menos efeito GI vs sulfato)
// - Magnésio bisglicinato 300mg (Supakatisant 2015 — câimbras)
// - Probiótico Lactobacillus rhamnosus GG + Bifido lactis BB-12 (ISAPP)
//
// CONTRAINDICADOS em gestação: Ashwagandha, Berberina, Rhodiola, retinol >3000mcg/d,
// curcumina em alta dose, resveratrol, vitex, dong quai, bromelaína em alta dose.

import type { Frasco } from '../types';

export const FRASCOS_GESTACIONAL: Frasco[] = [

  // ─── BASE GESTACIONAL — Sachê matutino ─────────────────────────────────────
  {
    id: 'gest-base-manha',
    name: '🤰 Base Gestacional Manhã — Sachê',
    category: 'base',
    tier: 'intermediario',
    layer: 'base',
    posology: '1 sachê em 150ml de água, junto com o café da manhã',
    quantity: '60 sachês',
    duration: '90 dias (renovável até pós-parto)',
    instructions: '⚠️ GESTAÇÃO — Confirmar uso com obstetra. Hidrossolúvel. Tomar com refeição rica em proteína.',
    ingredients: [
      { name: 'Metilfolato (5-MTHF Quatrefolic®)', dose: '800mcg' },
      { name: 'Metilcobalamina (Vit B12 ativa)', dose: '1.000mcg' },
      { name: 'Piridoxal-5-fosfato (Vit B6 ativa)', dose: '25mg' },
      { name: 'Benfotiamina (Vit B1)', dose: '50mg' },
      { name: 'Riboflavina-5-P (Vit B2)', dose: '10mg' },
      { name: 'Niacinamida (Vit B3, não Niacina)', dose: '50mg' },
      { name: 'Pantotenato de cálcio (Vit B5)', dose: '100mg' },
      { name: 'Biotina', dose: '300mcg' },
      { name: 'Vitamina C tamponada (ascorbato de cálcio)', dose: '500mg' },
      { name: 'Iodeto de potássio (Iodo elementar 150mcg)', dose: '195mcg' },
      { name: 'Zinco bisglicinato (Zn 15mg elementar)', dose: '75mg' },
      { name: 'Selênio L-selenometionina', dose: '100mcg' },
      { name: 'Colina bitartarato', dose: '300mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },

  // ─── LIPOSSOLÚVEIS — Cápsula oleosa (almoço) ───────────────────────────────
  {
    id: 'gest-lipossoluvel-almoco',
    name: '🤰 Lipossolúveis Gestacionais — Cápsula Oleosa',
    category: 'base',
    tier: 'intermediario',
    layer: 'base',
    posology: '2 cápsulas com o almoço (refeição com gordura)',
    quantity: '60 cápsulas oleosas (MCT/azeite)',
    duration: '90 dias',
    instructions: '⚠️ ATENÇÃO: SEM retinol (palmitato de Vitamina A). Apenas BETA-CAROTENO (precursor, seguro em gestação). Tomar sempre com gordura.',
    ingredients: [
      { name: 'Vitamina D3 colecalciferol (5.000 UI total — 2 cáps)', dose: '5.000 UI' },
      { name: 'Vitamina K2 MK-7 trans', dose: '100mcg' },
      { name: 'Vitamina E natural d-alfa-tocoferol', dose: '50 UI' },
      { name: 'Beta-caroteno (Vit A precursor, NÃO retinol)', dose: '5.000 UI' },
      { name: 'DHA (ácido docosahexaenoico de algas)', dose: '300mg' },
      { name: 'EPA (ácido eicosapentaenoico)', dose: '100mg' },
      { name: 'Veículo oleoso MCT qsp', dose: '1 cápsula' },
    ],
  },

  // ─── COLINA + DHA EXTRA — opcional reforço cognitivo fetal ──────────────────
  {
    id: 'gest-colina-dha-reforco',
    name: '🧠 Colina + DHA Reforço (Cognitivo Fetal)',
    category: 'base',
    tier: 'premium',
    layer: 'modulo',
    posology: '1 cápsula no almoço + 1 no jantar',
    quantity: '60 cápsulas',
    duration: '90 dias (todo o pré-natal)',
    instructions: 'Reforço de colina e DHA — atinge ~550mg colina/dia + 500mg DHA/dia (AMA recommendation). Cruciais para neurogênese fetal e hipocampo.',
    ingredients: [
      { name: 'Colina bitartarato', dose: '125mg (total 250mg/dia)' },
      { name: 'DHA (algal, vegano, mercury-free)', dose: '150mg (total 300mg/dia)' },
      { name: 'Fosfatidilcolina (lecitina de girassol)', dose: '100mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },

  // ─── MAGNÉSIO NOTURNO (sono, cãibras, prevenção sintomas) ────────────────
  {
    id: 'gest-magnesio-noite',
    name: '🤰 Magnésio Gestacional Noturno',
    category: 'base',
    tier: 'essencial',
    layer: 'modulo',
    posology: '1 cápsula 30-45 min antes de dormir',
    quantity: '60 cápsulas',
    duration: 'Uso contínuo',
    instructions: 'Para câimbras nas pernas, qualidade do sono, prevenção de pré-eclâmpsia. Forma bisglicinato (melhor tolerância GI).',
    ingredients: [
      { name: 'Magnésio bisglicinato (Mg elementar 300mg)', dose: '1.500mg' },
      { name: 'Glicina (calmante leve)', dose: '500mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },

  // ─── FERRO BISGLICINATO (SE FERRITINA BAIXA — checar lab antes) ────────────
  {
    id: 'gest-ferro-bisglicinato',
    name: '🤰 Ferro Bisglicinato Gestacional',
    category: 'base',
    tier: 'essencial',
    layer: 'modulo',
    posology: '1 cápsula em jejum (manhã ou meio da tarde), com Vit C',
    quantity: '60 cápsulas',
    duration: '60-90 dias, reavaliar com hemograma',
    instructions: '⚠️ SOMENTE SE FERRITINA < 50ng/mL ou hemoglobina < 11g/dL. Tomar isolado, longe de cálcio e laticínios (2h de diferença). Bisglicinato tem 64% menos efeito GI que sulfato.',
    ingredients: [
      { name: 'Ferro bisglicinato quelado (Fe elementar 25mg)', dose: '125mg' },
      { name: 'Vitamina C (ascorbato — potencializa absorção)', dose: '100mg' },
      { name: 'Ácido folínico (sinérgico)', dose: '200mcg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },

  // ─── B6 P5P PARA NÁUSEAS (1º trimestre, FDA-approved) ──────────────────────
  {
    id: 'gest-b6-nausea',
    name: '🤰 B6 P5P — Antiemético Gestacional',
    category: 'base',
    tier: 'essencial',
    layer: 'modulo',
    posology: '1 cápsula 3x ao dia (ex: 7h, 13h, 22h) — só se náusea presente',
    quantity: '60 cápsulas',
    duration: '1º trimestre — suspender quando náuseas cessarem',
    instructions: 'Piridoxal-5-fosfato — forma ativa da B6. FDA-approved para hyperemesis gravidarum. Pode combinar com doxilamina (Diclectin) sob orientação obstétrica.',
    ingredients: [
      { name: 'Piridoxal-5-fosfato (P5P)', dose: '25mg' },
      { name: 'Magnésio bisglicinato (cofator)', dose: '50mg' },
      { name: 'Gengibre extrato padronizado 5% gingeróis (sinérgico)', dose: '200mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },

  // ─── PROBIÓTICO GESTACIONAL (cepas comprovadas seguras) ────────────────────
  {
    id: 'gest-probiotico',
    name: '🤰 Probiótico Gestacional',
    category: 'intestino',
    tier: 'intermediario',
    layer: 'modulo',
    posology: '1 sachê ao dia (jejum ou antes de dormir), em 100ml de água',
    quantity: '30 sachês',
    duration: 'Uso contínuo durante gestação e amamentação',
    instructions: 'Cepas com >10 anos de evidência em gestação. Reduz risco de eczema atópico no bebê (Lactobacillus rhamnosus GG). Refrigerar.',
    ingredients: [
      { name: 'Lactobacillus rhamnosus GG (ATCC 53103)', dose: '5 bilhões UFC' },
      { name: 'Bifidobacterium lactis BB-12', dose: '5 bilhões UFC' },
      { name: 'Lactobacillus acidophilus La-5', dose: '2 bilhões UFC' },
      { name: 'FOS (frutooligossacarídeos prebiótico)', dose: '500mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
];
