const path = require('path')
const contactTypes = require(path.join(__dirname, '../app/data/contact-types.js'))
const nsi = require(path.join(__dirname, '../app/data/nsi.js'))

exports.progressPercentage = (progressInMonths, lengthInMonths) => {
  return progressInMonths * 1.0 * 100 / lengthInMonths
}

exports.possibleRARCategories = (typeOfSession, providerCode) => {
  const typeOfSessionToContactTypeCode = {
    'Office visit': 'COAP',
    'Home visit': 'CHVS',
    'Video call': '??',
    'Phone call': 'COPT',
    'Other': '??'
  }

  const availableNSIsForSession = (contactTypes[typeOfSessionToContactTypeCode[typeOfSession]] == null ? [] : contactTypes[typeOfSessionToContactTypeCode[typeOfSession]].nsis) || []
  const availableNSIsForProvider = nsi[providerCode].nsiTypes || []

  const availableNSICodes = availableNSIsForSession.filter(value => Object.keys(availableNSIsForProvider).includes(value));

  return availableNSICodes.map(code => availableNSIsForProvider[code].description).sort()
}

exports.possibleContactTypes = (providerCode) => {
  return Object.keys(contactTypes).map(code => {
    return { 'code': code, 'description': contactTypes[code].description }
  })
}

exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', exports.progressPercentage)

  env.addGlobal('possibleRARCategories', exports.possibleRARCategories)

  env.addGlobal('possibleContactTypes', exports.possibleContactTypes)
}
