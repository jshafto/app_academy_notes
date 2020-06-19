# W1 Learning Objectives

## Expression Lesson Learning Objectives

1. Given a working REPL interface, write and execute a statement that will print “hello world” using console.log
    - `console.log("hello world");`
    - `console.log('hello' + ' world');`
1. Identify that strings are a list of characters defined by using double or single quotes
    - `"I am a string"`
    - `'I am a string'`
    - don't use single quotes if you want to use an apostrophe, e.g. `'I'm a string'`
    - don't use double quotes if you want to include a quote, e.g. `"She said, "I am a string.""`
1. Given an arithmetic expression using `+`, `-`, `*`, `/`, `%`, compute its value
    - examples:
    - addition: `10 + 3 => 13`
    - subtraction: `10 - 3 => 7`
    - multiplication: `10 * 3 => 30`
    - division: `10 / 3 => 3.3333333333[...]`
    - modulo (computes remainder after division): `10 % 3 => 1`
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
    - e.g. `(2+3) * 10 => `
1. Given expressions using `==` and `===`, compute their values
    - the strict `===` only yields equality for identical values
        - e.g. `"5" === 5 => false`
    - the `==` operator will coerce the arguments to the same type to make the comparison, which can sometimes lead to counterintuitive results, so it should be avoided.
        - e.g.  `"5" == 5 => true`
1. Given a code snippet using postfix `++`, postfix `--`, `+=`, `-=`, `/=`, `*=`, predict the value of labeled lines
    - `i ++;` is equivalent to `i = i + 1;`
    - `i --;` is equivalent to `i = i - 1;`
    - `i += j;` is equivalent to `i = i + j;`
    - `i -= j;` is equivalent to `i = i - j;`
    - `i *= j;` is equivalent to `i = i * j;`
    - `i /= j;` is equivalent to `i = i / j;`
1. Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.
```javascript
let string = "I am a string";
let num = 1;
let bool = true;
console.log(string); // I am a string
console.log(num); // 1
console.log(bool); // true
```


## Intro to Functions Lesson Learning Objectives

- Define a function using function declaration
```javascript
function fun(stuff) {
    [...]
}
```
- Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value
```javascript
function average(num1, num2) {
    return (num1 + num2) / 2;
};
console.log(average(5, 13));
```
- Identify the difference between parameters vs arguments.
    - parameters appear in the function definition.
        - e.g. `(num1, num2)` above.
    - arguments are passed to the function when it is called.
        - e.g. `(5, 13)` above.




## Control Flow and Array Lesson Learning Objectives

- Define a function that accepts a sentence string and two words as args. The function should return a boolean indicating if the sentence includes either word.
```javascript
function includesEither(sentence, word1, word2) {
  if (sentence.includes(word1) || sentence.includes(word2)) {
    return true;
  }
  return false;
```
- Identify a pair of mutually exclusive conditions
    - just means they cannot be true at the same time
    - if `a` is `true`, then `b` must be `false` and vice versa
        - e.g. `(n === 7)` and `(n !== 7)` are mutually exclusive
- Given a for loop, translate it into a while loop, and vice-versa
    - for -> while
        - the index will have to be initialized prior to the loop.
        - the iteration step (e.g. `i ++`) will have to occur as the last step within the loop
        - the parentheses that follow `while` should only contain the ending condition (e.g. `i < 10`)
    - while -> for
        - initialization and incrementation of the index both occur within the parentheses following `for`
```javascript
// for loop example
for (let count = 0; count < 10; count ++);  {
    console.log("count: " count);
}

// equivalent while loop example
let count = 0;
while (count < 10) {
    console.log("count: " count);
    count ++;
}
```
- Write a function that iterates through a provided string argument
    - you can use a for loop where the index starts at `0`, the index remains less than (not equal to) the length of the string, and then use brackets (e.g. `string[index]`) to access each individual character
```javascript
// example - prints out each character in a string, one at a time
function printEachChar(str) {
    for (let i = 0; i < str.length; i ++) {
        console.log(str[i]);
    }
}
```
- Given a description of pig latin, write a function that takes in a string argument and utilizes String#slice to translate the string into pig latin.
```javascript
function pigLatinWord(word) {
    let vowels = "aeiou";

    // if the first character is a vowel, you can just add yay
    // to the end of the word and return that value.
    if (vowels.includes(word[0])) {
        return word + "yay";
    }

    // for each letter of a word
    for (let i = 0; i < word.length; i ++) {

        // check if the letter is a vowel
        if (vowels.includes(word[i].toLowerCase())) {

            // the beginning of the new word is the slice containing
            // the vowel and all subsequent letters
            let firstPart = word.slice(i);

            // the second part is the slice that includes all the
            // letters up to but not including the vowel
            let secondPart = word.slice(0,i);

            // return those slices plus "ay"
            return firstPart + secondPart + "ay";
        }
    }
    // if you get this far without hitting the return statement in the
    // conditional, it means there are no vowels in the word, so the
    // word should be returned on its own
    return word;
};
```
- Write a function that takes in an array of words and a string as arguments and returns a boolean indicating whether the string is located inside of the array. The function must use Array#indexOf.
    - if an item never appears in an array, `#indexOf` will return `-1`
```javascript
function wordWithinArray(array, word) {
    let wordIndex = array.indexOf(word);
    let returnBool = (wordIndex > -1);
    return returnBool;
};
```
- Define that an array literal is an ordered list of values defined by using bracket and individual values are read by indexing.
```javascript

```
- Prevent code that can throw an exception from causing the program to crash.

## Intermediate Functions Lesson Learning Objectives

- Identify that strings are immutable and arrays are mutable
    - one big implication of this is that functions applied to strings (e.g. `String#slice`) may return a new string BUT the original string will never be modified.
        - if you assign a new value to a variable that holds a string, it might feel like the string has been modified, but really you've only changed the value contained by the variable, not the string itself
    - in contrast, some array methods might preserve the original array (e.g. `Array#slice`), but others (e.g. `Array#push`, `Array#splice`) will change the contents of the array even without reassigning the variable
- Define a function using both function declaration and function expression syntax
```javascript
// function declaration syntax
function myFunction(parameter) {
    [...]
}

// function expression syntax (const can be used instead of let)
let myFunction = function(parameter) {
    [...]
}
```
- Utilize `Array#push`, `#pop`, `#shift`, `#unshift` to mutate an array
    - Array#push adds an element (passed as an argument)
        - `[8, 2, 9, 7].push(4) => [4, 2, 9, 7, 4]`
    -
- List the arguments that can be used with Array#splice
    - starting index (inclusive)
    - number of elements to remove (can be `0`)
    - each subsequent argument is an element that will be inserted into the array at the starting index
- Write a function that sums up elements of an array, given an array of numbers as an argument
- Utilize Array#forEach, #map, #filter, #reduce in a function
- Define a function that takes in an array of numbers and returns a new array containing only the primes
- Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array
- Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements

- Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null
```javascript
let arrayMin = function(nums) {
    nums.reduce(function(minVal, num) {
        if (minVal === null || num < minVal) {
            minVal = num;
        }
        return minVal;
    }, null)
}
```
