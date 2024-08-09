// larger than number
function largnum(num){
    return function(evalue){
        return(evalue>=num);
    };
}
var result =[11,23,34,45,65,43,67,12,32,87,99].filter(largnum(43));

console.log(result);