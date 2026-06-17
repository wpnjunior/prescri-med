// ═══════════════════════════════════════════════════════════════════════════
// FRASCOS ESPECIALIZADOS — CARDIO, DEPRESSÃO, MÚSCULO, PELE, SONO, JEJUM/ALMOÇO
// Origem: 8 PDFs temáticos. Premium auto-expandido em 3 tiers.
// ═══════════════════════════════════════════════════════════════════════════
import type { Frasco } from '../types';
import { expandToAllTiers } from '../utils/tierGenerator';

const PREMIUM_ESPECIALIZADOS: Frasco[] = [
  // ─── CARDIO PÓS-INFARTO ───
  {
    id: 'cardio-mitocondria', name: '❤️ Mitocôndria Cardíaca Pós-Infarto',
    category: 'inflamacao', tier: 'premium',
    posology: '2 cápsulas ao dia, junto com café da manhã', quantity: '120 cápsulas vegetais', duration: '90 dias com revisão',
    instructions: 'Suporte mitocondrial cardíaco pós-infarto. Sinérgico com estatina (mitiga depleção de CoQ10).',
    ingredients: [
      { name: 'Ubiquinol Kaneka® (CoQ10 reduzida)', dose: '100mg' },
      { name: 'Taurina', dose: '500mg' },
      { name: 'Acetil-L-carnitina', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'cardio-endotelio', name: '🩺 Endotélio & Inflamação Vascular',
    category: 'inflamacao', tier: 'premium',
    posology: '2 cápsulas ao dia, junto com almoço', quantity: '120 cápsulas vegetais', duration: '90 dias',
    instructions: '⚠️ Revisar se em AAS, clopidogrel, ticagrelor, rivaroxabana, apixabana ou varfarina (risco antitrombótico). Com gordura.',
    ingredients: [
      { name: 'Pycnogenol® (extrato de pinho marítimo)', dose: '50mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'ResviTech™', dose: '75mg' },
      { name: 'Miodesin®', dose: '125mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'cardio-glicometabolico', name: '🍏 Glicometabólico Residual',
    category: 'dislipidemia', tier: 'premium',
    posology: '2 cápsulas ao dia, junto com jantar', quantity: '120 cápsulas vegetais', duration: '90 dias',
    instructions: '⚠️ Monitorar glicemia em antidiabéticos/insulina (risco hipoglicêmico).',
    ingredients: [
      { name: 'GlucoVantage® (di-hidroberberina)', dose: '150mg' },
      { name: 'Berganina® (bergamota)', dose: '250mg' },
      { name: 'Crominex® 3+', dose: '100mcg' },
      { name: 'Eriomin®', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── DEPRESSÃO PREMIUM ───
  {
    id: 'dep-humor-drive', name: '☀️ Cápsula Manhã — Humor & Drive',
    category: 'cerebro', tier: 'premium',
    posology: '2 cápsulas ao dia, junto com café da manhã', quantity: '120 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Humor deprimido, baixa motivação, drive matinal. ⚠️ Atenção em hipomania/bipolaridade. Com gordura.',
    ingredients: [
      { name: 'affron®', dose: '14mg' },
      { name: 'enXtra® (Alpinia galanga)', dose: '150mg' },
      { name: 'Brain Factor-7®', dose: '75mg' },
      { name: 'CurQfen®', dose: '125mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'dep-clareza-sustentacao', name: '🌤️ Cápsula Almoço — Clareza & Sustentação',
    category: 'cerebro', tier: 'premium',
    posology: '2 cápsulas ao dia, junto com almoço', quantity: '120 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Clareza mental, neuroinflamação, sustentação de energia. Combate queda vespertina. Com gordura.',
    ingredients: [
      { name: 'Neuravena® (extrato de aveia)', dose: '125mg' },
      { name: 'ResviTech™', dose: '75mg' },
      { name: 'CurQfen®', dose: '125mg' },
      { name: 'Ubiquinol Kaneka®', dose: '50mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'dep-desaceleracao-eixo', name: '🌙 Cápsula Noite — Desaceleração Eixo',
    category: 'sono', tier: 'premium',
    posology: '2 cápsulas, 30-45 min antes de dormir', quantity: '120 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Hiperalerta noturno, recuperação do eixo humor-energia. ⚠️ Zembrin PDE4/serotonérgico — atenção em ISRS/IMAO.',
    ingredients: [
      { name: 'Sensoril® (ashwagandha)', dose: '125mg' },
      { name: 'Magtein® (magnésio L-treonato)', dose: '250mg' },
      { name: 'Zembrin® (Sceletium tortuosum)', dose: '12,5mg' },
      { name: 'L-Teanina', dose: '100mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── MUSCULAÇÃO PREMIUM ───
  {
    id: 'musc-performance-peritreino', name: '💪 Sachê Performance Natural — Peri-Treino',
    category: 'musculo', tier: 'premium',
    posology: '1 sachê 30 min antes OU após treino, em 200-300ml de água', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Sinalização anabólica peri-treino, força e recuperação.',
    ingredients: [
      { name: 'PeptiStrong® (peptídeos de fava bioativos)', dose: '2.400mg' },
      { name: 'Betaína anidra', dose: '2.500mg' },
      { name: 'L-leucina', dose: '3.000mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'L-carnitina L-tartarato', dose: '1.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
  {
    id: 'musc-forca-desejo', name: '⚡ Cápsula Força & Desejo Diurna',
    category: 'libido', tier: 'premium',
    posology: '2 cápsulas pela manhã + 2 com almoço (4/dia)', quantity: '120 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Eixo androgênico, força, libido, anti-stress.',
    ingredients: [
      { name: 'KSM-66® Ashwagandha', dose: '600mg (total 4 cáps)' },
      { name: 'Shilajit padronizado', dose: '500mg' },
      { name: 'Feno-grego (extrato seco padronizado)', dose: '500mg' },
      { name: 'Zinco bisglicinato', dose: '15mg elementar' },
      { name: 'Boro quelato', dose: '3mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'musc-corpo-forte-noturno', name: '🌙 Sachê Noturno Corpo Forte',
    category: 'musculo', tier: 'premium',
    posology: '1 sachê 60 min antes de dormir, em 200-300ml de água', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Anticatabólico noturno, recuperação muscular, qualidade de sono, modulação cortisol.',
    ingredients: [
      { name: 'HMB (β-hidroxi-β-metilbutirato)', dose: '3.000mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Magnésio bisglicinato', dose: '300mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'KSM-66® Ashwagandha', dose: '300mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
  // ─── PELE INTEGRATIVA ───
  {
    id: 'pele-estrutural-glow', name: '✨ Pele Estrutural & Glow',
    category: 'pele', tier: 'premium',
    posology: '1 cápsula ao dia, junto com café da manhã', quantity: '60 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Estrutura cutânea, brilho, sustentação de pele e anexos (cabelo/unhas).',
    ingredients: [
      { name: 'SiliciuMax® (silício orgânico)', dose: '150mg' },
      { name: 'Keranat® (extrato de millet)', dose: '300mg' },
      { name: 'Ubiquinol Kaneka®', dose: '100mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'pele-inflamada-oxidativa', name: '🌿 Pele Inflamada & Oxidativa',
    category: 'pele', tier: 'premium',
    posology: '1 cápsula ao dia, junto com almoço', quantity: '60 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Inflamação silenciosa cutânea, vermelhidão, envelhecimento oxidativo. Com gordura.',
    ingredients: [
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'ResviTech™', dose: '150mg' },
      { name: 'Pycnogenol®', dose: '50mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'pele-intestino-barreira', name: '🌸 Pele-Intestino & Barreira',
    category: 'pele', tier: 'premium',
    posology: '1 cápsula ao dia, meio da tarde ou jantar', quantity: '60 cápsulas vegetais', duration: '60-90 dias',
    instructions: 'Eixo intestino-pele, barreira mucosa, ruído inflamatório de base.',
    ingredients: [
      { name: 'LacFer™', dose: '100mg' },
      { name: 'Miodesin®', dose: '250mg' },
      { name: 'ResviTech™', dose: '150mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── SONO AVANÇADO ───
  {
    id: 'sono-entardecer-cortisol', name: '🌅 Cápsula Entardecer — Freio de Cortisol',
    category: 'ansiedade', tier: 'premium',
    posology: '1 cápsula ao dia entre 18:00 e 19:00', quantity: '60 cápsulas vegetais', duration: '60 dias',
    instructions: 'Hiperalerta vespertino, ansiedade do fim do dia. Mais sedativa.',
    ingredients: [
      { name: 'Sensoril® (ashwagandha)', dose: '250mg' },
      { name: 'Serenzo™', dose: '250mg' },
      { name: 'affron®', dose: '28mg' },
      { name: 'Passiflora incarnata (extrato seco)', dose: '300mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'sono-pre-desligamento', name: '🛌 Sachê Pré-Sono — Desligamento Mental',
    category: 'sono', tier: 'premium',
    posology: '1 sachê entre 20:30 e 21:30, em 150-200ml de água', quantity: '60 sachês', duration: '60 dias',
    instructions: 'Desligamento mental, relaxamento profundo. GABA com fórmula pré-sono completa.',
    ingredients: [
      { name: 'PharmaGABA® (GABA fermentado)', dose: '300mg' },
      { name: 'L-Teanina', dose: '250mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'Mio-inositol', dose: '2.000mg' },
      { name: 'Magnésio bisglicinato', dose: '300mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
  {
    id: 'sono-noturna-inducao', name: '😴 Cápsula Noturna — Indução & Manutenção',
    category: 'sono', tier: 'premium',
    posology: '1 cápsula 30-45 min antes de dormir', quantity: '60 cápsulas vegetais', duration: '60 dias',
    instructions: 'Indução + manutenção do sono. Estratégia híbrida de melatonina (IR + SR).',
    ingredients: [
      { name: 'L-Triptofano', dose: '350mg' },
      { name: 'Melissa officinalis', dose: '250mg' },
      { name: 'Mulungu (extrato seco)', dose: '200mg' },
      { name: 'Apigenina', dose: '50mg' },
      { name: 'Melatonina (liberação imediata)', dose: '0,5mg' },
      { name: 'Melatonina SR (liberação prolongada)', dose: '2mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── JEJUM SIGNATURE ───
  {
    id: 'jejum-reparo-profundo', name: '🌅 Sachê Jejum — Reparo Intestinal Profundo',
    category: 'jejum', tier: 'premium',
    posology: '1 sachê em jejum (5h-7h), em 150-200ml de água. Aguardar 20-30 min antes de comer.',
    quantity: '60 sachês', duration: '60 dias',
    instructions: 'Reparo de mucosa intestinal, leaky gut, suporte a glutationa hepática.',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Glicina', dose: '2.000mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' },
      { name: 'Vitamina C tamponada', dose: '500mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
  {
    id: 'jejum-metabolico-premium', name: '🔥 Cápsula Jejum — Metabólico Premium',
    category: 'jejum', tier: 'premium',
    posology: '2 cápsulas em jejum, com água. Aguardar 20 min antes do café.', quantity: '120 cápsulas vegetais', duration: '60 dias',
    instructions: 'Controle glicêmico, sensibilidade insulínica, regulação circadiana metabólica.',
    ingredients: [
      { name: 'BioBerON™', dose: '300mg' },
      { name: 'Eriomin®', dose: '250mg' },
      { name: 'CitrusiM®', dose: '250mg' },
      { name: 'Crominex® 3+', dose: '200mcg cromo' },
      { name: 'Clock® (sincronizador)', dose: '200mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'jejum-clareza-mental', name: '🧠 Cápsula Jejum — Clareza Mental',
    category: 'jejum', tier: 'premium',
    posology: '2 cápsulas em jejum, com água. Aguardar 20 min antes do café.', quantity: '120 cápsulas vegetais', duration: '60 dias',
    instructions: 'Foco cognitivo, energia mental sem estimulante adrenérgico, suporte BDNF/dopamina.',
    ingredients: [
      { name: 'Brain Factor-7®', dose: '150mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'N-Acetil L-Tirosina', dose: '500mg' },
      { name: 'Taurina', dose: '500mg' },
      { name: 'NAC', dose: '300mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── ALMOÇO SIGNATURE ───
  {
    id: 'almoco-intestino-imune-premium', name: '🌾 Cápsula Almoço — Intestino-Imune Premium',
    category: 'intestino', tier: 'premium',
    posology: '2 cápsulas junto com almoço', quantity: '120 cápsulas vegetais', duration: '60 dias',
    instructions: 'Suporte mucosa intestinal, imunomodulação, alergias, mastocitose.',
    ingredients: [
      { name: 'LacFer™', dose: '200mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'Miodesin®', dose: '250mg' },
      { name: 'Quercetina', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  // ─── INTESTINO MICROBIOMA (tarde) ───
  {
    id: 'intestino-microbioma-tarde', name: '🦠 Sachê Microbioma — Sustenta (Tarde)',
    category: 'intestino', tier: 'premium',
    posology: '1 sachê entre 15:00 e 17:00, em 150-200ml de água', quantity: '60 sachês', duration: '60 dias',
    instructions: 'Suporte ao microbioma, butirato (colonócitos), conforto GI, manutenção de barreira.',
    ingredients: [
      { name: 'BIOintestil® (modulador microbioma)', dose: '500mg' },
      { name: 'Butirato de magnésio', dose: '500mg' },
      { name: 'Carnosina de zinco', dose: '75mg' },
      { name: 'PHGG', dose: '2.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' },
    ],
  },
];

export const FRASCOS_ESPECIALIZADOS: Frasco[] = expandToAllTiers(PREMIUM_ESPECIALIZADOS);
