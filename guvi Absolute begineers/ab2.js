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
  let A = userInput[0];       // length of a rectangle
  let B = userInput[1];       // Breath of a rectangle
  let C = A*B;
  console.log(C);

  //end-here
});