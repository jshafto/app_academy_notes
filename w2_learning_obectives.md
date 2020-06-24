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
   - put it in brackets to access the value of the variable, rather than just make the value that string
```javascript
let a = "a";
let obj = {a: "letter_a", [a]: "letter b"}
```
- Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object
   - can also use `"key" in object` syntax (returns boolean)
   - keys should be unique strings
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

// in a function call
let sayHello = function({name}) {
   console.log("Hello, " + name); // "Hello Wilfred"
}

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
   - when remote:
      - only code editor and your vid program open
      - vscode liveshare??? tell me more

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
      mapped = callback(array[i], i, array);
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
         filtered.push(array[i], i, array);
      }
   }
 }
```
- Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of `Array#every`.
```javascript
let myEvery = function(array, callback) {
   for (let i = 0; i < array.length; i ++) {
      if (!callback(array[i], i, array)) {
         return false
      }
   }
   return true;
}
// with arrow function syntax
let myEvery = (array, callback) => {
   for (let i =0; i < array.length; i ++) {
      if (!callback(array[i])) {
         return false
      }
   }
   return true;
}
}
```



## Scope Lesson Learning Objectives

- Identify the difference between `const`, `let`, and `var` declarations
   - `const` - cannot reassign variable, scoped to block
   - `let` - can reassign variable, scoped to block
   - `var` - outdated, may or may not be reassigned, scoped to function
   - variables always evaluate to value it contains regardless of how it was declared
- Explain the difference between `const`, `let`, and `var` declarations
   - `var` is function scoped—so if you declare it anywhere in a function, the declaration (but not assignement) is "hoisted"
      - so it will exist in memory as "undefined" which seems bad and unpredictable
      - `var` will also allow you to redeclare a variable, while let will raise a syntax error. you shouldn't be able to do that!
      - `const` won't let you reassign a variable, but if it points to a mutable object, you will still be able to change the value by mutating the object
      - block-scoped variables allow new variables with the same name in new scopes
      - block-scoped still performs hoisting of all variables within the block, but it doesn't initialize to the value of `undefined` like `var` does, so it throws a specific reference error if you try to access the value before it has been declared
      - if you do not use `var` or `let` or `const` when initializing, it will be declared as global—THIS IS BAD
- Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining
   - scope of a program means the set of variables that are available for use within the program
   - global scope is represented by the `window` object in the browser and the `global` object in Node.js
      - global variables are available everywhere, and so increase the risk of name collisions
   - local scope is the set of variables available for use within the function
      - when we enter a function, we enter a new scope
      - includes functions arguments, local variables declared inside function, and any variables that were already declared when the function is defined (hmm about that last one)
   - for blocks (denoted by curly braces `{}`, as in conditionals or `for` loops), variables can be block scoped
   - inner scope does not have access to variables in the outer scope
      - scope chaining—if a given cariable is not found in immediate scope, javascript will search all accessible outer scopes until variable is found
      - so an inner scope can access outer scope variables
      - but an outer scope can never access inner scope variables
- Define an arrow function
```javascript
let arrowFunction = (param1, param2) => {
   let sum = param1 + param2;
   return sum;
}

// with 1 param you can remove parens around parameters
let arrowFunction = param => {
   param ++;
   return param;
}

// with 1 liner, you can use implied return
let arrowFunction = param => {
   param ++;
}

// you don't have to assign to variable, can be anonymous
param => param++;
```
- Given an arrow function, deduce the value of `this` without executing the code
   - arrow functions are automatically bound to the context they were declared in
   - unlike regular function with use the context they are invoked in (unless they have been bound using `Function#bind`)
- Implement a closure and explain how the closure effects scope
   - a closure is " the combination of a function and the lexical environment within which that function was declared"
      - alternatively, "when an inner function uses or changes variables in an outer function"
   - closures have access to any variables within their own scope + scope of outer functions + global scope — the set of all these available variables is "lexical environemnt"
   - closure keeps reference to all variables **even if the outer function has return**
      - each function has a private mutable state that cannot be accessed externally
      - if you call the same function more than once, you are not totally starting with a blank slate necessarily?
      - closures can allow you to pass down arguments to helper functions without explicitly passing them to that helper function
      - if a variable exists in the scope of what could have been accessed by a function (e.g. global scope, outer function, etc), does that variable wind up in the closure even if it never got accessed? yes—but in separate scopes. each scope has a pointer to the next s
      - if you change the value of a variable (e.g. i++) you will change the value of that variable in the scope that it was declared in
      - question: does the scope exist as part of the function object? (maybe the context takes care of this)


