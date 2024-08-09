var arr =[10,234,456,789,987,9999];
var largest =arr[0];
for(var i=0; i<arr.length; i++){
    largest = arr[i]>largest?arr[i]:largest;
}
console.log(largest)