const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching

//  Iteration 6
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
    res.redirect('/confirm-attendance/attendance-add-8b-remove-RAR')
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
