const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function arrangeSessionWizardPaths (req) {
  const CRN = req.params.CRN

  var paths = [
    `/arrange-a-session/${CRN}`,
    `/arrange-a-session/${CRN}/where`,
    `/arrange-a-session/${CRN}/when`,
    `/arrange-a-session/${CRN}/rar`,
    `/arrange-a-session/${CRN}/check`,
    `/arrange-a-session/${CRN}/confirmation`
  ]

  return nextAndBackPaths(paths, req)
}

function arrangeSessionWizardForks (req) {
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
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
}
