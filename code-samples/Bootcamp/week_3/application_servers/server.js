//Express
const express = require('express')
const app = express()
const PORT = 3000
// const bodyParser = require('body-parser')

//import seed function
const seed = require('./seed')
const { db } = require('./db') //import our db
const { Music, User } = require('./models/index') // import our associated model 

//start the server, we run the seed function to generate data into our database
seed()


app.use(express.json());
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

app.post('/music', async (req, res) => {
    await Music.create({name: 'test1231231232', genre:'rock'})
    res.send(`New Song added`)  
})

app.put('/music/:id', async (req, res) => {
    let id = req.params.id //10
    //find the row
    let songToUpdate = await Music.findByPk(id) // {id: 10 'name': 'nameOfSong', 'genre': 'rock'}
    await songToUpdate.update({id: 5, 'name': 'testing', 'genre': 'rap'})
    res.send(`song has been updated`)
})

app.delete('/music/:id', async (req, res) => {
    //where helps us filter which column we are trying to identify
    await Music.destroy({
        where: {id: req.params.id}
    })
    res.send(`song deleted`)
})


app.listen( PORT, () => {
    console.log(` Your server is now listening to port ${PORT}`)
})