var request = require('request');
var config = require('../config');
var apiUrl = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/";
var USERID = 76561198056532429;
var steamApiKey = process.env.STEAM_API_KEY || config.steamApiKey;
var alerts = require('./alerts.js');

// We define two different ways to get what game the user is logged into.
// The first is with the Steam api. The second is with a web scrape.
var api = {
  getUserData: function(userId, cb) {
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
  }
};

var webScrape = {
  getUserData: function(profileUrl, cb) {

  }
};

var alertUser = function(alertType, userData, email, callback) {
  return alerts[alertType](userData, email, function(result) {
    console.log("Inside alertUser ", result);
    callback(result);
  });
};

module.exports = {
  alertUser: alertUser,
  api: api,
  webScrape: webScrape
};