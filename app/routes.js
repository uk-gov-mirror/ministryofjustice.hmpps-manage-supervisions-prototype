const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching

//Iteration 5
router.post('/new-service-user/v5/attendance-add-2', function (req, res) {
  
  let complybranch = req.session.data['comply']

  if (complybranch === 'false') {
    res.redirect('/new-service-user/v5/attendance-add-2')
  } 
  if (complybranch === 'true') {
      res.redirect('/new-service-user/v5/attendance-add-4')
    } 
  else {
    res.redirect('/new-service-user/v5/attendance-add-3')
  }
})

router.post('/new-service-user/v5/attendance-add-6', function (req, res) {

  let sessionnotes = req.session.data['session-notes']

  if (sessionnotes === 'true') {
    res.redirect('/new-service-user/v5/attendance-add-6')
  } else {
    res.redirect('/new-service-user/v5/timeline-confirm')
  }
})






// Iteration 4
router.post('/new-service-user/v4/attendance-add-2', function (req, res) {
  
    let complybranch = req.session.data['comply']
  
    if (complybranch === 'false') {
      res.redirect('/new-service-user/v4/attendance-add-2')
    } 
    if (complybranch === 'true') {
        res.redirect('/new-service-user/v4/attendance-add-4')
      } 
    else {
      res.redirect('/new-service-user/v4/attendance-add-3')
    }
  })

  router.post('/new-service-user/v4/attendance-add-6', function (req, res) {
  
    let sessionnotes = req.session.data['session-notes']
  
    if (sessionnotes === 'true') {
      res.redirect('/new-service-user/v4/attendance-add-6')
    } else {
      res.redirect('/new-service-user/v4/timeline-confirm')
    }
  })
  
  router.post('/new-service-user/v4/appointment-add-4', function (req, res) {
  
    let appointmentnotes = req.session.data['appointment-notes']
  
    if (appointmentnotes === 'true') {
      res.redirect('/new-service-user/v4/appointment-add-4')
    } else {
      res.redirect('/new-service-user/v4/appointment-add-5')
    }
  })

  router.post('/new-service-user/v4/appointment-update-4', function (req, res) {
  
    let updatenotes = req.session.data['update-notes']
  
    if (updatenotes === 'true') {
      res.redirect('/new-service-user/v4/appointment-update-4')
    } else {
      res.redirect('/new-service-user/v4/appointment-update-5')
    }
  })
  
module.exports = router
