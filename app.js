const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 5555;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

//! render static folders:
app.use(express.static(__dirname + "/public"));

//render the views:
app.get(["/", "/home"], (req, res) => {
  res.render("home.hbs");
});

app.get("/about", (req, res, next) => {
  res.render("about.hbs");
});

app.get("/work", (req, res, next) => {
  res.render("work.hbs");
});



//! kickstart server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
