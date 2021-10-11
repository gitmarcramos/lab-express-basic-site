//! dependencies
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 5550;

const db = require("./public/js/db.js");

//! base setup
// for the HBS views
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

//to use the public folder with static files
app.use(express.static(__dirname + "/public"));

//! render the views:
// HOME PAGE
app.get(["/", "/home"], (req, res) => {
  const navElements = ["Home", "About the band", "Work"];



  res.render("home.hbs", {
    pageTitle: "Home",
    navElements,
    db: {
      name: "Home",
      
    }
  });
});


// ABOUT PAGE:
app.get('/about', (rer, res, next)=>{
  res.render('about.hbs')
})

// WORK PAGE
app.get("/work", (req, res, next) => {
  res.render("work.hbs", {
    pageTitle: "Work",
  });
});


// BAND PAGE
app.get("/:linkname", (req, res, next) => {
  res.render("band.hbs", {
    pageTitle: "Band page",
    db
  });
});




//! kickstart server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
