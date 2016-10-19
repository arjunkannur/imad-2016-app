var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send("this is article one");
});
app.get('/article-two',function(req,res){
    res.send("this is article two");
});app.get('/article-three',function(req,res){
    res.send("this is article three");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/CYMERA_20160131_105516.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'CYMERA_20160131_105516.jpg'));
});
app.get('/ui/2_0uH_icon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2_0uH_icon.ico'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
