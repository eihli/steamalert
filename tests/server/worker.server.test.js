var should = require('chai').should();
var worker = require('../../server/worker');
var sinon = require('sinon');
var userData = require('./userData.js');

describe('Web worker', function() {

  describe('alertUser', function() {

    var stub;
    // Stubbed so we don't make boatloads of emails while testing.
    beforeEach(function() {
      stub = sinon.stub(worker, 'alertUser');
      stub.yields(null, {result: "success"});
    });
    afterEach(function() {
      stub.restore();
    });

    it('should be a function of worker', function() {
      worker.alertUser.should.be.a('function');
    });

    it('should call the function from alerts.js', function(done) {
      worker.alertUser('email', userData.loggedInUser, 'loktakwah@gmail.com', function(err, res) {
        res.result.should.equal("success");
        done();
      });
    });

  });

  describe('checkUser', function() {
    var stub;

    beforeEach(function() {
      // Take over worker.api.getUserData and force it to return
      // a certain value, this keeps it from making api calls to STEAM during
      // tests.
      stub = sinon.stub(worker.api, 'getUserData');
      // stub.yields forces the worker.api.getUserData() function to call its
      // callback with the given arguments.
      stub.yields(null, JSON.stringify(userData.loggedInUser));
    });

    afterEach(function() {
      stub.restore();
    });

    it('should return true if a user is logged into the game specified', function(done) {
      worker.checkUser('76561197969413719', "Counter-Strike: Global Offensive", function(err, res) {
        res.should.equal(true);
        done();
      });
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
    it('should call a callback on the resulting data', function(done) {
      spy.restore();

      var fakeData = {
        username: 'eric',
        game: 'team fortress 2'
      };

      var callback = sinon.spy();
      stub = sinon.stub(worker.api, "getUserData");
      stub.yields(null, fakeData);

      worker.api.getUserData('12341234', function(err, data) {
        if (err) {
          console.log(err);
        } else {
          data.should.eql(fakeData);
          done();
        }
      });

      // process.nextTick(function() {
      //   callback.calledOnce.should.equal(true);

      //   callback.restore();
      //   stub.restore();
      //   done();
      // });

    });
    
  });

});