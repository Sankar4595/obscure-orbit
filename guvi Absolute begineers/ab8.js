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

  let [a,b] =userInput[0].split(" ");
  let output=Math.min(a,b);
  console.log(output);
  

  //console.log(num1);

  //end-here
});