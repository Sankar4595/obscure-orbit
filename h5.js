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
  for(let j=0;j<n-i;j++){
      pattern+=" ";
  }
  for(let k=0;k<i;k++){
      pattern+="*";
  }
console.log(pattern);
  
}