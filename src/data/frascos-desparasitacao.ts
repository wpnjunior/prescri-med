// ═══════════════════════════════════════════════════════════════════════════
// DESPARASITAÇÃO — protocolo de 30 dias (Método Dr. Wagner Novaes)
// 3 frascos manipulados + linha convencional (farmácia) + preparo + reparo.
// Fechado e validado por evidência/viabilidade de bancada em 2026-06-28.
// Calendário: Preparo D1–7 · Desparasitação pulsos D8 e D22 · Reparo D23–30.
// ═══════════════════════════════════════════════════════════════════════════
import type { Frasco } from '../types';

export const FRASCOS_DESPARASITACAO: Frasco[] = [
  // ─── FRASCO 1 — ATAQUE (antiparasitário + antifúngico, fase ativa 14 dias) ───
  // Dividido em 2 apresentações por incompatibilidade: oleoso x pó e
  // ácido caprílico (ácido livre) x undecilenato de cálcio (forma caprilato).
  {
    id: 'despara-f1a-oleoso', name: '🔴 Frasco 1A — Ataque (softgel oleosa)', category: 'antiparasitario', tier: 'intermediario', layer: 'ciclo', cycleDays: 14,
    posology: '1 cápsula 3x/dia com as refeições', quantity: '42 cápsulas gelatinosas (softgel)', duration: '14 dias',
    instructions: 'Fase ativa. Tomar COM alimento, separado ~2h dos comprimidos convencionais. NUNCA junto da ivermectina (jejum) — a gordura aumenta a absorção/risco neuro dela.',
    ingredients: [
      { name: 'Óleo de orégano (padronizado em carvacrol)', dose: '200mg' },
      { name: 'Ácido caprílico', dose: '200mg' },
      { name: 'Vitamina E (antioxidante)', dose: 'q.s.' },
    ],
  },
  {
    id: 'despara-f1b-seco', name: '🔴 Frasco 1B — Ataque (cápsula entérica)', category: 'antiparasitario', tier: 'intermediario', layer: 'ciclo', cycleDays: 14,
    posology: '1 cápsula 3x/dia com as refeições', quantity: '42 cápsulas gastrorresistentes', duration: '14 dias',
    instructions: 'Fase ativa, junto da 1A. Separar ~2h dos convencionais. Contém alho — se o paciente usa anticoagulante/antiplaquetário, avaliar antes (risco de sangramento).',
    ingredients: [
      { name: 'Undecilenato de cálcio', dose: '150mg' },
      { name: 'Extrato seco de semente de abóbora (Cucurbita)', dose: '150mg' },
      { name: 'Cravo-da-índia pó (Syzygium aromaticum)', dose: '80mg' },
      { name: 'Alho — extrato seco padronizado em alicina', dose: '200mg' },
      { name: 'Excipiente gastrorresistente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── FRASCO 2 — TERRENO (metabólico/hepático/digestivo/imune, 30 dias) ───
  {
    id: 'despara-f2-terreno', name: '🟢 Frasco 2 — Terreno (cápsula entérica)', category: 'detox', tier: 'intermediario', layer: 'modulo',
    posology: '1 cápsula 2x/dia com as refeições', quantity: '60 cápsulas gastrorresistentes', duration: '30 dias',
    instructions: 'Suporte metabólico, hepático, digestivo e imune ao longo do protocolo. Berberina inibe CYP3A4/2D6 — atenção em polifarmácia/fármaco de janela estreita; separar ~2h dos antiparasitários.',
    ingredients: [
      { name: 'Berberina HCl', dose: '250mg' },
      { name: 'Extrato seco de melão-de-são-caetano (Momordica charantia)', dose: '150mg' },
      { name: 'Extrato seco de alcachofra (padr. cinarina)', dose: '200mg' },
      { name: 'Extrato seco de gengibre (padr. gingeróis)', dose: '100mg' },
      { name: 'Beta-glucana', dose: '75mg' },
      { name: 'Excipiente gastrorresistente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── FRASCO 3 — BASE (vitaminas & minerais, 30 dias) ───
  {
    id: 'despara-f3a-base-manha', name: '🟡 Frasco 3A — Base Vitaminas (manhã)', category: 'base', tier: 'intermediario', layer: 'base',
    posology: '1 cápsula pela manhã, após o café', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Reposição diária. Tomar com a refeição (D3 lipossolúvel absorve com gordura). Cápsula opaca para proteger as vitaminas B metiladas.',
    ingredients: [
      { name: 'B1 (tiamina)', dose: '25mg' },
      { name: 'B2 (riboflavina)', dose: '20mg' },
      { name: 'B3 (niacinamida)', dose: '100mg' },
      { name: 'B5 (pantotenato de cálcio)', dose: '100mg' },
      { name: 'B6 (piridoxina)', dose: '25mg' },
      { name: 'B7 (biotina)', dose: '300mcg' },
      { name: 'B9 (L-metilfolato)', dose: '400mcg' },
      { name: 'B12 (metilcobalamina)', dose: '500mcg' },
      { name: 'Zinco bisglicinato (elementar)', dose: '25mg' },
      { name: 'Vitamina D3 (colecalciferol)', dose: '2.000 UI' },
      { name: 'Vitamina C (ácido ascórbico)', dose: '200mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'despara-f3b-base-noite', name: '🟡 Frasco 3B — Magnésio (noite)', category: 'base', tier: 'essencial', layer: 'base',
    posology: '1 cápsula à noite', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Sono/relaxamento e reposição. Tomar à noite, longe dos antiparasitários (mineral quela o fármaco).',
    ingredients: [
      { name: 'Magnésio bisglicinato buffered/TRAACS (elementar)', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── LINHA CONVENCIONAL (farmácia, tarja — exige receita assinada) ───
  {
    id: 'despara-conv-pulsos', name: '💊 Antiparasitários (farmácia) — Pulsos D8 e D22', category: 'antiparasitario', tier: 'essencial', layer: 'ciclo', cycleDays: 22, source: 'farmacia',
    posology: 'Pulso no Dia 8 e no Dia 22 (intervalo de exatamente 14 dias)', quantity: 'conforme receita', duration: 'D8 e D22',
    instructions: 'Albendazol + Ivermectina EM JEJUM (1h antes ou 2h depois de comer, só água, sem gordura). Nitazoxanida COM alimento. Ivermectina calculada pelo peso (200mcg/kg). Sem álcool na fase ativa.',
    ingredients: [
      { name: 'Albendazol (comprimido 400mg)', dose: '400mg dose única no D8 e no D22 (400mg/dia x3 dias se tricuríase)' },
      { name: 'Ivermectina (comprimido 6mg)', dose: '200mcg/kg conforme peso — D8 e D22, em jejum' },
      { name: 'Nitazoxanida (comprimido 500mg)', dose: '500mg 12/12h por 3 dias (D8–D10), com alimento' },
    ],
  },
  // ─── PREPARO (D1–D7) ───
  {
    id: 'despara-preparo-fibra', name: '🌱 Preparo — Fibra (D1–D7)', category: 'intestino', tier: 'essencial', layer: 'ciclo', cycleDays: 7,
    posology: '3–5 g/dia em ~200ml de água, subindo aos poucos', quantity: 'sachês para 7 dias', duration: '7 dias',
    instructions: 'Preparo intestinal antes da fase ativa. Tomar longe de fármacos/frascos (2h+) — nos vãos 10h e 22h. A fibra adsorve medicamento.',
    ingredients: [
      { name: 'Goma guar parcialmente hidrolisada (PHGG)', dose: '3.000–5.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
  // ─── REPARO / RECONSTITUIÇÃO (D23–D30 + 2–4 semanas) ───
  {
    id: 'despara-reparo', name: '🛡️ Reparo da disbiose (D23–D30+)', category: 'intestino', tier: 'intermediario', layer: 'ciclo', cycleDays: 14,
    posology: 'Probiótico 2x/dia + L-glutamina 3x/dia + fibra (subir gradual)', quantity: 'sachês/cápsulas para 30 dias', duration: 'D23–D30 e manter +2 a 4 semanas',
    instructions: 'Repor a flora pós-tratamento. O S. boulardii começa já na fase ativa (D8). Separar ~2h do Frasco 1 (antimicrobiano). NÃO usar S. boulardii em imunossupressão grave ou cateter venoso central (risco de fungemia).',
    ingredients: [
      { name: 'Saccharomyces boulardii', dose: '250–500mg 2x/dia' },
      { name: 'Blend Lactobacillus + Bifidobacterium', dose: '~10 bilhões UFC/dia' },
      { name: 'L-glutamina', dose: '5.000mg 3x/dia (15g/dia)' },
      { name: 'Fibra solúvel (PHGG ou psyllium)', dose: 'subir gradual' },
    ],
  },
];
