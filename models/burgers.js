
// Import the ORM to create functions that will interact with the database.
var mysql = require("mysql")



module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {

  burger_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  devoured: {
    type: DataTypes.BOOLEAN,
  },

  // date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  // burger_name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },  
 
  bun: {
    type: DataTypes.STRING,
    allowNull: false
  },  

  patty: {
    type: DataTypes.STRING,
    allowNull: false
  },  
  
  cheese: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  
  tomato: {
    type: DataTypes.STRING,
    allowNull: false
  },  

  lettuce: {
    type: DataTypes.STRING,
    allowNull: false
  },  

  onions: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  bacon: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  mushrooms: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  ketchup: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  mustard: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  mayo: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  secret_sauce: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  special_instructions: {
    type: DataTypes.STRING,
    allowNull: false
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