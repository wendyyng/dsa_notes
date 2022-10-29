//Section 11: DS Graphs
//eg. family trees, networks
//Node (Vertex), Edge
//Graphs
//Trees is a kind of graphs

//Types of Graphs
//Directed and Undirected Graphs - describe traffic flow
//Directed: one direction, one way street, arrow, eg. more like Twitter
//Undirected: eg. FaceBook

//Weighted and Unweighted graphs
//Weighted: Values applied to the edges, eg. Google maps: find shortest paths
//Cyclic - vertices connected in a circular fashion - popular in weighted graphs, Acyclic - can't do that
//Directed Acyclic Graphs - go in one direction

//Graph Data
//Edge List
//Simply show the connections:
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

//Adjacent List
const graph2 = [[2], [2,3], [0,1,3], [1,2]]
// 2 - 0
// /\
//1 - 3

//Adjacent Matrix
const graph3 = [
  [0, 0, 1, 0], //0
  [0, 0, 1, 1], //1
  [1, 1, 0, 1], //2
  [0, 1, 1, 0]  //3
]

//Exercise: Graph Implementation
class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    //Object, quickly find items and see connections
    this.adjacentList = {
      //0 : [1,2]
    }; 
  } 
  addVertex(node)  {
    if(!this.adjacentList[node]){
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  } 
  addEdge(node1, node2) { 
    //undirected Graph 
    if(this.adjacentList[node1] && this.adjacentList[node2]){
      this.adjacentList[node1].push(node2)
      this.adjacentList[node2].push(node1)
    }
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5


//Graphs Review
//Pros: Relationships
//Cons: Scaling is hard
//Never really need to implement your own graph in production