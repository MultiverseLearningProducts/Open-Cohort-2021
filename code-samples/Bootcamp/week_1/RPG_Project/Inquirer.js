const inquirer = require('inquirer')
const figlet = require('figlet')
const chalk = require('chalk')
const allPokemon = require('./allPokemon.js')
const Monster = require("./Monster");
const Player = require('./Player.js')
const Map = require("./Map");
const battle = require("./Battle");

const mainPlayer = new Player();
const gameTitle = 'Pokemon Battle'

const attacks = [
  { name: 'Tackle', damage: 10 },
  { name: 'Scratch', damage: 20 },
  { name: 'Body Slam', damage: 30 },
  { name: 'Quick Attack', damage: 40 }
  ];

const sampleAttacks = [
  { name: "Lightning Blast", damage: 30 },
  { name: "Ancient Thunder", damage: 30 },
  { name: "Storm Hyde", damage: 30 },
  { name: "Blast Burn", damage: 40},
  ];
  
// generate monsters
let monsters = [];
for (let i = 0; i < 6; i++) {
  let monster = new Monster(allPokemon[i]);
  monster.attacks = sampleAttacks;
  monster.hp = 100;
  monsters.push(monster);
}

const map = new Map(4, mainPlayer, monsters);
map.generateArray();

// running our game if collide
// prints the array with player on it
// if there was a collision, we initate a battle with
// battle(player, the monster it collided with)
function runGame(map) {
  map.generateArray();
  let collide = map.checkCollision();
  map.printArray();
  if (collide[0]) {
    console.log("Collision occured!");
    battle(map.player, map.monsters[collide[1]]);
  }
}

function fullGame(map) {
    while(map.player.hp > 0) {
        runGame(map)
    }
}

figlet(gameTitle, function(err, data){
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }

  console.log(chalk.hex('#008080')(data));
  //Welcome screen text.
  console.log(chalk.hex('8EFF0D')('Welcome to Pokemon'));
  //Game instructions
  var howToPlay =
      chalk.hex('#E89C0C')("=======================================================================" + "\r\n" +
        "How to play:" + "\r\n" + 
        "Once the game starts, you will be prompted to pick a pokemon." + "\r\n" + 
        "To do so, use the (up and down) arrow keys to navigate and then hit enter to select")

    console.log(howToPlay);

    //Starts inquirer
    confirmStart(mainPlayer);
})

function confirmStart(player){
  inquirer
  .prompt([
    {
      name: "pokemon",
      type: "list",
      message: "Choose your pokemon:",
      choices: allPokemon,
    },
  ])
  .then((answer) => {
    player.setName(answer.pokemon)
    player.number = (allPokemon.indexOf(answer.pokemon) + 1)
    player.setHp(200);
    player.baseHp = 50
    player.attacks = attacks
    player.level = 1
    console.log(chalk.hex('8EFF0D')(`Welcome, here are your current stats!`))
    console.log('Pokemon #: ' + chalk.magenta.bold(player.number))
    console.log('Pokemon HP: ' + chalk.magenta.bold(player.hp))
    console.log('Attacks: ')
    console.log(chalk.magenta.bold(player.attacks[0].name) + ' ' + chalk.cyan.italic(player.attacks[0].damage))
    console.log(chalk.magenta.bold(player.attacks[1].name) + ' ' + chalk.cyan.italic(player.attacks[1].damage))
    console.log(chalk.magenta.bold(player.attacks[2].name) + ' ' + chalk.cyan.italic(player.attacks[2].damage))
    console.log(chalk.magenta.bold(player.attacks[3].name) + ' ' + chalk.cyan.italic(player.attacks[3].damage))
    //Game logic
    let startGame = function(){
      //Game logic
      console.log('HELPPPPP')
    }
    //Runs Game
    runGame(map);
  })
}

module.exports = confirmStart
