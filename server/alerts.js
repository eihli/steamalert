var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var config = require('../config');
var sgOptions = {
  auth: {
    api_user: config.sgUsername,
    api_key: config.sgPassword
  }
};
var mailer = nodemailer.createTransport(sgTransport(sgOptions));

module.exports = {
  email: function(userData, emailAddress, callback) {
    var email = {
      to: emailAddress,
      from: 'eihli@owoga.com',
      subject: 'Friend online!',
      text: 'One of your friends is playing steam.',
      html: '<h1>Awesome!</h1>'
    };
    mailer.sendMail(email, function(err, res) {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    });
  }
};