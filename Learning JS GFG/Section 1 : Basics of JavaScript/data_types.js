// DataTypes in JavaScript 

// String 
//Data inside the inverted quotes is String .
let userName = "Rahul";
console.log(userName);
console.log(typeof userName);

// Number 
let age = 18;
let num = 99.56;
console.log(num,typeof num);
console.log(typeof age);

// Boolean -> true/false --> yes/no 
//if the product id added to the cart then isProductInCart - true otherwise isProductInCart = false;
//true/false without inverted quotes
let isProductInCart = true;
console.log("Product ",isProductInCart);

//What is Undefined  : It's basically a value assigned to a variable when no value is assigned to a variable .
let userAge;
console.log(userAge);

// null 
let noValue = null;
console.log(noValue);
//this is the historic mistake in the History of JavaScript .
console.log(typeof noValue);

//Object  -> Non Primitive DataType where we can assign multiple values to a variable .
// const personDetails = [] or {};
//Key Value Pair 
const personDetails = {
    name : "Rahul" , age : 21  , education: "Engg"
}
console.log(personDetails);
console.log(typeof personDetails);

const arrayOfNumber = [1,2,3,4,5];
console.log(arrayOfNumber);
console.log(typeof arrayOfNumber);


