/*
n = 5
 
5 
5 4
5 4 3
5 4 3 2
5 4 3 2 1 */

let n = 5;
for(let i=n;i>=1;i--){
    let pattern ="";
    for(let j=n;j>=i;j--){
        pattern+=j+" ";
    }
    console.log(pattern);
}