//Section 14: Algorithms: Searching + BFS + DFS

//Searching/Traversal
//Linear Search
//Binary Search
//Depth First Search
//Breadth First Search

//Linear Search
//Best Case O(1)
//Worst Case O(n)
//JS: indexOf, findIndex, find, includes

//Binary Search
//Sorted List - if it's sorted we can do better then O(n)
//Start from the middle
//Like a phonebook
//Creating Binary Search Tree
//Divide and Conquer O(log n) time complexity
//Traversal: finding node to node, make sure that you touch every single nodes

//Graph + Tree Traversals
//traversing ~ visiting every node O(n)
//operation on the same node
//Tree Traversal O(n) or Graph Traversal?
//Breadth Firt Search (BFS) or Depth First Search(DFS) - O(n) for both

//Breadth First Search/Traversal
//Start with root 
//move left or right, level by level, until you find the node you're looking for or the tree ends
//Uses additional memory: need to track every nodes and the children in order

//Depth First Search/Traversal
//Follows one branch of the tree down as many levels as possible until the target node is found or the end is reached
//Lower memory requirements
//Like walking through a maze...

//BFS vs DFS
//What types of traversal to do?
//Same time complexity

//BFS: Shortest Path, Closer Nodes but More Memory
//Good if we have the additonal info of a node, eg. likely to be in the upper level of a tree, then BFS is better because it will search through the closest nodes first 

//DFS: Less Memory, Does Path Exist? (to a source node to the target node) but Can Get Slow - if tree will be very deep
// better if the node is likely to be in the lower level of a tree

// I wanted to add a quick note: You still have a lot to learn about these two traversal algorithms. I introduced some new topics that weren't fully explained (like space complexity and memory usage) in the previous video which we will get to when we start coding things. However, I have structured it this way so that you understand why these two algorithms are used as we go through the next couple of videos. I will intrude the bottom link later on as well when you have more of an understanding of how these algorithms work, but if you're extra curious, you can see this resource for an explanation of the difference in memory usage. If you skip this, I will still provide it in the later parts of this section:

// https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr




//Exercise: BFS vs DFS
//If you know a solution is not far from the root of the tree:
//BFS - search through closest nodes first 

//If the tree is very deep and solutions are rare: 
//BFS - DFS will take long (use recursive function)

//If the tree is very wide:
//DFS (BFS will need too much memory - keep track of the nodes in the current level - called queue)

//If solutions are frequent but located deep in the tree:
//DFS

//Determining whether a path exists between two nodes:
//DFS

//Finding the shortest path:
//BFS


//breadthFirstSearch()

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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
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
  breathFirstSearch() {
    let currentNode = this.root;
    let list = []
    let queue = []
    //Add the root to the queue
    queue.push(currentNode);

    while(queue.length > 0) {
      //Shift removes the first item of the queue
      currentNode = queue.shift();
      list.push(currentNode.value)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    
    }
    return list
    
  }
  //Recursive Way
  breadthFirstSearchR(queue, list){
    if(!queue.length) {
      return list;
    }
     let currentNode = this.queue.shift();
      list.push(currentNode.value)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    return breadthFirstSearchR(queue, list);
  }
  DFTPreOrder(currentNode, list) {
    return traversePreOrder(this.root, []);
  }
  DFTPostOrder(){
    return traversePostOrder(this.root, []); 
  }
  DFTInOrder(){
    return traverseInOrder(this.root, []);
  } 
}

//     9
//  4     20
//1  6  15  170
//PreOrder - start from parent and grab children from left to right - 9,4,1,6,20,15,170
//Useful to create a tree
function traversePreOrder(node, list){
  list.push(node.value);
  if(node.left) {
    traversePreOrder(node.left, list);
  }
  if(node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
//     9
//  4     20
//1  6  15  170
//InOrder - 1,4,6,9,15,20,170
function traverseInOrder(node, list){
  if(node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if(node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
//     9
//  4     20
//1  6  15  170
//PostOrder - go all the way down and then the parent
//1,6,4,15,170,20,9
function traversePostOrder(node, list){
  if(node.left) {
    traversePostOrder(node.left, list);
  }
  if(node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.remove(170)
JSON.stringify(traverse(tree.root))
console.log(tree.breathFirstSearch())
console.log(tree.breathFirstSearch([tree.root], []))

// console.log('BFS', tree.breadthFirstSearch());
// console.log('BFS', tree.BreadthFirstSearchR([tree.root], []))
console.log('DFSpre', tree.DFTPreOrder());
console.log('DFSin', tree.DFTInOrder());
console.log('DFSpost', tree.DFTPostOrder());


//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//Depth First Search/Traversal
//PreOrder, InOrder, PostOrder

//     9
//  4     20
//1  6  15  170

//InOrder - 1,4,6,9,15,20,170

//PreOrder - start from parent and grab children from left to right - 9,4,1,6,20,15,170
//Useful to create a tree

//PostOrder - go all the way down and then the parent
//1,6,4,15,170,20,9


//BFS vs DFS
//https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr


// [2,1,3]
var isValidBST = function(root) {
function helper(root, min, max){
         if (!root){
             return true
         }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)){
            return false
        }
        
        return helper(root.left, min, root.val) && helper(root.right, root.val, max)
    }

    return helper(root, null, null)
 
};

//Graph Traversals
//Tree - a type of graphs
//DFS - facebook/linkedin - friend recommendations
//BFS - search the book that has the closest relation to the last book that we bought
//eg. recommendation engines
//https://visualgo.net/en/dfsbfs?slide=1

//BFS - Shortest path, Closer Nodes but More Memory - most related items on amazon, closest friends, recommendations, peer to peer engines

//DFS - if something exists, like solving a maze
//Recursion is used, each steps is smller then the other
//Does the path exists?, use less memory, downside: deep graph - can be slow

//Shotest Path eg. Google maps
//Dijkstra + Bellman-Ford Algorithms
//Not going to implement this in the interview
//Figure out a shortes path problem
//Spacial Case: 
//BFS - each jump to another node of a graph, each path has the same weight


//Directed/Weighted
//eg. weighted graphs have numbers associated to the their edges
//BFS, DFS - don't care what kind of weight an edge pass
//Ans: Dijkstra + Bellman-Ford Algorithms - find the shortest paths between two nodes on a weighted graph
//https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e

//Bellman Ford algorithm is very effective at solving the shortest path over Dijkstra's algorithm because it can accommodate negative weights
//***Negative weights - use Bellman Ford - can take long time run O(n^2) - not efficient
//***No Negative weights - use Dijstra's algorithms - more efficient and faster but can't accommodate negative weights

//Review
//Searching + Traversal Review
//Linear Search - linear time O(n)
//Binary Search - dividing tree in half 
//DFS - Go as deep as possible
//BFS - Level by level

//Array: search - is it sorted? if yes divide and conquer Binary serach O(log N)