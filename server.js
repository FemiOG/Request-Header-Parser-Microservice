var express = require('express');
var parser = require("ua-parser-js")
var app = express();

app.get('/',function(req,res){
    var userAgent = parser(req.headers["user-agent"]);
    var arrayLanguage = parser(req.headers["accept-language"]).ua.split(",");
    var language = arrayLanguage[0];
    var OS = userAgent.os.name + " " +userAgent.os.version;
    
    var ipArray = req.ip.split(":");
    var ip = ipArray[3];
    res.send({
        "IP Address": ip, "Operating System": OS, language: language })
})

//res.writeHead(200, {"Content-Type": "application/json"});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})
