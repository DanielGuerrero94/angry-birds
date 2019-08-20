const Obstacle = require('./obstacle')

class Wall extends Obstacle {

    constructor (resistance, width) {
        super(resistance)
        this._width = width
    }

    get resistance () {
        return this._resistance * this._width
    }

}

module.exports = Wall
