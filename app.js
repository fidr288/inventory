const express = require("express");
const app = express();

//setup app
app.set("view engine", "ejs");

// app.use(express.static("static_files"));

const fakeDb = {
    "flu" : 1,
    "varilax" :3,
    "hep b" :4,
    "hib" :8
}

//RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/vaccines");
});

//INDEX ROUTE
app.get("/vaccines", (req, res) => {
    const allVaccines = Object.keys(fakeDb);
    console.log(allVaccines);
    res.send(allVaccines);
});

//SHOW ROUTE
app.get("/vaccines/:id", (req, res) => {
    const vaccine = req.params.id;
    const val = fakeDb[vaccine];
    res.render("index.ejs", {val:val, vaccine:vaccine});
});

//EDIT ROUTE
app.get("/edit"), (req, res) => {
    res.send("edit");
};


app.listen(3000, () => {
    console.log("server started");
});