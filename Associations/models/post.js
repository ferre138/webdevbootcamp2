var mongoose = require("mongoose");

//POST - title, content - define the post before associate it with user
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);
module.exports = Post;