const {
  arrangeSessionWizardPaths,
  arrangeSessionWizardForks
} = require('../utils/arrange-a-session-wizard-paths')

module.exports = router => {
  router.all([
    '/arrange-a-session/:CRN',
    '/arrange-a-session/:CRN/:view'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.CRN = req.params.CRN
    res.locals.case = data.cases.find(obj => {
      return obj.CRN === req.params.CRN
    })
    next()
  })

  router.post('/arrange-a-session/session-update-2', function (req, res) {
    let rearrangesession = req.session.data['rearrange-session']

    if (rearrangesession === 'true') {
      res.redirect('/arrange-a-session/session-update-2')
    } else {
      res.redirect('/arrange-a-session/session-update-5-cancel')
    }
  })

  router.get('/arrange-a-session/:CRN', function (req, res) {
    res.render('arrange-a-session/index', { paths: arrangeSessionWizardPaths(req) })
  })

  router.get('/arrange-a-session/:CRN/:view', function (req, res) {
    res.render(`arrange-a-session/${req.params.view}`, { paths: arrangeSessionWizardPaths(req) })
  })

  router.post(['/arrange-a-session/:CRN', '/arrange-a-session/:CRN/:view'], function (req, res) {
    const fork = arrangeSessionWizardForks(req)
    const paths = arrangeSessionWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
