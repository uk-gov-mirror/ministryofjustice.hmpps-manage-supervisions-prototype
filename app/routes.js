const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching
router.post('/new-service-user/v4/attendance-add-2', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
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
  
module.exports = router
