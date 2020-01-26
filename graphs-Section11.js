// A graph is made up of vertices/nodes and edges/lines that connect those vertices
// A graph can be: directed | undirected
// A graph can be: weighted | unweighted
//    . (by assigning a weight to each edge, which represent numerical values associated with that connection)
// A graph can be: cyclic | uncyclic

// how to create a graph
// graphs are created on top of other data structures

// Example
//
//      2 ------ 0
//    /   \
//  1 ----  3

//Methods of creating graphs
//Edge List

/* const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

//Adjacent List
const graph = [[2], [2,3], [0,1,3], [1,2]]

//Adjacent Matrix
const graph = [
  [0, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
]

// creating the same with an object
const graph = {
  0: [0, 1, 0, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
} */

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
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
