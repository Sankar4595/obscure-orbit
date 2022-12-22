/*Write a code to get the input in the given format and print the output in the given format

Input Description:
Three integers are given in line by line.

Output Description:
Print the integers in a single line separate by space.

Sample Input :
2
4
5
Sample Output :
2 4 5 */
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

  console.log(userInput[0], userInput[1], userInput[2]);
  
  //end-here
});