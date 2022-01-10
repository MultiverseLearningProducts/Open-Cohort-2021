//dependencies that will help us find our json files
//allow us to promise chain
const path = require('path')
const fs = require('fs').promises

//import our database and models(associated)
const { db } = require('./db')
const { Music, User } = require('./models/index')
// const { User } = require('./models/index')


//write our seed function asynchronous js (async/await)
const seed = async () => {
    //clear out our database
    await db.sync({ force: true})

    //hold the name of our path to the music json file
    //path.join() <-helps us find the name of our file recursively
    const seedPath = path.join(__dirname, 'music.json')

    //need to first read the file, convert the information in the file from a JSON Object into a JS Object
    const buffer = await fs.readFile(seedPath)
    const {data} = JSON.parse(String(buffer)) // [] <-music.json

    const buffer2 = await fs.readFile(seedPath2)
    const {data2} = JSON.parse(String(buffer2)) // [] < user.json

    //Sequelize methods returns promises that needs to get resolved or rejected
    // Promise <pending>
    const musicPromises = data.map(song => {
        Music.create(song)// {}
    })


    const userPromises = data2.map(user => {
        User.create(user)
    })

    //we need to resolve/reject each promise 
    await Promise.all(musicPromises)
    await Promise.all(userPromises)
    console.log('MUSIC and USER DATABASES INFO SUCCESSFULLY POPULATED!')
}



//export this seed function
module.exports = seed;