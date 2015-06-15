var should = require('chai').should();
var worker = require('../worker');
var sinon = require('sinon');

describe('Web worker', function() {

  describe('getUserData', function() {

    var spy;

    beforeEach(function() {
      spy = sinon.spy(worker, "getUserData");
    });

    afterEach(function() {
      worker.getUserData.restore();
    });

    it('should be a function', function() {
      worker.getUserData.should.be.a('function');
    });

    it('should accept a userId and a callback', function() {
      worker.getUserData(12351235, function(data) {
        return data;
      });
      spy.getCall(0).args[0].should.equal(12351235);
      spy.getCall(0).args[1].should.be.a('function');
    });

    it('should call a callback on the resulting data', function(done) {
      spy.restore();

      var fakeData = {
        username: 'eric',
        game: 'team fortress 2'
      };

      var callback = function(data) {
        console.log(data);
        return data;
      };

      callback = sinon.spy(callback);
      stub = sinon.stub(worker, "getUserData");
      
      stub.yields(fakeData);
      callback.calledOnce.should.equal(true);

      callback.restore();
      stub.restore();
      done();
    });
    
  });

});