const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function exampleWizardPaths (req) {
  var paths = [
    '/',
    '/some-sequence',
    '/of-paths'
  ]

  return nextAndBackPaths(paths, req)
}

function exampleWizardForks (req) {
  var forks = {
    '/': {
      'some-name': {
        values: [
          'some-valye'
        ],
        path: '/path-to-go-to'
      }
    }
  }

  return nextForkPath(forks, req)
}

module.exports = {
  exampleWizardPaths,
  exampleWizardForks
}
