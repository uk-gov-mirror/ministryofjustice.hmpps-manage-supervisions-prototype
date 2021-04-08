module.exports = router => {
  router.get([
    '/confirm-attendance/:CRN/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  router.get('/confirm-attendance/:CRN/:view', function (req, res) {
    res.render(`confirm-attendance/${req.params.view}`)
  })

  router.post('/confirm-attendance/:CRN/notes', function (req, res) {
    let shouldAddNotes = req.session.data['confirm-a-session'][req.params.CRN]['add-notes'] === 'Yes'

    if (shouldAddNotes) {
      res.redirect(`/confirm-attendance/${req.params.CRN}/notes`)
    } else {
      res.redirect(`/confirm-attendance/${req.params.CRN}/check`)
    }
  })

  router.post('/confirm-attendance/:CRN/non-compliance-reason', function (req, res) {
    switch (req.session.data['confirm-a-session'][req.params.CRN]['did-service-user-comply']) {
      case 'Yes':
        res.redirect(`/confirm-attendance/${req.params.CRN}/rar-categories`)
        break;
      case 'No':
        res.redirect(`/confirm-attendance/${req.params.CRN}/non-compliance-reason`)
        break;
      default:
        res.redirect(`/confirm-attendance/${req.params.CRN}/absence-acceptable`)
    }
  })
}
