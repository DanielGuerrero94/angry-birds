let Bird = require('./bird')

class Chuck extends Bird {

    constructor (velocity) {
        super()
        this._velocity = velocity
    }

    get velocity () { return this._velocity}
    set velocity (velocity) { this._velocity = velocity}

    get strength () { 
        if (this._velocity <= 80) return 150
        return 150 + 5 * (this._velocity - 80)
    }

    getAngry () {
        this._velocity = this._velocity * 2
    }
    
    calmDown () {
        //He can not be calm
    }

}

module.exports = Chuck
