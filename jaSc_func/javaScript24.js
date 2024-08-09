//  function to check if the number os happy number
function happy_number(num){
    var m, n;
    var c =[];
//  continuw until the loop becomes 1
while(num !==1 && c[num]!== true){
    c[num] = true;
    m =0;

    // caluculate the sum of squares of digit
    while(num>0){
        n =num%10;
        // % gives th remainder
        m += n *n;
        num = (num -n) /10;
    }
    num =m;
}
return (num ===1);
}
var cnt =5;
var num =1;
var f5 ='';
while(cnt-- > 0){
    while(!happy_number(num))
        num++;
    f5 =f5 +(num+ ",");
    num++;

}
console.log(f5);