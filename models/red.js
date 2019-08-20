let Bird = require('./bird')

class Red extends Bird {

    constructor () {
        super()
        this._angryCount = 1
    }

    get strength () { 
        return this._angry * 10 * this._angryCount
    }

    getAngry () {
        super.getAngry()
        this._angryCount += 1
    }

}

module.exports = Red
