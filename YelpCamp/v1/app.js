var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "http://www.photosforclass.com/download/flickr-5641024448"},
    {name: "Granite Hills", image: "http://www.photosforclass.com/download/flickr-4684194306"},
    {name: "Rouge Valley", image: "http://www.photosforclass.com/download/flickr-37740762025"},
    {name: "Salmon Creek", image: "http://www.photosforclass.com/download/flickr-5641024448"},
    {name: "Granite Hills", image: "http://www.photosforclass.com/download/flickr-4684194306"},
    {name: "Rouge Valley", image: "http://www.photosforclass.com/download/flickr-37740762025"},
    {name: "Salmon Creek", image: "http://www.photosforclass.com/download/flickr-5641024448"},
    {name: "Granite Hills", image: "http://www.photosforclass.com/download/flickr-4684194306"},
    {name: "Rouge Valley", image: "http://www.photosforclass.com/download/flickr-37740762025"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    res.send("You hit the post route")
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});