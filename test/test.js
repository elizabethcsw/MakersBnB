
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
var assert = chai.assert;

chai.use(chaiHttp);

const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('Makersbnb', function() {
  const browser = new Browser();

  it('should load the webpage on / Get', function(){
    return browser.visit('/')
  });

  it('should have login button on / Get', function(){
    browser.visit('/')
    browser.assert.button('Sign up')
  });

});
