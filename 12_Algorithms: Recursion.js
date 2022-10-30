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

// console.log(sum(3)) //print 6

//Example:
let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  }
  counter++
  return inception();
}

// console.log(inception())
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

// console.log(findFacorialRecursive(3))

//For Loop O(n)
function findFacorialIterative(number) {
  let factorial = 1
  for(let i = number; i > 1; i--){
    // console.log(number)
    factorial *= i
  }
  return factorial
}
// console.log(findFacorialIterative(4))

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
// 0, 1, 2, 3, 4, 5, 6, 7
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2 + 3

function fibonacciIterative(n){

  if( n < 2) return n;
  
  let i = 2;
  let value
  let firstPrevious = 1 
  let secondPrevious = 0
  
  while (i <= n){
    // console.log(`First Previous: ${firstPrevious}`)
    // console.log(`Second Previous: ${secondPrevious}`)
    value = firstPrevious + secondPrevious
    // console.log(`${i}: ${value}`)
    secondPrevious = firstPrevious
    firstPrevious = value
    i++
  }
  return value;
  
}
console.log(fibonacciIterative(7))

//Iterative Approach: O(n - 2)
//function fibIterative(n){
// let arr = [0, 1];
// for (let i = 2; i < n + 1; i++){
//   arr.push(arr[i -2 ] + arr[i - 1]);
// }
// return arr[n]
// }

//Recursive Approach: Exponential Time - O(2^n)
function fibonacciRecursive(n){
  if ( n < 2 ){
    return n;
  }
  //Sum is always the two numbers before it
  //if n === 2, return fibonacci(1) + fibonacci(0) === 1
  //if n === 3, return fibonacci(2) + fibonacci(1) === 1 + 1 = 2
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciRecursive(3))
//Recursive a that solve the problem of size N
//Every additional elements in the Fibonacci sequence  - we get an increase in function calls exponentially





//Recursive vs Iterative
//Anything you do with a recursion can be done iteratively (loop)
//Recursive: Can key your code DRY - better readability
//Cons: Large Stack
//Trees data structures, traversal
//Tail Call Optimiztion: ES6 JS allows to be called without increasing the call stacks

//When to use recursive??
//BFS + DFS (Searching), sorting
//New Rule: Every time you are using a tree or converting something into a tree, consider recursion.
//1. Divided into a number of subproblems that are smaller instances of the same problem.
//2. Each instance of the subproblem is identical in nature.
//3. The solutions of each subproblem can be combined to solve the problem at hand.
//Divide and conquer using Recursion



// Exercise: Reverse String With Recursion
// Here is a little bonus exercise. You can see the repl attached in the resources to the lecture, as well as the solution.

// Try to implement the answer recursively and also iteratively if you want!

// Ps, here is one of my favourite real world application example of when to use recursion: https://stackoverflow.com/questions/105838/real-world-examples-of-recursion

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
 let numIndex = str.length - 1
  if(numIndex === 0){
    return str[0]
  }
  return str[numIndex] + reverseString(str.slice(0, -1))
}

console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy

// function reverseString(str) {
//   let arrayStr = str.split("");
//   let reversedArray = [];
//   //We are using closure here so that we don't add the above variables to the global scope.
//   function addToArray(array) {
    
//     if(array.length > 0) {
//       reversedArray.push(array.pop());
//       addToArray(array);
//     }
//     return;
//   }
//   addToArray(arrayStr);
//   return reversedArray.join("");
// }

// reverseString('yoyo master');

// function reverseStringRecursive (str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseStringRecursive(str.substr(1)) + str.charAt(0);
//   }
// }

// reverseStringRecursive('yoyo master');


//Recursion Review
//Function that calls itself
//Intersting and clever but can be costly
//Merge sort, quick sort, tree traversal, graph traversal