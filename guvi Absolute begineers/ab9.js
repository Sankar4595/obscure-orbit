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

  let N =parseInt(userInput[0]);
  let output = N*N*N;  // cube formula n=a*a*a;
  console.log(output);

  //end-here
});