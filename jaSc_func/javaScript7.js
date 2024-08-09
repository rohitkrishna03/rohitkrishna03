// using string replace with the rsgular expression.

let text = "this place is Good, but the weather is awesome";
let n = text.replace(/good/i, "beautiful");
let result = text.match(/[h]/g);

let n1 = text.match(/is/i);

console.log(n);
console.log(n1);
console.log(result)


// while replacing the text you need to use the exact syntax /xxx/i