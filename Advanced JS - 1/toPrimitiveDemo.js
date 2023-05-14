let obj = {

};
console.log(10-obj); //obj.valueOf -> object , toString -> [object object] 
//If [object object] convert into Number than it will be NaN 
//So it will become 10 - NaN = NaN

let obj1 = {x:9 , y :8};
console.log(100-obj1);

//Here We change valueOf 
let obj2 = {x: 7 , valueOf(){return 99;}};
console.log(100-obj2);

let obj3 = {x:4 , toString(){ return "98";}};
console.log(100-obj3);

// let obj4 = {x:7 , toString(){ return {};}};
// //TypeError Here we go to last step return TypeError
// console.log(100-obj4);
