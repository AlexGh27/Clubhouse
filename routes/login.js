const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_controller = require('../controllers/userController');

router.get('/', user_controller.login_get);

router.post('/', 
    passport.authenticate('local', {
        successRedirect: '/?login=true',
        failureRedirect: '/login'
    })
);

module.exports = router;