var should = require('chai').should();
var worker = require('../worker');
var sinon = require('sinon');

describe('Web worker', function() {

  describe('alertUser', function() {

    it('should be a function of worker', function() {
      worker.alertUser.should.be.a('function');
    });

    // Commented out so I don't make boatloads of e-mails request.
    xit('should call the function from alerts.js', function() {
      worker.alertUser('email', null, 'loktakwah@gmail.com').should.equal("Email sent");
    });

  });

  describe('getUserData', function() {

    var spy;

    beforeEach(function() {
      spy = sinon.spy(worker.api, "getUserData");
    });

    afterEach(function() {
      worker.api.getUserData.restore();
    });

    it('should be a function', function() {
      worker.api.getUserData.should.be.a('function');
    });

    it('should accept a userId and a callback', function() {
      worker.api.getUserData(12351235, function(data) {
        return data;
      });
      spy.getCall(0).args[0].should.equal(12351235);
      spy.getCall(0).args[1].should.be.a('function');
    });

    // Commented out because I don't know how to use stubs/mocks to test api calls.
    xit('should call a callback on the resulting data', function(done) {
      spy.restore();

      var fakeData = {
        username: 'eric',
        game: 'team fortress 2'
      };

      var callback = sinon.spy();
      stub = sinon.stub(worker, "getUserData");
      stub.yields(fakeData);

      process.nextTick(function() {
        callback.calledOnce.should.equal(true);

        callback.restore();
        stub.restore();
        done();
      });

    });
    
  });

});