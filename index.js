//Section 12: Algorithms: Recursion
//Steps in a process that we take to perform a desired action with computers

//DS + A = Programs
//Class + function() = Programs

//Algorithms:
//Sorting
//Dynamic Programming
//BFS + DFS (Searching)
//Recursion

//Recursion Introduction
//Not technically an algorithms
//ls -R //list files recursively
//define something in terms of itself
//A function refers to itself inside of the function

//function inception(){
//   debugger;
//   inception();
// }

//Example:
function sum(num){
  //Base case:
  if(num === 1){
    return num
  }
  return num + sum(num -1)
}

console.log(sum(3)) //print 6

//Example:
let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  }
  counter++
  return inception();
}

console.log(inception())
//1. Identify the Base Case
//2. Identify the Recursive Case
//3. Get Closer and closer and return when needed. Usually you have 2 returns

//Exercise: Factorial
//Write two functions that finds the factorial of any number.
//5! = 5*4*3*2*1

//Recursive O(n)
function findFacorialRecursive(number) {
  if(number === 1){
    return number
  }
  return number * findFacorialRecursive(number - 1);
}
//function recursive(number){
// if(number === 2) {
//   return 2;
// }
//   return number * recursive(number - 1);
// }

console.log(findFacorialRecursive(3))

//For Loop O(n)
function findFacorialIterative(number) {
  let factorial = 1
  for(let i = number; i > 1; i--){
    // console.log(number)
    factorial *= i
  }
  return factorial
}
console.log(findFacorialIterative(4))

//function iterative(number){
// let answer = 1;
// if (number === 2) {
//   answer = 2;
// }
// for (let i = 2; i <= number; i++){
//   answer = answer * i;
// }
// return answer;
// }

//Exercise: Fibonacci
//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2 + 3

function fibonacciIterative(n){
  
}
fibonacciIterative(3)

function fibonacciRecursive(n){
  
}
fibonacciRecursive(3)