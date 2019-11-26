const StatinIndications = ['Hyperlipidemia', 'High cholesterol', 'Cholesterol']; 
const StatinInteractions = [{tag: 'Amiodarone', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }, {tag: 'Azole', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }, {tag: 'Clarithromycin', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }, {tag: 'Erythromycin', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }, {tag: 'Gemfibrozil', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }, {tag: 'Grapefruit juice', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }, {tag: 'Verapamil', effect: 'Increased toxicity. Breakdown of muscle tissue.', severity: 'High' }];
const StatinCrossAllergies = ['Statin'];
const StatinContraindications = ['Active liver disease', 'Pregnancy', 'High alcohol intake'];

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
    interactionTags: [...StatinInteractions],
    crossAllergies: [...StatinCrossAllergies],
    contraindications: [...StatinContraindications],
    doseRange: '10-80'
  }
}; 

module.exports = {
  Compendium
};
