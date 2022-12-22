/*2. find the sum of n natural numbers using for loop
    input: 
    5
    output:
    15
    explanation:
    1 + 2 + 3 + 4 + 5 = 15
    input2:
    10
    output2:
    55 */
    // Getting input via STDIN
const { Console } = require("console");
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
  let n = userInput[0];
  let output=0;
  for(let sum = 1; sum<=n;sum++){
    output=output+sum;
  }
  console.log(output);
  

  //end-here
});