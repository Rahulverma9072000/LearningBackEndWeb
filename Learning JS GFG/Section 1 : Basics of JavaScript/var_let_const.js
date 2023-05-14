// Lesson 3 
// var let and const 
//With Var we can redeclare the same variable again and again
//that's actually is unnecessary 
// var message = "Hello";
// var message = "Hi";
// var message = "Bye";
// console.log(message);

let message = "Hello";
//This will give Error 
//Redeclaration is not possible with let 
//and this actually makes sense  
// let message = "Hi";
message = "hii";
console.log(message);

// const message = "hi"
// // const message = "hello";
// console.log(message);
const tom = "bibu";
//You can't assign new value to const variable 
tom = "bhalu";//Error -> Can't Change the Value 
console.log(tom);


//Which Variable to use : 
//We never use var .
//We use let and const .
// If you want a value to be constant throught code than use const 
//else use let 