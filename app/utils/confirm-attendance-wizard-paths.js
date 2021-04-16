const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function confirmAttendanceWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId
  const basePath = `/confirm-attendance/${CRN}/${sessionId}`

  var paths = [
    `/cases/${CRN}/communication`,
    `${basePath}`,
    `${basePath}/compliance`,
    `${basePath}/non-compliance-reason`,
    `${basePath}/absence-acceptable`,
    `${basePath}/rar`,
    `${basePath}/rar-categories`,
    `${basePath}/add-notes`,
    `${basePath}/notes`,
    `${basePath}/check`,
    `${basePath}/confirmation`,
    `/arrange-a-session/${CRN}/start`
  ]

  return nextAndBackPaths(paths, req)
}

function confirmAttendanceWizardForks (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId
  const basePath = `/confirm-attendance/${CRN}/${sessionId}`

  var forks = [
    {
      currentPath: `${basePath}/compliance`,
      storedData: ['confirm-attendance', CRN, sessionId, 'did-service-user-comply'],
      excludedValues: [],
      forkPath: (value) => {
        switch (value) {
          case 'Absent':
            return `${basePath}/absence-acceptable`
          case 'No':
            return `${basePath}/non-compliance-reason`
          default:
            return `${basePath}/rar`
        }
      }
    },
    {
      currentPath: `${basePath}/non-compliance-reason`,
      storedData: ['confirm-attendance', CRN, sessionId, 'was-absence-acceptable'],
      excludedValues: [],
      forkPath: `${basePath}/rar`
    },
    {
      currentPath: `${basePath}/rar`,
      storedData: ['communication', CRN, sessionId, 'session-counts-towards-rar'],
      values: ['No'],
      forkPath: `${basePath}/add-notes`
    },
    {
      currentPath: `${basePath}/add-notes`,
      storedData: ['confirm-attendance', CRN, sessionId, 'add-notes'],
      values: ['No'],
      forkPath: `${basePath}/check`
    }
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  confirmAttendanceWizardPaths,
  confirmAttendanceWizardForks
}
