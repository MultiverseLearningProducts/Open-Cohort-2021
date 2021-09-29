class Pokemon {
    //reveal this last
    static pokemons = []
  
    constructor(name, number, type, hp){
      this.name = name
      this.number = number
      this.type = type
      this.hp = hp
    }
  
    static nameIsString(name) {
      return typeof name === 'string'
    }
  
    static numberIsTypeNumber(number) {
      return typeof number === 'number'
    }
  
    static isValidType(type) {
      const elements = ['fire', 'fairy', 'grass', 'earth', 'lighting', 'ghost', 'poison'] //what can we put inside of this array?
      //What kind of array method can we use to check if the type is an element?
      return (elements.includes(type)) 

    }
  
    static isValidHp(hp) {
      // 50hp - 250hp
      (hp >= 50 && hp <= 250) ? true : false
    }
  
  
    //what kind of argument should be passed into this method?
    assignType(type) {
      this.type = type
    }
    
    checkName(name) {
      return typeof this.name === 'string'
    }
  
  }


module.exports = Pokemon