CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	bun varchar(255) NOT NULL,
	patty varchar(255) NOT NULL,
	cheese varchar(255) NOT NULL,
	tomato varchar(255) DEFAULT "f",
	lettuce varchar(255) DEFAULT "f",
	onions varchar(255) DEFAULT "f",
	bacon varchar(255) DEFAULT "f",
	mushrooms varchar(255) DEFAULT "f",
	ketchup varchar(255) DEFAULT "f",
	mustard varchar(255) DEFAULT "f",
	mayo varchar(255) DEFAULT "f",
	secret_sauce varchar(255) DEFAULT "f",
	special_instructions varchar(255) NOT NULL,
	PRIMARY KEY (id)
);