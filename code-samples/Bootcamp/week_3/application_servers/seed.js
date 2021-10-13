//import dependencies
const path = require('path') //helps us find our file easily 
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database

//import our database [x]
//import the model that we are trying to import our data into [x]
const {db} = require('./db')
const {Music} = require('./models/index.js')


//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {
 
}

//export my seed function
module.exports = seed;