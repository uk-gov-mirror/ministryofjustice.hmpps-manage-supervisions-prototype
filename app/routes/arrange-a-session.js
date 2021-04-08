const {
  generateRandomString,
  getDataValue,
  setDataValue
} = require('../utils/helpers')

const {
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
} = require('../utils/arrange-a-session-wizard-paths')

module.exports = router => {
  router.get('/arrange-a-session/:CRN/start', (req, res) => {
    const sessionId = generateRandomString()
    res.redirect(`/arrange-a-session/${req.params.CRN}/${sessionId}`)
  })

  router.get('/arrange-a-session/:CRN/:sessionId/confirmation', (req, res, next) => {
    setDataValue(req.session.data,
      [
        'arrange-a-session',
        req.params.CRN,
        req.params.sessionId,
        'confirmed'
      ], true)
    next()
  })

  router.all([
    '/arrange-a-session/:CRN/:sessionId',
    '/arrange-a-session/:CRN/:sessionId/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.sessionId = req.params.sessionId
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  // router.post('/arrange-a-session/session-update-2', function (req, res) {
  //   let rearrangesession = req.session.data['rearrange-session']
  //
  //   if (rearrangesession === 'true') {
  //     res.redirect('/arrange-a-session/session-update-2')
  //   } else {
  //     res.redirect('/arrange-a-session/session-update-5-cancel')
  //   }
  // })

  router.get('/arrange-a-session/:CRN/:sessionId', function (req, res) {
    res.render('arrange-a-session/index', { paths: arrangeSessionWizardPaths(req) })
  })

  router.get('/arrange-a-session/:CRN/:sessionId/:view', function (req, res) {
    res.render(`arrange-a-session/${req.params.view}`, { paths: arrangeSessionWizardPaths(req) })
  })

  router.post([
    '/arrange-a-session/:CRN/:sessionId',
    '/arrange-a-session/:CRN/:sessionId/:view'
  ], function (req, res) {
    const fork = arrangeSessionWizardForks(req)
    const paths = arrangeSessionWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
