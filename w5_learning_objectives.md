# Week 5 Learning Objectives

## npm Lesson Learning Objectives

### Explain what "npm" stands for.
- node package manager
  - most widely-used package manager for all JavaScript packages, including backend dependencies, frontend dependencies, command-line tools
  - npm refers command line interface and registry
- package managers bundle up useful collections of code and distribute them
  - often includes services like:
    - versioning
    - change management
    - tracking use
    - build pipelines
    - dependency management
### Explain the purpose of the `package.json` file and `node_modules` directory.
- the `package.json` file contains metadata, scripts, and dependencies
  - a set of suggestions, not requirements for running your project
  - you can make changes manually (with proper syntax)
- the `node_modules` directory contains all dependencies for this project, and also all of the dependencies of the dependencies
  - don't track the `node_modules` folder in git (use `gitignore` file)
  - the lockfile (`package-lock.json`) acts as a manifest for what's in the `node_modules` directory
### Given multiple choices, identify the difference between npm's `package.json` and `package-lock.json` files.
- `package.json` is a list of suggested packages
  - `package-lock.json` wasn't used in earlier versions of npm, so some older npm packages might only have a `package.json` file. in that case, installing the package will install all the dependencies in `package.json`
- `package-lock.json` contains exact details about installed dependencies
  - represents exact reproducible npm environment
  - don't make any manual changes, npm install will handle it
### Use `npm --version` to check what version is currently installed and use npm to update itself to the latest version.
- `npm install -g npm@latest` to update to latest version
### Use `npm init` to create a new package and `npm install` to add a package as a dependency. Then use `require` to import the module and utilize it in a JavaScript file.
- `npm init` sets up current directory for npm
  - after you run it, you are prompted to supply fields for `package name`, `version`, `description`,  `entry-point`, `test command`, `git repository`, `keywords`, `author`
  - `npm init --y` will initiate to default values without the setup utility
  - creates a `package.json` file
- `npm install` without any further arguments will install all the dependencies listed in the lockfile
- use `require('<name-of-package>')`
### Given a package version number following the MAJOR.MINOR.PATCH semantic versioning spec that may include tilde (`~`) and caret (`^`) ranges, identify the range of versions of the package that will be compatible.
- semantic versioning (semver): major.minor.patch (e.g. 1.0.0)
  - major changes are breaking—they are incompatible with other major versions. (analogous to creating a sequel to a videocame)
  - minor changes may represent new features. shouldn't break anything, but programs that depend on it may need to tweak. (analogous to adding a new level to a videogame)
  - patch changes are typically bug fixes (analogous to fixing a typo in the videogame instructions)
- for semver ranges in `package.json`
  - `*` indicates "whatever the latest version is".
  - `>1.0.0` indicates "any version above major version 1".
  - `^1.0.0` indicates "any version in the 1.x.x range".
  - `~1.0.0` indicates "any patch version in the 1.0.x range".
  - `1.0.0` indicates "exactly version 1.0.0".
### Explain the difference between a dependency and a development dependency.
- a dependency is a package that is needed to successfully run the project in production
- a development dependency is necessary for doing development work on the project (tools for testing and building the application)
    - run `npm install --save-dev` to save as a development dependency
### Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.
- run `npm install` in the repository after cloning it to your computer
### Use `npm uninstall` to remove a dependency.
- `npm uninstall <package-name>`
- this will remove the package and all of its dependencies from the node_modules folder
### Use `npm update` to update an out-of-date dependency.
- `npm update <package-name>`
- `npm update` with will update all dependencies, while respecting each dependency's semver (from the `package.json` file)
- if there is a new version that is not included in the semver, you can use `npm install <package-name>@<version>` to reintall the dependency and update the semver.
    - `npm install <package-name>@latest` will get the latest version
