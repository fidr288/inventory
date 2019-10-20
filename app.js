const express = require("express");
const app = express();

//setup app
app.set("view engine", "ejs");
// app.use(express.static("static_files"));
app.use(express.static("public/javascript"));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vaccine.db');
// const fakeDb = {
//     "flu" : 1,
//     "varilax" :3,
//     "hepb" :4,
//     "hib" :8,
//     "rabies": 19
// }

//RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/vaccines");
});

//INDEX ROUTE
// app.get("/vaccines", (req, res) => {
//     const allVaccines = Object.keys(fakeDb);
//     console.log(allVaccines);
//     res.send(allVaccines);
// });

// app.get("/vaccines", (req, res) => {
//     const allVaccines = Object.keys(fakeDb);
//     const allValues = Object.values(fakeDb);
//     res.render("index.ejs", {allVaccines: allVaccines, allValues: allValues});
// });

app.get("/vaccines", (req, res) => {
    db.all('SELECT * FROM vaccine_count', (err, rows) => {
        const allVaccines = rows.map(e => e.name);
        const allValues = rows.map(n => n.count);
        res.render("index.ejs", {allVaccines: allVaccines, allValues: allValues});
    });
    // const allVaccines = Object.keys(fakeDb);
    // const allValues = Object.values(fakeDb);
    // res.render("index.ejs", {allVaccines: allVaccines, allValues: allValues});
});


//SHOW ROUTE
// app.get("/vaccines/:id", (req, res) => {
//     const vaccine = req.params.id;
//     const val = fakeDb[vaccine];
//     res.render("index.ejs", {val:val, vaccine:vaccine});
// });

//EDIT ROUTE
// app.get("/edit"), (req, res) => {
//     res.send("edit");
// };


app.listen(3000, () => {
    console.log("server started");
});