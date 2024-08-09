function print(range){
    for(var i=0 ;i<=range;i++){
        var str =" ";
        for (var j=0; j<=i;j ++){
            str += j+" j";
        }
        console.log(str);
    }
}
print(8);