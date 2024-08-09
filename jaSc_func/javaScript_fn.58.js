function matric(n){
    var i;
    var j;
    for (var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            if(i===j){
     console.log('1');
            }
            else{
                console.log('0');
            }
        }
console.log('----------');
    }
}
matric(5)