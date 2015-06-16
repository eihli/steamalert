var request = require('request');
var config = require('../config');
var apiUrl = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/";
var USERID = '76561197969413719'; // 76561198072708366; // 76561198072708366  // 76561198056532429
var steamApiKey = process.env.STEAM_API_KEY || config.steamApiKey;
var alerts = require('./alerts.js');

// We define two different ways to get what game the user is logged into.
// The first is with the Steam api. The second is with a web scrape.
var api = {
  getUserData: function(userId, cb) {
    userId = USERID;
    var url = apiUrl + "?key=" + steamApiKey + "&steamids=" + userId;
    request.get(url, function(err, res, body) {
        console.log(url);
        if (err) {
          console.log(err);
          cb(err);
        }
        if (!err) {
          console.log(body);
          cb(null, body);
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

var checkUser = function(userId, gameName, cb) {
  api.getUserData(userId, function(err, res) {
    if (err) {
      console.log("Error in checkUser: ", err);
      cb(err);
    } else {
      console.log("Returning in checkUser from call to getUserData: ", res);
      cb(null, res);
    }
  });
};

module.exports = {
  alertUser: alertUser,
  api: api,
  webScrape: webScrape,
  checkUser: checkUser
};