```javascript
// what the hell
// i need to think about this
function createCounter() {
   // in this function i am making a function that
   // starts a new counter at 0
   // but when you use this function to create that new counter,
   // each new counter you create will have the same, like
   // internal state everytime it's accessed
   // you can't access that state from outside of the function
   let count = 0;
   return function() {
      count ++;
      return count;
   }
}

let counter = createCounter();
console.log(counter()); //=> 1
console.log(counter()); //=> 2
// so counter variable is a closure, in that
// it contains the inner count value that was
// initialized by the outer createCounter() function
// count has been captured or closed over

// this state is private, so if i run createCounter again
// i get a totally separate count that doesn't interact
// with the previous one and each of the new functions
// will have their own internal state based on the
// initial declaration in the now-closed outer function

let counter2 = createCounter();
console.log(counter2()); // => 1

// okay but what if i set one function equal to the other?
// does it get the old one's internal state/closure?

let counter3 = counter2;
console.log(counter3()); //=>
// so yeah i think this fundamentally speaks to the
// i dunno - mutability of the functions?
// functions are a reference? maybe this is connected?
// when you pass a function around you are passing
// around the whole closure
// lmao
```
- Define a method that references `this` on an object literal
   - when we use `this` in a method it refers to the object that the method is invoked on
      - it will let you access other pieces of information from within that object, or even other methods
      - method style invocation -  `object.method(args)` (e.g. built in examples like `Array#push`, or `String#toUpperCase`)
- Utilize the built in `Function#bind` on a callback to maintain the context of this
   - when we call bind on a function, we get an exotic function back—so the context will always be the same for that new function
```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

let sayMeow = cat.purrMore;
console.log(sayMeow()); // TypeError: this.purr is not a function

// we can now use the built in Function.bind to ensure our context, our `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);

// we still *need* to invoke the function
boundCat(); // prints "meow"
```
   - bind can also work with arguments, so you can have a version of a function with particular arguments and a particular context. the first arg will be the context aka the `this` you want it to use. the next arguments will be the functions arguments that you are binding
      - if you just want to bind it to those arguments in particular, you can use `null` as the first argument (would you be able to rebind it if needed? could it still accept a `this  ` if you bound it that way??)
- Given a code snippet, identify what `this` refers to
   - important to recognize the difference between scope and context
      - scope works like a dictionary that has all the variables that are available within a given block, plus a pointer back the next outer scope (which itself has pointers to new scopes until you reach the global scope. so you can think about a whole given block's scope as a kind of linked list of dictionaries) (also, this is not to say that scope is actually implemented in this way, that is just the schema that i can use to understand it)
      - context refers to the value of the `this` keyword
   - the keyword `this` exists in every function and it evaluates to the object that is currently invoking that function
   - so the context is fairly straightforward when we talk about methods being called on specific objects
   - you could, however, call an object's method on something other than that object, and then this would refer to the context where/how it was called, e.g.
```javascript
let dog = {
   name: "Bowser",
   changeName: function () {
      this.name = "Layla";
  },
};

// note this is **not invoked** - we are assigning the function itself
let change = dog.changeName;
console.log(change()); // undefined

// our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

// instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```
   - CALLING SOMETHING IN THE WRONG CONTEXT CAN MESS YOU UP!
      - could throw an error if it expects this to have some other method or whatever that doesn't exist
      - you could also overwrite values or assign values to exist in a space where they should not exist
   - if you call a function as a callback, it will set `this` to be the outer function itself, even if the function you were calling is a method that was called on a particular object
```javascript
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

global.setTimeout(cat.purrMore, 5000); // 5 seconds later: TypeError: this.purr is not a function
```
   - we can use strict mode with `"use strict";` this will prevent you from accessing the global object with `this` in functions, so if you try to call `this` in the global context and change a value, you will get a type error, and the things you try to access will be undefined
