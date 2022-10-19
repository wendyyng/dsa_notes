// 6_Arrays

//Lookiup O(1)
//Push O(1)
//Insert O(n) linear
//Delete O(n) 

const strings = ['a', 'b', 'c', 'd'];
// strings[2]
strings.push('e'); //O(1) adding one to the end
strings.pop(); // O(1) remove the last item
strings.unshift('x') //add to the beginning
//loop through everything and realign the indexes O(n)
strings.splice(2, 0, 'alien') //O(n/2) -> O(n)


//32 bits 4 shelft to store one variable
//4*4 = 16 bytes of storage

//Two types of arrays: Static & Dynamic
//Static: fixed in size, create with adjacent set of memory
//Dynamic: allows to copy and rebuild the array in new location

//C++ - allow to manage and more control over memory
// int a[20]; //array that has space for 20items
// int b[5] {1,2,3,4,5}

//Dyanmic Array

// Var vs Let vs Const
// https://dev.to/sethusenthil/var-vs-let-vs-const-1cgc



//__Classes in JavaScript__

//reference type
var object1 = {value: 10}
var object2 = object1
var object3 = {value: 10}
// object1 === object2
// object3 !== object1
// console.log([] === []) return false

// context vs scope
//this === window object - what is the object environment that we're in right now? refer to what object is inside of
const object4 = {
  a: function(){
    console.log(this);
  }
}
//object4.a() return {a: f}

//instantiation - make a copy of an object and reuse the code
class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }  
}

//__Implementing An Array__
//Create an Array class
class MyArray {
  constructor() {
    this.length = 0
    this.data = {};
  }

  get(index){
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index)
    return item;
  }

  shiftItems(index){
    for (let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    //Delete tha last item
    delete this.data[this.length-1];
    this.length--;
  }
  
}
const newArray = new MyArray();
// console.log(newArray.get(0))
// console.log(newArray);

//Strings and Arrays
//treat strings like arrays
//turn it into an array ~ split()

//Exercese: Reverse a String
function reverse(str){
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'not good'
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }

  return backwards.join('') // or .join('')
}

console.log(reverse("ABCDEFG"))

function reverse2(str) {
  //use built in methods
  return str.split('').reverse().join('')
}
const reverse3 = str => str.split('').reverse().join('');
//[...str].reverse().join('');