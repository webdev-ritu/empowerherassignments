/**Problem Statement: You are provided with a function multiply(a, b) that multiplies two numbers. Your task is to rewrite this function using arrow function syntax with a slight enhancement: include default parameters for both a and b. If no values are passed, a and b should default to 1. */
   
function multiply(a , b ) {
    return a * b
 }
const multiplyArrow = (a = 1, b =1) => a*b;
console.log(multiplyArrow());
