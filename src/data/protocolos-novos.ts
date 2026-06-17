// ═══════════════════════════════════════════════════════════════════════════
// PROTOCOLOS OFICIAIS DR. WAGNER NOVAES JR.
// 13 numerados + Marlete I-IV + Reposicionamento + Base + especializados
// + Gestacional 1º Trimestre + Emagrecimento Saudável (Idosa)
// ═══════════════════════════════════════════════════════════════════════════
import type { Protocol } from '../types';

export const PROTOCOLOS_OFICIAIS: Protocol[] = [
  // ─── OS 13 PROTOCOLOS NUMERADOS (base: 7h jejum + 8h Base1 + 12h Base2) ───
  { id: 'p13-01-intestino', name: '01 · 🫁 Protocolo Intestino', description: 'Disbiose, leaky gut, eixo intestino-cérebro.', color: '#22C55E',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mod-intestinal', hour: 16 }], createdAt: '2026-04-25' },
  { id: 'p13-02-inflamacao', name: '02 · 🔻 Protocolo Inflamação / Fibromialgia', description: 'Citocinas, dor crônica, fibromialgia. PEA + curcumina.', color: '#F43F5E',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mar-dor-lipedema', hour: 12 }, { frascoId: 'mar-inflamacao-base', hour: 20 }], createdAt: '2026-04-25' },
  { id: 'p13-03-emagrecimento', name: '03 · 🔥 Protocolo Emagrecimento', description: 'Resistência insulínica, saciedade, oxidação de gordura.', color: '#F97316',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mod-emagrecimento', hour: 11 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mod-emagrecimento', hour: 19 }], createdAt: '2026-04-25' },
  { id: 'p13-04-sono', name: '04 · 🌙 Protocolo Sono', description: 'Regulação circadiana, indução, relaxamento neuromuscular.', color: '#6366F1',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mod-sono-noturno', hour: 21 }], createdAt: '2026-04-25' },
  { id: 'p13-05-mente', name: '05 · 🧠 Protocolo Mente (Ansiedade/Memória/Brain Fog)', description: 'Ansiedade, memória, brain fog, declínio cognitivo.', color: '#EC4899',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mar-cognicao-clareza', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }], createdAt: '2026-04-25' },
  { id: 'p13-06-depressao', name: '06 · 💧 Protocolo Depressão', description: 'Apatia, baixa motivação, neurotransmissores e energia vital.', color: '#7C3AED',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'dep-humor-drive', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'dep-clareza-sustentacao', hour: 12 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'dep-desaceleracao-eixo', hour: 22 }], createdAt: '2026-04-25' },
  { id: 'p13-07-comer-emocional', name: '07 · 🍫 Protocolo Comer Emocional', description: 'Compulsão alimentar, relação emocional com comida.', color: '#D946EF',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mar-compulsao-neuroapetite', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mar-sono-serenidade-premium', hour: 18 }], createdAt: '2026-04-25' },
  { id: 'p13-08-cansaco-matinal', name: '08 · ⚡ Protocolo Cansaço Matinal & Despertar Noturno', description: 'Fadiga ao acordar, sono não reparador, eixo HPA.', color: '#FACC15',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'sono-entardecer-cortisol', hour: 18 }, { frascoId: 'mod-sono-noturno', hour: 22 }], createdAt: '2026-04-25' },
  { id: 'p13-09-tireoide', name: '09 · 🦋 Protocolo Tireoide', description: 'Hipotireoidismo subclínico, conversão T4→T3, Hashimoto.', color: '#0EA5E9',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }], createdAt: '2026-04-25' },
  { id: 'p13-10-menopausa', name: '10 · 👩 Protocolo Menopausa', description: 'Climatério, fogachos, composição corporal, suporte ósseo.', color: '#EC4899',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'mar-menopausa-total', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mar-sono-serenidade-premium', hour: 18 }], createdAt: '2026-04-25' },
  { id: 'p13-11-testosterona', name: '11 · 💪 Protocolo Testosterona', description: 'Hipogonadismo, sarcopenia, metabolismo masculino.', color: '#0284C7',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'musc-forca-desejo', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'musc-forca-desejo', hour: 12 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'musc-performance-peritreino', hour: 16 }], createdAt: '2026-04-25' },
  { id: 'p13-12-fertilidade', name: '12 · 🌸 Protocolo Fertilidade (Eixo Ovário-Metabólico)', description: 'SOP, equilíbrio hormonal reprodutivo. 90-180 dias.', color: '#FB7185',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mod-eixo-ovario', hour: 11 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }], createdAt: '2026-04-25' },
  { id: 'p13-13-detox', name: '13 · 🍃 Protocolo Detox Hepático', description: 'Fases 1 e 2 de biotransformação. 21 dias (ciclo).', color: '#10B981',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'ciclo-detox', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mod-hepatico', hour: 11 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'mod-hepatico', hour: 19 }, { frascoId: 'ciclo-detox-noturno', hour: 22 }], createdAt: '2026-04-25' },

  // ─── MARLETE (evolução clínica) ───
  { id: 'marlete-i-branded', name: '👩‍⚕️ Marlete I — Linha Branded Inicial', description: 'Catálogo modular dos 9 super-frascos branded. Mulher 50-65, menopausa multidimensional.', color: '#A855F7',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'mar-intestino-imune', hour: 8 }, { frascoId: 'mar-mulher-metabolica', hour: 8 }, { frascoId: 'mar-inflamacao-base', hour: 12 }, { frascoId: 'mar-dor-lipedema', hour: 12 }, { frascoId: 'mar-sono-serenidade-premium', hour: 18 }], createdAt: '2026-04-25' },
  { id: 'marlete-ii-sono', name: '🌙 Marlete II — Sono Restaurador (Trifocal)', description: 'Foco-sono: hiperalerta noturno, sono fragmentado, ansiedade vespertina.', color: '#6366F1',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 6 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mar-sono-serenidade-premium', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'intestino-microbioma-tarde', hour: 15 }, { frascoId: 'sono-pre-desligamento', hour: 21 }], createdAt: '2026-04-25' },
  { id: 'marlete-iii-compulsao', name: '🍫 Marlete III — Peso Emocional (Trifocal)', description: 'Foco-compulsão: compulsão alimentar, fome reativa, neuroinflamação.', color: '#D946EF',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 6 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mar-compulsao-neuroapetite', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'intestino-microbioma-tarde', hour: 15 }, { frascoId: 'sono-pre-desligamento', hour: 21 }], createdAt: '2026-04-25' },
  { id: 'marlete-iv-metabolico', name: '🔥 Marlete IV — Intestino Metabólico (Trifocal)', description: 'Foco-metabólico: resistência insulínica, gordura abdominal.', color: '#F97316',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 6 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mar-metabolico-inteligente', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'intestino-microbioma-tarde', hour: 15 }, { frascoId: 'sono-pre-desligamento', hour: 21 }], createdAt: '2026-04-25' },
  { id: 'marlete-reposicionamento', name: '⭐ Marlete — Reposicionamento Oficial', description: 'Abandono do trifocal. Eixo intestino-cérebro como terreno dominante.', color: '#22C55E',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 6 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'mar-intestino-imune', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'intestino-microbioma-tarde', hour: 15 }, { frascoId: 'sono-pre-desligamento', hour: 21 }], createdAt: '2026-04-25' },

  // ─── BASE + ESPECIALIZADOS ───
  { id: 'base-essencial-universal', name: '📦 Base Essencial Universal', description: 'Chassi de todo paciente. Sachê Jejum + Complexo B + ADEK.', color: '#1E40AF',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 6 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }], createdAt: '2026-04-25' },
  { id: 'pos-infarto', name: '❤️‍🩹 Protocolo Pós-Infarto Cardiometabólico', description: 'Mitocôndria + endotélio + risco residual. ⚠️ Verificar antitrombóticos.', color: '#DC2626',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'cardio-mitocondria', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'cardio-endotelio', hour: 12 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'cardio-glicometabolico', hour: 19 }], createdAt: '2026-04-25' },
  { id: 'massa-muscular-premium', name: '🏋️ Protocolo Massa Muscular Premium', description: 'Anabolismo: peri-treino + diurno androgênico + noturno anticatabólico.', color: '#0284C7',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'musc-forca-desejo', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'musc-forca-desejo', hour: 12 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'musc-performance-peritreino', hour: 16 }, { frascoId: 'musc-corpo-forte-noturno', hour: 21 }], createdAt: '2026-04-25' },
  { id: 'pele-integrativa', name: '✨ Protocolo Pele Integrativa', description: 'Estrutura/glow + inflamação/oxidação + intestino-pele.', color: '#FB7185',
    entries: [{ frascoId: 'jejum-reparo-profundo', hour: 7 }, { frascoId: 'pele-estrutural-glow', hour: 8 }, { frascoId: 'base-1-hidrosoluvel', hour: 8 }, { frascoId: 'pele-inflamada-oxidativa', hour: 12 }, { frascoId: 'base-2-lipossoluvel', hour: 12 }, { frascoId: 'pele-intestino-barreira', hour: 19 }], createdAt: '2026-04-25' },

  // ─── GESTACIONAL 1º TRIMESTRE ───
  { id: 'gestacional-1tri', name: '🤰 Protocolo Gestacional — 1º Trimestre',
    description: 'Suporte baseado em evidências p/ gestante 1º tri. Neurogênese fetal (colina+DHA), tubo neural (metilfolato), tireoide fetal (iodo), náuseas (B6 P5P). ⚠️ REVISAR COM OBSTETRA.', color: '#EC4899',
    entries: [
      { frascoId: 'gest-b6-nausea', hour: 7 }, { frascoId: 'gest-base-manha', hour: 8 }, { frascoId: 'gest-ferro-bisglicinato', hour: 10 },
      { frascoId: 'gest-lipossoluvel-almoco', hour: 12 }, { frascoId: 'gest-colina-dha-reforco', hour: 12 }, { frascoId: 'gest-b6-nausea', hour: 13 },
      { frascoId: 'gest-probiotico', hour: 15 }, { frascoId: 'gest-colina-dha-reforco', hour: 19 }, { frascoId: 'gest-b6-nausea', hour: 22 }, { frascoId: 'gest-magnesio-noite', hour: 22 },
    ], createdAt: '2026-04-30' },

  // ─── EMAGRECIMENTO SAUDÁVEL (IDOSA) ───
  { id: 'emagrecimento-idosa', name: '🌿 Emagrecimento Saudável — Idosa',
    description: 'Preserva músculo/osso. Ritmo 0,25-0,5kg/sem. ⚠️ EXIGE exames basais (renal, TSH, HbA1c, 25-OH-D) e ajuste de remédios. Pilar real: treino de força + proteína. Excluídos: berberina, ashwagandha, cafeína alta.', color: '#22C55E',
    entries: [
      { frascoId: 'emag-creatina', hour: 8 }, { frascoId: 'emag-base-ossea', hour: 12 }, { frascoId: 'emag-omega3', hour: 12 },
      { frascoId: 'emag-metabolico-inositol', hour: 8 }, { frascoId: 'emag-fibra-saciedade', hour: 12 }, { frascoId: 'emag-magnesio-noturno', hour: 22 },
    ], createdAt: '2026-04-30' },
];
