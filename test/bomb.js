var assert = require('assert');
let Bomb = require('../models/bomb');

describe('Bomb', function() {
  describe('#behaviour of Bomb', function() {

    it('should not be more strong than his limit', function() {
      let limit = 9000
      let bomb = new Bomb(limit)
      for(let i = 0; i < 15; i++) {
        bomb.getAngry()
      }
      assert.equal(bomb.strength, limit)
    });

  });
});
