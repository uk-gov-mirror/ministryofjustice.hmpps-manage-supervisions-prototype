module.exports = router => {
  router.get([
    '/cases/:CRN',
    '/cases/:CRN/:view'
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

  router.all('/cases/:CRN/:view', function (req, res) {
    res.render(`case/${req.params.view}`)
  })
}
