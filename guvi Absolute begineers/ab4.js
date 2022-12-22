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

  let A = userInput[0];
  let cirumfrence = A*Math.PI*2;
  if(cirumfrence<0){
    console.log("Error");
  }
  let cirumfrence2 =cirumfrence.toFixed(2);
  console.log(cirumfrence2);

  //end-here
});