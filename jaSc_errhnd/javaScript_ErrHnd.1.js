function validateinteger(num){
    if(!Number.isInteger(num))
    {
        throw new error('invalid number, inpput integer');
    }
    console.log('number is valid:',num);
}
try{
    validateinteger(12);
    cancelIdleCallback(12.3);
}
catch (error){
    console.log('Error:' ,error.message);
}
