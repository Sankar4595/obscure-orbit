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
  let array1 =parseInt(userInput[0]);
  let array2 =parseInt(userInput[1]);
  let array3 =parseInt(userInput[2]);
  let largeNumb = Math.max(array1,array2,array3);
  console.log(typeof largeNumb);
  
  //end-here
});