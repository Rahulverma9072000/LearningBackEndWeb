//So for loop are 1 more way to do the same there as of while loop . THere is no particular advantage of using for loop over while loop 

// while(condition){
    //logic
    //update statement 
// }

// for(variable initialization; condition ;update statement )

//Program to Print Numbers from 1 to 10 using for loop 
for(let i = 1;i<=10;i++){
    console.log(i);
}

let ans = 0;
for(let i = 1;i<=10;i++){
    ans+=i;
}
console.log(ans);

//Print all the Even Numbers greater than 1 and less than 25
for(let i = 1;i<=25;i++){
    if(i%2==0){
        console.log(i);
    }
}
//Same to do same 
for(let i =2;i<=25;i+=2){
    console.log(i);
}