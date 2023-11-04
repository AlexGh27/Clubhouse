const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('mongoose-validator');

const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Invalid email address',
  }),
];

const userSchema = new Schema({
    username: { type: String, required: true, validate: emailValidator },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.virtual('url').get(function() {
    return `/${this._id}`;
});

module.exports = mongoose.model("User", userSchema);
