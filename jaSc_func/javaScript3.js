// The Rest Property
// You can end a destructuring syntax with a rest property.

// This syntax will store all remaining values into a new array:
const numbers =[ 10,20,30,40,50,60,70];
let  [a,b,c, ...rest] = numbers;
console.log("a is "+ a );
console.log("b is " + b);
console.log("the rest is  " + rest);