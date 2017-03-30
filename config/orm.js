// Import MySQL connection.
var connection = require("../config/connection.js");

var orm  = {

	all_not_devoured: function(cb){
		var querStr = "SELECT * FROM burgers WHERE devoured = false; "; 
		connection.query(querStr, function(err, result) {
	      if (err) {
	        throw err;
	      }
	    cb(result);

		});
	}, 
	all_devoured: function(cb){
		var querStr = "SELECT * FROM  burgers  WHERE devoured = true;"; 
		connection.query(querStr, function(err, result) {
	      if (err) {
	        throw err;
	      }
	    cb(result);

		});
	}, 


	create: function(values, cb){
		var querStr = "INSERT INTO burgers (burger_name, bun, patty, cheese, lettuce, tomato, onions, bacon, mushrooms, ketchup, mustard, mayo, secret_sauce, special_instructions) VALUES " + values + ";";
		connection.query(querStr, function(err, result) {
			console.log(result)
	      if (err) {
	        throw err;
	      }
	      cb(result);
		});
	},

	// Switch a burger's 'devoured' value from false to true 
	update: function(burger_id, cb){
		var querStr = "UPDATE burgers SET devoured = true WHERE id = " + burger_id + ";";
		connection.query(querStr, function(err, result) {
	      if (err) {
	        throw err;
	      }
	      cb(result);
		});
	}

}


module.exports = orm;