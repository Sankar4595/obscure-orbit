/*n = 5
 
    *
   * *
  * * *
 * * * *
* * * * *
 */
let n = 5;
for(let i=1;i<=n;i++){
    let pattern = "";
    for(let j=0;j<n-i;j++){
        pattern+=" ";
    }
    for(let k=0;k<(i*2)-1;k++){
        pattern+="*";
    }
console.log(pattern);
    
}