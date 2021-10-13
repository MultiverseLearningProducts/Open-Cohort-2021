//import our db, Model, DataTypes
const { db, DataTypes, Model } = require('../db')

//Creating a User child class from the Model parent class
class Music extends Model {

}

Music.init({

    name: DataTypes.STRING,
    genre: DataTypes.STRING 

    }, {
        sequelize: db
})


module.exports = { Music }