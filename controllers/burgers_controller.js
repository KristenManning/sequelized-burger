// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");
// var methodOverride = require("method-override");

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












// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
  
//   burger.all_devoured(function(data) {
//     var hbsObject = {}
//     hbsObject["devoured"] = data;
    
//       burger.all_not_devoured(function(data2) {
//         hbsObject["burgers"] = data2;

//         res.render("index", hbsObject);
//     });
//   });
// });
      

// router.post("/create", function(req,res){
//   var vals = "(";
//   vals += "'" + req.body.BurgerName + "', "
//   if (req.body.bun != "None"){
//   vals += "'" + req.body.bun + "', "
//   }else{
//     vals += "'', "
//   }
//   if (req.body.patty != "None"){
//   vals += "'" + req.body.patty + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.cheese != "None"){
//   vals += "'" + req.body.cheese + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Tomato){
//   vals += "'" + req.body.Tomato + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Lettuce){
//   vals += "'" + req.body.Lettuce + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Onions){
//   vals += "'" + req.body.Onions + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Bacon){
//   vals += "'" + req.body.Bacon + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Mushrooms){
//   vals += "'" + req.body.Mushrooms + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Ketchup){
//   vals += "'" + req.body.Ketchup + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Mustard){
//   vals += "'" + req.body.Mustard + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.Mayo){
//   vals += "'" + req.body.Mayo + "', "
//   }else{
//     vals += "'', "}
//   if (req.body.SecretSauce){
//   vals += "'" + req.body.SecretSauce + "', "
//   }else{
//     vals += "'', "
//   }
//   if (req.body.SpecialInstructions){
//   vals += "'" + req.body.SpecialInstructions + "')"
//   }else{
//     vals += "'')"
//   }



//   burger.create(vals, function(data) {

//     res.redirect("/")
//   });
// });

// router.post("/devour", function(req,res){

//   burger.update(req.body.burger_id, function(data) {
//     res.redirect("/")
//   }); 
// });

// router.get("/test", function(req,res){
//   res.render("index", {})
// });



// Export routes for server.js to use.
module.exports = router;