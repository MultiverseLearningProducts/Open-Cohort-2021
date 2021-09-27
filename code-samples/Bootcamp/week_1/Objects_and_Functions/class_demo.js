// let cohort = {
//   students : 'Ayden, Shafee, etc',
//   coaches : ['Tony', 'Linda', 23, 900]
// } // object literal

// // let cohort = { students: 'xyz', coaches: ['Tony', 'Linda', 'abc'], tech: 'javascript'} // KEEP CODE CLEANNNN


// //Classes help us create templates for objects
// class Fruit {
//   constructor(flavor) {
//     this.flavor = flavor
//   }
// }

// //create a vegetables -> color, leafy or not
// class Vegetables {
//   constructor(color, leafy, tasty) {
//     this.color = color;
//     this.leafy = leafy;
//     this.edible = tasty
//   }
// }

// //The new keyword creates objects using the templates from our classes
// let mango = new Fruit('sweet')
// let orange = new Fruit('Sour')

// // new keyword, create two vegetables objects
// //boolean: true / false
// let tomato = new Vegetables('Red', false, 'YES')
// let cucumber = new Vegetables('Green', true, 'NO')

// console.log(mango)
// console.log(orange)

// //console.log the two different vegetables
// console.log(tomato)
// console.log(cucumber)




// // let guava = {
// //   flavor: flavor
// // }


// // let mango = {
// //   flavor: 'sweet'
// // }



// //Object literal
// let pusheen = {
//   'name': 'Pusheen',
//   'age' : 7,
//   'color' : 'gray and tabby'
// }

// //dot
// pusheen.name //'Pusheen'

// //bracket notation // Make sure key is wrapped around quotations
// pusheen['color']


//Create your own object literal with three different keys
// let plants = {
//   name : 'Pothos',
//   'sun' : 'Bright Sunlight',
//   water: 'Once a week'
// }


//Use dot and bracket notation to get a few properties
//dot
// plants.name
// console.log(plants.name)

//bracket notation
// plants['water']
// console.log(plants['water'])

//Challenge -> try to retrieve the last word out of the string

//Kevin's -> split then pop
// console.log(plants['sun'].split(' ') // ['Bright Sunlight']
// plants['sun'].split(' ').pop() // 'Bright Sunlight'

//Shafee
// let stringLength = plants['sun'].split(' ').length // 2
// let lastWord = plants['sun'].split(' ')[stringLength - 1]
// console.log(lastWord)

//        0           1 
// // [ 'Bright', 'Sunlight' ]. // 2


let pusheen = {
    name: 'Pusheen',
    age: 7,
    siblings: {
      sister: 'Stormy',
      brother: 'Pip'
    },
    favoriteFoods: ['candy', 'marbles', 'tuna']
  }
  
  // pusheen['siblings']['brother'] //ian - double brackets technique
  
  // pusheen.siblings.brother // ayden - double dot notation
  
  // pusheen.siblings['brother'] // combination of both
  
  
  //Challenge: Pusheen changed her mind, she no longer eats marbles. She has a fixing for cabbage.
                        //   0         1        2 
  pusheen.favoriteFoods // ['candy', 'marbles', 'tuna']
  
  pusheen.favoriteFoods[1] = 'Cabbage'
  
  
  delete pusheen.favoriteColor
  console.log(pusheen)
  