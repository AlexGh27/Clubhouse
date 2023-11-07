const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user'); 

router.post('/register', (req, res) => {

});

router.post('/login', passport.authenticate('local', {
}), (req, res) => {
  
});

router.get('/logout', (req, res) => {
    req.logout();
    
});

module.exports = router;
