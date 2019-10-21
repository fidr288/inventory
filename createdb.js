const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vaccine.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE vaccine_count (name TEXT, count INTEGER)");

  // insert 3 rows of data:
  db.run("INSERT INTO vaccine_count VALUES ('rotarix' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('infarix-hexa' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('pneumococcal' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('hib' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('varilrix' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('infarix-ipv' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('mmr' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('flu' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('boostrix' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('hpv' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('adt' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('zostavax' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('menactra' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('bexsero' , 0)");


  console.log('successfully db');

  // print them out to confirm their contents:
  db.each("SELECT name, count FROM vaccine_count", (err, row) => {
      console.log(row.name + ": " + row.count);
  });
});

db.close();