var assert = require('assert');
let Bird = require('../models/bird');
let GlassWall = require('../models/glassWall');
let BirdIsland = require('../models/birdIsland');
let PigIsland = require('../models/pigIsland');
let Battle = require('../models/battle');

describe('War', function() {
  let bird 
  let glassWall 
  let island 
  let pigIsland 
  let battle 

  beforeEach (() => {
    bird = new Bird()
    bird.getAngry()
    bird.getAngry()
    bird.getAngry()
    island = new BirdIsland()
    island.add(bird)
    glassWall = new GlassWall(2)
    pigIsland = new PigIsland()
    pigIsland.add(glassWall)
    battle = new Battle(island, pigIsland)
  });

  describe('#Pig battle', function() {

    it('should overtrow an obstacle', function() {
      bird.getAngry()
      assert.equal(bird.canOverthrow(glassWall), true)
    });

    it('should attack enemy island', function() {
      battle.start()
      assert.equal(battle.isOver(), true)
      assert.equal(battle.enemyIslandHasBeenCleared(), false)
    });

    it('should clear enemy island', function() {
      bird.getAngry()
      battle.start()
      assert.equal(battle.isOver(), true)
      assert.equal(battle.enemyIslandHasBeenCleared(), true)
    });

  });
});
