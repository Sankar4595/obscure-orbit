// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let month = userInput[0];
while(month!==0,month<=12){
if(month==2){
    console.log("28");
    break;
}else if(month==0){
    console.log("Error");
    break;
}
else if (month%2==1){
    console.log("30");
    break;
}
else if((month%2==0)){
    console.log("31");
    break;
}
}
if(month>12){
    console.log("Error");
}
    
  //end-here
});