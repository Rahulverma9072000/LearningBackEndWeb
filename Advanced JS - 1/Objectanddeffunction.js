
let obj = {
    // //define a function toString()
    // toString(){

    // }
};
//Every Object has toString() and valueOf function inbuilt 
// [object object] :  toString default return type 
console.log(obj.toString());
console.log(typeof obj.toString());
//Default implementation of Valueof return the same object 
console.log(obj.valueOf());
console.log(typeof obj.valueOf());
//By Default it return the same object 
console.log()
//We can overwrite out toString()
//OverWrite value of 
let obj1 = {
    x:10,
    valueOf(){
        return 10;
    },
    toString(){
        return "I love JavaScript";
    }
}
console.log(obj1.toString());
console.log(typeof obj1.toString());
console.log(obj1.valueOf());
//Now it's returning 10 ie number 
console.log(typeof obj1.valueOf());



