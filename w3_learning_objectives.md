# Week 3 Learning Objectives
## Asynchronous JS Lesson Learning Objectives

- Identify JavaScript as a language that utilizes an event loop model
    - in an event loop model, items wait on the message queue until the call stack is empty.
    - once the call stack is empty, the front item gets put onto the call stack.
    - any functions that are called inside the function that is being executed on the call stack will be pushed onto the top of the call stack. once they return, they are popped off
    - while the call stack is busy, incoming events will be placed at the back of the message queue, so the messages will be executed in the order they were received
        - this is distinct from functions that are called inside of a function that is being executed on the call stack. those are already part of an ongoing process, so they do not have to wait in line
    - there is only one message queue, so no matter how deep we are in the call stack, the queued events will go to the end of the queue
- Identify JavaScript as a single threaded language
    - "thread" refers to the thread of execution or sequence of commands
    - only one event can be handled at a time
    - the use of a single call-stack leads to a single thread of execution
        - stack means that new items get pushed on top, and the item underneath can't be accessed until it has been popped off
    - a new event can only be handled once the call stack is empty
- Describe the difference between asynchronous and synchronous code
    - synchronous: guarantees code will be executed in inherent order
    - asynchronous: there is no guarantee what order the code will be executed in
        - in practice, the environment in which we run the applications we build is so unpredictable, that you rarely have a guarantee of when actions occur, so your code needs to be able to handle delays and arbitrarily timed input
            - fetching data from database
            - accessing info from an external server/API
            - reacting to user actions
        - specifically, fetching data from a database, accessing info from an external server/API, or getting user input are all common necessary actions for the web that may take variable amounts of time, but you don't want your whole website to hang until the response has been retrieved
- Execute the asynchronous function `setTimeout` with a callback.
    - takes a function and a time in milliseconds
    - `setTimeout` operates asynchronously in that the time is not exact, it's only a minimum, so you can _never_ guarantee its timing
    - all the synchronous code will execute before the async code executes
    - if you don't include a time, it's the same as passing in a 0. it still executes asynchronously, so it gets added to the queue immediately and then it gets executes once the call stack is empty
    - if you store the output of `setTimeout`, you get this object back, and you can use that to cancel the timeout with `clearTimeout`
```javascript
setTimeout(() => console.log("time's up!"), 1000);
// any additional arguments will be passed to the function
// when it is called
setTimeout((num) => console.log("the number is " + num), 1000, 6);

// passing arguments to the function directly (below)
// will NOT work because you will invoke the function
// right at that moment, so instead of passing in a
// function, you're just passing an output value.
setTimeout(Math.sqrt(6), 1000);
```
- Given the function `function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }` and the function `function callback() { console.log("callback"); }`, predict the output of `asyncy(callback);`
    - `async` will be printed first because the `console.log` statement inside `asyncy` will be run synchronously before the asynchronous code has a chance to run
- Use `setInterval` to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.
    - calls function continuously after at least the interval has passed
    - if you don't clear your interval, it will never stop
    - clearing the interval must take place inside the function, otherwise the interval will be synchronously cleared before the asynchronous call takes place
```javascript
let count = 1;
let foo = () => {
    console.log("my number is ", count);
    count++;
    if (count > 10) {
        clearInterval(myIntervalFunc);
    };
}
let myIntervalFunc = setInterval(foo, 100);
```
- Write a program that accepts user input using Node’s readline module
    - chain callbacks in a nested fashion to get them to execute in sequential order
    - user input will always be a string. use `Number` function to convert strings to numbers when necessary
```javascript
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Here is my prompt! ", (answer) =>{
    console.log(answer);
    rl.close();
})
```
## Node.js Lesson Learning Objectives
- Define NodeJS as distinct from browser based JavaScript runtimes.
    - javascript is a specification
        - ECMA defined specifications to standardize javascript—implemenations may differ between browsers (or other environments)
        - Node.js is built on the same JavaScript engine as Google Chrome (V8)
    - differences between Node.js and browser runtimes
        - in Node.js, global environment is global object, vs window object in browsers
            - Node.js doesn't need to draw on the screen, so it doesn't have the same `window` properties
        - browsers have a `document` object where the html is stored—not present in Node
        - browsers can access a `location` (info about web address being visited), not present in Node
        - Node uses `require` to import other modules accessible through the filesystem, but the browser doesn't have access to a filesystem
