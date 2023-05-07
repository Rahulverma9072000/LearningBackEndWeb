// To see all databases available on your system
SHOW DATABASES;

//To Select a particular database 
USE <database name>;

// To list down all tables of a particular database
SHOW TABLES ;

//To create a new database 
CREATE DATABASE <name>;

//To create a new Table 
CREATE TABLE <name> (
    <coloumn name 1 > [datatype] <keyword>,
    <coloumn name 2> [datatype],
    .
    .
);
Create TABLE second (Name VARCHAR(15) NOT NULL, DoB DATE DEFAULT "2000-01-01", Gender ENUM("Male","Female","Other"));

//Show Structure and Description of a Table . 
DESC <table name>;

//Insert values in a Table 
INSERT INTO <table name> (col1,col2,...) VALUES(<value 1>,<value 2> , <value 3> , <value 4>);
INSERT INTO second (Name,DoB,Gender) VALUES ("Sanket","2002-09-12","Male"),("Taniya","2003-09-08","Male"),("King","1998-09-01","Other");

//To get a specifiv coloumn data from a table 
//use * in place of coloumn name to get all the coloumn  
SELECT <coloum name> from <table name>;


SELECT * FROM <tbale name> WHERE {condition..}
Conditions -> Conparison of coloumn data with your values 

Select * from second where DoB <= "2003-09-08" AND Gender = "Female";

SELECT * FROM second WHERE Name LIKE "%t%";

//It means Second letter should be 'a' and further letters
SELECT * FROM second WHERE Name LIKE "_a%";

SELECT* FROM second WHERE NOT Gender = "Other";

SELECT * from second ORDER BY Name ;

SELECT * from second ORDER BY Name DESC;

//Top 3 Limit the View
SELECT * from second ORDER BY DOB DESC LIMIT 3;

SELECT * from second where gender = "Male"  ORDER BY DOB DESC LIMIT 3;
