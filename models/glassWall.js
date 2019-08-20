const Wall = require('./wall')

class GlassWall extends Wall {

    constructor (width) {
        super(10, width)
    }

}

module.exports = GlassWall
