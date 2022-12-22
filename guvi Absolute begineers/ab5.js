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
  let multiple ="";  
  for(let i = 1;i<=3;i++){
      multiple+=(i*userInput[0]);
  }
  console.log(multiple.trim());

  //end-here
});