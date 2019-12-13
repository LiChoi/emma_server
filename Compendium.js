/***************************************************************CYP3A4 tags**********************************************************************************/ 
const CYP3A4_metabolized = ['Atorvastatin', 'Lovastatin', 'Simvastatin'];
const CYP3A4_inhibitors = [
  {
    tag: 'Amiodarone', 
    tagType: 'chemicalName'
  }, 
  //{
  //  tag: 'Clarithroymycin', 
  //  tagType: 'chemicalName'
  //}, 
  {
    tag:'Cyclosporine',
    tagType: 'chemicalName'
  },
  {
    tag: 'Erythromycin',
    tagType: 'chemicalName'
  },
  {
    tag: 'Grapefruit juice',
    tagType: 'food'
  },
  {
    tag: 'Itraconazole',
    tagType: 'chemicalName'
  },
  {
    tag: 'Ketoconazole',
    tagType: 'chemicalName'
  },
  {
    tag: 'Protease inhibitors',
    tagType: 'class'
  },
  {
    tag: 'Letermorvir',
    tagType: 'chemicalName',
  },
  {
    tag: 'Nefazodone',
    tagType: 'chemicalName'
  }
];


/**************************************************************Statin commonalities*************************************************************************/
const StatinIndications = ['Hyperlipidemia']; 
const StatinCrossAllergies = ['Statin'];
const StatinContraindications = [{tag: 'Active liver disease', details: 'Liver toxicity'}, {tag: 'Pregnant', details: 'Teratogenic'}, {tag: 'High alcohol intake', details: 'Liver toxicity'}];
const StatinInteractions = [
  {
    tag: 'Statin', tagType: 'class', effect: 'Potential duplicate therapy.', severity: '3'
  },
  {
    tag: 'Cholestyramine', tagType: 'chemicalName', effect: 'Must be taken 1 hour before or 4 hours after cholestyramine or else reduced absorption of drug.', severity: '2'
  },
];
let CYP3A4_statin_interactions = [{tag: 'Gemfibrozil', tagType: 'chemicalName', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: '3' },{tag: 'Verapamil', tagType: 'chemicalName', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: '3' }];
CYP3A4_statin_interactions = CYP3A4_statin_interactions.concat(
  CYP3A4_inhibitors.map((inhibitor)=>{
    return {tag: inhibitor.tag, tagType: inhibitor.tagType, effect: 'Concomitant administration can lead to increased level and toxicity of the statin', severity: '3'}; 
  })
); 
CYP3A4_statin_interactions.push(
  {
    tag: 'CYP3A4-inhibitor', tagType: 'tag', effect: 'Concomitant administration can lead to increased level and toxicity of the statin.', severity: '3'
  }
);

/************************************************************Fibrate commonalities***************************************************************************************/
const FibrateCIs = [
  {
    tag: 'crcl<20', //All creatinine clearance values must be in ml/min
    details: 'Significantly increased levels of drug.'
  },
  {
    tag: 'Poor renal function', //All creatinine clearance values must be in ml/min
    details: 'Significantly increased levels of drug.'
  }, 
  {
    tag: 'Hepatic insufficiency', 
    details: 'Affects liver function tests. Increased risk of myopathy.'
  },
  {
    tag: 'Gallbladder disease',
    details: 'Fibrates increase cholesterol excretion into the bile, increasing risk of gallbladder stones.'
  },
  {
    tag: 'Pancreatitis',
    details: 'Can worsen pancreatitis.'
  },
  {
    tag: 'Pregnant',
    details: 'Not studied in this population.'
  },
  {
    tag: 'Breastfeeding',
    details: "Not studied in this population."
  },
  {
    tag: 'age<18',
    details: "Not studied in this population."
  }
];

const FibrateInteractions = [
  {
    tag: 'Statin',
    tagType: 'class',
    effect: 'Benefit must outweigh risk of myopathy.',
    severity: '3'
  },
  {
    tag: 'Cyclosporine', 
    tagType: 'chemicalName', 
    effect: "Risk of severe myositis and rhabdomyolysis.", 
    severity: '3'
  },
  {
    tag: 'Cholestyramine',
    tagType: 'chemicalName',
    effect: 'Space out or else reduced absorption of fibrate.',
    severity: '2'
  }
];

const FibrateAllergies = ['Fibrate', 'Peanuts'];

