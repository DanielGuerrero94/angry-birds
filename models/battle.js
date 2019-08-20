class Battle {

    constructor (island, enemyIsland) {
        this._island = island
        this._enemyIsland = enemyIsland
        this._isOver = false
        this._enemyIslandHasBeenCleared = false
    }

    start () {
        while(!this._isOver) {
            this.nextFight()
        }
    }

    isOver () {
        return this._isOver   
    }

    enemyIslandHasBeenCleared () {
        return this._enemyIslandHasBeenCleared
    }

    nextFight () {
        let bird = this._island.nextOne()
        let obstacle = this._enemyIsland.nextOne()
        this.fight(bird, obstacle)
        this.checkIfOver()
    }

    fight (bird, obstacle) {
        if (bird.canOverthrow(obstacle)) {
            this._enemyIsland.removeFirst()
        }
        this._island.removeFirst()
    }

    checkIfOver () {
        if (this._enemyIsland.isEmpty()) {
            this._enemyIslandHasBeenCleared = true
            this._isOver = true
        }

        if (this._island.isEmpty()) {
            this._isOver = true
        }
    }

}

module.exports = Battle
