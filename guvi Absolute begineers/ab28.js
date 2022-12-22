// Getting input via STDIN
const { off } = require("process");
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
  let sum = num.sort();
  let odd ="";
  let even="";
  for(let i=0;i<sum.length;i++){
    if(sum[i]%2==0){
        odd = odd+sum[i]+" ";
    }else{
        even=even+sum[i]+" ";
    }
  }
  console.log(odd.trim());
  console.log(even.trim());
  //end-here
});