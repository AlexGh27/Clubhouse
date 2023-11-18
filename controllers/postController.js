const post = require('../models/post');
const asyncHandler = require("express-async-handler");

exports.create_get = asyncHandler(async(req, res, next) => {
    res.render ('create', {
        title: "Create a new post"
    })
})