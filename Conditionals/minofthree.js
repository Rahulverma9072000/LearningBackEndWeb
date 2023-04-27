//Consider three integers values and find the minimum value among the given input values 
//  x y z Somehow we have to consider all 3 number in the comparison 

//In which case x will be the smallest  
// -> x<y && x<z if these 2 condition are true together than x is the smallest
//In no other case x will be the ans 

//Similarly we can do it with y 

//Now how to approach for z 
//if x is not the ans and y is also not the ans , than z is the ans 
let x = 10 , y = 1 , z = 10;

if(x<y && x<z){
    console.log(x);
}else if(y<x && y<z){
    console.log(y);
}else{
    console.log(z);
}