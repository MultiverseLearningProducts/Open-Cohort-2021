const sqlite3 = require('sqlite3').verbose();

//instance of our sqlite3 database
let db = new sqlite3.Database('../db/sample.db');

db.run('CREATE TABLE langs(name text)');

//db.close();


//export our database
module.exports = db