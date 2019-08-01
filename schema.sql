CREATE DATABASE QandA;

USE QandA;

CREATE TABLE Questions(
    id INT NOT NULL AUTO_INCREMENT,
    question varchar(300) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Answers(
    id INT NOT NULL AUTO_INCREMENT,
    answer varchar(300) NOT NULL,
    PRIMARY KEY (id)
);

SELECT id, id FROM Questions JOIN Answers ON Questions.id = Questions.id;