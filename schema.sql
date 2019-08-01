DROP DATABASE IF EXISTS customerReviews;

CREATE DATABASE customerReviews;

USE customerReviews;

CREATE TABLE customerReviews(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    brand varchar(100) NOT NULL,
    item varchar(100) NOT NULL,
    stars varchar(100) NOT NULL,
    review varchar(100) NOT NULL,
    ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);
