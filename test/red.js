var assert = require('assert');
let Red = require('../models/red');

describe('Red', function() {
  describe('#behaviour of Red', function() {

    it('should increase his strength because is angry', function() {
      let red = new Red()
      assert.equal(red.strength, 10)
    });

    it('should increase his strength because is resentful', function() {
      let red = new Red()
      red.getAngry()
      assert.equal(red.strength, 40)
    });

  });
});
