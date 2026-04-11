import type { Frasco, Protocol } from '../types';
import { FRASCOS_GROUP1 } from './frascos-group1';
import { FRASCOS_GROUP2 } from './frascos-group2';
import { FRASCOS_GROUP3 } from './frascos-group3';
import { FRASCOS_GROUP4 } from './frascos-group4';
import { FRASCOS_FARMACIA } from './frascos-farmacia';
import { FRASCOS_GROWTH } from './frascos-growth';
import { FRASCOS_DOCTORSFIRST } from './frascos-doctorsfirst';

// ═══════════════════════════════════════════════════════════════════════════
// FRASCOS — 97 base + 300 categorias (frascos-group1..4)
// ═══════════════════════════════════════════════════════════════════════════

const BASE_FRASCOS: Frasco[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // JEJUM — 33 frascos (11 conceitos x 3 tiers)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── CONCEITO 1 — REPARO DE MUCOSA INTESTINAL ────────────────────────────
  { id: 'j1-ess', name: 'Alvorada Intestinal · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 20-30 min antes de comer.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Tomar frio ou em temperatura ambiente.',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' }, { name: 'Glicina', dose: '2.000mg' },
      { name: 'Vitamina C tamponada', dose: '500mg' }, { name: 'Taurina', dose: '500mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j1-int', name: 'Alvorada Intestinal · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 20-30 min antes de comer.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Tomar frio ou em temperatura ambiente.',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' }, { name: 'Glicina', dose: '2.000mg' },
      { name: 'NAC (N-Acetilcisteína)', dose: '500mg' }, { name: 'Taurina', dose: '1.000mg' },
      { name: 'Vitamina C tamponada', dose: '500mg' }, { name: 'Zinco bisglicinato', dose: '15mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j1-pre', name: 'Alvorada Intestinal · Premium', category: 'jejum', tier: 'premium',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 20-30 min antes de comer.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Tomar frio ou em temperatura ambiente.',
    ingredients: [
      { name: 'L-Glutamina', dose: '5.000mg' }, { name: 'Glicina', dose: '2.000mg' },
      { name: 'LacFer™ (Lactoferrina patenteada)', dose: '100mg' },
      { name: 'Carnosina de zinco', dose: '75mg' }, { name: 'NAC (N-Acetilcisteína)', dose: '500mg' },
      { name: 'BIOintestil® (extrato patenteado)', dose: '500mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Vitamina C tamponada', dose: '500mg' }, { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },

  // ── CONCEITO 2 — ATIVAÇÃO METABÓLICA ────────────────────────────────────
  { id: 'j2-ess', name: 'Ignição Metabólica · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 cápsula em jejum, junto com o primeiro copo de água da manhã.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Não tomar à noite. Pode causar leve aquecimento corporal.',
    ingredients: [
      { name: 'Berberina HCl', dose: '500mg' }, { name: 'Cromo picolinato', dose: '200mcg' },
      { name: 'Extrato de gengibre (5% gingeróis)', dose: '250mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j2-int', name: 'Ignição Metabólica · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 cápsula em jejum, junto com o primeiro copo de água da manhã.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Não tomar à noite. Monitorar glicemia em diabéticos.',
    ingredients: [
      { name: 'Berberina HCl', dose: '500mg' }, { name: 'Ácido alfa-lipoico', dose: '150mg' },
      { name: 'Cromo picolinato', dose: '200mcg' }, { name: 'Extrato de canela (20% polifenóis)', dose: '250mg' },
      { name: 'L-Carnitina tartarato', dose: '500mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j2-pre', name: 'Ignição Metabólica · Premium', category: 'jejum', tier: 'premium',
    posology: '1 cápsula em jejum, junto com o primeiro copo de água da manhã.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Não tomar à noite. Monitorar glicemia em diabéticos.',
    ingredients: [
      { name: 'GlucoVantage® (di-hidroberberina patenteada)', dose: '100mg' },
      { name: 'Crominex® 3+ (cromo patenteado)', dose: '200mcg cromo' },
      { name: 'Eriomin® (flavonoides cítricos patenteados)', dose: '250mg' },
      { name: 'Ácido alfa-lipoico R+', dose: '100mg' },
      { name: 'enXtra® (extrato de galanga patenteado)', dose: '300mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },

  // ── CONCEITO 3 — DETOX & ANTIOXIDANTE ───────────────────────────────────
  { id: 'j3-ess', name: 'Pureza Matinal · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 sachê em jejum diluído em 200ml de água morna.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Evitar uso concomitante com paracetamol.',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' }, { name: 'Vitamina C tamponada', dose: '1.000mg' },
      { name: 'Selênio L-selenometionina', dose: '100mcg' }, { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j3-int', name: 'Pureza Matinal · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Pode causar odor levemente sulfuroso — normal e passageiro.',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' }, { name: 'Vitamina C tamponada', dose: '1.000mg' },
      { name: 'Ácido alfa-lipoico', dose: '150mg' }, { name: 'Selênio L-selenometionina', dose: '150mcg' },
      { name: 'Extrato de brócolis (sulforafano 0,5%)', dose: '200mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j3-pre', name: 'Pureza Matinal · Premium', category: 'jejum', tier: 'premium',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Armazenar em local fresco e seco.',
    ingredients: [
      { name: 'Setria® Glutationa reduzida (patenteada)', dose: '250mg' },
      { name: 'NAC (N-Acetilcisteína)', dose: '400mg' },
      { name: 'BroccoRaphanin® (sulforafano patenteado)', dose: '10mg' },
      { name: 'Pycnogenol® (casca de pinheiro patenteado)', dose: '50mg' },
      { name: 'Vitamina C tamponada', dose: '500mg' }, { name: 'Selênio L-selenometionina', dose: '100mcg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },

  // ── CONCEITO 4 — ANTI-INFLAMATÓRIO SISTÊMICO ───────────────────────────
  { id: 'j4-ess', name: 'Escudo Silencioso · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Ingerir com água. Evitar em pacientes com coagulopatia.',
    ingredients: [
      { name: 'Cúrcuma extrato seco (95% curcuminoides)', dose: '500mg' },
      { name: 'Piperina (20:1)', dose: '5mg' },
      { name: 'Gengibre extrato seco (5% gingeróis)', dose: '250mg' },
      { name: 'Boswellia serrata extrato seco (65% ácidos)', dose: '200mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j4-int', name: 'Escudo Silencioso · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Ingerir com água. Evitar em pacientes com coagulopatia.',
    ingredients: [
      { name: 'Cúrcuma extrato seco (95% curcuminoides)', dose: '500mg' },
      { name: 'Quercetina diidratada', dose: '300mg' },
      { name: 'Boswellia serrata extrato seco (65% ácidos)', dose: '300mg' },
      { name: 'Extrato de gengibre (5% gingeróis)', dose: '200mg' },
      { name: 'Piperina (20:1)', dose: '5mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j4-pre', name: 'Escudo Silencioso · Premium', category: 'jejum', tier: 'premium',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Armazenar em local fresco e seco. Evitar em coagulopatia.',
    ingredients: [
      { name: 'CurQfen® (curcumina + feno-grego patenteados)', dose: '500mg' },
      { name: 'Miodesin® (extrato patenteado antiinflamatório)', dose: '250mg' },
      { name: 'Pycnogenol® (casca de pinheiro patenteado)', dose: '50mg' },
      { name: 'ResviTech™ (resveratrol patenteado)', dose: '100mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },

  // ── CONCEITO 5 — BARREIRA & IMUNIDADE INTESTINAL ────────────────────────
  { id: 'j5-ess', name: 'Guardião da Barreira · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 15 min.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Tomar frio ou em temperatura ambiente.',
    ingredients: [
      { name: 'L-Glutamina', dose: '3.000mg' }, { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Vitamina D3', dose: '2.000UI' }, { name: 'Zinco bisglicinato', dose: '15mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j5-int', name: 'Guardião da Barreira · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 15 min.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Tomar em temperatura ambiente.',
    ingredients: [
      { name: 'L-Glutamina', dose: '4.000mg' }, { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Butirato de magnésio', dose: '500mg' }, { name: 'Carnosina de zinco', dose: '75mg' },
      { name: 'Vitamina D3', dose: '2.000UI' }, { name: 'NAC (N-Acetilcisteína)', dose: '300mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j5-pre', name: 'Guardião da Barreira · Premium', category: 'jejum', tier: 'premium',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 15 min.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Tomar em temperatura ambiente. Armazenar ao abrigo da luz.',
    ingredients: [
      { name: 'LacFer™ (lactoferrina bovina patenteada)', dose: '150mg' },
      { name: 'Miodesin® (extrato patenteado)', dose: '250mg' },
      { name: 'BIOintestil® (blend intestinal patenteado)', dose: '500mg' },
      { name: 'Butirato de magnésio', dose: '500mg' }, { name: 'L-Glutamina', dose: '3.000mg' },
      { name: 'Carnosina de zinco', dose: '75mg' }, { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },

  // ── CONCEITO 6 — MICROBIOMA & PREBIÓTICO ────────────────────────────────
  { id: 'j6-ess', name: 'Terra Fértil · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 sachê em jejum, diluído em 200ml de água fria. Beber lentamente.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Pode causar leve distensão abdominal nas primeiras semanas.',
    ingredients: [
      { name: 'Inulina (chicória)', dose: '3.000mg' }, { name: 'FOS (frutooligossacarídeos)', dose: '2.000mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j6-int', name: 'Terra Fértil · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 sachê em jejum, diluído em 200ml de água fria.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Pode causar leve distensão abdominal nas primeiras semanas.',
    ingredients: [
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '3.000mg' },
      { name: 'Inulina (chicória)', dose: '2.000mg' }, { name: 'Pectina cítrica', dose: '1.000mg' },
      { name: 'Beta-glucana (aveia)', dose: '500mg' }, { name: 'FOS (frutooligossacarídeos)', dose: '1.500mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j6-pre', name: 'Terra Fértil · Premium', category: 'jejum', tier: 'premium',
    posology: '1 sachê em jejum, diluído em 200ml de água fria.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Armazenar em local fresco e seco. Refrigerar após aberto.',
    ingredients: [
      { name: 'BIOintestil® (blend prebiótico patenteado)', dose: '1.000mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Pectina cítrica modificada', dose: '1.500mg' }, { name: 'Beta-glucana (aveia)', dose: '500mg' },
      { name: 'L-Glutamina', dose: '2.000mg' }, { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },

  // ── CONCEITO 7 — MITOCÔNDRIA & ENERGIA CELULAR ─────────────────────────
  { id: 'j7-ess', name: 'Centelha Celular · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Tomar preferencialmente antes das 10h. Pode aumentar disposição.',
    ingredients: [
      { name: 'CoQ10 (ubiquinona)', dose: '100mg' }, { name: 'Ácido alfa-lipoico', dose: '150mg' },
      { name: 'L-Carnitina tartarato', dose: '500mg' }, { name: 'Vitamina B2 (riboflavina)', dose: '25mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j7-int', name: 'Centelha Celular · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Tomar preferencialmente antes das 10h.',
    ingredients: [
      { name: 'Ubiquinol (forma reduzida CoQ10)', dose: '100mg' },
      { name: 'Ácido alfa-lipoico R+', dose: '150mg' }, { name: 'Acetil-L-Carnitina', dose: '500mg' },
      { name: 'PQQ (pirroloquinolina quinona)', dose: '10mg' },
      { name: 'Nicotinamida ribosídeo (NR)', dose: '150mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j7-pre', name: 'Centelha Celular · Premium', category: 'jejum', tier: 'premium',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Tomar preferencialmente antes das 10h. Armazenar ao abrigo da luz.',
    ingredients: [
      { name: 'Ubiquinol Kaneka® (CoQ10 patenteado)', dose: '150mg' },
      { name: 'Tru Niagen® (NR — nicotinamida ribosídeo)', dose: '300mg' },
      { name: 'PQQ (pirroloquinolina quinona)', dose: '20mg' }, { name: 'Acetil-L-Carnitina', dose: '500mg' },
      { name: 'ResviTech™ (resveratrol patenteado)', dose: '100mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },

  // ── CONCEITO 8 — ADAPTOGÊNIO & RESET DO CORTISOL ───────────────────────
  { id: 'j8-ess', name: 'Bússola Interna · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Preferir uso pela manhã. Não combinar com sedativos.',
    ingredients: [
      { name: 'Ashwagandha extrato seco KSM-66 (5% witanolídeos)', dose: '300mg' },
      { name: 'Rhodiola rosea extrato seco (3% rosavinas)', dose: '200mg' },
      { name: 'Pantotenato de cálcio (vitamina B5)', dose: '500mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j8-int', name: 'Bússola Interna · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Uso matinal. Não combinar com sedativos fortes.',
    ingredients: [
      { name: 'Ashwagandha extrato seco KSM-66 (5% witanolídeos)', dose: '300mg' },
      { name: 'Rhodiola rosea extrato seco (3% rosavinas)', dose: '300mg' },
      { name: 'Panax ginseng extrato seco (10% ginsenosídeos)', dose: '200mg' },
      { name: 'Pantotenato de cálcio (vitamina B5)', dose: '500mg' },
      { name: 'Vitamina C tamponada', dose: '300mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j8-pre', name: 'Bússola Interna · Premium', category: 'jejum', tier: 'premium',
    posology: '1 cápsula em jejum com 200ml de água.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Uso matinal. Armazenar em local fresco e seco.',
    ingredients: [
      { name: 'Sensoril® (ashwagandha patenteada — KSM+)', dose: '250mg' },
      { name: 'enXtra® (galanga patenteada — foco+energia)', dose: '300mg' },
      { name: 'Brain Factor-7® (extrato neuroprotege patenteado)', dose: '150mg' },
      { name: 'Pantotenato de cálcio (vitamina B5)', dose: '500mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },

  // ── CONCEITO 9 — CLAREZA MENTAL & COGNIÇÃO MATINAL ──────────────────────
  { id: 'j9-ess', name: 'Amanhecer Lúcido · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 cápsula em jejum. Pode combinar com café.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Tomar até as 10h para não interferir no sono.',
    ingredients: [
      { name: 'L-Teanina', dose: '200mg' }, { name: 'Bacopa monnieri extrato seco (50% bacosídeos)', dose: '300mg' },
      { name: 'Extrato de Ginkgo biloba (24% flavonoides)', dose: '120mg' },
      { name: 'Colina bitartarato', dose: '250mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j9-int', name: 'Amanhecer Lúcido · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 cápsula em jejum. Pode combinar com café.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Tomar até as 10h para não interferir no sono.',
    ingredients: [
      { name: 'Alpha-GPC (L-alfa-glicerilfosforilcolina)', dose: '300mg' },
      { name: 'L-Teanina', dose: '200mg' }, { name: 'Bacopa monnieri extrato seco (50% bacosídeos)', dose: '300mg' },
      { name: 'Extrato de Ginkgo biloba (24% flavonoides)', dose: '120mg' },
      { name: 'Vitamina B6 (piridoxal-5-fosfato)', dose: '25mg' }, { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },
  { id: 'j9-pre', name: 'Amanhecer Lúcido · Premium', category: 'jejum', tier: 'premium',
    posology: '1 cápsula em jejum. Pode combinar com café.',
    quantity: '60 cápsulas', duration: '2 meses', instructions: 'Tomar até as 10h. Armazenar ao abrigo da luz e umidade.',
    ingredients: [
      { name: 'Brain Factor-7® (nootrópico patenteado)', dose: '300mg' },
      { name: 'enXtra® (foco e clareza patenteados)', dose: '300mg' },
      { name: 'Cognizin® (citicolina patenteada)', dose: '250mg' },
      { name: 'Alpha-GPC (L-alfa-glicerilfosforilcolina)', dose: '200mg' },
      { name: 'Excipiente qsp', dose: '1 cápsula' }
    ]
  },

  // ── CONCEITO 10 — SACIEDADE & CONTROLE DO APETITE ───────────────────────
  { id: 'j10-ess', name: 'Âncora do Apetite · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 sachê em jejum diluído em 300ml de água. Beber devagar.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Beber bastante água ao longo do dia. Pode causar plenitude gástrica.',
    ingredients: [
      { name: 'L-Glutamina', dose: '3.000mg' }, { name: 'Glucomanana (konjac)', dose: '1.500mg' },
      { name: 'Extrato de canela (20% polifenóis)', dose: '500mg' }, { name: 'Cromo picolinato', dose: '200mcg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j10-int', name: 'Âncora do Apetite · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 sachê em jejum diluído em 300ml de água. Beber devagar.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Beber bastante água ao longo do dia.',
    ingredients: [
      { name: 'Glucomanana (konjac)', dose: '2.000mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'L-Glutamina', dose: '2.000mg' }, { name: 'L-Carnitina tartarato', dose: '500mg' },
      { name: 'Cromo picolinato', dose: '200mcg' }, { name: 'Extrato de canela (20% polifenóis)', dose: '300mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j10-pre', name: 'Âncora do Apetite · Premium', category: 'jejum', tier: 'premium',
    posology: '1 sachê/cápsula em jejum com 300ml de água. Beber devagar.',
    quantity: '60 unidades', duration: '2 meses', instructions: 'Beber bastante água. Monitorar glicemia em diabéticos.',
    ingredients: [
      { name: 'GlucoVantage® (di-hidroberberina patenteada)', dose: '150mg' },
      { name: 'CitrusiM® (extrato cítrico patenteado saciedade)', dose: '500mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Glucomanana (konjac)', dose: '1.500mg' },
      { name: 'Berganina® (berberina patenteada)', dose: '250mg' },
      { name: 'Crominex® 3+ (cromo patenteado)', dose: '200mcg cromo' },
      { name: 'Veículo para sachê qsp', dose: '1 unidade' }
    ]
  },

  // ── CONCEITO 11 — OÁSIS INTERIOR ────────────────────────────────────────
  { id: 'j11-ess', name: 'Oásis Interior · Essencial', category: 'jejum', tier: 'essencial',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 20 min antes de comer.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Usar gel interno da Aloe (sem aloin). Tomar frio ou em temperatura ambiente.',
    ingredients: [
      { name: 'Aloe vera extrato seco (gel interno, sem aloin)', dose: '300mg' },
      { name: 'L-Glutamina', dose: '3.000mg' }, { name: 'Glicina', dose: '1.500mg' },
      { name: 'Taurina', dose: '500mg' }, { name: 'Vitamina C tamponada', dose: '500mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j11-int', name: 'Oásis Interior · Intermediário', category: 'jejum', tier: 'intermediario',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 20-30 min antes de comer.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Aloe padronizada em acemanana (gel interno). Tomar frio ou em temperatura ambiente.',
    ingredients: [
      { name: 'Aloe vera extrato seco (padronizado em acemanana)', dose: '400mg' },
      { name: 'L-Glutamina', dose: '5.000mg' }, { name: 'Glicina', dose: '2.000mg' },
      { name: 'NAC (N-Acetilcisteína)', dose: '500mg' }, { name: 'Taurina', dose: '1.000mg' },
      { name: 'Zinco bisglicinato', dose: '15mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },
  { id: 'j11-pre', name: 'Oásis Interior · Premium', category: 'jejum', tier: 'premium',
    posology: '1 sachê em jejum, diluído em 200ml de água. Aguardar 20-30 min antes de comer.',
    quantity: '60 sachês', duration: '2 meses', instructions: 'Acemanana isolada de alta pureza. Armazenar ao abrigo da luz.',
    ingredients: [
      { name: 'Acemanana isolada (Aloe vera alta pureza)', dose: '500mg' },
      { name: 'L-Glutamina', dose: '5.000mg' },
      { name: 'LacFer™ (lactoferrina patenteada)', dose: '100mg' },
      { name: 'BIOintestil® (blend intestinal patenteado)', dose: '500mg' },
      { name: 'Carnosina de zinco', dose: '75mg' }, { name: 'Butirato de magnésio', dose: '500mg' },
      { name: 'PHGG (goma guar parcialmente hidrolisada)', dose: '2.000mg' },
      { name: 'Veículo para sachê qsp', dose: '1 sachê' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CATEGORIAS — 60 frascos (20 categorias x 3 tiers)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── SONO ─────────────────────────────────────────────────────────────────
  {
    id: 'sono-ess', name: 'Noite Serena · Essencial', category: 'sono', tier: 'essencial',
    ingredients: [
      { name: 'Melatonina', dose: '3mg' },
      { name: 'Magnésio Glicina', dose: '200mg' },
      { name: 'L-Teanina', dose: '200mg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar 30 min antes de dormir',
  },
  {
    id: 'sono-int', name: 'Noite Serena · Intermediário', category: 'sono', tier: 'intermediario',
    ingredients: [
      { name: 'Melatonina', dose: '5mg' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'GABA', dose: '500mg' },
      { name: 'Triptofano', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 30 min antes de dormir',
  },
  {
    id: 'sono-pre', name: 'Noite Serena · Premium', category: 'sono', tier: 'premium',
    ingredients: [
      { name: 'Melatonina', dose: '5mg' },
      { name: 'Magnésio L-Treonato (Magtein®)', dose: '2000mg' },
      { name: 'L-Teanina (Suntheanine®)', dose: '400mg' },
      { name: 'GABA', dose: '750mg' },
      { name: 'Triptofano', dose: '500mg' },
      { name: 'Fosfatidilserina (Sharp PS®)', dose: '100mg' },
      { name: 'Apigenina', dose: '50mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 30 min antes de dormir',
  },

  // ── ANSIEDADE ────────────────────────────────────────────────────────────
  {
    id: 'ansiedade-ess', name: 'Porto Seguro · Essencial', category: 'ansiedade', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio Glicina', dose: '200mg' },
      { name: 'L-Teanina', dose: '200mg' },
      { name: 'Passiflora', dose: '300mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula 2x/dia (manhã e noite)',
  },
  {
    id: 'ansiedade-int', name: 'Porto Seguro · Intermediário', category: 'ansiedade', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'L-Teanina', dose: '400mg' },
      { name: 'Passiflora', dose: '500mg' },
      { name: 'Ashwagandha', dose: '300mg' },
      { name: 'Taurina', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula 2x/dia (manhã e noite)',
  },
  {
    id: 'ansiedade-pre', name: 'Porto Seguro · Premium', category: 'ansiedade', tier: 'premium',
    ingredients: [
      { name: 'Magnésio L-Treonato (Magtein®)', dose: '2000mg' },
      { name: 'L-Teanina (Suntheanine®)', dose: '400mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'GABA', dose: '750mg' },
      { name: 'Rhodiola Rosea', dose: '300mg' },
      { name: 'Fosfatidilserina (Sharp PS®)', dose: '100mg' },
      { name: 'Inositol', dose: '2000mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cápsulas de manhã e 1 à noite',
  },

  // ── TIREOIDE ─────────────────────────────────────────────────────────────
  {
    id: 'tireoide-ess', name: 'Borboleta Livre · Essencial', category: 'tireoide', tier: 'essencial',
    ingredients: [
      { name: 'Selênio', dose: '200mcg' },
      { name: 'Zinco', dose: '30mg' },
      { name: 'Vitamina D3', dose: '2000UI' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço',
  },
  {
    id: 'tireoide-int', name: 'Borboleta Livre · Intermediário', category: 'tireoide', tier: 'intermediario',
    ingredients: [
      { name: 'Selênio Quelato', dose: '200mcg' },
      { name: 'Zinco Quelato', dose: '50mg' },
      { name: 'Vitamina D3', dose: '5000UI' },
      { name: 'Iodo', dose: '150mcg' },
      { name: 'Magnésio', dose: '200mg' },
      { name: 'L-Tirosina', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula no café e 1 no almoço',
  },
  {
    id: 'tireoide-pre', name: 'Borboleta Livre · Premium', category: 'tireoide', tier: 'premium',
    ingredients: [
      { name: 'Selênio L-Selenometionina', dose: '200mcg' },
      { name: 'Zinco Bisglicinato (Albion®)', dose: '50mg' },
      { name: 'Vitamina D3', dose: '10000UI' },
      { name: 'Iodo', dose: '200mcg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '300mg' },
      { name: 'L-Tirosina', dose: '1000mg' },
      { name: 'Vitamina A', dose: '5000UI' },
      { name: 'Myoinositol', dose: '2000mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cápsulas no café e 1 no almoço',
  },

  // ── INTESTINO ────────────────────────────────────────────────────────────
  {
    id: 'intestino-ess', name: 'Flora Viva · Essencial', category: 'intestino', tier: 'essencial',
    ingredients: [
      { name: 'Probiótico 10bi UFC', dose: '10bi' },
      { name: 'Glutamina', dose: '5g' },
      { name: 'PHGG (Fibra)', dose: '5g' },
    ],
    posology: '1 sachê', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Diluir em água fria, tomar em jejum',
  },
  {
    id: 'intestino-int', name: 'Flora Viva · Intermediário', category: 'intestino', tier: 'intermediario',
    ingredients: [
      { name: 'Probiótico 30bi UFC', dose: '30bi' },
      { name: 'Glutamina', dose: '10g' },
      { name: 'PHGG (Fibra)', dose: '5g' },
      { name: 'Zinco Carnosina', dose: '75mg' },
      { name: 'Aloe Vera', dose: '200mg' },
    ],
    posology: '1 sachê', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Diluir em água fria, tomar em jejum',
  },
  {
    id: 'intestino-pre', name: 'Flora Viva · Premium', category: 'intestino', tier: 'premium',
    ingredients: [
      { name: 'Probiótico 50bi UFC', dose: '50bi' },
      { name: 'Glutamina', dose: '10g' },
      { name: 'PHGG (Fibra)', dose: '5g' },
      { name: 'Zinco Carnosina (PepZin GI®)', dose: '150mg' },
      { name: 'Butirato de Sódio', dose: '600mg' },
      { name: 'Colostro Bovino', dose: '1g' },
      { name: 'N-Acetilglucosamina', dose: '500mg' },
    ],
    posology: '1 sachê', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Diluir em água fria, tomar em jejum',
  },

  // ── EMAGRECER ────────────────────────────────────────────────────────────
  {
    id: 'gordura-ess', name: 'Chama Interior · Essencial', category: 'gordura', tier: 'essencial',
    ingredients: [
      { name: 'Berberina', dose: '500mg' },
      { name: 'Picolinato de Cromo', dose: '200mcg' },
      { name: 'Chá Verde (EGCG)', dose: '500mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula antes do almoço e 1 antes do jantar',
  },
  {
    id: 'gordura-int', name: 'Chama Interior · Intermediário', category: 'gordura', tier: 'intermediario',
    ingredients: [
      { name: 'Berberina', dose: '1000mg' },
      { name: 'Picolinato de Cromo', dose: '400mcg' },
      { name: 'Morosil®', dose: '500mg' },
      { name: 'L-Carnitina', dose: '1000mg' },
      { name: 'Garcinia', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula antes do almoço e 1 antes do jantar',
  },
  {
    id: 'gordura-pre', name: 'Chama Interior · Premium', category: 'gordura', tier: 'premium',
    ingredients: [
      { name: 'Berberina', dose: '1500mg' },
      { name: 'Morosil®', dose: '500mg' },
      { name: 'L-Carnitina Tartarato', dose: '2000mg' },
      { name: 'Fucoxantina', dose: '5mg' },
      { name: 'Cromo Picolinato', dose: '400mcg' },
      { name: 'CLA (Clarinol®)', dose: '2000mg' },
      { name: 'Capsaicina', dose: '100mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps antes do almoço e 1 antes do jantar',
  },

  // ── LIPOEDEMA ────────────────────────────────────────────────────────────
  {
    id: 'lipoedema-ess', name: 'Fluxo Leve · Essencial', category: 'lipoedema', tier: 'essencial',
    ingredients: [
      { name: 'Diosmina', dose: '450mg' },
      { name: 'Hesperidina', dose: '50mg' },
      { name: 'Castanha da Índia', dose: '300mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula 2x/dia com refeição',
  },
  {
    id: 'lipoedema-int', name: 'Fluxo Leve · Intermediário', category: 'lipoedema', tier: 'intermediario',
    ingredients: [
      { name: 'Diosmina', dose: '900mg' },
      { name: 'Hesperidina', dose: '100mg' },
      { name: 'Castanha da Índia', dose: '500mg' },
      { name: 'Rutina', dose: '500mg' },
      { name: 'Centella Asiática', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula 2x/dia com refeição',
  },
  {
    id: 'lipoedema-pre', name: 'Fluxo Leve · Premium', category: 'lipoedema', tier: 'premium',
    ingredients: [
      { name: 'Diosmina', dose: '900mg' },
      { name: 'Hesperidina', dose: '100mg' },
      { name: 'Pycnogenol®', dose: '100mg' },
      { name: 'Centella Asiática', dose: '750mg' },
      { name: 'Curcumina (CurQfen®)', dose: '500mg' },
      { name: 'Selênio', dose: '200mcg' },
      { name: 'Gotu Kola', dose: '500mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps manhã e 1 à noite com refeição',
  },

  // ── DISLIPIDEMIA ─────────────────────────────────────────────────────────
  {
    id: 'dislipidemia-ess', name: 'Coração Limpo · Essencial', category: 'dislipidemia', tier: 'essencial',
    ingredients: [
      { name: 'Ômega 3 EPA/DHA', dose: '1000mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Fitosteróis', dose: '800mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar',
  },
  {
    id: 'dislipidemia-int', name: 'Coração Limpo · Intermediário', category: 'dislipidemia', tier: 'intermediario',
    ingredients: [
      { name: 'Ômega 3 EPA/DHA', dose: '2000mg' },
      { name: 'Berberina', dose: '1000mg' },
      { name: 'Fitosteróis', dose: '1600mg' },
      { name: 'Coenzima Q10', dose: '100mg' },
      { name: 'Niacina (B3)', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar',
  },
  {
    id: 'dislipidemia-pre', name: 'Coração Limpo · Premium', category: 'dislipidemia', tier: 'premium',
    ingredients: [
      { name: 'Ômega 3 EPA/DHA (AlaskOmega®)', dose: '3000mg' },
      { name: 'Berberina', dose: '1500mg' },
      { name: 'Arroz Vermelho Fermentado', dose: '600mg' },
      { name: 'Ubiquinol (Kaneka®)', dose: '200mg' },
      { name: 'Bergamota (Bergamonte®)', dose: '500mg' },
      { name: 'Niacina (B3)', dose: '1000mg' },
      { name: 'Tocotrienóis', dose: '200mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps no almoço e 1 no jantar',
  },

  // ── DIABETES ─────────────────────────────────────────────────────────────
  {
    id: 'diabetes-ess', name: 'Glicose Zen · Essencial', category: 'diabetes', tier: 'essencial',
    ingredients: [
      { name: 'Berberina', dose: '500mg' },
      { name: 'Picolinato de Cromo', dose: '200mcg' },
      { name: 'Ácido Alfa-Lipóico', dose: '300mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula antes do almoço e 1 antes do jantar',
  },
  {
    id: 'diabetes-int', name: 'Glicose Zen · Intermediário', category: 'diabetes', tier: 'intermediario',
    ingredients: [
      { name: 'Berberina', dose: '1000mg' },
      { name: 'Picolinato de Cromo', dose: '400mcg' },
      { name: 'Ácido Alfa-Lipóico', dose: '600mg' },
      { name: 'Canela (Cinnulin PF®)', dose: '500mg' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula antes do almoço e 1 antes do jantar',
  },
  {
    id: 'diabetes-pre', name: 'Glicose Zen · Premium', category: 'diabetes', tier: 'premium',
    ingredients: [
      { name: 'Berberina', dose: '1500mg' },
      { name: 'Cromo Picolinato', dose: '600mcg' },
      { name: 'Ácido Alfa-Lipóico', dose: '600mg' },
      { name: 'Banaba', dose: '50mg' },
      { name: 'Gymnema Sylvestre', dose: '400mg' },
      { name: 'Bitter Melon', dose: '500mg' },
      { name: 'Myoinositol', dose: '2000mg' },
      { name: 'Vanádio', dose: '50mcg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps manhã, 1 almoço e 1 jantar',
  },

  // ── CÉREBRO ──────────────────────────────────────────────────────────────
  {
    id: 'cerebro-ess', name: 'Mente Cristalina · Essencial', category: 'cerebro', tier: 'essencial',
    ingredients: [
      { name: 'Ômega 3 DHA', dose: '1000mg' },
      { name: 'Fosfatidilserina', dose: '100mg' },
      { name: 'Bacopa Monnieri', dose: '300mg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço',
  },
  {
    id: 'cerebro-int', name: 'Mente Cristalina · Intermediário', category: 'cerebro', tier: 'intermediario',
    ingredients: [
      { name: 'Ômega 3 DHA', dose: '2000mg' },
      { name: 'Fosfatidilserina', dose: '200mg' },
      { name: 'Bacopa Monnieri', dose: '600mg' },
      { name: 'Lion\'s Mane', dose: '500mg' },
      { name: 'Colina CDP (Citicolina)', dose: '250mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula no café e 1 no almoço',
  },
  {
    id: 'cerebro-pre', name: 'Mente Cristalina · Premium', category: 'cerebro', tier: 'premium',
    ingredients: [
      { name: 'Ômega 3 DHA (AlaskOmega®)', dose: '2000mg' },
      { name: 'Fosfatidilserina (Sharp PS®)', dose: '300mg' },
      { name: 'Bacopa Monnieri', dose: '600mg' },
      { name: 'Lion\'s Mane', dose: '1000mg' },
      { name: 'Colina CDP (Cognizin®)', dose: '500mg' },
      { name: 'Huperzine A', dose: '200mcg' },
      { name: 'Uridina', dose: '300mg' },
      { name: 'PQQ', dose: '20mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps no café e 1 no almoço',
  },

  // ── DISPOSIÇÃO ───────────────────────────────────────────────────────────
  {
    id: 'disposicao-ess', name: 'Sol Nascente · Essencial', category: 'disposicao', tier: 'essencial',
    ingredients: [
      { name: 'Coenzima Q10', dose: '100mg' },
      { name: 'Ferro Bisglicinato', dose: '30mg' },
      { name: 'Vitamina B12', dose: '1000mcg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar em jejum pela manhã',
  },
  {
    id: 'disposicao-int', name: 'Sol Nascente · Intermediário', category: 'disposicao', tier: 'intermediario',
    ingredients: [
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'Ferro Bisglicinato', dose: '60mg' },
      { name: 'Vitamina B12 Metilcobalamina', dose: '5000mcg' },
      { name: 'Rhodiola Rosea', dose: '300mg' },
      { name: 'Ashwagandha', dose: '300mg' },
      { name: 'D-Ribose', dose: '2000mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar pela manhã em jejum',
  },
  {
    id: 'disposicao-pre', name: 'Sol Nascente · Premium', category: 'disposicao', tier: 'premium',
    ingredients: [
      { name: 'Ubiquinol (Kaneka®)', dose: '200mg' },
      { name: 'Ferro Bisglicinato (Albion®)', dose: '60mg' },
      { name: 'PQQ', dose: '20mg' },
      { name: 'Rhodiola Rosea', dose: '500mg' },
      { name: 'Cordyceps', dose: '1000mg' },
      { name: 'NADH', dose: '10mg' },
      { name: 'Creatina (Creapure®)', dose: '3000mg' },
    ],
    posology: '1 sachê + 2 cáps', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Tomar sachê diluído em água pela manhã',
  },

  // ── ANTI-INFLAMATÓRIO ────────────────────────────────────────────────────
  {
    id: 'inflamacao-ess', name: 'Chama Fria · Essencial', category: 'inflamacao', tier: 'essencial',
    ingredients: [
      { name: 'Curcumina', dose: '500mg' },
      { name: 'Ômega 3', dose: '1000mg' },
      { name: 'Gengibre', dose: '500mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cápsula no almoço e 1 no jantar',
  },
  {
    id: 'inflamacao-int', name: 'Chama Fria · Intermediário', category: 'inflamacao', tier: 'intermediario',
    ingredients: [
      { name: 'Curcumina', dose: '1000mg' },
      { name: 'Ômega 3 EPA/DHA', dose: '2000mg' },
      { name: 'Boswellia', dose: '400mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Resveratrol', dose: '150mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps no almoço e 1 no jantar, com comida',
  },
  {
    id: 'inflamacao-pre', name: 'Chama Fria · Premium', category: 'inflamacao', tier: 'premium',
    ingredients: [
      { name: 'Curcumina (CurQfen®)', dose: '500mg' },
      { name: 'Ômega 3 EPA/DHA', dose: '3000mg' },
      { name: 'Boswellia AKBA', dose: '400mg' },
      { name: 'Quercetina', dose: '1000mg' },
      { name: 'Resveratrol Trans (ResviTech®)', dose: '300mg' },
      { name: 'Pycnogenol®', dose: '100mg' },
      { name: 'SPMs (Mediadores Pro-Resolução)', dose: '500mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps no almoço e 1 no jantar, com comida (gordura)',
  },

  // ── DETOX ────────────────────────────────────────────────────────────────
  {
    id: 'detox-ess', name: 'Rio Cristalino · Essencial', category: 'detox', tier: 'essencial',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '600mg' },
      { name: 'Cardo Mariano (Silimarina)', dose: '300mg' },
      { name: 'Clorofila', dose: '100mg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar em jejum pela manhã',
  },
  {
    id: 'detox-int', name: 'Rio Cristalino · Intermediário', category: 'detox', tier: 'intermediario',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '1200mg' },
      { name: 'Cardo Mariano (Silimarina)', dose: '600mg' },
      { name: 'Clorella', dose: '2000mg' },
      { name: 'DIM', dose: '200mg' },
      { name: 'Cálcio D-Glucarato', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps em jejum e 1 antes de dormir',
  },
  {
    id: 'detox-pre', name: 'Rio Cristalino · Premium', category: 'detox', tier: 'premium',
    ingredients: [
      { name: 'NAC (N-Acetilcisteína)', dose: '1800mg' },
      { name: 'Cardo Mariano (Silimarina)', dose: '600mg' },
      { name: 'Glutationa Reduzida (Setria®)', dose: '500mg' },
      { name: 'DIM', dose: '300mg' },
      { name: 'Cálcio D-Glucarato', dose: '1000mg' },
      { name: 'Sulforafano (Broccomax®)', dose: '50mg' },
      { name: 'Molibdênio', dose: '150mcg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps em jejum e 1 antes de dormir',
  },

  // ── ANTIPARASITÁRIO ──────────────────────────────────────────────────────
  {
    id: 'antiparasitario-ess', name: 'Fortaleza Interior · Essencial', category: 'antiparasitario', tier: 'essencial',
    ingredients: [
      { name: 'Óleo de Orégano', dose: '150mg' },
      { name: 'Alho Concentrado', dose: '500mg' },
      { name: 'Artemísia (Losna)', dose: '300mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps antes do almoço e 1 antes do jantar',
  },
  {
    id: 'antiparasitario-int', name: 'Fortaleza Interior · Intermediário', category: 'antiparasitario', tier: 'intermediario',
    ingredients: [
      { name: 'Óleo de Orégano', dose: '300mg' },
      { name: 'Alho Concentrado', dose: '1000mg' },
      { name: 'Artemísia (Losna)', dose: '500mg' },
      { name: 'Berberina', dose: '500mg' },
      { name: 'Semente de Abóbora', dose: '500mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps antes do almoço e 1 antes do jantar',
  },
  {
    id: 'antiparasitario-pre', name: 'Fortaleza Interior · Premium', category: 'antiparasitario', tier: 'premium',
    ingredients: [
      { name: 'Óleo de Orégano', dose: '450mg' },
      { name: 'Alho Negro', dose: '1000mg' },
      { name: 'Artemísia Annua', dose: '1000mg' },
      { name: 'Berberina', dose: '1000mg' },
      { name: 'Neem', dose: '500mg' },
      { name: 'Ácido Caprílico', dose: '1000mg' },
      { name: 'Saccharomyces boulardii', dose: '5bi UFC' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps manhã, 1 almoço e 1 jantar',
  },

  // ── DESMAME RIVOTRIL ─────────────────────────────────────────────────────
  {
    id: 'desmame-ess', name: 'Libertação Gradual · Essencial', category: 'desmame', tier: 'essencial',
    ingredients: [
      { name: 'Magnésio Glicina', dose: '400mg' },
      { name: 'L-Teanina', dose: '400mg' },
      { name: 'GABA', dose: '500mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps de manhã e 1 à noite',
  },
  {
    id: 'desmame-int', name: 'Libertação Gradual · Intermediário', category: 'desmame', tier: 'intermediario',
    ingredients: [
      { name: 'Magnésio Bisglicinato', dose: '600mg' },
      { name: 'L-Teanina', dose: '400mg' },
      { name: 'GABA', dose: '750mg' },
      { name: 'Taurina', dose: '1000mg' },
      { name: 'Passiflora', dose: '500mg' },
      { name: 'Valeriana', dose: '300mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps de manhã e 1 à noite',
  },
  {
    id: 'desmame-pre', name: 'Libertação Gradual · Premium', category: 'desmame', tier: 'premium',
    ingredients: [
      { name: 'Magnésio L-Treonato (Magtein®)', dose: '2000mg' },
      { name: 'L-Teanina (Suntheanine®)', dose: '600mg' },
      { name: 'GABA', dose: '750mg' },
      { name: 'Taurina', dose: '2000mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'Fosfatidilserina (Sharp PS®)', dose: '200mg' },
      { name: 'Kava', dose: '250mg' },
      { name: 'Inositol', dose: '3000mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps de manhã e 1 à noite',
  },

  // ── LIBIDO ───────────────────────────────────────────────────────────────
  {
    id: 'libido-ess', name: 'Fogo Sagrado · Essencial', category: 'libido', tier: 'essencial',
    ingredients: [
      { name: 'Maca Peruana', dose: '1000mg' },
      { name: 'Tribulus Terrestris', dose: '500mg' },
      { name: 'Zinco', dose: '30mg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps no café e 1 no almoço',
  },
  {
    id: 'libido-int', name: 'Fogo Sagrado · Intermediário', category: 'libido', tier: 'intermediario',
    ingredients: [
      { name: 'Maca Peruana', dose: '2000mg' },
      { name: 'Tribulus Terrestris', dose: '1000mg' },
      { name: 'Zinco Quelato', dose: '50mg' },
      { name: 'Ashwagandha', dose: '600mg' },
      { name: 'Boro', dose: '6mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps no café e 1 no almoço',
  },
  {
    id: 'libido-pre', name: 'Fogo Sagrado · Premium', category: 'libido', tier: 'premium',
    ingredients: [
      { name: 'Maca Negra', dose: '3000mg' },
      { name: 'Tribulus Terrestris', dose: '1500mg' },
      { name: 'Feno-Grego (Testofen®)', dose: '600mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'Boro', dose: '9mg' },
      { name: 'Tongkat Ali (LJ100®)', dose: '400mg' },
      { name: 'Mucuna Pruriens', dose: '300mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps no café e 1 no almoço',
  },

  // ── FERTILIDADE FEMININA ─────────────────────────────────────────────────
  {
    id: 'fert-fem-ess', name: 'Florescer Feminino · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Ácido Fólico', dose: '5mg' },
      { name: 'Ferro Bisglicinato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '2000UI' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço',
  },
  {
    id: 'fert-fem-int', name: 'Florescer Feminino · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Metilfolato (Quatrefolic®)', dose: '5mg' },
      { name: 'Ferro Bisglicinato', dose: '30mg' },
      { name: 'Vitamina D3', dose: '5000UI' },
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'Myoinositol', dose: '2000mg' },
      { name: 'Vitamina E', dose: '400UI' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps manhã e 1 almoço',
  },
  {
    id: 'fert-fem-pre', name: 'Florescer Feminino · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Metilfolato (Quatrefolic®)', dose: '5mg' },
      { name: 'Ferro Bisglicinato (Albion®)', dose: '60mg' },
      { name: 'Ubiquinol (Kaneka®)', dose: '200mg' },
      { name: 'Myoinositol', dose: '4000mg' },
      { name: 'D-Chiro-Inositol', dose: '100mg' },
      { name: 'DHEA', dose: '25mg' },
      { name: 'Vitamina E Mista', dose: '800UI' },
      { name: 'Selênio', dose: '200mcg' },
    ],
    posology: '1 sachê + 2 cáps', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Tomar sachê diluído em água pela manhã + cáps no almoço',
  },

  // ── FERTILIDADE MASCULINA ────────────────────────────────────────────────
  {
    id: 'fert-masc-ess', name: 'Semente Vital · Essencial', category: 'fertilidade', tier: 'essencial',
    ingredients: [
      { name: 'Zinco', dose: '30mg' },
      { name: 'Selênio', dose: '200mcg' },
      { name: 'Ácido Fólico', dose: '5mg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço',
  },
  {
    id: 'fert-masc-int', name: 'Semente Vital · Intermediário', category: 'fertilidade', tier: 'intermediario',
    ingredients: [
      { name: 'Zinco Quelato', dose: '50mg' },
      { name: 'Selênio', dose: '200mcg' },
      { name: 'Metilfolato', dose: '5mg' },
      { name: 'Coenzima Q10', dose: '200mg' },
      { name: 'L-Carnitina', dose: '1000mg' },
      { name: 'Vitamina C', dose: '1000mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps manhã e 1 almoço',
  },
  {
    id: 'fert-masc-pre', name: 'Semente Vital · Premium', category: 'fertilidade', tier: 'premium',
    ingredients: [
      { name: 'Zinco Bisglicinato (Albion®)', dose: '50mg' },
      { name: 'L-Selenometionina', dose: '200mcg' },
      { name: 'Metilfolato (Quatrefolic®)', dose: '5mg' },
      { name: 'Ubiquinol (Kaneka®)', dose: '200mg' },
      { name: 'L-Carnitina Tartarato', dose: '2000mg' },
      { name: 'NAC', dose: '600mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'Vitamina E Mista', dose: '400UI' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps manhã e 1 almoço',
  },

  // ── MÚSCULO ──────────────────────────────────────────────────────────────
  {
    id: 'musculo-ess', name: 'Titã Interior · Essencial', category: 'musculo', tier: 'essencial',
    ingredients: [
      { name: 'Creatina', dose: '5000mg' },
      { name: 'Vitamina D3', dose: '2000UI' },
      { name: 'Magnésio', dose: '400mg' },
    ],
    posology: '1 sachê', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Diluir em água, tomar pela manhã',
  },
  {
    id: 'musculo-int', name: 'Titã Interior · Intermediário', category: 'musculo', tier: 'intermediario',
    ingredients: [
      { name: 'Creatina', dose: '5000mg' },
      { name: 'Vitamina D3', dose: '5000UI' },
      { name: 'HMB', dose: '3000mg' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Vitamina B12', dose: '1000mcg' },
      { name: 'Coenzima Q10', dose: '100mg' },
    ],
    posology: '1 sachê', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Diluir em água, tomar pela manhã ou pós-treino',
  },
  {
    id: 'musculo-pre', name: 'Titã Interior · Premium', category: 'musculo', tier: 'premium',
    ingredients: [
      { name: 'Creatina (Creapure®)', dose: '5000mg' },
      { name: 'Vitamina D3', dose: '10000UI' },
      { name: 'HMB', dose: '3000mg' },
      { name: 'Colágeno UC-II®', dose: '40mg' },
      { name: 'Ashwagandha (KSM-66®)', dose: '600mg' },
      { name: 'ATP (Peak ATP®)', dose: '400mg' },
      { name: 'Ômega 3', dose: '2000mg' },
    ],
    posology: '1 sachê + 2 cáps', quantity: '30 sachês', duration: '30 dias',
    instructions: 'Sachê em água pela manhã + cáps no almoço',
  },

  // ── OSSO ─────────────────────────────────────────────────────────────────
  {
    id: 'osso-ess', name: 'Rocha Viva · Essencial', category: 'osso', tier: 'essencial',
    ingredients: [
      { name: 'Cálcio Citrato', dose: '500mg' },
      { name: 'Vitamina D3', dose: '2000UI' },
      { name: 'Vitamina K2 MK-7', dose: '100mcg' },
    ],
    posology: '1 cápsula', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps no almoço e 1 no jantar',
  },
  {
    id: 'osso-int', name: 'Rocha Viva · Intermediário', category: 'osso', tier: 'intermediario',
    ingredients: [
      { name: 'Cálcio Citrato Malato', dose: '1000mg' },
      { name: 'Vitamina D3', dose: '5000UI' },
      { name: 'Vitamina K2 MK-7', dose: '200mcg' },
      { name: 'Magnésio Bisglicinato', dose: '400mg' },
      { name: 'Boro', dose: '3mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps no almoço e 1 no jantar',
  },
  {
    id: 'osso-pre', name: 'Rocha Viva · Premium', category: 'osso', tier: 'premium',
    ingredients: [
      { name: 'Cálcio (AlgaeCal®)', dose: '1000mg' },
      { name: 'Vitamina D3', dose: '10000UI' },
      { name: 'Vitamina K2 MK-7 (MenaQ7®)', dose: '300mcg' },
      { name: 'Magnésio Bisglicinato (Albion®)', dose: '400mg' },
      { name: 'Boro', dose: '6mg' },
      { name: 'Silício Orgânico', dose: '10mg' },
      { name: 'Colágeno UC-II®', dose: '40mg' },
      { name: 'Estrôncio', dose: '340mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps almoço e 1 jantar (longe do cálcio de estrôncio)',
  },

  // ── IMUNIDADE ────────────────────────────────────────────────────────────
  {
    id: 'imunidade-ess', name: 'Sentinela · Essencial', category: 'imunidade', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina C', dose: '1000mg' },
      { name: 'Zinco', dose: '30mg' },
      { name: 'Vitamina D3', dose: '2000UI' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço',
  },
  {
    id: 'imunidade-int', name: 'Sentinela · Intermediário', category: 'imunidade', tier: 'intermediario',
    ingredients: [
      { name: 'Vitamina C', dose: '2000mg' },
      { name: 'Zinco Quelato', dose: '50mg' },
      { name: 'Vitamina D3', dose: '5000UI' },
      { name: 'Selênio', dose: '200mcg' },
      { name: 'Beta-Glucana', dose: '250mg' },
    ],
    posology: '2 cápsulas', quantity: '60 cápsulas', duration: '30 dias',
    instructions: 'Tomar 1 cáps manhã e 1 almoço',
  },
  {
    id: 'imunidade-pre', name: 'Sentinela · Premium', category: 'imunidade', tier: 'premium',
    ingredients: [
      { name: 'Vitamina C Lipossomal', dose: '2000mg' },
      { name: 'Zinco Bisglicinato (Albion®)', dose: '50mg' },
      { name: 'Vitamina D3', dose: '10000UI' },
      { name: 'Selênio L-Selenometionina', dose: '200mcg' },
      { name: 'Beta-Glucana (Wellmune®)', dose: '500mg' },
      { name: 'Quercetina', dose: '500mg' },
      { name: 'Lactoferrina', dose: '200mg' },
    ],
    posology: '3 cápsulas', quantity: '90 cápsulas', duration: '30 dias',
    instructions: 'Tomar 2 cáps manhã e 1 almoço',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRASCOS BASE — 4 frascos
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'base-complexob-ess', name: 'Complexo B Essencial', category: 'base', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina B1 (Tiamina)', dose: '25mg' },
      { name: 'Vitamina B2 (Riboflavina)', dose: '25mg' },
      { name: 'Vitamina B3 (Niacinamida)', dose: '50mg' },
      { name: 'Vitamina B5 (Ác. Pantotênico)', dose: '50mg' },
      { name: 'Vitamina B6 (Piridoxina)', dose: '25mg' },
      { name: 'Vitamina B7 (Biotina)', dose: '300mcg' },
      { name: 'Vitamina B9 (Ácido Fólico)', dose: '400mcg' },
      { name: 'Vitamina B12 (Cianocobalamina)', dose: '500mcg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar pela manhã com café da manhã',
  },
  {
    id: 'base-complexob-pre', name: 'Complexo B Premium (Metilado)', category: 'base', tier: 'premium',
    ingredients: [
      { name: 'Benfotiamina (B1)', dose: '150mg' },
      { name: 'Riboflavina-5-Fosfato (B2)', dose: '25mg' },
      { name: 'Niacinamida (B3)', dose: '100mg' },
      { name: 'Ác. Pantotênico (B5)', dose: '100mg' },
      { name: 'P-5-P Piridoxal (B6)', dose: '50mg' },
      { name: 'Biotina (B7)', dose: '5000mcg' },
      { name: 'Metilfolato Quatrefolic® (B9)', dose: '1000mcg' },
      { name: 'Metilcobalamina (B12)', dose: '5000mcg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar pela manhã com café da manhã',
  },
  {
    id: 'base-adek-ess', name: 'Vitaminas ADEK Essencial', category: 'base', tier: 'essencial',
    ingredients: [
      { name: 'Vitamina A (Retinol)', dose: '5000UI' },
      { name: 'Vitamina D3 (Colecalciferol)', dose: '2000UI' },
      { name: 'Vitamina E (Alfa-Tocoferol)', dose: '400UI' },
      { name: 'Vitamina K2 MK-7', dose: '100mcg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço (refeição com gordura)',
  },
  {
    id: 'base-adek-pre', name: 'Vitaminas ADEK Premium', category: 'base', tier: 'premium',
    ingredients: [
      { name: 'Vitamina A (Palmitato)', dose: '10000UI' },
      { name: 'Vitamina D3 (Colecalciferol)', dose: '10000UI' },
      { name: 'Vitamina E Mista (Tocoferóis + Tocotrienóis)', dose: '800UI' },
      { name: 'Vitamina K2 MK-7 (MenaQ7®)', dose: '300mcg' },
    ],
    posology: '1 cápsula', quantity: '30 cápsulas', duration: '30 dias',
    instructions: 'Tomar com almoço (refeição com gordura)',
  },
];

export const SEED_FRASCOS: Frasco[] = [
  ...BASE_FRASCOS,
  ...FRASCOS_GROUP1,
  ...FRASCOS_GROUP2,
  ...FRASCOS_GROUP3,
  ...FRASCOS_GROUP4,
  ...FRASCOS_FARMACIA,
  ...FRASCOS_GROWTH,
  ...FRASCOS_DOCTORSFIRST,
];

// ═══════════════════════════════════════════════════════════════════════════
// PROTOCOLOS — 1 por condição, 3 tomadas diárias
// Manhã (07h): sachê/cáps jejum + base
// Almoço (12h): cáps com comida + lipossolúveis
// Noite (22h): cáps relaxantes/noturnas
// ═══════════════════════════════════════════════════════════════════════════

export const SEED_PROTOCOLS: Protocol[] = [
  {
    id: 'proto-sono', name: '🌙 Protocolo Sono Reparador',
    description: 'Manhã: Complexo B | Almoço: ADEK | Noite: Frasco Sono',
    color: '#6366F1',
    entries: [
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'sono-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-ansiedade', name: '🧘 Protocolo Calma & Equilíbrio',
    description: 'Manhã: Ansiedade + Complexo B | Almoço: ADEK | Noite: Ansiedade',
    color: '#8B5CF6',
    entries: [
      { frascoId: 'ansiedade-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'ansiedade-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-tireoide', name: '🦋 Protocolo Tireoide Otimizada',
    description: 'Manhã: Tireoide (jejum) + Complexo B | Almoço: ADEK | Noite: —',
    color: '#0EA5E9',
    entries: [
      { frascoId: 'tireoide-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'base-adek-ess', hour: 12 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-intestino', name: '🫁 Protocolo Intestino Saudável',
    description: 'Manhã: Sachê Intestino (jejum) | Almoço: ADEK + Complexo B | Noite: —',
    color: '#22C55E',
    entries: [
      { frascoId: 'intestino-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-emagrecer', name: '🔥 Protocolo Emagrecimento',
    description: 'Manhã: Disposição + Complexo B | Almoço: Emagrecer + ADEK | Noite: Emagrecer',
    color: '#F97316',
    entries: [
      { frascoId: 'disposicao-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'gordura-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'gordura-ess', hour: 19 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-lipoedema', name: '💜 Protocolo Lipoedema & Circulação',
    description: 'Manhã: Lipoedema + Complexo B | Almoço: Anti-Inflam + ADEK | Noite: Lipoedema',
    color: '#A855F7',
    entries: [
      { frascoId: 'lipoedema-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'inflamacao-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'lipoedema-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-dislipidemia', name: '❤️ Protocolo Coração & Lipídeos',
    description: 'Manhã: Complexo B | Almoço: Dislipidemia + ADEK | Noite: Dislipidemia',
    color: '#DC2626',
    entries: [
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'dislipidemia-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'dislipidemia-ess', hour: 19 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-diabetes', name: '🩸 Protocolo Glicemia Controlada',
    description: 'Manhã: Diabetes + Complexo B | Almoço: Diabetes + ADEK | Noite: Diabetes',
    color: '#EA580C',
    entries: [
      { frascoId: 'diabetes-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'diabetes-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'diabetes-ess', hour: 19 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-cerebro', name: '🧠 Protocolo Neuro Performance',
    description: 'Manhã: Cérebro + Complexo B | Almoço: Cérebro + ADEK | Noite: Sono',
    color: '#EC4899',
    entries: [
      { frascoId: 'cerebro-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'cerebro-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'sono-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-disposicao', name: '☀️ Protocolo Energia & Vitalidade',
    description: 'Manhã: Disposição + Complexo B | Almoço: ADEK | Noite: Sono',
    color: '#FACC15',
    entries: [
      { frascoId: 'disposicao-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'sono-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-inflamacao', name: '🔻 Protocolo Anti-Inflamatório Total',
    description: 'Manhã: Detox + Complexo B | Almoço: Anti-Inflam + ADEK | Noite: Anti-Inflam',
    color: '#F43F5E',
    entries: [
      { frascoId: 'detox-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'inflamacao-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'inflamacao-ess', hour: 19 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-detox', name: '🍃 Protocolo Detox & Limpeza Hepática',
    description: 'Manhã: Detox (jejum) + Complexo B | Almoço: ADEK | Noite: Detox',
    color: '#10B981',
    entries: [
      { frascoId: 'detox-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'detox-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-antiparasitario', name: '🛡️ Protocolo Antiparasitário',
    description: 'Manhã: Antiparasitário + Complexo B | Almoço: Antiparasitário + ADEK | Noite: Intestino',
    color: '#78716C',
    entries: [
      { frascoId: 'antiparasitario-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'antiparasitario-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'intestino-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-desmame', name: '💊 Protocolo Desmame Rivotril',
    description: 'Manhã: Desmame + Complexo B | Almoço: ADEK + Desmame | Noite: Desmame + Sono',
    color: '#7C3AED',
    entries: [
      { frascoId: 'desmame-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'desmame-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'desmame-ess', hour: 22 },
      { frascoId: 'sono-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-libido', name: '🔥 Protocolo Libido & Performance',
    description: 'Manhã: Libido + Complexo B + Disposição | Almoço: ADEK | Noite: —',
    color: '#E11D48',
    entries: [
      { frascoId: 'libido-ess', hour: 7 },
      { frascoId: 'disposicao-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'libido-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-fert-fem', name: '🌸 Protocolo Fertilidade Feminina',
    description: 'Manhã: Fertilidade Fem + Complexo B | Almoço: Fertilidade + ADEK | Noite: Sono',
    color: '#FB7185',
    entries: [
      { frascoId: 'fert-fem-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'fert-fem-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'sono-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-fert-masc', name: '🧬 Protocolo Fertilidade Masculina',
    description: 'Manhã: Fertilidade Masc + Complexo B | Almoço: Fertilidade + ADEK | Noite: —',
    color: '#0284C7',
    entries: [
      { frascoId: 'fert-masc-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'fert-masc-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-musculo', name: '💪 Protocolo Massa Muscular',
    description: 'Manhã: Sachê Músculo + Complexo B | Almoço: ADEK | Noite: Sono',
    color: '#0284C7',
    entries: [
      { frascoId: 'musculo-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'sono-ess', hour: 22 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-osso', name: '🦴 Protocolo Saúde Óssea',
    description: 'Manhã: Complexo B | Almoço: Osso + ADEK | Noite: Osso',
    color: '#94A3B8',
    entries: [
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'osso-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
      { frascoId: 'osso-ess', hour: 19 },
    ],
    createdAt: '2026-01-01',
  },
  {
    id: 'proto-imunidade', name: '🛡️ Protocolo Imunidade Blindada',
    description: 'Manhã: Imunidade + Complexo B | Almoço: Imunidade + ADEK | Noite: —',
    color: '#14B8A6',
    entries: [
      { frascoId: 'imunidade-ess', hour: 7 },
      { frascoId: 'base-complexob-ess', hour: 7 },
      { frascoId: 'imunidade-ess', hour: 12 },
      { frascoId: 'base-adek-ess', hour: 12 },
    ],
    createdAt: '2026-01-01',
  },
];
