// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for (var i =0; i<=100; i++){
    //  check if the umber is divisivle by 3 na d 5
if(i%3===0&&i%5===0){
    console.log(i+" fizzbizz");

}
else if(i%3 ===0){
    console.log(i +'fizz');
}
else if (i%5===0){
    console.log(i + 'buzz');
}
else{
    console.log(i);
}
}