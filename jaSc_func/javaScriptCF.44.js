// fibanocci
function fib(n){
   var a=0;
   var b=1;
    var count =2;
    var n3;
    console.log(a,b);
    while(count<n){
    n3 = a +b;
    console.log(n3);
    a=b;
    b=n3;
        count++;
    }
}
fib(8)