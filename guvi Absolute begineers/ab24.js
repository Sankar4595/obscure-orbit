// Getting input via STDIN
const { reverse } = require("dns");
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
  let input = userInput[0];
  let output = "";
  for(let i=input.length-1;i>=0;i--){
    output=output+input[i]+"";
}console.log(output);
  
  //end-here
});