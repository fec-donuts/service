DROP DATABASE IF EXISTS related_items;

CREATE DATABASE related_items;

USE related_items;

CREATE TABLE related (
  id int NOT NULL AUTO_INCREMENT,
  photo VARCHAR(510) NOT NULL,
  name VARCHAR(50) NOT NULL,
  stars NUMERIC NOT NULL,
  price VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);
