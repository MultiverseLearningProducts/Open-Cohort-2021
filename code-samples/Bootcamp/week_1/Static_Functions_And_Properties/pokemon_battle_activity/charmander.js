const Pokemon = require('./pokemon')

class Charmander extends Pokemon {

    constructor(name,number,type,hp) {
        super(name,number,type,hp)
        this.attacks = [this.fireBreath, this.fireWall]
    }

    //attack
    fireBreath() {
        return [`fireBreath`, Math.floor(Math.random() * 30)]
    }

    //defense
    fireWall() {
        return [`fireWall`, Math.floor(Math.random() * 10)]
    }
}

const newChar = new Charmander('char', 1, 'fire', 50)

module.exports = newChar