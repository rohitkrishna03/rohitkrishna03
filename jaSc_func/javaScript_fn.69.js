//  call the nam eof the function 
function abc(){
    console.log(arguments.callee.name);

}
abc();