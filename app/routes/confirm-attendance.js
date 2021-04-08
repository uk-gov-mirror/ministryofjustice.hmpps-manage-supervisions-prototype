module.exports = router => {
  const CRN = 'J678910'

  router.get([
    '/confirm-attendance/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = CRN
    next()
  })

  router.post('/confirm-attendance/notes', function (req, res) {
    let shouldAddNotes = req.session.data['confirm-a-session'][CRN]['add-notes'] === 'Yes'

    if (shouldAddNotes) {
      res.redirect('/confirm-attendance/notes')
    } else {
      res.redirect('/confirm-attendance/check')
    }
  })

  router.post('/confirm-attendance/non-compliance-reason', function (req, res) {
    switch (req.session.data['confirm-a-session'][CRN]['did-service-user-comply']) {
      case 'Yes':
        res.redirect('/confirm-attendance/rar-categories')
        break;
      case 'No':
        res.redirect('/confirm-attendance/non-compliance-reason')
        break;
      default:
        res.redirect('/confirm-attendance/absence-acceptable')
    }
  })
}
