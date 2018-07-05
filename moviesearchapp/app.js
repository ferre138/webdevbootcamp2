var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var search  = req.query.search;
    var url = "http://www.omdbapi.com/?i=tt3896198&apikey=207710e6&s=" + search;
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            console.log(data);
            res.render("results", {data: data});
        }
    });
});



app.set("view engine", "ejs");

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});