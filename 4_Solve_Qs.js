//Skills: Anlytic, Coding, Technical, Communication

//DS
//Arrays, Stacks, Queues, Linked Lists, Trees, Tries, Graphs, Has Tables

//A
//Sorting, Dynamic Programming, BFS + DFS (Searching), Recursion

//Google Coding Interview
//https://www.youtube.com/watch?v=XKu_SEDAykw

//2 Arrays, create a function that let's user know (true/false) whether these two arrays contain any common items

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x'];
//should return true

//Inputs: 2 parameters - arrays 
//Output: return true or false
//Arrays - no size limit

//? How large is the array gonna be
//? What's more important, time/space/memory complexity

//Brute force, easy solution
//Nested loop, compare two arrays, two for loops
//Time Complexity O(n^2) - not the best solution - not efficient
//Space Complexity O(1)
// O(a*b), O(n^2) if the array sizes are the same
// function containsCommonItem(arr1, arr2){
//   for (let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]) return true
//     }
//   }
//   return false
// }
// containsCommonItem(array1, array2)

//Is there a way to imporve O(a*b)?
//array1 ==> obj {
// a: true, b: true, c: true, x:true
//}
//array2[index] === obj.properties

function containsCommonItem2(arr1, arr2){
  //loop through first array and create object where properties === items in the array
  //Objects: only numbers, strings and booleans can be used correctly, not work with non-literal values
  let map = {};
  for(let i = 0; i < arr1.length; i++){
    const item = arr1[i];
    if(!map[item]){
      map[item] = true;
    }
  }
  console.log(map)
  //loop through second array and check if item in second array exists on created object.
  for(let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return true;
    }
  }
  return false;
  //O(a + b) Time Complexity
  //O(a) - the first array - Space Complexity
}
console.log(containsCommonItem2(array1, array2))

//Error checks
//Always 2 parameters? Check your inputs

//Avoid confusing names for variables

//Unit tests

//How you could improve?

//Build in JS functions:
function containsCommonItem3(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}
//Modularizing your code

