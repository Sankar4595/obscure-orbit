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
  let [a,b]= userInput[0].split(" ");
  let minValue = parseInt(Math.min(a,b));
  let x = a%minValue;
  let y = b%minValue;
  if(x<y){
    console.log(b);
  }else{
    console.log(a);
  }
  

  //end-here
});