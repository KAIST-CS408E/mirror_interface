var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use('/', express.static(__dirname + '/public')); // you may put public js, css, html files if you want...
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.listen(3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});