var request = require('request');

var post = function() {
  var options = {
    uri: 'http://localhost:3000/add',
    method: 'POST',
    json: {
      "email": "loktakwah@gmail.com",
      "userId": "76561197969413719",
      "gameName": "Counter-Strike: Global Offensive"
    },
  };

  request(options, function(err, res, body) {
    if (err) {
      console.log("Error with post request, ", err);
    } else {
      console.log(body);
    }
  });
};

module.exports = post;