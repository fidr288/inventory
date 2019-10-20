const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vaccine.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE vaccine_count (name TEXT, count INTEGER)");

  // insert 3 rows of data:
  db.run("INSERT INTO vaccine_count VALUES ('flu' , 2)");
  db.run("INSERT INTO vaccine_count VALUES ('hib' , 9)");
  db.run("INSERT INTO vaccine_count VALUES ('rabies' , 22)");

  console.log('successfully db');

  // print them out to confirm their contents:
  db.each("SELECT name, count FROM vaccine_count", (err, row) => {
      console.log(row.name + ": " + row.count);
  });
});

db.close();