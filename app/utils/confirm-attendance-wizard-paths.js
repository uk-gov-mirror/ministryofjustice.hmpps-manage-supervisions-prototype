const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function confirmAttendanceWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var paths = [
    `/cases/${CRN}/communication`,
    `/confirm-attendance/${CRN}/${sessionId}`,
    `/confirm-attendance/${CRN}/${sessionId}/compliance`,
    `/confirm-attendance/${CRN}/${sessionId}/non-compliance-reason`,
    `/confirm-attendance/${CRN}/${sessionId}/absence-acceptable`,
    `/confirm-attendance/${CRN}/${sessionId}/rar-categories`,
    `/confirm-attendance/${CRN}/${sessionId}/add-notes`,
    `/confirm-attendance/${CRN}/${sessionId}/notes`,
    `/confirm-attendance/${CRN}/${sessionId}/check`,
    `/confirm-attendance/${CRN}/${sessionId}/confirmation`,
    `/arrange-a-session/${CRN}/start`
  ]

  return nextAndBackPaths(paths, req)
}

function confirmAttendanceWizardForks (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var forks = [
    {
      currentPath: `/confirm-attendance/${CRN}/${sessionId}/compliance`,
      storedData: ['confirm-attendance', CRN, sessionId, 'did-service-user-comply'],
      excludedValues: [],
      forkPath: (value) => {
        switch (value) {
          case 'Absent':
            return `/confirm-attendance/${CRN}/${sessionId}/absence-acceptable`
          case 'No':
            return `/confirm-attendance/${CRN}/${sessionId}/non-compliance-reason`
          default:
            return `/confirm-attendance/${CRN}/${sessionId}/rar-categories`
        }
      }
    },
    {
      currentPath: `/confirm-attendance/${CRN}/${sessionId}/non-compliance-reason`,
      storedData: ['confirm-attendance', CRN, sessionId, 'was-absence-acceptable'],
      excludedValues: [],
      forkPath: `/confirm-attendance/${CRN}/${sessionId}/rar-categories`
    },
    {
      currentPath: `/confirm-attendance/${CRN}/${sessionId}/add-notes`,
      storedData: ['confirm-attendance', CRN, sessionId, 'add-notes'],
      values: ['No'],
      forkPath: `/confirm-attendance/${CRN}/${sessionId}/check`
    }
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  confirmAttendanceWizardPaths,
  confirmAttendanceWizardForks
}
