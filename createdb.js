const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vaccine.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE vaccine_count (name TEXT, count INTEGER)");

  // insert 3 rows of data:
  db.run("INSERT INTO vaccine_count VALUES ('rotarix' , 22)");
  db.run("INSERT INTO vaccine_count VALUES ('infarix-hexa' , 23)");
  db.run("INSERT INTO vaccine_count VALUES ('pneumococcal' , 23)");
  db.run("INSERT INTO vaccine_count VALUES ('hib' , 8)");
  db.run("INSERT INTO vaccine_count VALUES ('varilrix' , 17)");
  db.run("INSERT INTO vaccine_count VALUES ('infarix-ipv' , 16)");
  db.run("INSERT INTO vaccine_count VALUES ('mmr' , 67)");
  db.run("INSERT INTO vaccine_count VALUES ('flu' , 10)");
  db.run("INSERT INTO vaccine_count VALUES ('flu_baby' , 2)");
  db.run("INSERT INTO vaccine_count VALUES ('boostrix' , 16)");
  db.run("INSERT INTO vaccine_count VALUES ('boostrix_NF' , 5)");
  db.run("INSERT INTO vaccine_count VALUES ('varilrix_NF' , 6)");
  db.run("INSERT INTO vaccine_count VALUES ('hep_b' , 3)");
  db.run("INSERT INTO vaccine_count VALUES ('hep_b_baby' , 3)");
  db.run("INSERT INTO vaccine_count VALUES ('hep_b_NF' , 4)");
  db.run("INSERT INTO vaccine_count VALUES ('hpv' , 17)");
  db.run("INSERT INTO vaccine_count VALUES ('adt' , 8)");
  db.run("INSERT INTO vaccine_count VALUES ('zostavax' , 40)");
  db.run("INSERT INTO vaccine_count VALUES ('menactra' , 3)");
  db.run("INSERT INTO vaccine_count VALUES ('bexsero' , 3)");


  console.log('successfully db');

  // print them out to confirm their contents:
  db.each("SELECT name, count FROM vaccine_count", (err, row) => {
      console.log(row.name + ": " + row.count);
  });
});

db.close();