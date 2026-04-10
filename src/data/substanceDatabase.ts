export interface SubstanceInfo {
  name: string;
  summary: string;
  category?: string;
}

/**
 * Base de dados de substâncias com resumos curtos.
 * Key: nome normalizado (lowercase, sem acentos).
 */
const DB: Record<string, SubstanceInfo> = {
  // ── Aminoácidos ──────────────────────────────────────────────────────
  'l-triptofano': { name: 'L-Triptofano', summary: 'Precursor de serotonina e melatonina; melhora humor e sono', category: 'aminoácido' },
  'triptofano': { name: 'L-Triptofano', summary: 'Precursor de serotonina e melatonina; melhora humor e sono', category: 'aminoácido' },
  'l-teanina': { name: 'L-Teanina', summary: 'Promove relaxamento sem sedação; reduz ansiedade e melhora foco', category: 'aminoácido' },
  'l-tirosina': { name: 'L-Tirosina', summary: 'Precursor de dopamina e noradrenalina; melhora foco sob estresse', category: 'aminoácido' },
  'tirosina': { name: 'L-Tirosina', summary: 'Precursor de dopamina e noradrenalina; melhora foco sob estresse', category: 'aminoácido' },
  'glicina': { name: 'Glicina', summary: 'Aminoácido inibitório; melhora qualidade do sono e função cognitiva', category: 'aminoácido' },
  'gaba': { name: 'GABA', summary: 'Principal neurotransmissor inibitório; induz calma e relaxamento', category: 'neurotransmissor' },
  'glutamina': { name: 'Glutamina', summary: 'Repara mucosa intestinal; suporte imunológico e muscular', category: 'aminoácido' },
  'l-glutamina': { name: 'L-Glutamina', summary: 'Repara mucosa intestinal; suporte imunológico e muscular', category: 'aminoácido' },
  'taurina': { name: 'Taurina', summary: 'Neuroprotetora e antioxidante; estabiliza membranas celulares', category: 'aminoácido' },
  'l-carnitina': { name: 'L-Carnitina', summary: 'Transporta ácidos graxos para mitocôndrias; auxilia queima de gordura', category: 'aminoácido' },
  'acetil-l-carnitina': { name: 'Acetil-L-Carnitina', summary: 'Atravessa barreira hematoencefálica; neuroprotetora e energizante', category: 'aminoácido' },
  'l-arginina': { name: 'L-Arginina', summary: 'Precursor de óxido nítrico; melhora circulação e performance', category: 'aminoácido' },
  'l-citrulina': { name: 'L-Citrulina', summary: 'Aumenta produção de óxido nítrico; melhora fluxo sanguíneo', category: 'aminoácido' },
  'leucina': { name: 'Leucina', summary: 'BCAA principal; ativa síntese proteica muscular via mTOR', category: 'aminoácido' },
  'lisina': { name: 'Lisina', summary: 'Essencial para síntese de colágeno e absorção de cálcio', category: 'aminoácido' },
  'prolina': { name: 'Prolina', summary: 'Componente do colágeno; suporte à saúde articular e pele', category: 'aminoácido' },
  'beta-alanina': { name: 'Beta-Alanina', summary: 'Aumenta carnosina muscular; melhora resistência e reduz fadiga', category: 'aminoácido' },
  'dl-fenilalanina': { name: 'DL-Fenilalanina', summary: 'Precursor de dopamina e endorfinas; modula dor e humor', category: 'aminoácido' },
  'n-acetilcisteina (nac)': { name: 'NAC', summary: 'Precursor de glutationa; potente antioxidante e mucolítico', category: 'aminoácido' },
  'nac': { name: 'NAC', summary: 'Precursor de glutationa; potente antioxidante e hepatoprotetor', category: 'aminoácido' },
  'nac (n-acetilcisteina)': { name: 'NAC', summary: 'Precursor de glutationa; potente antioxidante e hepatoprotetor', category: 'aminoácido' },
  'n-acetil-cisteina (nac)': { name: 'NAC', summary: 'Precursor de glutationa; potente antioxidante e mucolítico', category: 'aminoácido' },
  '5-htp': { name: '5-HTP', summary: 'Intermediário na síntese de serotonina; melhora humor e sono', category: 'aminoácido' },
  'creatina': { name: 'Creatina', summary: 'Reserva energética muscular e cerebral; melhora força e cognição', category: 'aminoácido' },
  'creatina monoidratada': { name: 'Creatina Monohidratada', summary: 'Reserva energética ATP; melhora força muscular e cognição', category: 'aminoácido' },
  'hmb': { name: 'HMB', summary: 'Metabólito da leucina; reduz catabolismo muscular e acelera recuperação', category: 'aminoácido' },
  'd-ribose': { name: 'D-Ribose', summary: 'Açúcar essencial para síntese de ATP; combate fadiga celular', category: 'açúcar' },

  // ── Vitaminas ────────────────────────────────────────────────────────
  'vitamina d3': { name: 'Vitamina D3', summary: 'Regula cálcio, imunidade e humor; essencial para ossos', category: 'vitamina' },
  'vitamina c': { name: 'Vitamina C', summary: 'Antioxidante potente; essencial para imunidade e síntese de colágeno', category: 'vitamina' },
  'vitamina c lipossomal': { name: 'Vitamina C Lipossomal', summary: 'Forma de alta absorção; antioxidante e suporte imunológico', category: 'vitamina' },
  'vitamina e': { name: 'Vitamina E', summary: 'Antioxidante lipossolúvel; protege membranas celulares', category: 'vitamina' },
  'vitamina a': { name: 'Vitamina A', summary: 'Essencial para visão, imunidade e integridade de mucosas', category: 'vitamina' },
  'vitamina b6 (p5p)': { name: 'Vitamina B6 (P5P)', summary: 'Cofator na síntese de serotonina, dopamina e GABA', category: 'vitamina' },
  'vitamina b6 (p-5-p)': { name: 'Vitamina B6', summary: 'Forma ativa; cofator em mais de 100 reações enzimáticas', category: 'vitamina' },
  'vitamina b12': { name: 'Vitamina B12', summary: 'Essencial para neurônios, formação de sangue e energia', category: 'vitamina' },
  'vitamina b12 (metilcobalamina)': { name: 'B12 Metilcobalamina', summary: 'Forma ativa da B12; essencial para metilação e neuroproteção', category: 'vitamina' },
  'metilcobalamina (b12)': { name: 'B12 Metilcobalamina', summary: 'Forma ativa da B12; neuroprotetora e essencial para energia', category: 'vitamina' },
  'vitamina b1 (tiamina)': { name: 'Vitamina B1', summary: 'Essencial para metabolismo energético e função nervosa', category: 'vitamina' },
  'vitamina b2 (riboflavina)': { name: 'Vitamina B2', summary: 'Cofator energético; protege contra estresse oxidativo', category: 'vitamina' },
  'vitamina b3 (niacinamida)': { name: 'Vitamina B3', summary: 'Suporte ao metabolismo energético e reparo de DNA', category: 'vitamina' },
  'niacina (b3)': { name: 'Niacina', summary: 'Reduz colesterol e melhora perfil lipídico; cofator energético', category: 'vitamina' },
  'vitamina b5 (acido pantotenico)': { name: 'Vitamina B5', summary: 'Essencial para síntese de CoA e metabolismo energético', category: 'vitamina' },
  'biotina': { name: 'Biotina', summary: 'Essencial para saúde de cabelo, pele e unhas; cofator metabólico', category: 'vitamina' },
  'biotina (b7)': { name: 'Biotina', summary: 'Essencial para saúde de cabelo, pele e unhas; cofator metabólico', category: 'vitamina' },
  'folato (5-mthf)': { name: 'Folato Ativo', summary: 'Forma metilada do ácido fólico; essencial para metilação e DNA', category: 'vitamina' },
  'metilfolato': { name: 'Metilfolato', summary: 'Forma ativa do folato; essencial para metilação e formação de DNA', category: 'vitamina' },
  'metilfolato (5-mthf)': { name: 'Metilfolato', summary: 'Forma bioativa; crucial para metilação, humor e desenvolvimento fetal', category: 'vitamina' },
  'complexo b metilado': { name: 'Complexo B Metilado', summary: 'Todas as vitaminas B em formas ativas; energia e neuroproteção', category: 'vitamina' },
  'vitamina k2 (mk-7)': { name: 'Vitamina K2', summary: 'Direciona cálcio para ossos; previne calcificação vascular', category: 'vitamina' },

  // ── Minerais ─────────────────────────────────────────────────────────
  'melatonina': { name: 'Melatonina', summary: 'Regula ciclo circadiano e induz sono; antioxidante noturno', category: 'hormônio' },
  'melatonina micronizada': { name: 'Melatonina Micronizada', summary: 'Absorção otimizada; regula sono e ritmo circadiano', category: 'hormônio' },
  'magnesio bisglicinato': { name: 'Magnésio Bisglicinato', summary: 'Alta absorção; relaxante muscular e calmante natural', category: 'mineral' },
  'magnesio': { name: 'Magnésio', summary: 'Essencial para 300+ reações enzimáticas; relaxante muscular', category: 'mineral' },
  'magnesio l-treonato': { name: 'Magnésio L-Treonato', summary: 'Atravessa barreira cerebral; melhora memória e cognição', category: 'mineral' },
  'magnesio malato': { name: 'Magnésio Malato', summary: 'Combate fadiga e dor muscular; suporte ao ciclo de Krebs', category: 'mineral' },
  'magnesio taurato': { name: 'Magnésio Taurato', summary: 'Afinidade cardiovascular; regula pressão e ritmo cardíaco', category: 'mineral' },
  'magnesio treonato': { name: 'Magnésio Treonato', summary: 'Forma cerebral; melhora plasticidade neuronal e memória', category: 'mineral' },
  'magnesio dimalato': { name: 'Magnésio Dimalato', summary: 'Energia celular e redução de fadiga muscular', category: 'mineral' },
  'zinco': { name: 'Zinco', summary: 'Essencial para imunidade, cicatrização e função hormonal', category: 'mineral' },
  'zinco bisglicinato': { name: 'Zinco Bisglicinato', summary: 'Alta biodisponibilidade; imunidade e saúde reprodutiva', category: 'mineral' },
  'zinco quelato': { name: 'Zinco Quelato', summary: 'Forma quelada de alta absorção; suporte imunológico', category: 'mineral' },
  'zinco carnosina': { name: 'Zinco Carnosina', summary: 'Protege mucosa gástrica; cicatrização intestinal', category: 'mineral' },
  'selenio': { name: 'Selênio', summary: 'Antioxidante; essencial para tireoide e imunidade', category: 'mineral' },
  'selenio (selenometionina)': { name: 'Selênio', summary: 'Forma orgânica de alta absorção; protege tireoide', category: 'mineral' },
  'iodo': { name: 'Iodo', summary: 'Essencial para síntese de hormônios tireoidianos T3 e T4', category: 'mineral' },
  'iodo (iodeto de potassio)': { name: 'Iodo', summary: 'Forma estável; essencial para função tireoidiana', category: 'mineral' },
  'ferro bisglicinato': { name: 'Ferro Bisglicinato', summary: 'Alta absorção com menos efeitos gástricos; combate anemia', category: 'mineral' },
  'cromo picolinato': { name: 'Cromo Picolinato', summary: 'Melhora sensibilidade à insulina; controle glicêmico', category: 'mineral' },
  'cromo (picolinato)': { name: 'Cromo Picolinato', summary: 'Regula glicemia e reduz compulsão por doces', category: 'mineral' },
  'boro': { name: 'Boro', summary: 'Suporte ao metabolismo de cálcio e magnésio; saúde óssea', category: 'mineral' },
  'potassio (citrato)': { name: 'Potássio Citrato', summary: 'Eletrólito essencial; regula pressão e função muscular', category: 'mineral' },
  'cobre bisglicinato': { name: 'Cobre', summary: 'Cofator enzimático; essencial para formação de hemoglobina', category: 'mineral' },
  'manganes quelato': { name: 'Manganês', summary: 'Cofator para antioxidantes SOD; metabolismo ósseo', category: 'mineral' },
  'molibdenio': { name: 'Molibdênio', summary: 'Cofator para detoxificação de sulfitos e purinas', category: 'mineral' },
  'vanadio': { name: 'Vanádio', summary: 'Mimetiza insulina; potencial controle glicêmico', category: 'mineral' },
  'silicio organico': { name: 'Silício Orgânico', summary: 'Suporte à formação de colágeno, ossos, pele e cabelo', category: 'mineral' },
  'estroncio': { name: 'Estrôncio', summary: 'Estimula formação óssea e reduz reabsorção; saúde esquelética', category: 'mineral' },

  // ── Adaptógenos ──────────────────────────────────────────────────────
  'ashwagandha': { name: 'Ashwagandha', summary: 'Adaptógeno; reduz cortisol, ansiedade e melhora sono', category: 'adaptógeno' },
  'rhodiola rosea': { name: 'Rhodiola Rosea', summary: 'Adaptógeno; combate fadiga e melhora performance mental', category: 'adaptógeno' },
  'cordyceps': { name: 'Cordyceps', summary: 'Cogumelo adaptógeno; aumenta energia e capacidade aeróbica', category: 'adaptógeno' },
  'eleuterococo': { name: 'Eleuterococo', summary: 'Ginseng siberiano; resistência ao estresse e energia', category: 'adaptógeno' },
  'schisandra chinensis': { name: 'Schisandra', summary: 'Adaptógeno hepatoprotetor; melhora foco e resistência', category: 'adaptógeno' },
  'maca peruana': { name: 'Maca Peruana', summary: 'Adaptógeno hormonal; energia, libido e equilíbrio endócrino', category: 'adaptógeno' },
  'mucuna pruriens': { name: 'Mucuna Pruriens', summary: 'Fonte natural de L-DOPA; melhora humor e testosterona', category: 'adaptógeno' },

  // ── Fitoterápicos ────────────────────────────────────────────────────
  'passiflora incarnata': { name: 'Passiflora', summary: 'Calmante natural; modula GABA e reduz ansiedade', category: 'fitoterápico' },
  'valeriana officinalis': { name: 'Valeriana', summary: 'Sedativo natural; melhora latência e qualidade do sono', category: 'fitoterápico' },
  'valeriana': { name: 'Valeriana', summary: 'Sedativo suave; interage com receptores GABA', category: 'fitoterápico' },
  'melissa officinalis': { name: 'Melissa', summary: 'Calmante e ansiolítica; melhora humor e cognição', category: 'fitoterápico' },
  'curcumina': { name: 'Curcumina', summary: 'Anti-inflamatório potente; antioxidante e neuroprotetor', category: 'fitoterápico' },
  'berberina': { name: 'Berberina', summary: 'Regula glicemia e lipídeos; ativa AMPK como metformina natural', category: 'fitoterápico' },
  'berberina hcl': { name: 'Berberina HCl', summary: 'Regulador metabólico; controle glicêmico e lipídico', category: 'fitoterápico' },
  'boswellia serrata': { name: 'Boswellia', summary: 'Anti-inflamatório natural; inibe 5-LOX; saúde articular', category: 'fitoterápico' },
  'quercetina': { name: 'Quercetina', summary: 'Flavonoide anti-inflamatório e antioxidante; antihistamínico natural', category: 'fitoterápico' },
  'resveratrol': { name: 'Resveratrol', summary: 'Polifenol antienvelhecimento; ativa sirtuínas e protege cardiovascular', category: 'fitoterápico' },
  'trans-resveratrol': { name: 'Trans-Resveratrol', summary: 'Forma ativa; ativa SIRT1, anti-inflamatório e cardioprotetor', category: 'fitoterápico' },
  'silimarina': { name: 'Silimarina', summary: 'Hepatoprotetora; regenera células hepáticas e antioxidante', category: 'fitoterápico' },
  'ginkgo biloba': { name: 'Ginkgo Biloba', summary: 'Melhora circulação cerebral, memória e função cognitiva', category: 'fitoterápico' },
  'tribulus terrestris': { name: 'Tribulus', summary: 'Suporte à produção de testosterona e libido', category: 'fitoterápico' },
  'vitex agnus-castus': { name: 'Vitex', summary: 'Regula progesterona e ciclo menstrual; TPM e fertilidade', category: 'fitoterápico' },
  'saw palmetto': { name: 'Saw Palmetto', summary: 'Inibe 5-alfa-redutase; saúde prostática', category: 'fitoterápico' },
  'gymnema sylvestre': { name: 'Gymnema', summary: 'Reduz absorção de açúcar e compulsão por doces', category: 'fitoterápico' },
  'centella asiatica': { name: 'Centella Asiática', summary: 'Cicatrizante e neuroprotetora; melhora circulação venosa', category: 'fitoterápico' },
  'alcachofra': { name: 'Alcachofra', summary: 'Hepatoprotetora e colerética; melhora digestão de gorduras', category: 'fitoterápico' },
  'gengibre': { name: 'Gengibre', summary: 'Anti-inflamatório e antiemético; melhora digestão', category: 'fitoterápico' },
  'canela do ceilao': { name: 'Canela do Ceilão', summary: 'Regula glicemia e sensibilidade à insulina', category: 'fitoterápico' },
  'coleus forskohlii': { name: 'Coleus Forskohlii', summary: 'Ativa adenilato ciclase; termogênico e lipolítico', category: 'fitoterápico' },
  'psyllium (plantago ovata)': { name: 'Psyllium', summary: 'Fibra solúvel; regula trânsito intestinal e colesterol', category: 'fibra' },
  'banaba': { name: 'Banaba', summary: 'Ácido corosólico mimetiza insulina; controle glicêmico', category: 'fitoterápico' },
  'shatavari': { name: 'Shatavari', summary: 'Tônico feminino; equilíbrio hormonal e fertilidade', category: 'fitoterápico' },
  'triphala': { name: 'Triphala', summary: 'Blend ayurvédico; desintoxicante e regulador intestinal', category: 'fitoterápico' },
  'dente-de-leao': { name: 'Dente-de-leão', summary: 'Diurético natural; suporte hepático e digestivo', category: 'fitoterápico' },
  'hibisco': { name: 'Hibisco', summary: 'Rico em antocianinas; diurético e hipotensor natural', category: 'fitoterápico' },

  // ── Ômega/Óleos ──────────────────────────────────────────────────────
  'omega 3': { name: 'Ômega 3', summary: 'Anti-inflamatório essencial; saúde cerebral e cardiovascular', category: 'ácido graxo' },
  'omega 3 epa/dha': { name: 'Ômega 3 EPA/DHA', summary: 'EPA anti-inflamatório + DHA neuroprotetor', category: 'ácido graxo' },
  'dha (omega 3)': { name: 'DHA', summary: 'Ácido graxo cerebral; essencial para neurônios e retina', category: 'ácido graxo' },
  'cla (acido linoleico conjugado)': { name: 'CLA', summary: 'Reduz gordura corporal e melhora composição corporal', category: 'ácido graxo' },

  // ── Antioxidantes ────────────────────────────────────────────────────
  'glutationa reduzida': { name: 'Glutationa', summary: 'Master antioxidante; detox hepático e proteção celular', category: 'antioxidante' },
  'astaxantina': { name: 'Astaxantina', summary: 'Carotenoide 6000x mais potente que vitamina C; protege olhos e pele', category: 'antioxidante' },
  'coenzima q10': { name: 'CoQ10', summary: 'Essencial para produção de energia mitocondrial; cardioprotetor', category: 'antioxidante' },
  'coenzima q10 (ubiquinol)': { name: 'Ubiquinol', summary: 'Forma reduzida da CoQ10; 8x mais absorvível; energia celular', category: 'antioxidante' },
  'acido alfa-lipoico': { name: 'Ácido Alfa-Lipóico', summary: 'Antioxidante universal (hidro e lipossolúvel); neuroprotetor', category: 'antioxidante' },
  'pqq': { name: 'PQQ', summary: 'Estimula biogênese mitocondrial; neuroprotetor', category: 'antioxidante' },
  'fisetina': { name: 'Fisetina', summary: 'Senolítico natural; elimina células senescentes; antienvelhecimento', category: 'antioxidante' },
  'licopeno': { name: 'Licopeno', summary: 'Carotenoide; proteção prostática e cardiovascular', category: 'antioxidante' },
  'nadh': { name: 'NADH', summary: 'Coenzima 1; essencial para produção de ATP e energia celular', category: 'antioxidante' },
  'nmn (nicotinamida mononucleotideo)': { name: 'NMN', summary: 'Precursor de NAD+; antienvelhecimento e energia celular', category: 'antioxidante' },
  'sulforafano': { name: 'Sulforafano', summary: 'Ativa via Nrf2; potente indutor de detox e anticancerígeno', category: 'antioxidante' },

  // ── Probióticos / Intestino ──────────────────────────────────────────
  'saccharomyces boulardii': { name: 'S. boulardii', summary: 'Probiótico levedura; protege contra diarreia e C. difficile', category: 'probiótico' },
  'lactobacillus rhamnosus gg': { name: 'L. rhamnosus GG', summary: 'Probiótico de amplo espectro; imunidade e barreira intestinal', category: 'probiótico' },
  'lactobacillus plantarum': { name: 'L. plantarum', summary: 'Fortalece barreira intestinal; anti-inflamatório', category: 'probiótico' },
  'bifidobacterium lactis': { name: 'B. lactis', summary: 'Melhora trânsito intestinal e resposta imune', category: 'probiótico' },
  'bifidobacterium longum': { name: 'B. longum', summary: 'Reduz ansiedade e cortisol via eixo intestino-cérebro', category: 'probiótico' },
  'butirato de sodio': { name: 'Butirato de Sódio', summary: 'Ácido graxo de cadeia curta; nutre colonócitos e reduz inflamação', category: 'pós-biótico' },
  'inulina': { name: 'Inulina', summary: 'Prebiótico; alimenta bactérias benéficas e melhora absorção mineral', category: 'prebiótico' },
  'fos (frutooligossacarideos)': { name: 'FOS', summary: 'Prebiótico; estimula crescimento de bifidobactérias', category: 'prebiótico' },
  'colostro bovino': { name: 'Colostro Bovino', summary: 'Rico em IgG e fatores de crescimento; repara mucosa intestinal', category: 'imunomodulador' },
  'lactoferrina': { name: 'Lactoferrina', summary: 'Antimicrobiana e imunomoduladora; regula ferro e combate infecções', category: 'imunomodulador' },

  // ── Hormônios / Endócrino ────────────────────────────────────────────
  'dhea': { name: 'DHEA', summary: 'Precursor de testosterona e estrogênio; antienvelhecimento', category: 'hormônio' },
  'pregnenolona': { name: 'Pregnenolona', summary: 'Hormônio mãe; precursor de todos os esteroides; neuroprotetor', category: 'hormônio' },
  'dim (diindolilmetano)': { name: 'DIM', summary: 'Metaboliza estrogênio pela via protetora; equilíbrio hormonal', category: 'fitonutriente' },
  'dim': { name: 'DIM', summary: 'Modula metabolismo estrogênico; suporte hormonal', category: 'fitonutriente' },
  'indol-3-carbinol (i3c)': { name: 'I3C', summary: 'Precursor do DIM; detox estrogênica e proteção celular', category: 'fitonutriente' },
  'calcio d-glucarato': { name: 'Cálcio D-Glucarato', summary: 'Auxilia detox hepática de estrogênios e toxinas', category: 'suplemento' },
  'myo-inositol': { name: 'Mio-Inositol', summary: 'Sensibiliza insulina; regula ovulação em SOP', category: 'vitamina-like' },
  'mio-inositol': { name: 'Mio-Inositol', summary: 'Sensibiliza receptores de insulina; suporte ovariano', category: 'vitamina-like' },
  'inositol': { name: 'Inositol', summary: 'Reduz ansiedade e compulsão; melhora sensibilidade à insulina', category: 'vitamina-like' },
  'd-chiro-inositol': { name: 'D-Chiro-Inositol', summary: 'Complemento ao mio-inositol; otimiza ação insulínica ovariana', category: 'vitamina-like' },

  // ── Colágeno / Articulações ──────────────────────────────────────────
  'colageno tipo ii nao desnaturado (uc-ii)': { name: 'UC-II', summary: 'Colágeno tipo II não desnaturado; modula imunidade articular', category: 'colágeno' },
  'msm (metilsulfonilmetano)': { name: 'MSM', summary: 'Fonte de enxofre orgânico; anti-inflamatório articular', category: 'suplemento' },
  'acido hialuronico': { name: 'Ácido Hialurônico', summary: 'Hidratante articular e cutâneo; lubrifica cartilagens', category: 'suplemento' },

  // ── Cogumelos Medicinais ─────────────────────────────────────────────
  'juba de leao (hericium erinaceus)': { name: 'Juba de Leão', summary: 'Estimula NGF; regenera neurônios e melhora cognição', category: 'cogumelo' },

  // ── Enzimas ──────────────────────────────────────────────────────────
  'bromelina': { name: 'Bromelina', summary: 'Enzima proteolítica do abacaxi; anti-inflamatória e digestiva', category: 'enzima' },
  'nattokinase': { name: 'Nattokinase', summary: 'Enzima fibrinolítica; dissolve coágulos e melhora circulação', category: 'enzima' },
  'lactase': { name: 'Lactase', summary: 'Digere lactose; previne sintomas de intolerância', category: 'enzima' },

  // ── Fitoesteróis / Lipídicos ─────────────────────────────────────────
  'fitoesterois': { name: 'Fitoesteróis', summary: 'Competem com colesterol pela absorção; reduzem LDL', category: 'lipídeo' },
  'fitosterois': { name: 'Fitosteróis', summary: 'Esteróis vegetais; reduzem absorção de colesterol', category: 'lipídeo' },
  'policosanol': { name: 'Policosanol', summary: 'Derivado de cana; reduz LDL e melhora perfil lipídico', category: 'lipídeo' },
  'tocotrienois': { name: 'Tocotrienóis', summary: 'Forma potente de vitamina E; cardioprotetores e antioxidantes', category: 'lipídeo' },
  'fosfatidilserina': { name: 'Fosfatidilserina', summary: 'Fosfolipídeo cerebral; melhora memória e reduz cortisol', category: 'fosfolipídeo' },

  // ── Antiparasitários / Antimicrobianos ───────────────────────────────
  'artemisia annua': { name: 'Artemísia', summary: 'Antiparasitário potente; ativo contra protozoários', category: 'antiparasitário' },
  'oleo de oregano': { name: 'Óleo de Orégano', summary: 'Antimicrobiano (carvacrol); antifúngico e antiparasitário', category: 'antimicrobiano' },
  'neem': { name: 'Neem', summary: 'Antiparasitário e antimicrobiano de amplo espectro', category: 'antiparasitário' },
  'monolaurina': { name: 'Monolaurina', summary: 'Antimicrobiano derivado do coco; antiviral e antifúngico', category: 'antimicrobiano' },
  'acido caprilico': { name: 'Ácido Caprílico', summary: 'Antifúngico natural; combate Candida e biofilmes', category: 'antimicrobiano' },
  'propolis verde': { name: 'Própolis Verde', summary: 'Antimicrobiano e imunomodulador; rico em artepillin C', category: 'antimicrobiano' },

  // ── Detox / Quelantes ────────────────────────────────────────────────
  'chlorella': { name: 'Chlorella', summary: 'Microalga quelante de metais pesados; rica em clorofila', category: 'desintoxicante' },
  'spirulina': { name: 'Spirulina', summary: 'Superalimento rico em proteínas, ferro e ficocianina antioxidante', category: 'desintoxicante' },
  'clorofila': { name: 'Clorofila', summary: 'Desintoxicante; suporte hepático e alcalinizante', category: 'desintoxicante' },
  'pectina citrica modificada': { name: 'Pectina Cítrica Modificada', summary: 'Quela metais pesados; detox celular sem perder minerais', category: 'desintoxicante' },
  'carvao ativado': { name: 'Carvão Ativado', summary: 'Adsorve toxinas gastrointestinais; detox emergencial', category: 'desintoxicante' },

  // ── Patented Ingredients ─────────────────────────────────────────────
  'pharmagaba': { name: 'PharmaGABA®', summary: 'GABA natural fermentado; relaxamento superior ao sintético', category: 'patenteado' },
  'suntheanine': { name: 'Suntheanine®', summary: 'L-Teanina pura patenteada; relaxamento e foco sem sedação', category: 'patenteado' },
  'cognizin': { name: 'Cognizin®', summary: 'Citicolina patenteada; suporte à memória e energia cerebral', category: 'patenteado' },
  'magtein': { name: 'Magtein®', summary: 'Magnésio L-Treonato patenteado; único que eleva Mg cerebral', category: 'patenteado' },
  'kaneka': { name: 'Kaneka Q10®', summary: 'Ubiquinol patenteado; forma reduzida de alta absorção', category: 'patenteado' },

  // ── Emagrecimento ────────────────────────────────────────────────────
  'morosil': { name: 'Morosil®', summary: 'Extrato de laranja Moro; reduz gordura abdominal', category: 'fitoterápico' },
  'fucoxantina': { name: 'Fucoxantina', summary: 'Carotenoide marinho; ativa UCP1 e termogênese no tecido adiposo', category: 'fitoterápico' },
  'glucomanano (konjac)': { name: 'Glucomanano', summary: 'Fibra sacietogênica; expande no estômago e reduz apetite', category: 'fibra' },
  'glucomanana (konjac)': { name: 'Glucomanana', summary: 'Fibra do konjac; promove saciedade e reduz absorção calórica', category: 'fibra' },
  'capsaicina': { name: 'Capsaicina', summary: 'Termogênico da pimenta; aumenta metabolismo e oxidação de gordura', category: 'fitoterápico' },
  'garcinia cambogia': { name: 'Garcinia', summary: 'HCA inibe lipogênese e reduz apetite', category: 'fitoterápico' },

  // ── Imunidade ────────────────────────────────────────────────────────
  'beta-glucana': { name: 'Beta-Glucana', summary: 'Imunomodulador; ativa macrófagos e células NK', category: 'imunomodulador' },
  'beta-glucana (1,3/1,6)': { name: 'Beta-Glucana', summary: 'Ativa imunidade inata via receptores Dectin-1', category: 'imunomodulador' },
  'sabugueiro': { name: 'Sabugueiro', summary: 'Antiviral natural; reduz duração e severidade de resfriados', category: 'fitoterápico' },
  'arabinogalactana': { name: 'Arabinogalactana', summary: 'Prebiótico imunomodulador; estimula células NK', category: 'imunomodulador' },

  // ── Outros ───────────────────────────────────────────────────────────
  'same (s-adenosilmetionina)': { name: 'SAMe', summary: 'Doador de metil; antidepressivo e hepatoprotetor', category: 'suplemento' },
  'uridina': { name: 'Uridina', summary: 'Nucleotídeo; suporte à síntese de membranas neuronais e dopamina', category: 'suplemento' },
  'betaina hcl': { name: 'Betaína HCl', summary: 'Acidifica estômago; melhora digestão proteica em hipocloridria', category: 'digestivo' },
  'betaina (tmg)': { name: 'Betaína TMG', summary: 'Doadora de metil; suporte ao ciclo de metilação', category: 'suplemento' },
  'apigenina': { name: 'Apigenina', summary: 'Flavonoide calmante; inibe CD38 preservando NAD+', category: 'fitoterápico' },
  'espermidina': { name: 'Espermidina', summary: 'Induz autofagia; renovação celular e antienvelhecimento', category: 'poliamina' },
  'shilajit': { name: 'Shilajit', summary: 'Ácido fúlvico mineral; aumenta CoQ10 e energia mitocondrial', category: 'mineral' },
  'diosmina': { name: 'Diosmina', summary: 'Venotônico; melhora circulação venosa e reduz edema', category: 'fitoterápico' },
  'hesperidina': { name: 'Hesperidina', summary: 'Bioflavonoide cítrico; fortalece vasos e anti-inflamatório', category: 'fitoterápico' },
  'rutina': { name: 'Rutina', summary: 'Flavonoide; fortalece capilares e reduz fragilidade vascular', category: 'fitoterápico' },
  'cafeina anidra': { name: 'Cafeína', summary: 'Estimulante do SNC; aumenta alerta, foco e termogênese', category: 'estimulante' },
  'kava': { name: 'Kava', summary: 'Ansiolítico natural potente; kavapironas modulam GABA', category: 'fitoterápico' },
  'bile bovina': { name: 'Bile Bovina', summary: 'Auxilia digestão e absorção de gorduras em insuficiência biliar', category: 'digestivo' },
  'huperzina a': { name: 'Huperzina A', summary: 'Inibidor de acetilcolinesterase; melhora memória e cognição', category: 'nootrópico' },
  'colina cdp (citicolina)': { name: 'CDP-Colina', summary: 'Precursor de acetilcolina e fosfatidilcolina cerebral', category: 'nootrópico' },
  'acido d-aspartico': { name: 'Ácido D-Aspártico', summary: 'Estimula hormônio luteinizante; suporte à testosterona', category: 'aminoácido' },
  'acido folico': { name: 'Ácido Fólico', summary: 'Vitamina B9 sintética; essencial para DNA e desenvolvimento neural', category: 'vitamina' },
  'arroz vermelho fermentado': { name: 'Arroz Vermelho Fermentado', summary: 'Contém monacolina K natural; reduz colesterol LDL', category: 'fitoterápico' },
};

/**
 * Normaliza nome do ingrediente para busca no banco.
 * Remove acentos, converte para lowercase, limpa marcas registradas e parênteses.
 */
function normalize(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // remove acentos
    .replace(/[®™]/g, '')                                // remove marks
    .trim();
}

/**
 * Busca info de uma substância pelo nome do ingrediente.
 * Tenta match exato primeiro, depois match parcial.
 */
export function lookupSubstance(ingredientName: string): SubstanceInfo | undefined {
  const normalized = normalize(ingredientName);

  // Exact match
  if (DB[normalized]) return DB[normalized];

  // Try without parenthetical info: "Vitamina B6 (P5P)" → "vitamina b6 (p5p)"
  for (const key of Object.keys(DB)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return DB[key];
    }
  }

  // Try first word match for things like "Magnésio Bisglicinato (Albion®)"
  const firstWord = normalized.split(/[\s(]/)[0];
  if (firstWord.length >= 4) {
    for (const key of Object.keys(DB)) {
      if (key.startsWith(firstWord)) {
        return DB[key];
      }
    }
  }

  return undefined;
}

export { DB as substanceDatabase };
