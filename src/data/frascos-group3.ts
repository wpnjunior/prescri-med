import type { Frasco } from '../types';

export const FRASCOS_GROUP3: Frasco[] = [
  // =============================================
  // INFLAMAÇÃO (anti-inflammatory)
  // =============================================

  // --- Concept 1: Chama Fria — NF-kB pathway inhibition ---
  {
    id: 'inflamacao-1-ess', name: 'Chama Fria · Essencial', category: 'inflamacao', tier: 'essencial',
    ingredients: [
      { name: 'Curcumina', dose: '500mg' },
      { name: 'Boswellia serrata', dose: '400mg' },
      { name: 'Gengibre (extrato padronizado)', dose: '250mg' },
    ],
    posology: '1 cápsula com almoço',
    quantity: '60 cápsulas', duration: '2 meses',
    instructions: 'Tomar com refeição contendo gordura para melhor absorção.',
  },
  {
    id: 'inflamacao-1-int', name: 'Chama Fria · Intermediário', category: 'inflamacao', tier: 'intermediario',
    ingredients: [
      { name: 'Curcumina', dose: '500mg' },
      { name: 'Boswellia serrata', dose: '400mg' },
      { name: 'Gengibre (extrato padronizado)', dose: '250mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Resveratrol', dose: '150mg' },
    ],
    posology: '2 cápsulas ao dia (1 almoço, 1 jantar)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições contendo gordura. Evitar uso concomitante com AINEs sem orientação.',
  },
  {
    id: 'inflamacao-1-pre', name: 'Chama Fria · Premium', category: 'inflamacao', tier: 'premium',
    ingredients: [
      { name: 'CurcuWIN® (curcumina ultrasolúvel)', dose: '500mg' },
      { name: 'Boswellia serrata (AKBA 30%)', dose: '400mg' },
      { name: 'Gengibre (extrato padronizado)', dose: '250mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Resveratrol (trans-resveratrol)', dose: '200mg' },
      { name: 'BioPerine® (piperina)', dose: '10mg' },
      { name: 'Alfa-lipóico (R-ALA)', dose: '300mg' },
      { name: 'Apigenina', dose: '50mg' },
    ],
    posology: '2 cápsulas ao dia (1 almoço, 1 jantar)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições ricas em gordura. Piperina pode interagir com medicamentos — verificar interações.',
  },

  // --- Concept 2: Alívio Profundo — COX/LOX modulation (joint/muscle) ---
  {
    id: 'inflamacao-2-ess', name: 'Alívio Profundo · Essencial', category: 'inflamacao', tier: 'essencial',
    ingredients: [
      { name: 'Boswellia serrata', dose: '300mg' },
      { name: 'Unha-de-gato (Uncaria tomentosa)', dose: '250mg' },
      { name: 'Colágeno tipo II não desnaturado (UC-II)', dose: '40mg' },
    ],
    posology: '1 cápsula ao dia em jejum',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum, 30 minutos antes do café da manhã, para melhor absorção do UC-II.',
  },
  {
    id: 'inflamacao-2-int', name: 'Alívio Profundo · Intermediário', category: 'inflamacao', tier: 'intermediario',
    ingredients: [
      { name: 'Boswellia serrata', dose: '400mg' },
      { name: 'Unha-de-gato (Uncaria tomentosa)', dose: '300mg' },
      { name: 'Colágeno tipo II não desnaturado (UC-II)', dose: '40mg' },
      { name: 'MSM (metilsulfonilmetano)', dose: '1.000mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '2 cápsulas ao dia (1 manhã em jejum, 1 almoço)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'UC-II em jejum pela manhã; demais com almoço. Dosar 25(OH)D após 60 dias.',
  },
  {
    id: 'inflamacao-2-pre', name: 'Alívio Profundo · Premium', category: 'inflamacao', tier: 'premium',
    ingredients: [
      { name: 'Boswellia serrata (AprèsFlex®)', dose: '500mg' },
      { name: 'Unha-de-gato (Uncaria tomentosa)', dose: '300mg' },
      { name: 'Colágeno tipo II não desnaturado (UC-II)', dose: '40mg' },
      { name: 'MSM (metilsulfonilmetano)', dose: '1.500mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Vitamina K2-MK7 (MenaQ7®)', dose: '100mcg' },
      { name: 'Hyal Joint® (ácido hialurônico)', dose: '80mg' },
      { name: 'Bromelina', dose: '500mg' },
    ],
    posology: '1 sachê ao dia diluído em água + 1 cápsula em jejum',
    quantity: '30 sachês + 30 cápsulas', duration: '1 mês',
    instructions: 'Cápsula de UC-II em jejum pela manhã. Sachê com almoço. Manter suplementação de D3+K2 contínua.',
  },

  // --- Concept 3: Silêncio Inflamatório — gut-inflammation axis ---
  {
    id: 'inflamacao-3-ess', name: 'Silêncio Inflamatório · Essencial', category: 'inflamacao', tier: 'essencial',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Quercetina', dose: '500mg' },
    ],
    posology: '1 sachê ao dia diluído em água',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água e tomar em jejum, 30 minutos antes do café.',
  },
  {
    id: 'inflamacao-3-int', name: 'Silêncio Inflamatório · Intermediário', category: 'inflamacao', tier: 'intermediario',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Butirato de sódio', dose: '600mg' },
      { name: 'Vitamina A (retinol palmitato)', dose: '5.000UI' },
      { name: 'Aloe vera (extrato 200:1)', dose: '100mg' },
    ],
    posology: '1 sachê ao dia em jejum',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água e tomar em jejum. Evitar uso prolongado de vitamina A em doses altas — reavaliar em 60 dias.',
  },
  {
    id: 'inflamacao-3-pre', name: 'Silêncio Inflamatório · Premium', category: 'inflamacao', tier: 'premium',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Quercetina (Quercefit® fitossomada)', dose: '500mg' },
      { name: 'Butirato de sódio', dose: '600mg' },
      { name: 'Vitamina A (retinol palmitato)', dose: '5.000UI' },
      { name: 'Aloe vera (extrato 200:1)', dose: '100mg' },
      { name: 'Lactoferrina', dose: '250mg' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
    ],
    posology: '1 sachê ao dia em jejum',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água gelada e tomar em jejum. Manter distância de 2h de antibióticos caso em uso.',
  },

  // --- Concept 4: Resgate Celular — oxidative stress / antioxidant defense ---
  {
    id: 'inflamacao-4-ess', name: 'Resgate Celular · Essencial', category: 'inflamacao', tier: 'essencial',
    ingredients: [
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Vitamina C', dose: '1.000mg' },
    ],
    posology: '1 cápsula 2x ao dia (manhã e noite)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água. Pode ser tomado com ou sem alimento.',
  },
  {
    id: 'inflamacao-4-int', name: 'Resgate Celular · Intermediário', category: 'inflamacao', tier: 'intermediario',
    ingredients: [
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Alfa-lipóico (R-ALA)', dose: '300mg' },
      { name: 'Coenzima Q10 (ubiquinona)', dose: '200mg' },
      { name: 'Vitamina E (tocoferóis mistos)', dose: '400UI' },
    ],
    posology: '2 cápsulas ao dia (1 café, 1 almoço)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições contendo gordura para absorção de CoQ10 e vitamina E.',
  },
  {
    id: 'inflamacao-4-pre', name: 'Resgate Celular · Premium', category: 'inflamacao', tier: 'premium',
    ingredients: [
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'SelenoExcell® (selênio orgânico)', dose: '200mcg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Alfa-lipóico (R-ALA)', dose: '300mg' },
      { name: 'Coenzima Q10 (Kaneka Ubiquinol™)', dose: '200mg' },
      { name: 'Vitamina E (tocoferóis mistos)', dose: '400UI' },
      { name: 'Setria® Glutationa reduzida', dose: '500mg' },
      { name: 'Astaxantina (AstaReal®)', dose: '12mg' },
      { name: 'PQQ (pirroloquinolina quinona)', dose: '20mg' },
    ],
    posology: '3 cápsulas ao dia (1 café, 1 almoço, 1 jantar)',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar sempre com refeições ricas em gordura. Glutationa sublingual se disponível é preferível.',
  },

  // --- Concept 5: Equilíbrio Omega — omega 3/6 ratio / resolvin production ---
  {
    id: 'inflamacao-5-ess', name: 'Equilíbrio Omega · Essencial', category: 'inflamacao', tier: 'essencial',
    ingredients: [
      { name: 'Ômega-3 (EPA 720mg + DHA 480mg)', dose: '1.200mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '12mg' },
      { name: 'Óleo de borragem (GLA)', dose: '500mg' },
    ],
    posology: '2 cápsulas ao dia com almoço',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição principal. Manter refrigerado após abrir.',
  },
  {
    id: 'inflamacao-5-int', name: 'Equilíbrio Omega · Intermediário', category: 'inflamacao', tier: 'intermediario',
    ingredients: [
      { name: 'Ômega-3 (EPA 1.000mg + DHA 500mg)', dose: '1.500mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '12mg' },
      { name: 'Óleo de borragem (GLA)', dose: '500mg' },
      { name: 'Curcumina', dose: '300mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '3 cápsulas ao dia com almoço',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço (refeição mais gordurosa). Monitorar índice ômega-3 eritrocitário.',
  },
  {
    id: 'inflamacao-5-pre', name: 'Equilíbrio Omega · Premium', category: 'inflamacao', tier: 'premium',
    ingredients: [
      { name: 'Ômega-3 (EPA 1.200mg + DHA 600mg) — óleo de peixe ultrapurificado IFOS 5 estrelas', dose: '1.800mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '12mg' },
      { name: 'Óleo de borragem (GLA)', dose: '500mg' },
      { name: 'Meriva® (curcumina fitossomada)', dose: '500mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'SPM Active® (mediadores pró-resolutivos)', dose: '500mg' },
      { name: 'Astaxantina', dose: '6mg' },
    ],
    posology: '3 cápsulas softgel ao dia com almoço',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço. Congelar para reduzir refluxo. SPM potencializa resolução inflamatória ativa.',
  },

  // =============================================
  // DETOX (detoxification)
  // =============================================

  // --- Concept 1: Rio Cristalino — hepatic phase I/II detox ---
  {
    id: 'detox-1-ess', name: 'Rio Cristalino · Essencial', category: 'detox', tier: 'essencial',
    ingredients: [
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Cardo-mariano (silimarina 80%)', dose: '300mg' },
      { name: 'Brócolis (sulforafano 10mg)', dose: '250mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água, preferencialmente com refeições. Manter boa hidratação (2L/dia).',
  },
  {
    id: 'detox-1-int', name: 'Rio Cristalino · Intermediário', category: 'detox', tier: 'intermediario',
    ingredients: [
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Cardo-mariano (silimarina 80%)', dose: '300mg' },
      { name: 'Brócolis (sulforafano 10mg)', dose: '250mg' },
      { name: 'Cálcio D-glucarato', dose: '500mg' },
      { name: 'DIM (diindolilmetano)', dose: '100mg' },
      { name: 'Glicina', dose: '1.000mg' },
    ],
    posology: '2 cápsulas 2x ao dia (manhã e noite)',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Aumentar ingestão de água e fibras durante o protocolo.',
  },
  {
    id: 'detox-1-pre', name: 'Rio Cristalino · Premium', category: 'detox', tier: 'premium',
    ingredients: [
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Siliphos® (silimarina fitossomada)', dose: '300mg' },
      { name: 'Brócolis (sulforafano — TrueBroc®)', dose: '250mg' },
      { name: 'Cálcio D-glucarato', dose: '500mg' },
      { name: 'DIM (diindolilmetano)', dose: '100mg' },
      { name: 'Glicina', dose: '1.500mg' },
      { name: 'Setria® Glutationa reduzida', dose: '500mg' },
      { name: 'Molibdênio quelato', dose: '150mcg' },
      { name: 'Taurina', dose: '1.000mg' },
    ],
    posology: '1 sachê + 2 cápsulas ao dia',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Sachê em jejum diluído em água. Cápsulas com almoço e jantar. Hidratação mínima de 2,5L/dia.',
  },

  // --- Concept 2: Purificação Total — heavy metal chelation support ---
  {
    id: 'detox-2-ess', name: 'Purificação Total · Essencial', category: 'detox', tier: 'essencial',
    ingredients: [
      { name: 'Chlorella (parede celular quebrada)', dose: '2.000mg' },
      { name: 'Coentro (extrato padronizado)', dose: '500mg' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
    ],
    posology: '4 comprimidos ao dia (2 almoço, 2 jantar)',
    quantity: '120 comprimidos', duration: '1 mês',
    instructions: 'Tomar com refeições. Iniciar com 2 comprimidos/dia na 1ª semana e aumentar gradualmente.',
  },
  {
    id: 'detox-2-int', name: 'Purificação Total · Intermediário', category: 'detox', tier: 'intermediario',
    ingredients: [
      { name: 'Chlorella (parede celular quebrada)', dose: '3.000mg' },
      { name: 'Coentro (extrato padronizado)', dose: '500mg' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Ácido alfa-lipóico (R-ALA)', dose: '300mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
    ],
    posology: '1 sachê + 2 cápsulas ao dia',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Sachê de chlorella em jejum. Cápsulas com refeições. Manter intestino regulado — adicionar fibras se necessário.',
  },
  {
    id: 'detox-2-pre', name: 'Purificação Total · Premium', category: 'detox', tier: 'premium',
    ingredients: [
      { name: 'Chlorella orgânica (parede celular quebrada)', dose: '3.000mg' },
      { name: 'Coentro (extrato padronizado)', dose: '500mg' },
      { name: 'SelenoExcell® (selênio orgânico)', dose: '200mcg' },
      { name: 'Ácido alfa-lipóico (R-ALA)', dose: '300mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Setria® Glutationa reduzida', dose: '500mg' },
      { name: 'EDTA cálcico dissódico (oral)', dose: '500mg' },
      { name: 'Ácido húmico/fúlvico', dose: '250mg' },
    ],
    posology: '1 sachê manhã + 3 cápsulas divididas nas refeições',
    quantity: '30 sachês + 90 cápsulas', duration: '1 mês',
    instructions: 'Sachê em jejum com 300ml de água. Cápsulas divididas entre almoço e jantar. Monitorar minerais essenciais durante protocolo.',
  },

  // --- Concept 3: Fígado Novo — hepatoprotection / liver regeneration ---
  {
    id: 'detox-3-ess', name: 'Fígado Novo · Essencial', category: 'detox', tier: 'essencial',
    ingredients: [
      { name: 'Cardo-mariano (silimarina 80%)', dose: '400mg' },
      { name: 'Alcachofra (extrato padronizado — cinarina)', dose: '300mg' },
      { name: 'Colina bitartarato', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar antes das refeições principais (almoço e jantar).',
  },
  {
    id: 'detox-3-int', name: 'Fígado Novo · Intermediário', category: 'detox', tier: 'intermediario',
    ingredients: [
      { name: 'Cardo-mariano (silimarina 80%)', dose: '400mg' },
      { name: 'Alcachofra (extrato padronizado — cinarina)', dose: '300mg' },
      { name: 'Colina bitartarato', dose: '500mg' },
      { name: 'Ácido alfa-lipóico', dose: '300mg' },
      { name: 'Fosfolipídeos de soja (fosfatidilcolina)', dose: '600mg' },
    ],
    posology: '2 cápsulas 2x ao dia com refeições',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço e jantar. Indicado em protocolos de esteatose hepática.',
  },
  {
    id: 'detox-3-pre', name: 'Fígado Novo · Premium', category: 'detox', tier: 'premium',
    ingredients: [
      { name: 'Siliphos® (silimarina fitossomada)', dose: '400mg' },
      { name: 'Alcachofra (extrato padronizado — cinarina)', dose: '300mg' },
      { name: 'Colina bitartarato', dose: '500mg' },
      { name: 'Ácido alfa-lipóico (R-ALA)', dose: '300mg' },
      { name: 'Fosfolipídeos de soja (fosfatidilcolina)', dose: '600mg' },
      { name: 'PPC (polyenylphosphatidylcholine)', dose: '900mg' },
      { name: 'Picnogenol® (Pinus pinaster)', dose: '100mg' },
      { name: 'SAMe (S-adenosil-metionina)', dose: '400mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. SAMe preferencialmente pela manhã. Monitorar enzimas hepáticas mensalmente.',
  },

  // --- Concept 4: Limpeza Celular — autophagy / cellular cleanup ---
  {
    id: 'detox-4-ess', name: 'Limpeza Celular · Essencial', category: 'detox', tier: 'essencial',
    ingredients: [
      { name: 'Resveratrol (trans-resveratrol)', dose: '200mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Chá verde (EGCG 50%)', dose: '400mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 minutos antes das refeições. Potencializado por jejum intermitente.',
  },
  {
    id: 'detox-4-int', name: 'Limpeza Celular · Intermediário', category: 'detox', tier: 'intermediario',
    ingredients: [
      { name: 'Resveratrol (trans-resveratrol)', dose: '200mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Chá verde (EGCG 50%)', dose: '400mg' },
      { name: 'Espermidina (extrato de gérmen de trigo)', dose: '5mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Sulforafano (extrato de brócolis)', dose: '20mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar antes do almoço e jantar. Ideal associar a protocolo de jejum intermitente 16:8.',
  },
  {
    id: 'detox-4-pre', name: 'Limpeza Celular · Premium', category: 'detox', tier: 'premium',
    ingredients: [
      { name: 'Resveratrol (Veri-te™ trans-resveratrol)', dose: '300mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Chá verde (EGCG 50%)', dose: '400mg' },
      { name: 'Espermidina (extrato de gérmen de trigo)', dose: '5mg' },
      { name: 'Quercetina (Quercefit® fitossomada)', dose: '500mg' },
      { name: 'Sulforafano (TrueBroc®)', dose: '30mg' },
      { name: 'Fisetina', dose: '100mg' },
      { name: 'NMN (nicotinamida mononucleotídeo)', dose: '250mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar antes das refeições. NMN preferencialmente pela manhã. Associar a jejum intermitente para sinergismo.',
  },

  // --- Concept 5: Filtro Natural — renal/lymphatic support ---
  {
    id: 'detox-5-ess', name: 'Filtro Natural · Essencial', category: 'detox', tier: 'essencial',
    ingredients: [
      { name: 'Dente-de-leão (Taraxacum officinale)', dose: '500mg' },
      { name: 'Cavalinha (Equisetum arvense)', dose: '400mg' },
      { name: 'Hibisco (Hibiscus sabdariffa)', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com bastante água (mín. 2L/dia). Evitar uso noturno pelo efeito diurético.',
  },
  {
    id: 'detox-5-int', name: 'Filtro Natural · Intermediário', category: 'detox', tier: 'intermediario',
    ingredients: [
      { name: 'Dente-de-leão (Taraxacum officinale)', dose: '500mg' },
      { name: 'Cavalinha (Equisetum arvense)', dose: '400mg' },
      { name: 'Hibisco (Hibiscus sabdariffa)', dose: '500mg' },
      { name: 'Quebra-pedra (Phyllanthus niruri)', dose: '500mg' },
      { name: 'Potássio quelato', dose: '99mg' },
      { name: 'Magnésio dimalato', dose: '300mg' },
    ],
    posology: '2 cápsulas manhã + 1 cápsula almoço',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água. Repor eletrólitos. Monitorar potássio em caso de uso de diuréticos.',
  },
  {
    id: 'detox-5-pre', name: 'Filtro Natural · Premium', category: 'detox', tier: 'premium',
    ingredients: [
      { name: 'Dente-de-leão (Taraxacum officinale)', dose: '500mg' },
      { name: 'Cavalinha (Equisetum arvense)', dose: '400mg' },
      { name: 'Hibisco (Hibiscus sabdariffa)', dose: '500mg' },
      { name: 'Quebra-pedra (Phyllanthus niruri)', dose: '500mg' },
      { name: 'Potássio quelato', dose: '99mg' },
      { name: 'Magnésio dimalato', dose: '300mg' },
      { name: 'Triphala (extrato padronizado)', dose: '500mg' },
      { name: 'Astragalus membranaceus', dose: '500mg' },
      { name: 'Clorofila cúprica (Chlorophyllin)', dose: '100mg' },
    ],
    posology: '1 sachê manhã + 2 cápsulas almoço',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'Sachê em jejum com 300ml de água. Cápsulas com almoço. Hidratação mínima 2,5L/dia. Evitar tomar à noite.',
  },

  // =============================================
  // ANTIPARASITÁRIO
  // =============================================

  // --- Concept 1: Fortaleza Interior — broad-spectrum herbal antiparasitic ---
  {
    id: 'antiparasitario-1-ess', name: 'Fortaleza Interior · Essencial', category: 'antiparasitario', tier: 'essencial',
    ingredients: [
      { name: 'Artemísia (Artemisia annua)', dose: '500mg' },
      { name: 'Cravo-da-índia (eugenol 85%)', dose: '500mg' },
      { name: 'Semente de abóbora (extrato)', dose: '1.000mg' },
    ],
    posology: '2 cápsulas 2x ao dia',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum ou 30 min antes das refeições. Ciclo de 10 dias on / 5 dias off.',
  },
  {
    id: 'antiparasitario-1-int', name: 'Fortaleza Interior · Intermediário', category: 'antiparasitario', tier: 'intermediario',
    ingredients: [
      { name: 'Artemísia (Artemisia annua)', dose: '500mg' },
      { name: 'Cravo-da-índia (eugenol 85%)', dose: '500mg' },
      { name: 'Semente de abóbora (extrato)', dose: '1.000mg' },
      { name: 'Noz-preta (Juglans nigra)', dose: '500mg' },
      { name: 'Berberina', dose: '500mg' },
    ],
    posology: '2 cápsulas 3x ao dia',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 min antes das refeições. Ciclo de 10 dias on / 5 dias off, repetir 2x. Associar com dieta baixa em açúcar.',
  },
  {
    id: 'antiparasitario-1-pre', name: 'Fortaleza Interior · Premium', category: 'antiparasitario', tier: 'premium',
    ingredients: [
      { name: 'Artemísia (Artemisia annua — extrato padronizado)', dose: '500mg' },
      { name: 'Cravo-da-índia (eugenol 85%)', dose: '500mg' },
      { name: 'Semente de abóbora (extrato)', dose: '1.000mg' },
      { name: 'Noz-preta (Juglans nigra)', dose: '500mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Óleo de orégano (carvacrol 70%)', dose: '200mg' },
      { name: 'Vidanga (Embelia ribes)', dose: '500mg' },
      { name: 'BioPerine® (piperina)', dose: '10mg' },
    ],
    posology: '3 cápsulas 2x ao dia',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum 30 min antes de almoço e jantar. Ciclo de 10 on / 5 off. Usar probiótico após o ciclo.',
  },

  // --- Concept 2: Terra Limpa — biofilm disruption ---
  {
    id: 'antiparasitario-2-ess', name: 'Terra Limpa · Essencial', category: 'antiparasitario', tier: 'essencial',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' },
      { name: 'Enzimas proteolíticas (serrapeptase)', dose: '120.000SPU' },
      { name: 'Bismuto subsalicilato', dose: '262mg' },
    ],
    posology: '1 cápsula 2x ao dia em jejum',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum absoluto (1h antes de comer). Essencial para romper biofilmes antes de antiparasitários.',
  },
  {
    id: 'antiparasitario-2-int', name: 'Terra Limpa · Intermediário', category: 'antiparasitario', tier: 'intermediario',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' },
      { name: 'Enzimas proteolíticas (serrapeptase)', dose: '120.000SPU' },
      { name: 'Bismuto subsalicilato', dose: '262mg' },
      { name: 'Lactoferrina', dose: '250mg' },
      { name: 'EDTA dissódico', dose: '250mg' },
      { name: 'Alantoína', dose: '100mg' },
    ],
    posology: '2 cápsulas 2x ao dia em jejum',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum absoluto 1h antes de comer. Usar por 2 semanas antes de iniciar antiparasitário direto.',
  },
  {
    id: 'antiparasitario-2-pre', name: 'Terra Limpa · Premium', category: 'antiparasitario', tier: 'premium',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' },
      { name: 'Enzimas proteolíticas (serrapeptase)', dose: '120.000SPU' },
      { name: 'Bismuto subsalicilato', dose: '262mg' },
      { name: 'Lactoferrina', dose: '250mg' },
      { name: 'EDTA dissódico', dose: '250mg' },
      { name: 'InterFase Plus® (enzimas líticas)', dose: '500mg' },
      { name: 'Lauricidina (monolaurina)', dose: '600mg' },
      { name: 'Nattokinase', dose: '2.000FU' },
    ],
    posology: '3 cápsulas 2x ao dia em jejum',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum absoluto 1h antes de comer. Fase de disrupção de biofilme — usar 14 dias antes do protocolo antiparasitário.',
  },

  // --- Concept 3: Guardião Digestivo — antimicrobial gut support ---
  {
    id: 'antiparasitario-3-ess', name: 'Guardião Digestivo · Essencial', category: 'antiparasitario', tier: 'essencial',
    ingredients: [
      { name: 'Óleo de orégano (carvacrol 70%)', dose: '200mg' },
      { name: 'Alho (alicina padronizada)', dose: '600mg' },
      { name: 'Berberina', dose: '500mg' },
    ],
    posology: '1 cápsula entérica 2x ao dia',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições para reduzir desconforto gástrico. Cápsula entérica — não abrir.',
  },
  {
    id: 'antiparasitario-3-int', name: 'Guardião Digestivo · Intermediário', category: 'antiparasitario', tier: 'intermediario',
    ingredients: [
      { name: 'Óleo de orégano (carvacrol 70%)', dose: '200mg' },
      { name: 'Alho (alicina padronizada)', dose: '600mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ácido caprílico', dose: '600mg' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
      { name: 'Própolis verde (extrato padronizado)', dose: '300mg' },
    ],
    posology: '2 cápsulas 2x ao dia com refeições',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço e jantar. S. boulardii é resistente a antimicrobianos e pode ser usado concomitantemente.',
  },
  {
    id: 'antiparasitario-3-pre', name: 'Guardião Digestivo · Premium', category: 'antiparasitario', tier: 'premium',
    ingredients: [
      { name: 'Óleo de orégano (carvacrol 70%)', dose: '200mg' },
      { name: 'Alho (Allisure® — alicina estabilizada)', dose: '600mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ácido caprílico', dose: '600mg' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
      { name: 'Própolis verde (extrato padronizado)', dose: '300mg' },
      { name: 'Biotina', dose: '5.000mcg' },
      { name: 'Pau d\'arco (Tabebuia avellanedae — lapachol)', dose: '500mg' },
    ],
    posology: '3 cápsulas 2x ao dia',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Biotina inibe conversão de Candida para forma fúngica. Duração total: 4–6 semanas.',
  },

  // --- Concept 4: Barreira Viva — immune-mediated parasite defense ---
  {
    id: 'antiparasitario-4-ess', name: 'Barreira Viva · Essencial', category: 'antiparasitario', tier: 'essencial',
    ingredients: [
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Lactoferrina', dose: '200mg' },
      { name: 'Vitamina A (retinol palmitato)', dose: '5.000UI' },
    ],
    posology: '1 cápsula ao dia com almoço',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço. Dosar 25(OH)D e retinol antes de iniciar.',
  },
  {
    id: 'antiparasitario-4-int', name: 'Barreira Viva · Intermediário', category: 'antiparasitario', tier: 'intermediario',
    ingredients: [
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Lactoferrina', dose: '250mg' },
      { name: 'Vitamina A (retinol palmitato)', dose: '5.000UI' },
      { name: 'Beta-glucana (1,3/1,6)', dose: '500mg' },
      { name: 'Colostro bovino (IgG 30%)', dose: '1.000mg' },
    ],
    posology: '2 cápsulas ao dia (1 café, 1 almoço)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Beta-glucana em jejum. Demais com almoço. Colostro suporta imunidade de mucosa intestinal.',
  },
  {
    id: 'antiparasitario-4-pre', name: 'Barreira Viva · Premium', category: 'antiparasitario', tier: 'premium',
    ingredients: [
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Lactoferrina', dose: '300mg' },
      { name: 'Vitamina A (retinol palmitato)', dose: '5.000UI' },
      { name: 'Beta-glucana (Wellmune® 1,3/1,6)', dose: '500mg' },
      { name: 'Colostro bovino (IgG 30%)', dose: '1.500mg' },
      { name: 'EpiCor® (fermentado de S. cerevisiae)', dose: '500mg' },
      { name: 'Vitamina K2-MK7 (MenaQ7®)', dose: '100mcg' },
    ],
    posology: '2 cápsulas manhã (jejum) + 2 cápsulas almoço',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Beta-glucana e EpiCor em jejum. Vitaminas e colostro com almoço. Protocolo imunomodulador — não usar em autoimunidade ativa.',
  },

  // --- Concept 5: Varredura Total — antifungal + antiparasitic combo ---
  {
    id: 'antiparasitario-5-ess', name: 'Varredura Total · Essencial', category: 'antiparasitario', tier: 'essencial',
    ingredients: [
      { name: 'Ácido undecilénico', dose: '250mg' },
      { name: 'Pau d\'arco (Tabebuia avellanedae)', dose: '500mg' },
      { name: 'Semente de toranja (extrato padronizado)', dose: '250mg' },
    ],
    posology: '1 cápsula 3x ao dia',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Evitar açúcar e carboidratos refinados durante o protocolo.',
  },
  {
    id: 'antiparasitario-5-int', name: 'Varredura Total · Intermediário', category: 'antiparasitario', tier: 'intermediario',
    ingredients: [
      { name: 'Ácido undecilénico', dose: '250mg' },
      { name: 'Pau d\'arco (Tabebuia avellanedae)', dose: '500mg' },
      { name: 'Semente de toranja (extrato padronizado)', dose: '250mg' },
      { name: 'Artemísia (Artemisia annua)', dose: '300mg' },
      { name: 'Ácido caprílico', dose: '600mg' },
    ],
    posology: '2 cápsulas 3x ao dia',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Rotacionar antifúngicos a cada 2 semanas para evitar resistência. Dieta anti-Candida obrigatória.',
  },
  {
    id: 'antiparasitario-5-pre', name: 'Varredura Total · Premium', category: 'antiparasitario', tier: 'premium',
    ingredients: [
      { name: 'Ácido undecilénico', dose: '250mg' },
      { name: 'Pau d\'arco (Tabebuia avellanedae — lapachol 3%)', dose: '500mg' },
      { name: 'Semente de toranja (extrato padronizado)', dose: '250mg' },
      { name: 'Artemísia (Artemisia annua)', dose: '300mg' },
      { name: 'Ácido caprílico', dose: '600mg' },
      { name: 'Monolaurina (Lauricidin®)', dose: '600mg' },
      { name: 'Biocidin® (blend botânico antimicrobiano)', dose: '3 gotas 2x/dia' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
    ],
    posology: '3 cápsulas 2x ao dia + gotas sublinguais',
    quantity: '180 cápsulas + 1 frasco gotas', duration: '1 mês',
    instructions: 'Cápsulas com refeições. Biocidin sublingual entre refeições. S. boulardii à noite. Iniciar reposição de probióticos após ciclo.',
  },

  // =============================================
  // DESMAME RIVOTRIL (benzodiazepine tapering)
  // =============================================

  // --- Concept 1: Libertação Gradual — GABAergic substitution ---
  {
    id: 'desmame-1-ess', name: 'Libertação Gradual · Essencial', category: 'desmame', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio glicil-glicinato', dose: '400mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'L-Teanina', dose: '200mg' },
    ],
    posology: '1 cápsula 2x ao dia (manhã e noite)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Este suplemento NÃO substitui o medicamento. Manter o desmame conforme orientação médica. Tomar com ou sem alimento.',
  },
  {
    id: 'desmame-1-int', name: 'Libertação Gradual · Intermediário', category: 'desmame', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio glicil-glicinato', dose: '400mg' },
      { name: 'Taurina', dose: '1.500mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Glicina', dose: '2.000mg' },
      { name: 'Inositol (myo-inositol)', dose: '2.000mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
    ],
    posology: '1 sachê à noite + 1 cápsula manhã',
    quantity: '30 sachês + 30 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte nutricional ao desmame — NÃO interromper medicamento sem orientação médica. Sachê à noite 1h antes de dormir.',
  },
  {
    id: 'desmame-1-pre', name: 'Libertação Gradual · Premium', category: 'desmame', tier: 'premium',
    ingredients: [
      { name: 'Magnésio glicil-glicinato', dose: '400mg' },
      { name: 'Taurina', dose: '1.500mg' },
      { name: 'Suntheanine® (L-Teanina pura)', dose: '200mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Inositol (myo-inositol)', dose: '2.000mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'PharmaGABA® (GABA natural fermentado)', dose: '200mg' },
      { name: 'Magnésio treonato (Magtein®)', dose: '144mg' },
    ],
    posology: '1 sachê à noite + 2 cápsulas ao dia (manhã e tarde)',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte nutricional — NÃO substitui orientação médica para desmame. PharmaGABA sublingual para crises de ansiedade aguda.',
  },

  // --- Concept 2: Ponte Tranquila — anxiolytic bridging (non-benzo) ---
  {
    id: 'desmame-2-ess', name: 'Ponte Tranquila · Essencial', category: 'desmame', tier: 'essencial',
    ingredients: [
      { name: 'Passiflora incarnata (extrato padronizado)', dose: '500mg' },
      { name: 'Valeriana (ácido valerênico 0,8%)', dose: '500mg' },
      { name: 'Camomila (apigenina 1,2%)', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia',
    quantity: '60 cápsulas', duration: '2 meses',
    instructions: 'IMPORTANTE: Suporte fitoterápico — NÃO interromper benzodiazepínico sem orientação médica. Tomar com água.',
  },
  {
    id: 'desmame-2-int', name: 'Ponte Tranquila · Intermediário', category: 'desmame', tier: 'intermediario',
    ingredients: [
      { name: 'Passiflora incarnata (extrato padronizado)', dose: '500mg' },
      { name: 'Valeriana (ácido valerênico 0,8%)', dose: '500mg' },
      { name: 'Camomila (apigenina 1,2%)', dose: '500mg' },
      { name: 'Melissa officinalis (Cyracos®)', dose: '600mg' },
      { name: 'Magnésio glicil-glicinato', dose: '200mg' },
    ],
    posology: '2 cápsulas manhã + 2 cápsulas noite',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: NÃO substitui medicamento. Suporte ansiolítico natural durante o desmame. Pode causar sonolência — cuidado ao dirigir.',
  },
  {
    id: 'desmame-2-pre', name: 'Ponte Tranquila · Premium', category: 'desmame', tier: 'premium',
    ingredients: [
      { name: 'Passiflora incarnata (extrato padronizado)', dose: '500mg' },
      { name: 'Valeriana (ácido valerênico 0,8%)', dose: '500mg' },
      { name: 'Camomila (apigenina 1,2%)', dose: '500mg' },
      { name: 'Melissa officinalis (Cyracos®)', dose: '600mg' },
      { name: 'Magnésio glicil-glicinato', dose: '200mg' },
      { name: 'Lactium® (alfa-casozepina)', dose: '150mg' },
      { name: 'Affron® (extrato de açafrão — safranal)', dose: '30mg' },
      { name: 'Apigenina (isolada)', dose: '50mg' },
    ],
    posology: '2 cápsulas manhã + 2 cápsulas noite',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte fitoterápico — manter desmame conforme orientação médica. Lactium e Affron têm evidência clínica em ansiedade leve-moderada.',
  },

  // --- Concept 3: Âncora Neural — neuroplasticity / GABA receptor recovery ---
  {
    id: 'desmame-3-ess', name: 'Âncora Neural · Essencial', category: 'desmame', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio treonato', dose: '144mg' },
      { name: 'Lion\'s Mane (Hericium erinaceus — beta-glucanas)', dose: '1.000mg' },
      { name: 'Ômega-3 (DHA)', dose: '1.000mg' },
    ],
    posology: '2 cápsulas ao dia (manhã e noite)',
    quantity: '60 cápsulas', duration: '2 meses',
    instructions: 'IMPORTANTE: Suporte à neuroplasticidade — NÃO substituir medicamento. DHA com refeição gordurosa. Magnésio treonato à noite.',
  },
  {
    id: 'desmame-3-int', name: 'Âncora Neural · Intermediário', category: 'desmame', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio treonato', dose: '144mg' },
      { name: 'Lion\'s Mane (Hericium erinaceus — beta-glucanas)', dose: '1.000mg' },
      { name: 'Ômega-3 (DHA)', dose: '1.000mg' },
      { name: 'Fosfatidilserina', dose: '300mg' },
      { name: 'Uridina monofosfato', dose: '250mg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
    ],
    posology: '2 cápsulas manhã + 2 cápsulas noite',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'IMPORTANTE: Suporte à recuperação neuronal — manter desmame conforme prescrição médica. DHA e fosfatidilserina com almoço.',
  },
  {
    id: 'desmame-3-pre', name: 'Âncora Neural · Premium', category: 'desmame', tier: 'premium',
    ingredients: [
      { name: 'Magnésio treonato (Magtein®)', dose: '144mg' },
      { name: 'Lion\'s Mane (Hericium erinaceus — extrato dual)', dose: '1.000mg' },
      { name: 'Ômega-3 (DHA — óleo ultrapurificado IFOS)', dose: '1.000mg' },
      { name: 'Fosfatidilserina (Sharp PS®)', dose: '300mg' },
      { name: 'Uridina monofosfato', dose: '250mg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
      { name: 'Citicolina (Cognizin®)', dose: '500mg' },
      { name: 'BDNF Coffee Fruit Extract (NeuroFactor®)', dose: '100mg' },
    ],
    posology: '2 cápsulas manhã + 1 sachê almoço + 1 cápsula noite',
    quantity: '90 cápsulas + 30 sachês', duration: '2 meses',
    instructions: 'IMPORTANTE: Protocolo de neuroplasticidade — NÃO interromper medicamento sem orientação médica. Citicolina e NeuroFactor pela manhã. DHA com almoço.',
  },

  // --- Concept 4: Noite sem Medo — insomnia during tapering ---
  {
    id: 'desmame-4-ess', name: 'Noite sem Medo · Essencial', category: 'desmame', tier: 'essencial',
    ingredients: [
      { name: 'Melatonina', dose: '0,5mg' },
      { name: 'Magnésio glicil-glicinato', dose: '400mg' },
      { name: 'Glicina', dose: '3.000mg' },
    ],
    posology: '1 sachê 30 min antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'IMPORTANTE: NÃO substitui medicamento para dormir. Suporte ao sono durante desmame. Diluir em 100ml de água morna.',
  },
  {
    id: 'desmame-4-int', name: 'Noite sem Medo · Intermediário', category: 'desmame', tier: 'intermediario',
    ingredients: [
      { name: 'Melatonina', dose: '1mg' },
      { name: 'Magnésio glicil-glicinato', dose: '400mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Valeriana (ácido valerênico 0,8%)', dose: '300mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '25mg' },
    ],
    posology: '1 sachê + 1 cápsula 30–60 min antes de dormir',
    quantity: '30 sachês + 30 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte ao sono — manter orientação médica sobre o desmame. Triptofano longe de refeições proteicas. Desligar telas 1h antes.',
  },
  {
    id: 'desmame-4-pre', name: 'Noite sem Medo · Premium', category: 'desmame', tier: 'premium',
    ingredients: [
      { name: 'Melatonina micronizada de liberação prolongada', dose: '1mg' },
      { name: 'Magnésio glicil-glicinato', dose: '400mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Valeriana (ácido valerênico 0,8%)', dose: '300mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '25mg' },
      { name: 'Lactium® (alfa-casozepina)', dose: '150mg' },
      { name: 'Zembrin® (Sceletium tortuosum)', dose: '25mg' },
    ],
    posology: '1 sachê + 2 cápsulas 30–60 min antes de dormir',
    quantity: '30 sachês + 60 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte ao sono durante desmame — NÃO substitui orientação médica. Lactium atua em receptor GABA-A de forma suave. Ambiente escuro e fresco.',
  },

  // --- Concept 5: Resiliência Calm — stress resilience during withdrawal ---
  {
    id: 'desmame-5-ess', name: 'Resiliência Calm · Essencial', category: 'desmame', tier: 'essencial',
    ingredients: [
      { name: 'Ashwagandha (Withania somnifera — 5% witanolídeos)', dose: '600mg' },
      { name: 'Rhodiola rosea (3% rosavinas)', dose: '400mg' },
      { name: 'Vitamina C', dose: '500mg' },
    ],
    posology: '1 cápsula 2x ao dia (manhã e tarde)',
    quantity: '60 cápsulas', duration: '2 meses',
    instructions: 'IMPORTANTE: Adaptógenos para suporte ao estresse — NÃO interromper medicamento. Tomar pela manhã e início da tarde (antes das 15h).',
  },
  {
    id: 'desmame-5-int', name: 'Resiliência Calm · Intermediário', category: 'desmame', tier: 'intermediario',
    ingredients: [
      { name: 'Ashwagandha (Withania somnifera — 5% witanolídeos)', dose: '600mg' },
      { name: 'Rhodiola rosea (3% rosavinas)', dose: '400mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Fosfatidilserina', dose: '200mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Complexo B (ativo — metilado)', dose: '1 cápsula' },
    ],
    posology: '2 cápsulas manhã + 1 cápsula à tarde',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte adaptogênico durante desmame. NÃO substituir medicamento. Tomar até as 15h para não interferir no sono.',
  },
  {
    id: 'desmame-5-pre', name: 'Resiliência Calm · Premium', category: 'desmame', tier: 'premium',
    ingredients: [
      { name: 'KSM-66® Ashwagandha (extrato raiz — 5% witanolídeos)', dose: '600mg' },
      { name: 'Rhodiola rosea (3% rosavinas, 1% salidrosídeo)', dose: '400mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Fosfatidilserina (Sharp PS®)', dose: '200mg' },
      { name: 'Suntheanine® (L-Teanina)', dose: '200mg' },
      { name: 'Complexo B (ativo — metilado)', dose: '1 cápsula' },
      { name: 'Affron® (açafrão — safranal 3,5%)', dose: '30mg' },
      { name: 'Holy Basil (Ocimum sanctum — extrato padronizado)', dose: '500mg' },
    ],
    posology: '2 cápsulas manhã + 2 cápsulas tarde (antes das 15h)',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'IMPORTANTE: Suporte adaptogênico e ansiolítico natural — manter desmame conforme prescrição médica. Affron tem evidência para humor e ansiedade.',
  },

  // =============================================
  // LIBIDO
  // =============================================

  // --- Concept 1: Fogo Sagrado — testosterone / androgen support ---
  {
    id: 'libido-1-ess', name: 'Fogo Sagrado · Essencial', category: 'libido', tier: 'essencial',
    ingredients: [
      { name: 'Tribulus terrestris (40% saponinas)', dose: '750mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
    ],
    posology: '1 cápsula ao dia com almoço',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço. Dosar testosterona total e livre, SHBG e 25(OH)D antes de iniciar.',
  },
  {
    id: 'libido-1-int', name: 'Fogo Sagrado · Intermediário', category: 'libido', tier: 'intermediario',
    ingredients: [
      { name: 'Tribulus terrestris (40% saponinas)', dose: '750mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Ashwagandha (5% witanolídeos)', dose: '600mg' },
      { name: 'Boro (glicinato)', dose: '6mg' },
      { name: 'Magnésio dimalato', dose: '400mg' },
    ],
    posology: '2 cápsulas ao dia com almoço',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço. Ashwagandha pode reduzir cortisol e favorecer eixo androgênico. Reavaliar em 60 dias.',
  },
  {
    id: 'libido-1-pre', name: 'Fogo Sagrado · Premium', category: 'libido', tier: 'premium',
    ingredients: [
      { name: 'Tribulus terrestris (40% saponinas)', dose: '750mg' },
      { name: 'Zinco quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'KSM-66® Ashwagandha', dose: '600mg' },
      { name: 'Boro (glicinato)', dose: '6mg' },
      { name: 'Magnésio dimalato', dose: '400mg' },
      { name: 'Testofen® (feno-grego — 50% fenusídeos)', dose: '600mg' },
      { name: 'Vitamina K2-MK7 (MenaQ7®)', dose: '100mcg' },
      { name: 'Shilajit (ácido fúlvico padronizado)', dose: '200mg' },
    ],
    posology: '3 cápsulas ao dia com almoço',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço. Testofen e KSM-66 têm estudos clínicos para testosterona e libido masculina. Monitorar PSA e hormônios.',
  },

  // --- Concept 2: Chama Íntima — nitric oxide / vascular (erectile function) ---
  {
    id: 'libido-2-ess', name: 'Chama Íntima · Essencial', category: 'libido', tier: 'essencial',
    ingredients: [
      { name: 'L-Citrulina', dose: '3.000mg' },
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'Picnogenol (Pinus pinaster)', dose: '80mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 200ml de água. Tomar em jejum ou 1h antes da atividade sexual. Efeitos notados após 2-4 semanas.',
  },
  {
    id: 'libido-2-int', name: 'Chama Íntima · Intermediário', category: 'libido', tier: 'intermediario',
    ingredients: [
      { name: 'L-Citrulina', dose: '3.000mg' },
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'Picnogenol (Pinus pinaster)', dose: '100mg' },
      { name: 'Extrato de beterraba (nitratos 2%)', dose: '500mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Trans-resveratrol', dose: '150mg' },
    ],
    posology: '1 sachê ao dia em jejum',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 250ml de água e tomar em jejum. Para uso pré-atividade: tomar 1-2h antes. Sinergia citrulina + picnogenol (estudo Stanislavov).',
  },
  {
    id: 'libido-2-pre', name: 'Chama Íntima · Premium', category: 'libido', tier: 'premium',
    ingredients: [
      { name: 'L-Citrulina', dose: '3.000mg' },
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'Picnogenol® (Pinus pinaster)', dose: '120mg' },
      { name: 'Extrato de beterraba (nitratos 2%)', dose: '500mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Trans-resveratrol (Veri-te™)', dose: '200mg' },
      { name: 'S7® (blend de 7 extratos vasodilatadores)', dose: '50mg' },
      { name: 'Coenzima Q10 (Kaneka Ubiquinol™)', dose: '100mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em 250ml de água fria. Uso diário ou 1-2h antes da atividade. Protocolo Stanislavov (citrulina + picnogenol) — evidência clínica para função erétil.',
  },

  // --- Concept 3: Desejo Aceso — dopaminergic / desire pathway ---
  {
    id: 'libido-3-ess', name: 'Desejo Aceso · Essencial', category: 'libido', tier: 'essencial',
    ingredients: [
      { name: 'Mucuna pruriens (L-DOPA 15%)', dose: '400mg' },
      { name: 'Tirosina', dose: '500mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
    ],
    posology: '1 cápsula ao dia pela manhã em jejum',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum pela manhã. Evitar uso com antidepressivos IMAO. Avaliar prolactina e dopamina.',
  },
  {
    id: 'libido-3-int', name: 'Desejo Aceso · Intermediário', category: 'libido', tier: 'intermediario',
    ingredients: [
      { name: 'Mucuna pruriens (L-DOPA 15%)', dose: '400mg' },
      { name: 'Tirosina', dose: '500mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Maca peruana (extrato 10:1)', dose: '1.500mg' },
      { name: 'Ferro bisglicinato', dose: '14mg' },
      { name: 'Fenilalanina (DL-fenilalanina)', dose: '500mg' },
    ],
    posology: '2 cápsulas manhã em jejum',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum. Maca e mucuna têm sinergia para desejo e humor. Evitar cafeína em excesso para não esgotar dopamina.',
  },
  {
    id: 'libido-3-pre', name: 'Desejo Aceso · Premium', category: 'libido', tier: 'premium',
    ingredients: [
      { name: 'Mucuna pruriens (L-DOPA 15%)', dose: '400mg' },
      { name: 'Tirosina', dose: '500mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Maca peruana (MacaPure® extrato padronizado)', dose: '1.500mg' },
      { name: 'Ferro bisglicinato', dose: '14mg' },
      { name: 'DL-Fenilalanina', dose: '500mg' },
      { name: 'Catuaba (Trichilia catigua — extrato padronizado)', dose: '300mg' },
      { name: 'Vitamina B9 (metilfolato — Quatrefolic®)', dose: '400mcg' },
    ],
    posology: '2 cápsulas manhã + 1 cápsula tarde',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum pela manhã e meio da tarde. Catuaba e mucuna: sinergia dopaminérgica. Contraindicado com IMAO e SSRIs sem orientação.',
  },

  // --- Concept 4: Vitalidade Sexual — adrenal / DHEA support ---
  {
    id: 'libido-4-ess', name: 'Vitalidade Sexual · Essencial', category: 'libido', tier: 'essencial',
    ingredients: [
      { name: 'DHEA (deidroepiandrosterona)', dose: '25mg' },
      { name: 'Vitamina B5 (ácido pantotênico)', dose: '500mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
    ],
    posology: '1 cápsula ao dia pela manhã',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã com café da manhã. OBRIGATÓRIO dosar DHEA-S, cortisol e testosterona antes de iniciar.',
  },
  {
    id: 'libido-4-int', name: 'Vitalidade Sexual · Intermediário', category: 'libido', tier: 'intermediario',
    ingredients: [
      { name: 'DHEA (deidroepiandrosterona)', dose: '25mg' },
      { name: 'Vitamina B5 (ácido pantotênico)', dose: '500mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Ashwagandha (5% witanolídeos)', dose: '300mg' },
      { name: 'Pregnenolona', dose: '10mg' },
      { name: 'Rhodiola rosea (3% rosavinas)', dose: '200mg' },
    ],
    posology: '2 cápsulas pela manhã com café',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã. Hormônios precursores (DHEA e pregnenolona) necessitam monitoramento laboratorial. Dosar a cada 60 dias.',
  },
  {
    id: 'libido-4-pre', name: 'Vitalidade Sexual · Premium', category: 'libido', tier: 'premium',
    ingredients: [
      { name: 'DHEA micronizada', dose: '25mg' },
      { name: 'Vitamina B5 (ácido pantotênico)', dose: '500mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'KSM-66® Ashwagandha', dose: '300mg' },
      { name: 'Pregnenolona', dose: '15mg' },
      { name: 'Rhodiola rosea (3% rosavinas)', dose: '200mg' },
      { name: 'Cordyceps sinensis (extrato 40% polissacarídeos)', dose: '1.000mg' },
      { name: 'Ginseng vermelho coreano (8% ginsenosídeos)', dose: '500mg' },
    ],
    posology: '3 cápsulas pela manhã com café',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar pela manhã com café da manhã. Monitorar DHEA-S, cortisol, testosterona e estradiol. Cordyceps e ginseng para vitalidade adrenal.',
  },

  // --- Concept 5: Paixão Renovada — hormonal balance / estrogen metabolism (female) ---
  {
    id: 'libido-5-ess', name: 'Paixão Renovada · Essencial', category: 'libido', tier: 'essencial',
    ingredients: [
      { name: 'Maca peruana (extrato 10:1)', dose: '1.500mg' },
      { name: 'Vitex agnus-castus (0,5% agnusídeos)', dose: '40mg' },
      { name: 'Ferro bisglicinato', dose: '14mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
    ],
    posology: '1 cápsula ao dia pela manhã',
    quantity: '30 cápsulas', duration: '2 meses',
    instructions: 'Tomar pela manhã. Vitex atua no eixo hipotálamo-hipófise. Indicado para mulheres com irregularidade hormonal e libido reduzida.',
  },
  {
    id: 'libido-5-int', name: 'Paixão Renovada · Intermediário', category: 'libido', tier: 'intermediario',
    ingredients: [
      { name: 'Maca peruana (extrato 10:1)', dose: '1.500mg' },
      { name: 'Vitex agnus-castus (0,5% agnusídeos)', dose: '40mg' },
      { name: 'Ferro bisglicinato', dose: '14mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'DIM (diindolilmetano)', dose: '100mg' },
      { name: 'Tribulus terrestris (40% saponinas)', dose: '500mg' },
    ],
    posology: '2 cápsulas ao dia (1 manhã, 1 noite)',
    quantity: '60 cápsulas', duration: '2 meses',
    instructions: 'Tomar com refeições. DIM favorece metabolismo estrogênico saudável (via 2-OH). Ideal associar com crucíferas na dieta.',
  },
  {
    id: 'libido-5-pre', name: 'Paixão Renovada · Premium', category: 'libido', tier: 'premium',
    ingredients: [
      { name: 'Maca peruana (MacaPure® extrato padronizado)', dose: '1.500mg' },
      { name: 'Vitex agnus-castus (0,5% agnusídeos)', dose: '40mg' },
      { name: 'Ferro bisglicinato', dose: '14mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'DIM (diindolilmetano)', dose: '100mg' },
      { name: 'Tribulus terrestris (40% saponinas)', dose: '500mg' },
      { name: 'Shatavari (Asparagus racemosus — extrato 10:1)', dose: '500mg' },
      { name: 'Affron® (açafrão — safranal 3,5%)', dose: '30mg' },
    ],
    posology: '2 cápsulas manhã + 1 cápsula noite',
    quantity: '90 cápsulas', duration: '2 meses',
    instructions: 'Tomar com refeições. Shatavari é adaptógeno feminino tradicional. Affron melhora humor e desejo (estudo Kashani). Monitorar estradiol e progesterona.',
  },
];
