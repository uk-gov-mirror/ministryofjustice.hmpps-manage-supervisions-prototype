module.exports = router => {
  router.get([
    '/confirm-attendance/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = 'J678910'
    next()
  })
}
