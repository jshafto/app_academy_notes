## Weekend Study Checklist:

Lots of material was covered this week.
- Complete **ALL** Quizzes from this week!
- Complete the flash cards from this week! (Many multiple times)
- Understand the LO's
- Attend OH with questions
​
​## Review Problems:

1.  What does the following code return when run? Why?
    ```js
    function foodLogger(food) {
        return 'I just ate ' + food;
    }
    let myLunch;
    console.log(foodLogger(myLunch));
    ```
​This returns "I just ate undefined" because when myLunch is declared, it is initialized with the value `undefined`, which can be added to string without producing an error.

2. Are the following a truthy or falsy values?
    - 0 -> `falsy`
    - -0 -> `falsy`
    - undefined -> `falsy`
    - "False" -> `truthy`
    - false -> `falsy`
    - true -> `truthy`
    - "True" -> `truthy`
​
3. Write a function `printName(firstName, lastName)` that takes in two strings representing first and last names, and prints out one full name. Use string interpolation here.
```javascript
let printName = (firstName, lastName) => `Full name is ${firstName} ${lastName}`
```

4.  What does the following code return when run? Why?
    ```js
    function foodLogger(food) {
        return `I just ate ${food}`;
    }
    let myLunch = "Ramen!";
    console.log(foodLogger(myLunch));
    ```
​this code returns "I just ate Ramen!" because it uses string interpolation to include the value of the variable food ("Ramen!") in the string that it returns.

5. What do the `-r` and `-c` flags do in `grep`?
    - `-c` => stands for count, it will limit the output of grep to just the number of matches.
    - `-r` => stands for recursive, it will look through subdirectories of the requested path.
​
6. Explain what the following git commands do:
    - `git diff` -> by default compares unstaged changes in the working directory to the last commit. can also list differences between any two commits
    - `git init` -> initializes a git repository in a given folder
    - `git add <filename> `-> adds the current version of that file to the staging area, in preparation for committing it.
    - `git merge` -> incorporates the commited changes from one branch into the current branch. if there are conflicting changes, the user will need to resolve the conflict for the merge to take place
    - `git rebase` -> takes the changes committed on one branch and replays them on a different branch. this will rewrite history, and new commit hashes will be generated for previous commits on the rebased branch
​
7. How do you `rename` a file from the terminal?
    - use the `mv` command—renaming a file is equivalent to moving it to a new file with the desired name in the same directory
```shell
mv filename.txt newfilename.txt
```

8. Can you indentify what the `event loop` is?
    - the event loop consists of a call stack where code is processed synchronously, and a message queue that allows the asynchronous code to be handled once the call stack is empty
9. What's the difference between `async` and `sync` code?
    - Synchronous code is processed in a guaranteed order. Asynchronous code is not processed in a guaranteed order which is useful because it can handle delays and arbitrarily timed input.
10. Are functions First Class Objects? Why?
    - Functions are first class objects in javascript because they have the same priveleges as any other type of value. Specifically, they can be assigned as a value to a variable, they can be passed to functions as arguments, and they can serve as the return value for a function
11. How do you make a file readable to anyone? writeable? executable?
    - using the `chmod` command
```shell
chmod +r filename
chmod +w filename
chmod +x filename

# all at once
chmod 777 filename
```
