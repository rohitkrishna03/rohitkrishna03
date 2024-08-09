function numpower(num, pow){
    var res =1;
    for (var i=0; i<pow; i++){
res =res*num;
    }
    return res;

}
console.log(numpower(5,3));
console.log(numpower(9,9));