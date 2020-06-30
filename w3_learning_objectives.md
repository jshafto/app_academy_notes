# Week 3 Learning Objectives
## Asynchronous JS Lesson Learning Objectives

- Identify JavaScript as a language that utilizes an event loop model
- Identify JavaScript as a single threaded language
    - only one event can be handled at a time
    - the use of a single call-stack leads to a single thread of execution
    - an event can only be handled once the call stack is empty
- Describe the difference between asynchronous and synchronous code
    - synchronous: guarantees code will be executed in inherent order
    - asynchronous: there is no guarantee what order the code will be executed in
        - in practice, the environment in which we run the applications we build is so unpredictable, that you rarely have a guarantee of when actions occur, so your code needs to be able to handle delays and arbitrarily timed input
            - fetching data from database
            - accessing info from an external server/API
            - reacting to user actions
        - specifically, fetching data from a database, accessing info from an external server/API, or getting user input are all common necessary actions for the web that may take variable amounts of time, but you don't want your whole website to hang until the response has been retrieved
- Execute the asynchronous function setTimeout with a callback.
    - takes a function and a time in milliseconds
    - setTimeout operates asynchronously in that the time is not exact, it's only a minimum, so you can _never_ guarantee its timing
    - all the synchronous code will execute before the async code executes (feel like i need more info here)
    - if you don't include a time, it's the same as passing in a 0. it still executes asynchronously, with no additional delay once the
    -if you store the output of setTimeout, you get this object back, and you can use that to cancel the timeout with `clearTimeout`
```javascript
setTimeout(() => console.log("time's up!"), 1000);
// any additional arguments will be passed to the function
// when it is called
setTimeout((num) => console.log("the number is" + num), 1000, 6);

// this will NOT work because you will invoke the function
// right at that moment
setTimeout(
```
- Given the function `function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }` and the function `function callback() { console.log("callback"); }`, predict the output of `asyncy(callback);`
    -
- Use setInterval to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.
    - calls function continuously after at least the interval has passed
    - if you don't clear your interval, it will never stop
```javascript
let count = 0;
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
    - chain callbacks in a nested fashion to get them to execute in sequential
        -
    - user input will always be a string—convert to number if you want to explicitly transform into a number


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
        - Node uses `require` to import other modules accessible through the filesystem, since the browser doesn't have a file system, it impo
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

// i am a dummy so i never actually ran this but idk
// feels like i was close
fs.readFile("dictionary.txt", "utf8", (err, data) = {
    if (err) {
        console.log(err);
    }
    let dict = data.split(" ");
    rl.question("What shall I spellcheck?", (answer) => {
        let words = answer.split(" ");
        let spellchecked = words.map(el => {
            if (!dict.includes(el)) {
                return "*" + el + "*";
            }
            return el;
        })
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
- Explain the difference between Git and GitHub
- Given 'adding to staging', 'committing', and 'pushing to remote', match attributes that apply to each.
- Use Git to clone an existing repo from GitHub
- Use Git to push a local commit to a remote branch
- Use git to make a branch, push it to github, and make a pull request on GitHub to merge it to master
- Given a git merge conflict, resolve it
- Match the three types of git reset with appropriate descriptions of the operation.
- Use Git reset to rollback local-only commits.
- Identify what the git rebase command does
- Use git diff to compare a local 'staging' branch and 'master' branch.
- Use git checkout to check out a specific commit by commit id


## Command Line Interface Basics Lesson Learning Objectives
- Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.
- Create, rename, and move folders using unix command line tools.
- Use grep and | to count matches of a pattern in a sample text file and save result to another file.
- Find what -c, -r, and -b flags do in grep by reading the manual.
- Identify the difference in two different files using diff.
- Open and close nano with and without saving a file.
- Use ‘curl’ to download a file.
- Read the variables of $PATH.
- Explain the difference between .bash_profile and .bashrc.
- Create a new alias by editing the .bash_profile.
- Given a list of common scenarios, identify when it is appropriate and safe to use sudo, and when it is a dangerous mistake.
- Write a shell script that greets a user by their $USER name using echo.
- Use chmod to make a shell script executable.


## JS Trivia Lesson Learning Objectives
- Given a code snippet of a unassigned variable, predict its value.
- Explain why functions are “First Class Objects” in JavaScript
- Define what IIFEs are and explain their use case
(Whiteboarding) Implement a closure
- Identify JavaScript’s falsey values
- Interpolate a string using back-ticks
- Identify that object keys are strings or symbols
- A primitive type is data that is not an object and therefore cannot have methods(functions that belong to them).
- Given a code snippet where variable and function hoisting occurs, identify the return value of a function.
