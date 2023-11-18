const Post = require('../models/post');
const User = require('../models/user')
const asyncHandler = require("express-async-handler");

exports.create_get = asyncHandler(async(req, res, next) => {
    res.render ('create', {
        title: "Create a new post"
    })
})

exports.create_post = asyncHandler(async(req, res, next) => {
    try {
        const textPost = new Post({
            text: req.body.text,
            author: req.user._id,
            date: req.body.date
        });
    
        const result = await textPost.save();
        res.redirect('/home');
    }
    catch(err) {
        return next(err);
    };
});