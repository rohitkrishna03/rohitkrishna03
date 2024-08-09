// make random id
function makeid(l){
    var text ='';
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefchijklmnopqrstuvwxyz1234567890";
    for (var i =0; i<l;i++){
        text += char_list.charAt(Math.floor(Math.random()*char_list.length));
  }
  return text;

}
console.log(makeid(9));

// l is length of the function call
l