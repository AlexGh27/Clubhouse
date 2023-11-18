const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    text: { type: String, required: true },
    author: { type:  Schema.Types.ObjectId, ref: 'User', required: true},
    date: { type: Date, default: Date.now }
})

postSchema.virtual('url').get(function() {
    return `/${this._id}`;
});

module.exports = mongoose.model("Post", postSchema);