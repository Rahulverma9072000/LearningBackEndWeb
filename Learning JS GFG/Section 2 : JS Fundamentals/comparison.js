// Comparison Operators 

// console.log(50 < 30);
// console.log(10 >= 10);

// //Equality Check 
// console.log(40 == 40);

//String  Comparison Operator 
//compare character by character by ASCII 
console.log("apple" > "banana");

console.log("glowingman" > "glowing");

//Greater than comparison operator will convert this string into number and than it's compared .
console.log("2" > 1 );
//This is not proper way to compare 2 items 
console.log("01" == 1);

//To avoid this we have to use Strict Equality 
//This is always to be used .
//Here we are comparing two different types 
//string and int 
console.log("01"===1);

console.log(null == undefined);
// Strict 
console.log(null === undefined);

// null becomes 0 here 
console.log(null > 0);
console.log(null < 1);
console.log(null >= 0);
console.log(null <= 0);

//here null is null
console.log(null == 0);


//undefined will always give false compare it with anything 
//except for the case where null == undefined 
// console.log(null == undefined);