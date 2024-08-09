//  PRINT PATTERNS IN JSVASCRIPT
//  create variables to control loop and op
var x, y, chr;
for (x =0; x<=8; x++){
    for(y =1; y<x; y++){
        chr =chr +("*");
    }
    console.log(chr);

    //  reste chr for next row
    chr ='';
}