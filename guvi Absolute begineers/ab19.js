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

  let num=parseInt(userInput[0]);
  let output=0;
  for(let i=1;i<=num;i++){
     output=output+i;
  }
console.log(output);
  //end-here
});