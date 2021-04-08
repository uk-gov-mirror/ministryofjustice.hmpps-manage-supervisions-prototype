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
}
