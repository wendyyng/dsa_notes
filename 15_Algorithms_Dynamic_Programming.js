//Section 15: Algorithms: Dynamic Programming
//Optimization technique
//Do you have something you can cache?

// But at a high level, dynamic programming is a way to solve problems by breaking it down into a collection
// of SOP problems, solving each of those problems just once, and storing their solutions in case next
// time the same sub problem occurs.

//Caching?
//a way to store value so you can use them later on.
//Like a backpack...
// Caching is just a way for us to speed up programs and hold some piece of data in an easily accessible
// box.
// And memorization is a specific form of caching that we're going to be talking about, because we use
// it a lot in dynamic programming.

function addTo80(n) {
  return n + 80;
}
// addTo80(5)
// addTo80(5)
// addTo80(5)
//Run 3 times, calculate each time

//Store in cache, if parameter doesn't change, return a cached version fo the function it's memoized
function memoizedAddTo80() {
  let cache = {};
  //JS: use closures
  //child function: to avoid global scope
  return function(n) {
  if(n in cache) {
    return cache[n] 
  } else {
    console.log('long time')
    cache[n] = n + 80;
    return cache[n]
    } 
  }
}
const memoized = memoizedAddTo80();
console.log('1', memoized(5))
console.log('2', memoized(5))
//Don't want to cache in global scope, living outside the function

//Fibonacci and Dynamic Programming
//0,1,1,2,3,5,8,13,21,34,5,89,144,233...
function fibonacci(n) {
  if(n < 2){
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci(7)

//Divide & Conquer + Memoization
//1. Can be divided into subproblem
//That is, is it a tree like structure where each problem is broken down into smaller problems, into smaller problems, into small problems, which usually indicates a recursive solution?
//2. Recursive Solution
//3. Are there repetitive subproblems?
//No all tree like structures that don't have repetitive sub problemss - If same calculation over and over ? if yes -> subproblems
//4. Memoize subproblems
//When a problem has solutions composed of solutions to the same problem with smaller and smaller inputs,
// each problem is solved only once, and the result of each sub problem is stored in a table like a cache such as a hash table for future reference, we can use this table to obtain the original solution of a repeated problem.

//Implementing Dynamic Programming
//0,1,1,2,3,5,8,13,21,34,5,89,144,233...
// function fibonacci(n) {
//   if(v < 2){
//     return n
//   }
//   return fibonacci(n-1) + fibonacci(n-2);
// }
let calculations = 0
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
  calculations++
    if (n in cache){
      return cache[n];
    } else {
      if ( n < 2 ){
        return n
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

const fasterFib = fibonacciMaster();
console.log('Slow', fibonacci(35))
console.log('DP', fasterFib(35));
console.log('we did ' + calculations + ' calculations');

//Space and Time Complexity?
//Time: O(n)
//Space: Increased , stack is deep as the tree, and store cache in {}


//Interview Questions: Dynamic Programming
//Here are some popular Dynamic Programming Questions (see if you can notice the pattern):

// 1. House Robber    
//https://leetcode.com/problems/house-robber/
// 2. Best Time to Buy and Sell Stock  
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// 3. Climbing Stairs   
//https://leetcode.com/problems/climbing-stairs/

//Review
//Don't constantly recalculating things
//Bottom Up Approach 
//Starting from the simplest
function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop();
}
// console.log('DP2', fibonacciMaster2(100))

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Input: prices = [7,1,5,3,6,4]
// Output: 5
var maxProfit = function(prices) {
  
  let max = 0
  // let price = {}
  for(let i = 0; i < prices.length; i++){
    // let subString = prices.slice(i+1)
      for(let j = i+1; j < prices.length; j++){
        if(prices[j] - prices[i] > max){
        max = prices[j] - prices[i]
        // price[prices[i]] = subString[j]
        }
      }
  }
  console.log(max)
  return max
  // console.log(price)

  // let min = prices[0]
  // let max = prices[0]
  // let obj = {}
  // for(let i = 0; i < prices.length; i++){
  //   if(prices[i] < min) min = prices[i]
  //   if(prices[i] > max) max = prices[i]
  //   if(!obj[i]) obj[prices[i]] = prices[i]
  // }
  
  // console.log(min)
  // console.log(max)
  // console.log(obj)
};

maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])