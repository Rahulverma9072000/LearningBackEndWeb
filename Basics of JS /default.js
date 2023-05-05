console.log(2-9); 
console.log(2-null);  //2 - null -> 2 - 0 -> 2
console.log(2-undefined); // 2 - undefined -> 2 - NaN  -> NaN

console.log(1-"453");
//if the string can not be converted into a valid number than it convert into NaN
console.log(1-"56tyu");

//Why it's Happening ? 
//Something going behind some number system 
console.log(1-"0xa");

// 0xA and 0xa are both hexadecimal representation of the number 10 