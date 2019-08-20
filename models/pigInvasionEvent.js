const IslandEvent = require('./islandEvent')

class PigInvasionEvent extends IslandEvent{

    constructor (island, quantity) {
        super()
        this._island = island
        this._quantity = quantity
    }

    trigger () {
        for(let i = 0; i < this._quantity / 100; i++) {
            this._island.birds.forEach((bird) => bird.getAngry())
        }
    }
    
}

module.exports = PigInvasionEvent
