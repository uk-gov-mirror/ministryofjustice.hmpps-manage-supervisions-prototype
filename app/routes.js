const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching

//Iteration 6
router.post('/v6/attendance-add-2', function (req, res) {
  
  let complybranch = req.session.data['comply']

  if (complybranch === 'false') {
    res.redirect('/v6/attendance-add-2')
  } 
  if (complybranch === 'true') {
      res.redirect('/v6/attendance-add-4')
    } 
  else {
    res.redirect('/v6/attendance-add-3')
  }
})

router.post('/v6/attendance-add-6', function (req, res) {

  let sessionnotes = req.session.data['session-notes']

  if (sessionnotes === 'true') {
    res.redirect('/v6/attendance-add-6')
  } else {
    res.redirect('/v6/attendance-add-7')
  }
})

router.post('/v6/session-update-2', function (req, res) {

  let rearrangesession = req.session.data['rearrange-session']

  if (rearrangesession === 'true') {
    res.redirect('/v6/session-update-2')
  } else {
    res.redirect('/v6/session-update-5-cancel')
  }
})


//Iteration 5
router.post('/v5/attendance-add-2', function (req, res) {
  
  let complybranch = req.session.data['comply']

  if (complybranch === 'false') {
    res.redirect('/v5/attendance-add-2')
  } 
  if (complybranch === 'true') {
      res.redirect('/v5/attendance-add-4')
    } 
  else {
    res.redirect('/v5/attendance-add-3')
  }
})

router.post('/v5/attendance-add-6', function (req, res) {

  let sessionnotes = req.session.data['session-notes']

  if (sessionnotes === 'true') {
    res.redirect('/v5/attendance-add-6')
  } else {
    res.redirect('/v5/attendance-add-7')
  }
})






// Iteration 4
router.post('/confirm-attendance/v2/attendance-add-2', function (req, res) {
  
    let complybranch = req.session.data['comply']
  
    if (complybranch === 'false') {
      res.redirect('/confirm-attendance/v2/attendance-add-2')
    } 
    if (complybranch === 'true') {
        res.redirect('/confirm-attendance/v2/attendance-add-4')
      } 
    else {
      res.redirect('/confirm-attendance/v2/attendance-add-3')
    }
  })

  router.post('/confirm-attendance/v2/attendance-add-6', function (req, res) {
  
    let sessionnotes = req.session.data['session-notes']
  
    if (sessionnotes === 'true') {
      res.redirect('/confirm-attendance/v2/attendance-add-6')
    } else {
      res.redirect('/confirm-attendance/v2/attendance-confirm')
    }
  })
  
  router.post('/arrange-a-session/v4/session-add-4', function (req, res) {
  
    let appointmentnotes = req.session.data['appointment-notes']
  
    if (appointmentnotes === 'true') {
      res.redirect('/arrange-a-session/v4/session-add-4')
    } else {
      res.redirect('/arrange-a-session/v4/session-add-5')
    }
  })

  router.post('/arrange-a-session/v4/session-update-4', function (req, res) {
  
    let updatenotes = req.session.data['update-notes']
  
    if (updatenotes === 'true') {
      res.redirect('/arrange-a-session/v4/session-update-4')
    } else {
      res.redirect('/arrange-a-session/v4/session-update-5')
    }
  })
  
module.exports = router
