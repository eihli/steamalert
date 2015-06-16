var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  alertSchema = new Schema({
  email: String,
  userId: String,
  gameName: String
});


var Alert = mongoose.model('Alert', alertSchema);

alertSchema.methods.addAlert = function(email, userId, gameName, cb) {
  var alert = new Alert({
    email: email,
    userId: userId,
    gameName: gameName
  });
  alert.save(function(err) {
    if (err) {
      console.log("Error trying to save");
      cb(err);
    } else {
      console.log("Saved new alert to database");
      cb(null, {result: "success"});
    }
  });;
};

module.exports = Alert;