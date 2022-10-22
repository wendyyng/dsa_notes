//Section 8 DS Linked Lists
//Singly and Doubly Linked Lists
//Static Arrays: Certain amount of data/memory that can be allocated next to each other in memory
//Both Dynamic and Static Arrays: can increase their memory once it hits a certain limit and double up that memory in another memory location. But that operation every once in a while of doubling up the array in order to create more memory, had a performance implication and it costs us O(n). Arrays also have bad performance for any sort of operations like insert and delete that have to shift indexes over
//Hash Tables: store memory in anywhere we like but they are not ordered ... so we need linked lists

//Linked Lists
//First node is called the head, the last is called tail which points to null

const basekt = ['a', 'b', 'c']
//linked list: a -> b -> c
//JS doesn't come prebuilt with linked list

//Exercise: Why Linked Lists
//Arrrays: elemetns are indexed
//Linked Lists: no shifting or unshifting; can have sorted data unlike hash tables
//prepend O(1) //don't need to loop through
//append O(1) //no loop through
//lookup O(n)
//Insert O(n)
//Delete O(n)

//Pointers
//Reference to another place in memory
let obj1 = {a: true};
let obj2 = obj1; //both pointing to the same location at memory
delete obj1
obj2 = 'hello'
console.log('2', obj2)

//Making a Linked List
//10->5->16


// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next : {
//         value: 16,
//           next: null
//       }
//     }
//   }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1;
  }
  append(value){
    const newNode = new Node(value)
    //Tail pointing to the new node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    
    newNode.next = this.head;
    this.head = newNode
    this.length++
    return this;
  }
  insert(index, value){
    //create new node
    const newNode = new Node(value);
    //find node at index
    //new node pointing to the node at index
    //node at previous index pointing to the new node

    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  //*-*
  // *

  remove(index) {
    //check params
    if (index >= this.length) {
      return false;
    }
    // const leader = this.traverseToIndex(index-1)
    // const nextPointer = this.traverseToIndex(index+1)
    // leader.next = nextPointer
    // this.length--
    // return this.printList()

    //check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
    
  }
  
  printList() {
    //List the linked list
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  
}

const myLinkedList = new LinkedList(10)
myLinkedList.printList();
myLinkedList.append(5);
myLinkedList.printList();
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.remove(2);


// console.log(myLinkedList)

// if (index === 0) {
//   this.prepend(value);
//   return this.printList();
// }

//insert O(n)
//delete O(n)