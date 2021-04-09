const {
  confirmAttendanceWizardPaths,
  confirmAttendanceWizardForks
} = require('../utils/confirm-attendance-wizard-paths')

module.exports = router => {
  router.all([
    '/confirm-attendance/:CRN/:sessionId',
    '/confirm-attendance/:CRN/:sessionId/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.sessionId = req.params.sessionId
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  router.get('/confirm-attendance/:CRN/:sessionId/:view', function (req, res) {
    res.render(`confirm-attendance/${req.params.view}`, { paths: confirmAttendanceWizardPaths(req) })
  })

  router.get('/confirm-attendance/:CRN/:sessionId', function (req, res) {
    res.render('confirm-attendance/start', { paths: confirmAttendanceWizardPaths(req) })
  })

  router.post([
    '/confirm-attendance/:CRN/:sessionId',
    '/confirm-attendance/:CRN/:sessionId/:view'
  ], function (req, res) {
    const fork = confirmAttendanceWizardForks(req)
    const paths = confirmAttendanceWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