- Write a program that reads in a dictionary file using node's FS API and reads a line of text from the terminal input. The program should 'spell check' by putting asterisks around every word that is NOT found in the dictionary.
    - the fs module will let you access the file system in a ton of ways
        - important functions include `fs.readFile` and `fs.writeFile`
```javascript
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// first read in dictionary
fs.readFile("dictionary.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    // assume the words in the dictionary are all on
    // separate lines
    let dict = data.split("\n");
    // then get user's input from the terminal
    rl.question("What shall I spellcheck?", (answer) => {
        let words = answer.split(" ");
        // spellcheck the user's input
        let spellchecked = words.map(el => {
            if (!dict.includes(el)) {
                return "*" + el + "*";
            }
            return el;
        })
        // and write to a new file
        fs.writeFile("spellchecked.txt", spellchecked.join(" "), err => {
            if (err) {
                console.log(err);
            }
            console.log("done!")
        })
        rl.close();
    })
})
```

## Git Lesson Learning Objectives
- Use Git to initialize a repo
    - `git init` will initialize a new git repo in your current directory
    - `git add .` adds all files to the staging area
    - make `.gitignore` file for the stuff you don't want to track
- Explain the difference between Git and GitHub
    - git  is a distributed version control system
    - GitHub is the best-known and most widely used place for hosting remote Git repositories
- Given 'adding to staging', 'committing', and 'pushing to remote', match attributes that apply to each.
    - `git add` lets you stage changes for commit (move them from the working directory to the staging area)
    - `git commit` updates your local repository with the staged changes (moves them from the staging area to the commit history)
        - run `git commit -m <message>` with a message (in quotes) to skip opening a file for your commit message
    - `git push` (e.g. `git push origin master`) lets you push your changes to the remote repository
- Use Git to clone an existing repo from GitHub
    - `git clone <url>`
        - creates a new folder in your current directory named after the repo you're cloning
- Use Git to push a local commit to a remote branch
    - `git push <remote> <branch>`
- Use git to make a branch, push it to github, and make a pull request on GitHub to merge it to master
    - a branch is a separate timeline in Git, reserved for its own changes
        - very important when you are working on a team
    - `git  branch <name-of-your-branch>` creates named reference to your current commit, and lets you add commits without affecting the master branch
    - `git checkout <name-of-branch>` if you want to open an existing branch
    - the `-u` flag is short for `--set-upstream`, and it tells git you want your local branch to follow a remote branch. you need it the first time you push a new branch
    - `git pull` will update all your local branches with code from their remote counterparts. first fetches from remote, then merges with your local branches
    - a pull request is a feature of GitHub, not of git itself
        - github makes a comparison page of your code against the base branch that can be reviewed by your team, and then merged by the repo maintainer
```
> git branch my-changes
> git add new-file.js
> git commit -m "Add new file"
> git checkout master
> git merge my-changes


> git branch add-my-new-file
> git add my-new-file.js
> git commit -m "Add new file"
git push -u origin add-my-new-file
```
- Given a git merge conflict, resolve it
    - occurs when changes on two branches are incompatible, so if you made a change to a specific line in the code, but that same line of code has also been changed in the branch that you're merging to
    - open the conflicting file in an appropriate editor and you will have the choice to accept incoming changes or not, and then you can add it to the staging area and commit the resolved merge
- Match the three types of git reset with appropriate descriptions of the operation.
    - `--soft` flag is least dangerous—moves intermediate changes to staging area
    - by default, `--mixed` reset will occur: puts changes into the working directory rather than the staging area
    - `--hard` reset will completely obliterate intermediate commits
- Use Git reset to rollback local-only commits.
    - `git reset` moves the `HEAD` like checkout, but it destroys intermediate commits
    - it's a bad idea to use commands that change history like `reset` and `rebase` when you are working with shared code, but it may sometimes be appropriate for local commits that only you can access
- Identify what the git rebase command does
    - rewrites history
    - `git rebase` changes the current branch's base branch. usually, you would want a regular merge, but could be useful if you started your branch from the wrong commit
    - this will change the commit hash of existing commits
    - _never change history on a shared branch_
- Use git diff to compare a local 'staging' branch and 'master' branch.
    - `git diff` by default compares working directory to last commit
    -  `--staged` compares staged area to last commit
    - can also compare two named branches, or just based on commit hash
    - type `q` to exit
