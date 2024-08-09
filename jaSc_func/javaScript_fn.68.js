function lettercount(str, letter){
    var letter_count=0;
    for (var position =0; position< str.length; position ++){
        if (str.charAt(position)== letter){
            letter_count +=1;
        }
    }
    return letter_count;
}
console.log(lettercount("thismovieismovie", "i"));