
// Import the ORM to create functions that will interact with the database.
var mysql = require("mysql")



module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {

  burger_name: {
    type: DataTypes.STRING,
    default: null
  },

  devoured: {
    type: DataTypes.BOOLEAN,
    default: null
  },

  // date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  // burger_name: {
  //   type: DataTypes.STRING,
  //   default: null
  // },  
 
  bun: {
    type: DataTypes.STRING,
    default: null
  },  

  patty: {
    type: DataTypes.STRING,
    default: null
  },  
  
  cheese: {
    type: DataTypes.STRING,
    default: null
  }, 
  
  tomato: {
    type: DataTypes.BOOLEAN,
    default: null
  },  

  lettuce: {
    type: DataTypes.BOOLEAN,
    default: null
  },  

  onions: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  bacon: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  mushrooms: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  ketchup: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  mustard: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  mayo: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  secret_sauce: {
    type: DataTypes.BOOLEAN,
    default: null
  }, 

  special_instructions: {
    type: DataTypes.STRING,
    default: null
  }
  });

  return Burger;

};

// var burger = {
//   all_devoured: function(cb) {
//     orm.all_devoured( function(res) {
//       cb(res);
//     });
//   },
//   all_not_devoured: function(cb) {
//     orm.all_not_devoured( function(res) {
//       cb(res);
//     });
//   },
//   create: function(values, cb){
//   	orm.create(values, function(res) {
//   		cb(res);
//   	});
//   },
//   update: function(burger_id, cb) {
//   	orm.update(burger_id, function(res){
//   		cb(res);
//   	});
//   }
// // };

// // Export the database functions for the controller
// module.exports = burger;