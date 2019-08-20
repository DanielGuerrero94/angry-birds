const IslandEvent = require('./islandEvent')

class AngryControlEvent extends IslandEvent{

    constructor (island) {
        super()
        this._island = island
    }

    trigger () {
        this._island.birds.forEach((bird) => bird.calmDown(5))
    }
    
}

module.exports = AngryControlEvent
