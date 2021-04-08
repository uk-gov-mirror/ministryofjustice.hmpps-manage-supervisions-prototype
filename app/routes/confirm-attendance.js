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
    res.render(`confirm-attendance/${req.params.view}`)
  })

  router.get('/confirm-attendance/:CRN/:sessionId', function (req, res) {
    res.render('confirm-attendance/start')
  })

  router.post('/confirm-attendance/:CRN/:sessionId/notes', function (req, res) {
    let shouldAddNotes = req.session.data['confirm-attendance'][req.params.CRN][req.params.sessionId]['add-notes'] === 'Yes'

    if (shouldAddNotes) {
      res.redirect(`/confirm-attendance/${req.params.CRN}/${req.params.sessionId}/notes`)
    } else {
      res.redirect(`/confirm-attendance/${req.params.CRN}/${req.params.sessionId}/check`)
    }
  })

  router.post('/confirm-attendance/:CRN/:sessionId/non-compliance-reason', function (req, res) {
    switch (req.session.data['confirm-attendance'][req.params.CRN][req.params.sessionId]['did-service-user-comply']) {
      case 'Yes':
        res.redirect(`/confirm-attendance/${req.params.CRN}/${req.params.sessionId}/rar-categories`)
        break;
      case 'No':
        res.redirect(`/confirm-attendance/${req.params.CRN}/${req.params.sessionId}/non-compliance-reason`)
        break;
      default:
        res.redirect(`/confirm-attendance/${req.params.CRN}/${req.params.sessionId}/absence-acceptable`)
    }
  })
}
