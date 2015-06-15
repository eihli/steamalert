var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var apiConfig = require('../apiConfig');
var sgOptions = {
  auth: {
    api_user: apiConfig.sgUsername,
    api_key: apiConfig.sgPassword
  }
};
var mailer = nodemailer.createTransport(sgTransport(sgOptions));

module.exports = {
  email: function(userData, emailAddress) {
    var email = {
      to: emailAddress,
      from: 'eihli@owoga.com',
      subject: 'Friend online!',
      text: 'One of your friends is playing steam.',
      html: '<h1>Awesome!</h1>'
    };
    mailer.sendMail(email, function(err, res) {
      if (err) {
        console.log('Error sending email: ', err);
      } else {
        console.log('Email sent: ', res);
      }
    });
    console.log("api info: ", apiConfig.sgUsername, apiConfig.sgPassword);
    return "Email sent";
  }
};