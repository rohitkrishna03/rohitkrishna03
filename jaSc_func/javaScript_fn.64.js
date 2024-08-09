function charcount(str1){
    var unchar ={};
    str1.replace(/\S/g, function(l){
        unchar[l]=(isNaN(unchar[l])?1 :unchar[l]+1);
    });
    return unchar
    ;

}
console.log(charcount('the birds are fluing in th sky'));