/*
0
1 0
0 1 0
1 0 1 0
0 1 0 1 0   */

let n=5;
for(let i=1;i<=n;i++){
    let pattern = "";
    for(let j=0;j<i;j++){
        if(j%2==1 || i%2==0 ){
            pattern+="1"+" ";
        }else if(i%2==1){
            pattern+="0" + " ";
        }  
        // pattern+=(i-j);
    } console.log(pattern);
}