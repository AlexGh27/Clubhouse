const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

router.get('/', user_controller.become_get);

router.post('/', user_controller.become_post);

module.exports = router;