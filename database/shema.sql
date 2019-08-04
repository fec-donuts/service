DROP DATABASE IF EXISTS shoes;

CREATE DATABASE shoes;

USE shoes;

CREATE TABLE sponsoredProducts (
  id int NOT NULL AUTO_INCREMENT,
  price decimal(10, 2) NOT NULL,
  itemName varchar(50) NOT NULL,
  itemDescription varchar(50) NOT NULL,
  pictureUrl varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

