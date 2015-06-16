var express = require('express'),
  app = express(),
  worker = require('./worker');  

app.get('/', function(req, res) {
  worker.getUserData(null, function(body) {
    console.log(body);
    res.send(body);
  });
});

app.get('/test', function(req, res) {
  worker.alertUser('email', null, 'loktakwah@gmail.com', function(result) {
    console.log("Inside app.get('/test/')", result);
    res.send(result);
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});