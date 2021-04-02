const path = require('path')
const contactTypes = require(path.join(__dirname, '../data/contact-types.js'))
const { RARCategories } = require(path.join(__dirname, './rar-categories.js'))

class ArrangedSession {
  constructor (providerCode, typeOfSession, contactTypeCode, date, startTime, endTime, countsTowardsRAR, rarCategory, rarSubCategory, locationCode) {
    this.providerCode = providerCode
    this.typeOfSession = typeOfSession
    this.contactTypeCode = contactTypeCode
    this.date = date || '2021-03-25'
    this.startTime = startTime || '10am'
    this.endTime = endTime || '11am'
    this.countsTowardsRAR = countsTowardsRAR
    this.rarCategory = rarCategory
    this.rarSubCategory = rarSubCategory
    this.locationCode = locationCode
  }

  get summary () {
    return {
      'typeOfSession': this.sessionLabel || 'Office visit',
      'date': this.date,
      'time': this.startTime + ' to ' + this.endTime,
      'countsTowardsRAR': this.countsTowardsRAR,
      'rarCategory': this.countsTowardsRAR ? this.rarCategory : null,
      'rarSubCategory': this.countsTowardsRAR ? this.rarSubCategory : null
    }
  }

  get contactRecord () {
    return {
      'typeCode': this.rarCategories.contactTypeCode,
      'typeDescription': this.rarCategories.contactTypeCode ? contactTypes[this.rarCategories.contactTypeCode].description : null,
      'locationCode': this.locationCode
    }
  }

  get nsiRecord () {
    if (this.countsTowardsRAR) {
      return {
        'typeDescription': this.rarCategory,
        'subtypeDescription': this.rarSubCategory
      }
    }
  }

  get sessionLabel () {
    if (this.typeOfSession === 'Other' && this.contactTypeCode) {
      return contactTypes[this.contactTypeCode].description
    } else {
      return this.typeOfSession
    }
  }

  get rarCategories () {
    return new RARCategories(this.providerCode, this.typeOfSession, this.contactTypeCode)
  }

  get contactType () {
    return contactTypes[this.rarCategories.contactTypeCode]
  }
}

module.exports = {
  ArrangedSession
}
