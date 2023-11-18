const express = require("express");
const router = express.Router();

const post_controller = require('../controllers/postController');

router.get('/', post_controller.create_get);

//router.post('/', post_controller.create_post);

module.exports = router;