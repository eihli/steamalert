var express = require('express'),
  app = express(),
  path = require('path'),
  worker = require('./worker'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  db = require('./db.js'),
  alerts = require('./controllers/alert.server.controller');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('view engine', 'jade');
app.set('views', (path.join(__dirname, '../client/views')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/list', function(req, res) {
  alerts.getAll(req, res, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

app.post('/add', function(req, res) {
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