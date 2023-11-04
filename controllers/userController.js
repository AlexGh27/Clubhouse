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

