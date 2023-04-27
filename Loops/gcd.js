//Given 2 numbers a and b , Find the greates common divisor of a & b {gcd -> Greatest Common Divisor -> Highest Common Factor }
// Ex -> a = 28 , b = 24 : gcd : 4
//We want to detect a number that can divide both a and b .
//there can be multiple numbers that can divide both a and b .
function gcd(a,b){
    let ans = 1;
    for(let i=2;i<=Math.min(a,b);i+=1){
        if(a%i==0 && b%i==0)
        {
            ans = i;
        }
    }
    return ans;
}
//Euclid's Algorithm 
// gcd -> a,b 
// x = 14 -> 2 & 7
// Say we divide 33 with 5 
//If we say we divide a and b , such that q is quotient and r is remainder 
// a = b*q + r 
// a - b*q = r
// Now let's say gcd of a and b is G 
//If G is the gcd of a and b 
// than a%G==0 and b%G==0 
// Question 
// What is bq ? 
// bq is a multiple of b 
//if G divides b (b%G==0)
// G divides multiple of b 