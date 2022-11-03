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

