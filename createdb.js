const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vaccine.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE vaccine_count (name TEXT, count INTEGER)");

  // insert 3 rows of data:
  db.run("INSERT INTO vaccine_count VALUES ('rotarix' , 27)");
  db.run("INSERT INTO vaccine_count VALUES ('infarix-hexa' , 23)");
  db.run("INSERT INTO vaccine_count VALUES ('pneumococcal' , 9)");
  db.run("INSERT INTO vaccine_count VALUES ('hib' , 20)");
  db.run("INSERT INTO vaccine_count VALUES ('varilrix' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('infarix-ipv' , 14)");
  db.run("INSERT INTO vaccine_count VALUES ('mmr' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('flu' , 17)");
  db.run("INSERT INTO vaccine_count VALUES ('flu_baby' , 2)");
  db.run("INSERT INTO vaccine_count VALUES ('boostrix' , 18)");
  db.run("INSERT INTO vaccine_count VALUES ('boostrix_NF' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('varilrix_NF' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('hep_b' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('hpv' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('adt' , 27)");
  db.run("INSERT INTO vaccine_count VALUES ('zostavax' , 50)");
  db.run("INSERT INTO vaccine_count VALUES ('menactra' , 0)");
  db.run("INSERT INTO vaccine_count VALUES ('bexsero' , 8)");


  console.log('successfully db');

  // print them out to confirm their contents:
  db.each("SELECT name, count FROM vaccine_count", (err, row) => {
      console.log(row.name + ": " + row.count);
  });
});

db.close();