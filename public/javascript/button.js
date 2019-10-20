const vaccines = ["flu","hib","rabies"];

for (i=0; i<vaccines.length; i++){
   document.querySelector("#"+ vaccines[i]).addEventListener("click", function(){
      console.log("clicked");
   });
};

// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('/vaccine.db');

// db.all('SELECT * FROM vaccine_count', (err, rows) => {
//    const vaccines = rows.map(e => e.name);
//    for (i=0; i<vaccines.length; i++){
//    document.querySelector("#"+ vaccines[i]).addEventListener("click", function(){
//       console.log("clicked");
//    });
// };
// });

