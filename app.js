const express = require("express");

const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true }));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/login.html");
});

var dict = {};
app.post("/",function(req, res){
  
  var username = req.body.username;
  var password = req.body.password;
  
  for (var key in dict){
      console.log("hi");
      if( key === username && dict[key] === password){
         res.sendFile(__dirname + "/view.html");
        }      
  }

  dict[username] = password;
  res.sendFile(__dirname + "/signup.html");

  
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});




