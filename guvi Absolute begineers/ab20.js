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

  let [a,b,c]=userInput[0].split(" "); //formula:- X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a
  let squarRoot = parseFloat(Math.sqrt((b*b)-(4*a*c)));
  let x1 =(-b+squarRoot)/(2*a);
  let x2 =(-b-squarRoot)/(2*a);
  console.log(x1.toFixed(2));
  console.log(x2.toFixed(2));
  

  //end-here
});