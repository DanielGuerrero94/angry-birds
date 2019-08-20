var assert = require('assert');
let Chuck = require('../models/chuck');

describe('Chuck', function() {
  describe('#behaviour of Chuck', function() {

    it('should not have a strength grater than 150 if is running 80k/h', function() {
      let velocity = 70
      let chuck = new Chuck(velocity)
      assert.equal(chuck.strength, 150)
    });

    it('should increase velocity when angry', function() {
      let velocity = 70
      let chuck = new Chuck(velocity)
      chuck.getAngry()
      assert.equal(chuck.velocity, 140)
    });

    it('should be adding k/h to strength', function() {
      let velocity = 140
      let chuck = new Chuck(velocity)
      assert.equal(chuck.strength, 450)
    });


  });
});
