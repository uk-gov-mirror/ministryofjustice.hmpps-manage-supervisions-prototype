const path = require('path')
const contactTypes = require(path.join(__dirname, '../app/data/contact-types.js'))
const nsi = require(path.join(__dirname, '../app/data/nsi.js'))

exports.progressPercentage = (progressInMonths, lengthInMonths) => {
  return progressInMonths * 1.0 * 100 / lengthInMonths
}

class ArrangedSession {
  constructor(providerCode, typeOfSession, contactTypeCode, date, startTime, endTime, countsTowardsRAR, rarCategory, rarSubCategory) {
    this.providerCode = providerCode
    this.typeOfSession = typeOfSession
    this.contactTypeCode = contactTypeCode
    this.date = date || '2021-03-25'
    this.startTime = startTime || '10am'
    this.endTime = endTime || '11am'
    this.countsTowardsRAR = countsTowardsRAR
    this.rarCategory = rarCategory
    this.rarSubCategory = rarSubCategory
  }

  get summary() {
    return {
      'typeOfSession': this.sessionLabel || 'Office visit',
      'date': this.date,
      'time': this.startTime + ' to ' + this.endTime,
      'countsTowardsRAR': this.countsTowardsRAR,
      'rarCategory': this.countsTowardsRAR ? this.rarCategory : null,
      'rarSubCategory': this.countsTowardsRAR ? this.rarSubCategory : null
    }
  }

  get contactRecord() {
    return {
      'typeCode': this.rarCategories.contactTypeCode,
      'typeDescription': this.rarCategories.contactTypeCode ? contactTypes[this.rarCategories.contactTypeCode].description : null
    }
  }

  get nsiRecord() {
    if (this.countsTowardsRAR) {
      return {
        'typeDescription': this.rarCategory,
        'subtypeDescription': this.rarSubCategory
      }
    }
  }

  get sessionLabel() {
    if (this.typeOfSession == 'Other' && this.contactTypeCode) {
      return contactTypes[this.contactTypeCode].description
    } else {
      return this.typeOfSession
    }
  }

  get rarCategories() {
    return new RARCategories(this.providerCode, this.typeOfSession, this.contactTypeCode)
  }
}

class RARCategories {
  constructor(providerCode, typeOfSession, providedContactTypeCode) {
    this.providerCode = providerCode
    this.typeOfSession = typeOfSession
    this.providedContactTypeCode = providedContactTypeCode
  }

  get asList() {
    return this.
      availableNSIsForSession.
      filter(value => Object.keys(this.availableNSIsForProvider).includes(value)).
      map(code => this.availableNSIsForProvider[code]).
      sort((a, b) => a.description < b.description ? -1 : 1)
  }

  get contactTypeCode() {
    if (this.typeOfSession == 'Other' && this.providedContactTypeCode) {
      return this.providedContactTypeCode
    } else {
      const typeOfSessionToContactTypeCode = {
        'Office visit': 'COAP',
        'Home visit': 'CHVS',
        'Video call': null, // can't find a contact type for video calls
        'Phone call': 'COPT'
      }
      return typeOfSessionToContactTypeCode[this.typeOfSession]
    }
  }

  get availableNSIsForProvider() {
    return nsi[this.providerCode].nsiTypes || []
  }

  get availableNSIsForSession() {
    return (this.contactTypeCode == null ? [] : contactTypes[this.contactTypeCode].nsis) || []
  }
}

exports.arrangedSession = (providerCode, typeOfSession, contactType, date, startTime, endTime, countsTowardsRAR, rarCategory, rarSubCategory) => {
  return new ArrangedSession(providerCode, typeOfSession, contactType, date, startTime, endTime, countsTowardsRAR, rarCategory, rarSubCategory)
}

exports.possibleRARCategories = (providerCode, typeOfSession, contactTypeCode) => {
  return new RARCategories(providerCode, typeOfSession, contactTypeCode).asList
}

exports.possibleContactTypes = (providerCode) => {
  return Object.keys(contactTypes).map(code => {
    return { 'code': code, 'description': contactTypes[code].description }
  })
}

exports.addHelpers = function (env) {
  env.addGlobal('progressPercentage', exports.progressPercentage)

  env.addGlobal('arrangedSession', exports.arrangedSession)

  env.addGlobal('possibleRARCategories', exports.possibleRARCategories)

  env.addGlobal('possibleContactTypes', exports.possibleContactTypes)
}
