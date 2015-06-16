var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', function() {
  mongoose.connection.collections.alerts.drop(function(err) {
    console.log("Database dropped. Starting fresh...");
  });
});
module.exports = mongoose.connection;