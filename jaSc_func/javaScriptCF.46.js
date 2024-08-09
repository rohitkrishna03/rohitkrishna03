//  find the index o f fib nad check the numbers is present in the index or not

function fib(n){
    var a=0; 
    var b=1;
    var count =2;
    var n3;
    while(true){
        n3 =a+b;
        if(n3==n){
            console.log(`element in ${n} is present in index ${count}`)
            break;
        }
        else if(n3>n){
            console.log("element not presenet in ");
            break;
        }
        a=b;
        b=n3;
        count++;
    }
}
fib(34)