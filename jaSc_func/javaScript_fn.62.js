function expo(b, n){
    var ans =1;
    for (var i=0; i<=n; i++){
        ans = b*ans;

    }
    return ans;
    
    
}
console.log(expo(2,4));