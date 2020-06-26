# Week 3 Learning Objectives
## Asynchronous JS Lesson Learning Objectives

- Identify JavaScript as a language that utilizes an event loop model
- Identify JavaScript as a single threaded language
- Describe the difference between asynchronous and synchronous code
    - synchronous: guarantees code will be executed in inherent order
    - asynchronous: there is no guarantee what order the code will be executed in
        - in practice, the environment in which we run the applications we build is so unpredictable, that you rarely have a guarantee of when actions occur, so your code needs to be able to handle delays and arbitrarily timed input
- Execute the asynchronous function setTimeout with a callback.
    - takes a function and a time in milliseconds
    - setTimeout operates asynchronously in that the time is not exact, it's only a minimum, so you can _never_ guarantee its timing
```javascript
setTimeout(() => console.log("time's up!"), 1000);
```
- Given the function "function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }" and the function "function callback() { console.log("callback"); }", predict the output of "asyncy(callback);"
- Use setInterval to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.
- Write a program that accepts user input using Node’s readline module
