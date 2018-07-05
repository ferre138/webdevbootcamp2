var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blogdemo_2");

var Post = require("./models/post.js");
var User = require("./models/user.js");
// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

Post.create({
    title: "How to cook the best burger pt. 4",
    content: "sdfgsfdjsghasdgasfdhafdhsf"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                console.log(data);
                }
            });
        }
    });
});

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){ //same as above
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });