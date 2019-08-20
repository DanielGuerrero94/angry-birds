class Egg {
    constructor(weight) {
        this._weight = weight
    }

    get strength () { return this._weight}
}

module.exports = Egg