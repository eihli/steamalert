var express = require('express'),
  app = express(),
  worker = require('./worker'),
  db = require('./db.js'),
  bodyParser = require('body-parser'),
  alerts = require('./controllers/alert.server.controller');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  alerts.getAll(req, res, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  res.send("Hello world");
});

app.post('/add', function(req, res) {
  console.log(req.body);
  alerts.create(req, res, function(err, data) {
    if(err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });

});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});