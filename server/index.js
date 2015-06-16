var express = require('express'),
  app = express(),
  worker = require('./worker'),
  db = require('./db.js'),
  Alert = require('./models/alertModel');

app.get('/', function(req, res) {
  Alert.find({}, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.send("Hello world");
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});