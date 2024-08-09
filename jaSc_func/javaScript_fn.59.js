function secgrelow(num){
    num.sort(function(x,y){
    return x-y;
    });
    var uniqa =[num[0]];
    var result =[];
    for(var i =1; i<num.length;i++){
        if(num[i-1] !== num [i]){
            uniqa.push(num[i]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length -2]);
    return result.join(',');

}
console.log(secgrelow([1,2,3,4,5,6]));