/***************************************************************CYP3A4 tags**********************************************************************************/ 
const CYP3A4_metabolized = ['Atorvastatin', 'Lovastatin', 'Simvastatin'];
const CYP3A4_inhibitors = ['Amiodarone', 'Clarithroymycin', 'Cyclosporine', 'Erythromycin', 'Grapefruit juice', 'Itraconazole', 'Ketoconazole', 'Protease inhibitors', 'Letermorvir', 'Nefazodone'];


/**************************************************************Statin commonalities*************************************************************************/
const StatinIndications = ['Hyperlipidemia', 'High cholesterol', 'Cholesterol']; 
const StatinCrossAllergies = ['Statin'];
const StatinContraindications = ['Active liver disease', 'Pregnancy', 'High alcohol intake'];
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
let CYP3A4_statin_interactions = [{tag: 'Gemfibrozil', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: '2' },{tag: 'Verapamil', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: '2' }];
CYP3A4_statin_interactions = CYP3A4_statin_interactions.concat(
  CYP3A4_inhibitors.map((inhibitor)=>{
    return {tag: inhibitor, effect: 'Concomitant administration can lead to increased plasma concentrations of the statin', severity: '2'}; 
  })
); 
console.log(CYP3A4_statin_interactions); 


/******************************************************The Compendium of Pharmaceuticals To Be Exported To Emma*************************************************************************/
const Compendium = {
  foo: {
    chemicalName: 'foo',
    tradeNames: ['sanis-foo','teva-foo','jamp-foo','apo-foo', 'novo-foo', 'pms-foo', 'ratio-foo'],
    strengths: [0.1, 0.2, 0.5],
    unit: 'G',
    class: 'a',
    indications: ["sleeping"],
    interactionTags: [],
    crossAllergies: ['foosh', 'foog', 'fooh'],
    contraindications: ['1', '2', '3', '4'],
    doseRange: "5-10"
  },
  atorvastatin: {
    chemicalName: 'Atorvastatin',
    tradeNames: ['Lipitor', 'Atorvastatin', 'Apo-atorvastatin', 'Auro-atorvastatin', 'Jamp-atorvastatin', 'Mar-atorvastatin', 'Mylan-atorvastatin', 'Pms-atorvastatin', 'Ran-atorvastatin', 'Ratio-atorvastatin', 'Reddy-atorvastatin', 'Sandoz-atorvatatin', 'Teva-atorvastatin'],
    strengths: [10, 20, 40, 80],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions], 
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '10-80'
  },
  lovastatin: {
    chemicalName: 'Lovastatin',
    tradeNames: ['Mevacor', 'Lovastatin', 'Apo-lovastatin', 'Co-lovastatin', 'Pms-lovastatin'],
    strengths: [20, 40],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions],
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '20-80'
  },
  simvastatin: {
    chemicalName: 'Simvastatin',
    tradeNames: ['Zocor', 'Simvastatin', 'Apo-simvastatin', 'Auro-simvastatin', 'Co-simvastatin', 'Jamp-simvastatin', 'Mar-simvastatin', 'Mint-simvastatin', 'Mylan-simvastatin', 'Pms-simvastatin', 'Pharma-simvastatin', 'Ran-simvastatin', 'Taro-simvastatin', 'Teva-simvastatin'],
    strengths: [5, 10, 20, 40, 80],
    unit: 'Mg',
    class: 'Statin',
    indications: [...StatinIndications],
    interactionTags: [...CYP3A4_statin_interactions], 
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '20-80'
  },
}; 

module.exports = {
  Compendium
};
