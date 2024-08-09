// Write a JavaScript program to pass a 'JavaScript function' as a parameter.

function addstudent(id, callback){
    callback()
;}
function callback(){
    console.log('hello');
}
addstudent(1, callback);