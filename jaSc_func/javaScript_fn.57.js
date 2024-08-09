function detectdatatype(value){
    var dtype =[Function, RegExp, Number, String,Boolean,Object], x, len;
    if (typeof value ==='object' || typeof value ==='function'){
        for (x =0, len =dtype.length; x<length;x++){
            if (value instanceof dtype[x]){
            return dtype[x];

            }
        }
    }
    return typeof value;

}
console.log(detectdatatype(12)); //which prints number
console.log(detectdatatype('rohitk')); //which prints string
console.log(detectdatatype(true)); //which prints boolean