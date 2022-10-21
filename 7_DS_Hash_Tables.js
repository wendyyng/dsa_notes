//Section 6: DS Hash Tables

//Objects are a type of hash tables in JS
//basket.grapes = 10000
//key "grapes"
//pass grapes to the hash function -> key and value at memory address

//Hash function - generates a value of fixed length for each input that it gets
//md5 Hash Generator
//idempotent - a function given the input always gives the same output
//A key that is grapes, sent it to the hash function, which hashes something really fast, and then map the hast came out to be into a memory address where we want to store the data: grapes 10,000, time complexity O(1)

//Hash Collisions
//Insert O(1)
//Lookup O(1)
//Delete O(1)
//Search O(1)

let user = {
  age: 54,
  name: 'Jen',
  magic: true,
  scream: function(){
    // console.log('ahh')
  }
}

user.age // O(1)
user.spell ='abra' //O(1)
user.scream(); //O(1)

//Cons of Hash Tables
//https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
//https://en.wikipedia.org/wiki/Hash_table
//Data stored in same address space: slow down reading and writing O(n/k) k is the size of the hash table
//Likely happen in hash table

//Hash Tables in Different Languages
//function as key, value as function etc.
//JS: only allows string keys before but ES6 allows map: save any data type as key
const a = new Map()
//maintain insertion order
const b = new Set()
//all of them are hash tables




//Exercise: Implement a Hash Table
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  //_ to show private property but still can't be accessed publicly
  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  } //O(1)

  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
      this.data[address].push([key,value])
    return this.data
  } //O(1)

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      //for loop
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined
  } //O(1)

  keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      //loop through 50 
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
  
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 55);
myHashTable.set('oranges', 2);
// console.log(myHashTable.set('apples', 55));
// console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys())

// Extra: keys() Without Collision
 // keys() {
 //    if (!this.data.length) {
 //      return undefined
 //    }
 //    let result = []
 //    // loop through all the elements
 //    for (let i = 0; i < this.data.length; i++) {
 //        // if it's not an empty memory cell
 //        if (this.data[i] && this.data[i].length) {
 //          // but also loop through all the potential collisions
 //          if (this.data.length > 1) {
 //            for (let j = 0; j < this.data[i].length; j++) {
 //              result.push(this.data[i][j][0])
 //            }
 //          } else {
 //            result.push(this.data[i][0])
 //          } 
 //        }
 //    }
 //    return result; 
 //  }

//Hash Tables vs Arrays

//Exercise: First Recurring Character
let array1 = [2,5,1,2,3,5]

function firstRecurrChar (array){
  let map = {}
  for(let each of array){
    if(!map[each]){
      map[each] = 1
    }else{
      return each
    }
  }
  return false
  
}

// console.log(firstRecurrChar(array1))
//Nested loops: O(n^2)
function firstRecurringCharacter2(input){
  let map = {};
  for (let i = 0; i < input.length; i++){
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    console.log(map)
  }
  return undefined;
}// Time Complexity O(n); Space Complexity O(n);

//Interesting Tidbit: Python Dictionaries
// Recently, the Python programming language has made Dictionaries (their Hash Tables) ordered by default! So in that language, the difference between and Array (List in Python) and Hash Table (Dict in Python) are less. You can read more about it here: https://softwaremaniacs.org/blog/2020/02/05/dicts-ordered/en/

//Hash Tables
//Pros: Fast lookups: good collision resolution needed, fast inserts, flexible keys
//Cons: Unordered, slow key iteration