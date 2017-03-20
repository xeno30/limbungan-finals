//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/partone', function(req, res){
  res.sendFile(path.join(__dirname, 'views/partone.html'));
});
app.get('/parttwo', function(req, res){
  res.sendFile(path.join(__dirname, 'views/parttwo.html'));
});
app.get('/partthree', function(req, res){
  res.sendFile(path.join(__dirname, 'views/partthree.html'));
});
app.get('/partfour', function(req, res){
  res.sendFile(path.join(__dirname, 'views/partfour.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});