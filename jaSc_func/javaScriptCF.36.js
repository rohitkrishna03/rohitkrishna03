function deletelement(arr, ele){
    for(var i =0; i<arr.length; i++){
        if (arr[i] ==ele){
            arr.splice(i,1);
        }
    }
    return arr;
}
var arr =[21,34,32,45,56,76,89];
arr= deletelement(arr,34)
console.log(arr);