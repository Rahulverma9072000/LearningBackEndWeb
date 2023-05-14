//ToString -> "" + value 
console.log(""+0);  // 0 -> "0"
console.log(""+(-0));  //-0 -> "0"

console.log("" + []); //[]-> ""
console.log("" + {});

console.log("" + [1,2,3]);
console.log("" + [null,undefined]);
console.log("" + [1,2,null,4]);

//To Number 
console.log(0-"010"); //Decimal Number 
console.log(0-010);  //Octal Number 
console.log(0-"o10");
console.log(0-"0xb"); //hexadecimal number 

console.log(1 - []);
console.log([""]-1);
console.log(["0"]-1);
console.log([6]-1);