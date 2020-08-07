# Week 8 Learning Objectives

## White-Boarding (Probably not on the exam)
- Why
    - tests how to solve real problems
    - how you perform in a  team
    - communication skills
    - coding skills
- steps
    - clarification/edge cases
        - talk about input/output without talking about code
    - formulate approach
    - pseudocode
    - code it
    - walk through example
    - time space complexity/ improvement
- strategies
    - bucketize
    - dynamic programming
    - mathematical properties
    - multiple pointers for same iteration

## Binary Trees
### Explain and implement a Binary Tree.
- defining characteristics of a binary tree:
    - is composed of nodes and edges—it is a subtype of graph
    - has no cycles—there is no path that begins and ends at the same node
    - has a single, top-level node or "root" from which all other nodes can be accessed through edges
    - it is "binary" in that each node can have no more than two children
- terminology:
    - parent nodes / internal nodes - nodes with children
    - leaf nodes - nodes without children
    - sibling nodes - nodes with the same parent
    - subtree - any non-root node and all of its children
    - path - a series of nodes that can be traveled through edges
    - breadth first search - access all the nodes at a given level before descending
    - depth first search - access all children of a given child before going on to its sibling
```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
preorder = root => (!root) ? [] : [root.val, ...preorder(root.left), ...preorder(root.right)];
inorder = root => (!root) ? [] : [ ...inorder(root.left), root.val, ...inorder(root.right)];
postorder = root => (!root) ? [] : [ ...postorder(root.left), ...postorder(root.right), root.val];
```
### Identify the three types of tree traversals: pre-order, in-order, and post-order.
- pre-order, in-order, and post-order are all depth first searches
- pre-order:
    - access value of node
    - recursively visit left subtree
    - recursively visit right subtree
- in-order:
    - recursively visit left subtree
    - access value of node
    - recursively visit right subtree
- post-order (explore each branch as far as you can before back tracking)
    - recursively visit left subtree
    - recursively visit right subtree
    - access value of node
### Explain and implement a Binary Search Tree.
- a binary search tree is a binary tree where
    - the left subtree contains values less than the root
    - the right subtree contains values greater than or equal to the root
    - the left subtree is a binary search tree
    - the right subtree is a binary search tree
- operations:
    - add
    - has
    - remove
        - if two children:
            - go to right child
            - go down the left branch as far as you can (this accesses the greatest node in the tree that is still less than the node that is being removed)
            - copy that value to the location of the node you want to remove and delete the leaf
        - if one child
            - remove the node and attach the single child in its place
        - no children
            - just remove leaf
- examples
- ![example binary search trees](./bsts.png)
```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// these are implemented without an actual BST class
// a "tree" is just a root TreeNode and all its children
// slight modifications would be necessary to make it a BST class method
insertIterative(val, root) {
    // if root is null, it means tree is empty
    // rather than inserting, you just need to make a new node
    // and return it
    if (!root) return new TreeNode(val);

    let current = root;
    let previous;
    // loop through to find the location where the node needs to be inserted
    while (current) {
        previous = current;
        if (val > current.val) current = current.right;
        else current = current.left;
    }
    if (val < previous.val){
        previous.left = new TreeNode(val);
    }
    else previous.right = new TreeNode(val);

    // finally return the root node—this is like returning the
    // whole tree
    return root;
}

function insertRecursive(val, root, prev = null, node = root) {
    // if the tree is empty, make a new node and return it
    if (!root) return new TreeNode(val);

    // if node is null, that means you've reached a point to insert at
    if (!node) {
        // insert as a child of the prev node, either on left or right
        // depending on value
        (val < prev.val) ?  prev.left = new TreeNode(val): prev.right = new TreeNode(val);

    } else if (val < node.val) {
        // if there is a node, call insert recursively on either the
        // left or right depending on the value
        return insertRecursive(val, root, node, node.left)
    } else {
        return insertRecursive(val, root, node, node.right)
    }
    // return the tree starting from the original root
    // this tree contains the node that has been inserted
    return root;
}

```
## Graphs
### Explain and implement a Graph.
- a graph is any collection of nodes and edges.
- graphs may have no root
    - so there is no guaranteed way to use a single node as a way to reference the complete structure
- graphs may have cycles
    - so there is no clearly defined parent/child relationship
