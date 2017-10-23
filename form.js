var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
 
 
app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/Hello'  method='post' name='form1'>";
  html += "Firstname:<input type= 'text' name='firstname'><br/>";
  html += "Lastname:<input type='text' name='lastname'><br/>";
  html += "<input type='submit' value='submit'><br/>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app.post('/Hello', urlencodedParser, function (req, res){
  var reply='';
  reply += "Hello !!!" + " " + req.body.firstname + " " + req.body.lastname + "."; 
  res.send(reply);
 });