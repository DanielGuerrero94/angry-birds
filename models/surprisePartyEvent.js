const IslandEvent = require('./islandEvent')

class SurprisePartyEvent extends IslandEvent{

    constructor (island, guests) {
        super()
        this._island = island
        this._guests = guests
    }

    trigger () {
        this._island.birds.forEach((bird) => {
            if (this._guests.includes(bird)) bird.getAngry()
        });
    }
    
}

module.exports = SurprisePartyEvent
