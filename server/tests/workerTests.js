var should = require('chai').should();
var worker = require('../worker');

describe('Web worker', function() {
  it('should have a function getUserData', function() {
    worker.getUserData.should.be.a('function');
  });
});