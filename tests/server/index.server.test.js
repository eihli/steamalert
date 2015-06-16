var should = require('chai').should();
var request = require('request');

// Make sure server is running if you want these tests to pass.
// Refactor in the future so that these tests actually launch a test server.
describe('Server API', function() {

  describe('POST requests', function() {
    var options = {
      uri: 'http://localhost:3000/add',
      method: 'POST',
      json: {
        "email": "loktakwah@gmail.com",
        "userId": "76561197969413719",
        "gameName": "Counter-Strike: Global Offensive"
      },
    };
    xit('a post request to /add should add an alert to the database', function() {
      request(options, function(err, res, body) {
        if (err) {
          console.log("Error with post request, ", err);
        } else {
          console.log(body);
        }
      });
    });
  });

});