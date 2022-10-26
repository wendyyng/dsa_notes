//Section 9: DS Stacks + Queues
//Linear DS
//Can only access the first or the last element in the DS

//Stacks
//as plates, stack on each other vertically,
//LIFO - Last in First Out
//lookup O(n)
//pop O(1) remove the last
//push O(1) add the last
//peek O(1) view the top plate

//Queues
//FIFO
//like an entrance to the roller coaster
//lookup O(n)
//enqueue O(1) push
//dequeue O(1) pop - take the first person out
//peek O(1) - view the first person

//Why would you not want to use array to build queue?
//unshift - need to shift indexes

//Exercise: Stacks vs Queues
//Stacks: build with arrays or linked lists - both works well
//Queues: arrays/linked lists - would want to use linked lists, since arrays are indexes, if remove the first one, need to shift the whole array O(n)

//Arrays allow cache locality, access memory faster becuase they are next to each other, but are either static or dynamic,has cenrtain amount of memory and once it's about to reach its limit, it's going to have to double up that memory and create new space somewhere in memory

//Linked Lists - has data scattered all over memory, extra memory, but more dynamic memory and ok to keep updating things tot he list

//Stack Implementation (Linked Lists)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    //see the top value
    return this.top
  }

  push(value){
    //add value to top
    let newNode = new Node(value)
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    }else{
      //hold the reference what was top originally
      const holdingPointer = this.top;
      //now the top = newnode
      this.top = newNode;
      //Now the new node is pointing to what was on top but now is below it
      //old top is going to be right after the new node
      this.top.next = holdingPointer;
    }
      this.length++
  }
  pop(){
    //remove value on top
    //Check if there is an item
    if(!this.top){
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty(){
    //Check if the stack is empty
    if(this.length){
      return false
    }
    return true
  }
  printList() {
    //List the linked list
    const array = [];
    let currentNode = this.top;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.printList()
myStack.pop();
console.log(myStack)
console.log(myStack.isEmpty())


//Stack Implementation (Array)
class Stack2 {
  constructor(){
    this.array = []
  }

  peek() {
    return this.array[this.array.length-1];
  }
  push(value) {
    this.array.push(value)
    return this;
  }
  pop(){
    this.array.pop()
    return this;
  }
  isEmpty(){
    if(this.array.length) return true
    return false
  }
}