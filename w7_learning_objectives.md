# Week 7 Learning Objectives

## GitHub Profile and Projects Objectives
### GitHub is a powerful platform that hiring managers and other developers can use to see how you create software.
- Participate in the social aspects of GitHub by starring repositories, following other developers, and reviewing your followers
- Use Markdown to write code snippets in your README files.
- You will craft your GitHub profile and contribute throughout the course by keeping your "gardens green"
- You will be able to identify the basics of a good Wiki entries for proposals and minimum viable products
- You will be able to identify the basics of a good project README that includes technologies at the top, images, descriptions and code snippets

## Big O Learning Objectives
- Big O notation lets us express the time complexity of an algorithm in terms of magnitude of the input, based on the number of operations
- from Colt Steel: 'an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases'
- big O should reflect performance with respect to input size and nothing else, so
    - simplify products by dropping the terms that don't depend on the size of the input
    - simplify sums by keeping only terms with the largest growth rate
### Order the common complexity classes according to their growth rate
1. constant time: `O(C)`
2. log: `O(log(n))`
3. linear: `O(n)`
4. loglinear: `O(n*log(n))`
5. polynomial:  `O(n`<sup>`C`</sup>`)`
6. exponential: `O(C`<sup>`n`</sup>`)`
7. factorial: `O(n!)`
### Identify the complexity classes of common sort methods
- bubble sort: `O(n`<sup>`2`</sup>`)` (average and worst case)
- selection sort: `O(n`<sup>`2`</sup>`)`
- insertion sort: `O(n`<sup>`2`</sup>`)`
- merge sort: `O(n*log(n))`
- quick sort: `O(n*log(n))` on average, `O(n`<sup>`2`</sup>`)` worst case
- binary search: `O(n*log(n))` (requires a sorted list)
### Identify complexity classes of code

## Memoization And Tabulation Learning Objectives
### Apply memoization to recursive problems to make them less than polynomial time.
- memoization allows us to trade time complexity for space complexity, for certain recursive problems that have "overlapping subproblem structure"
- to memoize
    - write non-memo version
    - add a memo object as additional arg
    - add a base case for when the value is stored in the memo
    - before you return, store the value in the memo
```javascript
// original function
function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
// memoization
let memo = {}
function fib(n) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

```
### Apply tabulation to iterative problems to make them less than polynomial time.
- tabulation also allows one to trade time complexity for space complexity, but with an iterative strategy (typically useful for same set of problems, though)
- to tabulate
    - create a table based on size of input
    - initalize values for the trivially small problems
    - iterate through remaining entries, using previous calculations
    - final answer is last entry in table

```javascript
function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

// version with O(1) space
function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [ secondLast, last ] = mostRecentCalcs;
    mostRecentCalcs = [ last, secondLast + last ];
  }

  return mostRecentCalcs[1];
}
```

## Sorting Algorithms
### Explain the complexity of and write a function that performs bubble sort on an array of numbers.
- bubble sort is a very simple sorting algorithm with typically poor performance.
- bubble sort takes quadratic time(`O(n`<sup>`2`</sup>`)`) both on average and in the worst case
```javascript
let bubble = arr => {
    for (let i = arr.length; i > 0; i --) {
        for (let j = 0; j < i; j ++) {
            if (arr[j]>arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
    return arr;
}
```
### Explain the complexity of and write a function that performs selection sort on an array of numbers.
### Explain the complexity of and write a function that performs insertion sort on an array of numbers.
### Explain the complexity of and write a function that performs merge sort on an array of numbers.
### Explain the complexity of and write a function that performs quick sort on an array of numbers.
### Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.

## Lists, Stacks, and Queues
### Explain and implement a List.
### Explain and implement a Stack.
### Explain and implement a Queue.

## Graphs and Heaps
### Explain and implement a Heap.
### Explain and implement a Graph.
