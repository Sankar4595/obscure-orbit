// Getting input via STDIN
const { parse } = require("path");
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
  
  let num=parseInt(userInput[0]);
  let rem=0;
  let sum=0;
  while(num)
  {
    rem = num%10;
    sum = sum+rem;
    num = Math.floor(num/10);
  } console.log(sum);
      
  //end-here
});