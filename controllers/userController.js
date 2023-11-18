const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');

exports.index = asyncHandler(async(req, res, next) => {
  if (req.user && req.user.username) {
    res.render("index", {
      title: "Home",
      username: req.user.username,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      status: req.user.status
    })
  }

  else {
    res.render('index', { username: null });
  }
})


exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render ('signup', {
    title: "Sign up!", 
  })
});


exports.signup_post = asyncHandler(async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hashedPassword
    });

    const result = await user.save();
    res.redirect(`/home?username=${req.body.username}`);

  } catch(err) {
    return next(err);
  };
});

exports.login_get = asyncHandler(async (req, res, next) => {
  res.render ('login', {
    title: "Log in!", 
  })
});

