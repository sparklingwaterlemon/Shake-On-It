// * Root 3000/
var express = require('express');
var router = express.Router();
const passport = require('passport');


const IndexCtrl = require('../2controller/index')

// Landing Page - 3000/
router.get("/", IndexCtrl.index)





// Do I want to move this to a later page - Create Game - redirect to
// google auth login page
// Google OAuth Login Route

// https://localhost:3000/auth/google/oauth2callback

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));
// Google OAuth callback route
router.get('/auth/google/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/user',
      failureRedirect : '/'
    }
));
// OAuth logout route
router.get('/logout', function (req, res) {
    req.logout(function(err){
        if (err) { return next(err); }
        res.redirect('/');
    })
});
  
  





module.exports = router;