### Given a problem description, use the npm registry to find a reputable package (by popularity and quality stats) that provides functionality to solve that problem.
- go to [the registry](https://www.npmjs.com/)
- check out popularity, quality, whether it's being maintained, read description etc.
### Given a package with vulnerabilities due to outdated dependency versions, use `npm audit` to scan and fix any vulnerabilities.
- `npm audit` will check the project's dependencies for any reported security vulnerabilities
- `npm audit fix` will attempt to fix any security vulnerabilities
    - will only work if a fix is available in a minor or patch version of the pack
### Write and run an npm script.
- npm lets you define and run scripts to execute a series of commands you might normally run in the terminal (these go in the `package.json` file)
    - e.g. `start` script is used to define the command to start your application. use `npm start` to run
    - `test` script to run mocha
    - for scripts that aren't predefined, use `npm run <script-name>`
```javascript
{
  "scripts": {
    "start": "node index.js",
    "test": "mocha --watch",
    "watch": "nodemon index.js"
  }
}
```


## Recursion Lesson Learning Objectives

### Given a recursive function, identify what is the base case and the recursive case.
- base case happens once
- recursive case contains recursive step that allows it to call itself but one step closer to the base case
### Explain when a recursive solution is appropriate to solving a problem over an iterative solution.
- short version (from the reading): "Problems with complex or large inputs may be good candidates for recursion."
- longer version: most problems can be solved most effectively with an iterative solution, however, problems with inputs that are large, unpredictable, or unusually complex can sometimes have a more elegant recursive solution. more specifically, there are certain data structures and mathematical problems that exhibit self-similarity: that is, they can be broken down into smaller pieces that can be solved using the same algorithm as the larger problem. in these cases, the solution may be best implemented recursively.
### Write a recursive function that takes in a number, n, argument and calculates the n-th number of the Fibonacci sequence.
  - base case: n is 0 or 1
  - recursive step: n - 1
```javascript
const fib = num => (num === 0 || num === 1) ? 1 : fib(num - 1) + fib(num - 2);
```
### Write a function that calculates a factorial recursively.
  - base case: n is 1
  - recursive step: num - 1
```javascript
const factorial = num =>  (num === 1) ? 1 : num * factorial(num-1);
```
### Write a function that calculates an exponent (positive and negative) recursively.
  - base case: exp is 0
  - recursive step: when positive n - 1, when negative n + 1
```javascript
const expo = (num, exp) => {
    if (exp === 0) return 1;
    if (exp > 0) return expo(num, exp - 1) * num;
    if (exp < 0) return expo(num, exp + 1) / num;
}
```
### Write a function that sums all elements of an array recursively.
  - base case: arr length is 0
  - recursive step: arr.pop()
```javascript
const arrSum = arr => (arr.length === 0) ? 0 : (arr.pop() + arrSum(arr));
```
### Write a function that flattens an arbitrarily nested array into one dimension.
  - base case: element is not an array
  - recursive step: spread array
```javascript
const flatten = arr => {
    let flatArr = [];
    arr.forEach(el => {
        if (Array.isArray(el)) {
            flatArr.push(...flatten(el));
            console.log(flatArr);
        } else {
            flatArr.push(el);
        }
    });
    return flatArr;
}
```
  - base case: array length is 0
  - recursive step: spread head and tail of array
```javascript
// more authentically recursive strategy
const flatten = arr => {
    if (arr.length === 0) return [];
    let [head, ...tail] = arr;
    return (Array.isArray(head)) ? [...flatten(head), ...flatten(tail)] : [head, ...flatten(tail)];
}
```
### Given a buggy recursive function that causes a RangeError: Maximum call stack and examples of correct behavior, debug the function.
- check for base case and recursive step
- make sure that base case exists and will always be reached

## Classes Lesson Learning Objectives

### Define a constructor function using ES5 syntax.
- the name of the constructor is capitalized
- the function does not explicitly return a value
- within the body, the `this` keyword references the newly crea
```javascript
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}
```
- when you actually invoke it:
    - new empty object is created
    - new object's prototype is set to the object referenced by the constructor function's `prototype` property
    - the contructor function is called and `this` is bound to the new object
    - the new object (instance of class) is returned
```javascript
const fellowshipOfTheRing = new Book(
  'The Fellowship of the Ring',
  'The Lord of the Rings',
  'J.R.R. Tolkien');

console.log(fellowshipOfTheRing); // Book { title: 'The Fellowship of the Ring', ... }
```
### Define a method on the prototype of a constructor function.
- instance methods are defined on the constructor function's prototype method
```javascript
// given this constructor function
function Book(title, series, author) {
 this.title = title;
 this.series = series;
 this.author = author;
}
// define a method on the prototype like this
Book.prototype.getInformation = function() {
 return `${this.title} by ${this.author}`;
};
```
### Declare a class using ES6 syntax.
```javascript
class Book {
 constructor(title, series, author) {
   this.title = title;
   this.series = series;
   this.author = author;
 }
```
### Define an instance method on a class (ES6).
- these methods are the ones that get used on individual instances
```javascript
class Book {
 constructor(title, series, author) {
   this.title = title;
   this.series = series;
   this.author = author;
 }
// the method is defined directly within the class declaration
 getInformation() {
   return `${this.title} by ${this.author}`;
 }
}
```
### Define a static method on a class (ES6).
- use `static` keyword
```javascript
class Book {
 constructor(title, series, author) {
   this.title = title;
   this.series = series;
   this.author = author;
 }

 static getTitles(...books) {
   return books.map((book) => book.title);
 }
}
```
### Instantiate an instance of a class using the new keyword.
```javascript
let myBook = new Book("Javascript: the Good Parts", null, "Douglas Crockford");
```
### Implement inheritance using the ES6 extends syntax for an ES6 class.
```javascript
class Book extends CatalogItem {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}
```
### Utilize the super keyword in a child class to inherit from a parent class.
```javascript
class Book extends CatalogItem {
  constructor(title, series, author) {
    super(title, series);
    this.author = author;
  }
}
```
### Utilize `module.exports` and `require` to import and export functions and class from one file to another.
- to export, add the desired function(s) or class(es) to the `module.exports` property
```javascript
module.exports.functionOrClassName1 = functionOrClassName1;
module.exports.functionOrClassName2 = functionOrClassName2;
// OR
module.exports = {
  functionOrClassName1,
  functionOrClassName2
};
```
- to import a local module, use `require()` with a path to the module
  - module name is the name of the file without the .js file extension
```javascript
const name = require('./name')
```
## Object-Oriented Programming Objectives
### Object-Oriented Programming (OOP) is one of the most popular programming paradigms. Additionally, OOP can help beginning engineers learn how to breakdown complex problems.

### You will be tested on this material by completing a guided project using the following principles. You will also answer questions about their definitions.
#### The three pillars of object-oriented programming
- encapsulation
    - hides the complexity of internal mechanisms behind an easy to use interface
- polymorphism
    - the ability to use the methods of a parent class on an object from a child class, or to interact with the child instance as though it was an instance of the parent class
- inheritance
    - the ability to gain behavior and data from parent class
      - javascript has implementation inheritance (data and methods defined on a parent class are available on objects created from classes that inherit from that parent class)
      - javascript achieves this using prototypal inheritance:
        - when you write code that accesses a method/property on an object, if JavaScript doesn't find it, it will search the prototype for that method/property. if it's not there, it will search that object's prototype's prototype until it reaches Object. if it doesn't find it on Object, then you'll get error or undefined
        - critically, when JavaScript uses a property/method from a prototype that it found through prototypal inheritance, the `this` property still points to the original object on which the first call was made.
- abstraction (secret pillar 4) (not from the readings)

#### ~~The SOLID principles~~
#### ~~How to apply the Law of Demeter~~
