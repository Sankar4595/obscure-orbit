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
  let [principalAmount,time,interstRate] = userInput[0].split(" ");
  let simpleInterst = parseFloat((principalAmount*time*interstRate)/100);

  console.log(simpleInterst.toFixed(2));

  //end-here
});