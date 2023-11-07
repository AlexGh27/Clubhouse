const User = require("../models/user");
const asyncHandler = require("express-async-handler");


exports.index = asyncHandler(async(req, res, next) => {
  const [
    allUsers
  ] = await Promise.all([
    User.countDocuments({}).exec()
  ]);

  res.render("index", {
    title: "Home",
    user_count: allUsers,
  })
})

exports.user_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Users list");
});


exports.signup_get = asyncHandler(async (req, res, next) => {
  res.render ('signup', {
    title: "Sign up!", 

  })
});

exports.signup_post = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
    const result = await user.save();
    res.redirect("/");
  } catch(err) {
    return next(err);
  };
});

exports.login_get = asyncHandler(async (req, res, next) => {
  res.render ('login', {
    title: "Log in!", 

  })
});

exports.login_post = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
    const result = await user.save();
    res.redirect("/");
  } catch(err) {
    return next(err);
  };
});