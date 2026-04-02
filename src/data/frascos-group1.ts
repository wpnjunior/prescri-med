import type { Frasco } from '../types';

export const FRASCOS_GROUP1: Frasco[] = [
  // ============================================================
  // SONO (Sleep) — 5 concepts × 3 tiers = 15 frascos
  // ============================================================

  // --- Conceito 1: Noite Serena — Melatonin/Serotonin pathway (sleep onset) ---
  {
    id: 'sono-1-ess', name: 'Noite Serena · Essencial', category: 'sono', tier: 'essencial',
    ingredients: [
      { name: 'Melatonina', dose: '0,5mg' },
      { name: 'L-Triptofano', dose: '300mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
    ],
    posology: '1 cápsula 30-60 min antes de dormir',
    quantity: '60 cápsulas', duration: '2 meses',
    instructions: 'Tomar com água. Evitar telas e luz azul 1h antes de dormir.',
  },
  {
    id: 'sono-1-int', name: 'Noite Serena · Intermediário', category: 'sono', tier: 'intermediario',
    ingredients: [
      { name: 'Melatonina', dose: '1mg' },
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Vitamina B6 (P5P)', dose: '35mg' },
      { name: '5-HTP', dose: '50mg' },
      { name: 'Magnésio Bisglicinato', dose: '200mg' },
    ],
    posology: '2 cápsulas 30-60 min antes de dormir',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água. Não associar 5-HTP com antidepressivos serotoninérgicos.',
  },
  {
    id: 'sono-1-pre', name: 'Noite Serena · Premium', category: 'sono', tier: 'premium',
    ingredients: [
      { name: 'Melatonina micronizada', dose: '1mg' },
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Vitamina B6 (P5P)', dose: '35mg' },
      { name: '5-HTP', dose: '100mg' },
      { name: 'Magnésio Bisglicinato', dose: '200mg' },
      { name: 'Lactium® (alfa-casozepina)', dose: '150mg' },
      { name: 'Affron® (extrato de açafrão)', dose: '28mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '2 cápsulas 30-60 min antes de dormir',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água e um pequeno lanche proteico. Não associar 5-HTP com ISRS.',
  },

  // --- Conceito 2: Véu da Lua — GABAergic relaxation (sleep maintenance) ---
  {
    id: 'sono-2-ess', name: 'Véu da Lua · Essencial', category: 'sono', tier: 'essencial',
    ingredients: [
      { name: 'GABA', dose: '500mg' },
      { name: 'Passiflora incarnata', dose: '300mg' },
      { name: 'Glicina', dose: '1.000mg' },
    ],
    posology: '1 sachê diluído em 100ml de água, 30 min antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água morna. Tomar em ambiente tranquilo e com pouca luz.',
  },
  {
    id: 'sono-2-int', name: 'Véu da Lua · Intermediário', category: 'sono', tier: 'intermediario',
    ingredients: [
      { name: 'GABA', dose: '750mg' },
      { name: 'Passiflora incarnata', dose: '400mg' },
      { name: 'Glicina', dose: '2.000mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Valeriana officinalis', dose: '300mg' },
    ],
    posology: '1 sachê diluído em 150ml de água, 30 min antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água morna. Pode associar com chá de camomila.',
  },
  {
    id: 'sono-2-pre', name: 'Véu da Lua · Premium', category: 'sono', tier: 'premium',
    ingredients: [
      { name: 'PharmaGABA®', dose: '200mg' },
      { name: 'Passiflora incarnata', dose: '500mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Suntheanine® (L-Teanina)', dose: '200mg' },
      { name: 'Valeriana officinalis', dose: '400mg' },
      { name: 'Zembrin® (Sceletium tortuosum)', dose: '25mg' },
      { name: 'Apigenina (extrato de camomila)', dose: '50mg' },
      { name: 'Magnésio Treonato', dose: '144mg' },
    ],
    posology: '1 sachê diluído em 150ml de água, 30 min antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água morna ou fria. Evitar álcool. Não dirigir após ingestão.',
  },

  // --- Conceito 3: Maré Quieta — Magnesium/muscle relaxation (physical tension) ---
  {
    id: 'sono-3-ess', name: 'Maré Quieta · Essencial', category: 'sono', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '300mg' },
      { name: 'Cálcio Citrato Malato', dose: '250mg' },
      { name: 'Potássio Citrato', dose: '100mg' },
    ],
    posology: '2 cápsulas com o jantar',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar junto com a última refeição. Ideal para quem sente cãibras ou inquietação noturna.',
  },
  {
    id: 'sono-3-int', name: 'Maré Quieta · Intermediário', category: 'sono', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'Potássio Citrato', dose: '150mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
      { name: 'Melissa officinalis', dose: '300mg' },
    ],
    posology: '1 sachê diluído em 200ml de água, após o jantar',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água. Pode ser usado como rotina de relaxamento muscular pré-sono.',
  },
  {
    id: 'sono-3-pre', name: 'Maré Quieta · Premium', category: 'sono', tier: 'premium',
    ingredients: [
      { name: 'Magtein® (Magnésio L-Treonato)', dose: '144mg elem.' },
      { name: 'Magnésio Bisglicinato', dose: '200mg' },
      { name: 'Taurina', dose: '1.500mg' },
      { name: 'Potássio Citrato', dose: '200mg' },
      { name: 'Melissa officinalis', dose: '300mg' },
      { name: 'Bluenesse® (extrato de alecrim)', dose: '300mg' },
      { name: 'Vitamina B6 (P5P)', dose: '35mg' },
      { name: 'Zinco Bisglicinato', dose: '15mg' },
    ],
    posology: '1 sachê diluído em 200ml de água, após o jantar',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água morna. Associar a alongamento noturno para melhor efeito.',
  },

  // --- Conceito 4: Estrela Guia — Circadian rhythm reset (jet lag / shift workers) ---
  {
    id: 'sono-4-ess', name: 'Estrela Guia · Essencial', category: 'sono', tier: 'essencial',
    ingredients: [
      { name: 'Melatonina', dose: '3mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
    ],
    posology: '1 cápsula ao anoitecer (horário-alvo de sono)',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar sempre no mesmo horário. Expor-se à luz solar pela manhã. Ideal para readaptação de fuso.',
  },
  {
    id: 'sono-4-int', name: 'Estrela Guia · Intermediário', category: 'sono', tier: 'intermediario',
    ingredients: [
      { name: 'Melatonina', dose: '3mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
      { name: 'Magnésio Malato', dose: '200mg' },
      { name: 'Ashwagandha (extrato padronizado)', dose: '300mg' },
      { name: 'L-Teanina', dose: '200mg' },
    ],
    posology: '2 cápsulas ao anoitecer (horário-alvo de sono)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar no horário desejado de início de sono. Buscar luz forte pela manhã e escuridão à noite.',
  },
  {
    id: 'sono-4-pre', name: 'Estrela Guia · Premium', category: 'sono', tier: 'premium',
    ingredients: [
      { name: 'Melatonina de liberação prolongada', dose: '3mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.500mcg' },
      { name: 'Magnésio Malato', dose: '200mg' },
      { name: 'KSM-66® (Ashwagandha)', dose: '300mg' },
      { name: 'Suntheanine® (L-Teanina)', dose: '200mg' },
      { name: 'Vitamina K2 (MK-7)', dose: '100mcg' },
      { name: 'Ômega-3 (EPA)', dose: '500mg' },
    ],
    posology: '2 cápsulas ao anoitecer (horário-alvo de sono)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com pequena refeição gordurosa. Protocolo de 30 dias para readaptação circadiana.',
  },

  // --- Conceito 5: Repouso Profundo — Deep sleep restoration (REM optimization) ---
  {
    id: 'sono-5-ess', name: 'Repouso Profundo · Essencial', category: 'sono', tier: 'essencial',
    ingredients: [
      { name: 'Fosfatidilserina', dose: '100mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Zinco Quelato', dose: '15mg' },
    ],
    posology: '1 sachê diluído em 100ml de água, 1h antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água. Evitar exercício intenso até 3h antes de dormir.',
  },
  {
    id: 'sono-5-int', name: 'Repouso Profundo · Intermediário', category: 'sono', tier: 'intermediario',
    ingredients: [
      { name: 'Fosfatidilserina', dose: '200mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Zinco Quelato', dose: '25mg' },
      { name: 'Magnésio Treonato', dose: '144mg' },
      { name: 'Taurina', dose: '500mg' },
      { name: 'Ácido alfa-lipóico', dose: '100mg' },
    ],
    posology: '1 sachê diluído em 150ml de água, 1h antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água fria ou morna. Para otimizar sono profundo e recuperação noturna.',
  },
  {
    id: 'sono-5-pre', name: 'Repouso Profundo · Premium', category: 'sono', tier: 'premium',
    ingredients: [
      { name: 'Sharp-PS® (Fosfatidilserina)', dose: '200mg' },
      { name: 'Glicina', dose: '3.000mg' },
      { name: 'Zinco Quelato', dose: '25mg' },
      { name: 'Magtein® (Magnésio L-Treonato)', dose: '144mg elem.' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'Relora® (Magnolia + Phellodendron)', dose: '250mg' },
      { name: 'Bacognize® (Bacopa monnieri)', dose: '150mg' },
      { name: 'Ácido alfa-lipóico', dose: '200mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
    ],
    posology: '1 sachê diluído em 200ml de água, 1h antes de dormir',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água. Favorece arquitetura do sono (ondas lentas e REM). Não associar com benzodiazepínicos.',
  },

  // ============================================================
  // ANSIEDADE (Anxiety) — 5 concepts × 3 tiers = 15 frascos
  // ============================================================

  // --- Conceito 1: Porto Seguro — GABAergic anxiolytic ---
  {
    id: 'ansiedade-1-ess', name: 'Porto Seguro · Essencial', category: 'ansiedade', tier: 'essencial',
    ingredients: [
      { name: 'GABA', dose: '500mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Passiflora incarnata', dose: '300mg' },
    ],
    posology: '1 cápsula 2x ao dia (manhã e noite)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água, independente de refeição. Pode usar dose extra em crises agudas.',
  },
  {
    id: 'ansiedade-1-int', name: 'Porto Seguro · Intermediário', category: 'ansiedade', tier: 'intermediario',
    ingredients: [
      { name: 'GABA', dose: '750mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Passiflora incarnata', dose: '400mg' },
      { name: 'Valeriana officinalis', dose: '300mg' },
      { name: 'Magnésio Bisglicinato', dose: '200mg' },
    ],
    posology: '2 cápsulas 2x ao dia (manhã e noite)',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água. Pode causar sonolência leve. Evitar dirigir se sentir sedação.',
  },
  {
    id: 'ansiedade-1-pre', name: 'Porto Seguro · Premium', category: 'ansiedade', tier: 'premium',
    ingredients: [
      { name: 'PharmaGABA®', dose: '200mg' },
      { name: 'Suntheanine® (L-Teanina)', dose: '200mg' },
      { name: 'Passiflora incarnata', dose: '500mg' },
      { name: 'Valeriana officinalis', dose: '400mg' },
      { name: 'Magnésio Bisglicinato', dose: '200mg' },
      { name: 'Lactium® (alfa-casozepina)', dose: '150mg' },
      { name: 'Relora® (Magnolia + Phellodendron)', dose: '250mg' },
      { name: 'Apigenina (extrato de camomila)', dose: '50mg' },
    ],
    posology: '2 cápsulas 2x ao dia (manhã e noite)',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com água. Protocolo ansiolítico GABAérgico. Não associar com benzodiazepínicos sem orientação.',
  },

  // --- Conceito 2: Brisa Suave — Adaptogenic stress response ---
  {
    id: 'ansiedade-2-ess', name: 'Brisa Suave · Essencial', category: 'ansiedade', tier: 'essencial',
    ingredients: [
      { name: 'Ashwagandha (extrato padronizado)', dose: '300mg' },
      { name: 'Rhodiola rosea', dose: '200mg' },
      { name: 'Vitamina C', dose: '500mg' },
    ],
    posology: '1 cápsula pela manhã, com café da manhã',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com a primeira refeição. Uso contínuo por no mínimo 8 semanas para efeito pleno.',
  },
  {
    id: 'ansiedade-2-int', name: 'Brisa Suave · Intermediário', category: 'ansiedade', tier: 'intermediario',
    ingredients: [
      { name: 'Ashwagandha (extrato padronizado)', dose: '600mg' },
      { name: 'Rhodiola rosea', dose: '300mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Eleutherococcus senticosus', dose: '300mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '250mg' },
    ],
    posology: '2 cápsulas pela manhã, com café da manhã',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição. Evitar uso à noite (pode ser estimulante). Ciclar 3 meses on / 1 mês off.',
  },
  {
    id: 'ansiedade-2-pre', name: 'Brisa Suave · Premium', category: 'ansiedade', tier: 'premium',
    ingredients: [
      { name: 'KSM-66® (Ashwagandha)', dose: '600mg' },
      { name: 'Rhodiola rosea (3% rosavinas)', dose: '400mg' },
      { name: 'Vitamina C lipossomal', dose: '1.000mg' },
      { name: 'Eleutherococcus senticosus', dose: '300mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '500mg' },
      { name: 'Schisandra chinensis', dose: '250mg' },
      { name: 'Bacognize® (Bacopa monnieri)', dose: '300mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '2 cápsulas pela manhã, com café da manhã',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição gordurosa para melhor absorção. Adaptógenos de amplo espectro.',
  },

  // --- Conceito 3: Lago Calmo — Serotonergic balance ---
  {
    id: 'ansiedade-3-ess', name: 'Lago Calmo · Essencial', category: 'ansiedade', tier: 'essencial',
    ingredients: [
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
      { name: 'Magnésio Quelato', dose: '200mg' },
    ],
    posology: '1 cápsula 2x ao dia (manhã e fim de tarde)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar preferencialmente longe de refeições hiperproteicas. Não associar com ISRS sem orientação.',
  },
  {
    id: 'ansiedade-3-int', name: 'Lago Calmo · Intermediário', category: 'ansiedade', tier: 'intermediario',
    ingredients: [
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
      { name: 'Magnésio Quelato', dose: '300mg' },
      { name: 'Folato (5-MTHF)', dose: '400mcg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '500mcg' },
      { name: 'Crocus sativus (açafrão)', dose: '30mg' },
    ],
    posology: '2 cápsulas 2x ao dia (manhã e fim de tarde)',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar longe de proteínas para otimizar transporte de triptofano. Suporte ao ciclo da metilação.',
  },
  {
    id: 'ansiedade-3-pre', name: 'Lago Calmo · Premium', category: 'ansiedade', tier: 'premium',
    ingredients: [
      { name: 'L-Triptofano', dose: '500mg' },
      { name: 'Vitamina B6 (P5P)', dose: '50mg' },
      { name: 'Magnésio Quelato', dose: '300mg' },
      { name: 'Folato (5-MTHF)', dose: '800mcg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
      { name: 'Affron® (extrato de açafrão)', dose: '28mg' },
      { name: 'Zembrin® (Sceletium tortuosum)', dose: '25mg' },
      { name: 'SAMe (S-adenosilmetionina)', dose: '200mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '2 cápsulas 2x ao dia (manhã e fim de tarde)',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar longe de proteínas. Contraindicado com ISRS/IRSN sem acompanhamento médico rigoroso.',
  },

  // --- Conceito 4: Raiz Firme — HPA axis regulation ---
  {
    id: 'ansiedade-4-ess', name: 'Raiz Firme · Essencial', category: 'ansiedade', tier: 'essencial',
    ingredients: [
      { name: 'Fosfatidilserina', dose: '100mg' },
      { name: 'Vitamina C', dose: '500mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '250mg' },
    ],
    posology: '1 cápsula 2x ao dia (manhã e tarde)',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição. Indicado para estresse crônico com cortisol elevado.',
  },
  {
    id: 'ansiedade-4-int', name: 'Raiz Firme · Intermediário', category: 'ansiedade', tier: 'intermediario',
    ingredients: [
      { name: 'Fosfatidilserina', dose: '200mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '500mg' },
      { name: 'Magnésio Taurato', dose: '200mg' },
      { name: 'Glycyrrhiza glabra (alcaçuz DGL)', dose: '200mg' },
    ],
    posology: '2 cápsulas pela manhã, 1 cápsula à tarde',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Monitorar pressão arterial (alcaçuz). Protocolo de regulação de cortisol.',
  },
  {
    id: 'ansiedade-4-pre', name: 'Raiz Firme · Premium', category: 'ansiedade', tier: 'premium',
    ingredients: [
      { name: 'Sharp-PS® (Fosfatidilserina)', dose: '200mg' },
      { name: 'Vitamina C lipossomal', dose: '1.000mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '500mg' },
      { name: 'Magnésio Taurato', dose: '200mg' },
      { name: 'Sensoril® (Ashwagandha)', dose: '125mg' },
      { name: 'Relora® (Magnolia + Phellodendron)', dose: '250mg' },
      { name: 'Holy Basil (Ocimum sanctum)', dose: '300mg' },
      { name: 'Zinco Bisglicinato', dose: '15mg' },
    ],
    posology: '2 cápsulas pela manhã, 1 cápsula à tarde',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições. Protocolo de modulação do eixo HPA. Avaliar cortisol salivar antes e após 60 dias.',
  },

  // --- Conceito 5: Horizonte Sereno — Somatic/physical anxiety ---
  {
    id: 'ansiedade-5-ess', name: 'Horizonte Sereno · Essencial', category: 'ansiedade', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Taurina', dose: '1.000mg' },
      { name: 'Inositol', dose: '2.000mg' },
    ],
    posology: '1 sachê diluído em 200ml de água, 2x ao dia',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em água. Indicado para sintomas somáticos: taquicardia, tensão muscular, mãos frias.',
  },
  {
    id: 'ansiedade-5-int', name: 'Horizonte Sereno · Intermediário', category: 'ansiedade', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Taurina', dose: '1.500mg' },
      { name: 'Inositol', dose: '4.000mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Lemon Balm (Melissa officinalis)', dose: '300mg' },
      { name: 'Coenzima Q10', dose: '100mg' },
    ],
    posology: '1 sachê diluído em 200ml de água, 2x ao dia',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em água. Ideal para ansiedade com palpitações e hiperventilação. Praticar respiração diafragmática.',
  },
  {
    id: 'ansiedade-5-pre', name: 'Horizonte Sereno · Premium', category: 'ansiedade', tier: 'premium',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Taurina', dose: '2.000mg' },
      { name: 'Inositol', dose: '6.000mg' },
      { name: 'Suntheanine® (L-Teanina)', dose: '200mg' },
      { name: 'Bluenesse® (extrato de alecrim)', dose: '300mg' },
      { name: 'Kaneka Q10® (Ubiquinol)', dose: '100mg' },
      { name: 'Pycnogenol® (Pinus pinaster)', dose: '100mg' },
      { name: 'N-Acetil-Cisteína (NAC)', dose: '600mg' },
    ],
    posology: '1 sachê diluído em 200ml de água, 2x ao dia',
    quantity: '60 sachês', duration: '1 mês',
    instructions: 'Diluir em água fria ou morna. Protocolo para ansiedade somática com suporte antioxidante e cardiovascular.',
  },

  // ============================================================
  // TIREOIDE (Thyroid) — 5 concepts × 3 tiers = 15 frascos
  // ============================================================

  // --- Conceito 1: Borboleta Livre — T4→T3 conversion support ---
  {
    id: 'tireoide-1-ess', name: 'Borboleta Livre · Essencial', category: 'tireoide', tier: 'essencial',
    ingredients: [
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Zinco Quelato', dose: '20mg' },
      { name: 'Vitamina A (retinol)', dose: '5.000UI' },
    ],
    posology: '1 cápsula ao dia, com almoço',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição principal. Essencial para conversão periférica de T4 em T3.',
  },
  {
    id: 'tireoide-1-int', name: 'Borboleta Livre · Intermediário', category: 'tireoide', tier: 'intermediario',
    ingredients: [
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Vitamina A (retinol)', dose: '5.000UI' },
      { name: 'Ferro Bisglicinato', dose: '20mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '25mg' },
    ],
    posology: '1 cápsula ao dia, com almoço',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição. Separar 2h de cálcio e fibras. Ferro melhora atividade da deiodinase.',
  },
  {
    id: 'tireoide-1-pre', name: 'Borboleta Livre · Premium', category: 'tireoide', tier: 'premium',
    ingredients: [
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Vitamina A (retinol)', dose: '5.000UI' },
      { name: 'Ferro Bisglicinato', dose: '20mg' },
      { name: 'Vitamina B2 (riboflavina)', dose: '25mg' },
      { name: 'CurcuWIN® (Curcumina)', dose: '250mg' },
      { name: 'Pycnogenol® (Pinus pinaster)', dose: '50mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '2 cápsulas ao dia, com almoço',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição gordurosa. Curcumina e pycnogenol reduzem inflamação que prejudica conversão T4→T3.',
  },

  // --- Conceito 2: Pulso Vital — Thyroid hormone synthesis (iodine/selenium) ---
  {
    id: 'tireoide-2-ess', name: 'Pulso Vital · Essencial', category: 'tireoide', tier: 'essencial',
    ingredients: [
      { name: 'Iodo (iodeto de potássio)', dose: '150mcg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'L-Tirosina', dose: '500mg' },
    ],
    posology: '1 cápsula pela manhã, em jejum',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum com água. Não exceder dose de iodo sem monitoramento laboratorial.',
  },
  {
    id: 'tireoide-2-int', name: 'Pulso Vital · Intermediário', category: 'tireoide', tier: 'intermediario',
    ingredients: [
      { name: 'Iodo (iodeto de potássio)', dose: '200mcg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'L-Tirosina', dose: '750mg' },
      { name: 'Cobre Bisglicinato', dose: '1mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
      { name: 'Vitamina C', dose: '250mg' },
    ],
    posology: '1 cápsula pela manhã, em jejum',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum, 30 min antes do café. Monitorar TSH e T4L a cada 60 dias.',
  },
  {
    id: 'tireoide-2-pre', name: 'Pulso Vital · Premium', category: 'tireoide', tier: 'premium',
    ingredients: [
      { name: 'Iodo (iodeto de potássio)', dose: '200mcg' },
      { name: 'Selênio (selenometionina)', dose: '100mcg' },
      { name: 'L-Tirosina', dose: '1.000mg' },
      { name: 'Cobre Bisglicinato', dose: '1mg' },
      { name: 'Vitamina B6 (P5P)', dose: '25mg' },
      { name: 'Vitamina C lipossomal', dose: '500mg' },
      { name: 'Longvida® (Curcumina)', dose: '400mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
      { name: 'Vitamina E (tocotrienóis)', dose: '100mg' },
    ],
    posology: '2 cápsulas pela manhã, em jejum',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum. Suporte completo à síntese tireoidiana. Contraindicado em hipertireoidismo.',
  },

  // --- Conceito 3: Escudo Tireoidiano — Autoimmune thyroid protection ---
  {
    id: 'tireoide-3-ess', name: 'Escudo Tireoidiano · Essencial', category: 'tireoide', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'N-Acetil-Cisteína (NAC)', dose: '600mg' },
    ],
    posology: '1 cápsula ao dia, com almoço',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição gordurosa. Indicado para Hashimoto com anti-TPO elevado.',
  },
  {
    id: 'tireoide-3-int', name: 'Escudo Tireoidiano · Intermediário', category: 'tireoide', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'N-Acetil-Cisteína (NAC)', dose: '600mg' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '1.000mg' },
      { name: 'Vitamina K2 (MK-7)', dose: '100mcg' },
      { name: 'Zinco Bisglicinato', dose: '15mg' },
    ],
    posology: '2 cápsulas ao dia, com almoço',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição gordurosa. Anti-inflamatório e imunomodulador. Monitorar anti-TPO e anti-TG.',
  },
  {
    id: 'tireoide-3-pre', name: 'Escudo Tireoidiano · Premium', category: 'tireoide', tier: 'premium',
    ingredients: [
      { name: 'Vitamina D3', dose: '10.000UI' },
      { name: 'Selênio (selenometionina)', dose: '200mcg' },
      { name: 'N-Acetil-Cisteína (NAC)', dose: '1.200mg' },
      { name: 'Ômega-3 (EPA/DHA)', dose: '2.000mg' },
      { name: 'Vitamina K2 (MK-7)', dose: '200mcg' },
      { name: 'Meriva® (Curcumina fitossômica)', dose: '500mg' },
      { name: 'Pycnogenol® (Pinus pinaster)', dose: '100mg' },
      { name: 'Glutationa reduzida', dose: '250mg' },
      { name: 'Vitamina A (retinol)', dose: '5.000UI' },
    ],
    posology: '3 cápsulas ao dia, com almoço',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeição gordurosa. Protocolo autoimune tireoidiano. Dosar 25-OH-D a cada 3 meses (alvo: 60-80 ng/mL).',
  },

  // --- Conceito 4: Centelha Metabólica — Subclinical hypothyroidism support ---
  {
    id: 'tireoide-4-ess', name: 'Centelha Metabólica · Essencial', category: 'tireoide', tier: 'essencial',
    ingredients: [
      { name: 'Ashwagandha (extrato padronizado)', dose: '300mg' },
      { name: 'Zinco Quelato', dose: '20mg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
    ],
    posology: '1 cápsula pela manhã, com café',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar com café da manhã. Ashwagandha demonstrou reduzir TSH em hipotireoidismo subclínico.',
  },
  {
    id: 'tireoide-4-int', name: 'Centelha Metabólica · Intermediário', category: 'tireoide', tier: 'intermediario',
    ingredients: [
      { name: 'Ashwagandha (extrato padronizado)', dose: '600mg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '1.000mcg' },
      { name: 'Ferro Bisglicinato', dose: '15mg' },
      { name: 'Coleus forskohlii', dose: '250mg' },
    ],
    posology: '2 cápsulas pela manhã, com café',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com café da manhã. Separar 4h da levotiroxina, se em uso. Forskolina estimula AMPc tireoidiano.',
  },
  {
    id: 'tireoide-4-pre', name: 'Centelha Metabólica · Premium', category: 'tireoide', tier: 'premium',
    ingredients: [
      { name: 'KSM-66® (Ashwagandha)', dose: '600mg' },
      { name: 'Zinco Bisglicinato', dose: '30mg' },
      { name: 'Vitamina B12 (metilcobalamina)', dose: '2.000mcg' },
      { name: 'Ferro Bisglicinato', dose: '15mg' },
      { name: 'Coleus forskohlii', dose: '250mg' },
      { name: 'Kaneka Q10® (Ubiquinol)', dose: '100mg' },
      { name: 'Guggul (Commiphora mukul)', dose: '500mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '2 cápsulas pela manhã, com café',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com café da manhã. Separar 4h da levotiroxina. Guggul estimula conversão T4→T3 e captação de iodo.',
  },

  // --- Conceito 5: Equilíbrio Sutil — Thyroid-adrenal axis balance ---
  {
    id: 'tireoide-5-ess', name: 'Equilíbrio Sutil · Essencial', category: 'tireoide', tier: 'essencial',
    ingredients: [
      { name: 'Rhodiola rosea', dose: '200mg' },
      { name: 'Magnésio Malato', dose: '300mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '250mg' },
    ],
    posology: '1 cápsula pela manhã, em jejum',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum. Para pacientes com fadiga adrenal associada a hipotireoidismo.',
  },
  {
    id: 'tireoide-5-int', name: 'Equilíbrio Sutil · Intermediário', category: 'tireoide', tier: 'intermediario',
    ingredients: [
      { name: 'Rhodiola rosea', dose: '300mg' },
      { name: 'Magnésio Malato', dose: '300mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '500mg' },
      { name: 'Vitamina C', dose: '1.000mg' },
      { name: 'Holy Basil (Ocimum sanctum)', dose: '300mg' },
      { name: 'Fosfatidilserina', dose: '100mg' },
    ],
    posology: '2 cápsulas pela manhã, em jejum',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum. Modulação bidirecional do eixo tireoide-adrenal. Ideal para fadiga matinal intensa.',
  },
  {
    id: 'tireoide-5-pre', name: 'Equilíbrio Sutil · Premium', category: 'tireoide', tier: 'premium',
    ingredients: [
      { name: 'Rhodiola rosea (3% rosavinas)', dose: '400mg' },
      { name: 'Magnésio Malato', dose: '300mg' },
      { name: 'Ácido Pantotênico (B5)', dose: '500mg' },
      { name: 'Vitamina C lipossomal', dose: '1.000mg' },
      { name: 'Holy Basil (Ocimum sanctum)', dose: '300mg' },
      { name: 'Sharp-PS® (Fosfatidilserina)', dose: '200mg' },
      { name: 'Sensoril® (Ashwagandha)', dose: '125mg' },
      { name: 'Schisandra chinensis', dose: '250mg' },
      { name: 'Complexo B metilado', dose: '1 dose' },
    ],
    posology: '3 cápsulas pela manhã, em jejum',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar em jejum. Protocolo eixo tireoide-adrenal. Dosar cortisol salivar 4 pontos e TSH/T3L/T4L antes de iniciar.',
  },

  // ============================================================
  // INTESTINO (Gut) — 5 concepts × 3 tiers = 15 frascos
  // ============================================================

  // --- Conceito 1: Flora Viva — Microbiome diversity (probiotics) ---
  {
    id: 'intestino-1-ess', name: 'Flora Viva · Essencial', category: 'intestino', tier: 'essencial',
    ingredients: [
      { name: 'Lactobacillus rhamnosus GG', dose: '10 bilhões UFC' },
      { name: 'Bifidobacterium lactis', dose: '10 bilhões UFC' },
      { name: 'Frutooligossacarídeos (FOS)', dose: '3.000mg' },
    ],
    posology: '1 sachê ao dia, diluído em água gelada',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água fria (nunca quente). Tomar em jejum ou antes de dormir. Armazenar em geladeira.',
  },
  {
    id: 'intestino-1-int', name: 'Flora Viva · Intermediário', category: 'intestino', tier: 'intermediario',
    ingredients: [
      { name: 'Lactobacillus rhamnosus GG', dose: '10 bilhões UFC' },
      { name: 'Bifidobacterium lactis', dose: '10 bilhões UFC' },
      { name: 'Lactobacillus acidophilus', dose: '5 bilhões UFC' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
      { name: 'Frutooligossacarídeos (FOS)', dose: '5.000mg' },
    ],
    posology: '1 sachê ao dia, diluído em água gelada',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água fria. Saccharomyces boulardii é termorresistente e auxilia em diarreia. Refrigerar.',
  },
  {
    id: 'intestino-1-pre', name: 'Flora Viva · Premium', category: 'intestino', tier: 'premium',
    ingredients: [
      { name: 'Lactobacillus rhamnosus GG', dose: '10 bilhões UFC' },
      { name: 'Bifidobacterium lactis', dose: '10 bilhões UFC' },
      { name: 'Lactobacillus acidophilus', dose: '5 bilhões UFC' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
      { name: 'Bifidobacterium longum', dose: '5 bilhões UFC' },
      { name: 'Lactobacillus plantarum', dose: '5 bilhões UFC' },
      { name: 'SunFiber® (Guar gum parcialmente hidrolisada)', dose: '5.000mg' },
      { name: 'Zinco Carnosina', dose: '75mg' },
    ],
    posology: '1 sachê ao dia, diluído em água gelada',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água fria. 50 bilhões UFC multi-cepas. SunFiber age como prebiótico seletivo. Refrigerar.',
  },

  // --- Conceito 2: Muralha Intestinal — Intestinal permeability (leaky gut) ---
  {
    id: 'intestino-2-ess', name: 'Muralha Intestinal · Essencial', category: 'intestino', tier: 'essencial',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'Zinco Carnosina', dose: '75mg' },
      { name: 'Vitamina A (retinol)', dose: '5.000UI' },
    ],
    posology: '1 sachê ao dia, diluído em 200ml de água, em jejum',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água e tomar em jejum matinal. L-Glutamina é combustível das células intestinais.',
  },
  {
    id: 'intestino-2-int', name: 'Muralha Intestinal · Intermediário', category: 'intestino', tier: 'intermediario',
    ingredients: [
      { name: 'L-Glutamina', dose: '10.000mg' },
      { name: 'Zinco Carnosina', dose: '75mg' },
      { name: 'Vitamina A (retinol)', dose: '10.000UI' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'N-Acetil-Glucosamina', dose: '500mg' },
      { name: 'Aloe vera (extrato interno)', dose: '200mg' },
    ],
    posology: '1 sachê ao dia, diluído em 200ml de água, em jejum',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água e tomar em jejum. Protocolo de reparo de barreira intestinal. Manter dieta anti-inflamatória.',
  },
  {
    id: 'intestino-2-pre', name: 'Muralha Intestinal · Premium', category: 'intestino', tier: 'premium',
    ingredients: [
      { name: 'L-Glutamina', dose: '10.000mg' },
      { name: 'Zinco Carnosina', dose: '150mg' },
      { name: 'Vitamina A (retinol)', dose: '10.000UI' },
      { name: 'Vitamina D3', dose: '5.000UI' },
      { name: 'N-Acetil-Glucosamina', dose: '700mg' },
      { name: 'Colágeno tipo III hidrolisado', dose: '2.500mg' },
      { name: 'Meriva® (Curcumina fitossômica)', dose: '500mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Butirato de sódio', dose: '300mg' },
    ],
    posology: '1 sachê ao dia, diluído em 250ml de água, em jejum',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água e tomar em jejum. Protocolo completo de reparo de permeabilidade. Associar a dieta de exclusão.',
  },

  // --- Conceito 3: Jardim Interior — Prebiotic/fiber support ---
  {
    id: 'intestino-3-ess', name: 'Jardim Interior · Essencial', category: 'intestino', tier: 'essencial',
    ingredients: [
      { name: 'Psyllium (Plantago ovata)', dose: '5.000mg' },
      { name: 'Inulina', dose: '3.000mg' },
      { name: 'Pectina de maçã', dose: '2.000mg' },
    ],
    posology: '1 sachê diluído em 300ml de água, após o jantar',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em água abundante e beber imediatamente. Aumentar ingesta hídrica ao longo do dia (mín. 2L).',
  },
  {
    id: 'intestino-3-int', name: 'Jardim Interior · Intermediário', category: 'intestino', tier: 'intermediario',
    ingredients: [
      { name: 'Psyllium (Plantago ovata)', dose: '5.000mg' },
      { name: 'Inulina', dose: '5.000mg' },
      { name: 'Pectina de maçã', dose: '2.000mg' },
      { name: 'Amido resistente (banana verde)', dose: '5.000mg' },
      { name: 'Beta-glucana de aveia', dose: '3.000mg' },
    ],
    posology: '1 sachê diluído em 300ml de água, após o jantar',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em bastante água. Introduzir gradualmente se não acostumado com fibras. Beber 2-3L de água/dia.',
  },
  {
    id: 'intestino-3-pre', name: 'Jardim Interior · Premium', category: 'intestino', tier: 'premium',
    ingredients: [
      { name: 'Psyllium (Plantago ovata)', dose: '5.000mg' },
      { name: 'Inulina', dose: '5.000mg' },
      { name: 'Pectina de maçã', dose: '2.000mg' },
      { name: 'Amido resistente (banana verde)', dose: '5.000mg' },
      { name: 'Beta-glucana de aveia', dose: '3.000mg' },
      { name: 'SunFiber® (Guar gum parcialmente hidrolisada)', dose: '5.000mg' },
      { name: 'Polidextrose', dose: '3.000mg' },
      { name: 'Arabinogalactana (Larix)', dose: '1.500mg' },
    ],
    posology: '1 sachê diluído em 400ml de água, após o jantar',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em bastante água e beber imediatamente. SunFiber não causa flatulência excessiva. Beber 3L de água/dia.',
  },

  // --- Conceito 4: Digestão Plena — Digestive enzyme support ---
  {
    id: 'intestino-4-ess', name: 'Digestão Plena · Essencial', category: 'intestino', tier: 'essencial',
    ingredients: [
      { name: 'Betaína HCl', dose: '650mg' },
      { name: 'Pancreatina (amilase, lipase, protease)', dose: '250mg' },
      { name: 'Pepsina', dose: '40mg' },
    ],
    posology: '1 cápsula no início das 2 refeições principais',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar no início da refeição (não em jejum). Contraindicado em úlcera gástrica ativa.',
  },
  {
    id: 'intestino-4-int', name: 'Digestão Plena · Intermediário', category: 'intestino', tier: 'intermediario',
    ingredients: [
      { name: 'Betaína HCl', dose: '650mg' },
      { name: 'Pancreatina (amilase, lipase, protease)', dose: '350mg' },
      { name: 'Pepsina', dose: '40mg' },
      { name: 'Bromelina', dose: '250mg' },
      { name: 'Bile bovina', dose: '100mg' },
      { name: 'Gengibre (Zingiber officinale)', dose: '200mg' },
    ],
    posology: '1 cápsula no início das 2-3 refeições principais',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar no início de cada refeição. Bile bovina auxilia digestão de gorduras. Evitar em gastrite erosiva.',
  },
  {
    id: 'intestino-4-pre', name: 'Digestão Plena · Premium', category: 'intestino', tier: 'premium',
    ingredients: [
      { name: 'Betaína HCl', dose: '650mg' },
      { name: 'Pancreatina (amilase, lipase, protease)', dose: '500mg' },
      { name: 'Pepsina', dose: '60mg' },
      { name: 'Bromelina', dose: '300mg' },
      { name: 'Bile bovina', dose: '150mg' },
      { name: 'Gengibre (Zingiber officinale)', dose: '200mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
      { name: 'Lactase', dose: '4.500 ALU' },
      { name: 'DPP-IV (enzima para glúten)', dose: '100mg' },
    ],
    posology: '1-2 cápsulas no início das refeições principais',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar no início da refeição. DPP-IV auxilia digestão incidental de glúten (não substitui dieta GF em celíacos).',
  },

  // --- Conceito 5: Paz Abdominal — IBS / SIBO support ---
  {
    id: 'intestino-5-ess', name: 'Paz Abdominal · Essencial', category: 'intestino', tier: 'essencial',
    ingredients: [
      { name: 'Óleo de hortelã-pimenta (entérico)', dose: '200mg' },
      { name: 'Gengibre (Zingiber officinale)', dose: '300mg' },
      { name: 'Carvão ativado', dose: '250mg' },
    ],
    posology: '1 cápsula entérica 2x ao dia, entre refeições',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar entre refeições. Cápsula entérica — não mastigar. Separar 2h de medicamentos.',
  },
  {
    id: 'intestino-5-int', name: 'Paz Abdominal · Intermediário', category: 'intestino', tier: 'intermediario',
    ingredients: [
      { name: 'Óleo de hortelã-pimenta (entérico)', dose: '200mg' },
      { name: 'Gengibre (Zingiber officinale)', dose: '300mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Orégano (Origanum vulgare, óleo)', dose: '150mg' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
    ],
    posology: '1 cápsula 2x ao dia, entre refeições',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar entre refeições. Berberina tem ação antimicrobiana seletiva. Ideal para SIBO por hidrogênio.',
  },
  {
    id: 'intestino-5-pre', name: 'Paz Abdominal · Premium', category: 'intestino', tier: 'premium',
    ingredients: [
      { name: 'Óleo de hortelã-pimenta (entérico)', dose: '200mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Orégano (Origanum vulgare, óleo)', dose: '200mg' },
      { name: 'Saccharomyces boulardii', dose: '5 bilhões UFC' },
      { name: 'Alicina (extrato de alho estabilizado)', dose: '180mg' },
      { name: 'N-Acetil-Cisteína (NAC)', dose: '600mg' },
      { name: 'Meriva® (Curcumina fitossômica)', dose: '250mg' },
      { name: 'Butirato de sódio', dose: '300mg' },
    ],
    posology: '2 cápsulas 2x ao dia, entre refeições',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar entre refeições. Protocolo antimicrobiano intestinal. Associar a dieta Low-FODMAP por 4-6 semanas.',
  },

  // ============================================================
  // GORDURA (Fat Loss) — 5 concepts × 3 tiers = 15 frascos
  // ============================================================

  // --- Conceito 1: Chama Interior — Thermogenesis activation ---
  {
    id: 'gordura-1-ess', name: 'Chama Interior · Essencial', category: 'gordura', tier: 'essencial',
    ingredients: [
      { name: 'Cafeína anidra', dose: '200mg' },
      { name: 'Chá verde (EGCG padronizado)', dose: '500mg' },
      { name: 'Capsaicina (pimenta caiena)', dose: '50mg' },
    ],
    posology: '1 cápsula pela manhã, antes do treino ou café',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 min antes do treino ou pela manhã. Não tomar após 14h. Contraindicado para sensíveis a cafeína.',
  },
  {
    id: 'gordura-1-int', name: 'Chama Interior · Intermediário', category: 'gordura', tier: 'intermediario',
    ingredients: [
      { name: 'Cafeína anidra', dose: '200mg' },
      { name: 'Chá verde (EGCG padronizado)', dose: '500mg' },
      { name: 'Capsaicina (pimenta caiena)', dose: '50mg' },
      { name: 'Tirosina', dose: '500mg' },
      { name: 'Gengibre (Zingiber officinale)', dose: '300mg' },
    ],
    posology: '1 cápsula pela manhã, antes do treino',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 min antes do treino com água. Tirosina potencializa ativação simpática. Evitar à noite.',
  },
  {
    id: 'gordura-1-pre', name: 'Chama Interior · Premium', category: 'gordura', tier: 'premium',
    ingredients: [
      { name: 'Cafeína anidra', dose: '200mg' },
      { name: 'Chá verde (EGCG padronizado)', dose: '500mg' },
      { name: 'Capsaicina (pimenta caiena)', dose: '50mg' },
      { name: 'Tirosina', dose: '750mg' },
      { name: 'Gengibre (Zingiber officinale)', dose: '300mg' },
      { name: 'BioPerine® (Piperina)', dose: '10mg' },
      { name: 'Kaneka Q10® (Ubiquinol)', dose: '100mg' },
      { name: 'Grains of Paradise (Aframomum melegueta)', dose: '40mg' },
    ],
    posology: '1 cápsula pela manhã, antes do treino',
    quantity: '30 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 min antes do treino. Grains of Paradise ativa tecido adiposo marrom. Hidratar-se bem.',
  },

  // --- Conceito 2: Cintura Fina — Visceral fat targeting ---
  {
    id: 'gordura-2-ess', name: 'Cintura Fina · Essencial', category: 'gordura', tier: 'essencial',
    ingredients: [
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ômega-3 (EPA)', dose: '1.000mg' },
      { name: 'Vitamina D3', dose: '2.000UI' },
    ],
    posology: '1 cápsula 2x ao dia, com refeições',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço e jantar. Berberina atua como metformina-like. Monitorar glicemia.',
  },
  {
    id: 'gordura-2-int', name: 'Cintura Fina · Intermediário', category: 'gordura', tier: 'intermediario',
    ingredients: [
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ômega-3 (EPA)', dose: '1.500mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Ácido alfa-lipóico', dose: '300mg' },
      { name: 'Cromo Picolinato', dose: '400mcg' },
    ],
    posology: '2 cápsulas 2x ao dia, com refeições',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com almoço e jantar. Protocolo para gordura visceral e resistência insulínica. Associar exercício aeróbico.',
  },
  {
    id: 'gordura-2-pre', name: 'Cintura Fina · Premium', category: 'gordura', tier: 'premium',
    ingredients: [
      { name: 'Berberina', dose: '500mg' },
      { name: 'Ômega-3 (EPA concentrado)', dose: '2.000mg' },
      { name: 'Vitamina D3', dose: '4.000UI' },
      { name: 'Ácido alfa-lipóico', dose: '600mg' },
      { name: 'Cromo Picolinato', dose: '400mcg' },
      { name: 'CurcuWIN® (Curcumina)', dose: '500mg' },
      { name: 'Pycnogenol® (Pinus pinaster)', dose: '100mg' },
      { name: 'Vitamina K2 (MK-7)', dose: '100mcg' },
    ],
    posology: '3 cápsulas 2x ao dia, com refeições',
    quantity: '180 cápsulas', duration: '1 mês',
    instructions: 'Tomar com refeições gordurosas. Anti-inflamatório visceral. Monitorar HOMA-IR, PCR-us e circunferência abdominal.',
  },

  // --- Conceito 3: Metabolismo Ativo — Insulin sensitivity / glucose partitioning ---
  {
    id: 'gordura-3-ess', name: 'Metabolismo Ativo · Essencial', category: 'gordura', tier: 'essencial',
    ingredients: [
      { name: 'Cromo Picolinato', dose: '400mcg' },
      { name: 'Canela (Cinnamomum verum, extrato)', dose: '500mg' },
      { name: 'Ácido alfa-lipóico', dose: '300mg' },
    ],
    posology: '1 cápsula 2x ao dia, antes das refeições',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar 15 min antes das refeições principais. Melhora partição de glicose para o músculo.',
  },
  {
    id: 'gordura-3-int', name: 'Metabolismo Ativo · Intermediário', category: 'gordura', tier: 'intermediario',
    ingredients: [
      { name: 'Cromo Picolinato', dose: '600mcg' },
      { name: 'Canela (Cinnamomum verum, extrato)', dose: '500mg' },
      { name: 'Ácido alfa-lipóico', dose: '600mg' },
      { name: 'Magnésio Bisglicinato', dose: '300mg' },
      { name: 'Vanádio (sulfato de vanadil)', dose: '100mcg' },
    ],
    posology: '1 cápsula 2x ao dia, antes das refeições',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar antes do almoço e jantar. Protocolo insulino-sensibilizante. Monitorar glicemia e insulina basal.',
  },
  {
    id: 'gordura-3-pre', name: 'Metabolismo Ativo · Premium', category: 'gordura', tier: 'premium',
    ingredients: [
      { name: 'Cromo Picolinato', dose: '600mcg' },
      { name: 'Canela (Cinnamomum verum, extrato)', dose: '500mg' },
      { name: 'Ácido alfa-lipóico (forma R)', dose: '300mg' },
      { name: 'Magnésio Bisglicinato', dose: '300mg' },
      { name: 'Vanádio (sulfato de vanadil)', dose: '100mcg' },
      { name: 'Banaba (ácido corosólico 1%)', dose: '250mg' },
      { name: 'Gymnema sylvestre (75% ác. gimnêmico)', dose: '400mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
      { name: 'Taurina', dose: '1.000mg' },
    ],
    posology: '2 cápsulas 2x ao dia, antes das refeições',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar 15 min antes das refeições. Gymnema reduz absorção de açúcar. Monitorar HOMA-IR e hemoglobina glicada.',
  },

  // --- Conceito 4: Quebra-Gordura — Lipolysis / fat oxidation ---
  {
    id: 'gordura-4-ess', name: 'Quebra-Gordura · Essencial', category: 'gordura', tier: 'essencial',
    ingredients: [
      { name: 'L-Carnitina (tartarato)', dose: '1.000mg' },
      { name: 'CLA (ácido linoléico conjugado)', dose: '1.600mg' },
      { name: 'Chá verde (EGCG padronizado)', dose: '300mg' },
    ],
    posology: '2 cápsulas pela manhã, antes do treino',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar antes do exercício aeróbico. L-Carnitina transporta ácidos graxos para a mitocôndria.',
  },
  {
    id: 'gordura-4-int', name: 'Quebra-Gordura · Intermediário', category: 'gordura', tier: 'intermediario',
    ingredients: [
      { name: 'Acetil-L-Carnitina', dose: '1.500mg' },
      { name: 'CLA (ácido linoléico conjugado)', dose: '2.400mg' },
      { name: 'Chá verde (EGCG padronizado)', dose: '500mg' },
      { name: 'Forskolina (Coleus forskohlii)', dose: '250mg' },
      { name: 'Coenzima Q10', dose: '100mg' },
    ],
    posology: '2 cápsulas pela manhã, antes do treino',
    quantity: '60 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 min antes do exercício. Forskolina ativa adenilato ciclase e lipase hormônio-sensível.',
  },
  {
    id: 'gordura-4-pre', name: 'Quebra-Gordura · Premium', category: 'gordura', tier: 'premium',
    ingredients: [
      { name: 'Acetil-L-Carnitina', dose: '2.000mg' },
      { name: 'CLA (ácido linoléico conjugado)', dose: '3.200mg' },
      { name: 'Chá verde (EGCG padronizado)', dose: '500mg' },
      { name: 'Forskolina (Coleus forskohlii)', dose: '250mg' },
      { name: 'Kaneka Q10® (Ubiquinol)', dose: '100mg' },
      { name: 'Grains of Paradise (Aframomum melegueta)', dose: '40mg' },
      { name: 'Fucoxantina', dose: '5mg' },
      { name: 'BioPerine® (Piperina)', dose: '10mg' },
    ],
    posology: '3 cápsulas pela manhã, antes do treino',
    quantity: '90 cápsulas', duration: '1 mês',
    instructions: 'Tomar 30 min antes do treino aeróbico. Fucoxantina ativa UCP1. Associar a treino HIIT ou zona 2.',
  },

  // --- Conceito 5: Saciedade Plena — Appetite control / leptin signaling ---
  {
    id: 'gordura-5-ess', name: 'Saciedade Plena · Essencial', category: 'gordura', tier: 'essencial',
    ingredients: [
      { name: 'Glucomanano (Konjac)', dose: '1.500mg' },
      { name: '5-HTP', dose: '100mg' },
      { name: 'Cromo Picolinato', dose: '200mcg' },
    ],
    posology: '2 cápsulas 30 min antes do almoço e jantar',
    quantity: '120 cápsulas', duration: '1 mês',
    instructions: 'Tomar com 500ml de água 30 min antes da refeição. Glucomanano expande no estômago. Hidratação essencial.',
  },
  {
    id: 'gordura-5-int', name: 'Saciedade Plena · Intermediário', category: 'gordura', tier: 'intermediario',
    ingredients: [
      { name: 'Glucomanano (Konjac)', dose: '2.000mg' },
      { name: '5-HTP', dose: '100mg' },
      { name: 'Cromo Picolinato', dose: '200mcg' },
      { name: 'Griffonia simplicifolia', dose: '200mg' },
      { name: 'Garcinia cambogia (HCA 60%)', dose: '500mg' },
      { name: 'Spirulina', dose: '2.000mg' },
    ],
    posology: '1 sachê diluído em 400ml de água, 30 min antes do almoço',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em bastante água e beber imediatamente. Spirulina é rica em proteína e promove saciedade.',
  },
  {
    id: 'gordura-5-pre', name: 'Saciedade Plena · Premium', category: 'gordura', tier: 'premium',
    ingredients: [
      { name: 'Glucomanano (Konjac)', dose: '2.000mg' },
      { name: '5-HTP', dose: '100mg' },
      { name: 'Cromo Picolinato', dose: '400mcg' },
      { name: 'Garcinia cambogia (HCA 60%)', dose: '750mg' },
      { name: 'Spirulina', dose: '3.000mg' },
      { name: 'SunFiber® (Guar gum parcialmente hidrolisada)', dose: '5.000mg' },
      { name: 'Affron® (extrato de açafrão)', dose: '88,5mg' },
      { name: 'Gymnema sylvestre (75% ác. gimnêmico)', dose: '400mg' },
      { name: 'BioPerine® (Piperina)', dose: '5mg' },
    ],
    posology: '1 sachê diluído em 500ml de água, 30 min antes do almoço',
    quantity: '30 sachês', duration: '1 mês',
    instructions: 'Diluir em bastante água e beber imediatamente. Affron em dose alta (88,5mg) reduz compulsão alimentar. Não associar 5-HTP com ISRS.',
  },
];
