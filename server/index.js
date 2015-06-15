var express = require('express'),
  app = express(),
  getUserData = require('./worker');  

app.get('/', function(req, res) {
  getUserData(null, function(body) {
    console.log(body);
    res.send(body);
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});