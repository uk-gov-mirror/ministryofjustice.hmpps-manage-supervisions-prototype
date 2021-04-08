const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function arrangeSessionWizardPaths (req) {
  const CRN = req.params.CRN

  var paths = [
    `/cases/${CRN}`,
    `/arrange-a-session/${CRN}`,
    `/arrange-a-session/${CRN}/where`,
    `/arrange-a-session/${CRN}/when`,
    `/arrange-a-session/${CRN}/rar`,
    `/arrange-a-session/${CRN}/rar-categories`,
    `/arrange-a-session/${CRN}/check`,
    `/arrange-a-session/${CRN}/confirmation`,
    `/cases/${CRN}`
  ]

  return nextAndBackPaths(paths, req)
}

function arrangeSessionWizardForks (req) {
  const CRN = req.params.CRN
  var forks = [
    {
      currentPath: `/arrange-a-session/${CRN}`,
      storedData: ['arrange-a-session', CRN, 'type-of-session'],
      excludedValues: ['Office visit', 'Other'],
      forkPath: `/arrange-a-session/${CRN}/when`
    },
    {
      currentPath: `/arrange-a-session/${CRN}/rar`,
      storedData: ['arrange-a-session', CRN, 'session-counts-towards-rar'],
      values: ['No'],
      forkPath: `/arrange-a-session/${CRN}/check`
    }
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
}
