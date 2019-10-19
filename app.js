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

app.get("/vaccines", (req, res) => {
    const allVaccines = Object.keys(fakeDb);
    console.log(allVaccines);
    res.send(allVaccines);
});

app.get("/vaccines/:id", (req, res) => {
    const vaccine = req.params.id;
    const val = fakeDb[vaccine];
    res.render("index.ejs", {val:val, vaccine:vaccine});
});

app.listen(3000, () => {
    console.log("server started");
});