/********************************************************Oral contraceptive commonalities**********************************************************************/
const BloodClotRiskFactorsList = ['age>35', 'Smoking', 'History of heart attack', 'History of stroke', 'Angina', 'Blood clots', 'Active liver disease', 'Atrial fibrillation', 'Diabetes', 'Migraines', 'Pancreatitis'];
const BloodClotRiskFactors = BloodClotRiskFactorsList.map((CI)=>{
  return {tag: CI, details: 'Increased risk of blood clots.'};
});
const EstrogenDependentCancersList = ['Breast cancer', 'Estrogen-dependent cancer'];
const EstrogenDependentCancers = EstrogenDependentCancersList.map((CI)=>{
  return {tag: CI, details: 'Increased risk of estrogen-dependent cancer.'};
});
const EstrogenOCContraindications = [{tag: 'Pregnant', details: 'Not to be taken during pregnancy.'}, {tag: 'Breastfeeding', details: 'Decreased breast milk production.'}, ...BloodClotRiskFactors, ...EstrogenDependentCancers];
const EstrogenOCInteractions = [
  {
    tag: 'Oral contraceptive',
    tagType: 'class',
    effect: 'Potential duplicate therapy.',
    severity: '3'
  },
  {
    tag: 'Barbiturates',
    tagType: 'class',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Phenytoin',
    tagType: 'chemicalName',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Primidone',
    tagType: 'chemicalName',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Topiramate',
    tagType: 'chemicalName',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Carbamazepine',
    tagType: 'chemicalName',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Antimycobacterials', //Rifampi, rifabutin
    tagType: 'class',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Protease inhibitor',
    tagType: 'class',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'St. John’s Wort',
    tagType: 'herbal',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Cyclosporine',
    tagType: 'chemicalName',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
  {
    tag: 'Prednisone',
    tagType: 'chemicalName',
    effect: 'Decreased effectiveness of birth control.',
    severity: '3'
  },
];

/*
Cigarette smoking increases the risk of serious adverse
effects on the heart and blood vessels. This risk increases
with age and becomes significant in birth control pill users
over 35 years of age. Women who use birth control pills
should not smoke. 
*/

/*****************************************************************************Antibiotics*************************************************************************/
const AllAntibioticInteractions = [
  {
    tag: 'Oral Contraceptive', 
    tagType: 'class', 
    effect: 'Antibiotics may affect the gut flora, leading to lower estrogen reabsorption and reduced efficacy of combined oral estrogen/progesterone contraceptives.', 
    severity: '0'
  }
];

const AmoxicillinInteractions = [
  {
    tag: 'Beta-lactam',
    tagType: 'class',
    effect: 'Same class - duplicate therapy.',
    severity: '2'
  },
  {
    tag: 'Warfarin',
    tagType: 'chemicalName',
    effect: 'Affects INR. Monitor INR closely.',
    severity: '1'
  },
  {
    tag: 'Probenecid',
    tagType: 'chemicalName',
    effect: 'Reduced excretion of amoxicillin, resulting in increased levels.',
    severity: '1'
  },
  {
    tag: 'Methotrextate',
    tagType: 'chemicalName',
    effect: 'Reduced excretion of methotrextate, resulting in higher risk of methotrexate toxicity.',
    severity: '2'
  }
];

const AmoxicillinCIs = [{tag: 'Infectious mononucleosis', details: 'Causes non-allergic rash.'}];

const CephalosporinInteractions = [
  {
    tag: 'Beta-lactam',
    tagType: 'class',
    effect: 'Same class - duplicate therapy.',
    severity: '2'
  }
];

const FluoroquinoloneInteractions = [
  {
    tag: 'Fluoroquinolone',
    tagType: 'class',
    effect: 'Same class - duplicate therapy.',
    severity: '2'
  },
  {
    tag: 'Warfarin',
    tagType: 'chemicalName',
    effect: 'Increased effect of warfarin. Monitor INR closely.',
    severity: '2'
  },
  {
    tag: 'Antacid',
    tagType: 'class',
    effect: 'Binds to and reduces absorption of the antibiotic.',
    severity: '2'
  },
  {
    tag: 'Iron',
    tagType: 'class',
    effect: 'Binds to and reduces absorption of the antibiotic.',
    severity: '2'
  },
  {
    tag: 'Calcium',
    tagType: 'class',
    effect: 'Binds to and reduces absorption of the antibiotic.',
    severity: '2'
  },
  {
    tag: 'Corticosteroid',
    tagType: 'class',
    effect: 'Increased risk of tendon rupture with this combination. Use with caution.',
    severity: '2'
  }
];

const FluoroquinoloneCIs = [
  {
    tag: 'age<=18',
    details: 'Limited data in this age group. Possible damage to weight-bearing joints in pre-pubertal patients.'
  },
  {
    tag: 'age>60',
    details: 'Higher risk of tendon rupture, QT-prolongation in this age group. Use with caution.'
  },
  {
    tag: 'Tendinitis',
    details: 'Risk of tendon rupture.'
  },
  {
    tag: 'Seizures',
    details: 'Increased risk of seizure. Use with caution.'
  },
  {
    tag: 'Myasthenia gravis',
    details: 'May worsen muscle weakness.'
  },
  {
    tag: 'Breastfeeding',
    details: 'Excreted in milk. Possible damage to developing joints.'
  }
];

const MacrolideInteractions = [{tag: 'Macrolide', tagType: 'class', effect: 'Same class. Duplicate therapy.', severity: '2'}];

/******************************************************The Compendium of Pharmaceuticals To Be Exported To Emma*************************************************************************/
const Compendium = {
  atorvastatin: {
    chemicalName: 'Atorvastatin',
    tradeNames: ['Lipitor', 'Atorvastatin', 'Apo-atorvastatin', 'Auro-atorvastatin', 'Jamp-atorvastatin', 'Mar-atorvastatin', 'Mylan-atorvastatin', 'Pms-atorvastatin', 'Ran-atorvastatin', 'Ratio-atorvastatin', 'Reddy-atorvastatin', 'Sandoz-atorvatatin', 'Teva-atorvastatin'],
    strengths: ['10mg', '20mg', '40mg', '80mg'],
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions].concat(StatinInteractions), 
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '10mg-80mg',
    tags: ['CYP3A4-substrate', 'All']
  },
  lovastatin: {
    chemicalName: 'Lovastatin',
    tradeNames: ['Mevacor', 'Lovastatin', 'Apo-lovastatin', 'Co-lovastatin', 'Pms-lovastatin'],
    strengths: ['20mg', '40mg'],
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions].concat(StatinInteractions),
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '20mg-80mg',
    tags: ['CYP3A4-substrate', 'All']
  },
  simvastatin: {
    chemicalName: 'Simvastatin',
    tradeNames: ['Zocor', 'Simvastatin', 'Apo-simvastatin', 'Auro-simvastatin', 'Co-simvastatin', 'Jamp-simvastatin', 'Mar-simvastatin', 'Mint-simvastatin', 'Mylan-simvastatin', 'Pms-simvastatin', 'Pharma-simvastatin', 'Ran-simvastatin', 'Taro-simvastatin', 'Teva-simvastatin'],
    strengths: ['5mg', '10mg', '20mg', '40mg', '80mg'],
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions].concat(StatinInteractions), 
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: "20mg-80mg",
    tags: ['CYP3A4-substrate', 'All']
  },
  rosuvastatin: {
    chemicalName: 'Rosuvastatin',
    tradeNames: ['Crestor', 'Rosuvastatin', 'Ach-rosuvastatin', 'Apo-rosuvastatin', 'Auro-rosuvastatin', 'Co-rosuvastatin', 'Jamp-rosuvastatin', 'Mar-rosuvastatin', 'Med-rosuvastatin', 'Mint-rosuvastatin', 'Pms-rosuvastastin', 'Ran-rosuvastatin', 'Sandoz-rosuvastatin', 'Teva-rosuvastatin'],
    strengths: ['5mg', '10mg', '20mg', '40mg'],
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: StatinInteractions,
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '5mg-40mg',
    tags: ['All']
  },
  pravastatin: {
    chemicalName: 'Pravastatin',
    tradeNames: ['Pravachol', 'Pravastatin'],
    strengths: ['10mg', '20mg', '40mg'],
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...StatinInteractions, {tag: 'Cyclosporine', tagType: 'chemicalName', effect: "Significantly increased levels of pravastatin.", severity: '3'}],
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '20mg-80mg',
    tags: ['All']
  },
  fenofibrateSupra: {
    chemicalName: 'Fenofibrate',
    tradeNames: ['Lipidil Supra', 'Fenofibrate'],
    strengths: ['100mg', '160mg'],
    class: 'Fibrate',
    indications: [...StatinIndications],
    interactionTags: [...FibrateInteractions],
    crossAllergies: [...FibrateAllergies],
    contraindications: [...FibrateCIs],
    doseRange: '100mg-200mg',
    tags: ['All']
  },
  fenofibrateEZ: {
    chemicalName: 'Fenofibrate EZ',
    tradeNames: ['Lipidil EZ', 'Fenofibrate'],
    strengths: ['48mg', '145mg'],
    class: 'Fibrate',
    indications: [...StatinIndications],
    interactionTags: [...FibrateInteractions],
    crossAllergies: [...FibrateAllergies],
    contraindications: [...FibrateCIs],
    doseRange: '48mg-145mg',
    tags: ['All']
  },
  gemfibrozil: {
    chemicalName: 'Gemfibrozil',
    tradeNames: ['Lopid', 'Gemfibrozil'],
    strengths: ['300mg', '600mg'],
    class: 'Fibrate',
    indications: [...StatinIndications],
    interactionTags: [...FibrateInteractions, {tag: 'Repaglinide', tagType: 'chemicalName', effect: 'Severe hypoglycemia', severity: '3'}],
    crossAllergies: [...FibrateAllergies],
    contraindications: [...FibrateCIs],
    doseRange: '1200mg-1500mg',
    tags: ['All']
  },
  ezetimibe : {
    chemicalName: 'Ezetimibe',
    tradeNames: ['Ezetrol', 'Ezetimibe'],
    strengths: ['10mg'],
    class: 'Ezetimibe',
    indications: [...StatinIndications],
    interactionTags: [{tag: 'Fibrate', tagType: 'class', effect: 'Increased level of ezetimibe.', severity: '1'},{tag: 'Cyclosporine', tagType: 'chemicalName', effect: 'Increased level of ezetimibe.', severity: '2'}],
    crossAllergies: ['Ezetimibe'],
    contraindications: [{tag: 'Active liver disease', details: 'Contraindicated in combination with statin and active liver disease.'}],
    doseRange: '10mg',
    tags: ['All']
  },
  cholestyramine: {
    chemicalName: 'Cholestyramine',
    tradeNames: ['Olestyr', 'Questran', 'Cholestyramine'],
    strengths: ['4g'],
    class: 'Resin',
    indications: [...StatinIndications],
    interactionTags: [{tag: 'All', tagType: 'All', effect: 'Take other medication 1 hour before or 4-6 hours after cholestyramine or else it will reduce their absorption.', severity: '2'}],
    crossAllergies: ['Cholestyramine'],
    contraindications: [{tag: 'Biliary obstruction', details: 'It will worsen condition.'}],
    doseRange: '4g-24g',
    tags: ['All']
  },
  nicotinicAcid: {
    chemicalName: 'Nicotinic acid',
    tradeNames: ['Niacin', 'Niaspan', 'Nicotinic acid'],
    strengths: ['100mg', '500mg', '750mg', '1g'],
    class: 'Nicotinic acid',
    indications: [...StatinIndications],
    interactionTags: [{tag: 'Lovastatin', tagType: 'chemicalName', effect: 'Risk of myopathy.', severity: '2'}],
    crossAllergies: ['Nicotinic acid'],
    contraindications: [{tag: 'Peptic ulcer disease', details: 'It will worsen the condition.'},{tag: 'Chronic liver disease', details: 'It will worsen the condition.'},{tag: 'Gout', details: 'It will worsen the condition.'}],
    doseRange: '500mg-2000mg',
    tags: ['All']
  },
  oralContraceptive: {
    chemicalName: "Ethinyl-estradiol/progesterone-analogue",
    tradeNames: ['Diane 35', 'Alesse', 'Alysena', 'Aviane', 'Lutera', 'Triquilar', 'Triphasic', 'Min-ovral', 'Portia', 'Marvelon', 'Mirvala', 'Apri', 'Ortho-cept', 'Cyclen', 'Linessa', 'Tri cyclen', 'Tri cyclen lo', 'Tricira lo', 'Yasmin', 'Yaz', 'Minestrin', 'Loestrin', 'Demulen', 'Brevicon', 'Ortho 7/7/7', 'Seasonale', 'Seasonique'],
    strengths: ['1tab'],
    class: 'Oral contraceptive',
    indications: ['Birth control', 'Acne'],
    interactionTags: [...EstrogenOCInteractions],
    crossAllergies: ['Ethinyl estradiol', 'Oral contraceptive', 'Norethindrone', 'Ethynodiol diacetate', 'Levonorgestrel', 'Norgestrel'],
    contraindications: [...EstrogenOCContraindications],
    doseRange: '1tab',
    tags: ['All']
  },
  amoxicillin: {
    chemicalName: 'Amoxicillin',
    tradeNames: ['Amoxicillin', 'Amoxil', 'Apo-amoxi', 'Novamoxin', 'Amoxil chewable', 'Novamoxin chewable'],
    strengths: ['125mg', '250mg', '500mg', '50mg/ml', '25mg/ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...AmoxicillinInteractions
    ],
    crossAllergies: ['Beta-lactam'],
    contraindications: [...AmoxicillinCIs],
    doseRange: '0mg-3000mg',
    tags: ['All']
  },
  amoxiClav: {
    chemicalName: 'Amoxicillin/clavulanate',
    tradeNames: ['Clavulin', 'Apo-amoxi clav', 'Amoxi clav'],
    strengths: ['50mg&12.5mg/ml', '25mg & 6.25mg/ml', '400mg&57mg/5ml', '200mg & 28.5mg/5ml', '875mg&125mg', '500mg&125mg', '250mg&125mg'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...AmoxicillinInteractions
    ],
    crossAllergies: ['Beta-lactam', 'Amoxicillin/clavulanate', 'Clavulanate'],
    contraindications: [...AmoxicillinCIs],
    doseRange: '0mg-3000mg',
    tags: ['Clavulanate']
  },
  penicillin: {
    chemicalName: 'Penicillin',
    tradeNames: ['Penicillin', 'Apo-Pen V-K', 'PEN V-K'],
    strengths: ['300mg', '25mg/ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Tetracycline', tagType: 'class', effect: 'Reduced effect of penicillin.', severity: '3'},
    ],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-3000mg',
    tags: ['All']
  },
  cloxacillin: {
    chemicalName: 'Cloxacillin',
    tradeNames: ['Cloxacillin', 'Orbenin', 'Apo-cloxi'],
    strengths: ['500mg', '250mg'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [...AllAntibioticInteractions],
    crossAllergies: ['Beta-lactam'],
    contraindications: [
      {tag: 'Food', details: 'Take on empty stomach.'}
    ],
    doseRange: '0mg-4000mg',
    tags: ['All']
  },
  ampicillin: {
    chemicalName: 'Ampicillin',
    tradeNames: ['Ampicillin', 'Penbritin'],
    strengths: ['500mg', '250mg'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {
        tag: 'Allopurinol',
        tagType: 'chemicalName',
        effect: 'Increased risk of rash.',
        severity: '1'
      }
    ],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-2000mg',
    tags: ['All']
  },
  cephalexin: {
    chemicalName: 'Cephalexin',
    tradeNames: ['Cephalexin', 'Cephalosporin', 'Ceporex', 'Keflex'], //Putting 'Cephalosporin' in as tradename just so it will show up in suggested lists
    strengths: ['500mg', '250mg', '50mg/ml', '25mg/ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [...AllAntibioticInteractions, ...CephalosporinInteractions],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-4000mg',
    tags: ['Cephalosporin', 'All']
  },
  cefprozil: {
    chemicalName: 'Cefprozil',
    tradeNames: ['Cefzil', 'Cefprozil'],
    strengths: ['500mg', '250mg', '50mg/ml', '25mg/ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...CephalosporinInteractions,
      {
        tag: ' Probenecid',
        tagType: 'chemicalName',
        effect: 'Increased levels of cefprozil.',
        severity: '2'
      },
      {
        tag: 'Aminoglycoside',
        tagType: 'class',
        effect: 'Risk of nephrotoxicity and ototoxicity with aminoglycosides. Monitor renal function.',
        severity: '2'
      }
    ],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-1000mg',
    tags: ['Cephalosporin', 'All']
  },
  cefixime: {
    chemicalName: 'Cefixime',
    tradeNames: ['Suprax', 'Cefixime'], 
    strengths: ['400mg', '20mg/ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [...AllAntibioticInteractions, ...CephalosporinInteractions, {tag: 'Warfarin', tagType: 'chemicalName', effect: 'Increased risk of bleeding. Monitor INR closely.', severity: '1'}],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-400mg',
    tags: ['Cephalosporin', 'All']
  },
  cefuroxime: {
    chemicalName: 'Cefuroxime',
    tradeNames: ['Ceftin', 'Cefuroxime'], 
    strengths: ['250mg', '500mg', '125mg/5ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions, 
      ...CephalosporinInteractions,
      {
        tag: 'Antacid', 
        tagType: 'class', 
        effect: 'Acid reducers decrease absorption of this antibiotic.', 
        severity: '2'
      },
      {
        tag: 'Proton pump inhibitor', 
        tagType: 'class', 
        effect: 'Acid reducers decrease absorption of this antibiotic.', 
        severity: '2'
      }
    ],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-1000mg',
    tags: ['Cephalosporin', 'All']
  },
  cefaclor: {
    chemicalName: 'Cefaclor',
    tradeNames: ['Ceclor', 'Cefaclor'], 
    strengths: ['500mg', '250mg', '50mg/ml', '25mg/ml', '375mg/5ml'],
    class: 'Beta-lactam',
    indications: ['Infection'],
    interactionTags: [...AllAntibioticInteractions, ...CephalosporinInteractions],
    crossAllergies: ['Beta-lactam'],
    contraindications: [],
    doseRange: '0mg-2000mg',
    tags: ['Cephalosporin', 'All']
  },
  ciprofloxacin: {
    chemicalName: 'Ciprofloxacin',
    tradeNames: ['Ciprofloxacin', 'Cipro', 'Cipro XL', 'Apo-ciproflox'],
    strengths: ['250mg', '500mg', '750mg', '1000mg', '100mg/ml'],
    class: 'Fluoroquinolone',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...FluoroquinoloneInteractions,
      {
        tag: 'Theophylline',
        tagType: 'chemicalName',
        effect: 'Increased level of theophylline.',
        severity: '2'
      },
      {
        tag: 'Caffeine',
        tagType: 'chemicalName',
        effect: 'Increased effect of caffeine.',
        severity: '1'
      },
      {
        tag: 'Probenecid',
        tagType: 'chemicalName',
        effect: 'Increased level of the antibiotic.',
        severity: '2'
      }
    ],
    crossAllergies: ['Fluoroquinolones'],
    contraindications: [
      ...FluoroquinoloneCIs
    ],
    doseRange: '0mg-1500mg',
    tags: ['Cation-chelation', 'All']
  },
  levofloxacin: {
    chemicalName: 'Levofloxacin',
    tradeNames: ['Levaquin', 'Levofloxacin'], 
    strengths: ['250mg', '500mg', '750mg'],
    class: 'Fluoroquinolone',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...FluoroquinoloneInteractions,
      {
        tag: 'QT-prolongation',
        tagType: 'tag',
        effect: 'Both drugs cause QT-prolongation - risk of arrythmia.',
        severity: '2'
      }
    ],
    crossAllergies: ['Fluoroquinolones'],
    contraindications: [
      ...FluoroquinoloneCIs
    ],
    doseRange: '250mg-750mg',
    tags: ['QT-prolongation', 'Cation-chelation', 'All']
  },
  moxifloxacin: {
    chemicalName: 'Moxifloxacin',
    tradeNames: ['Avelox', 'Moxifloxacin'], 
    strengths: ['400mg'],
    class: 'Fluoroquinolone',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...FluoroquinoloneInteractions,
      {
        tag: 'QT-prolongation',
        tagType: 'tag',
        effect: 'Both drugs cause QT-prolongation - risk of arrythmia.',
        severity: '2'
      }
    ],
    crossAllergies: ['Fluoroquinolones'],
    contraindications: [
      ...FluoroquinoloneCIs
    ],
    doseRange: '400mg',
    tags: ['QT-prolongation', 'Cation-chelation', 'All']
  },
  norfloxacin: {
    chemicalName: 'Norfloxacin',
    tradeNames: ['Noroxin', 'Norfloxacin'], 
    strengths: ['400mg'],
    class: 'Fluoroquinolone',
    indications: ['UTI'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...FluoroquinoloneInteractions
    ],
    crossAllergies: ['Fluoroquinolones'],
    contraindications: [...FluoroquinoloneCIs],
    doseRange: '400mg-800mg',
    tags: ['Cation-chelation', 'All']
  },
  azithromycin: {
    chemicalName: 'Azithromycin',
    tradeNames: ['Z-pak', 'Zithromax', 'Azithromycin'], 
    strengths: ['250mg', '200mg/5ml', '100mg/5ml'],
    class: 'Macrolide',
    indications: ['Infection'],
    interactionTags: [...AllAntibioticInteractions, ...MacrolideInteractions],
    crossAllergies: ['Macrolide'],
    contraindications: [
      {tag: 'Active liver disease', details: 'Impaired elimination of drug.'}, 
      {tag: 'Biliary obstruction', details: 'Impaired elimination of drug.'}
    ],
    doseRange: '0mg-2000mg',
    tags: ['All']
  },
  clarithromycin: {
    chemicalName: 'Clarithromycin',
    tradeNames: ['Biaxin', 'Clarithromycin'], 
    strengths: ['250mg', '500mg', '250mg/5ml', '125mg/5ml'],
    class: 'Macrolide',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...MacrolideInteractions,
      {tag: 'Midazolam', tagType: 'chemical', effect: 'Serious risk of CNS effects such as confusion, somnolence.', severity: '3'},
      {tag: 'Astemizole', tagType: 'chemical', effect: 'Prolonged-QT. Contraindicated.', severity: '3'},
      {tag: 'Cisapride', tagType: 'chemical', effect: 'Prolonged-QT. Contraindicated.', severity: '3'},
      {tag: 'Pimozide', tagType: 'chemical', effect: 'Prolonged-QT. Contraindicated.', severity: '3'},
      {tag: 'Terfenadine', tagType: 'chemical', effect: 'Prolonged-QT. Contraindicated.', severity: '3'},
      {tag: 'Lovastatin', tagType: 'chemical', effect: 'Significantly increased level of the statin, risk of muscle breakdown. Contraindicated.', severity: '3'},
      {tag: 'Simvastatin', tagType: 'chemical', effect: 'Significantly increased level of the statin, risk of muscle breakdown. Contraindicated.', severity: '3'},
      {tag: 'Colchicine', tagType: 'chemicalName', effect: 'Risk of life threatening colchicine toxiciy.', severity: '3'},
      {tag: 'Saquinavir', tagType: 'chemicalName', effect: 'Potential life threatening cardiac arrythmia.', severity: '3'},
      {tag: 'Ergot alkaloids', tagType: 'class', effect: 'Contraindicated due to ergot toxicity, peripheral ischemia.', severity: '3'},
      {tag: 'QT-prolongation', tagType: 'tag', effect: 'Both drugs cause QT-prolongation. Risk of arrythmia.', severity: '3'},
      {tag: 'Sulphonyluria', tagType: 'class', effect: 'Potential hypoglycemia. Monitor blood sugar closely.', severity: '2'},
      {tag: 'Insulin', tagType: 'class', effect: 'Potential hypoglycemia. Monitor blood sugar closely.', severity: '2'},
      {tag: 'CYP3A4-substrate', tagType: 'tag', effect: 'Clarithromycin significantly increases level of the co-administered drug.', severity: '3'},
      {tag: 'Pgp-substrate', tagType: 'tag', effect: 'Increased concentration of drugs transported by Pgp.', severity: '2'},
      {tag: 'Warfarin', tagType: 'tag', effect: 'Increased risk of bleeding. Monitor INR closely.', severity: '2'}
    ],
    crossAllergies: ['Macrolide'],
    contraindications: [
      {tag: 'Poor renal function', details: 'Adjust dose accordingly. Contraindicated if also has hepatic impairment.'},
      {tag: 'Hepatic impairment', details: 'Contraindicated if also has renal insufficiency.'},
      {tag: 'Pregnant', details: 'Should not be taken during pregnancy, particularly during the first trimester.'}
    ],
    doseRange: '0mg-1000mg',
    tags: ['QT-prolongation', 'CYP3A4-inhibitor', 'Pgp-inhibitor', 'Increases INR', 'All']
  },
  erythromycin: {
    chemicalName: 'Erythromycin',
    tradeNames: ['Eryc', 'Erythromycin', 'Erythrocin', 'EES', 'Erythro-S', 'Erythro-ES', 'Erythro-base'], 
    strengths: ['250mg', '500mg'],
    class: 'Macrolide',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      ...MacrolideInteractions,
      {tag: 'QT-prolongation', tagType: 'tag', effect: 'Both drugs cause QT-prolongation. Risk of arrythmia.', severity: '3'},
      {tag: 'Ergot alkaloids', tagType: 'class', effect: 'Contraindicated due to ergot toxicity, peripheral ischemia.', severity: '3'},
      {tag: 'CYP3A4-substrate', tagType: 'tag', effect: 'Clarithromycin significantly increases level of the co-administered drug.', severity: '3'},
      {tag: 'Warfarin', tagType: 'chemicalName', effect: 'Increased risk of bleeding. Monitor INR closely.', severity: '2'},
      {tag: 'Clindamycin', tagType: 'chemical', effect: 'Antibiotics countereact each other.', severity: '3'},
    ],
    crossAllergies: ['Macrolide'],
    contraindications: [],
    doseRange: '0mg-2000mg',
    tags: ['QT-prolongation', 'CYP3A4-inhibitor', 'Increases INR', 'All']
  },
  septra: {
    chemicalName: 'Sulfamethoxazole/Trimethoprim',
    tradeNames: ['Septra', 'Bactrim', 'Cotrimoxazole', 'Sulfamethoxazole/Trimethoprim', 'SMX/TMP', 'Sulfatrim', 'Teva-trimel'], 
    strengths: ['40mg&8mg/ml', '400mg&80mg', '800mg&160mg'],
    class: 'Sulfonamide',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Sulfonamide', tagType: 'class', effect: 'Duplicate therapy.', severity: '2'},
      {tag: 'Warfarin', tagType: 'chemicalName', effect: 'Increased risk of bleeding. Monitor INR closely.', severity: '2'},
      {tag: 'Phenytoin', tagType: 'chemicalName', effect: 'Higher levels of phenytoin. Monitor closely.', severity: '2'},
      {tag: 'Methotrexate', tagType: 'chemicalName', effect: 'Increases free MTX levels.', severity: '2'},
      {tag: 'Increases K+', tagType: 'tag', effect: 'Drugs that increase potassium have a cummulative effect.', severity: '2'},
      {tag: 'CYP2C9-substrate', tagType: 'tag', effect: 'Sulfamethoxazole is a CYP2C9 inhibitor.', severity: '2'},
      {tag: 'CYP2C8-substrate', tagType: 'tag', effect: 'Trimethoprim is a CYP2C8 inhibitor.', severity: '2'}
    ],
    crossAllergies: ['Sulfonamide', 'Trimethoprim', 'Sulfamethoxazole'],
    contraindications: [
      {tag: 'Poor renal function', details: ''},
      {tag: 'Pregnant', details: 'Passes through placenta. May cause kernicterus.'},
      {tag: 'Breastfeeding', details: 'Gets into breast milk. May cause kernicterus.'},
      {tag: 'age==0', details: 'Contraindicated in infants less than 2 months of age.'},
      {tag: 'Thrombocytopenia', details: ''},
      {tag: 'Megaloblastic anemia', details: ''},
      {tag: 'G6PD', details: ''}
    ],
    doseRange: '0mg-320mg',
    tags: ['Trimethoprim', 'Sulfamethoxazole', 'Increases INR', 'Increases K+', 'CYP2C9-inhibitor', 'CYP2C8-inhibitor', 'All']
  },
  doxycycline: {
    chemicalName: 'Doxycycline',
    tradeNames: ['Vibramycin', 'Doxycycline', 'Apo-doxy', 'Periostat'], 
    strengths: ['100mg', '20mg'],
    class: 'Tetracycline',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Tetracycline', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'},
      {tag: 'Isotretinoin', tagType: 'chemicalName', effect: 'Combination contraindicated.', severity: '3'},
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased bleeding risk.', severity: '2'},
      {tag: 'Antacid', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Calcium', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Magnesium', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Iron', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Bismuth subsalicylate', tagType: 'class', effect: 'Reduces absorption of antibiotic.', severity: '2'},
      {tag: 'Penicillin', tagType: 'chemical', effect: 'Reduced effect of penicillin.', severity: '3'}
    ],
    crossAllergies: ['Tetracycline'],
    contraindications: [
      {tag: 'Myasthenia gravis', details: ''},
      {tag: 'Pregnant', details: 'May cause permanent discoloration of teeth in newborn.'},
      {tag: 'Breastfeeding', details: 'May cause permanent discoloration of teeth in newborn.'},
      {tag: 'age<=8', details: 'May cause permanent discoloration of teeth.'},
      {tag: 'Alcohol', details: 'Reduced effect of antibiotic.'},
    ],
    doseRange: '100mg-200mg',
    tags: ['Increases INR', 'Cation-chelation', 'All']
  },
  minocycline: {
    chemicalName: 'Minocycline',
    tradeNames: ['Minocin', 'Minocycline'], 
    strengths: ['50mg', '100mg'],
    class: 'Tetracycline',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Tetracycline', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'},
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased bleeding risk.', severity: '2'},
      {tag: 'Antacid', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Calcium', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Magnesium', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Iron', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Bismuth subsalicylate', tagType: 'class', effect: 'Reduces absorption of antibiotic.', severity: '2'},
      {tag: 'Penicillin', tagType: 'chemical', effect: 'Reduced effect of penicillin.', severity: '3'}
    ],
    crossAllergies: ['Tetracycline'],
    contraindications: [
      {tag: 'Pregnant', details: 'May cause permanent discoloration of teeth in newborn.'},
      {tag: 'Breastfeeding', details: 'May cause permanent discoloration of teeth in newborn.'},
      {tag: 'age<13', details: 'May cause permanent discoloration of teeth.'},
      {tag: 'Alcohol', details: 'Liver toxicity.'},
    ],
    doseRange: '50mg-200mg',
    tags: ['Increases INR', 'Cation-chelation', 'All']
  },
  tetracycline: {
    chemicalName: 'Tetracycline',
    tradeNames: ['Tetracycline'], 
    strengths: ['250mg'],
    class: 'Tetracycline',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Tetracycline', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'},
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased bleeding risk.', severity: '2'},
      {tag: 'Antacid', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Calcium', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Magnesium', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Iron', tagType: 'class', effect: 'Binds to antibiotic and reduces absorption. Space them out.', severity: '2'},
      {tag: 'Bismuth subsalicylate', tagType: 'class', effect: 'Reduces absorption of antibiotic.', severity: '2'},
      {tag: 'Penicillin', tagType: 'chemical', effect: 'Reduced effect of penicillin.', severity: '3'},
      {tag: 'Methoxyflurane', tagType: 'chemical', effect: 'Severely impairs renal function in combination.', severity: '3'}
    ],
    crossAllergies: ['Tetracycline'],
    contraindications: [
      {tag: 'Active liver disease', details: ''},
      {tag: 'Poor renal function', details: ''},
      {tag: 'Pregnant', details: 'May cause permanent discoloration of teeth in newborn.'},
      {tag: 'Breastfeeding', details: 'May cause permanent discoloration of teeth in newborn.'},
      {tag: 'age<12', details: 'May cause permanent discoloration of teeth.'},
      {tag: 'Alcohol', details: 'Reduced effect of antibiotic.'},
      {tag: 'Food', details: 'Take on empty stomach.'}
    ],
    doseRange: '250mg-2000mg',
    tags: ['Increases INR', 'Cation-chelation', 'All']
  },
  clindamycin: {
    chemicalName: 'Clindamycin',
    tradeNames: ['Dalacin', 'Clindamycin'], 
    strengths: ['150mg', '300mg', '15mg/ml'],
    class: 'Clindamycin',
    indications: ['Infection'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Clindamycin', tagType: 'chemical', effect: 'Same drug. Duplicate.', severity: '3'},
      {tag: 'Erythromycin', tagType: 'chemical', effect: 'Antibiotics countereact each other.', severity: '3'},
      {tag: 'CYP3A4-inhibitor', tagType: 'tag', effect: 'Increased level of clindamycin.', severity: '2'},
      {tag: 'CYP3A4-inducer', tagType: 'tag', effect: 'Decreased level of clindamycin.', severity: '2'}
    ],
    crossAllergies: ['Clindamycin'],
    contraindications: [
      {tag: 'age==0', details: 'Until further clinical experience is obtained CLINDAMYCIN is not indicated in the newborn (infant below 30 days of age).'},
      {tag: 'Breastfeeding', details: 'Gets into breastmilk.'} 
    ],
    doseRange: '0mg-1800mg',
    tags: ['CYP3A4-substrate']
  },
  metronidazole: {
    chemicalName: 'Metronidazole',
    tradeNames: ['Flagyl', 'Metronidazole'], 
    strengths: ['250mg', '500mg'],
    class: 'Metronidazole',
    indications: ['Infection', 'Parasites'],
    interactionTags: [
      ...AllAntibioticInteractions,
      {tag: 'Metronidazole', tagType: 'chemical', effect: 'Duplicate.', severity: '3'},
      {tag: 'Busulfan', tagType: 'chemical', effect: 'Increased level of busulfan.', severity: '3'},
      {tag: 'Disulfiram', tagType: 'chemical', effect: 'Acute psychoses and confusion.', severity: '3'},
      {tag: '5-Fluorouracil', tagType: 'chemical', effect: 'Increased level of 5-Fluorouracil, leading to toxicity.', severity: '3'},
      {tag: 'Lithium', tagType: 'chemical', effect: 'Decreased lithium clearance -> lithium intoxication, renal damage.', severity: '3'},
      {tag: 'Warfarin', tagType: 'chemical', effect: 'Increased risk of bleeding. Monitor more frequently.', severity: '2'},
    ],
    crossAllergies: ['Metronidazle'],
    contraindications: [
      {tag: 'Alcohol', details: 'Avoid alcohol during and at least 1 day after thearpy. Can cause vomiting, flushing, rapid heartbeat.'},
      {tag: 'Hypothyroidism', details: ''},
      {tag: 'Blood dyscrasia', details: ''},
      {tag: 'Hypoadrenalism', details: ''},
      {tag: 'Neurological disorder', details: 'Some reports of seizures.'},
      {tag: 'Condoms', details: 'Metronidazole cream can impair integrity of condoms.'},
      {tag: 'Pregnant', details: 'Passes through placental barrier.'},
      {tag: 'Breastfeeding', details: 'Gets into breastmilk.'}
    ],
    doseRange: '0mg-1800mg',
    tags: ['Increases INR']
  },
  fosfomycin: {
    chemicalName: 'Fosfomycin',
    tradeNames: ['Monurol', 'Fosfomycin'], 
    strengths: ['3g'],
    class: 'Fosfomycin',
    indications: ['Bladder infection'],
    interactionTags: [
      {tag: 'Fosfomycin', tagType: 'chemical', effect: 'Duplicate.', severity: '3'},
      {tag: 'Probenecid', tagType: 'chemical', effect: 'Decreases renal clearance of fosfomycin.', severity: '2'},
      {tag: 'Metoclopramide', tagType: 'chemical', effect: 'Decreases renal clearance of fosfomycin', severity: '2'}
    ],
    crossAllergies: ['Fosfomycin'],
    contraindications: [
      {tag: 'Food', details: 'Take on empty stomach.'}
    ],
    doseRange: '3g',
    tags: ['All']
  },
  nitrofurantoin: {
    chemicalName: 'Nitrofurantoin',
    tradeNames: ['Macrobid', 'Nitrofurantoin'], 
    strengths: ['50mg', '100mg'],
    class: 'Nitrofurantoin',
    indications: ['Bladder infection'],
    interactionTags: [
      {tag: 'Nitrofurantoin', tagType: 'chemical', effect: 'Duplicate.', severity: '3'},
      {tag: 'Magnesium', tagType: 'chemical', effect: 'Magnesium trisilicate found in antacids reduces effectiveness of antibiotic.', severity: '3'}
    ],
    crossAllergies: ['Nitrofurantoin'],
    contraindications: [
      {tag: 'Anuria', details: 'Impaired excretion of drug, making it less effective and more toxic.'},
      {tag: 'Oliguria', details: 'Impaired excretion of drug, making it less effective and more toxic.'},
      {tag: 'Poor renal function', details: 'Impaired excretion of drug, making it less effective and more toxic.'},
      {tag: 'crcl<60', details: 'Impaired excretion of drug, making it less effective and more toxic.'},
      {tag: 'age==0', details: 'Risk of hemolytic anemia in infants under one month of age.'},
      {tag: 'Pregnant', details: 'Contraindicated during labour and close to delivery. Risk of hemolytic anemia in newborn.'},
      {tag: 'G6PD', details: 'Hemolytic anemia.'}
    ],
    doseRange: '100mg-400mg',
    tags: []
  },
  trimethoprim: {
    chemicalName: 'Trimethoprim',
    tradeNames: ['Proloprim', 'Trimethoprim', 'TMP'], 
    strengths: ['3g'],
    class: 'Trimethoprim',
    indications: ['Infection'],
    interactionTags: [
      {tag: 'Trimethoprim', tagType: 'chemical', effect: 'Duplicate.', severity: '3'},
      {tag: 'Phenytoin', tagType: 'chemical', effect: 'Increased level of phenytoin.', severity: '3'}
    ],
    crossAllergies: ['Trimethoprim'],
    contraindications: [
      {tag: 'Megaloblastic anemia', details: 'Folate deficiency.'}
    ],
    doseRange: '200mg',
    tags: []
  },
  vancomycin: {
    chemicalName: 'Vancomycin',
    tradeNames: ['Vancocin', 'Vancomycin'], 
    strengths: ['125mg', '250mg'],
    class: 'Vancomycin',
    indications: ['C.difficile'],
    interactionTags: [
      {tag: 'Vancomycin', tagType: 'chemical', effect: 'Duplicate.', severity: '3'}
    ],
    crossAllergies: ['Vancomycin'],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '0mg-2000mg',
    tags: ['All']
  },
  levothyroxine: {
    chemicalName: 'Levothyroxine',
    tradeNames: ['Levothyroxine', 'Synthroid', 'Eltroxin'],
    strengths: ['0.125mg', '0.2mg', '0.5mg', '0.075mg', '0.1mg'],
    class: 'Levothyroxine',
    indications: ['Hypothyroidism'],
    interactionTags: [
      {tag: 'Cation', tagType: 'tag', effect: 'Binds to metal cations, reduced absorption. Space them out.', severity: '3'}
    ],
    crossAllergies: ['Levothyroxine'],
    contraindications: [
      {tag: 'Hyperthyroidism', details: 'Further increases thyroid levels.'}
    ],
    doseRange: '',
    tags: ['Cation-chelation', 'All']
  },
  warfarin: {
    chemicalName: 'Warfarin',
    tradeNames: ['Coumadin', 'Warfarin'], 
    strengths: ['1', '2', '2.5', '5'],
    class: 'Anticoagulant',
    indications: ['Prevent blood clots'],
    interactionTags: [
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Combining anticoagulants increases risk of bleeding.', severity: '3'},
      {tag: 'Antiplatelet', tagType: 'class', effect: 'Combining with antiplatelet increases risk of bleeding.', severity: '2'},
      {tag: 'Increases INR', tagType: 'tag', effect: 'Increased risk of bleeding. Monitor INR closely.', severity: '2'},
      {tag: 'CYP2C9-inhibitor', tagType: 'tag', effect: 'Increased warfarin level. Adjust dose based on INR accordingly.', severity: '2'},
      {tag: 'NSAID', tagType: 'class', effect: 'NSAIDs inhibit platelet aggregation. Increased bleeding risk.', severity: '2'}
    ],
    crossAllergies: ['Warfarin'],
    contraindications: [
      {tag: 'Pregnant', details: 'Warfarin passes through placental barrier and can cause fatal hemorrhage to the the fetus.'},
      {tag: 'Breastfeeding', details: 'Gets into breastmilk.'},
      {tag: 'Active bleeding', details: 'Anticoagulant will worsen the bleeding.'},
      {tag: 'Gastrointestinal ulcer', details: 'Can cause ulcer to bleed.'},
      {tag: 'Aneurysm', details: 'Will worsen the internal bleeding.'},
      {tag: 'Anemia', details: 'Will worsen the condition.'}
    ],
    doseRange: '0mg-20mg',
    tags: []
  },
  asa: {
    chemicalName: 'Acetylsalicylic acid',
    tradeNames: ['Aspirin', 'ASA', 'Acetylsalicylic acid'], 
    strengths: ['81mg', '325mg'],
    class: 'NSAID',
    indications: ['Prevent blood clots', 'Pain'],
    interactionTags: [
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'Antiplatelet', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'NSAID', tagType: 'class', effect: 'Increased risk of stomach bleeding. Interferance with ASA platelet binding.', severity: '3'},
      {tag: 'Methotrexate', tagType: 'chemicalName', effect: 'Contraindicated at MTX dose of 15mg/week or more due to reduced renal clearance of MTX.', severity: '3'},
      {tag: 'Diuretic', tagType: 'class', effect: 'At high doses of ASA, decreased glomerular filtration.'},
      {tag: 'SSRI', tagType: 'class', effect: 'Increased risk of stomach bleeding. Use with caution.'}
    ],
    crossAllergies: ['NSAID'],
    contraindications: [
      {tag: 'Pregnant', details: 'Avoid in 1st and 2nd trimester. Contraindicated in last trimester.'},
      {tag: 'Active bleeding', details: 'Antiplatelet will worsen the bleeding.'},
      {tag: 'Gastrointestinal ulcer', details: 'Can cause ulcer to bleed.'},
      {tag: 'Aneurysm', details: 'Will worsen the internal bleeding.'},
      {tag: 'Active liver disease', details: ''},
      {tag: 'Renal failure', details: 'Impaired ASA clearance.'},
      {tag: 'Congestive heart failure', details: ''},
      {tag: 'Anemia', details: 'Will worsen the condition.'},
      {tag: 'age<11', details: "Risk of Reye's Syndrome."},
      {tag: 'G6PD', details: 'ASA may induce hemolysis or haemolytic anemia.'}
    ],
    doseRange: '81mg-650mg',
    tags: ['Antiplatelet']
  },
  ibuprofen: {
    chemicalName: 'Ibuprofen',
    tradeNames: ['Advil', 'Ibuprofen', 'Motrin'], 
    strengths: ['100mg', '200mg', '400mg', '600mg'],
    class: 'NSAID',
    indications: ['Pain', 'Fever'],
    interactionTags: [
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'Antiplatelet', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'NSAID', tagType: 'class', effect: 'Same class. Increased risk of stomach bleeding.', severity: '3'},
      {tag: 'Diuretic', tagType: 'class', effect: 'Affects kidney.'},
      {tag: 'SSRI', tagType: 'class', effect: 'Increased risk of stomach bleeding. Use with caution.'},
      {tag: 'ACE-inhibitor', tagType: 'class', effect: 'Reduced effectiveness of antihypertensive.'},
      {tag: 'ARB', tagType: 'class', effect: 'Reduced effectiveness of antihypertensive.'}
    ],
    crossAllergies: ['NSAID'],
    contraindications: [
      {tag: 'Pregnant', details: 'Contraindicated in third trimester.'},
      {tag: 'Active bleeding', details: 'Can worsen the bleeding.'},
      {tag: 'Gastrointestinal ulcer', details: 'Further irritates ulcer, bleed risk.'},
      {tag: 'Aneurysm', details: 'Will worsen the internal bleeding.'},
      {tag: 'Active liver disease', details: ''},
      {tag: 'Poor renal function', details: 'Worsens kidney function.'},
      {tag: 'crcl<30', details: 'Worsens kidney function.'},
      {tag: 'Systemic lupus erythematosus', details: "Anaphylaxis-like reaction with fever may occur."}
    ],
    doseRange: '0mg-1600mg',
    tags: []
  },
  naproxen: {
    chemicalName: 'Naproxen',
    tradeNames: ['Naprosyn', 'Naproxen', 'Aleve', 'Anaprox', 'Apo-napro-na', 'Maxidol'], 
    strengths: ['125mg', '220mg', '250mg', '500mg'],
    class: 'NSAID',
    indications: ['Pain', 'Fever'],
    interactionTags: [
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'Antiplatelet', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'NSAID', tagType: 'class', effect: 'Same class. Increased risk of stomach bleeding.', severity: '3'},
      {tag: 'Diuretic', tagType: 'class', effect: 'Affects kidney.'},
      {tag: 'SSRI', tagType: 'class', effect: 'Increased risk of stomach bleeding. Use with caution.'},
      {tag: 'ACE-inhibitor', tagType: 'class', effect: 'Reduced effectiveness of antihypertensive.'},
      {tag: 'ARB', tagType: 'class', effect: 'Reduced effectiveness of antihypertensive.'}
    ],
    crossAllergies: ['NSAID'],
    contraindications: [
      {tag: 'Pregnant', details: 'Contraindicated in third trimester.'},
      {tag: 'Active bleeding', details: 'Can worsen the bleeding.'},
      {tag: 'Gastrointestinal ulcer', details: 'Further irritates ulcer, bleed risk.'},
      {tag: 'Aneurysm', details: 'Will worsen the internal bleeding.'},
      {tag: 'Active liver disease', details: ''},
      {tag: 'Poor renal function', details: 'Worsens kidney function.'},
      {tag: 'crcl<30', details: 'Worsens kidney function.'},
      {tag: 'Heart failure', details: "Risk of adverse cardiovascular event."}
    ],
    doseRange: '220mg-1000mg',
    tags: []
  },
  acetaminophen: {
    chemicalName: 'Acetaminophen',
    tradeNames: ['Tylenol', 'Acetaminophen', 'Paracetamol'], 
    strengths: ['125mg', '250mg', '500mg'],
    class: 'Acetaminophen',
    indications: ['Pain', 'Fever'],
    interactionTags: [
      {tag: 'Acetaminophen', tagType: 'chemicalName', effect: 'Duplicate.', severity: '3'}
    ],
    crossAllergies: ['Acetaminophen'],
    contraindications: [{tag: 'Alcohol', details: 'Risk of liver toxicity at high doses.'}],
    doseRange: '0mg-4000mg',
    tags: ['Increases INR']
  },
  diphenhydramine: {
    chemicalName: 'Diphenhydramine',
    tradeNames: ['Benadryl', 'Diphenhydramine'], 
    strengths: ['25mg', '50mg'],
    class: '1st Gen Anti-histamine',
    indications: ['Allergies', 'Sleep'],
    interactionTags: [
      {tag: 'Anti-histamine', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'},
      {tag: 'Sedating', tagType: 'tag', effect: 'Additive sedative effects.', severity: '2'},
      {tag: 'MAO-ihibitor', tagType: 'class', effect: 'Increased anticholinergic effect of diphenhydramine.', severity: '2'},
    ],
    crossAllergies: ['Anti-histamine'],
    contraindications: [
      {tag: 'Glaucoma', details: 'Can worsen narrow-angle glaucoma.'},
      {tag: 'Enlarged prostate', details: 'Can make it more difficult to urinate.'},
      {tag: 'Breastfeeding', details: 'Gets into breastmilk.'}
    ],
    doseRange: '0mg-300mg',
    tags: ['Sedating']
  },
  cetirizine: {
    chemicalName: 'Cetirizine',
    tradeNames: ['Reactine', 'Cetirizine'], 
    strengths: ['5mg', '10mg', '20mg'],
    class: '2nd Gen Anti-histamine',
    indications: ['Allergies'],
    interactionTags: [
      {tag: 'Anti-histamine', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'}
    ],
    crossAllergies: ['Anti-histamine'],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '0mg-20mg',
    tags: []
  },
  loratadine: {
    chemicalName: 'Loratadine',
    tradeNames: ['Claritin', 'Loratadine'], 
    strengths: ['10mg'],
    class: '2nd Gen Anti-histamine',
    indications: ['Allergies'],
    interactionTags: [
      {tag: 'Anti-histamine', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'}
    ],
    crossAllergies: ['Anti-histamine'],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '0mg-10mg',
    tags: []
  },
  desloratadine: {
    chemicalName: 'Desloratadine',
    tradeNames: ['Aerius', 'Desloratadine'], 
    strengths: ['5mg', '10mg'],
    class: '2nd Gen Anti-histamine',
    indications: ['Allergies'],
    interactionTags: [
      {tag: 'Anti-histamine', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'}
    ],
    crossAllergies: ['Anti-histamine'],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '0mg-10mg',
    tags: []
  },
  fexofenadine: {
    chemicalName: 'Fexofenadine',
    tradeNames: ['Allegra', 'Fexofenadine'], 
    strengths: ['5mg', '10mg'],
    class: '2nd Gen Anti-histamine',
    indications: ['Allergies'],
    interactionTags: [
      {tag: 'Anti-histamine', tagType: 'class', effect: 'Duplicate therapy.', severity: '3'}
    ],
    crossAllergies: ['Anti-histamine'],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '0mg-10mg',
    tags: []
  },
  pseudoephedrine: {
    chemicalName: 'Pseudoephedrine',
    tradeNames: ['Sudafed', 'Sinutab', 'Eltor', 'Pseudoephedrine', 'Phenylephrine'], //Phenylephrine is not the same as pseudoephedrine, but it does the same thing and has same properties
    strengths: ['30mg'],
    class: 'Decongestant',
    indications: ['Decongestant'],
    interactionTags: [
      {tag: 'Decongestant', tagType: 'class', effect: 'Duplicate.', severity: '3'},
      {tag: 'MAO-inhibitor', tagType: 'class', effect: 'Pseudoephedrine is contraindicated in patients receiving or having received MAO inhibitors in the preceding three weeks.', severity: '3'},
      {tag: 'Beta-blocker', tagType: 'class', effect: 'Counteracts antihypertensive effect of beta-blocker.', severity: '2'}
    ],
    crossAllergies: ['Decongestant', 'Pseudoephedrine'],
    contraindications: [
      {tag: 'Glaucoma', details: 'Can worsen condition.'},
      {tag: 'Coronary artery disease', details: 'Further strains the heart.'},
      {tag: 'Congestive heart failure', details: 'Further strains the heart.'},
      {tag: 'Enlarged prostate', details: 'Makes it more difficult to urinate.'},
      {tag: 'Urinary retention', details: 'Makes it more difficult to urinate.'},
      {tag: 'Hyperthyroidism', details: 'Worsens symptoms.'},
      {tag: 'age<6', details: 'Not indicated in this age group.'}
    ],
    doseRange: '30mg-100mg',
    tags: []
  },
  antihistamineDecongestantCombos: {
    chemicalName: 'anti-histamine and decongestant combos',
    tradeNames: ['Claritin-D', 'Reactine-Complete', 'Allegra-D', 'Aerius Dual Action', 'Dimetapp'],
    strengths: ['various'],
    class: 'Antihistamine/decongestant',
    indications: ['Allergies'],
    interactionTags: [
      {tag: 'Anti-histamine', tagType: 'class', effect: 'Duplicate.', severity: '3'},
      {tag: 'Decongestant', tagType: 'class', effect: 'Duplicate.', severity: '3'},
      {tag: 'Antihistamine/decongestant', tagType: 'class', effect: 'Duplicate.', severity: '3'},
      {tag: 'MAO-inhibitor', tagType: 'class', effect: 'Pseudoephedrine is contraindicated in patients receiving or having received MAO inhibitors in the preceding three weeks.', severity: '3'},
      {tag: 'Beta-blocker', tagType: 'class', effect: 'Counteracts antihypertensive effect of beta-blocker.', severity: '2'}
    ],
    crossAllergies: ['Anti-histamine', 'Decongestant'],
    contraindications: [
      {tag: 'Glaucoma', details: 'Can worsen condition.'},
      {tag: 'Coronary artery disease', details: 'Further strains the heart.'},
      {tag: 'Congestive heart failure', details: 'Further strains the heart.'},
      {tag: 'Enlarged prostate', details: 'Makes it more difficult to urinate.'},
      {tag: 'Urinary retention', details: 'Makes it more difficult to urinate.'},
      {tag: 'Hyperthyroidism', details: 'Worsens symptoms.'},
      {tag: 'age<6', details: 'Not indicated in this age group.'}
    ],
    doseRange: '',
    tags: ['Anti-histamine', 'Decongestant']
  },
  dextromethorphan: {
    chemicalName: 'Dextromethorphan',
    tradeNames: ['Dextromethorphan', 'DM', 'Robitussin Cough Control', 'Koffex', 'Benylin DM', 'Benylin Dry Cough'],
    strengths: ['3mg/ml'],
    class: 'Antitussive',
    indications: ['Cough'],
    interactionTags: [
      {tag: 'Dextromethorphan', tagType: 'chemicalName', effect: 'Duplicate.', severity: '1'},
      {tag: 'MAO-inhibitor', tagType: 'class', effect: 'Risk of serotonin syndrome during or within 14 days after stopping MAO-inhibitor.', severity: '2'}
    ],
    crossAllergies: ['Opioid', 'Dextromethorphan'],
    contraindications: [{tag: 'age<6', details: 'Not indicated in this age group.'}],
    doseRange: '',
    tags: []
  },
  coughAndColdCombosWithDecongestant: {
    chemicalName: 'c&c&decongestant',
    tradeNames: ['Dimetapp-DM', 'Tylenol Complete', 'Neocitran', 'Robitussin Cough Control', 'Robitussin Complete Daytime', 'Benylin All-In-One', 'Life Brand Total Cold and Flu Extra Strength'],
    strengths: ['3mg/ml'],
    class: 'c&c&decongestant',
    indications: ['Cough and cold'],
    interactionTags: [
      {tag: 'Dextromethorphan', tagType: 'chemicalName', effect: 'Duplicate.', severity: '1'},
      {tag: 'MAO-inhibitor', tagType: 'class', effect: 'Risk of serotonin syndrome during or within 14 days after stopping MAO-inhibitor.', severity: '2'},
      {tag: 'Decongestant', tagType: 'class', effect: 'Duplicate.', severity: '3'},
      {tag: 'Beta-blocker', tagType: 'class', effect: 'Decongestant counteracts antihypertensive effect of beta-blocker.', severity: '2'}
    ],
    crossAllergies: ['Opioid', 'Dextromethorphan','Decongestant', 'Pseudoephedrine'],
    contraindications: [
      {tag: 'Glaucoma', details: 'Can worsen condition.'},
      {tag: 'Coronary artery disease', details: 'Further strains the heart.'},
      {tag: 'Congestive heart failure', details: 'Further strains the heart.'},
      {tag: 'Enlarged prostate', details: 'Makes it more difficult to urinate.'},
      {tag: 'Urinary retention', details: 'Makes it more difficult to urinate.'},
      {tag: 'Hyperthyroidism', details: 'Worsens symptoms.'},
      {tag: 'age<6', details: 'Not indicated in this age group.'}
    ],
    doseRange: 'varies',
    tags: ['Dextromethorphan', 'Decongestant', 'Antitussive', 'Pseudoephedrine', 'Opioid']
  },
  advilCoughAndColdWithDecongestant: {
    chemicalName: 'advilCoughAndColdWithDecongestant',
    tradeNames: ['Advil Cold & Sinus'],
    strengths: ['3mg/ml'],
    class: 'advilCoughAndColdWithDecongestant',
    indications: ['Cough and cold'],
    interactionTags: [
      {tag: 'MAO-inhibitor', tagType: 'class', effect: 'Risk of serotonin syndrome during or within 14 days after stopping MAO-inhibitor.', severity: '2'},
      {tag: 'Decongestant', tagType: 'class', effect: 'Duplicate.', severity: '3'},
      {tag: 'Beta-blocker', tagType: 'class', effect: 'Decongestant counteracts antihypertensive effect of beta-blocker.', severity: '2'},
      {tag: 'Anticoagulant', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'Antiplatelet', tagType: 'class', effect: 'Increased risk of bleeding.', severity: '3'},
      {tag: 'NSAID', tagType: 'class', effect: 'Same class. Increased risk of stomach bleeding.', severity: '3'},
      {tag: 'Diuretic', tagType: 'class', effect: 'Affects kidney.'},
      {tag: 'SSRI', tagType: 'class', effect: 'Increased risk of stomach bleeding. Use with caution.'},
      {tag: 'ACE-inhibitor', tagType: 'class', effect: 'Reduced effectiveness of antihypertensive.'},
      {tag: 'ARB', tagType: 'class', effect: 'Reduced effectiveness of antihypertensive.'}
    ],
    crossAllergies: ['Decongestant', 'Pseudoephedrine', 'NSAID'],
    contraindications: [
      {tag: 'Glaucoma', details: 'Can worsen condition.'},
      {tag: 'Coronary artery disease', details: 'Further strains the heart.'},
      {tag: 'Congestive heart failure', details: 'Further strains the heart.'},
      {tag: 'Enlarged prostate', details: 'Makes it more difficult to urinate.'},
      {tag: 'Urinary retention', details: 'Makes it more difficult to urinate.'},
      {tag: 'Hyperthyroidism', details: 'Worsens symptoms.'},
      {tag: 'age<6', details: 'Not indicated in this age group.'},
      {tag: 'Pregnant', details: 'Contraindicated in third trimester.'},
      {tag: 'Active bleeding', details: 'Can worsen the bleeding.'},
      {tag: 'Gastrointestinal ulcer', details: 'Further irritates ulcer, bleed risk.'},
      {tag: 'Aneurysm', details: 'Will worsen the internal bleeding.'},
      {tag: 'Active liver disease', details: ''},
      {tag: 'Poor renal function', details: 'Worsens kidney function.'},
      {tag: 'crcl<30', details: 'Worsens kidney function.'},
      {tag: 'Systemic lupus erythematosus', details: "Anaphylaxis-like reaction with fever may occur."}
    ],
    doseRange: 'varies',
    tags: ['Decongestant', 'Antitussive', 'Pseudoephedrine', 'NSAID']
  },
  calcium: {
    chemicalName: 'Calcium',
    tradeNames: ['Calcium'],
    strengths: ['500'],
    class: 'Calcium',
    indications: ['Bones'],
    interactionTags: [
      {tag: 'Cation-chelation', tagType: 'tag', effect: 'Binds to drug, reducing absorption. Space them out.', severity: '2'}
    ],
    crossAllergies: [],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '',
    tags: ['Cation']
  },
  magnesium: {
    chemicalName: 'Magnesium',
    tradeNames: ['Magnesium'],
    strengths: ['500'],
    class: 'Magnesium',
    indications: [''],
    interactionTags: [
      {tag: 'Cation-chelation', tagType: 'tag', effect: 'Binds to drug, reducing absorption. Space them out.', severity: '2'}
    ],
    crossAllergies: [],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '',
    tags: ['Cation']
  },
  iron: {
    chemicalName: 'Iron',
    tradeNames: ['Iron', 'Ferrous sulfate', 'Ferrous gluconate', 'Ferrous fumerate', 'Ferramax', 'Triferrix', 'Euro-fer'],
    strengths: ['300mg'],
    class: 'Iron',
    indications: ['Low iron level'],
    interactionTags: [
      {tag: 'Cation-chelation', tagType: 'tag', effect: 'Binds to drug, reducing absorption. Space them out.', severity: '2'}
    ],
    crossAllergies: [],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '',
    tags: ['Cation']
  },
  antacids: {
    chemicalName: 'Antacid',
    tradeNames: ['Tums', 'Alka-seltzer', 'Maalox', 'Mylanta', 'Rolaids', 'Antacid', 'Milk of magnesia', 'Gaviscon', 'Gelusil', 'Pepto-bismol', 'Sucralfate'],
    strengths: ['500'],
    class: 'Antacid',
    indications: ['Heartburn'],
    interactionTags: [
      {tag: 'Cation-chelation', tagType: 'tag', effect: 'Binds to drug, reducing absorption. Space them out.', severity: '2'}
    ],
    crossAllergies: [],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '',
    tags: ['Cation']
  }
  /*dummy: {
    chemicalName: '',
    tradeNames: [],
    strengths: [],
    class: '',
    indications: [],
    interactionTags: [
      {tag: '', tagType: '', effect: '', severity: ''}
    ],
    crossAllergies: [],
    contraindications: [
      {tag: '', details: ''}
    ],
    doseRange: '',
    tags: []
  }*/
}; 

module.exports = {
  Compendium 
};
