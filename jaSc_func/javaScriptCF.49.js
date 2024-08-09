//  function and scope
function revnumber(n){
    let rev_num =0;
    while(n !=0){
        rev_num =rev_num*10 + n%10;
        n =Math.floor(n/10);
    }
    return rev_num;

}
const n =987654321;
console.log("orginalnumber:" +n);
const result=revnumber(n);
console.log('reverse number:' +result);