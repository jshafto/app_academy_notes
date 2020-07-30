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

// a good example of an O(n!) algorithm would be
// getting every possible subset of any length from
// a set of items
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
- merge sort: `O(n*log(n))` time complexity, `O(n)` space complexity (or `O(n*log(n))` if we do it by keeping track of indices rather than allocating a new array each time)
- quick sort: `O(n*log(n))` time complexity on average, `O(n`<sup>`2`</sup>`)` worst case. however, worst case is rare. space complexity `O(n)` naively, but can be tweaked to be `O(log(n))`
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
function bubble(array) {
  let noSwaps = false;
  while (noSwaps === false) {
    noSwaps = true;
    for (let i = 1; i < array.length; i ++) {
      if (array[i - 1] > array[i]) {
        let swap = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = swap;
        noSwaps = false;
      }
    }
  }
  return array;
}
```
### Explain the complexity of and write a function that performs selection sort on an array of numbers.
```javascript
function selection(list) {
    for(let i = 0; i < list.length; i++) {
        let min = i;
        for(let j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
    return list;
}
```
### Explain the complexity of and write a function that performs insertion sort on an array of numbers.
```javascript
function insertion(list) {
    for (let i = 1; i < list.length; i ++) {
        let valueToInsert = list[i];
        let holePosition = i;
        while (holePosition > 0 && list[holePosition-1] > valueToInsert) {
            list[holePosition] = list[holePosition-1];
            holePosition = holePosition -1;
        }
        list[holePosition] = valueToInsert;
  }
}
```
### Explain the complexity of and write a function that performs merge sort on an array of numbers.
```javascript
function mergeTwo(array1, array2) {
  let result = [];
  while (array1.length > 0 && array2.length > 0) {
    if ( array1[0] > array2[0] ) {
      result.push(array2.shift());
    } else {
      result.push(array1.shift())
    }
  }

  while (array1.length > 0) result.push(array1.shift());
  while (array2.length > 0) result.push(array2.shift());

  return result;
}

function merge(array) {
  if ( array.length <= 1 ) return array;
  let l1 = array.slice(0, Math.floor(array.length / 2));
  let l2 = array.slice(Math.floor(array.length / 2));

  l1 = merge( l1 );
  l2 = merge( l2 );

  return mergeTwo( l1, l2 );
}
```
### Explain the complexity of and write a function that performs quick sort on an array of numbers.
```javascript
function quickSort(array) {
  if(array.length <= 1) return array;
  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}
```
### Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.
```javascript
function binarySearch(list, target) {
  if (list.length === 0) return false;
  let slicePoint = Math.floor((list.length) / 2);
  let leftHalf = list.slice(0, slicePoint);
  let rightHalf = list.slice(slicePoint+1);

  if (target < list[slicePoint]) {
    return binarySearch(leftHalf, target);
  } else if (target > list[slicePoint]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }

}
```

## Lists, Stacks, and Queues
- Abstract data types have structure, properties, and behavior that exist without respect to the details of the language or implementation
- Different ADTs have different qualities that lend themselves to solving different types of problems
- Examples include
    - Sets: collection with no repeated elements, can add, remove, or check whether an element is present
    - Maps (i.e. dictionaries): specific input yields specific output. can get the value associated with a given key, can set a value for a key, can delete the key value pair given a key
    - also lists, stacks, queues
### Explain and implement a List.
- every element can be accessed
- size can change when elements are added and removed
- operations:
    - insert at: add an element at a specific index (this will shift the index of subsequent elements)
    - remove at index: removes the element at a specific index (this will shift the index of subsequent elements)
    - get at index: returns the value of the element at a given index
```javascript
// example: linked list

// properties
// head
// tail
// length

// methods:
// addToTail
// addToHead
// insertAt
// removeTail
// removeHead
// removeFrom
// contains
// get
// set
// size
```
### Explain and implement a Stack.
- Data is always last in, first out (like a literal stack of papers, or plates at a buffet line)
- Operations
    - push: adds an element to the top of the stack
    - pop: removes the top element of the array and returns it
    - (optional) peek: gets value at the top element without returning it
### Explain and implement a Queue.
- Data is always first in, first out (like people waiting in a line, the one that's been waiting the longest goes first)
- Operations
    - enqueue: adds element to the end of the queue
    - dequeue: gets and removes element from the front of the list
    - (optional) peek: gets the value at the front of the queue without removing it
## Graphs and Heaps
### Explain and implement a Heap.
### Explain and implement a Graph.
