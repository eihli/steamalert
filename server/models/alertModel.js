var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  alertSchema = new Schema({
  email: String,
  userId: String,
  gameName: String
});

var Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;