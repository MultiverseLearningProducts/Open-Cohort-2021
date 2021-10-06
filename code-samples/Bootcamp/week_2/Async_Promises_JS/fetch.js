import fetch from 'node-fetch'

let caughtPokemon = {}


function getRandomPokemon(num) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res) => {
        return res.json()
    }).then((data) => {
        return data.forms
    }).catch(() => {    
        console.log('pokemon not found')
    })                      
}

function catchEm(pokemon, pokeball) {
    return new Promise((resolve, reject) => {
        let probOfCatching = Math.floor(Math.random() * 100)
        console.log('MY CHANCE:', probOfCatching, pokeball)
        if(pokeball === 'MasterBall') {
            if(probOfCatching <= 75) {
                resolve(pokemon)
            } else{
                reject()
            }
        }
        if(pokeball === 'pokeball') {
            if(probOfCatching <= 25) {
                resolve(pokemon)
            } else {
                reject()
            }
        }
    })   
}

function pokeDex(pokemon) {
    if(caughtPokemon[pokemon.name]) {
        let info = pokemon
        console.log(`you've caught ${caughtPokemon[pokemon.name]} of ${pokemon.name}, here is some information about this pokemon: ${info}`)
    }
}


let testPokemon = getRandomPokemon(25)


catchEm(testPokemon, 'pokeball').then((pokemon) => {
    let pokemonName = pokemon[0].name
    console.log(`You caught: ${pokemonName}`)
    if(caughtPokemon[pokemonName]) {
        caughtPokemon[pokemonName]++
    }else {
        caughtPokemon[pokemonName] = 1
    }
    console.log(`Your current Pokemons: ${JSON.stringify(caughtPokemon)}`)
}).catch(() => {
    console.log('You missed!')
})

pokeDex(testPokemon)

//getRandomPokemon(num) -> will return data.forms

