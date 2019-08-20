const Equipment = require('./equipment')

class Shield extends Equipment {

    constructor (resistance = 10) {
        super(resistance)
    }

}

module.exports = Shield
