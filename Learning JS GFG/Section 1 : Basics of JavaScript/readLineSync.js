/**
 * Read Data From the User 
 * We have to install a package readline-sync
 */

const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I know Your Name ? ");
const userAge = readlineSync.question("May I know your Age");
console.log(typeof userAge);
console.log("Welcome " + userName + "to GFG");
console.log(`Welcome ${userName} to GFG`);
const  yearOfBirth = 2023 + Number(userAge);
console.log(`You were born in the year ${yearOfBirth}`);
