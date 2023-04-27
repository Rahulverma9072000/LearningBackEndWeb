let x = "abc";
let y = "abc"; //String Literals
console.log(x==y);

let z = String("abc"); //String 
let a = new String("abc"); //String Object 
console.log(z);

console.log(typeof x);
console.log(typeof z);
console.log(typeof a);


console.log(a == z);
console.log(a == x);
console.log(z == x);

//Doing triple equal to 
console.log(a === z);
console.log(a === x);
console.log(z === x);