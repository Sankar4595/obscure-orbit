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
  let a = parseFloat(userInput[0]);
  let area = 1;
  for (let i=1; i<=a;i++){
    area = (Math.sqrt(3)*a*a)/4;

  }
  console.log(area.toFixed(2))

  //end-here
});