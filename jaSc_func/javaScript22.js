// avg marks in class and overall greade of class
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var avgmarks =0;
for (var i =0; i< students.length; i++){
    avgmarks += students[i][1];
    var avg =(avgmarks / students.length);
}
console.log("average grade:" + (avgmarks / students.length));
//  till here we got the vaerage marks in class 
if(avg<60){
    console.log(" f grade");
}
else if(avg < 70){
    console.log('d grade');
}
else if (avg<80){
    console.log('c grade');
}
else if (avg<90){
    console.log('b grade');
}
else if (avg<100){
    console.log('a grade');
}
else{
    console.log('not grade scored');
}
