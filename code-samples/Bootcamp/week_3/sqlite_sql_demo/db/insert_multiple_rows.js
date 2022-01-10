const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sample.db');

let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];

let placeholders = languages.map((language) => '(?)').join(',');
let sql = 'INSERT INTO langs(name) VALUES ' + placeholders;


// output the INSERT statement
console.log(sql);



//'INSERT INTO langs(name) VALUES (?),(?),(?),(?),(?), ['C++', 'Python', 'Java', 'C#', 'Go']'
db.run(sql, languages, function(err) {
    if (err) {
        return console.error(err.message);
      }
      console.log(`Rows inserted ${this.changes}`);
    }   
)

db.close()