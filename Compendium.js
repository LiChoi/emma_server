/***************************************************************CYP3A4 tags**********************************************************************************/ 
const CYP3A4_metabolized = ['Atorvastatin', 'chemicalName', 'Lovastatin', 'Simvastatin'];
const CYP3A4_inhibitors = [
  {
    tag: 'Amiodarone', 
    tagType: 'chemicalName'
  }, 
  {
    tag: 'Clarithroymycin', 
    tagType: 'chemicalName'
  }, 
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
  }
];
/* 
CYP3A4 statins only...
Cytochrome P-450-mediated Interactions: Atorvastatin is metabolized by the cytochrome
P-450 isoenzyme, CYP 3A4. Interaction may occur when LIPITOR is administered with
inhibitors of cytochrome P450 3A4 such as grapefruit juice, some macrolide antibiotics (i.e.
erythromycin, clarithromycin), immunosuppressants (cyclosporine), azole antifungal agents (i.e.
itraconazole, ketoconazole), transporter inhibitors, HIV/HCV protease inhibitors, letermovir or
the antidepressant, nefazodone. Concomitant administration can lead to increased plasma
concentrations of atorvastatin 
*/
let CYP3A4_statin_interactions = [{tag: 'Gemfibrozil', tagType: 'chemicalName', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: '3' },{tag: 'Verapamil', tagType: 'chemicalName', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: '3' }];
CYP3A4_statin_interactions = CYP3A4_statin_interactions.concat(
  CYP3A4_inhibitors.map((inhibitor)=>{
    return {tag: inhibitor.tag, tagType: inhibitor.tagType, effect: 'Concomitant administration can lead to increased plasma concentrations of the statin', severity: '3'}; 
  })
); 
//console.log(CYP3A4_statin_interactions); 

/************************************************************Fibrate commonalities***************************************************************************************/
const FibrateCIs = [
  {
    tag: 'crcl<20', //All creatinine clearance values must be in ml/min
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
    doseRange: '10mg-80mg'
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
    doseRange: '20mg-80mg'
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
    doseRange: "20mg-80mg"
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
    doseRange: '5mg-40mg'
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
    doseRange: '20mg-80mg'
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
    doseRange: '100mg-200mg'
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
    doseRange: '48mg-145mg'
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
    doseRange: '1200mg-1500mg'
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
    doseRange: '10mg'
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
    doseRange: '4g-24g'
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
    doseRange: '500mg-2000mg'
  },
  oralContraceptive: {
    chemicalName: "Ethinyl-estradiol/progesterone-analogue",
    tradeNames: ['Ethinyl-estradiol', 'Diane 35', 'Alesse', 'Alysena', 'Aviane', 'Lutera', 'Triquilar', 'Triphasic', 'Min-ovral', 'Portia', 'Marvelon', 'Mirvala', 'Apri', 'Ortho-cept', 'Cyclen', 'Linessa', 'Tri cyclen', 'Tri cyclen lo', 'Tricira lo', 'Yasmin', 'Yaz', 'Minestrin', 'Loestrin', 'Demulen', 'Brevicon', 'Ortho 7/7/7', 'Seasonale', 'Seasonique'],
    strengths: ['1tab'],
    class: 'Oral contraceptive',
    indications: ['Birth control', 'Acne'],
    interactionTags: [...EstrogenOCInteractions],
    crossAllergies: ['Ethinyl estradiol'],
    contraindications: [...EstrogenOCContraindications],
    doseRange: '1tab'
  },
}; 

module.exports = {
  Compendium 
};
