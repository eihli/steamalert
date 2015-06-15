var request = require('request');
var nodemailer = require('nodemailer');
var apiConfig = require('../apiConfig');
var apiUrl = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/";
var USERID = 76561198056532429;
var steamApiKey = process.env.STEAM_API_KEY || apiConfig.steamApiKey;
var alerts = require('./alerts.js');

var getUserData = function(userId, cb) {
  userId = userId || USERID;
  request.get(apiUrl + "?key=" +
    steamApiKey + "&steamids=" + userId,
    function(err, res, body) {
      if (err) {
        console.log(err);
        cb(err);
      }
      if (!err) {
        console.log(body);
        cb(body);
      }
    }
  );
};

var alertUser = function(alertType, userData, email) {
  return alerts[alertType](userData, email);
};

module.exports = {
  alertUser: alertUser,
  getUserData: getUserData
};