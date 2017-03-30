// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var mysql = require("mysql")

var burger = {
  all_devoured: function(cb) {
    orm.all_devoured( function(res) {
      cb(res);
    });
  },
  all_not_devoured: function(cb) {
    orm.all_not_devoured( function(res) {
      cb(res);
    });
  },
  create: function(values, cb){
  	orm.create(values, function(res) {
  		cb(res);
  	});
  },
  update: function(burger_id, cb) {
  	orm.update(burger_id, function(res){
  		cb(res);
  	});
  }
};

// Export the database functions for the controller
module.exports = burger;