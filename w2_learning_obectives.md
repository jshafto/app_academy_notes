# Week 2 Learning Objectives

## Running JS Locally Lesson Learning Objectives

- Match the commands `ls`, `cd`, `pwd` to their descriptions
   - `ls` lists contents of current directory
   - `cd` changes current directory
      - `cd ..` takes you up one level
      - `cd` alone takes you back home
   - `pwd` returns current directory
- Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.

- Use VSCode to create a folder. Within the folder create a .js file containing `console.log('hello new world');` and save it.
- Use node to execute a JavaScript file in the terminal



## Plain Old JS Object Lesson Learning Objectives

- Label variables as either Primitive vs. Reference
   - primitives: strings, booleans, numbers, null and undefined
      - primitives are immutable
   - refereces: objects (including arrays)
      - references are mutable
- Identify when to use `.` vs `[]` when accessing values of an object
   - dot syntax `object.key`
      - easier to read
      - easier to write
      - cannot use variables as keys
      - keys cannot begin with a number
   - bracket notation `object["key]`
      - allows variables as keys
      - strings that start with numbers can be use as keys
- Write an object literal with a variable key using interpolation
   - not clear what is meant by "interpolation"?
- Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object
- Utilize Object.keys and Object.values in a function
- Iterate through an object using a `for in` loop
```javascript
let printValues = function(obj) {
   for (let key in obj) {
      let value = obj[key];
      console.log(value);
   }
}
```
- Define a function that utilizes `...rest` syntax to accept an arbitrary number of arguments
```javascript
let myFunction = function(str, ...strs) {
   console.log("The first string is " + str);
   console.log("The rest of the strings are:");
   strs.forEach(function(str) {
      console.log(str);
   })
}
```
- Use ...spread syntax for Object literals and Array literals
```javascript
let arr1 = ["a","b","c"];
let longer =[...arr1, "d", "e"];
```
- Destructure an array to reference specific elements
```javascript
let array = [35,9];
let [firstEl, secondEl] = array;
console.log(firstEl); // => 35
console.log(secondEl); // 9
```
- Destructure an object to reference specific values
   - rule of thumb—only destructure values from objects that are two levels deep
```javascript
// with variable names that match keys
let obj = {name: "Wilfred", appearance: ["short", "mustache"]}
let { name, appearance } = obj;
console.log(name); // "Wilfred"
console.log(appearance); // ["short", "mustache"]

// with new variable names
let {name: myName, appearance: myAppearance} = obj;

console.log(myName); // "Wilfred"
console.log(myAppearance); // ["short", "mustache"]
```
- Write a function that accepts a array as an argument and returns an object representing the count of each character in the array
```javascript
let countedChars = function(arr) {
   let obj = {};
   arr.forEach(function(elem, ind) {
      // wasn't sure exacely what they meant by "count"
      // so i'm using index instead
      obj[elem] = ind;
   })
   return obj;
}
```


## Pair Programming Lesson Learning Objectives
Below is a complete list of the terminal learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

- Differentiate between the "Driver" and "Navigator" roles in a pair programming session.
   - driver is typing, according to navigator's directions
   - navigator is planning what gets typed and watching for errors
- Describe at least three benefits of effective pair programming.
   - can be more efficient—not the programming itself, but the debugging
   - less "lonely"—not just good emotionally, but unlikely to get bogged down or stuck
   - pair programmers are good communicators—can be useful in any teamwork context, as well as in interviews
- Demonstrate empathetic communication and be able to explain the meaning of "You are not your code".
   - apply criticism to the code—specifically what's happening, what's not working, rather than to what the person did wrong
   - "code-centric" focuses on outcomes and looks toward improvement, instead of assigning blame and enumerating negative consequences
   - emphasizes the team-based nature of success and failure
- Identify negative interactions during a pair programming session.
- Identify the exact steps of a/A's pair programming process.
   - partner up—new partner each time
   - check in
      - what are you pairing on?
      - for how long?
      - any appointments/scheduling conflicts?
      - assign starting driver & navigator
   - get coding
      - driver shares screen
      - pause timer for extended discussion/research
   - hand off
      - swap driver and navigator every 15 minutes
   - follow-up
      - recap accomplishments, what's left to do, leave notes about where you left off
- Describe the importance of pair programming competency while interviewing for jobs.
   - you may be expected to pair program/collaborate during job interviews
   - also improves communication about programming while doing it


## Callbacks Lesson Learning Objectives


- Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.
   - they can be stored in variables, passed as arguments to other functions, and serve as return value for a function
   - supports same basic operations as other types (strings, bools, numbers)
   - higher-order functions take functions as arguments or return functions as values
- Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed
- Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
```javascript
let greaterCB = function(val, callback1, callback2) {
   if (callback1(val) > callback2(val)) {
      return callback1(val);
   }
   return callback2(val);
}
```
- Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#map`.
```javascript
let myMap = function(array, callback) {
   let newArr = [];
   for (let i = 0; i < array.length; i ++) {
      mapped = callback(array[i]);
      newArr.push(mapped);
   }
   return newArr;
}
```
- Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`.
```javascript
let myFilter = function(array, callback) {
   let filtered = [];
   for (let i = 0; i < array.length; i ++) {
      if (callback(array[i])) {
         filtered.push(array[i]);
      }
   }
 }
```
- Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.
```javascript
let myEvery = function(array, callback) {
   for (let i = 0; i < array.length; i ++) {
      if (!callback(array[i])) {
         return false
      }
   }
   return true;
}
```



## Scope Lesson Learning Objectives

- Identify the difference between `const`, `let`, and `var` declarations
- Explain the difference between `const`, `let`, and `var` declarations
- Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
- Define an arrow function
- Given an arrow function, deduce the value of `this` without executing the code
- Implement a closure and explain how the closure effects scope
- Define a method that references `this` on an object literal
- Utilize the built in `Function#bind` on a callback to maintain the context of this
- Given a code snippet, identify what this refers to
