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
