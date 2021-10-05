
const newBulb  = require('./bulbasaur')
const newChar = require('./charmander')



function battle(pokemon1, pokemon2) {
    
    while(pokemon1.hp > 10 || pokemon2.hp > 10) {
        let pokemons = [pokemon1, pokemon2]
        let randomBinary = Math.floor(Math.random() * 2) //random num 0 or 1
        let [currentPokemon]  = pokemons.slice(randomBinary, randomBinary + 1)
        let opponentPokemon  = pokemons[randomBinary]
        console.log('CURENT POKEMONNN', currentPokemon)
        let currentAttack = currentPokemon.attacks[randomBinary]()[0]
        let damage = currentPokemon.attacks[randomBinary]()[1]

        //hit 1
        if (randomBinary === 1) {
            console.log(`${currentPokemon.name} used ${currentAttack}`)
            opponentPokemon.hp = opponentPokemon.hp - damage
            console.log(`super effective`)
            // setTimeout(() => {return console.log(`...it was super effective, 
            // ${opponentPokemon.name} hp: ${opponentPokemon.hp}`)},2000)
        } else {
            console.log('you missed!')
        }
    }
    console.log('CURENT POKEMONNN NEW', currentPokemon, 'OPPONENTs Pokemon', opponentPokemon)
    return `game over`

}
battle(newBulb, newChar)
// console.log(newChar)
// console.log(newBulb.vineSlap(newChar))
// console.log(newChar)
