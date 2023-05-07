DELETE FROM <table name> WHERE {comparison ..} ORDER BY .. LIMIT .. ;

//This will delete only the first name bcoz it's written limit 1 
DELETE FROM Name where name LIKE "%i" ORDER BY name LIMIT 1;

//THis will delete all the name where name is %i
DELETE FROM Name where name LIKE "%i" ORDER BY name;


//UPDATE Table 
UPDATE <table name> SET <coloumn 1> = value 1 WHERE {conditions};
UPDATE Actors SET FirstName = "RJ" , NetWorthINMillions = 1000 WHERE Id = 6;

ALTER TABLE <table name> CHANGE <Old Col Name> <New Col Name> [new constraint(datatype or constraint)]
ALTER TABLE Actors CHANGE NetWorthInMillions NetWorth DECIMAL(10,2);

Difference Between Alter and Update 
Change the Fundamental Structue of the Table in that scenario use Alter Table 
And to Change the data of the Table we use Update .


ALTER TABLE <table name> ADD <coloumn name> [parameters - dataypes and constraint]
ALTER TABLE Actors ADD Region  VARCHAR(10) DEFAULT "Bollywood";
ALTER TABLE Actors ADD MiddleName  VARCHAR(10) AFTER FirstName;
ALTER TABLE Actors DROP MiddleName;


//Print Krte time DoB ko Date Of Birth Show Krega Orignal 
Table mein cahnge nhi hoga bas print krte time .
SELECT DoB AS "Date OF Birth " FROM Actors;

//FirstName and SecondName ko concatenate krke dikahna hai
SELECT CONCAT(FirstName,' ',SecondName)  AS Name from Actors;


//Distinct SCORE 
SELECT DISTINCT Score from Students;

//COUNT 
SELECT COUNT(*) AS "No. of Single People" FROM Actors where MaritalStatus = "Single";

//Sum //Can use where also 
SELECT SUM(NetWorth) FROM Actors;
//Average 
SELECT AVG(NetWorth) from Actors;
//Also use MIN , MAX 

//GROUP BY  (Imp for Interviews)
SELECT MaritalStatus , Count(*) FROM Actors GROUP BY MaritalStatus;
SELECT AssetType , Count(*) FROM DigitalAssets GROUP BY AssetType ORDER BY AssetType;

#Doubt 
//Need more clearification in GROUP BY and Having ?
//I know we can't use Where command after GROUPBY 
//how and where to use Where if we have usd Group By ? 
