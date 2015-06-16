var should = require('chai').should();
var request = require('request');

describe('Routing', function() {
  var url = 'http://localhost:3000';

  describe('Home Page', function() {
    xit('/list should return a list of alerts', function() {
      request.get(url + '/list')
        .on('response', function(res) {
          console.log(res);
        })
        .on('error', function(err) {
          console.log(err);
        });
    });
  });
});