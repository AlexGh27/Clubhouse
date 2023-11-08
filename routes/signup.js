const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/', user_controller.signup_get);

router.post('/', user_controller.signup_post);

module.exports = router;
