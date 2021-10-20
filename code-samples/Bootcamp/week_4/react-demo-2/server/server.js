//Express
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

//import seed function
const seed = require('./seed')
const { db } = require('./db') //import our db
const { Music } = require('./models/index') // import our associated model 

//start the server, we run the seed function to generate data into our database
seed()


app.use(express.json())
//allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
app.use(cors())

//*************** ROUTES ******************//

app.get('/music', async (req, res) => {
    let allSongs = await Music.findAll()
    res.json({allSongs})
})

app.get('/music/:id', async (req, res) => {
    let id = req.params.id //4
    let oneSong = await Music.findByPk(id)
    res.json({oneSong})
})


//*************** ROUTES ******************//
app.listen( PORT, () => {
    console.log(` Your server is now listening to port ${PORT}`)
})