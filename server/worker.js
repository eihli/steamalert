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
    userId = userId || USERID;
    var url = apiUrl + "?key=" + steamApiKey + "&steamids=" + userId;
    request.get(url, function(err, res, body) {
        if (err) {
          console.log(err);
          cb(err);
        }
        if (!err) {
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
  callback = callback || function() {};
  alerts[alertType](userData, email, function(err, result) {
    console.log("Inside alertUser ", result);
    callback(err, result);
  });
};

var checkUser = function(userId, gameName, cb) {
  api.getUserData(userId, function(err, res) {
    res = JSON.parse(res);
    if (err) {
      cb(err);
    } else {
      if (res && res.response && res.response.players) {
        if (res.response.players[0].gameextrainfo === gameName){
          cb(null, true);
        }
      } else {
        console.log('else statement in checkuser');
        cb(null, false);
      }
    }
  });
};

var run = function(userId, gameName) {
  var userData = {userId: userId, gameName: gameName};
  checkUser(userId, gameName, function(err, loggedIn) {
    if (loggedIn) {
      alertUser('email', userData, 'loktakwah@gmail.com', function(err, res) {
        console.log(userId + " is logged in to " + gameName);
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });
    } else {
      console.log(userId + " is not logged in to " + gameName);
    }
  });
};

module.exports = {
  run: run,
  alertUser: alertUser,
  api: api,
  webScrape: webScrape,
  checkUser: checkUser
};