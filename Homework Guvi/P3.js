/*3. print the numbers from n to 1, provided the value of n using for loop
    input: 
    10
    output:
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1*/
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
    let i = userInput[0];
    for(i=userInput[0];i>=1;i--){
        console.log(i);
    }
    
      //end-here
    });