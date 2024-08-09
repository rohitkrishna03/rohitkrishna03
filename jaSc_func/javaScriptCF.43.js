function prodarray(arr1,arr2){
    var arrprod =arr1.length>arr2.length ?arr1:arr2;
    for(var i=0; i<Math.min(arr1.length, arr2.length); i++){
arrprod[i] =arr1[i] *arr2[i];
 
} 
return arrprod;
}
var arr1 =[3,4,56,76,23,10];
var arr2=[34,45,43,56,78,98];
console.log(prodarray(arr1,arr2));
