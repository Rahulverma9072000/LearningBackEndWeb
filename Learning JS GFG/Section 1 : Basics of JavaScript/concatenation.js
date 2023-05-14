// Concatenation 
let userName = "Rahul";
let userAge = 21;

//My name is Rahul and I am 21 yrs old
//Print this without console 
//Use the Variable to do this 
//Concatenation -> Old Traditional Method .
let message = "My Name is " + userName + " and I am " + userAge + " years old";
console.log(message);
//In Industry We Use Something like Template Literal 
//It's better than Concatenation 
// Write text and variable in the same bracket 
let text = `My name is ${userName} and I am ${userAge} yrse old`;
console.log(text);
//Multiple line text 
let multipleLines = `My name is ${userName}  and 
                                I am ${userAge} yrs old
        I love Coding  `;
console.log(multipleLines);