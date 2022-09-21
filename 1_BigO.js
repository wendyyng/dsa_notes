//Good Code
//1. Readable 
//2. Scalable - Big O

//https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent
//Big O
// const nemo = ['nemo'];
// const large = new Array(100).fill('nemo')
// function findNemo(arr) {
//   let t0 = performance.now()
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'nemo')
//       console.log('Found Nemo!')
//       break;
//   }
//   let t1 = performance.now();
//   console.log('Call to find Nemo took ' + (t1 - t0)
//     + ' milliseconds');
// }

// findNemo(nemo)
//run time increases as the arr length increases
//O(n) Linear - for loops, while loops through n items - takes linear time
// findNemo(large)

//O(1) Constant Time - no loops
//Very scalable, great in terms of predictability
// const boxes = [0, 1, 2, 3, 4]
// function logFirstTwoBoxes(boxes){
//   console.log(boxes[0])
//   console.log(boxes[1])
// }

//BigO Exercise 1
//https://replit.com/@aneagoie/BigO-Exercise-1
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++) { //O(n)
//     anotherFunction();//O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }
// 3 + n + n + n + n = 3+ 4n
//BIG O(3+4n) -> simplify to O(n)
//O(n) because as the input length increases the run time increases

//BigO Exercise 2
//https://replit.com/@aneagoie/BigO-Exercise-2#index.js
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; //O(1)
//   let b = 10; //O(1)
//   let c = 50; //O(1)
//   for (let i = 0; i < input; i++) { 
//     let x = i + 1;//O(n)
//     let y = i + 2;//O(n)
//     let z = i + 3;//O(n)

//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; //O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know";  //O(1)
// }
//4 + 5n
//O(n)

//Rules
//1. Worst Case 
//eg. nemo is at the end of the array
//2. Remove constants 
//eg. O(2n) -> O(n) - the line moves, how steep doesn't matter
//3. Diff terms for inputs 
//Two separate collections: O(a*b)
//4. Drop Non Dominants
//O(n + n^2) -> O(n^2)
//O(n/2)-> O(n)
// function print(items){
//   console.log(items[0])
//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while(index < middleIndex){
//     console.log(items[index]);
//     index++;
//   }
//   for(var i = 0; i < 100; i++){
//     console.log('hi')
//   }
// }

//Big O Rule 3
// function a(box1, box2){
//   box1.forEach(function(box1){
//     console.log(box1)
//   });
//   box2.forEach(function(box1){
//     console.log(box2)
//   })
// }
//O(a+b)
//O(a*b) if nested

//O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
//Log all pairs of arr
// const boxes = [1,2,3,4,5]
// function logAllPairsOfArr(arr){
//   for (let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//       console.log(arr[i], arr[j])
//     }
//   }
// }
// logAllPairsOfArr(boxes)
// O(n * n) -> O(n^2) 2 nested loops 

//Arrays
//first item of an arr O(1)
//unshift O(n)
//DS + A = Programs

//O(n!) Factorial - you are adding a loop for every element - expensive - not seen often
//nested loop for every input we have

//3 pillars of programming
//Scalable - Speed - Time complexity & Memory - Space complexity, limited

//Space Complexity
//Heap - where we store variables
//Stack - keep track of function calls

//Exercise: Space Complexity
// function boo(n){
//   for (let i = 0; i < n.length; i++){
//     console.log('boo')
//   }
// }
// boo([1,2,3,4,5])
//space complexity of O(1)
//don't include space taken up by the input
//within the function, are we adding new space?
// function arrHi(n){
//   let hiArray = [] //create DS, new arr
//   for (let i = 0; i < n; i++){ //create variable i = 0
//     hiArray[i] = 'hi' //adding addtional memory
//   }
//   console.log(hiArray)
// }
// arrHi(6) //O(n)

//What's the big O for:
//'abddjkjlkjldddd'.length
//Depends on the language, built in method
//dot length property for each string
//just a simple lookup for JavaScript
//O(1) constant time

//Javascript Loops
//for loops, forEach, for let i of arr
