const Pokemon = require('./pokemon') //imported parent component to keep our code DRY

//child component of the parent class Pokemon
class Bulbasaur extends Pokemon {
    constructor(name,number,type,hp) {
        super(name,number,type,hp)
        this.attacks = [this.vineSlap, this.leafWhirl]
    }

    vineSlap() {
        return [ 'vineSlap', Math.floor(Math.random() * 20) ]
    }

    leafWhirl() {
        return [ 'leafWhirl', Math.floor(Math.random() * 10) ]
    }
}



const newBulb = new Bulbasaur('bulbasaur',2, 'leaf', 40)


module.exports = newBulb