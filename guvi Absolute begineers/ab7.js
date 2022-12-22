// Getting input via STDIN
const { closeSync } = require("fs");
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
   let celcius=userInput[0];
   let fahrenheit="";
   fahrenheit=(celcius*1.8)+32;  //formula Fahrenheit = (celcius*1.8)+32;
   console.log(fahrenheit.toFixed(2));
   

  //end-here
});