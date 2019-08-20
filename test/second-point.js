var assert = require('assert');
let BirdIsland = require('../models/birdIsland');
let Bird = require('../models/bird');
let Chuck = require('../models/chuck');
let Red = require('../models/red');
let AngryControlEvent = require('../models/angryControlEvent');
let PigInvasionEvent = require('../models/pigInvasionEvent');
let SurprisePartyEvent = require('../models/surprisePartyEvent');
let CompositeEvent = require('../models/compositeEvent');

describe('Island events', function() {
  let island
  let chuck
  let red

  beforeEach (function() {
    island = new BirdIsland()
    chuck = new Chuck(5)    
    red = new Red()    
    island.add(chuck)
    island.add(red)
    for(let i = 0; i < 3 ; i++) {
        island.add(new Bird())
    } 
  });

  describe('#behaviour of angry control', function() {

    it('should not decrease angry to 0', function() {
      let islandEvent = new AngryControlEvent(island)
      assert.equal(island.strength(), 166)
      island.birds.forEach((bird) => bird.getAngry())
      assert.equal(island.strength(), 202)
      islandEvent.trigger()
      assert.equal(island.strength(), 176)
    });

  });

  describe('#behaviour of pig invasion control', function() {

    it('should get angrier 2 time', function() {
      let islandEvent = new PigInvasionEvent(island, 250)
      assert.equal(island.strength(), 166)
      islandEvent.trigger()
      assert.equal(island.strength(), 518)
    });

  });

  describe('#behaviour of surprise party', function() {

    it('should make angrier only Red', function() {
      let guests = new Array()
      guests.push(red)
      let islandEvent = new SurprisePartyEvent(island, guests)
      assert.equal(island.strength(), 166)
      islandEvent.trigger()
      assert.equal(island.strength(), 196)
    });

  });

  describe('#behaviour of composite event', function() {

    it('should trigger 3 events', function() {
      let guests = new Array()
      guests.push(red)
      let islandEvent = new CompositeEvent(island)
      islandEvent.add(new SurprisePartyEvent(island, guests))
      islandEvent.add(new PigInvasionEvent(island, 250))
      islandEvent.add(new AngryControlEvent(island))
      assert.equal(island.strength(), 166)
      islandEvent.trigger()
      assert.equal(island.strength(), 718)
    });

  });


});
