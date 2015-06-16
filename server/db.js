var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

module.exports = mongoose.connection;