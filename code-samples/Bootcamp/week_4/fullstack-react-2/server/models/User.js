const { db, DataTypes, Model } = require('../db') 

//create a child class from the Model parent class
//extends -> to create a child class
class User extends Model {

}

//.init comes from the Model parent class
//.init -> create a table
//.init(param1, param2)
//param1 -> where you define your columns
//param2 -> the name of your database
User.init({
    name: DataTypes.STRING,
},{
    sequelize: db
})


module.exports = { User }