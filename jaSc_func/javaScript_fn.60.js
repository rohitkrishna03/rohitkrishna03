function perfnum(num){
    var temp =0;
    for (var i =0;i<num;i++){
        if (num%i===0){
            temp+=i;
        }
    }
    if (temp === num && temp!==0){
        console.log('it is a perfect nmber');
    }
    else{
        console.log('not a perfect number');
    }
}
perfnum(34)
perfnum(28)