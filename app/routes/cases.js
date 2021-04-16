module.exports = router => {
  router.get([
    '/cases/:CRN',
    '/cases/:CRN/*'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  router.all('/cases/:CRN', function (req, res) {
    res.render('case/index')
  })

  router.all('/cases/:CRN/communication/:category', function (req, res) {
    res.locals.category = req.params.category
    res.render('case/communication')
  })

  router.all('/cases/:CRN/appointments/:sessionId', function (req, res) {
    res.locals.sessionId = req.params.sessionId
    res.render('case/appointment')
  })

  router.all('/cases/:CRN/:view', function (req, res) {
    res.render(`case/${req.params.view}`)
  })
}
