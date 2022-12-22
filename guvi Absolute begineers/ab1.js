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

  let A_K = userInput[0];
  let B_Km = A_K*1000;   // 1 Km = 1000m;
  let C_Cm = A_K*100000; // 1 Km = 100000cm;
  console.log(B_Km);
  console.log(C_Cm);

  //end-here
});