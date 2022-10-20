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
    console.log('ahh')
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
const b = new Sets()
//all of them are hash tables