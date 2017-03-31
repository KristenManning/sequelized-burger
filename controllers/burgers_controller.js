var db = require("../models");
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');


router.get('/', function(req,res){
  db.Burger.findAll({ 
    where: {
      devoured: true,
    },
  }).then(function(devoured) {
    // send array of project objects to handlebars
    db.Burger.findAll({ 
      where: {
        devoured: false,
      },
    }).then(function(not_devoured) {
      console.log("devoured: " + devoured)
      res.render("index", {"devoured": devoured, 
                "not_devoured": not_devoured})
  
    });
  });
});

router.post('/devour', function(req,res){
    for (i in req.body){
    console.log(req.body[i])
  }
  db.Burger.update({devoured: true},
    {
      where: {
        id: req.body.burger_id
      }
    }).then(function(result) {
    res.redirect("/")
    });
});

router.post('/create', function(req,res){
  console.log(req.body)
  db.Burger.create(req.body).then(function(result) {
    res.redirect("/")
    });
});

// Export routes for server.js to use.
module.exports = router;