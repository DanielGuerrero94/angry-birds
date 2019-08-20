const Obstacle = require('./obstacle')

class ArmedPig extends Obstacle {

    constructor (equipment) {
        super(10)
        this._equipment = equipment
    }

    get resistance () {
        return this._resistance * this._equipment.resistance
    }

}

module.exports = ArmedPig
