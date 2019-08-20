var assert = require('assert');
let Bird = require('../models/bird');
let BirdIsland = require('../models/birdIsland');

describe('Bird', function() {
  let bird 

  beforeEach (() => {
    bird = new Bird()
  });

  describe('#Watch the birds', function() {

    it('should return the strength of a bird', function() {
      assert.equal(bird.strength, 2)
    });

    it('should make a bird angry', function() {
      let bird = new Bird()
      bird.getAngry()      
      assert.equal(bird.angry, 2)
    });

    it('should return the strogest birds of the island', function() {
      let bird = new Bird()
      let anotherBird = new Bird()
      let island = new BirdIsland()
      //i need to get his strength > 50
      for(let i = 0; i < 5; i++) {
        bird.getAngry()
      }      
      assert.equal(bird.strength, 64)
      island.add(bird)
      island.add(anotherBird)
      assert.equal(island.strongest().length, 1)
      assert.equal(island.strongest().pop(), bird)
    });

    it('should return the total strength of the island', function() {
      let bird = new Bird()
      let anotherBird = new Bird()
      let island = new BirdIsland()
      island.add(bird)
      island.add(anotherBird)
      assert.equal(island.strength(), 4)
    });

  });
});
