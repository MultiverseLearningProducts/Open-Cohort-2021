//imports
const { db, DataTypes, Model } = require('../db') // ../ because we are inside the models folder

const { Music } = require('./Music')
const { User } = require('./User')

//associations

Music.belongsTo(User) //fk userID
User.hasMany(Music)


//export
module.exports = { Music, User }