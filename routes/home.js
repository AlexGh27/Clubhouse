const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

router.get("/", user_controller.index);

// router.get("/signup", user_controller.user_create_get);

// router.post("/signup", user_controller.user_create_post);

// router.get("user/:id/delete", user_controller.user_delete_get);

// router.post("user/:id/delete", user_controller.user_delete_post);

module.exports = router;