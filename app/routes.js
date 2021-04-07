const express = require('express')
const router = express.Router()
const helpers = require('../lib/helpers.js')

// Add your routes here - above the module.exports line

require('./routes/cases')(router)
require('./routes/confirm-attendance')(router)

router.get('/switch-provider/:newProvider', function (req, res) {
  const newProvider = req.params['newProvider']
  req.session.data['provider-code'] = newProvider
  req.session.data['team-codes'] = req.session.data['default-teams'][newProvider]

  res.redirect('/progress')
})

router.post('/arrange-a-session/session-add-where', function (req, res) {
  const session = helpers.arrangedSession({
    providerCode: req.session.data['provider-code'],
    typeOfSession: req.session.data['type-of-session'],
    contactType: req.session.data['type-of-session-other']
  })
  const contactType = session.contactType

  if (contactType && contactType.requiresLocation === 'Y') {
    res.redirect('/arrange-a-session/session-add-where')
  } else {
    res.redirect('/arrange-a-session/session-add-2')
  }
})

router.post('/arrange-a-session/session-add-rar-category', function (req, res) {
  if (req.session.data['session-counts-towards-rar'] === 'Yes') {
    res.redirect('/arrange-a-session/session-add-rar-category')
  } else {
    res.redirect('/arrange-a-session/session-add-4')
  }
})

router.post('/confirm-attendance/attendance-add-3', function (req, res) {
  let complybranch = req.session.data['comply']

  if (complybranch === 'false') {
    res.redirect('/confirm-attendance/attendance-add-3')
  }
  if (complybranch === 'true') {
    res.redirect('/confirm-attendance/attendance-add-5')
  } else {
    res.redirect('/confirm-attendance/attendance-add-4')
  }
})

router.post('/confirm-attendance/attendance-add-7', function (req, res) {
  let sessionnotes = req.session.data['session-notes']

  if (sessionnotes === 'true') {
    res.redirect('/confirm-attendance/attendance-add-7')
  } else {
    res.redirect('/confirm-attendance/attendance-add-8')
  }
})

//  Iteration 6 - version b - Remove RAR
router.post('/confirm-attendance/attendance-add-3b', function (req, res) {
  let complybranch = req.session.data['comply']

  if (complybranch === 'false') {
    res.redirect('/confirm-attendance/attendance-add-3b')
  }
  if (complybranch === 'true') {
    res.redirect('/confirm-attendance/attendance-add-5b-remove-RAR')
  } else {
    res.redirect('/confirm-attendance/attendance-add-4b')
  }
})

router.post('/confirm-attendance/attendance-add-7b', function (req, res) {
  let sessionnotes = req.session.data['session-notes']

  if (sessionnotes === 'true') {
    res.redirect('/confirm-attendance/attendance-add-7b')
  } else {
    res.redirect('/confirm-attendance/attendance-add-8')
  }
})

router.post('/confirm-attendance/attendance-add-7', function (req, res) {
  let sessionnotes = req.session.data['session-notes']

  if (sessionnotes === 'true') {
    res.redirect('/confirm-attendance/attendance-add-7b')
  } else {
    res.redirect('/confirm-attendance/attendance-add-8b')
  }
})

router.post('/arrange-a-session/session-update-2', function (req, res) {
  let rearrangesession = req.session.data['rearrange-session']

  if (rearrangesession === 'true') {
    res.redirect('/arrange-a-session/session-update-2')
  } else {
    res.redirect('/arrange-a-session/session-update-5-cancel')
  }
})

module.exports = router
