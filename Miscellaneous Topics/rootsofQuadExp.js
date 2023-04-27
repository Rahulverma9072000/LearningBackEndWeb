//Given 3 no's a,b,c, which represents coeffiecient of a quadratic equation ax^2 + bx + c 
// Assuming Real Roots 
// Find the Roots of Quadratic Equation 
function solve(a,b,c){
    //ax^2+bx+c 
    let sqrtVal = Math.sqrt(b*b-4*a*c);
    let root1 = (-b + sqrtVal) / (2*a);
    let root2 = (-b - sqrtVal) /(2*a);
    console.log(root1,root2);
}

solve(2,5,3);