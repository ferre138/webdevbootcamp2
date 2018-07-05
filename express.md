create a new directory - mkdir
move through directories - cd
create a new file - touch
create package.json file - npm init
add express to project - npm install express --save
add express to code - 
    `var express = require("express");`
    `var app = express();`
create c9 server connection - 
    `app.listen(process.env.PORT, process.env.IP, function(){`
        `console.log("Server has started");`
    `});`
create get route - 
    `app.get("/", function(req, res){`
        `res.send("This text is displayed on the browser");`
    `});`
install ejs - npm install ejs --save
<%= %> - javascript injection to html
<% %> - javascript code to run only, not to be rendered
add directory to express to serve, e.g. public directory -
`app.use(express.static("public"));`
pass extension of files to be rendered by express in app.js -
`app.set("view engine", "ejs");`
partials -
    create directory under views called partials
    create header.ejs and footer.ejs files
    add header boilerplate to header.ejs and footer boilerplate to footer.ejs
    add header and footer or any other partials to ejs pages with:
    `<% include partials/header %>`
    `<% include partials/footer %>`
parse body - npm install body-parser --save
`app.use(bodyParser.urlencoded({extended: true}));`
create post route - 
    `app.post("/addFriend", function(req, res){`
        `var newFriend = req.body.newfriend;`
        `friends.push(newFriend);`
        `res.redirect("/friends");`
    `});`
add request - 
    `var request = require("request");`
    `https://github.com/request/request` see first_request.js
install request - npm install request
parse JSON data - `var parsedData = JSON.parse(body);`