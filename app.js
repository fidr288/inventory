const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('vaccine.db');

//setup app
app.set("view engine", "ejs");
// app.use(express.static("static_files"));
// app.use(express.static("public/javascript"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.redirect("/vaccines");
});


app.get("/vaccines", (req, res) => {
    db.all('SELECT * FROM vaccine_count', (err, rows) => {
        const allVaccines = rows.map(e => e.name);
        const allValues = rows.map(n => n.count);
        res.render("index.ejs", {allVaccines: allVaccines, allValues: allValues});
    });

});

app.post("/vaccines", (req, res) => {
    const key =  Object.keys(req.body)[0];
    const submitValue =  Object.values(req.body)[0];
    db.get("SELECT count FROM vaccine_count WHERE name = " +"'"+key+"'", (err, rows) => {
        const newValue = Number(submitValue) + Number((Object.values(rows)[0]));
        db.run("UPDATE vaccine_count SET count = " + "'"+newValue+"'"+ " WHERE name = " + "'"+key+"'");
    });
    res.redirect("/vaccines");
    // console.log(req.body);
});

app.listen(3000, () => {
    console.log("server started");
});