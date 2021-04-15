const path = require('path')
const cases = require('./cases')
const helpers = require(path.join(__dirname, '../../lib/helpers.js'))

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
  'arrange-a-session': {
    'J678910': {
      123: cases
        .find(entry => entry.CRN === 'J678910')
        .contactHistory
        .find(entry => entry.sessionId === 123)
    }
  }
}
