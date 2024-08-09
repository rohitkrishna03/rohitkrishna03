//  number guessing game
var secretnumber =50;
var guess =10; // the number you guessed
if(guess ===secretnumber){
    console.log('you guessed the right number');

}else if(guess> secretnumber){
    console.log(" you guessed the bigger number than  the actual one");
}else{
    console.log('you guessed the lower number than the actual one');
}