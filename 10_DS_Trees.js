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
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
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
// console.log(tree.value)
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(9);
// console.log(tree.lookup(9))
console.log(tree.root)
// console.log(JSON.stringify(traverse(tree.root)))
//   9
// 4    20
//1  6  15  170

//AVL Trees + Red Black Trees
//Most popular to balance trees
//Tree are always balanced
//Resources: AVL Trees + Red Black Trees
// auto-balancing of trees upon insertion
// https://replit.com/@aneagoie/Data-Structures-Trees#index.js
// AVL Trees:
// https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
// https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
// Red Black Trees:
// https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
// https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
// Technical details between the two here
// https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree





//Binary Heaps
// Every child belongs to a parent node that has a greater priority or value.
//Only two children to the node
//Max/Min Heap
//Every node on the top lavel has a greater value than every node on the next level
//lookup O(n)
//insert O(log N)
//delete O(log N)
//   101
// 72    46
// 2 45   5  1
//Great at doing comparative operations
//Data storage priority - sorting algorithms
//Worst Case: O(log n)
//Best Case: O(1)

//Memory Heap != Heap Data Structure
//Heap of memory - arbitrary location

//take up least amount of space as possible
//left to right insertion
//Can use array to implement

//Priority Queue
//Type of data where each has a priority
//Club: let vip go in first - higher priority
//lining up to an airplane - captain puts as a root node

//Binary Heaps
//Pros: Better than O(n)
//Priority
//Flexible Size
//Fast Insert
//Cons: Slow Lookup

//Trie/Tree
//Specialized tree used in searching, most of then with text
//Empty root node
//Big O O(length of Node)
//Space complexity: one location for prefix and children under it
//
