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

  let A = userInput[0].split(" ");
  let N = parseInt(A[0]);
  let C = parseInt(A[1]);
  for(let i=1;i<=C;i++){
    console.log(N);
  }

  //end-here
});