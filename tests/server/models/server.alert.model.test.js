var should = require('chai').should();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Alert = require('../../../server/models/alertModel.js');

describe('Database Tests', function() {

  beforeEach(function(done) {

    for (var i in db.collections) {
      // console.log(db.collections[i]);
      db.collections[i].remove(function() {});
    }
    var alert = new Alert({
      email: "loktakwah@gmail.com",
      userId: "76561197969413719",
      gameName: "Counter-Strike: Global Offensive"
    });
    alert.save(function(err) {
      return done();
    });
  });

  describe('should connect to a test database', function() {
    xit('should insert into database', function() {
      Alert.find({}, function(err, res) {
      });
    });
  });

});