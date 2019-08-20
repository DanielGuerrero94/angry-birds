class Island {

    constructor () {
        this._collection = new Array()
    }

    add (element) {
        this._collection.push(element)
    }

    isEmpty () {
        return this._collection.length == 0
    }

    nextOne () {
        return this._collection[0]
    }

    removeFirst () {
        this._collection.shift()
    }

}

module.exports = Island
