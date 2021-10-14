//import dependencies
const path = require('path') //helps us find our file easily 
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database

//import our database [x]
//import the model that we are trying to import our data into [x]
const {db} = require('./db')
const { Music } = require('./models/index')


//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {

    await db.sync({ force: true }); // clear out database + tables

    const seedPath = path.join(__dirname, 'music.json'); //get the path to music.json file
    ///Users/lindaeng/Desktop/Open-Cohort-2021/code-samples/Bootcamp/week_3/application_servers/music.json

    const buffer = await fs.readFile(seedPath); //buffer b/c fs doesn't know what data it's reading
    const {data} = JSON.parse(String(buffer)); // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object

    const musicPromises = data.map(music => Music.create(music)); //creates music and puts it into our Music table

                                        //Music.create({'name': 'Tony', 'age': 25})
    await Promise.all(musicPromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    console.log("music database info populated!")
}

//export my seed function
module.exports = seed;