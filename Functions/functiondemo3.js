//When we call add value of x and y will become 10 , 30 
function add(x,y){  // here x and y are called parameters 
    let c = x+y;
    return c;
}
let a = 10;
let b = 30;
let result = add(a,b); //here a and b are arguments
console.log(result);
/*
Here we are passing 9,1 inside console.log
so first of all add(9,1) will be processed 
so add(9,1) will return 10 
and than once we have the value processed as 10 ,
console.log will print 10 
*/
console.log(add(9,1));

//if i put 3 arguments than it will give no error
console.log(add(9,1,10));
