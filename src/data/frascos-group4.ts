import type { Frasco } from '../types';

export const FRASCOS_GROUP4: Frasco[] = [
  // =============================================
  // FERTILIDADE FEMININA — category: 'fertilidade'
  // =============================================

  // 1. Florescer Feminino — ovarian function / follicular quality
  {
    id: 'fert-fem-1-ess', name: 'Florescer Feminino · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Myo-Inositol', dose: '2.000mg' },
      { name: 'Ácido Fólico (Metilfolato)', dose: '800mcg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '1 sachê ao dia com café da manhã',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar junto com a primeira refeição do dia.',
  },
  {
    id: 'fert-fem-1-int', name: 'Florescer Feminino · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Myo-Inositol', dose: '2.000mg' },
      { name: 'D-Chiro-Inositol', dose: '50mg' },
      { name: 'Metilfolato (5-MTHF)', dose: '1.000mcg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Selênio (Selenometionina)', dose: '200mcg' },
      { name: 'Zinco Quelato', dose: '15mg' },
    ],
    posology: '1 sachê ao dia com café da manhã',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar junto com a primeira refeição do dia.',
  },
  {
    id: 'fert-fem-1-pre', name: 'Florescer Feminino · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Myo-Inositol', dose: '2.000mg' },
      { name: 'D-Chiro-Inositol', dose: '50mg' },
      { name: 'Quatrefolic® (5-MTHF)', dose: '1.000mcg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Selênio (SeLECT® Selenometionina)', dose: '200mcg' },
      { name: 'Zinco Albion® Bisglicinato', dose: '20mg' },
      { name: 'AstaReal® Astaxantina', dose: '12mg' },
      { name: 'Vitamina E (Tocotrienóis)', dose: '100mg' },
    ],
    posology: '1 sachê ao dia com café da manhã',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar junto com a primeira refeição do dia para melhor absorção dos carotenoides.',
  },

  // 2. Lua Fértil — hormonal cycle regulation
  {
    id: 'fert-fem-2-ess', name: 'Lua Fértil · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Vitex agnus-castus (Agnocasto)', dose: '40mg' },
      { name: 'Vitamina B6 (Piridoxina)', dose: '50mg' },
      { name: 'Magnésio Quelato', dose: '200mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-fem-2-int', name: 'Lua Fértil · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Vitex agnus-castus (Agnocasto)', dose: '40mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Magnésio Bisglicinato', dose: '300mg' },
      { name: 'Ferro Bisglicinato', dose: '14mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '100mg' },
      { name: 'Vitamina C', dose: '500mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-fem-2-pre', name: 'Lua Fértil · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Vitex agnus-castus (Agnocasto)', dose: '40mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Magnésio Albion® Bisglicinato', dose: '350mg' },
      { name: 'Ferro Ferrochel® Bisglicinato', dose: '14mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '100mg' },
      { name: 'Vitamina C (Ester-C®)', dose: '500mg' },
      { name: 'Shatavari (Asparagus racemosus)', dose: '500mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, sempre com alimento.',
  },

  // 3. Ninho Materno — endometrial receptivity / implantation
  {
    id: 'fert-fem-3-ess', name: 'Ninho Materno · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'L-Arginina', dose: '1.000mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '400UI' },
      { name: 'Ácido Fólico', dose: '800mcg' },
      { name: 'Ferro Quelato', dose: '27mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar no almoço junto com a refeição.',
  },
  {
    id: 'fert-fem-3-int', name: 'Ninho Materno · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'L-Arginina', dose: '1.500mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '400UI' },
      { name: 'Metilfolato (5-MTHF)', dose: '1.000mcg' },
      { name: 'Ferro Bisglicinato', dose: '27mg' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '1.000mg' },
      { name: 'Vitamina B12 (Metilcobalamina)', dose: '500mcg' },
    ],
    posology: '1 sachê + 1 cápsula de ômega-3 ao dia',
    quantity: '60 sachês + 60 cápsulas', duration: '2 meses',
    instructions: 'Tomar o sachê diluído em água e a cápsula de ômega-3 no almoço, com a refeição.',
  },
  {
    id: 'fert-fem-3-pre', name: 'Ninho Materno · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'L-Arginina', dose: '2.000mg' },
      { name: 'Vitamina E (Tocotrienóis + Tocoferóis)', dose: '400UI' },
      { name: 'Quatrefolic® (5-MTHF)', dose: '1.000mcg' },
      { name: 'Ferro Ferrochel® Bisglicinato', dose: '27mg' },
      { name: 'Ômega-3 (EPA/DHA ultra-concentrado)', dose: '1.500mg' },
      { name: 'Vitamina B12 (Metilcobalamina)', dose: '1.000mcg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Picnogenol® (Pinus pinaster)', dose: '100mg' },
    ],
    posology: '1 sachê + 2 cápsulas de ômega-3 ao dia',
    quantity: '60 sachês + 120 cápsulas', duration: '2 meses',
    instructions: 'Tomar o sachê diluído em água e as cápsulas de ômega-3 no almoço, com a refeição principal.',
  },

  // 4. Essência Feminina — egg quality / mitochondrial support
  {
    id: 'fert-fem-4-ess', name: 'Essência Feminina · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Coenzima Q10 (Ubiquinona)', dose: '200mg' },
      { name: 'Ácido Alfa-Lipóico', dose: '200mg' },
      { name: 'Acetil-L-Carnitina', dose: '500mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar as 2 cápsulas no café da manhã com alimento rico em gordura para melhor absorção.',
  },
  {
    id: 'fert-fem-4-int', name: 'Essência Feminina · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Coenzima Q10 (Ubiquinol)', dose: '300mg' },
      { name: 'Ácido Alfa-Lipóico', dose: '300mg' },
      { name: 'Acetil-L-Carnitina', dose: '1.000mg' },
      { name: 'Resveratrol (Trans-resveratrol)', dose: '100mg' },
      { name: 'PQQ (Pirroloquinolina Quinona)', dose: '10mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 2 cápsulas no café da manhã e 1 no almoço, sempre com alimento.',
  },
  {
    id: 'fert-fem-4-pre', name: 'Essência Feminina · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Ubiquinol Kaneka® (CoQ10 reduzida)', dose: '400mg' },
      { name: 'Ácido R-Alfa-Lipóico', dose: '300mg' },
      { name: 'Acetil-L-Carnitina', dose: '1.000mg' },
      { name: 'Trans-Resveratrol (Veri-te®)', dose: '150mg' },
      { name: 'PQQ (Pirroloquinolina Quinona)', dose: '20mg' },
      { name: 'NADH (Coenzima 1)', dose: '10mg' },
      { name: 'AstaReal® Astaxantina', dose: '12mg' },
      { name: 'Setria® Glutationa Reduzida', dose: '250mg' },
    ],
    posology: '4 cápsulas ao dia',
    quantity: '240 cápsulas', duration: '2 meses',
    instructions: 'Tomar 2 cápsulas no café da manhã e 2 no almoço, com refeições contendo gordura boa.',
  },

  // 5. Harmonia Hormonal — estrogen/progesterone balance
  {
    id: 'fert-fem-5-ess', name: 'Harmonia Hormonal · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'DIM (Diindolilmetano)', dose: '100mg' },
      { name: 'Cálcio-D-Glucarato', dose: '500mg' },
      { name: 'Vitamina B6 (Piridoxina)', dose: '50mg' },
      { name: 'Zinco Quelato', dose: '15mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-fem-5-int', name: 'Harmonia Hormonal · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'DIM (Diindolilmetano)', dose: '150mg' },
      { name: 'Cálcio-D-Glucarato', dose: '500mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Zinco Bisglicinato', dose: '20mg' },
      { name: 'Brócolis Concentrado (Sulforafano)', dose: '30mg' },
      { name: 'Boro (Borato de Sódio)', dose: '3mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-fem-5-pre', name: 'Harmonia Hormonal · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'DIM (Diindolilmetano)', dose: '200mg' },
      { name: 'Cálcio-D-Glucarato', dose: '750mg' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Zinco Albion® Bisglicinato', dose: '25mg' },
      { name: 'Sulforafano (BroccoMax®)', dose: '30mg' },
      { name: 'Boro (FruiteX-B® OsteoBoron)', dose: '6mg' },
      { name: 'Indol-3-Carbinol (I3C)', dose: '200mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
      { name: 'Vitamina E (Tocotrienóis)', dose: '100mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com refeição.',
  },

  // =============================================
  // FERTILIDADE MASCULINA — category: 'fertilidade'
  // =============================================

  // 1. Semente Vital — sperm count / motility
  {
    id: 'fert-masc-1-ess', name: 'Semente Vital · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Zinco Quelato', dose: '30mg' },
      { name: 'Ácido Fólico', dose: '800mcg' },
      { name: 'Selênio (Selenometionina)', dose: '200mcg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-masc-1-int', name: 'Semente Vital · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Metilfolato (5-MTHF)', dose: '1.000mcg' },
      { name: 'Selênio (Selenometionina)', dose: '200mcg' },
      { name: 'L-Carnitina', dose: '1.000mg' },
      { name: 'Coenzima Q10 (Ubiquinona)', dose: '200mg' },
      { name: 'Vitamina B12 (Metilcobalamina)', dose: '1.000mcg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar no almoço com a refeição.',
  },
  {
    id: 'fert-masc-1-pre', name: 'Semente Vital · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Zinco TRAACS® Bisglicinato', dose: '30mg' },
      { name: 'Quatrefolic® (5-MTHF)', dose: '1.000mcg' },
      { name: 'Selênio (SeLECT® Selenometionina)', dose: '200mcg' },
      { name: 'Carnipure® L-Carnitina Tartarato', dose: '1.500mg' },
      { name: 'Ubiquinol Kaneka® (CoQ10 reduzida)', dose: '300mg' },
      { name: 'Vitamina B12 (Metilcobalamina)', dose: '1.000mcg' },
      { name: 'AstaReal® Astaxantina', dose: '16mg' },
      { name: 'Licopeno (LycoRed®)', dose: '15mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar no almoço com a refeição principal para absorção dos carotenoides.',
  },

  // 2. Guerreiro Fértil — testosterone / spermatogenesis
  {
    id: 'fert-masc-2-ess', name: 'Guerreiro Fértil · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Ashwagandha (Withania somnifera)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Magnésio Quelato', dose: '400mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-masc-2-int', name: 'Guerreiro Fértil · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Ácido D-Aspártico', dose: '2.660mg' },
      { name: 'Boro (Borato de Sódio)', dose: '6mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água. Tomar pela manhã com café da manhã.',
  },
  {
    id: 'fert-masc-2-pre', name: 'Guerreiro Fértil · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Magnésio Albion® Bisglicinato', dose: '400mg' },
      { name: 'Ácido D-Aspártico', dose: '2.660mg' },
      { name: 'Boro (FruiteX-B® OsteoBoron)', dose: '6mg' },
      { name: 'Vitamina K2 (MenaQ7®)', dose: '100mcg' },
      { name: 'Shilajit (PrimaVie®)', dose: '250mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água. Tomar pela manhã com café da manhã.',
  },

  // 3. DNA Protegido — sperm DNA fragmentation protection
  {
    id: 'fert-masc-3-ess', name: 'DNA Protegido · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '400UI' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-masc-3-int', name: 'DNA Protegido · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '400UI' },
      { name: 'N-Acetilcisteína (NAC)', dose: '1.200mg' },
      { name: 'Ácido Alfa-Lipóico', dose: '300mg' },
      { name: 'Licopeno', dose: '10mg' },
      { name: 'Resveratrol (Trans-resveratrol)', dose: '100mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar com a refeição do almoço.',
  },
  {
    id: 'fert-masc-3-pre', name: 'DNA Protegido · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Vitamina C (Ester-C®)', dose: '1.000mg' },
      { name: 'Vitamina E (Tocotrienóis + Tocoferóis)', dose: '400UI' },
      { name: 'N-Acetilcisteína (NAC)', dose: '1.200mg' },
      { name: 'Ácido R-Alfa-Lipóico', dose: '300mg' },
      { name: 'Licopeno (LycoRed®)', dose: '15mg' },
      { name: 'Trans-Resveratrol (Veri-te®)', dose: '150mg' },
      { name: 'Setria® Glutationa Reduzida', dose: '500mg' },
      { name: 'SOD (Extramel® Superóxido Dismutase)', dose: '10mg' },
    ],
    posology: '1 sachê + 2 cápsulas ao dia',
    quantity: '60 sachês + 120 cápsulas', duration: '2 meses',
    instructions: 'Diluir o sachê em 200ml de água. Tomar sachê e cápsulas com a refeição do almoço.',
  },

  // 4. Potência Reprodutiva — seminal fluid / prostate support
  {
    id: 'fert-masc-4-ess', name: 'Potência Reprodutiva · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Saw Palmetto (Serenoa repens)', dose: '320mg' },
      { name: 'Licopeno', dose: '10mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '200UI' },
      { name: 'Zinco Quelato', dose: '25mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-masc-4-int', name: 'Potência Reprodutiva · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Saw Palmetto (Serenoa repens)', dose: '320mg' },
      { name: 'Licopeno', dose: '15mg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '400UI' },
      { name: 'Zinco Bisglicinato', dose: '25mg' },
      { name: 'Pygeum africanum', dose: '100mg' },
      { name: 'Urtiga (Urtica dioica, raiz)', dose: '300mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento.',
  },
  {
    id: 'fert-masc-4-pre', name: 'Potência Reprodutiva · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Saw Palmetto (Serenoa repens)', dose: '320mg' },
      { name: 'Licopeno (LycoRed®)', dose: '20mg' },
      { name: 'Vitamina E (Tocotrienóis)', dose: '400UI' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '25mg' },
      { name: 'Pygeum africanum', dose: '100mg' },
      { name: 'Urtiga (Urtica dioica, raiz)', dose: '300mg' },
      { name: 'Quercetina (Quercefit® Fitossoma)', dose: '500mg' },
      { name: 'Selênio (SeLECT® Selenometionina)', dose: '100mcg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com alimento.',
  },

  // 5. Vigor Masculino — oxidative stress in male reproduction
  {
    id: 'fert-masc-5-ess', name: 'Vigor Masculino · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'L-Carnitina', dose: '1.000mg' },
      { name: 'Coenzima Q10 (Ubiquinona)', dose: '100mg' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '1.000mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar as 2 cápsulas no almoço com refeição contendo gordura.',
  },
  {
    id: 'fert-masc-5-int', name: 'Vigor Masculino · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Acetil-L-Carnitina', dose: '1.500mg' },
      { name: 'Coenzima Q10 (Ubiquinol)', dose: '200mg' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '1.500mg' },
      { name: 'Astaxantina', dose: '8mg' },
      { name: 'Curcumina', dose: '500mg' },
    ],
    posology: '1 sachê + 2 cápsulas de ômega-3 ao dia',
    quantity: '60 sachês + 120 cápsulas', duration: '2 meses',
    instructions: 'Diluir o sachê em 200ml de água e tomar com as cápsulas no almoço.',
  },
  {
    id: 'fert-masc-5-pre', name: 'Vigor Masculino · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Carnipure® Acetil-L-Carnitina', dose: '2.000mg' },
      { name: 'Ubiquinol Kaneka® (CoQ10 reduzida)', dose: '300mg' },
      { name: 'Ômega-3 (EPA/DHA ultra-concentrado)', dose: '2.000mg' },
      { name: 'AstaReal® Astaxantina', dose: '12mg' },
      { name: 'Curcumina (Meriva® Fitossoma)', dose: '500mg' },
      { name: 'Setria® Glutationa Reduzida', dose: '500mg' },
      { name: 'PQQ (Pirroloquinolina Quinona)', dose: '20mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '1 sachê + 2 cápsulas de ômega-3 ao dia',
    quantity: '60 sachês + 120 cápsulas', duration: '2 meses',
    instructions: 'Diluir o sachê em 200ml de água e tomar com as cápsulas de ômega-3 no almoço, com refeição rica em gordura.',
  },

  // =============================================
  // MÚSCULO — category: 'musculo'
  // =============================================

  // 1. Titã Interior — muscle protein synthesis / mTOR
  {
    id: 'musculo-1-ess', name: 'Titã Interior · Essencial', category: 'musculo', tier: 'essencial',
    ingredients: [
      { name: 'HMB (β-Hidroxi β-Metilbutirato)', dose: '3.000mg' },
      { name: 'Leucina', dose: '3.000mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 300ml de água. Tomar imediatamente após o treino ou pela manhã nos dias de descanso.',
  },
  {
    id: 'musculo-1-int', name: 'Titã Interior · Intermediário', category: 'musculo', tier: 'intermediario',
    ingredients: [
      { name: 'HMB (β-Hidroxi β-Metilbutirato)', dose: '3.000mg' },
      { name: 'Leucina', dose: '5.000mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Ácido Fosfatídico', dose: '750mg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 300ml de água. Tomar imediatamente após o treino. Nos dias de descanso, tomar no café da manhã.',
  },
  {
    id: 'musculo-1-pre', name: 'Titã Interior · Premium', category: 'musculo', tier: 'premium',
    ingredients: [
      { name: 'myHMB® (β-Hidroxi β-Metilbutirato)', dose: '3.000mg' },
      { name: 'Leucina (Ajinomoto®)', dose: '5.000mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Ácido Fosfatídico (Mediator®)', dose: '750mg' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '30mg' },
      { name: 'Magnésio Albion® Bisglicinato', dose: '400mg' },
      { name: 'AstraGin® (Astragalus + Panax notoginseng)', dose: '50mg' },
      { name: 'Vitamina K2 (MenaQ7®)', dose: '100mcg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 300ml de água. Tomar imediatamente após o treino para maximizar a síntese proteica.',
  },

  // 2. Força Máxima — strength / creatine pathway
  {
    id: 'musculo-2-ess', name: 'Força Máxima · Essencial', category: 'musculo', tier: 'essencial',
    ingredients: [
      { name: 'Creatina Monohidratada', dose: '5.000mg' },
      { name: 'Beta-Alanina', dose: '3.200mg' },
      { name: 'Taurina', dose: '1.000mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 300ml de água. Tomar 30 minutos antes do treino. Nos dias de descanso, tomar pela manhã.',
  },
  {
    id: 'musculo-2-int', name: 'Força Máxima · Intermediário', category: 'musculo', tier: 'intermediario',
    ingredients: [
      { name: 'Creatina Monohidratada', dose: '5.000mg' },
      { name: 'Beta-Alanina', dose: '3.200mg' },
      { name: 'Taurina', dose: '2.000mg' },
      { name: 'Betaína (Trimetilglicina)', dose: '2.500mg' },
      { name: 'L-Citrulina Malato', dose: '3.000mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 400ml de água. Tomar 30 minutos antes do treino. Nos dias de descanso, tomar pela manhã com café da manhã.',
  },
  {
    id: 'musculo-2-pre', name: 'Força Máxima · Premium', category: 'musculo', tier: 'premium',
    ingredients: [
      { name: 'Creapure® (Creatina Monohidratada)', dose: '5.000mg' },
      { name: 'CarnoSyn® Beta-Alanina', dose: '3.200mg' },
      { name: 'Taurina', dose: '2.000mg' },
      { name: 'Betaína (Trimetilglicina)', dose: '2.500mg' },
      { name: 'L-Citrulina Malato', dose: '6.000mg' },
      { name: 'Magnésio Albion® Bisglicinato', dose: '400mg' },
      { name: 'AstraGin® (Astragalus + Panax notoginseng)', dose: '50mg' },
      { name: 'Potássio Quelato Albion®', dose: '200mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 500ml de água. Tomar 30 minutos antes do treino para máximo desempenho.',
  },

  // 3. Recuperação Total — post-exercise recovery / inflammation
  {
    id: 'musculo-3-ess', name: 'Recuperação Total · Essencial', category: 'musculo', tier: 'essencial',
    ingredients: [
      { name: 'Glutamina', dose: '5.000mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Magnésio Quelato', dose: '300mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar antes de dormir, longe da última refeição (2h).',
  },
  {
    id: 'musculo-3-int', name: 'Recuperação Total · Intermediário', category: 'musculo', tier: 'intermediario',
    ingredients: [
      { name: 'Glutamina', dose: '5.000mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Curcumina', dose: '500mg' },
      { name: 'Bromelina', dose: '500mg' },
      { name: 'Tart Cherry (Cereja azeda, extrato)', dose: '480mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar imediatamente após o treino.',
  },
  {
    id: 'musculo-3-pre', name: 'Recuperação Total · Premium', category: 'musculo', tier: 'premium',
    ingredients: [
      { name: 'Glutamina (Ajinomoto®)', dose: '5.000mg' },
      { name: 'Vitamina C (Ester-C®)', dose: '1.000mg' },
      { name: 'Magnésio Albion® Bisglicinato', dose: '400mg' },
      { name: 'Curcumina (Meriva® Fitossoma)', dose: '500mg' },
      { name: 'Bromelina', dose: '500mg' },
      { name: 'Tart Cherry (CherryPURE®)', dose: '480mg' },
      { name: 'Boswellia serrata (Boswellin®)', dose: '250mg' },
      { name: 'AstaReal® Astaxantina', dose: '12mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar imediatamente após o treino para redução da inflamação muscular.',
  },

  // 4. Fibra de Aço — connective tissue / tendon support
  {
    id: 'musculo-4-ess', name: 'Fibra de Aço · Essencial', category: 'musculo', tier: 'essencial',
    ingredients: [
      { name: 'Colágeno Hidrolisado Tipo I', dose: '10.000mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Manganês Quelato', dose: '2mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'musculo-4-int', name: 'Fibra de Aço · Intermediário', category: 'musculo', tier: 'intermediario',
    ingredients: [
      { name: 'Colágeno Hidrolisado Tipo I', dose: '10.000mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Manganês Quelato', dose: '3mg' },
      { name: 'MSM (Metilsulfonilmetano)', dose: '1.000mg' },
      { name: 'Silício Orgânico', dose: '10mg' },
      { name: 'Prolina', dose: '500mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água. Tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'musculo-4-pre', name: 'Fibra de Aço · Premium', category: 'musculo', tier: 'premium',
    ingredients: [
      { name: 'Peptan® Colágeno Hidrolisado Tipo I', dose: '10.000mg' },
      { name: 'Vitamina C (Ester-C®)', dose: '1.000mg' },
      { name: 'Manganês TRAACS® Bisglicinato', dose: '3mg' },
      { name: 'OptiMSM® (Metilsulfonilmetano)', dose: '1.500mg' },
      { name: 'Silício Orgânico (BioSil®)', dose: '10mg' },
      { name: 'Prolina', dose: '500mg' },
      { name: 'UC-II® (Colágeno Tipo II não desnaturado)', dose: '40mg' },
      { name: 'Ácido Hialurônico', dose: '100mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água. Tomar em jejum, 40 minutos antes do café da manhã para máxima absorção.',
  },

  // 5. Anabolismo Natural — natural anabolic support / GH
  {
    id: 'musculo-5-ess', name: 'Anabolismo Natural · Essencial', category: 'musculo', tier: 'essencial',
    ingredients: [
      { name: 'Tribulus terrestris (Saponinas 40%)', dose: '750mg' },
      { name: 'Zinco Quelato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'L-Arginina', dose: '2.000mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar antes de dormir, em jejum.',
  },
  {
    id: 'musculo-5-int', name: 'Anabolismo Natural · Intermediário', category: 'musculo', tier: 'intermediario',
    ingredients: [
      { name: 'Tribulus terrestris (Saponinas 40%)', dose: '750mg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'L-Arginina', dose: '3.000mg' },
      { name: 'Mucuna pruriens (L-Dopa 15%)', dose: '300mg' },
      { name: 'GABA', dose: '750mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar 30 minutos antes de dormir, em jejum.',
  },
  {
    id: 'musculo-5-pre', name: 'Anabolismo Natural · Premium', category: 'musculo', tier: 'premium',
    ingredients: [
      { name: 'Tribulus terrestris (Saponinas 40%)', dose: '750mg' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'L-Arginina', dose: '3.000mg' },
      { name: 'Mucuna pruriens (L-Dopa 15%)', dose: '300mg' },
      { name: 'GABA', dose: '750mg' },
      { name: 'Alpha-GPC (Alfa-glicerilfosforilcolina)', dose: '300mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar 30 minutos antes de dormir, em jejum, para suporte ao GH noturno.',
  },

  // =============================================
  // OSSO — category: 'osso'
  // =============================================

  // 1. Rocha Viva — calcium/vitamin D / bone density
  {
    id: 'osso-1-ess', name: 'Rocha Viva · Essencial', category: 'osso', tier: 'essencial',
    ingredients: [
      { name: 'Cálcio (Citrato de Cálcio)', dose: '500mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
      { name: 'Magnésio Quelato', dose: '200mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento. Não tomar junto com ferro.',
  },
  {
    id: 'osso-1-int', name: 'Rocha Viva · Intermediário', category: 'osso', tier: 'intermediario',
    ingredients: [
      { name: 'Cálcio (Citrato de Cálcio)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Magnésio Bisglicinato', dose: '300mg' },
      { name: 'Vitamina K2 (MK-7)', dose: '100mcg' },
      { name: 'Boro', dose: '3mg' },
      { name: 'Zinco Bisglicinato', dose: '15mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento. Não tomar junto com suplementos de ferro.',
  },
  {
    id: 'osso-1-pre', name: 'Rocha Viva · Premium', category: 'osso', tier: 'premium',
    ingredients: [
      { name: 'Cálcio (Calci-K® Citrato-Malato)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Magnésio Albion® Bisglicinato', dose: '350mg' },
      { name: 'Vitamina K2 (MenaQ7®)', dose: '200mcg' },
      { name: 'Boro (FruiteX-B® OsteoBoron)', dose: '6mg' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '15mg' },
      { name: 'Estrôncio (Citrato)', dose: '340mg' },
      { name: 'Silício Orgânico (BioSil®)', dose: '6mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café, 1 no almoço e 1 no jantar, com alimento. Estrôncio longe do cálcio (2h).',
  },

  // 2. Estrutura Forte — collagen / bone matrix
  {
    id: 'osso-2-ess', name: 'Estrutura Forte · Essencial', category: 'osso', tier: 'essencial',
    ingredients: [
      { name: 'Colágeno Hidrolisado Tipo I', dose: '10.000mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Silício Orgânico', dose: '5mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água. Tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'osso-2-int', name: 'Estrutura Forte · Intermediário', category: 'osso', tier: 'intermediario',
    ingredients: [
      { name: 'Colágeno Hidrolisado Tipo I', dose: '10.000mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Silício Orgânico', dose: '10mg' },
      { name: 'Lisina', dose: '500mg' },
      { name: 'Prolina', dose: '500mg' },
      { name: 'Manganês Quelato', dose: '2mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água. Tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'osso-2-pre', name: 'Estrutura Forte · Premium', category: 'osso', tier: 'premium',
    ingredients: [
      { name: 'Fortigel® (Peptídeos Bioativos de Colágeno)', dose: '10.000mg' },
      { name: 'Vitamina C (Ester-C®)', dose: '1.000mg' },
      { name: 'Silício Orgânico (BioSil®)', dose: '10mg' },
      { name: 'Lisina', dose: '500mg' },
      { name: 'Prolina', dose: '500mg' },
      { name: 'Manganês TRAACS® Bisglicinato', dose: '2mg' },
      { name: 'Ovomet® (Membrana da Casca de Ovo)', dose: '300mg' },
      { name: 'Ácido Hialurônico', dose: '100mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água. Tomar em jejum, 40 minutos antes do café da manhã para máxima absorção.',
  },

  // 3. Mineral Essencial — trace minerals / bone turnover
  {
    id: 'osso-3-ess', name: 'Mineral Essencial · Essencial', category: 'osso', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio Quelato', dose: '300mg' },
      { name: 'Zinco Quelato', dose: '15mg' },
      { name: 'Cobre Quelato', dose: '1mg' },
      { name: 'Manganês Quelato', dose: '2mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento.',
  },
  {
    id: 'osso-3-int', name: 'Mineral Essencial · Intermediário', category: 'osso', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Zinco Bisglicinato', dose: '15mg' },
      { name: 'Cobre Bisglicinato', dose: '1mg' },
      { name: 'Manganês Quelato', dose: '3mg' },
      { name: 'Boro', dose: '3mg' },
      { name: 'Potássio (Citrato)', dose: '200mg' },
      { name: 'Cromo Picolinato', dose: '200mcg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento.',
  },
  {
    id: 'osso-3-pre', name: 'Mineral Essencial · Premium', category: 'osso', tier: 'premium',
    ingredients: [
      { name: 'Magnésio Albion® Bisglicinato', dose: '400mg' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '15mg' },
      { name: 'Cobre Albion® Bisglicinato', dose: '1mg' },
      { name: 'Manganês TRAACS® Bisglicinato', dose: '3mg' },
      { name: 'Boro (FruiteX-B® OsteoBoron)', dose: '6mg' },
      { name: 'Potássio Quelato Albion®', dose: '200mg' },
      { name: 'Cromo TRAACS® Picolinato', dose: '200mcg' },
      { name: 'Molibdênio Albion® Quelato', dose: '75mcg' },
      { name: 'Vanádio Quelato TRAACS®', dose: '50mcg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, sempre com alimento para melhor tolerância.',
  },

  // 4. Osteoblasto Ativo — osteoblast stimulation / bone formation
  {
    id: 'osso-4-ess', name: 'Osteoblasto Ativo · Essencial', category: 'osso', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Vitamina K2 (MK-7)', dose: '100mcg' },
      { name: 'Ipriflavona', dose: '600mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com refeição contendo gordura.',
  },
  {
    id: 'osso-4-int', name: 'Osteoblasto Ativo · Intermediário', category: 'osso', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Vitamina K2 (MK-7)', dose: '200mcg' },
      { name: 'Ipriflavona', dose: '600mg' },
      { name: 'Vitamina A (Retinol)', dose: '2.500UI' },
      { name: 'Genisteína (Isoflavona de Soja)', dose: '54mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com refeição contendo gordura.',
  },
  {
    id: 'osso-4-pre', name: 'Osteoblasto Ativo · Premium', category: 'osso', tier: 'premium',
    ingredients: [
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Vitamina K2 (MenaQ7®)', dose: '200mcg' },
      { name: 'Ipriflavona', dose: '600mg' },
      { name: 'Vitamina A (Retinol)', dose: '2.500UI' },
      { name: 'Genisteína (Isoflavona de Soja)', dose: '54mg' },
      { name: 'Bonolive® (Extrato de Oleuropeína)', dose: '250mg' },
      { name: 'MBP® (Proteína Básica do Leite)', dose: '40mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com refeição contendo gordura.',
  },

  // 5. Armadura Óssea — osteoporosis prevention / anti-resorption
  {
    id: 'osso-5-ess', name: 'Armadura Óssea · Essencial', category: 'osso', tier: 'essencial',
    ingredients: [
      { name: 'Cálcio (Citrato de Cálcio)', dose: '500mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
      { name: 'Isoflavonas de Soja', dose: '80mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar, com alimento.',
  },
  {
    id: 'osso-5-int', name: 'Armadura Óssea · Intermediário', category: 'osso', tier: 'intermediario',
    ingredients: [
      { name: 'Cálcio (Citrato-Malato)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Isoflavonas de Soja', dose: '80mg' },
      { name: 'Curcumina', dose: '500mg' },
      { name: 'Resveratrol (Trans-resveratrol)', dose: '100mg' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '1.000mg' },
    ],
    posology: '2 cápsulas + 1 cápsula de ômega-3 ao dia',
    quantity: '120 cápsulas + 60 cápsulas', duration: '2 meses',
    instructions: 'Tomar as cápsulas no almoço e no jantar, com alimento.',
  },
  {
    id: 'osso-5-pre', name: 'Armadura Óssea · Premium', category: 'osso', tier: 'premium',
    ingredients: [
      { name: 'Cálcio (Calci-K® Citrato-Malato)', dose: '600mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Isoflavonas de Soja', dose: '80mg' },
      { name: 'Curcumina (Meriva® Fitossoma)', dose: '500mg' },
      { name: 'Trans-Resveratrol (Veri-te®)', dose: '150mg' },
      { name: 'Ômega-3 (EPA/DHA ultra-concentrado)', dose: '1.500mg' },
      { name: 'Bonolive® (Extrato de Oleuropeína)', dose: '250mg' },
      { name: 'Vitamina K2 (MenaQ7®)', dose: '200mcg' },
    ],
    posology: '3 cápsulas + 2 cápsulas de ômega-3 ao dia',
    quantity: '180 cápsulas + 120 cápsulas', duration: '2 meses',
    instructions: 'Tomar as cápsulas distribuídas no almoço e jantar, com refeição contendo gordura boa.',
  },

  // =============================================
  // IMUNIDADE — category: 'imunidade'
  // =============================================

  // 1. Sentinela — innate immune activation
  {
    id: 'imunidade-1-ess', name: 'Sentinela · Essencial', category: 'imunidade', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Zinco Quelato', dose: '25mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'imunidade-1-int', name: 'Sentinela · Intermediário', category: 'imunidade', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina C', dose: '1.500mg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Selênio (Selenometionina)', dose: '200mcg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Vitamina A (Retinol)', dose: '5.000UI' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'imunidade-1-pre', name: 'Sentinela · Premium', category: 'imunidade', tier: 'premium',
    ingredients: [
      { name: 'Vitamina C (Ester-C®)', dose: '2.000mg' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Selênio (SeLECT® Selenometionina)', dose: '200mcg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Vitamina A (Retinol)', dose: '5.000UI' },
      { name: 'Wellmune® (Beta-1,3/1,6-glucana)', dose: '250mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com alimento.',
  },

  // 2. Escudo Viral — antiviral defense
  {
    id: 'imunidade-2-ess', name: 'Escudo Viral · Essencial', category: 'imunidade', tier: 'essencial',
    ingredients: [
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Sabugueiro (Sambucus nigra, extrato)', dose: '300mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'imunidade-2-int', name: 'Escudo Viral · Intermediário', category: 'imunidade', tier: 'intermediario',
    ingredients: [
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Sabugueiro (Sambucus nigra, extrato)', dose: '500mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Própolis Verde (EPP-AF®)', dose: '250mg' },
      { name: 'Zinco Bisglicinato', dose: '25mg' },
      { name: 'Monolaurina', dose: '600mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com alimento.',
  },
  {
    id: 'imunidade-2-pre', name: 'Escudo Viral · Premium', category: 'imunidade', tier: 'premium',
    ingredients: [
      { name: 'Quercetina (Quercefit® Fitossoma)', dose: '500mg' },
      { name: 'Sabugueiro (Sambucus nigra, extrato padronizado)', dose: '500mg' },
      { name: 'Vitamina C (Ester-C®)', dose: '1.000mg' },
      { name: 'Própolis Verde (EPP-AF®)', dose: '250mg' },
      { name: 'Zinco TRAACS® Bisglicinato', dose: '25mg' },
      { name: 'Monolaurina', dose: '600mg' },
      { name: 'Andrographis paniculata (Andrografolídeos 30%)', dose: '400mg' },
      { name: 'Lactoferrina', dose: '250mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com alimento. Aumentar para 2x cada em fase aguda.',
  },

  // 3. Patrulha Imune — adaptive immunity / T-cell support
  {
    id: 'imunidade-3-ess', name: 'Patrulha Imune · Essencial', category: 'imunidade', tier: 'essencial',
    ingredients: [
      { name: 'Selênio (Selenometionina)', dose: '200mcg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '200UI' },
      { name: 'Vitamina B6 (Piridoxina)', dose: '50mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'imunidade-3-int', name: 'Patrulha Imune · Intermediário', category: 'imunidade', tier: 'intermediario',
    ingredients: [
      { name: 'Selênio (Selenometionina)', dose: '200mcg' },
      { name: 'Vitamina E (d-alfa-tocoferol)', dose: '400UI' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Astragalus membranaceus (Extrato 4:1)', dose: '500mg' },
      { name: 'Beta-Glucana (1,3/1,6)', dose: '250mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã e 1 no jantar, com alimento.',
  },
  {
    id: 'imunidade-3-pre', name: 'Patrulha Imune · Premium', category: 'imunidade', tier: 'premium',
    ingredients: [
      { name: 'Selênio (SeLECT® Selenometionina)', dose: '200mcg' },
      { name: 'Vitamina E (Tocotrienóis + Tocoferóis)', dose: '400UI' },
      { name: 'Vitamina B6 (P-5-P)', dose: '50mg' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Astragalus membranaceus (Extrato 4:1)', dose: '500mg' },
      { name: 'Wellmune® (Beta-1,3/1,6-glucana)', dose: '250mg' },
      { name: 'EpiCor® (Fermentado de Saccharomyces)', dose: '500mg' },
      { name: 'Setria® Glutationa Reduzida', dose: '250mg' },
    ],
    posology: '3 cápsulas ao dia',
    quantity: '180 cápsulas', duration: '2 meses',
    instructions: 'Tomar 1 cápsula no café da manhã, 1 no almoço e 1 no jantar, com alimento.',
  },

  // 4. Barreira Total — mucosal immunity (IgA / respiratory)
  {
    id: 'imunidade-4-ess', name: 'Barreira Total · Essencial', category: 'imunidade', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina A (Retinol)', dose: '5.000UI' },
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Probióticos (Lactobacillus rhamnosus GG)', dose: '10 bilhões UFC' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água em temperatura ambiente. Tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'imunidade-4-int', name: 'Barreira Total · Intermediário', category: 'imunidade', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina A (Retinol)', dose: '5.000UI' },
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Probióticos (L. rhamnosus GG + L. plantarum)', dose: '20 bilhões UFC' },
      { name: 'Colostro Bovino (IgG 30%)', dose: '500mg' },
      { name: 'Lactoferrina', dose: '100mg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 200ml de água em temperatura ambiente (não quente). Tomar em jejum, 30 minutos antes do café da manhã.',
  },
  {
    id: 'imunidade-4-pre', name: 'Barreira Total · Premium', category: 'imunidade', tier: 'premium',
    ingredients: [
      { name: 'Vitamina A (Retinol)', dose: '5.000UI' },
      { name: 'L-Glutamina (Ajinomoto®)', dose: '5.000mg' },
      { name: 'Probióticos (L. rhamnosus GG + L. plantarum + B. lactis)', dose: '30 bilhões UFC' },
      { name: 'Colostro Bovino (IgG 30%)', dose: '1.000mg' },
      { name: 'Lactoferrina', dose: '250mg' },
      { name: 'N-Acetilcisteína (NAC)', dose: '600mg' },
      { name: 'Arabinogalactana (Larch Tree)', dose: '1.500mg' },
      { name: 'EpiCor® (Fermentado de Saccharomyces)', dose: '500mg' },
    ],
    posology: '1 sachê ao dia',
    quantity: '60 sachês', duration: '2 meses',
    instructions: 'Diluir em 250ml de água em temperatura ambiente (nunca quente). Tomar em jejum, 30 minutos antes do café da manhã.',
  },

  // 5. Resiliência Imune — immune modulation / autoimmune balance
  {
    id: 'imunidade-5-ess', name: 'Resiliência Imune · Essencial', category: 'imunidade', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '1.000mg' },
      { name: 'Curcumina', dose: '500mg' },
    ],
    posology: '2 cápsulas ao dia',
    quantity: '120 cápsulas', duration: '2 meses',
    instructions: 'Tomar as 2 cápsulas no almoço, com refeição contendo gordura.',
  },
  {
    id: 'imunidade-5-int', name: 'Resiliência Imune · Intermediário', category: 'imunidade', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '2.000mg' },
      { name: 'Curcumina', dose: '500mg' },
      { name: 'Glutationa Reduzida', dose: '250mg' },
      { name: 'Cogumelos Medicinais (Reishi + Shiitake)', dose: '500mg' },
      { name: 'Vitamina B12 (Metilcobalamina)', dose: '1.000mcg' },
    ],
    posology: '2 cápsulas + 2 cápsulas de ômega-3 ao dia',
    quantity: '120 cápsulas + 120 cápsulas', duration: '2 meses',
    instructions: 'Tomar no almoço com refeição contendo gordura boa.',
  },
  {
    id: 'imunidade-5-pre', name: 'Resiliência Imune · Premium', category: 'imunidade', tier: 'premium',
    ingredients: [
      { name: 'Vitamina D3', dose: '10.000UI' },
      { name: 'Ômega-3 (EPA/DHA ultra-concentrado)', dose: '3.000mg' },
      { name: 'Curcumina (Meriva® Fitossoma)', dose: '500mg' },
      { name: 'Setria® Glutationa Reduzida', dose: '500mg' },
      { name: 'Cogumelos Medicinais (Reishi + Shiitake + Maitake)', dose: '750mg' },
      { name: 'Vitamina B12 (Metilcobalamina)', dose: '1.000mcg' },
      { name: 'Palmitoiletanolamida (PEA)', dose: '600mg' },
      { name: 'Vitamina K2 (MenaQ7®)', dose: '200mcg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '3 cápsulas + 2 cápsulas de ômega-3 ao dia',
    quantity: '180 cápsulas + 120 cápsulas', duration: '2 meses',
    instructions: 'Tomar no almoço com refeição rica em gordura boa. Monitorar níveis de vitamina D a cada 3 meses.',
  },
];
