const path = require('path')
const contactTypes = require(path.join(__dirname, '../app/data/cases.js'))

exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', (progressInMonths, lengthInMonths) => {
    return progressInMonths * 1.0 * 100 / lengthInMonths
  })

  env.addGlobal('possibleRARCategories', () => {
    return [
      'Employment, Training and Education',
      'Wellbeing – both physical and mental',
      'Finance, benefit and debt',
      'Relationships',
      'Restorative Justice Interventions',
      'Substance Misuse',
      'Alcohol Treatment Requirements or Mental Health Treatment Requirements',
      'Thinking skills, attitudes and behaviour'
    ]
  })
}
