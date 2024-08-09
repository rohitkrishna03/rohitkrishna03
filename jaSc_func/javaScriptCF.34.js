//  print 2d array using thenested loop

function twodarray(){
    for(var i =0; i<arr.length; i++){
        for(var j=0; j<arr[0].length; j++){
            console.log(arr[i][j]);
        }
    }
}
arr =[[1,2], [3,4],[5,6]];
twodarray(arr)
