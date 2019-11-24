const Compendium = {
  foo: {
    chemicalName: 'foo',
    tradeNames: ['sanis-foo','teva-foo','jamp-foo','apo-foo', 'novo-foo', 'pms-foo', 'ratio-foo'],
    class: 'a',
    indications: ["sleeping"],
    interactionTags: ['tag1', 'tag2', 'tag3', 'tag4'],
    crossAllergies: ['foosh', 'foog', 'fooh'],
    contraindications: ['1', '2', '3', '4'],
    doseRange: "5-10"
  },
  bar: {
    chemicalName: 'bar',
    tradeNames: ['apo-bar', 'novo-bar', 'pms-bar', 'ratio-bar'],
    class: 'b',
    indications: ["allergies"],
    interactionTags: ['tag1', 'tag2', 'tag5', 'tag6'],
    crossAllergies: ['barsh', 'barz', 'bart'],
    contraindications: ['1', '3', '5'],
    doseRange: "200-800"
  },
  yo: {
    chemicalName: 'yo',
    tradeNames: ['apo-yo', 'novo-yo'],
    class: 'b',
    indications: ["hypertension"],
    interactionTags: ['tag3', 'tag4', 'tag7', 'tag8'],
    crossAllergies: ['none'],
    contraindications: ['6'],
    doseRange: "20-80"
  }
} 

module.exports = {
  Compendium
};
