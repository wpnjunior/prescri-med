// ═══════════════════════════════════════════════════════════════════════════
// LINHA BRANDED "SUPER FRASCO MARLETE" — 9 fórmulas signature autorais
// ═══════════════════════════════════════════════════════════════════════════
// Origem: Linha_inicial_de_super_frascos_branded_—_Marlete.pdf
// Filosofia: cada frasco com 3-4 ingredientes patenteados como "núcleo branded".
// Regra autoral: cada frasco deve funcionar como ALVO DOMINANTE, MÓDULO PIVÔ
// ou BASTIDOR INVISÍVEL — nunca empilhar branded de forma decorativa.

import type { Frasco } from '../types';
import { expandToAllTiers } from '../utils/tierGenerator';

const PREMIUM_FRASCOS: Frasco[] = [
  {
    id: 'mar-intestino-imune',
    name: '🟢 Super Frasco Intestino-Imune Signature',
    category: 'intestino',
    tier: 'premium',
    branded: true,
    posology: '1 cápsula ao dia, junto com café da manhã ou almoço',
    quantity: '60 cápsulas vegetais',
    duration: '60 dias',
    instructions: 'Backbone do eixo intestino-cérebro. Modulação de barreira mucosa, imunidade local e neuroinflamação silenciosa.',
    ingredients: [
      { name: 'LacFer™ (lactoferrina patenteada)', dose: '100mg' },
      { name: 'Miodesin® (Cordia + Maytenus + Uncaria)', dose: '250mg' },
      { name: 'CurQfen® (curcumina + fenugreek)', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-compulsao-neuroapetite',
    name: '🟣 Super Frasco Compulsão & Neuroapetite',
    category: 'desmame',
    tier: 'premium',
    branded: true,
    posology: '1 cápsula ao dia, junto com café da manhã',
    quantity: '60 cápsulas vegetais',
    duration: '60 dias',
    instructions: 'Para compulsão alimentar, fome reativa, ansiedade com componente cognitivo. Atenção em histórico de bipolaridade/hipomania.',
    ingredients: [
      { name: 'affron® (açafrão padronizado)', dose: '28mg' },
      { name: 'Brain Factor-7® (proteína de seda)', dose: '150mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-metabolico-inteligente',
    name: '🟠 Super Frasco Metabólico Inteligente',
    category: 'diabetes',
    tier: 'premium',
    posology: '1 cápsula ao dia, junto com café da manhã ou almoço',
    quantity: '60 cápsulas vegetais',
    duration: '60 dias',
    instructions: 'Resistência insulínica, gordura abdominal, ponte circadiana metabólica. Monitorar glicemia em diabéticos.',
    ingredients: [
      { name: 'BioBerON™ (berberina otimizada)', dose: '150mg' },
      { name: 'Crominex® 3+ (cromo elementar)', dose: '200mcg' },
      { name: 'CitrusiM® (citrus bioflavonoides)', dose: '250mg' },
      { name: 'Clock® (sincronizador circadiano)', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-inflamacao-base',
    name: '🔻 Super Frasco Inflamação de Base',
    category: 'inflamacao',
    tier: 'premium',
    posology: '1 cápsula ao dia, junto com almoço',
    quantity: '60 cápsulas vegetais',
    duration: '60 dias',
    instructions: 'Inflamação de baixo grau, ruído oxidativo silencioso, suporte vascular-inflamatório. Tomar com gordura da refeição.',
    ingredients: [
      { name: 'Miodesin®', dose: '250mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'ResviTech™ (resveratrol enriquecido)', dose: '150mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-sono-serenidade-premium',
    name: '🌙 Super Frasco Sono & Serenidade Premium',
    category: 'sono',
    tier: 'premium',
    posology: '1 cápsula ao dia entre 16:00 e 19:00',
    quantity: '60 cápsulas vegetais',
    duration: '60 dias',
    instructions: 'Hiperalerta vespertino, ansiedade de fim de dia, freio de cortisol. Não tomar tarde da noite (pode ativar).',
    ingredients: [
      { name: 'affron®', dose: '28mg' },
      { name: 'Serenzo™ (citrus padronizado)', dose: '250mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-menopausa-total',
    name: '👩 Super Frasco Menopausa Total',
    category: 'hormonal',
    tier: 'premium',
    posology: '1 cápsula ao dia, junto com café da manhã',
    quantity: '60 cápsulas vegetais',
    duration: '90 dias com revisão',
    instructions: 'Fogachos, oscilação de humor, insônia da transição, suporte neuroendócrino feminino.',
    ingredients: [
      { name: 'Ormonelle™ (suporte neuroendócrino feminino)', dose: '320mg' },
      { name: 'EVA360™ (antioxidante feminino)', dose: '200mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-mulher-metabolica',
    name: '🌺 Super Frasco Mulher Metabólica',
    category: 'hormonal',
    tier: 'premium',
    posology: '1 cápsula ao dia, junto com café da manhã',
    quantity: '60 cápsulas vegetais',
    duration: '60-90 dias',
    instructions: 'Metabolismo feminino, terreno ovariano, peso travado, inflamação hormonal. SOP, climatério com componente metabólico.',
    ingredients: [
      { name: 'MyoQuiron™ (eixo ovariano)', dose: '500mg' },
      { name: 'BioBerON™', dose: '100mg' },
      { name: 'Miodesin®', dose: '200mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-dor-lipedema',
    name: '💜 Super Frasco Dor, Lipedema & Corpo Reativo',
    category: 'lipoedema',
    tier: 'premium',
    posology: '1 cápsula ao dia, junto com almoço',
    quantity: '60 cápsulas vegetais',
    duration: '60-90 dias',
    instructions: 'Dor inflamatória, lipedema, corpo reativo, fibromialgia. Modulação endocanabinoide via PEA. Tomar com gordura.',
    ingredients: [
      { name: 'PEA BioActive® (palmitoiletanolamida)', dose: '400mg' },
      { name: 'Miodesin®', dose: '250mg' },
      { name: 'ResviTech™', dose: '150mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
  {
    id: 'mar-cognicao-clareza',
    name: '🧠 Super Frasco Cognição & Clareza',
    category: 'cerebro',
    tier: 'premium',
    posology: '1 cápsula ao dia, junto com café da manhã',
    quantity: '60 cápsulas vegetais',
    duration: '60 dias',
    instructions: 'Névoa mental, lentificação cognitiva, baixa precisão, neuroinflamação vascular. Foco diurno sem estimulante adrenérgico.',
    ingredients: [
      { name: 'Brain Factor-7®', dose: '150mg' },
      { name: 'CurQfen®', dose: '250mg' },
      { name: 'CitoRepair™ 2.0 (mitocondrial neural)', dose: '250mg' },
      { name: 'ResviTech™', dose: '150mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' },
    ],
  },
];

// ── Expansão automática para os 3 tiers (Premium → Intermediário → Essencial) ─
// O gerador substitui ingredientes branded por equivalentes mais baratos
// e marca branded:true automaticamente nos Premium.
export const FRASCOS_MARLETE_BRANDED: Frasco[] = expandToAllTiers(PREMIUM_FRASCOS);

