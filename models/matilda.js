let Bird = require('./bird')
let Egg = require('./egg')

class Matilda extends Bird {

    constructor () {
        super()
        this._eggs = new Array()
    }

    get strength () { 
        return super.strength + this.eggsStrength()
    }

    eggsStrength () {
        return this._eggs.reduce((total, egg) => total + egg.strength, 0)
    }

    getAngry () {
        let egg = new Egg(2)
        this._eggs.push(egg)
    }

}

module.exports = Matilda
