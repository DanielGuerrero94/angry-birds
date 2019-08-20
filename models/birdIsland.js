const Island = require('./island.js')

class BirdIsland extends Island{

    get birds () { return this._collection}

    strongest () {
        return this._collection.filter(bird => bird.strength > 50)
    }

    strength () {
        return this._collection.reduce((total, bird) => total + bird.strength, 0)
    }

}

module.exports = BirdIsland
