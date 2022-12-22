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

  let A = parseInt(userInput[0]);
  let B = parseInt(userInput[1]);
  let output = A+B;
  console.log(output.toFixed(0));

  //end-here
});