const path = require('path')
const locations = require(path.join(__dirname, '../data/locations.js'))

class Locations {
  constructor (providerCode, teams) {
    this.providerCode = providerCode
    this.teams = teams
  }

  get asList () {
    const potentialLocations = this.locationCodesForTeams
      .map(code => locations.locations[code])
      .sort((a, b) => a.description < b.description ? -1 : 1)

    // The next few lines de-duplicate locations when someone belongs to multiple teams
    const result = []
    const map = new Map()
    for (const location of potentialLocations) {
      if (!map.has(location.code)) {
        map.set(location.code, true)
        result.push(location)
      }
    }
    return result
  }

  get locationCodesForTeams () {
    return this.teams.flatMap(teamCode => locations.teamsToLocations[teamCode])
  }
}

module.exports = {
  Locations
}
