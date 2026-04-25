// ═══════════════════════════════════════════════════════════════════════════
// PROTOCOLOS OFICIAIS DR. WAGNER NOVAES JR.
// 13 protocolos numerados + 4 Marlete + 1 Pediátrico + 1 Base Essencial
// ═══════════════════════════════════════════════════════════════════════════
// Origem: prescricoes_13_protocolos.pdf, Manual Mestre v2, casos clínicos

import type { Protocol } from '../types';

export const PROTOCOLOS_OFICIAIS: Protocol[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // OS 13 PROTOCOLOS NUMERADOS
  // Base universal: 7h Sachê Jejum + 8h Base 1 + 12h Base 2
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'p13-01-intestino',
    name: '01 · 🫁 Protocolo Intestino',
    description: 'Disbiose, leaky gut, eixo intestino-cérebro. Reparo de barreira mucosa + microbioma + imunidade local.',
    color: '#22C55E',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mod-intestinal', hour: 16 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-02-inflamacao',
    name: '02 · 🔻 Protocolo Inflamação / Fibromialgia',
    description: 'Controle de citocinas inflamatórias, dor crônica, fibromialgia. PEA endocanabinoide + curcumina.',
    color: '#F43F5E',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mar-dor-lipedema', hour: 12 },
      { frascoId: 'mar-inflamacao-base', hour: 20 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-03-emagrecimento',
    name: '03 · 🔥 Protocolo Emagrecimento',
    description: 'Resistência insulínica, saciedade, oxidação de gordura, déficit inteligente.',
    color: '#F97316',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mod-emagrecimento', hour: 11 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mod-emagrecimento', hour: 19 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-04-sono',
    name: '04 · 🌙 Protocolo Sono',
    description: 'Regulação circadiana, indução, relaxamento neuromuscular.',
    color: '#6366F1',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mod-sono-noturno', hour: 21 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-05-mente',
    name: '05 · 🧠 Protocolo Mente (Ansiedade/Memória/Brain Fog)',
    description: 'Ansiedade, perda de memória, brain fog, declínio cognitivo. Magnésio L-treonato + nootrópicos.',
    color: '#EC4899',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mar-cognicao-clareza', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-06-depressao',
    name: '06 · 💧 Protocolo Depressão',
    description: 'Apatia, baixa motivação, suporte de neurotransmissores e energia vital.',
    color: '#7C3AED',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'dep-humor-drive', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'dep-clareza-sustentacao', hour: 12 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'dep-desaceleracao-eixo', hour: 22 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-07-comer-emocional',
    name: '07 · 🍫 Protocolo Comer Emocional',
    description: 'Compulsão alimentar, relação emocional com comida, controle de estresse.',
    color: '#D946EF',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mar-compulsao-neuroapetite', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mar-sono-serenidade-premium', hour: 18 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-08-cansaco-matinal',
    name: '08 · ⚡ Protocolo Cansaço Matinal & Despertar Noturno',
    description: 'Fadiga ao acordar, sono não reparador, regulação do eixo HPA (adrenais).',
    color: '#FACC15',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'sono-entardecer-cortisol', hour: 18 },
      { frascoId: 'mod-sono-noturno', hour: 22 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-09-tireoide',
    name: '09 · 🦋 Protocolo Tireoide',
    description: 'Hipotireoidismo subclínico, conversão T4→T3, Hashimoto.',
    color: '#0EA5E9',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'super-tireoide', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-10-menopausa',
    name: '10 · 👩 Protocolo Menopausa',
    description: 'Climatério, fogachos, composição corporal, suporte ósseo.',
    color: '#EC4899',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'mar-menopausa-total', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mar-sono-serenidade-premium', hour: 18 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-11-testosterona',
    name: '11 · 💪 Protocolo Testosterona',
    description: 'Hipogonadismo, sarcopenia, metabolismo masculino, energia.',
    color: '#0284C7',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'musc-forca-desejo', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'musc-forca-desejo', hour: 12 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'musc-performance-peritreino', hour: 16 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-12-fertilidade',
    name: '12 · 🌸 Protocolo Fertilidade (Eixo Ovário-Metabólico)',
    description: 'SOP, equilíbrio hormonal reprodutivo, qualidade ovariana. Duração: 90-180 dias.',
    color: '#FB7185',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mod-eixo-ovario', hour: 11 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'p13-13-detox',
    name: '13 · 🍃 Protocolo Detox Hepático',
    description: 'Fases 1 e 2 de biotransformação hepática, sobrecarga tóxica. Duração: 21 dias (ciclo).',
    color: '#10B981',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'ciclo-detox', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mod-hepatico', hour: 11 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'mod-hepatico', hour: 19 },
      { frascoId: 'ciclo-detox-noturno', hour: 22 },
    ],
    createdAt: '2026-04-25',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROTOCOLOS MARLETE — evolução clínica I → II → III → IV → Reposicionamento
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'marlete-i-branded',
    name: '👩‍⚕️ Marlete I — Linha Branded Inicial',
    description: 'Catálogo modular dos 9 super-frascos branded. Mulher 50-65 anos, fenótipo menopausa multidimensional.',
    color: '#A855F7',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'mar-intestino-imune', hour: 8 },
      { frascoId: 'mar-mulher-metabolica', hour: 8 },
      { frascoId: 'mar-inflamacao-base', hour: 12 },
      { frascoId: 'mar-dor-lipedema', hour: 12 },
      { frascoId: 'mar-sono-serenidade-premium', hour: 18 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'marlete-ii-sono',
    name: '🌙 Marlete II — Sono Restaurador (Trifocal)',
    description: 'Foco-sono: hiperalerta noturno, sono fragmentado, ansiedade vespertina. 6 receitas + ômega-3.',
    color: '#6366F1',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mar-sono-serenidade-premium', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'intestino-microbioma-tarde', hour: 15 },
      { frascoId: 'sono-pre-desligamento', hour: 21 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'marlete-iii-compulsao',
    name: '🍫 Marlete III — Peso Emocional (Trifocal)',
    description: 'Foco-compulsão: compulsão alimentar, fome reativa, neuroinflamação.',
    color: '#D946EF',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mar-compulsao-neuroapetite', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'intestino-microbioma-tarde', hour: 15 },
      { frascoId: 'sono-pre-desligamento', hour: 21 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'marlete-iv-metabolico',
    name: '🔥 Marlete IV — Intestino Metabólico (Trifocal)',
    description: 'Foco-metabólico: resistência insulínica, gordura abdominal, intestino disbiótico-metabólico.',
    color: '#F97316',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mar-metabolico-inteligente', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'intestino-microbioma-tarde', hour: 15 },
      { frascoId: 'sono-pre-desligamento', hour: 21 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'marlete-reposicionamento',
    name: '⭐ Marlete — Reposicionamento Oficial (volta ao padrão antigo)',
    description: 'Decisão clínica: abandono da arquitetura trifocal. Eixo intestino-cérebro como terreno dominante. Sono/humor/compulsão como expressões do eixo, não protocolos paralelos.',
    color: '#22C55E',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'mar-intestino-imune', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'intestino-microbioma-tarde', hour: 15 },
      { frascoId: 'sono-pre-desligamento', hour: 21 },
    ],
    createdAt: '2026-04-25',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROTOCOLO BASE ESSENCIAL — chassi universal de TODO paciente
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'base-essencial-universal',
    name: '📦 Base Essencial Universal',
    description: 'Chassi obrigatório de todo paciente da clínica. Sachê Jejum + Complexo B + ADEK + Ômega-3. Toda prescrição parte daqui.',
    color: '#1E40AF',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
    ],
    createdAt: '2026-04-25',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROTOCOLOS ESPECIALIZADOS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'pos-infarto',
    name: '❤️‍🩹 Protocolo Pós-Infarto Cardiometabólico',
    description: 'Suporte mitocondrial cardíaco + endotélio + risco metabólico residual. ⚠️ Verificar antitrombóticos e antidiabéticos.',
    color: '#DC2626',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'cardio-mitocondria', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'cardio-endotelio', hour: 12 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'cardio-glicometabolico', hour: 19 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'massa-muscular-premium',
    name: '🏋️ Protocolo Massa Muscular Premium',
    description: 'Anabolismo distribuído: peri-treino + diurno androgênico + noturno anticatabólico.',
    color: '#0284C7',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'musc-forca-desejo', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'musc-forca-desejo', hour: 12 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'musc-performance-peritreino', hour: 16 },
      { frascoId: 'musc-corpo-forte-noturno', hour: 21 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'pele-integrativa',
    name: '✨ Protocolo Pele Integrativa',
    description: 'Linha integrativa em 3 eixos: estrutura/glow + inflamação/oxidação + intestino-pele.',
    color: '#FB7185',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 7 },
      { frascoId: 'pele-estrutural-glow', hour: 8 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'pele-inflamada-oxidativa', hour: 12 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'pele-intestino-barreira', hour: 19 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'intestino-abre-organiza-sustenta',
    name: '🌾 Protocolo Intestino — Abre · Organiza · Sustenta',
    description: 'Arquitetura clássica: manhã abre (jejum), meio do dia organiza (intestino-imune), tarde sustenta (microbioma/butirato).',
    color: '#22C55E',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'almoco-intestino-imune-premium', hour: 12 },
      { frascoId: 'base-2-lipossoluvel', hour: 12 },
      { frascoId: 'intestino-microbioma-tarde', hour: 15 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'kit-manha-completo-jejum',
    name: '🌅 Kit Manhã Completo em Jejum',
    description: '5 frascos pré-quebra de jejum: reparo intestinal + metabólico + cognitivo + anti-inflamatório. Aguardar 20-30 min antes de comer.',
    color: '#F59E0B',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 5 },
      { frascoId: 'jejum-metabolico-premium', hour: 6 },
      { frascoId: 'jejum-clareza-mental', hour: 6 },
      { frascoId: 'jejum-desinflamacao-base', hour: 6 },
      { frascoId: 'jejum-intestino-imune-barreira', hour: 6 },
    ],
    createdAt: '2026-04-25',
  },
  {
    id: 'kit-almoco-estrategico',
    name: '🍱 Kit Almoço Estratégico',
    description: '5 frascos no almoço: glicemia + dor/inflamação + intestino-imune + cognição vespertina + proteção vascular. Aproveita a gordura da refeição.',
    color: '#EA580C',
    entries: [
      { frascoId: 'jejum-reparo-profundo', hour: 6 },
      { frascoId: 'base-1-hidrosoluvel', hour: 8 },
      { frascoId: 'almoco-metabolico-premium', hour: 12 },
      { frascoId: 'almoco-inflamacao-signature', hour: 12 },
      { frascoId: 'almoco-intestino-imune-premium', hour: 12 },
      { frascoId: 'almoco-cognicao-posprandial', hour: 12 },
      { frascoId: 'almoco-protecao-vascular', hour: 12 },
    ],
    createdAt: '2026-04-25',
  },
];
