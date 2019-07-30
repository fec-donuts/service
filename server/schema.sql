CREATE DATABASE QandA;

USE QandA;

CREATE TABLE Questions(
    ID INT NOT NULL AUTO_INCREMENT,
    question varchar(300) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Answers(
    ID INT NOT NULL AUTO_INCREMENT,
    answer varchar(300) NOT NULL,
    PRIMARY KEY (ID)
);

SELECT ID, ID FROM Questions JOIN Answers ON Questions.ID = Questions.ID;