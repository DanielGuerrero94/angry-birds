class Obstacle {

    constructor (resistance = 1) {
        this._resistance = resistance
    }

    get resistance () {
        return this._resistance
    }

}

module.exports = Obstacle
