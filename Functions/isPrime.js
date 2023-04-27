// Given a Number x , Write a Function to determine whether the number is Prime Number or not ? 
//How to check if the number is Prime or not ?
//What type of numbers are Prime ?
// Primes -> Number that divides 1 and number itself 
// If there is atleast 1 more number apart from 1 and x that divides x completely then x is non prime 
function isPrime(x){
    for(let i=2;i<=x-1;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(17));