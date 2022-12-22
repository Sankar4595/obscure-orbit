/*  1. print the first n natural numbers using for loop
    input:
    5
    output:
    1
    2
    3
    4
    5 */

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
let i = userInput[0];
for(i=1;i<=userInput[0];i++){
    console.log(i);
}

  //end-here
});