const path = require('path')
const cases = require('./cases')
const helpers = require(path.join(__dirname, '../../lib/helpers.js'))

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
  'confirm-a-session': cases.reduce(confirmASessionDefaults, {}),
  'arrange-a-session': {
    'J678910': {
      123: {
        'session-date': helpers.happeningIn({ daysLater: 5 }),
        'session-end-time': '11am',
        'session-start-time': '10am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'ES - Accommodation LDN',
        'session-rar-subcategory': 'Accommodation (Custody Transition)',
        'type-of-session': 'Home visit',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true
      }
    }
  }
}
