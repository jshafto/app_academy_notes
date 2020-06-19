# W1 Learning Objectives

## Expression Lesson Learning Objectives

1. Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
    - `console.log("hello world");`
    - `console.log('hello' + ' world');`
1. Identify that strings are a list of characters defined by using double or single quotes
    - `"I am a string"`
    - `'I am a string'`
    - don't use single quotes if you want to use an apostrophe, e.g. ~~`'I'm a string'`~~
    - don't use double quotes if you want to include a quote, e.g. ~~`"She said, "I am a string.""`~~
1. Given an arithmetic expression using `+`, `-`, `*`, `/`, `%`, compute its value
    - `10 + 3 => 13`
    - `10 - 3 => 7`
    - `10 * 3 => 30`
    - `10 / 3 => 3.3333333333[...]`
    - `10 % 3 => 1`
1. Given an expression, predict if its value is `NaN`
    - Broadly, performing numerical operations on non-numerical types will yield NaN
    - e.g. `"hi"/8 => NaN`
1. Construct the truth tables for `&&`, `||`, `!`.
    - `false && false => false`
    - `false && true  => false`
    - `true  && false => false`
    - `true  && true  => true`
    - `false || false => false`
    - `false || true  => true`
    - `true  || false => true`
    - `true  || true  => true`
    - `!false         => true`
    - `!true          => false`
1. Given an expression consisting of >, >=, ===, <, <=, compute it’s value
    - `23 > 5   => false`
1. Apply De Morgan’s law to a boolean expression
    - `!(true && false)  => !true || !false `
    - `!(true || false)  => !true && !false`
1. Given an expression that utilizes operator precedence, compute its value
    - Remember BODMAS: Brackets, Orders(powers), Division, Multiplication, Addition, Subtraction.
    - more info on the MDN [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
1. Given an expression, use the grouping operator to change it’s evaluation
1. Given expressions using `==` and `===`, compute their values
1. Given a code snippet using postfix `++`, postfix `--`, `+=`, `-=`, `/=`, `*=`, predict the value of labeled lines
1. Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.


## Intro to Functions Lesson Learning Objectives

1. Define a function using function declaration
    - `function fun(stuff) {function goes here}`
1. Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value
<code>
  > function average(num1, num2) {
  >   return (num1 + num2) / 2;
  >}
  >console.log(average(5, 13));
</code>
1. Identify the difference between parameters vs arguments.
    - parameters appear in the function definition.
        - e.g. ```(num1, num2)``` above.
    - arguments are passed to the function when it is called.
        - e.g. ```(5, 13)``` above.




## Control Flow and Array Lesson Learning Objectives

1. Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.
<code>
>function includesEither(sentence, word1, word2) {
>  if (sentence.includes(word1) || sentence.includes(word2)) {
>    return true;
>  }
>  return false;
}
</code>
1. Identify a pair of mutually exclusive conditions
    - just means they cannot be true at the same time
    - if `a` is `true`, then `b` is `false`,
    - e.g. `(n === 7)` and `(n !== 7)`
1. Given a for loop, translate it into a while loop, and vice-versa
1. Write a function that iterates through a provided string argument
1. Given a description of pig latin, write a function that takes in a string argument and utilizes String#slice to translate the string into pig latin.
1. Write a function that takes in an array of words and a string as arguments and returns a boolean indicating whether the string is located inside of the array. The function must use Array#indexOf.
1. Define that an array literal is an ordered list of values defined by using bracket and individual values are read by indexing.
1. Prevent code that can throw an exception from causing the program to crash.

## Intermediate Functions Lesson Learning Objectives

1. Identify that strings are immutable and arrays are mutable
2. Define a function using both function declaration and function expression syntax
3. Utilize Array#push, #pop, #shift, #unshift to mutate an array
3. List the arguments that can be used with Array#splice
4. Write a function that sums up elements of an array, given an array of numbers as an argument
5. Utilize Array#forEach, #map, #filter, #reduce in a function
6. Define a function that takes in an array of numbers and returns a new array containing only the primes
7. Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array
8. Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements
9. Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null
