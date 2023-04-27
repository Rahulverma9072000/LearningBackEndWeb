//We all know About Triangle's 
//Let's do something intresting 
//Given 3 integers a b c , Check if we can form a Traingle with the sides of triangle having length a , b and c . 
//Problem is not about Right Angled Triangle , it's about general Triangle . 

//Condition to form a Triangle 

//If we want to create a Triangle with a,b,c sides then for each sides the sum of other 2 sides should be greater than 3rd .
 //We want all the 3 condition true together 
let a = 10 , b = 12 , c =5;
if(a + b > c && b + c > a && c + a > b){
    console.log("Yes we can form a Triangle");
}else{
    console.log("No");
}