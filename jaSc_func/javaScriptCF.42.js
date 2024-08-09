var arr =[[1,0,1],[0,0,0],[1,1,1]];
var zerocount =0;
for(i=0;i<arr.length;i++){
    for(var j=0;j<arr[0].length;j++){
        zerocount = arr[i][j]==0 ? zerocount+1:zerocount;
    }
}
console.log(zerocount);