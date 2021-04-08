const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

require('./routes/cases')(router)
require('./routes/arrange-a-session')(router)
require('./routes/confirm-attendance')(router)

router.get('/switch-provider/:newProvider', function (req, res) {
  const newProvider = req.params['newProvider']
  req.session.data['provider-code'] = newProvider
  req.session.data['team-codes'] = req.session.data['default-teams'][newProvider]

  res.redirect('/progress')
})

router.post('/confirm-attendance/non-compliance-reason', function (req, res) {
  let complybranch = req.session.data['comply']

  if (complybranch === 'false') {
    res.redirect('/confirm-attendance/non-compliance-reason')
  }
  if (complybranch === 'true') {
    res.redirect('/confirm-attendance/rar-categories')
  } else {
    res.redirect('/confirm-attendance/absence-acceptable')
  }
})

module.exports = router
