const IslandEvent = require('./islandEvent')

class CompositeEvent extends IslandEvent{

    constructor (island) {
        super()
        this._island = island
        this._events = new Array()
    }

    add (event) {
        this._events.push(event)
    }

    trigger () {
        this._events.forEach((event) => event.trigger())
    }

}

module.exports = CompositeEvent