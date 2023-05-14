// Learning the difference between NULL , undefined , 0
var marks = 100;
var name = "Sanket";
var age ;
var company = null;
var salary = undefined;
var isStudent = false;
console.log("Marks = ",marks);
console.log("Name", name);
console.log("Age ",age);
console.log("Company ",company);
console.log(isStudent);

var user = {
    name : "Sanket",
    company : "Google",
    age: 24
};
console.log("Details of the user is",user);

let b = 10;
b = null;
//Now it become the Object 
console.log(typeof b);
//And see the Null type is also object  that's really important 
console.log(typeof null); 
//Historical Mistake in JS 