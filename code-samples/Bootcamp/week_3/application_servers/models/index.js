//imports
const { db, DataTypes, Model } = require('../db') // ../ because we are inside the models folder

const { Music } = require('./models/Music')
const { User } = require('./models/User')

//associations

Music.belongsTo(User)
User.hasMany(Music)


//export
module.exports = { Music, User }