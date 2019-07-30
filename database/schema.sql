DROP DATABASE IF EXISTS pd;

CREATE DATABASE pd;

USE pd;

CREATE TABLE product_description (
  id int NOT NULL AUTO_INCREMENT,
  Brand Name varchar(50) NOT NULL,
  Pricing varchar(50) NOT NULL,
  In Stock varchar(50) NOT NULL,
  Item Weight varchar(50) NOT NULL,
  Product Dimesions varchar(50) NOT NULL,
  Item Model Number varchar(50) NOT NULL,
  Material Type varchar(50) NOT NULL,
  Number of Items varchar(50) NOT NULL,
  Size varchar(50) NOT NULL,
  Manufacturer Number varchar(50) NOT NULL,

  
  PRIMARY KEY (ID)
);


