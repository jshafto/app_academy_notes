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
- from Colt Steel: 'an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases'
- big O should reflect performance with respect to input size and nothing else, so
    - simplify products by dropping the terms that don't depend on the size of the input
    - simplify sums by keeping only terms with the largest growth rate
### Order the common complexity classes according to their growth rate
1. constant time: `O(1)`
```javascript
// constant time example
// this function has a constant number of operations,
// regardless of the size of n
// even if there were a million operations, it would still be
// linear time as long as the number of operations stayed the
// same for any n
function constantTime(n) {
    n += 5;
    n -= 2;
    return n;
}
```
2. log: `O(log(n))`
```javascript
// log time example
// this iterative function is log time because the size of our
// iterative step doubles on each loop.
function logTime(n) {
    let i = 1;
    let arr = [];
    while (i < n) {
        arr.push(i);
        i *= 2;
    }
}
// in the recursive example, with each call to our function,
// the size of the input is halved
function logTimeRecursive (n) {
    // base case
    if (n <= 1) return;
    //recursive step
    logTimeRecursive(n/2)
}
```
3. linear: `O(n)`
```javascript
// for linear functions (both recursive and iterative)
// the step size is constant—usually we use a step size
// of 1, but any constant step size will be linear time
function linearTime (n) {
    for (let i = 0; i < n; i +=5) {
        console.log(`${i} cats`);
    }
}

function linearTimeRecursive (n) {
    if (n <= 1) return;
    console.log(`${n} cats`);
    linearTimeRecursive(n-5);
}
```
4. loglinear: `O(n*log(n))`
```javascript
// this is usually a combination of linear and log time operations
// e.g. if you nest a linear-time operation in a log-time loop
function logTime(n) {
    let i = 1;
    let arr = [];
    while (i < n) {
        arr.push(i);
        i *= 2;
        for (let j = 0; j < n; j +=5) {
            console.log(`${j} cats`);
        }
    }
}

// or recursively, if you have a log time helper function
// in a linear-time recursive function
function logLinearRecursion(n) {
    helperLogTime (x) {
        if (x === 1) return;
        console.log(x);
        helperLogTime(x/2)
    }
    helperLogTime(n);
    logLinearRecursive(n-1);
}
```
5. polynomial:  `O(n^C)`
```javascript
// the classic example would be nested for loops
function polynomialTime (n) {
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < n; j ++) {
            console.log(`${i}:${j}`)
        }
    }
}
// with recursion, this could involve nested recursive function
// calls where the step size is constant
// importantly, the inner function only calls itself once
// honestly i don't think this pattern is especially common
function polynomialRecursion(n) {
    if (n === 0) return;
    function helper (x) {
        if (x === 0) return;
        console.log(x)
        helper(x-1);
    }
    helper(n);
    polynomialRecursion(n-1);
}
```
6. exponential: `O(C^n)`
```javascript
// still trying to come up with an iterative
// exponential time function

// recursive version would be when a recursive function
// invokes itself multiple times
// fibonacci is an example of this
function expRecursive (n) {
    if (n === 0) return 'done!';
    expRecursive(n-1);
    expRecursive(n-1);

}
```
7. factorial: `O(n!)`
```javascript
// with factorial, the number of times the function
// branches (invokes itself) would also depend on n
// in a simple case, you could do that with a for loop
// can't think of an iterative example here either
function factorial (n) {
    if (n === 1) return;

    for (let i = 1; i <= n; i ++) {
        factorialTime(n-1);
    }
}
```
### Identify the complexity classes of common sort methods
- bubble sort: `O(n^2)` time complexity, `O(1)` space complexity
- selection sort: `O(n^2)` time complexity,, `O(1)` space complexity
- insertion sort: `O(n^2)` time complexity,, `O(1)` space complexity
- merge sort: `O(n*log(n))` time complexity, `O(n)` space complexity (or `O(1n)` if we do it by keeping track of indices rather than allocating a new array each time)
- quick sort: `O(n*log(n))` time complexity on average, `O(n`<sup>`2`</sup>`)` worst case. however, worst case is rare. space complexity `O(n*log(n))` usually, but can be tweaked to be `O(log(n))`
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
