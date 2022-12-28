/*
n = 5
 
* * * * *
* * * *
* * *
* *
*
*/

let n = 5;
for(let i=n;i>0;i--){
    let pattern = "";
    for(let j=1;j<=i;j++){
        pattern+="*"+" ";
    } console.log(pattern);
}