function findthelongstr(str){
    var array1 =str.match(/\w[a-z]{0,}/gi);
    var result =array1[0];
    for (var x=0;x<array1.length;x++){
        if (result.length<array1[x].length){
            result =array1[x];
        }
    }
    return result;
    
      
    }
    
console.log(findthelongstr("the game has began"));