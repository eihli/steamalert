var Alert = require('../models/alert.server.model');

module.exports.create = function(req, res, next) {
  var alert = new Alert(req.body);
  alert.save(function(err) {
    if (err) {
      return next(err);
    } else {
      next(null, alert);
    }
  });
};

module.exports.getAll = function(req, res, next) {
  Alert.find({}, function(err, data) {
    if (err) {
      return next(err);
    } else {
      next(null, data);
    }
  });
};