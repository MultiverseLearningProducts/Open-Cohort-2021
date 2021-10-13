//Express
const express = require('express')
const app = express()
const PORT = 3000

//import seed function
const seed = require('./seed')


//start the server, we run the seed function to generate data into our database
seed()

//routes
 // request URL // 1. absorb the request 2. response -> 
app.get('/', (req, res) => {
    res.send(`<h1>HELLO WORLD!!!!</h1>`)
})

app.get('/test', (req, res) => {
    res.send(`<img src="https://www.destructoid.com/wp-content/uploads/2020/12/182088-chocobo.jpg">`)
})

//1. html 2.img 3.link to another page

app.listen( PORT, () => {
    console.log(` Your server is now listening to port ${PORT}`)
})