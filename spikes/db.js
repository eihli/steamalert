var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');
var Schema = mongoose.Schema;

var  alertSchema = new Schema({
  email: String,
  userId: String,
  gameName: String
});

var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;