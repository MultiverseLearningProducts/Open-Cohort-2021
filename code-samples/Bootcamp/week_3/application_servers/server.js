//Express
const express = require('express')
const app = express()
const PORT = 3000

//import seed function
const seed = require('./seed')
const { db } = require('./db') //import our db
const { Music } = require('./models/index') // import our associated model 

//start the server, we run the seed function to generate data into our database
seed()

//*************** ROUTES ******************//
app.get('/allMusic', async (req, res) => {
    let allSongs = await Music.findAll()  // SELECT * FROM MUSIC
    res.json({allSongs})
})

app.listen( PORT, () => {
    console.log(` Your server is now listening to port ${PORT}`)
})