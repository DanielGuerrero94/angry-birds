const Bird = require('./bird')

class Bomb extends Bird {
    constructor (limit) {
        super()
        this._limit = limit
    }

    get strength () { 
        if (this._angry > this._limit) return this._limit
        return super.strength
    }

}

module.exports = Bomb
