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
- the semver `^3.0.0` means that any minor patch versions for the major version `3` will be acceptible
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
- `npm update` with will update all dependencies, while respecting each dependency's semver (from the `package.json file)
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
