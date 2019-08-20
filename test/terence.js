var assert = require('assert');
let Terence = require('../models/terence');

describe('Terence', function() {
  describe('#behaviour of Terence', function() {

    it('should use the multiplacator when angry', function() {
      let multiplicator = 2
      let terence = new Terence(multiplicator)
      terence.getAngry()
      assert.equal(terence.strength, 8)
    });

  });
});
