class Pokemon {
    constructor(name,hp,number,type){
        this.hp = hp;
        this.name = name;
        this.number = number;
        this.type = type;
        this.x = 0;
        this.y = 0;
        this.attacks = [];
    }
    assignType(type) {
      this.type = type;
    }

    randomAttack(monster) {
      let select = Math.floor(Math.random() * this.attacks.length)
      monster.hp = monster.hp - Math.floor(Math.random() * this.attacks)
      console.log(`${this.name} attacked ${monster.name} with ${this.attacks[select].name} for ${ this.attacks[select].damage}!`)
      //monster.hp = monster.hp - Math.floor(Math.random() * this.attacks)[select].damage)
    }

    update() {
      if(this.hp <= 0) {
        console.log(`${this.name} has fainted!`)
        return true
      } else {
        console.log(`${this.name} is at ${this.hp} HP`)
        return false
      }
    }

}

module.exports = Pokemon;



