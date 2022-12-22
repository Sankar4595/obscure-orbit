// Getting input via STDIN
const { copyFileSync } = require("fs");
const { join } = require("path");
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

  let num = userInput[0];
  let output="";
  if(num===0){
    console.log("NULL");
  }else {
    for(let i=1;i<=num;i++){
      output = output+ (i*9) +" ";
    } console.log(output.trim());
  }
    //end-here
});