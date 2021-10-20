const { Sequelize, DataTypes, Model } = require('sequelize')

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', 
    storage: './myMusic.sqlite',
    logging: false
} )


//export our database so we can use it throughout our application
module.exports = { db, DataTypes, Model }
