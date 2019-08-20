class Bird {

    constructor (angry = 1) {
        this._angry = angry
    }

    get strength () { return this._angry * 2 }

    getAngry () {
        this._angry = 2 * this._angry
    }

    get angry () { return this._angry }

    calmDown (quantity) {
        this._angry = this._angry - quantity
        if (this._angry < 1) this._angry = 1
    }

    canOverthrow (obstacle) {
        return this.strength > obstacle.resistance
    }
}

module.exports = Bird
