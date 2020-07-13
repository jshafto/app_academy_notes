# Week 5 Learning Objectives

## npm Lesson Learning Objectives

### Explain what "npm" stands for.
- node package manager
    - most widely-used package manager for all JavaScript packages, including backend dependencies, frontend dependencies, command-line tools
- package managers bundle up useful collections of code and distribute them
    - often includes services like:
        - versioning
        - change management
        - tracking use
        - build pipelines
        - dependency management
### Explain the purpose of the `package.json` file and `node_modules` directory.
- the `package.json` file is available in any project
### Given multiple choices, identify the difference between npm's `package.json` and `package-lock.json` files.
- ekjels
### Use `npm --version` to check what version is currently installed and use npm to update itself to the latest version.
- fsdfs
### Use `npm init` to create a new package and `npm install` to add a package as a dependency. Then use `require` to import the module and utilize it in a JavaScript file.
- `npm init` sets up current directory for npm
    - after you run it, you are prompted to supply fields for `package name`, `version`, `description`,  `entry-point`, `test command`, `git repository`, `keywords`, `author`
    - `npm init --y` will initiate to default values without the setup utility
- `npm install <name-of-package>`
- use `require('<name-of-package>')`
### Given a package version number following the MAJOR.MINOR.PATCH semantic versioning spec that may include tilde (`~`) and caret (`^`) ranges, identify the range of versions of the package that will be compatible.
- fksdjfks
### Explain the difference between a dependency and a development dependency.
- skdjfd
### Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.
- ksjkd
### Use `npm uninstall` to remove a dependency.
### Use `npm update` to update an out-of-date dependency.
### Given a problem description, use the npm registry to find a reputable package (by popularity and quality stats) that provides functionality to solve that problem.
### Given a package with vulnerabilities due to outdated dependency versions, use `npm audit` to scan and fix any vulnerabilities.
### Write and run an npm script.


## Recursion Lesson Learning Objectives

### Given a recursive function, identify what is the base case and the recursive case.
### Explain when a recursive solution is appropriate to solving a problem over an iterative solution.
### Write a recursive function that takes in a number, n, argument and calculates the n-th number of the Fibonacci sequence.
### Write a function that calculates a factorial recursively.
### Write a function that calculates an exponent (positive and negative) recursively.
### Write a function that sums all elements of an array recursively.
### Write a function that flattens an arbitrarily nested array into one dimension.
### Given a buggy recursive function that causes a RangeError: Maximum call stack and examples of correct behavior, debug the function.

## Classes Lesson Learning Objectives

### Define a constructor function using ES5 syntax.
### Define a method on the prototype of a constructor function.
### Declare a class using ES6 syntax.
### Define an instance method on a class (ES6).
### Define a static method on a class (ES6).
### Instantiate an instance of a class using the new keyword.
### Implement inheritance using the ES6 extends syntax for an ES6 class.
### Utilize the super keyword in a child class to inherit from a parent class.
### Utilize module.exports and require to import and export functions and class from one file to another.

## Object-Oriented Programming Objectives
### Object-Oriented Programming (OOP) is one of the most popular programming paradigms. Additionally, OOP can help beginning engineers learn how to breakdown complex problems.

### You will be tested on this material by completing a guided project using the following principles. You will also answer questions about their definitions.
- The three pillars of object-oriented programming
- The SOLID principles
- How to apply the Law of Demeter