- nodes may have any number of edges
```javascript
// Three ways to implement this graph:
// E <-> A  -> B
// ^     |     ^
// |     |    /
// |     v  /
// F     C
//       |
//       v
//       D

// one style of graph implementation uses nodes like we're used to
// but then you have no easy way to refer to the whole graph
class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}
let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// alternately, you can use a matrix
// - row index corresponds to the starting node
// - col index corresponds to ending node
// - bool value reflects whether or not an edge exists
// diagonal will be all true because you can think of
// every node as being connected to itself
// this implementation is convenient, but it takes
// quadratic space which isn't ideal
let matrix = [
/*          A       B       C       D       E       F   */
/*A*/    [true,  true,   true,   false,  true,   false],
/*B*/    [false, true,   false,  false,  false,  false],
/*C*/    [false, true,   true,   true,   false,  false],
/*D*/    [false, false,  false,  true,   false,  false],
/*E*/    [true,  false,  false,  false,  true,   false],
/*F*/    [false, false,  false,  false,  true,   true]
];

// finally adjacency lists
// simply and allow you to have a single object which references whole objects
let graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
};

```
### Traverse a graph
-
```javascript
// using GraphNode representation
// this might not always work because if you are only starting with a single node, you can only visit nodes accessible from that node
// use a visited list to prevent from getting caught in cycles
function depthFirstRecur(node, visited=new Set()) {
    // if this node has already been visited, then return early
    if (visited.has(node.val)) return;

    // otherwise it hasn't yet been visited,
    // so print it's val and mark it as visited.
    console.log(node.val);
    visited.add(node.val);

    // then explore each of its neighbors
    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor, visited);
    });
}

// using Adjacency List representation
// this allows you to ensure you eventually reach all nodes, even the ones that aren't accessible from the starting node

function depthFirst(graph) {
    let visited = new Set();

    for (let node in graph) {
        _depthFirstRecur(node, graph, visited);
    }
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });
}
```

## Network Models
### Describe the structure and function of network models from the perspective of a developer.
- reference models are high-level overviews of complex topics
- OSI reference model:
![network models image](./image-network-models.png)
- TCP/IP Model vs OSI reference model:
    - um
- Key Attributes:
    - fault tolerant - data transmitted between networks can be cached and resent
    - end-to-end - there is no single central system that could be taken down and would destroy the whole system
- packet switching - messages are split up into separate packets, delivered to a destination and reassembled



- physical layer
- network layer
- transport layer
## IP Suite
- IP (internet protocol) is responsible for the end-to-end nature of the internet (no single central system can take whole network down)
### Identify the correct fields of an IPv6 header.
- IPv6 is a newer protocol that allows more addresses

### Distinguish an IPv4 packet from an IPv6.
- IPv6
    - uses 8 header fields and starts with  version identifier 0110
    - uses 128 bits, 8 colon-ed hexadecimal e.g. `2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859`

- IPv4
    - uses at least 13 fields, starts with version identifier 0100
    - composed of 4 octets (8-bit binary numbers). e.g. 192.18.1.1
### Describe the following subjects and how they relate to one another: IP Addresses, Domain Names, and DNS.
- DNS (domain name system) is a distributed approach to providing easily-understood names for internetworked devices. it allows us to look up a specific IP address by its domain.
    - domain refers to the
### Identify use cases for the TCP and UDP protocols.
- TCP (transmission control protocol): is reliable, connection-oriented, slow. it can guarantee that source and destination are identical, but it may be slower because of large headers and because it will resend packets
    - good for transferring files, visiting websites, streaming audio/video
- UDP (user datagram protocol: fast, connectionless, but potentially unreliable
    - good for VoIP, real-time video, gaming—anything where speed is more important than reliability
### Describe the following subjects and how they relate to one another: MAC Address, IP Address, and a port.
### Identify the fields of a TCP segment.
### Describe how a TCP connection is negotiated.
### Explaining the difference between network devices like a router and a switch.
- hub - "signal splitter". it duplicates data that it recieved and broadcasts it to all connected devices.
- switch -  "intelligent hub". it keeps track of mac addresses
    - flood - broadcast to all devices if the MAC address is not in its table
    - forward - pass data to specific device
    - filter
- router - connects separate networks to each other. maintains a routing table

## Network Tools
### Use traceroute to show routes between your computer and other computers.
### Use Wireshark to show inspect network traffic.
