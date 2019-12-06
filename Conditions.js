//Array of terms that are actually listed in compendium contraindications
const PrimaryTerms = ['Active liver disease', 'Pregnant', 'High alcohol intake', 'age>35', 'Smoking'];

//The final list of conditions
const Conditions = {
  pregnant: {primaryTerm: 'Pregnant', relatedTerms: ['Pregnant', 'Pregnancy']},
  
  //For age terms, all relatedTerms must be primaryTerms. Must use javascript operators as age will be substituted with user's age and eval() will be called
  age: {primaryTerm: 'age', relatedTerms: ['age>35', 'age<18']},
  
  //Lifestyle terms
  smoking: {primaryTerm: 'Smoking', relatedTerms: ['Smoking', 'Smokes', 'Smoker']},
  alcohol: {primaryTerm: 'Alcohol', relatedTerms: ['Alcohol', 'Drinks']},
  highAlcoholIntake: {primaryTerm: 'High alcohol intake', relatedTerms: ['High alcohol intake', 'Alcoholism', 'Alcohol abuse']},
  
  //Cardiovascular terms
  hypertension: {primaryTerm: 'Hypertension', relatedTerms: ["Hypertension", "High blood pressure"]},
  hyperlipidemia: {primaryTerm: 'Hyperlipidemia', relatedTerms: ["Hyperlipidemia", "Hypercholesterolemia", "Lipid disorder", "High blood cholesterol", "High cholesterol", "Cholesterol"]},
  familialHypercholesterolemia: {primaryTerm: 'Familial hypercholesterolemia', relatedTerms: ["Familial hypercholesterolemia"]},
  atrialFibrillation: {primaryTerm: 'Atrial fibrillation', relatedTerms: ["Atrial fibrillation", "A-fib", "AF"]},
  ventricularTachycardia: {primaryTerm: 'Ventricular tachycardia', relatedTerms: ["Ventricular tachycardia", "VT"]},
  
  //Diabetes
  diabetes: {primaryTerm: 'Diabetes', relatedTerms: ['Diabetes', 'Type 1 diabetes', 'Type 2 diabetes', 'Type one diabetes', 'Type two diabetes', 'Diabetes Mellitus', 'High blood sugar', 'Blood sugar']},
  diabeticNeuropathy: {primaryTerm: 'Diabetic neuropathy', relatedTerms: ['Diabetic neuropathy', 'Diabetic foot', 'Diabetic nerve pain']},
  
  //Liver
  activeLiverDisease: {primaryTerm: 'Active liver disease', relatedTerms: ['Active liver disease', 'Liver disease', 'Bad liver', 'Cirrhosis', 'Liver cirrhosis', 'Hepatic insufficiency', 'Alcoholic liver', 'Hepatitis']}
}
      
module.exports = {
  Conditions 
};