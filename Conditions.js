const Compendium = require('./Compendium.js').Compendium;

let Conditions = {};
Object.keys(Compendium).forEach((drug)=>{
  Compendium[drug].contraindications.forEach((CI)=>{
    Conditions[CI.tag] = {primaryTerm: CI.tag, relatedTerms: [CI.tag]};
  });
});

const AddRelatedTerms = (primaryTerm, relatedTerms) => {
  if (Conditions.hasOwnProperty(primaryTerm)){
    Conditions[primaryTerm].relatedTerms = [...Conditions[primaryTerm].relatedTerms, ...relatedTerms];
  } else {
    Conditions[primaryTerm] = {primaryTerm: primaryTerm, relatedTerms: [primaryTerm, ...relatedTerms]};
  }
}

AddRelatedTerms('Pregnant', ['Pregnancy']);
AddRelatedTerms('Breastfeeding', ['Nursing']);
AddRelatedTerms('Smoking', ['Smokes', 'Smoker']);
AddRelatedTerms('Alcohol', ['Drinks', 'Beer', 'Wine', 'Hooch']);
AddRelatedTerms('High alcohol intake', ['Alcoholism', 'Alcohol abuse', 'Alcoholic']);
AddRelatedTerms('Hypertension', ["High blood pressure"]);
AddRelatedTerms('Hyperlipidemia', ["Hypercholesterolemia", "Lipid disorder", "High blood cholesterol", "High cholesterol", "Bad cholesterol"]);
AddRelatedTerms('Familial hypercholesterolemia', []);
AddRelatedTerms('Atrial fibrillation', ["A-fib", "AF"]);
AddRelatedTerms('Ventricular tachycardia', ["VT"]); 
AddRelatedTerms('Diabetes', ['Type 1 diabetes', 'Type 2 diabetes', 'Type one diabetes', 'Type two diabetes', 'Diabetes Mellitus', 'High blood sugar']);
AddRelatedTerms('Diabetic neuropathy', ['Diabetic foot', 'Diabetic nerve pain']);
AddRelatedTerms('Active liver disease', ['Liver disease', 'Bad liver', 'Cirrhosis', 'Liver cirrhosis', 'Alcoholic liver', 'Hepatitis', 'Chronic liver disease']);
AddRelatedTerms('Hepatic insufficiency', ['Hepatic impairment', 'Liver impairment'])
AddRelatedTerms('Poor renal function', ['Renal dysfunction', 'renal insufficiency', 'renal impairment', 'Poor renal clearance', 'Kidney problems', 'Bad kidneys']);
AddRelatedTerms('Renal failure', ['Kidney failure'])
AddRelatedTerms('Active bleeding', ['Bleeding', 'Internal bleeding', 'Hemorrhaging', 'Hemorrhage', 'Haemorrhage', 'Haemorrhaging']);
AddRelatedTerms('Gastrointestinal ulcer', ['Peptic ulcer disease', 'PUD', 'Stomach ulcer']);
AddRelatedTerms('G6PD', ['G6PD deficiency', 'glucose-6-phosphate dehydrogenase deficiency']);
AddRelatedTerms('Enlarged prostate', ['Prostatitis', 'Prostate issues', 'Prostatic hypertrophy']);
      
module.exports = {
  Conditions 
};