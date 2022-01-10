const Player = require('./Player/Player.js')
const Monster = require('./Monster/Monster.js')
const Map = require('./Map/Map.js')

//create instances of each class

//player
let player = new Player('Brad', 20, {
    'punch': 5
})


//monster [there are many ways you can generate monsters]
let monster = new Monster('Ulala', 10, {
    'punch': 8
})


//Generate Map
let newMap = new Map()
newMap.generateMap()
newMap.generatePlayer()
newMap.generateMonsters()

//battle function will require our map, player, monster
function battle(map, player, monster) {
    if(map.collision === true) {
        console.log(`==== COLLISION ===`)
        console.log(map.map)
        console.log(`==== BATTLE BEGIN ===`)
        //while both are still alive
        while(player.hp > 0 || monster.hp > 0) {
            if(player.hp <= 0) {
                console.log('MONSTER WON')
                return
            }
            if(monster.hp <= 0) {
                console.log('PLAYER WON')
                return
            }
            //0 player 1 monster
            let firstMove = Math.floor(Math.random() * 2)
            if(firstMove === 0) {
                //player will attack monster
                console.log(`player attacks monster!`)
                monster.hp = monster.hp - player.attacks.punch
                console.log(`Current Stats: Player hp: ${player.hp}, Monster hp: ${monster.hp}`)
            }else {
                //monster will attack player
                console.log(`monster attacks player!`)
                player.hp = player.hp - monster.attacks.punch
                console.log(`Current Stats: Player hp: ${player.hp}, Monster hp: ${monster.hp}`)
            }
        }

    } else {
        console.log(`NO COLLISION, RESTART GAME`)
    }

    
}

battle(newMap,player,monster)