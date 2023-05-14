console.log(null == undefined);

//Abstract Equality == : It checks the type of both the operands 
//If type is same then it calls === 
//if types are different than type conversion happen(coercion) and then comparison is done

//Strict Equality ===
// It checks the type of both the operands
//If types are different return false;
//If types are same , than value comparison happen

//Difference between 
// Abstract Equality actually do type conversion 
// and Strict Equality will never do type conversion 

if(1=="1"){
    console.log("Equal");
}


console.log(false == "0");
/*
x -> boolean -> ToNumber ->false -> 0 
x = 0 , y == "0" , x== y
y -> ToNumber -> 0
0 == 0 -> True
*/

console.log(null==false)
/*
y -> boolean -> ToNumber ->0
null == 0 //This result when no case matches so last line return false
false
*/
console.log("NaN"== NaN);

console.log("Object Comparison  ");
let obj = {x:10 , valueOf(){ return 100}};
console.log(99 == obj);
console.log(100==obj);
