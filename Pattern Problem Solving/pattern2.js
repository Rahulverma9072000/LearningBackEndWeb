function pattern(n){
    //write a loop to repeat a task for n Rows
        for(let row = 1;row<=n;row++){
            //task 
            let str = "";
            //task is to concatenate * n times 
            for(let col = 1;col<=row;col++){
                str+="*";
            }
            console.log(str);
        }
    }
    
    let n = 5;
    pattern(n);