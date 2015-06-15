var request = require('request');
var apiConfig = require('../apiConfig');
var apiUrl = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/";
var USERID = 76561198056532429;
var steamApiKey = process.env.STEAM_API_KEY || apiConfig.steamApiKey;

var result = request.get(apiUrl + "?key=" +
  steamApiKey + "&steamids=" + USERID,
  function(err, res, body) {
    if (!err) {
      console.log(body);
    }
  }
);
