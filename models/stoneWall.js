const Wall = require('./wall')

class StoneWall extends Wall {

    constructor (width) {
        super(50, width)
    }

}

module.exports = StoneWall
