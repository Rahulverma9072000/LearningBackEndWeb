//Given the side length of the Triangle in the form of 3 integers . Check if the given triangle is equilateral or scalene or isoceles

//If all the sides of Triangles are Equal than we can say its Equilateral  

//If 2 sides of TRiangle is Equal than it's Isoceles Triangle 

//Rest triangle is Scalene 

//Given INput is the valid triangle 

let a  = 10 , b = 10 , c = 10;

if(a==b && b==c){
    console.log("Equilateral Triangle");
}else if(a==b || b==c || c==a){
    console.log("Isoceles Triangle");
}else{
    console.log("Scalene Triangle");
}