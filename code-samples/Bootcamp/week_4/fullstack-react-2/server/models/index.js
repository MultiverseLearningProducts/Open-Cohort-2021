const { db, DataTypes, Model } = require('../db') 

const { Music } = require('./Music')
const { User } = require('./User')

//associations

Music.belongsTo(User) //Music table, there will be a UserId <- FK
User.hasMany(Music)

//export these associated models
module.exports = { Music, User }