//Print n*n grid with all * in JS 
// Observations 
// for a given value of n we print n 
//we have to do some task for each row 
//task is to print n stars for each row 
// How Many rows I have to print 
// + -> Addition Operator 
// left + right operand if anyone either left or right ot both are strings then , it converts the other operand as a string 
// than it joins them called Concatenation 
//logic for printing the pattern 
//nested looping 
function pattern(n){
//write a loop to repeat a task for n Rows
    for(let row = 1;row<=n;row++){
        //task 
        let str = "";
        //task is to concatenate * n times 
        for(let col = 1;col<=n;col++){
            str+="*";
        }
        console.log(str);
    }
}

let n = 6;
pattern(n);