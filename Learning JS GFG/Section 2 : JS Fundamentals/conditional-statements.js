// Conditional Statements 

// if(condition/expression){
//     // body/action to be performed 
//     console.log("Hello I am Rahul learning from GFG");
// }

const isLoggedIn = true;
if(isLoggedIn)
{
    console.log("Welcome Rahul ... ");
}

const readlineSync = require("readline-sync");
const userAge = readlineSync.question("How Old are You ? ");
if(userAge >= 18){
    console.log("You can view the content");
}else {
    console.log("Kid go Home");
}