- Use git checkout to check out a specific commit by commit id
    - `git checkout <commit-hash>`
    - points `HEAD` at a different commit, doesn't actually change history
    - `git checkout <your-branch-name>` will take you back again

## Command Line Interface Basics Lesson Learning Objectives
- Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.
- Create, rename, and move folders using unix command line tools.
    - `mkdir` will make a directory `-p` if you need it to create all parent directories in between
    - `mv` will move a directory— the `-r` flag will allow you to recursively move its contents
        - `mv` will also rename files and directories—just move it to where it already was, but with the correct name
- Use grep and | to count matches of a pattern in a sample text file and save result to another file.
    - `echo |  grep -c how spellchecked.txt > filename.txt`
        - `echo` prints what is passed to it
        - `> filename.txt` gives it a destination
        - `grep <target-string> <file>` finds all the lines where that search term appears in the file
        - `-c` flag makes a count of the lines instead of the lines themselves
    - if you get stuck, `man grep | grep -C2 <target-string>` would let you search the grep man page itself, and print lines above and below where the search term appears for clarity
- Find what `-c`, `-r`, and `-b` flags do in grep by reading the manual.
    - `-c` - suppress normal output; instead print a count of matching lines for each input file.
    - `-r` - reads all files recursively under each directory
    - `-b` - prints the 0-based byte offset within the input files before each line of output
- Identify the difference in two different files using `diff`.
    - `diff filename1 filename2`
- Open and close nano with and without saving a file.
    - `ctrl + o` to write out, `ctrl + x` to exit
- Use ‘curl’ to download a file.
    - `curl <url>` prints to command line
    - `curl -o <filename> <url>` saves to a file
- Read the variables of $PATH.
    - not sure exactly what that means
    - `echo $PATH` is maybe what this is referring to?
- Explain the difference between `.bash_profile` and `.bashrc`.
    - `.bash_profile` is executed in the login shell—used when bash is started with the `-l` or `--login` flag. if there's no `.bash_profile` bash with run the `.profile` instead
        - sometimes, the `.bash_profile` will itself run the `.bashrc` file, too
    - with Zsh, there is one `.zshrc` file that is started when you start Zsh for both login shells and non-login shells
        - on macOS prior to Catalina, Terminal runs bash as a login shell on every terminal window
        - after Catalina, uses Zsh so it runs both `.zlogin` and `.zshrc` every time
- Create a new alias by editing the `.bash_profile`.
    - `alias rm='rm -i'`
- Given a list of common scenarios, identify when it is appropriate and safe to use `sudo`, and when it is a dangerous mistake.
    - generally speaking, if a command is destructive (getting rid of files or info, e.g. `rm`) or if it might allow access to private information (e.g. `chmod 777`) then it would be safer not to force the computer to carry it out
    - `ls`, `cp` are generally safe (non-destructive)
    - adding execution permission to a single file is okay as long as you know exactly what the file is doing
- Write a shell script that greets a user by their `$USER` name using `echo`.
    - script must have interpreter directive, commented description, script body. extension typically .sh
        - interpreter directive is the first line
            - `#!/bin/bash`
            - `#!/usr/bin/env bash` behaves the same, but is cross-system compatible
            - if program is written in in zshell `#!/usr/bin/env zsh`
        - commented description uses `#` on each line
            - not necessary, just advisable
        - script body is just commands just as they would be entered into the command line
```shell
#!/bin/bash
# This program greets a user by name

echo Hello $USER
```
- Use `chmod` to make a shell script executable.
    - to give exectution privileges to all, `chmod +x scriptfile`
        - more generally `chmod [ugo]+[rwx] <filename>` will add specified permission to the specified identity, and `chmod [ugo]-[rwx] filename.txt` will remove that permission
        - can also use octal notation. add up permissions for user, then group, then other to get three numbers that represent all permissions (e.g. 777 is universal access to read, write, and execute)
            - r (read) = 4
            - w (write) = 2
            - x (execute) = 1
            - no permissions = 0

