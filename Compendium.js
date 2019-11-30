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
const StatinIndications = ['Hyperlipidemia', 'High cholesterol', 'Cholesterol']; 
const StatinCrossAllergies = ['Statin'];
const StatinContraindications = ['Active liver disease', 'Pregnant', 'High alcohol intake'];
const StatinInteractions = [{tag: 'Statin', tagType: 'class', effect: 'Potential duplicate therapy.', severity: '3'}];
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


/******************************************************The Compendium of Pharmaceuticals To Be Exported To Emma*************************************************************************/
const Compendium = {
  atorvastatin: {
    chemicalName: 'Atorvastatin',
    tradeNames: ['Lipitor', 'Atorvastatin', 'Apo-atorvastatin', 'Auro-atorvastatin', 'Jamp-atorvastatin', 'Mar-atorvastatin', 'Mylan-atorvastatin', 'Pms-atorvastatin', 'Ran-atorvastatin', 'Ratio-atorvastatin', 'Reddy-atorvastatin', 'Sandoz-atorvatatin', 'Teva-atorvastatin'],
    strengths: [10, 20, 40, 80],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions].concat(StatinInteractions), 
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: [10,80]
  },
  lovastatin: {
    chemicalName: 'Lovastatin',
    tradeNames: ['Mevacor', 'Lovastatin', 'Apo-lovastatin', 'Co-lovastatin', 'Pms-lovastatin'],
    strengths: [20, 40],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions].concat(StatinInteractions),
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: [20,80]
  },
  simvastatin: {
    chemicalName: 'Simvastatin',
    tradeNames: ['Zocor', 'Simvastatin', 'Apo-simvastatin', 'Auro-simvastatin', 'Co-simvastatin', 'Jamp-simvastatin', 'Mar-simvastatin', 'Mint-simvastatin', 'Mylan-simvastatin', 'Pms-simvastatin', 'Pharma-simvastatin', 'Ran-simvastatin', 'Taro-simvastatin', 'Teva-simvastatin'],
    strengths: [5, 10, 20, 40, 80],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions].concat(StatinInteractions), 
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: [20,80]
  },
  rosuvastatin: {
    chemicalName: 'Rosuvastatin',
    tradeNames: ['Crestor', 'Rosuvastatin', 'Ach-rosuvastatin', 'Apo-rosuvastatin', 'Auro-rosuvastatin', 'Co-rosuvastatin', 'Jamp-rosuvastatin', 'Mar-rosuvastatin', 'Med-rosuvastatin', 'Mint-rosuvastatin', 'Pms-rosuvastastin', 'Ran-rosuvastatin', 'Sandoz-rosuvastatin', 'Teva-rosuvastatin'],
    strengths: [5, 10, 20, 40],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: StatinInteractions,
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: [5,40]
  }
}; 

module.exports = {
  Compendium 
};
