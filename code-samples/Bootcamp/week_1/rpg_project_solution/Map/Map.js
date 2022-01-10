class Map {
    constructor() {
        this.map = [],
        this.collision = false
    }
    generateMap(){
        for(let i = 0; i < 4; i++){
          //we declare a variable here because if outside, it will only push references to the same array and not generate a new array
          let row = [0,0,0,0]
          this.map.push(row)
        }
    }
    generatePlayer(){
        //generate 1 random location on the map for Player
        let pX = Math.floor(Math.random() * 3)
        let pY = Math.floor(Math.random() * 3)
        //assign location on map
        this.map[pX][pY] = 'p'
    }
    generateMonsters(){
      //generate 6 random monsters on the map
      let monster = 0
      //loop 6 times
        while(monster < 6) {
          //create random x,y coordinate for monsters
          let mX = Math.floor(Math.random() * 3)
          let mY = Math.floor(Math.random() * 3)

          //if there is a monster in that location of the map
          if(this.map[mX][mY] === 'm' || this.map[mX][mY] === 'battle') {
            continue
          }

          //if there is a player set the collision property to be true
          if(this.map[mX][mY] === 'p') {
            this.collision = true
            this.map[mX][mY] = 'battle'
            console.log('a collision!')
            monster++
          } else {
            this.map[mX][mY] = 'm'
            monster++
          }
        }  
    }

}

module.exports = Map