/*Write a code to get the input in the given format and print the output in the given format

Input Description:
First-line indicates two integers separated by space. Second-line indicates two integers separated by space. Third-line indicates two integers separated by space.

Output Description:
Print the input in the same format.

Sample Input :
2 4
2 4
2 4
Sample Output :
2 4
2 4
2 4 
*/
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

  console.log(userInput[0]);
  console.log(userInput[1]);
  console.log(userInput[2]);


  //end-here
});