//Section 10: DS: Trees
//Hierarchical structure
// 0 or more child nodes
// every child descends from only one parent
//parent-child relationships - going one way unidirectional
//leaf nodes - every end of the data structure
//subtree - within a tree

//HTML 
//html,head,body - children, connected hierarchical
//Facebook comments
//Family trees
//Abstract Syntax Tree
//same principle as linked lists

//Binary Trees
//Each node: 0, 1 or 2 nodes
//Each children only have one parent

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//Full Binary Tree - either zero or 2 children

//Perfect Binary Tree - completely filled //Desireable: efficient
//1. The number of total nodes on each level doubles as we move down the tree, doubling everytime
//2. The number of nodes on the last level = sum of the number of nodes on all the other levels + 1; meaning half of the nodes are on the bottom level
//lookup O(log N)
//insert O(log N)
//delete O(log N)

//Level 0: 2^0 = 1
//Level 1: 2^1 = 2
//Level 2: 2^2 = 4;
//Level 3: 2^3 = 8;
//# of nodes = 2^h - 1;
//log nodes = height or steps
//Log n means: based on the height, the max number of decisions

//Divide & Conquer
//Really efficient
//Like a phone book - only need to explore subset of each section

//log 100 = 2
//10^2 = 100;




//Binary Search Tree
//Great for searching
//preserve relationships
//All child nodes in the tree to the right of the root node must be greater than the current node
//https://visualgo.net/en/bst?slide=1

//Balanced VS Unbalanced BST
//Unbalanced Trees - bad performance - can be almost like linked list - worst case O(n)

//BST
//Pros: Better than O(n), Ordered, Flexible Size
//Cons: No O(1) operations - need to do some traversal

//Exercise: Binary Search Tree
class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value)
    if(this.root === null){
      this.root = newNode
      return newNode
    }
    
    let currentNode = this.root
    while(true){
      if(value < currentNode.value){
        //Left
        if(!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left
      }else {
        //Right
        if(!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right
      }
    }
  }
  lookup(value){
    //simple return the node
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      }else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    //If can't find it
    return false;
  }
  remove(value){
    
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left= node.left === null ? null :
  traverse(node.left);
  tree.right = node.right === null ? null :
  traverse(node.right);
  return tree;
}


const tree = new BinarySearchTree();
console.log(tree.value)
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(9))
// console.log(tree)
// console.log(JSON.stringify(traverse(tree.root)))
//   9
// 4    20
//1  6  15  170

