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
- Identify when to use . vs [] when accessing values of an object
   - dot syntax `object.key`
      - easier to read
      - easier to write
      - cannot use variables as keys
      - keys cannot begin with a number
   - bracket notation `object["key]`
      - allows variables as keys
      - strings that start with numbers can be use as keys
- Write an object literal with a variable key using interpolation
- Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object
- Utilize Object.keys and Object.values in a function
```javascript
let printValues = function(obj) {
   for (let key in obj) {
      let value = obj[key];
      console.log(value);
   }
}
```

- Iterate through an object using a `for in` loop
- Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments
- Use ...spread syntax for Object literals and Array literals
- Destructure an array to reference specific elements
- Destructure an object to reference specific values
- Write a function that accepts a array as an argument and returns an object representing the count of each character in the array

## Pair Programming Lesson Learning Objectives
Below is a complete list of the terminal learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

- Differentiate between the "Driver" and "Navigator" roles in a pair programming session.
- Describe at least three benefits of effective pair programming.
- Demonstrate empathetic communication and be able to explain the meaning of "You are not your code".
- Identify negative interactions during a pair programming session.
- Identify the exact steps of a/A's pair programming process.
- Describe the importance of pair programming competency while interviewing for jobs.


## Callbacks Lesson Learning Objectives


- Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.
- Given a code snippet containing an anonymous callback, a named callback, and multiple `console.log`s, predict what will be printed
- Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
- Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#map`.
- Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#filter`.
- Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.



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
