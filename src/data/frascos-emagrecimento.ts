// ═══════════════════════════════════════════════════════════════════════════
// PROTOCOLO EMAGRECIMENTO SAUDÁVEL — MULHER IDOSA (pós-menopausa)
// ═══════════════════════════════════════════════════════════════════════════
// Baseado em pesquisa multi-agente + verificação adversarial (42 suplementos →
// 17 aprovados). Foco: PRESERVAR músculo/osso, segurança CV, sem estimulantes.
// Doses já corrigidas pelos verdicts de segurança.
//
// ⚠️ EXIGE exames basais: função renal (creatinina/eGFR/cistatina C), TSH,
// HbA1c/HOMA, 25-OH-D, cálcio, hemograma/ferritina/B12, hepático, INR se
// anticoagulada. Ajustar doses de remédios (levotiroxina/metformina/anti-HAS)
// conforme ela emagrece.
//
// EXCLUÍDOS por interação/risco em idosa: berberina (CYP3A4 × estatina),
// ashwagandha, cafeína alta, megadose de Vit D/A, extrato concentrado de chá verde.

import type { Frasco } from '../types';

export const FRASCOS_EMAGRECIMENTO: Frasco[] = [

  // ─── NÚCLEO MUSCULAR (a verdadeira base anti-sarcopenia) ─────────────────
  {
    id: 'emag-creatina',
    name: '💪 Creatina Monohidratada (Idosa)',
    category: 'musculo', tier: 'essencial', layer: 'base',
    posology: '5 g/dia, dose única fixa, contínua (sem fase de saturação). Boa hidratação.',
    quantity: '150 g (pó, Creapure)', duration: 'Uso contínuo',
    instructions: '✅ Mais aprovado da pesquisa — força + função + menos quedas. Avisar laboratório: creatinina sérica sobe ~0,1-0,2 mg/dL como ARTEFATO (usar cistatina C). Evitar uso crônico junto com anti-inflamatório (AINE).',
    ingredients: [
      { name: 'Creatina monohidratada (Creapure®)', dose: '5.000mg' },
    ],
  },
  {
    id: 'emag-hmb-condicional',
    name: '🔵 HMB — Suporte Muscular (condicional)',
    category: 'musculo', tier: 'intermediario', layer: 'modulo',
    posology: '3 g/dia (HMB-Ca), fracionado com refeições. Separar 4h da levotiroxina.',
    quantity: '90 cápsulas', duration: '≥12 semanas',
    instructions: 'CONDICIONAL: só se não atingir a meta de proteína OU se houver fragilidade/sarcopenia. Em idosa ativa que treina e come proteína, ganho é marginal — pular.',
    ingredients: [
      { name: 'HMB cálcio (β-hidroxi-β-metilbutirato)', dose: '3.000mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },

  // ─── BASE ÓSSEA / LIPOSSOLÚVEL ───────────────────────────────────────────
  {
    id: 'emag-base-ossea',
    name: '☀️ Base Óssea Idosa — D3 + K2',
    category: 'osso', tier: 'essencial', layer: 'base',
    posology: '1 cápsula com refeição gordurosa (almoço)',
    quantity: '60 cápsulas oleosas', duration: 'Uso contínuo',
    instructions: 'D3 DIÁRIA (nunca bolus/megadose — aumenta quedas). Titular pela 25-OH-D (alvo 30-50 ng/mL). ⚠️ Se usa tiazídico: monitorar cálcio sérico. K2 contraindicado se varfarina.',
    ingredients: [
      { name: 'Vitamina D3 (colecalciferol)', dose: '1.000UI' },
      { name: 'Vitamina K2 MK-7 trans', dose: '100mcg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
      { name: 'Selênio L-selenometionina', dose: '100mcg' },
    ],
  },
  {
    id: 'emag-omega3',
    name: '🐟 Ômega-3 EPA+DHA (Idosa)',
    category: 'inflamacao', tier: 'intermediario', layer: 'base',
    posology: '1-1,5 g/dia de EPA+DHA somados, com refeição gordurosa',
    quantity: '60 cápsulas (IFOS 5★)', duration: 'Uso contínuo ≥6 meses',
    instructions: '⚠️ NÃO exceder 1,5 g/dia — acima disso há risco de fibrilação atrial em idosa. Se anticoagulada/AAS: piso de 1 g/dia, checar INR. Suspender 7 dias antes de cirurgia.',
    ingredients: [
      { name: 'Ômega-3 EPA+DHA concentrado (IFOS)', dose: '1.000-1.500mg' },
    ],
  },

  // ─── MÓDULO METABÓLICO (sensibilidade insulínica) ────────────────────────
  {
    id: 'emag-metabolico-inositol',
    name: '🌸 Metabólico — Mio-Inositol + ALA (Idosa)',
    category: 'diabetes', tier: 'intermediario', layer: 'modulo',
    posology: 'Mio-inositol 2 g 2x/dia. ALA: iniciar 300 mg → 600 mg após 2-4 sem, COM refeição.',
    quantity: '60 sachês', duration: '60-90 dias',
    instructions: '⚠️ Se metformina/insulina/sulfonilureia: monitorar glicemia de perto. Suspender e avaliar se suor frio/tremor/tontura (hipoglicemia). Rechecar TSH em 6-8 sem. Reduzir inositol se eGFR<30.',
    ingredients: [
      { name: 'Mio-inositol', dose: '4.000mg' },
      { name: 'Ácido alfa-lipóico (R-forma)', dose: '300-600mg' },
      { name: 'Cromo picolinato', dose: '200mcg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
  {
    id: 'emag-magnesio-noturno',
    name: '🧲 Magnésio Bisglicinato Noturno (Idosa)',
    category: 'base', tier: 'essencial', layer: 'modulo',
    posology: '1 cápsula à noite (150-200 mg elementar). Teto 350 mg. Separar 4h da levotiroxina.',
    quantity: '60 cápsulas', duration: 'Uso contínuo',
    instructions: '⚠️ Só com eGFR ≥ 45-60 (risco de hipermagnesemia em DRC). Melhora insulina, sono, câimbras, pressão e osso. Preferir bisglicinato (menos diarreia que óxido).',
    ingredients: [
      { name: 'Magnésio bisglicinato (Mg elementar 200mg)', dose: '1.000mg' },
      { name: 'Glicina', dose: '500mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },

  // ─── MÓDULO SACIEDADE / FIBRA ────────────────────────────────────────────
  {
    id: 'emag-fibra-saciedade',
    name: '🌾 Fibra & Saciedade — PHGG (Idosa)',
    category: 'gordura', tier: 'essencial', layer: 'modulo',
    posology: 'Iniciar 3 g/dia → 5-6 g/dia, dissolvido em água/iogurte, na maior refeição.',
    quantity: '60 sachês (Sunfiber/PHGG)', duration: '60-90 dias',
    instructions: '⚠️ Se metformina: SEPARAR 2h obrigatório (fibra reduz absorção da metformina). Separar 4h da levotiroxina. PHGG é a fibra mais suave (menos gases). Titular do 3g para evitar distensão.',
    ingredients: [
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '5.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
];
