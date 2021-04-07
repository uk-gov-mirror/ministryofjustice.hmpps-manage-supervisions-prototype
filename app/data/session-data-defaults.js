const cases = require('./cases')

const confirmASessionDefaults = (map, su) => {
  if (su.previousAppointment) {
    map[su.CRN] = {
      'countsTowardsRAR': su.previousAppointment.countsTowardsRAR ? 'Yes' : 'No',
      'RARCategory': su.previousAppointment.RARCategory
    }
  }
  return map
}

module.exports = {
  'provider-code': 'C17', // CPA London
  'default-teams': {
    'C17': ['C17ETE'],
    'N07': ['N07L10']
  },
  'team-codes': ['C17ETE'],
  cases: cases,
  'confirm-a-session': cases.reduce(confirmASessionDefaults, {})
}
