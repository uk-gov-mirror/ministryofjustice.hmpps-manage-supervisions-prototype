const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function confirmAttendanceWizardPaths (req) {
  const CRN = req.params.CRN
  const sessionId = req.params.sessionId

  var paths = [
    `/cases/${CRN}/timeline`,
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
  ]

  return nextForkPath(forks, req)
}

module.exports = {
  confirmAttendanceWizardPaths,
  confirmAttendanceWizardForks
}
