const Equipment = require('./equipment')

class Helmet extends Equipment {

    constructor (resistance = 5) {
        super(resistance)
    }

}

module.exports = Helmet
