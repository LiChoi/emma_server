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
AddRelatedTerms('High alcohol intake', ['Alcoholism', 'Alcohol abuse', 'Alcoholic']);
AddRelatedTerms('Hypertension', ["High blood pressure"]);
AddRelatedTerms('Hyperlipidemia', ["Hypercholesterolemia", "Lipid disorder", "High blood cholesterol", "High cholesterol", "Bad cholesterol"]);
AddRelatedTerms('Familial hypercholesterolemia', []);
AddRelatedTerms('Atrial fibrillation', ["A-fib", "AF"]);
AddRelatedTerms('Ventricular tachycardia', ["VT"]); 
AddRelatedTerms('Diabetes', ['Type 1 diabetes', 'Type 2 diabetes', 'Type one diabetes', 'Type two diabetes', 'Diabetes Mellitus', 'High blood sugar']);
AddRelatedTerms('Diabetic neuropathy', ['Diabetic foot', 'Diabetic nerve pain']);
AddRelatedTerms('Active liver disease', ['Liver disease', 'Bad liver', 'Cirrhosis', 'Liver cirrhosis', 'Hepatic insufficiency', 'Alcoholic liver', 'Hepatitis', 'Chronic liver disease']);

//console.log(Conditions); 
      
module.exports = {
  Conditions 
};