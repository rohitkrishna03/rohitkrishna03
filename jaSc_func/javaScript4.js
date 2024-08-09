// Move array variables into single variables

const fruits = new Map([
 ["apple", 500],
 ["banana",200],
["orange", 300]
]);
let text ="";
for ( const [key, value] of fruits){
    text += 
     key + " is " + value;
    // here the <p> means paragraph
}
console.log(  text)