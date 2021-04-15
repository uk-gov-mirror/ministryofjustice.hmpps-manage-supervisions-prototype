const path = require('path')
const cases = require('./cases')
const helpers = require(path.join(__dirname, '../../lib/helpers.js'))

const confirmAttendanceDefaults = (map, su) => {
  if (su.previousAppointment && su.previousAppointment.sessionId) {
    map[su.CRN] = {
      [su.previousAppointment.sessionId]: su.previousAppointment
    }
  }
  return map
}

const contactHistoryDefaults = (map, su) => {
  if (su.contactHistory) {
    map[su.CRN] = su.contactHistory.reduce((o, contact) => ({ ...o, [contact.sessionId]: contact}), {})
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
  'communication': cases.reduce(contactHistoryDefaults, {}),
  'confirm-attendance': cases.reduce(confirmAttendanceDefaults, {}),
  'arrange-a-session': {
    'J678910': {
      123: {
        'type': 'Appointment',
        'session-date': helpers.happeningIn({ daysLater: 5 }),
        'session-end-time': '11am',
        'session-start-time': '10am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'ES - Accommodation LDN',
        'session-rar-subcategory': 'Accommodation (Custody Transition)',
        'type-of-session': 'Home visit',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
      }
    }
  }
}
