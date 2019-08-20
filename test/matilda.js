var assert = require('assert');
let Matilda = require('../models/matilda');

describe('Matilda', function() {
  describe('#behaviour of Matilda', function() {

    it('should add eggs strength', function() {
      let matilda = new Matilda()
      matilda.getAngry()
      assert.equal(matilda.strength, 4)
    });

  });
});
