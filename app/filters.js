const { DateTime } = require('luxon')

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  // example: Monday 7 December at 9:30am
  filters.dateAndTimeWithDayAndWithoutYear = date => {
    const datetime = DateTime.fromISO(date)
    return datetime.toFormat('cccc d MMMM') + ' at ' + datetime.toFormat('h:mma').toLowerCase()
  }

  // example: 7 December 2021
  filters.dateWithYear = date => {
    const datetime = DateTime.fromISO(date)
    return datetime.toFormat('d MMMM yyyy')
  }

  return filters
}