## JS Trivia Lesson Learning Objectives
- Given a code snippet of a unassigned variable, predict its value.
```javascript
console.log(hello); // prints undefined
var hello = "hi"

console.log(nope); // ReferenceError
let nope = "uh oh"

console.log(noo); // ReferenceError
const noo = "oops"

console.log(yup()); // prints this is fine
function yup () {
    return "this is fine";
};

console.log(bad()); // TypeError
var bad = function () {
    return "too bad";
}

var sure;
console.log(sure); // prints undefined

let okay;
console.log(okay); // prints undefined

const oof; // SyntaxError
console.log(oof);
```
- Explain why functions are “First Class Objects” in JavaScript
    - functions are first class citizens in JavaScript because they have all the same privileges as other primitive types. they can be passed as arguments to a function, or returned from one, and they can be stored in variables
- Define what IIFEs are and explain their use case
    - immediately invoked function expressions
    - anonymous function enclosed within grouping operation `()` followed by `()` to invoke it
    - can only be used once since they are never assigned to a variable
    - reduce the risk of name collision
```javascript
(function () {
    console.log("hello");
    return 5;
})(); // immediately console logs "hello" and returns 5
```
- (Whiteboarding) Implement a closure
```javascript
dynamicDivider => divisor => dividend => dividend/divisor;
// the divisor argument passed to dynamicDivisor exists
// within the scope of the outer function. the inner
// function that is returned from dynamicDivider closes
// over that variable, and maintains a reference to it
// even after the outer function (dynamicDivider) has
// returned.
```
- Identify JavaScript’s falsey values
    - `0`, `0n`, `null`, `undefined`, `NaN`, `""`, `false`
- Interpolate a string using back-ticks
    - use backticks around the string, and then you can put variables directly into the string with `${variableName}`
    - `` `hello ${name}!` ``
- Identify that object keys are strings or symbols
    - strings are not unique, so keys could accidentally be overwritten
    - recently symbols were added so that objects could be safer
    - every time `Symbol()` runs, a unique key is generated.
    - optional description can go in the `()` but two symbols with the same description are not the same symbol—`Symbol('description') !== Symbol('description')`
    - `Object.keys()` doesn't work on symbols
    - use `Object.getOwnPropertySymbols(obj)` instead
```javascript
mySym = Symbol("sym")
obj = {[mySym]: "symbol", myStr: "string"}
console.log(Object.keys(obj)); // returns [ 'myStr' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(sym) ]
console.log(Reflect.ownKeys(obj)); // [ 'myStr', Symbol(sym) ]
```
- A primitive type is data that is not an object and therefore cannot have methods(functions that belong to them).
    - okay cool.
- Given a code snippet where variable and function hoisting occurs, identify the return value of a function.
    - all the variable declarations will be "hoisted" to the top of the scope
        - `var` declarations will be hoisted and initialized to `undefined` (before the actual declaration, variables can be used without throwing an error)
        - `let` will be hoisted and remain uninitialized until the declaration takes place. this will throw an error if the variable is used before declaration.
            - once the variable is declared, if no assignment takes place, it will have the value `undefined` and can be used without error
        - `const` will be hoisted and remain uninitialized until the declaration takes place. this will throw an error if the variable is used before declaration.
            - but an error will be thrown if declared without a value (since they can't be reassigned that wouldn't really make any sense)
        - `function` declarations are hoisted to the top of their scope and can actually be used prior where they are defined
            - in contrast, function expression declaration (with `const`, `let`, or `var`) cannot be used before declaration, and will be hoisted in the same way any variable declared with the same keyword is hoisted
        - assignment of a value without declaring the variable won't cause any hoisting, but when it is assigned it will exist in the global scope.
    - common error messages that happen in response to mistakes regarding hoisting and assignment
        - `ReferenceError` is what you you attempt to use or access the value of a variable before it has been declared
            - in the [function hoisting quiz](https://open.appacademy.io/learn/js-py---jun-2020-online/week-3-jun-2020-online/function-hoisting-in-javascript-quiz) a `ReferenceError` is said to be thrown  when a previously declared variable is declared again within the same scope, but as far as I can tell, this should say `SyntaxError`
        - `SyntaxError` will be thrown when you attempt to declare a variable two or more times in the same scope, _if one or more declaration use_ `let` _or_ `const`. you can redeclare with just `var` and `function` declarations without issue
        - `SyntaxError` is also the response to attempting to declare a variable with `const` without initializing a value
        - `TypeError` (in this context) will be thrown when a variable has the value `undefined` (e.g.trying to call it as a function)
        - `TypeError` is also the response when you attempt to reassign a value to a `const` variable
