function digcount(num){
    var count =0;
    while(num!=0) {
    num =Math.floor(num/10);
    count++;
}
return count;
}
console.log(digcount(123445));
console.log(digcount(9876543));

