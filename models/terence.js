let Bird = require('./bird')

class Terence extends Bird {
    constructor (multiplicator) {
        super()
        this._angryCount = 1
        this._multiplicator = multiplicator
    }

    get strength () { 
        return this._angry * this._multiplicator * this._angryCount
    }

    getAngry () {
        super.getAngry()
        this._angryCount += 1
    }

}

module.exports = Terence
