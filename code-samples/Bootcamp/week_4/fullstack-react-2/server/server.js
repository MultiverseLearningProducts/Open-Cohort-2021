//Express
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

//imports from your db
const seed = require('./seed')
const { db } = require('./db')
const { Music } = require('./models/index')


//invoke our seed function
seed()

//http post request
//expose req.body to our server
app.use(express.json())

app.use(cors())

//*************** ROUTES ******************//

app.get('/', (req, res) => {
    res.send(200)
})

app.get('/music', async (req, res) => {
    let allMusic = await Music.findAll()
    res.json(allMusic)
})


//*************** ROUTES ******************//

app.listen(PORT, () => {
    console.log(`Your server is now listening to port ${PORT}`)
})