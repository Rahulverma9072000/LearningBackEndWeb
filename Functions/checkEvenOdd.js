//Create a Function to Check if Number is Even Or Odd 
function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
for(let i = 1;i<=20 ;i++)
{
    let result = isEven(i);
    if(result){
        console.log(i,"Even");
    }else{
        console.log(i,"Odd");
    }
}
