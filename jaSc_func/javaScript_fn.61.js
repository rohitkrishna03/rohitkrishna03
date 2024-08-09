function factor(num){
    var num_fact=[],i;
    for(i =0;i<=Math.floor(Math.sqrt(num)); i+=1){
        if (num % i===0){
            num_fact.push(i);
            if(num/i !==i)
                num_fact.push(num/i);


        }
    }
    num_fact.sort(function(x,y){

        return x-y;
    });
    return num_fact;
}

console.log(factor(15));