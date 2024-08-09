var a=2154;
var b = 458;
var gcd ; 
// gcd to store greatest common divisor
while(a!=b){
    if (a>b){
        a= a-b;
    }
    else{
       b = b -a; 
    }
}
gcd =a;
console.log(gcd);