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

  let num = userInput[0].split("");
  let output=1;
  for(let i=0;i<num.length;i++){
    for(let j=0;j<num.length;j++){
    if(i==j){
      console.log(num[i]);
    }
    }
  }
  console.log(output);

  //end-here
});