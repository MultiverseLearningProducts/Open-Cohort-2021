const express = require('express')
const app = express()
const PORT = 8080

const seed = require('../seed')
const { Show, User } = require('../models/index')

seed()

//homepage
app.get('/', (req, res) => {
  res.send(`HOME PAGE!`)
})

//get all shows
app.get('/shows', async (req, res) => {
  const shows = await Show.findAll()
  res.send({shows})
})

//get one show
app.get('/shows/:id', async (req, res) => {
  const show = await Show.findByPk(req.params.id)
  res.send({show})
})

//get all users
app.get('/users', async (req, res) => {
  const users = await User.findAll()
  res.send({users})
})

//get one user
app.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  res.send({user})
})

//get all shows that the user has watched
app.get('/users/:userid/shows', async (req, res) => {
  await Show.findAll({ where: {
    UserId: req.params.userid
  }})
})

//get shows of a specific genre
app.get('/shows/genres/:genre', async (req, res) => {
  await Show.findAll({
    where: {
      genre: req.params.genre
    }
  })
})

//A route that will ‘add’ a show if you have watched it.
app.put('/users/:userid/shows/:showid', async (req, res) => {
  await Show.update({
    UserId: req.params.userid
  },{
    where: {
      id: req.params.showid
    }
  })
  res.send(`show updated!`)
})

// A route that will ‘rate’ a show that you have already watched.
app.put('/shows/:showid/watched', async (req, res) => {
  let show = await Show.findByPk(req.params.showid)
  let prevRating = show.dataValues.rating

  await Show.update({
    rating: (req.body.rating + prevRating) / 2
  },{
    where: {
      id: req.params.showid
    }
  })
  res.send(`show rated!`)
})

// A route that will ‘update’ a show if they include more seasons.
app.put('/shows/:showid/updates', async (req, res) => {
  await Show.update({
    status: req.body.status
  }, {
    where: {
      id: req.params.showid
    }
  })
  res.send(`show status updated`)
})

// A route that will ‘remove’ a show if the series gets cancelled.
app.delete('/shows/:showid', async (req, res) => {
  await Show.destroy({
    where: {
      id: req.params.showid
    }
  })
  res.send(`show successfully deleted`)
})


app.listen(PORT, () => {
  console.log(`Your server is now listening to http://localhost:${PORT}`)
})
