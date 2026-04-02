import type { Frasco } from '../types';

export const FRASCOS_GROUP2: Frasco[] = [
  // ═══════════════════════════════════════════════════════════════
  // LIPOEDEMA
  // ═══════════════════════════════════════════════════════════════

  // --- Concept 1: Fluxo Leve (venous/lymphatic drainage) ---
  {
    id: 'lipoedema-1-ess', name: 'Fluxo Leve · Essencial', category: 'lipoedema', tier: 'essencial',
    ingredients: [
      { name: 'Diosmina', dose: '450mg' },
      { name: 'Hesperidina', dose: '50mg' },
      { name: 'Castanha da Índia (Escina)', dose: '300mg' },
    ],
    posology: '1 cápsula 2x ao dia com refeições',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição para melhor absorção.',
  },
  {
    id: 'lipoedema-1-int', name: 'Fluxo Leve · Intermediário', category: 'lipoedema', tier: 'intermediario',
    ingredients: [
      { name: 'Diosmina', dose: '450mg' },
      { name: 'Hesperidina', dose: '50mg' },
      { name: 'Castanha da Índia (Escina)', dose: '300mg' },
      { name: 'Rutina', dose: '250mg' },
      { name: 'Centella Asiática (Triterpenos 40%)', dose: '250mg' },
      { name: 'Vitamina C', dose: '500mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar com refeição.',
  },
  {
    id: 'lipoedema-1-pre', name: 'Fluxo Leve · Premium', category: 'lipoedema', tier: 'premium',
    ingredients: [
      { name: 'Diosmina micronizada', dose: '450mg' },
      { name: 'Hesperidina', dose: '50mg' },
      { name: 'Castanha da Índia (Escina)', dose: '300mg' },
      { name: 'Rutina', dose: '250mg' },
      { name: 'Centella Asiática (Triterpenos 40%)', dose: '250mg' },
      { name: 'Pycnogenol®', dose: '100mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Bromelina', dose: '500mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar com refeição. Pycnogenol® potencializa a drenagem venolinfática.',
  },

  // --- Concept 2: Drenagem Natural (anti-edema / fluid balance) ---
  {
    id: 'lipoedema-2-ess', name: 'Drenagem Natural · Essencial', category: 'lipoedema', tier: 'essencial',
    ingredients: [
      { name: 'Cavalinha (Equisetum arvense)', dose: '500mg' },
      { name: 'Potássio (citrato)', dose: '99mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição. Manter boa hidratação ao longo do dia.',
  },
  {
    id: 'lipoedema-2-int', name: 'Drenagem Natural · Intermediário', category: 'lipoedema', tier: 'intermediario',
    ingredients: [
      { name: 'Cavalinha (Equisetum arvense)', dose: '500mg' },
      { name: 'Potássio (citrato)', dose: '99mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
      { name: 'Dente-de-leão (Taraxacum officinale)', dose: '400mg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição. Manter ingestão hídrica de pelo menos 2L/dia.',
  },
  {
    id: 'lipoedema-2-pre', name: 'Drenagem Natural · Premium', category: 'lipoedema', tier: 'premium',
    ingredients: [
      { name: 'Cavalinha (Equisetum arvense)', dose: '500mg' },
      { name: 'Potássio (citrato)', dose: '99mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
      { name: 'Dente-de-leão (Taraxacum officinale)', dose: '400mg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'Pycnogenol®', dose: '50mg' },
      { name: 'BioPerine®', dose: '5mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição. BioPerine® aumenta a biodisponibilidade dos ativos.',
  },

  // --- Concept 3: Capilar Forte (microcirculation / capillary integrity) ---
  {
    id: 'lipoedema-3-ess', name: 'Capilar Forte · Essencial', category: 'lipoedema', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Bioflavonoides cítricos', dose: '250mg' },
      { name: 'OPC de uva (proantocianidinas 95%)', dose: '200mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição para melhor tolerância gástrica.',
  },
  {
    id: 'lipoedema-3-int', name: 'Capilar Forte · Intermediário', category: 'lipoedema', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Bioflavonoides cítricos', dose: '250mg' },
      { name: 'OPC de uva (proantocianidinas 95%)', dose: '200mg' },
      { name: 'Gotu Kola (Centella asiatica)', dose: '200mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Zinco (quelato)', dose: '15mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar entre as refeições.',
  },
  {
    id: 'lipoedema-3-pre', name: 'Capilar Forte · Premium', category: 'lipoedema', tier: 'premium',
    ingredients: [
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Bioflavonoides cítricos', dose: '250mg' },
      { name: 'OPC de uva (proantocianidinas 95%)', dose: '200mg' },
      { name: 'Gotu Kola (Centella asiatica)', dose: '200mg' },
      { name: 'Quercetina Phytosome® (Quercefít)', dose: '500mg' },
      { name: 'Zinco Albion® (bisglicinato)', dose: '15mg' },
      { name: 'Pycnogenol®', dose: '100mg' },
      { name: 'Colágeno tipo III hidrolisado', dose: '2.500mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água fria. Tomar preferencialmente em jejum ou entre refeições.',
  },

  // --- Concept 4: Inflamação Zero (adipose tissue inflammation) ---
  {
    id: 'lipoedema-4-ess', name: 'Inflamação Zero · Essencial', category: 'lipoedema', tier: 'essencial',
    ingredients: [
      { name: 'Ômega 3 (EPA 720mg / DHA 480mg)', dose: '1.200mg' },
      { name: 'Cúrcuma (curcuminoides 95%)', dose: '500mg' },
      { name: 'Gengibre (gingeróis 5%)', dose: '250mg' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com a principal refeição (almoço ou jantar) para melhor absorção dos lipídios.',
  },
  {
    id: 'lipoedema-4-int', name: 'Inflamação Zero · Intermediário', category: 'lipoedema', tier: 'intermediario',
    ingredients: [
      { name: 'Ômega 3 (EPA 720mg / DHA 480mg)', dose: '1.200mg' },
      { name: 'Cúrcuma (curcuminoides 95%)', dose: '500mg' },
      { name: 'Gengibre (gingeróis 5%)', dose: '250mg' },
      { name: 'Boswellia serrata (AKBA 30%)', dose: '300mg' },
      { name: 'Resveratrol (trans-resveratrol)', dose: '150mg' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com a refeição principal contendo gorduras.',
  },
  {
    id: 'lipoedema-4-pre', name: 'Inflamação Zero · Premium', category: 'lipoedema', tier: 'premium',
    ingredients: [
      { name: 'Ômega 3 (EPA 720mg / DHA 480mg)', dose: '1.200mg' },
      { name: 'Meriva® (curcumina fitossômica)', dose: '500mg' },
      { name: 'Gengibre (gingeróis 5%)', dose: '250mg' },
      { name: 'Boswellia serrata (AKBA 30%)', dose: '300mg' },
      { name: 'Resveratrol (Veri-te™)', dose: '150mg' },
      { name: 'Quercetina', dose: '250mg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'BioPerine®', dose: '5mg' },
    ],
    posology: '1 sachê + 2 cápsulas (ômega) 1x ao dia',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com a refeição principal. Meriva® possui 29x mais biodisponibilidade que a cúrcuma padrão.',
  },

  // --- Concept 5: Leveza Corporal (connective tissue support) ---
  {
    id: 'lipoedema-5-ess', name: 'Leveza Corporal · Essencial', category: 'lipoedema', tier: 'essencial',
    ingredients: [
      { name: 'Colágeno tipo I e III hidrolisado', dose: '5.000mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Silício orgânico', dose: '10mg' },
    ],
    posology: '1 sachê 1x ao dia diluído em água',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'lipoedema-5-int', name: 'Leveza Corporal · Intermediário', category: 'lipoedema', tier: 'intermediario',
    ingredients: [
      { name: 'Colágeno tipo I e III hidrolisado', dose: '5.000mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Silício orgânico', dose: '10mg' },
      { name: 'MSM (Metilsulfonilmetano)', dose: '1.000mg' },
      { name: 'Prolina', dose: '500mg' },
      { name: 'Lisina', dose: '500mg' },
    ],
    posology: '1 sachê 1x ao dia diluído em água',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar em jejum.',
  },
  {
    id: 'lipoedema-5-pre', name: 'Leveza Corporal · Premium', category: 'lipoedema', tier: 'premium',
    ingredients: [
      { name: 'Colágeno Verisol® (peptídeos bioativos)', dose: '5.000mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Silício orgânico (Exsynutriment®)', dose: '150mg' },
      { name: 'MSM (OptiMSM®)', dose: '1.000mg' },
      { name: 'Prolina', dose: '500mg' },
      { name: 'Lisina', dose: '500mg' },
      { name: 'Ácido hialurônico', dose: '100mg' },
      { name: 'Zinco Albion® (bisglicinato)', dose: '15mg' },
      { name: 'Cobre (bisglicinato)', dose: '1mg' },
    ],
    posology: '1 sachê 1x ao dia diluído em água',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar em jejum. Verisol® demonstrou aumento de colágeno dérmico em 12 semanas.',
  },

  // ═══════════════════════════════════════════════════════════════
  // DISLIPIDEMIA
  // ═══════════════════════════════════════════════════════════════

  // --- Concept 1: Coração Limpo (LDL oxidation protection) ---
  {
    id: 'dislipidemia-1-ess', name: 'Coração Limpo · Essencial', category: 'dislipidemia', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina E (tocoferóis mistos)', dose: '400UI' },
      { name: 'Coenzima Q10', dose: '100mg' },
      { name: 'Extrato de alho envelhecido', dose: '600mg' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o jantar para melhor absorção da CoQ10.',
  },
  {
    id: 'dislipidemia-1-int', name: 'Coração Limpo · Intermediário', category: 'dislipidemia', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina E (tocoferóis mistos)', dose: '400UI' },
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'Extrato de alho envelhecido', dose: '600mg' },
      { name: 'Astaxantina', dose: '6mg' },
      { name: 'Licopeno', dose: '15mg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com a refeição principal contendo gorduras.',
  },
  {
    id: 'dislipidemia-1-pre', name: 'Coração Limpo · Premium', category: 'dislipidemia', tier: 'premium',
    ingredients: [
      { name: 'Vitamina E (tocoferóis mistos)', dose: '400UI' },
      { name: 'Kaneka Q10® (ubiquinol)', dose: '200mg' },
      { name: 'Extrato de alho envelhecido (Kyolic®)', dose: '600mg' },
      { name: 'Astaxantina (AstaReal®)', dose: '12mg' },
      { name: 'Licopeno', dose: '15mg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'Tocotrienóis (DeltaGold®)', dose: '125mg' },
      { name: 'Resveratrol (Veri-te™)', dose: '150mg' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o jantar. Kaneka Q10® na forma ubiquinol possui absorção superior. Tocotrienóis inibem HMG-CoA redutase.',
  },

  // --- Concept 2: Artéria Livre (endothelial function / NO production) ---
  {
    id: 'dislipidemia-2-ess', name: 'Artéria Livre · Essencial', category: 'dislipidemia', tier: 'essencial',
    ingredients: [
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'L-Citrulina', dose: '1.000mg' },
      { name: 'Vitamina C', dose: '500mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar 1 sachê pela manhã em jejum e 1 antes de dormir.',
  },
  {
    id: 'dislipidemia-2-int', name: 'Artéria Livre · Intermediário', category: 'dislipidemia', tier: 'intermediario',
    ingredients: [
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'L-Citrulina', dose: '1.500mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Extrato de beterraba (nitratos)', dose: '500mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar em jejum pela manhã e à noite antes de dormir.',
  },
  {
    id: 'dislipidemia-2-pre', name: 'Artéria Livre · Premium', category: 'dislipidemia', tier: 'premium',
    ingredients: [
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'L-Citrulina', dose: '1.500mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Extrato de beterraba (nitratos)', dose: '500mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
      { name: 'Pycnogenol®', dose: '100mg' },
      { name: 'Vitamina K2 (MK-7 MenaQ7®)', dose: '100mcg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar em jejum pela manhã e à noite. Pycnogenol® estimula a eNOS para produção de óxido nítrico.',
  },

  // --- Concept 3: Lipídio Zen (triglyceride reduction) ---
  {
    id: 'dislipidemia-3-ess', name: 'Lipídio Zen · Essencial', category: 'dislipidemia', tier: 'essencial',
    ingredients: [
      { name: 'Ômega 3 (EPA 1.080mg / DHA 720mg)', dose: '1.800mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Niacina (nicotinamida)', dose: '500mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições principais (almoço e jantar). Iniciar com 1 cápsula por 3 dias.',
  },
  {
    id: 'dislipidemia-3-int', name: 'Lipídio Zen · Intermediário', category: 'dislipidemia', tier: 'intermediario',
    ingredients: [
      { name: 'Ômega 3 (EPA 1.080mg / DHA 720mg)', dose: '1.800mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Niacina (nicotinamida)', dose: '500mg' },
      { name: 'Extrato de chá verde (EGCG)', dose: '300mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '300mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições principais. O chá verde pode interferir com ferro - aguardar 2h após suplementação de ferro.',
  },
  {
    id: 'dislipidemia-3-pre', name: 'Lipídio Zen · Premium', category: 'dislipidemia', tier: 'premium',
    ingredients: [
      { name: 'Ômega 3 concentrado (EPA 1.080mg / DHA 720mg)', dose: '1.800mg' },
      { name: 'Berberina (Berberine Phytosome®)', dose: '500mg' },
      { name: 'Niacina (nicotinamida)', dose: '500mg' },
      { name: 'Extrato de chá verde (EGCG)', dose: '300mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '300mg' },
      { name: 'Bergamonte® (extrato de bergamota)', dose: '500mg' },
      { name: 'BioPerine®', dose: '5mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições principais. Bergamonte® atua via AMPK na redução de triglicerídeos e LDL.',
  },

  // --- Concept 4: Escudo Vascular (HDL optimization / reverse cholesterol transport) ---
  {
    id: 'dislipidemia-4-ess', name: 'Escudo Vascular · Essencial', category: 'dislipidemia', tier: 'essencial',
    ingredients: [
      { name: 'Niacina (ácido nicotínico)', dose: '250mg' },
      { name: 'Policosanol', dose: '20mg' },
      { name: 'Fitoesteróis', dose: '800mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições principais. Iniciar niacina gradualmente para evitar flushing.',
  },
  {
    id: 'dislipidemia-4-int', name: 'Escudo Vascular · Intermediário', category: 'dislipidemia', tier: 'intermediario',
    ingredients: [
      { name: 'Niacina (ácido nicotínico)', dose: '250mg' },
      { name: 'Policosanol', dose: '20mg' },
      { name: 'Fitoesteróis', dose: '800mg' },
      { name: 'Extrato de alcachofra (Cynara scolymus)', dose: '600mg' },
      { name: 'Lecitina de girassol (fosfatidilcolina)', dose: '1.200mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições. A fosfatidilcolina auxilia no transporte reverso de colesterol.',
  },
  {
    id: 'dislipidemia-4-pre', name: 'Escudo Vascular · Premium', category: 'dislipidemia', tier: 'premium',
    ingredients: [
      { name: 'Niacina (ácido nicotínico)', dose: '250mg' },
      { name: 'Policosanol', dose: '20mg' },
      { name: 'Fitoesteróis', dose: '800mg' },
      { name: 'Extrato de alcachofra (Cynara scolymus)', dose: '600mg' },
      { name: 'Lecitina de girassol (fosfatidilcolina)', dose: '1.200mg' },
      { name: 'Bergamonte®', dose: '500mg' },
      { name: 'Kaneka Q10® (ubiquinol)', dose: '100mg' },
      { name: 'Pantotenato de cálcio (Vitamina B5)', dose: '300mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições. Bergamonte® demonstrou aumentar HDL em 22% em 6 meses. B5 é precursor da CoA no metabolismo lipídico.',
  },

  // --- Concept 5: Fluxo Perfeito (homocysteine / methylation support) ---
  {
    id: 'dislipidemia-5-ess', name: 'Fluxo Perfeito · Essencial', category: 'dislipidemia', tier: 'essencial',
    ingredients: [
      { name: 'Metilfolato (5-MTHF)', dose: '800mcg' },
      { name: 'Metilcobalamina (B12)', dose: '1.000mcg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã com o café da manhã.',
  },
  {
    id: 'dislipidemia-5-int', name: 'Fluxo Perfeito · Intermediário', category: 'dislipidemia', tier: 'intermediario',
    ingredients: [
      { name: 'Metilfolato (5-MTHF)', dose: '800mcg' },
      { name: 'Metilcobalamina (B12)', dose: '1.000mcg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
      { name: 'Betaína (TMG)', dose: '1.500mg' },
      { name: 'Riboflavina (B2)', dose: '25mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. TMG é doador de metil alternativo via BHMT.',
  },
  {
    id: 'dislipidemia-5-pre', name: 'Fluxo Perfeito · Premium', category: 'dislipidemia', tier: 'premium',
    ingredients: [
      { name: 'Metilfolato (Quatrefolic® 5-MTHF)', dose: '1.000mcg' },
      { name: 'Metilcobalamina (B12)', dose: '1.000mcg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
      { name: 'Betaína (TMG)', dose: '1.500mg' },
      { name: 'Riboflavina (B2)', dose: '25mg' },
      { name: 'SAMe (S-adenosilmetionina)', dose: '200mg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Quatrefolic® é a forma mais biodisponível de folato. SAMe deve ser tomado longe de refeições proteicas idealmente.',
  },

  // ═══════════════════════════════════════════════════════════════
  // DIABETES
  // ═══════════════════════════════════════════════════════════════

  // --- Concept 1: Glicose Zen (insulin sensitivity / GLUT4) ---
  {
    id: 'diabetes-1-ess', name: 'Glicose Zen · Essencial', category: 'diabetes', tier: 'essencial',
    ingredients: [
      { name: 'Cromo (picolinato)', dose: '300mcg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '300mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar 15 minutos antes das refeições principais (almoço e jantar).',
  },
  {
    id: 'diabetes-1-int', name: 'Glicose Zen · Intermediário', category: 'diabetes', tier: 'intermediario',
    ingredients: [
      { name: 'Cromo (picolinato)', dose: '300mcg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '600mg' },
      { name: 'Canela do Ceilão (Cinnamomum verum)', dose: '500mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
      { name: 'Vanádio (sulfato)', dose: '100mcg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar 15 minutos antes do almoço e do jantar.',
  },
  {
    id: 'diabetes-1-pre', name: 'Glicose Zen · Premium', category: 'diabetes', tier: 'premium',
    ingredients: [
      { name: 'Cromo (picolinato)', dose: '300mcg' },
      { name: 'Berberina (Berberine Phytosome®)', dose: '500mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '600mg' },
      { name: 'Canela do Ceilão (CinSulin®)', dose: '500mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
      { name: 'Vanádio (sulfato)', dose: '100mcg' },
      { name: 'Banaba (ácido corosólico 18%)', dose: '250mg' },
      { name: 'BioPerine®', dose: '5mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar 15 minutos antes do almoço e do jantar. CinSulin® ativa GLUT4 e melhora sensibilidade insulínica.',
  },

  // --- Concept 2: Pâncreas Vital (beta-cell protection) ---
  {
    id: 'diabetes-2-ess', name: 'Pâncreas Vital · Essencial', category: 'diabetes', tier: 'essencial',
    ingredients: [
      { name: 'Zinco (quelato)', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o almoço. Vitamina D3 necessita de gordura para absorção.',
  },
  {
    id: 'diabetes-2-int', name: 'Pâncreas Vital · Intermediário', category: 'diabetes', tier: 'intermediario',
    ingredients: [
      { name: 'Zinco (quelato)', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'Vitamina E (tocoferóis mistos)', dose: '200UI' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o almoço. Taurina protege células beta do estresse oxidativo.',
  },
  {
    id: 'diabetes-2-pre', name: 'Pâncreas Vital · Premium', category: 'diabetes', tier: 'premium',
    ingredients: [
      { name: 'Zinco Albion® (bisglicinato)', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'Vitamina E (tocoferóis mistos)', dose: '200UI' },
      { name: 'CurcuWIN® (curcumina ultrasolúvel)', dose: '250mg' },
      { name: 'PQQ (Mitoprime®)', dose: '20mg' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o almoço. CurcuWIN® é 136x mais biodisponível. PQQ promove biogênese mitocondrial nas células beta.',
  },

  // --- Concept 3: Açúcar Domado (glucose absorption modulation) ---
  {
    id: 'diabetes-3-ess', name: 'Açúcar Domado · Essencial', category: 'diabetes', tier: 'essencial',
    ingredients: [
      { name: 'Faseolamina (Phaseolus vulgaris)', dose: '500mg' },
      { name: 'Psyllium (Plantago ovata)', dose: '3.000mg' },
      { name: 'Gymnema sylvestre (ácido gimnêmico 25%)', dose: '400mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 250ml de água e tomar 20 minutos antes do almoço e jantar. Beber bastante água em seguida.',
  },
  {
    id: 'diabetes-3-int', name: 'Açúcar Domado · Intermediário', category: 'diabetes', tier: 'intermediario',
    ingredients: [
      { name: 'Faseolamina (Phaseolus vulgaris)', dose: '500mg' },
      { name: 'Psyllium (Plantago ovata)', dose: '3.000mg' },
      { name: 'Gymnema sylvestre (ácido gimnêmico 25%)', dose: '400mg' },
      { name: 'Amora branca (Morus alba)', dose: '500mg' },
      { name: 'Vinagre de maçã (ácido acético 5%)', dose: '500mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 250ml de água e tomar 20 minutos antes das refeições. Morus alba inibe alfa-glicosidase.',
  },
  {
    id: 'diabetes-3-pre', name: 'Açúcar Domado · Premium', category: 'diabetes', tier: 'premium',
    ingredients: [
      { name: 'Faseolamina (Phaseolus vulgaris)', dose: '500mg' },
      { name: 'Psyllium (Plantago ovata)', dose: '3.000mg' },
      { name: 'Gymnema sylvestre (GS4® padronizado 75%)', dose: '400mg' },
      { name: 'Amora branca (Morus alba)', dose: '500mg' },
      { name: 'Glucomanano (Konjac)', dose: '1.000mg' },
      { name: 'Inulina (FOS)', dose: '3.000mg' },
      { name: 'Cromo (picolinato)', dose: '200mcg' },
      { name: 'BioPerine®', dose: '5mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 300ml de água e tomar 20 minutos antes das refeições. Inulina alimenta microbiota benéfica para controle glicêmico.',
  },

  // --- Concept 4: Energia Estável (glycemic variability reduction) ---
  {
    id: 'diabetes-4-ess', name: 'Energia Estável · Essencial', category: 'diabetes', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio (bisglicinato)', dose: '300mg' },
      { name: 'Vitamina B1 (benfotiamina)', dose: '150mg' },
      { name: 'Ômega 3 (EPA 540mg / DHA 360mg)', dose: '900mg' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o almoço. Benfotiamina protege contra AGEs (produtos de glicação avançada).',
  },
  {
    id: 'diabetes-4-int', name: 'Energia Estável · Intermediário', category: 'diabetes', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio (bisglicinato)', dose: '300mg' },
      { name: 'Vitamina B1 (benfotiamina)', dose: '150mg' },
      { name: 'Ômega 3 (EPA 540mg / DHA 360mg)', dose: '900mg' },
      { name: 'Mio-inositol', dose: '2.000mg' },
      { name: 'D-chiro-inositol', dose: '50mg' },
      { name: 'Biotina', dose: '5mg' },
    ],
    posology: '1 sachê + 2 cápsulas (ômega) 1x ao dia',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Sachê diluído em água com o almoço, cápsulas com o jantar. A proporção 40:1 mio:D-chiro-inositol é fisiológica.',
  },
  {
    id: 'diabetes-4-pre', name: 'Energia Estável · Premium', category: 'diabetes', tier: 'premium',
    ingredients: [
      { name: 'Magnésio Albion® (bisglicinato)', dose: '300mg' },
      { name: 'Vitamina B1 (benfotiamina)', dose: '150mg' },
      { name: 'Ômega 3 (EPA 540mg / DHA 360mg)', dose: '900mg' },
      { name: 'Mio-inositol', dose: '2.000mg' },
      { name: 'D-chiro-inositol', dose: '50mg' },
      { name: 'Biotina', dose: '5mg' },
      { name: 'Ácido R-lipoico (Bio-Enhanced® R-ALA)', dose: '300mg' },
      { name: 'Panmol® B-Complex (vitaminas B naturais)', dose: '1 dose' },
    ],
    posology: '1 sachê + 2 cápsulas (ômega) 1x ao dia',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Sachê diluído em água com o almoço, cápsulas com o jantar. Bio-Enhanced® R-ALA estabiliza a forma ativa do ácido lipoico.',
  },

  // --- Concept 5: Resistência Zero (insulin resistance / inflammation axis) ---
  {
    id: 'diabetes-5-ess', name: 'Resistência Zero · Essencial', category: 'diabetes', tier: 'essencial',
    ingredients: [
      { name: 'Cúrcuma (curcuminoides 95%)', dose: '500mg' },
      { name: 'Resveratrol (trans-resveratrol)', dose: '150mg' },
      { name: 'Quercetina', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições principais. Associação anti-inflamatória sinérgica.',
  },
  {
    id: 'diabetes-5-int', name: 'Resistência Zero · Intermediário', category: 'diabetes', tier: 'intermediario',
    ingredients: [
      { name: 'Cúrcuma (curcuminoides 95%)', dose: '500mg' },
      { name: 'Resveratrol (trans-resveratrol)', dose: '150mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Ômega 3 (EPA 720mg / DHA 480mg)', dose: '1.200mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições contendo gorduras. Ômega 3 atua via resolvinas na resolução inflamatória.',
  },
  {
    id: 'diabetes-5-pre', name: 'Resistência Zero · Premium', category: 'diabetes', tier: 'premium',
    ingredients: [
      { name: 'Meriva® (curcumina fitossômica)', dose: '500mg' },
      { name: 'Resveratrol (Veri-te™)', dose: '200mg' },
      { name: 'Quercetina Phytosome® (Quercefít)', dose: '500mg' },
      { name: 'Ômega 3 (EPA 720mg / DHA 480mg)', dose: '1.200mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Zinco Albion® (bisglicinato)', dose: '15mg' },
      { name: 'Extrato de própolis verde (Artepillin C)', dose: '300mg' },
      { name: 'BioPerine®', dose: '5mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com as refeições contendo gorduras. Meriva® ativa AMPK e reduz TNF-alfa no tecido adiposo.',
  },

  // ═══════════════════════════════════════════════════════════════
  // CÉREBRO
  // ═══════════════════════════════════════════════════════════════

  // --- Concept 1: Mente Cristalina (acetylcholine / memory) ---
  {
    id: 'cerebro-1-ess', name: 'Mente Cristalina · Essencial', category: 'cerebro', tier: 'essencial',
    ingredients: [
      { name: 'Colina bitartarato', dose: '500mg' },
      { name: 'Bacopa monnieri (bacosídeos 50%)', dose: '300mg' },
      { name: 'Huperzina A', dose: '200mcg' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã com o café da manhã. Huperzina A inibe a acetilcolinesterase.',
  },
  {
    id: 'cerebro-1-int', name: 'Mente Cristalina · Intermediário', category: 'cerebro', tier: 'intermediario',
    ingredients: [
      { name: 'Alfa-GPC (alfoscerato de colina)', dose: '300mg' },
      { name: 'Bacopa monnieri (bacosídeos 50%)', dose: '300mg' },
      { name: 'Huperzina A', dose: '200mcg' },
      { name: 'Fosfatidilserina', dose: '100mg' },
      { name: 'Acetil-L-Carnitina', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã e no almoço. Não tomar à noite para evitar insônia.',
  },
  {
    id: 'cerebro-1-pre', name: 'Mente Cristalina · Premium', category: 'cerebro', tier: 'premium',
    ingredients: [
      { name: 'Cognizin® (CDP-colina / citicolina)', dose: '250mg' },
      { name: 'Bacognize® (Bacopa monnieri)', dose: '300mg' },
      { name: 'Huperzina A', dose: '200mcg' },
      { name: 'Sharp-PS® (fosfatidilserina)', dose: '100mg' },
      { name: 'Acetil-L-Carnitina', dose: '500mg' },
      { name: 'Uridina monofosfato', dose: '250mg' },
      { name: 'DHA (ômega 3)', dose: '500mg' },
      { name: 'Vitamina B5 (pantotenato)', dose: '250mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã e no almoço com refeição. Cognizin® + Uridina + DHA promovem síntese sináptica de fosfatidilcolina.',
  },

  // --- Concept 2: Foco Laser (dopamine / executive function) ---
  {
    id: 'cerebro-2-ess', name: 'Foco Laser · Essencial', category: 'cerebro', tier: 'essencial',
    ingredients: [
      { name: 'L-Tirosina', dose: '500mg' },
      { name: 'Rhodiola rosea (rosavinas 3%)', dose: '200mg' },
      { name: 'Cafeína anidra', dose: '100mg' },
      { name: 'L-Teanina', dose: '200mg' },
    ],
    posology: '1 cápsula 1x ao dia pela manhã',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum pela manhã. Não tomar após as 14h. L-Teanina equilibra o efeito da cafeína.',
  },
  {
    id: 'cerebro-2-int', name: 'Foco Laser · Intermediário', category: 'cerebro', tier: 'intermediario',
    ingredients: [
      { name: 'N-Acetil L-Tirosina (NALT)', dose: '350mg' },
      { name: 'Rhodiola rosea (rosavinas 3%)', dose: '300mg' },
      { name: 'Cafeína anidra', dose: '100mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Mucuna pruriens (L-DOPA 15%)', dose: '300mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
    ],
    posology: '1 cápsula 1x ao dia pela manhã',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum pela manhã. Mucuna fornece L-DOPA precursor de dopamina. Não associar com IMAO.',
  },
  {
    id: 'cerebro-2-pre', name: 'Foco Laser · Premium', category: 'cerebro', tier: 'premium',
    ingredients: [
      { name: 'N-Acetil L-Tirosina (NALT)', dose: '350mg' },
      { name: 'Rhodiola rosea (rosavinas 3%)', dose: '300mg' },
      { name: 'enXtra® (Alpinia galanga)', dose: '300mg' },
      { name: 'L-Teanina (Suntheanine®)', dose: '200mg' },
      { name: 'Mucuna pruriens (L-DOPA 15%)', dose: '300mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
      { name: 'Cognizin® (CDP-colina)', dose: '250mg' },
      { name: 'Ferro bisglicinato (Ferrochel®)', dose: '14mg' },
    ],
    posology: '2 cápsulas 1x ao dia pela manhã',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum pela manhã. enXtra® potencializa foco por até 5h sem cafeína. Ferro é cofator da tirosina hidroxilase.',
  },

  // --- Concept 3: Neuro Escudo (neuroprotection / BDNF) ---
  {
    id: 'cerebro-3-ess', name: 'Neuro Escudo · Essencial', category: 'cerebro', tier: 'essencial',
    ingredients: [
      { name: 'Ômega 3 (DHA concentrado)', dose: '1.000mg' },
      { name: 'Cúrcuma (curcuminoides 95%)', dose: '500mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
    ],
    posology: '2 cápsulas 1x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com a refeição principal contendo gorduras.',
  },
  {
    id: 'cerebro-3-int', name: 'Neuro Escudo · Intermediário', category: 'cerebro', tier: 'intermediario',
    ingredients: [
      { name: 'Ômega 3 (DHA concentrado)', dose: '1.000mg' },
      { name: 'Cúrcuma (curcuminoides 95%)', dose: '500mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Resveratrol (trans-resveratrol)', dose: '200mg' },
      { name: 'Astaxantina', dose: '8mg' },
      { name: 'Juba de leão (Hericium erinaceus)', dose: '500mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço e jantar. Juba de leão estimula NGF (fator de crescimento nervoso).',
  },
  {
    id: 'cerebro-3-pre', name: 'Neuro Escudo · Premium', category: 'cerebro', tier: 'premium',
    ingredients: [
      { name: 'Ômega 3 (DHA concentrado)', dose: '1.000mg' },
      { name: 'Longvida® (curcumina lipídica)', dose: '400mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Resveratrol (Veri-te™)', dose: '200mg' },
      { name: 'Astaxantina (AstaReal®)', dose: '12mg' },
      { name: 'Juba de leão (Hericium erinaceus)', dose: '500mg' },
      { name: 'PQQ (Mitoprime®)', dose: '20mg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Vitamina E (tocoferóis mistos)', dose: '200UI' },
    ],
    posology: '3 cápsulas 2x ao dia',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço e jantar. Longvida® cruza a barreira hematoencefálica. PQQ estimula biogênese mitocondrial neuronal.',
  },

  // --- Concept 4: Clareza Total (brain fog / mitochondrial support) ---
  {
    id: 'cerebro-4-ess', name: 'Clareza Total · Essencial', category: 'cerebro', tier: 'essencial',
    ingredients: [
      { name: 'Acetil-L-Carnitina', dose: '1.000mg' },
      { name: 'Coenzima Q10', dose: '100mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã e no almoço. Não tomar à noite.',
  },
  {
    id: 'cerebro-4-int', name: 'Clareza Total · Intermediário', category: 'cerebro', tier: 'intermediario',
    ingredients: [
      { name: 'Acetil-L-Carnitina', dose: '1.000mg' },
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '300mg' },
      { name: 'Vitamina B1 (benfotiamina)', dose: '150mg' },
      { name: 'Creatina monoidratada', dose: '3.000mg' },
    ],
    posology: '1 sachê 1x ao dia + 1 cápsula 2x ao dia',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Sachê (creatina) diluído em água pela manhã. Cápsulas com refeições. Creatina é tampão energético cerebral.',
  },
  {
    id: 'cerebro-4-pre', name: 'Clareza Total · Premium', category: 'cerebro', tier: 'premium',
    ingredients: [
      { name: 'Acetil-L-Carnitina', dose: '1.000mg' },
      { name: 'Kaneka Q10® (ubiquinol)', dose: '200mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
      { name: 'Ácido R-lipoico (Bio-Enhanced® R-ALA)', dose: '300mg' },
      { name: 'Vitamina B1 (benfotiamina)', dose: '150mg' },
      { name: 'Creatina monoidratada (Creapure®)', dose: '3.000mg' },
      { name: 'NADH (forma reduzida)', dose: '10mg' },
      { name: 'PQQ (Mitoprime®)', dose: '20mg' },
    ],
    posology: '1 sachê 1x ao dia + 2 cápsulas 2x ao dia',
    quantity: '30 sachês + 120 cápsulas', duration: '1 mês',
    instructions: 'Sachê (creatina) diluído em água pela manhã. Cápsulas com refeições. NADH + CoQ10 otimizam cadeia de transporte de elétrons neuronal.',
  },

  // --- Concept 5: Sinapse Veloz (synaptic plasticity / learning speed) ---
  {
    id: 'cerebro-5-ess', name: 'Sinapse Veloz · Essencial', category: 'cerebro', tier: 'essencial',
    ingredients: [
      { name: 'Fosfatidilserina', dose: '100mg' },
      { name: 'Ginkgo biloba (24% ginkgoflavonoides)', dose: '120mg' },
      { name: 'Zinco (quelato)', dose: '15mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã e no almoço com refeição.',
  },
  {
    id: 'cerebro-5-int', name: 'Sinapse Veloz · Intermediário', category: 'cerebro', tier: 'intermediario',
    ingredients: [
      { name: 'Fosfatidilserina', dose: '100mg' },
      { name: 'Ginkgo biloba (24% ginkgoflavonoides)', dose: '120mg' },
      { name: 'Zinco (quelato)', dose: '15mg' },
      { name: 'Magnésio L-treonato', dose: '144mg' },
      { name: 'Uridina monofosfato', dose: '250mg' },
      { name: 'DHA (ômega 3)', dose: '500mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã com refeição e magnésio L-treonato à noite antes de dormir (potencializa consolidação de memória).',
  },
  {
    id: 'cerebro-5-pre', name: 'Sinapse Veloz · Premium', category: 'cerebro', tier: 'premium',
    ingredients: [
      { name: 'Sharp-PS® (fosfatidilserina)', dose: '100mg' },
      { name: 'Ginkgo biloba (24% ginkgoflavonoides)', dose: '120mg' },
      { name: 'Zinco Albion® (bisglicinato)', dose: '15mg' },
      { name: 'Magnésio L-treonato (Magtein®)', dose: '144mg' },
      { name: 'Uridina monofosfato', dose: '250mg' },
      { name: 'DHA (ômega 3)', dose: '500mg' },
      { name: 'Bacognize® (Bacopa monnieri)', dose: '150mg' },
      { name: 'Lítio (orotato)', dose: '5mg' },
    ],
    posology: '2 cápsulas pela manhã + 2 cápsulas à noite',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Manhã: com café da manhã. Noite: Magtein® e lítio orotato antes de dormir. Magtein® é a única forma que eleva magnésio cerebral via barreira hematoencefálica.',
  },

  // ═══════════════════════════════════════════════════════════════
  // DISPOSIÇÃO (energy/vitality)
  // ═══════════════════════════════════════════════════════════════

  // --- Concept 1: Sol Nascente (mitochondrial energy production) ---
  {
    id: 'disposicao-1-ess', name: 'Sol Nascente · Essencial', category: 'disposicao', tier: 'essencial',
    ingredients: [
      { name: 'Coenzima Q10', dose: '100mg' },
      { name: 'D-Ribose', dose: '2.500mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
    ],
    posology: '1 sachê 1x ao dia diluído em água',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar pela manhã com o café da manhã.',
  },
  {
    id: 'disposicao-1-int', name: 'Sol Nascente · Intermediário', category: 'disposicao', tier: 'intermediario',
    ingredients: [
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'D-Ribose', dose: '5.000mg' },
      { name: 'Magnésio (bisglicinato)', dose: '200mg' },
      { name: 'Acetil-L-Carnitina', dose: '500mg' },
      { name: 'Ácido alfa-lipoico (ALA)', dose: '300mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '25mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar com café da manhã e almoço. D-Ribose é substrato direto para síntese de ATP.',
  },
  {
    id: 'disposicao-1-pre', name: 'Sol Nascente · Premium', category: 'disposicao', tier: 'premium',
    ingredients: [
      { name: 'Kaneka Q10® (ubiquinol)', dose: '200mg' },
      { name: 'D-Ribose', dose: '5.000mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
      { name: 'Acetil-L-Carnitina', dose: '500mg' },
      { name: 'Ácido R-lipoico (Bio-Enhanced® R-ALA)', dose: '300mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '25mg' },
      { name: 'PQQ (Mitoprime®)', dose: '20mg' },
      { name: 'NADH (forma reduzida)', dose: '10mg' },
      { name: 'Creatina monoidratada (Creapure®)', dose: '3.000mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 250ml de água. Manhã e almoço. PQQ estimula biogênese mitocondrial via PGC-1alfa.',
  },

  // --- Concept 2: Força Interior (adrenal support / cortisol balance) ---
  {
    id: 'disposicao-2-ess', name: 'Força Interior · Essencial', category: 'disposicao', tier: 'essencial',
    ingredients: [
      { name: 'Ashwagandha (witanolídeos 5%)', dose: '300mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Vitamina B5 (ácido pantotênico)', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com café da manhã e almoço. Vitamina B5 é essencial para síntese de hormônios adrenais.',
  },
  {
    id: 'disposicao-2-int', name: 'Força Interior · Intermediário', category: 'disposicao', tier: 'intermediario',
    ingredients: [
      { name: 'Ashwagandha (witanolídeos 5%)', dose: '300mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Vitamina B5 (ácido pantotênico)', dose: '500mg' },
      { name: 'Rhodiola rosea (rosavinas 3%)', dose: '200mg' },
      { name: 'Eleuterococo (Eleutherococcus senticosus)', dose: '300mg' },
      { name: 'Fosfatidilserina', dose: '100mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com café da manhã e almoço. Não tomar após 14h. Fosfatidilserina modula cortisol noturno.',
  },
  {
    id: 'disposicao-2-pre', name: 'Força Interior · Premium', category: 'disposicao', tier: 'premium',
    ingredients: [
      { name: 'Ashwagandha (KSM-66®)', dose: '300mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Vitamina B5 (ácido pantotênico)', dose: '500mg' },
      { name: 'Rhodiola rosea (rosavinas 3%)', dose: '200mg' },
      { name: 'Eleuterococo (Eleutherococcus senticosus)', dose: '300mg' },
      { name: 'Sharp-PS® (fosfatidilserina)', dose: '100mg' },
      { name: 'Cordyceps militaris (cordycepina 0,5%)', dose: '500mg' },
      { name: 'Magnésio Albion® (bisglicinato)', dose: '200mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com café da manhã e almoço. KSM-66® reduziu cortisol em 27,9% em estudo clínico. Cordyceps melhora VO2 max.',
  },

  // --- Concept 3: Vitalidade Plena (iron/B12/folate optimization) ---
  {
    id: 'disposicao-3-ess', name: 'Vitalidade Plena · Essencial', category: 'disposicao', tier: 'essencial',
    ingredients: [
      { name: 'Ferro bisglicinato', dose: '28mg' },
      { name: 'Metilcobalamina (B12)', dose: '1.000mcg' },
      { name: 'Metilfolato (5-MTHF)', dose: '400mcg' },
      { name: 'Vitamina C', dose: '250mg' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum ou 2h após refeição. Vitamina C potencializa absorção do ferro. Evitar tomar com café, chá ou laticínios.',
  },
  {
    id: 'disposicao-3-int', name: 'Vitalidade Plena · Intermediário', category: 'disposicao', tier: 'intermediario',
    ingredients: [
      { name: 'Ferro bisglicinato', dose: '28mg' },
      { name: 'Metilcobalamina (B12)', dose: '1.000mcg' },
      { name: 'Metilfolato (5-MTHF)', dose: '400mcg' },
      { name: 'Vitamina C', dose: '250mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
      { name: 'Cobre (bisglicinato)', dose: '1mg' },
      { name: 'Lactoferrina', dose: '100mg' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum ou 2h após refeição. Lactoferrina melhora absorção de ferro e é anti-inflamatória.',
  },
  {
    id: 'disposicao-3-pre', name: 'Vitalidade Plena · Premium', category: 'disposicao', tier: 'premium',
    ingredients: [
      { name: 'Ferro bisglicinato (Ferrochel®)', dose: '28mg' },
      { name: 'Metilcobalamina (B12)', dose: '1.000mcg' },
      { name: 'Metilfolato (Quatrefolic® 5-MTHF)', dose: '400mcg' },
      { name: 'Vitamina C', dose: '250mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
      { name: 'Cobre (bisglicinato)', dose: '1mg' },
      { name: 'Lactoferrina', dose: '200mg' },
      { name: 'Panmol® B-Complex (vitaminas B naturais)', dose: '1 dose' },
    ],
    posology: '1 cápsula 1x ao dia',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum. Ferrochel® tem absorção 4x superior ao sulfato ferroso com mínimo desconforto GI. Panmol® fornece B-complex de fonte natural.',
  },

  // --- Concept 4: Motor Celular (CoQ10 / electron transport chain) ---
  {
    id: 'disposicao-4-ess', name: 'Motor Celular · Essencial', category: 'disposicao', tier: 'essencial',
    ingredients: [
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'L-Carnitina', dose: '1.000mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '50mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições contendo gorduras (café da manhã e almoço). B2 é cofator do complexo I e II mitocondrial.',
  },
  {
    id: 'disposicao-4-int', name: 'Motor Celular · Intermediário', category: 'disposicao', tier: 'intermediario',
    ingredients: [
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'L-Carnitina', dose: '1.000mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '50mg' },
      { name: 'Vitamina B3 (niacinamida)', dose: '250mg' },
      { name: 'Succinato de sódio', dose: '200mg' },
      { name: 'Taurina', dose: '1.000mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar com café da manhã e almoço. Succinato é substrato direto do complexo II.',
  },
  {
    id: 'disposicao-4-pre', name: 'Motor Celular · Premium', category: 'disposicao', tier: 'premium',
    ingredients: [
      { name: 'Kaneka Q10® (ubiquinol)', dose: '200mg' },
      { name: 'L-Carnitina (Carnipure®)', dose: '1.000mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '50mg' },
      { name: 'Vitamina B3 (niacinamida)', dose: '250mg' },
      { name: 'Succinato de sódio', dose: '200mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'PQQ (Mitoprime®)', dose: '20mg' },
      { name: 'Shilajit (ácido fúlvico padronizado)', dose: '200mg' },
    ],
    posology: '1 sachê 2x ao dia diluído em água',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar com refeições. Shilajit potencializa CoQ10 e otimiza cadeia de transporte de elétrons.',
  },

  // --- Concept 5: Despertar Total (morning energy / thyroid-adrenal axis) ---
  {
    id: 'disposicao-5-ess', name: 'Despertar Total · Essencial', category: 'disposicao', tier: 'essencial',
    ingredients: [
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Zinco (quelato)', dose: '15mg' },
      { name: 'Iodo (iodeto de potássio)', dose: '150mcg' },
      { name: 'Tirosina', dose: '500mg' },
    ],
    posology: '1 cápsula 1x ao dia pela manhã',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum pela manhã. Selênio é cofator da deiodinase (conversão T4 em T3). Tirosina é precursor de T3/T4.',
  },
  {
    id: 'disposicao-5-int', name: 'Despertar Total · Intermediário', category: 'disposicao', tier: 'intermediario',
    ingredients: [
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Zinco (quelato)', dose: '15mg' },
      { name: 'Iodo (iodeto de potássio)', dose: '150mcg' },
      { name: 'Tirosina', dose: '500mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Vitamina A (retinol palmitato)', dose: '2.500UI' },
      { name: 'Guggul (guggulsteronas 10%)', dose: '250mg' },
    ],
    posology: '1 cápsula 1x ao dia pela manhã',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o café da manhã (necessita gordura para absorção de D3 e A). Guggul estimula conversão T4 a T3.',
  },
  {
    id: 'disposicao-5-pre', name: 'Despertar Total · Premium', category: 'disposicao', tier: 'premium',
    ingredients: [
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Zinco Albion® (bisglicinato)', dose: '15mg' },
      { name: 'Iodo (iodeto de potássio)', dose: '150mcg' },
      { name: 'N-Acetil L-Tirosina (NALT)', dose: '350mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Vitamina A (retinol palmitato)', dose: '2.500UI' },
      { name: 'Guggul (guggulsteronas 10%)', dose: '250mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '300mg' },
      { name: 'Vitamina K2 (MK-7 MenaQ7®)', dose: '100mcg' },
    ],
    posology: '2 cápsulas 1x ao dia pela manhã',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com o café da manhã rico em gorduras. KSM-66® normaliza TSH e melhora T4. MenaQ7® sinergiza com D3 para metabolismo do cálcio.',
  },
];
