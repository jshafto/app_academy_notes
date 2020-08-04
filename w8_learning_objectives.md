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
- a binary tree is composed of nodes and edges—it is a subtype of graph
- a binary tree has no cycles—there is no path that begins and ends at the same node
- a binary tree has a single parent node or "root" from which all other nodes can be accessed
- a binary tree is binary in that each node can have no more than two children
- terminology:
    - parent nodes - nodes with children
    - leaf nodes - nodes without children
    - sibling nodes - nodes with the same parent
    - subtree - any non-root node and all of its children
    - breadth first search - access all the nodes at a given level before descending
    - depth first search

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
## Graphs
## Network Knowledge
