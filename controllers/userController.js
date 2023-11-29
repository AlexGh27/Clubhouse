const User = require("../models/user");
const Post = require('../models/post');
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.index = asyncHandler(async(req, res, next) => {
  
  const allPosts = await Post.find({}, "text").populate('author', 'first_name last_name').select('text date').sort({date: -1}).exec();

  if (req.user && req.user.username) {
    res.render("index", {
      title: "Home",
      username: req.user.username,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      status: req.user.status,
      post_list: allPosts,
       
    });
  } else {
    res.render('index', { username: null, post_list: allPosts });
  }
});



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
  res.render('login', {
    title: "Log in!", 
  })
});


exports.become_get = asyncHandler(async(req, res, next) => {
  res.render('become', {
    title: "Become a member"
  })
});

exports.become_post = asyncHandler(async(req, res, bext) => {
  const memberCode = process.env.MEMBER_CODE;
  const adminCode = process.env.ADMIN_CODE;
  const {inputCode} = req.body;

  if (inputCode === memberCode) {
    await User.findByIdAndUpdate(req.user._id, { status: 'member' });
    res.redirect('/home'); 
  } 
  else if (inputCode === adminCode){
    await User.findByIdAndUpdate(req.user._id, { status: 'admin' });
    res.redirect('/home'); 
  }
  else {
    res.render('become', { title: 'Become a member', error: 'Invalid secret code' });
  }

})
