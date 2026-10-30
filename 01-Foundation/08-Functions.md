# Chapter 8: Functions in JavaScript

## 1. What Are Functions?

A function is a reusable block of code designed to perform a specific task.

Instead of writing the same code repeatedly, we can define a function once and execute it whenever required.

### Example Without a Function

```javascript
console.log("Welcome to JavaScript");
console.log("Welcome to JavaScript");
console.log("Welcome to JavaScript");
```

### Example With a Function

```javascript
function greet() {
    console.log("Welcome to JavaScript");
}

greet();
greet();
greet();
```

Output:

```text
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
```

### Benefits of Functions

- Code reusability.
- Reduced code duplication.
- Better readability.
- Easier testing and debugging.
- Improved modularity.
- Easier maintenance.

---

## 2. Function Declaration

A function declaration defines a function using the `function` keyword.

### Syntax

```javascript
function functionName() {
    // Function body
}
```

### Example

```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();
```

Output:

```text
Hello!
```

Here:
- `function` is the keyword.
- `sayHello` is the function name.
- `()` contains parameters, if any.
- `{}` contains the function body.
- `sayHello()` calls the function.

### Important

Defining a function does not automatically execute it. We need to call it.

```javascript
function welcome() {
    console.log("Welcome");
}

// Function call
welcome();
```

---

## 3. Function Parameters and Arguments

Parameters and arguments allow us to pass information into functions.

- **Parameters:** Variables listed in the function definition.
- **Arguments:** Actual values supplied during the function call.

### Example

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

Here:
- `a` and `b` are parameters.
- `10` and `20` are arguments.

### Multiple Arguments

```javascript
function introduce(name, age, city) {
    console.log(`My name is ${name}`);
    console.log(`I am ${age} years old`);
    console.log(`I live in ${city}`);
}

introduce("Anu", 22, "Noida");
```

### What Happens When Arguments Are Missing?

If an argument is not provided, the corresponding parameter gets `undefined`, unless a default parameter is specified.

```javascript
function greet(name) {
    console.log(name);
}

greet();
```

Output:

```text
undefined
```

### What Happens When Extra Arguments Are Passed?

Extra arguments are not assigned to named parameters, but they can be accessed using the `arguments` object in traditional functions or rest parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20, 30);
```

Output:

```text
30
```

The third argument is not used.

---

## 4. Return Statement

The `return` statement sends a value back from a function to the place where the function was called.

### Example

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### console.log() vs return

These two are not the same.

**Using console.log():**

```javascript
function add(a, b) {
    console.log(a + b);
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
undefined
```

Why?

Because the function prints the result but does not return it.

**Using return:**

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### Important Rules of return

1. `return` immediately exits the current function.
2. A returned value can be stored in a variable.
3. A function without an explicit return statement returns `undefined`.
4. Code after a return statement in the same execution path is not executed.

### Example

```javascript
function checkNumber(number) {
    if (number < 0) {
        return "Negative";
    }

    return "Zero or Positive";
}

console.log(checkNumber(-5));
console.log(checkNumber(10));
```

Output:

```text
Negative
Zero or Positive
```

### Automatic Semicolon Insertion with return

Be careful when writing `return` on multiple lines.

```javascript
function getNumber() {
    return
    10;
}

console.log(getNumber()); // undefined
```

JavaScript inserts a semicolon after `return` in this case.

Correct:

```javascript
function getNumber() {
    return 10;
}
```

---

## 5. Function Expression

A function expression stores a function inside a variable.

### Example

```javascript
const greet = function() {
    console.log("Hello JavaScript");
};

greet();
```

Output:

```text
Hello JavaScript
```

### Function Expression with Parameters

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

### Named Function Expression

A function expression can also have a name.

```javascript
const factorial = function calculate(n) {
    if (n <= 1) {
        return 1;
    }

    return n * calculate(n - 1);
};

console.log(factorial(5)); // 120
```

The internal name `calculate` is available inside the function body.

### Function Declaration vs Function Expression

| Function Declaration | Function Expression |
|---|---|
| Declared using a function declaration | Function assigned as an expression |
| Can be called before its declaration due to hoisting | A `const` or `let` binding cannot be accessed before initialization |
| Can be anonymous in special expression contexts, but declarations require a name | Can be anonymous or named |
| `function greet() {}` | `const greet = function() {}` |

---

## 6. Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

They were introduced in ECMAScript 2015 (ES6).

### Syntax

```javascript
const functionName = (parameters) => {
    // Function body
};
```

### Example 1: Normal Arrow Function

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

### Example 2: With Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20)); // 30
```

### Example 3: Implicit Return

If an arrow function contains only one expression, we can omit curly braces and the `return` keyword.

```javascript
const square = number => number * number;

console.log(square(5)); // 25
```

This is called an implicit return.

### Example 4: Single Parameter

Parentheses around a single parameter are optional.

```javascript
const double = number => number * 2;

console.log(double(5)); // 10
```

Parentheses are still allowed:

```javascript
const double = (number) => number * 2;
```

### Example 5: Multiple Parameters

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
```

### Example 6: Returning an Object

To implicitly return an object literal, wrap it in parentheses.

```javascript
const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser("Anu", 22));
```

### Important Arrow Function Rules

- Arrow functions do not have their own `this`.
- Arrow functions do not have their own `arguments` object.
- Arrow functions cannot be used as constructors with `new`.
- Arrow functions do not have a `prototype` property.
- Arrow functions are not suitable as object methods when a method needs its own dynamic `this`.

These concepts will be covered in depth in the functions and execution chapters.

---

## 7. Default Parameters

Default parameters provide fallback values when an argument is missing or explicitly `undefined`.

### Syntax

```javascript
function functionName(parameter = defaultValue) {
    // Code
}
```

### Example

```javascript
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Anu");
greet();
```

Output:

```text
Hello Anu
Hello Guest
```

### Explicit undefined

```javascript
function greet(name = "Guest") {
    console.log(name);
}

greet(undefined); // Guest
greet(null);      // null
```

Important:
- A default parameter is used when the argument is missing or `undefined`.
- `null`, `0`, `false`, and `""` do not trigger the default.

### Multiple Default Parameters

```javascript
function calculatePrice(price, tax = 18, discount = 0) {
    return price + (price * tax / 100) - discount;
}

console.log(calculatePrice(1000)); // 1180
```

---

## 8. Rest Parameters

Rest parameters allow a function to accept any number of arguments and collect the remaining arguments into an array.

### Syntax

```javascript
function functionName(...parameters) {
    // Code
}
```

### Example

```javascript
function add(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(add(10, 20));        // 30
console.log(add(10, 20, 30));    // 60
console.log(add(1, 2, 3, 4, 5)); // 15
```

### Rest Parameter with Other Parameters

```javascript
function calculateTotal(tax, ...prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total + (total * tax / 100);
}

console.log(calculateTotal(10, 100, 200, 300)); // 660
```

### Important Rules

- A function can have only one rest parameter.
- It must be the last parameter.
- It collects remaining arguments into a real array.

Incorrect:

```javascript
// function add(...numbers, tax) {}
```

---

## 9. arguments Object

The `arguments` object is available inside traditional non-arrow functions.

It contains the arguments passed to that function.

### Example

```javascript
function showArguments() {
    console.log(arguments);
}

showArguments(10, 20, 30);
```

### Accessing Individual Arguments

```javascript
function add() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(add(10, 20, 30)); // 60
```

### Important Points

- `arguments` is array-like, not a real array.
- It has a `length` property.
- It does not have all Array methods directly.
- Arrow functions do not have their own `arguments` object.
- Rest parameters are generally preferred in modern JavaScript.

### Rest Parameters vs arguments

| Rest Parameters | arguments |
|---|---|
| Uses `...` syntax | Built-in object |
| Creates a real array | Array-like object |
| Available in normal and arrow functions | Not available as an own binding in arrow functions |
| Preferred modern approach | Legacy/common function feature |

---

## 10. Callback Functions

A callback is a function passed as an argument to another function, so that the receiving function can invoke it.

### Example

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    let username = "Anu";

    callback(username);
}

processUser(greet);
```

Output:

```text
Hello Anu
```

Here:
- `greet` is the callback function.
- `processUser` receives it as an argument.
- `callback(username)` invokes it.

### Another Example

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, multiply)); // 50
```

### Callback with Arrow Function

```javascript
function processNumber(number, callback) {
    return callback(number);
}

let result = processNumber(5, number => number * number);

console.log(result); // 25
```

### Synchronous Callback

A synchronous callback executes during the current function call.

```javascript
function greet(callback) {
    console.log("Hello");

    callback();

    console.log("Bye");
}

greet(() => {
    console.log("Welcome");
});
```

Output:

```text
Hello
Welcome
Bye
```

Callbacks are also used in asynchronous programming, which we will study in a later chapter.

---

## 11. Higher-Order Functions

A higher-order function is a function that:

1. Takes one or more functions as arguments, OR
2. Returns a function.

### Example 1: Function as an Argument

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;

console.log(calculate(10, 20, add)); // 30
```

Here, `calculate` is a higher-order function.

### Example 2: Function Returning Another Function

```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Important

A callback and a higher-order function are related concepts:

- Callback: The function being passed.
- Higher-order function: The function that receives or returns another function.

---

## 12. Pure Functions

A pure function satisfies two main conditions:

1. Given the same inputs, it always returns the same output.
2. It does not produce observable side effects.

### Example of a Pure Function

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30
console.log(add(10, 20)); // 30
```

### Example of an Impure Function

```javascript
let total = 0;

function addToTotal(number) {
    total += number;

    return total;
}

console.log(addToTotal(10)); // 10
console.log(addToTotal(10)); // 20
```

The result depends on external state, which the function modifies.

### Another Impure Example

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}
```

This function produces a console side effect and does not return a value.

### Benefits of Pure Functions

- Easier testing.
- Predictable output.
- Easier debugging.
- Better code reuse.
- Useful in functional programming.
- Helpful in React state management.

---

## 13. Recursive Functions

Recursion occurs when a function calls itself to solve a smaller version of the same problem.

A recursive function needs:

1. Base Case: The condition that stops recursion.
2. Recursive Case: The function calls itself with a smaller or simpler input.

### Example 1: Countdown

```javascript
function countdown(number) {
    if (number === 0) {
        console.log("Done!");
        return;
    }

    console.log(number);

    countdown(number - 1);
}

countdown(5);
```

Output:

```text
5
4
3
2
1
Done!
```

### Example 2: Factorial

Factorial:

\[
n! = n \times (n-1) \times \cdots \times 1
\]

And:

\[
0! = 1
\]

```javascript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### Recursive Call Flow

```text
factorial(5)
    5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1

Result = 5 * 4 * 3 * 2 * 1 = 120
```

### Example 3: Sum of Natural Numbers

```javascript
function sum(n) {
    if (n === 0) {
        return 0;
    }

    return n + sum(n - 1);
}

console.log(sum(5)); // 15
```

### Important Points

- Every recursive function needs a reachable base case.
- Each recursive call uses the call stack.
- Deep recursion can cause a stack overflow.
- Recursion can make tree, graph and divide-and-conquer problems easier to express.
- Not every recursive solution is more efficient than an iterative one.

---

## 14. Function Scope (Introduction)

Scope determines where a variable can be accessed.

Functions create their own function scope.

### Example

```javascript
function greet() {
    let message = "Hello JavaScript";

    console.log(message);
}

greet();

// console.log(message); // ReferenceError
```

The variable `message` is accessible inside the function, but not outside it.

### Local Variables

Variables declared inside a function are generally local to that function.

### Global Variables

Variables declared in an accessible outer scope can be used inside functions.

```javascript
let username = "Anu";

function greet() {
    console.log(username);
}

greet(); // Anu
```

We will study lexical scope, block scope, closures and execution contexts in dedicated chapters.

---

## 15. Function Hoisting

Function declarations are hoisted with their function definitions, which allows them to be called before their declaration in the same scope.

### Example: Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

### Function Expression

```javascript
// greet(); // ReferenceError

const greet = function() {
    console.log("Hello");
};

greet();
```

The `const` binding cannot be accessed before initialization.

### Arrow Function

```javascript
// greet(); // ReferenceError

const greet = () => {
    console.log("Hello");
};

greet();
```

**Interview Point:** Function declarations can be called before their declaration. Function expressions and arrow functions assigned to `let` or `const` variables cannot be accessed before initialization.

---

## 16. Methods in JavaScript

A method is a function associated with an object.

### Example

```javascript
let student = {
    name: "Anu",

    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

student.greet();
```

Output:

```text
Hello, Anu
```

### Shorthand Method Syntax

```javascript
let student = {
    name: "Anu",

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

student.greet();
```

### Important

The behavior of `this` depends on how a function is called. Arrow functions do not create their own `this`.

We will cover `this`, method borrowing and `call()`, `apply()`, `bind()` in a dedicated advanced section.

---

## 17. Difference Between Function Declaration, Expression and Arrow Function

| Feature | Declaration | Expression | Arrow Function |
|---|---|---|---|
| Syntax | `function greet() {}` | `const greet = function() {}` | `const greet = () => {}` |
| Hoisting | Function definition is hoisted | Depends on variable declaration | Depends on variable declaration |
| Own `this` | Yes | Yes | No |
| Own `arguments` | Yes | Yes | No |
| Can be used with `new` | Yes, if constructable | Yes, if constructable | No |
| `prototype` property | Yes | Yes, if constructable | No |

---

## 18. Common Mistakes

### Mistake 1: Calling a Function Without Parentheses

```javascript
function greet() {
    console.log("Hello");
}

greet;   // Function reference
greet(); // Function call
```

### Mistake 2: Forgetting return

```javascript
function add(a, b) {
    a + b;
}

console.log(add(10, 20)); // undefined
```

Correct:

```javascript
function add(a, b) {
    return a + b;
}
```

### Mistake 3: Confusing Parameters and Arguments

```javascript
function greet(name) { // name = parameter
    console.log(name);
}

greet("Anu"); // "Anu" = argument
```

### Mistake 4: Calling a Callback Instead of Passing It

```javascript
function process(callback) {
    callback();
}

function greet() {
    console.log("Hello");
}

process(greet);   // Pass the function
// process(greet()); // Calls greet immediately and passes its return value
```

### Mistake 5: Forgetting the Arrow Function Return

```javascript
const add = (a, b) => {
    a + b;
};

console.log(add(10, 20)); // undefined
```

Correct:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Or:

```javascript
const add = (a, b) => a + b;
```

### Mistake 6: Missing a Base Case in Recursion

A recursive function without a reachable stopping condition may continue until the call stack is exhausted.

### Mistake 7: Using arguments in an Arrow Function

Arrow functions do not have their own `arguments` object. Use rest parameters instead.

---

## 19. Output-Based Interview Questions

Predict the output before running the code.

### Level 1: Easy

**Q1.**

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

**Q2.**

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

**Q3.**

```javascript
function show() {
    return 10;
    console.log(20);
}

console.log(show());
```

**Q4.**

```javascript
const square = number => number * number;

console.log(square(5));
```

**Q5.**

```javascript
function greet(name = "Guest") {
    console.log(name);
}

greet();
greet("Anu");
greet(null);
```

### Level 2: Medium

**Q6.**

```javascript
function test() {
    console.log("A");
    return "B";
    console.log("C");
}

console.log(test());
```

**Q7.**

```javascript
function add(a, b) {
    console.log(arguments.length);
    return a + b;
}

console.log(add(10, 20, 30));
```

**Q8.**

```javascript
function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(5, 3, (x, y) => x * y));
```

**Q9.**

```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));
```

**Q10.**

```javascript
function greet(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

greet(() => console.log("Middle"));
```

### Level 3: Advanced

**Q11.**

```javascript
console.log(add(5, 5));

function add(a, b) {
    return a + b;
}
```

**Q12.**

```javascript
// Predict whether this code runs successfully.

console.log(add(5, 5));

const add = (a, b) => a + b;
```

**Q13.**

```javascript
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(4));
```

**Q14.**

```javascript
function outer() {
    let count = 10;

    function inner() {
        return count + 5;
    }

    return inner();
}

console.log(outer());
```

**Q15.**

```javascript
const createMultiplier = factor => number => factor * number;

const double = createMultiplier(2);

console.log(double(5));
```

---

## 20. Coding Practice Questions

Write the programs yourself. Focus on logic and edge cases.

### Level 1: Beginner

1. Create a function that prints "Hello JavaScript".
2. Create a function that accepts a name and prints a greeting.
3. Create a function that adds two numbers.
4. Create a function that returns the square of a number.
5. Create a function that checks whether a number is even or odd.
6. Create a function that returns the greater of two numbers.
7. Create a function that calculates the area of a rectangle.
8. Create a function that converts Celsius to Fahrenheit.
9. Create a function that calculates the factorial of a number.
10. Create a function that returns the sum of the first N natural numbers.

### Level 2: Intermediate

11. Create a function that accepts any number of arguments and returns their sum using rest parameters.
12. Create a function that finds the maximum of an array.
13. Create a function that counts vowels in a string.
14. Create a function that checks whether a string is a palindrome.
15. Create a function that reverses a string.
16. Create a function that checks whether a number is prime.
17. Create a recursive function to calculate factorial.
18. Create a recursive function to calculate the sum of natural numbers.
19. Create a function that accepts another function as a callback.
20. Create a function that returns another function.

### Level 3: Advanced

21. Create a calculator using callback functions.
22. Create a function that accepts an array and a callback to transform each element.
23. Create a function that returns a function for generating customized greetings.
24. Create a recursive function to calculate Fibonacci numbers.
25. Create a recursive function to find the sum of array elements.
26. Create a function that validates an email format at a basic level.
27. Create a function that accepts a variable number of values and returns their average.
28. Create a function that separates even and odd numbers using callbacks.

### Level 4: Real-World Practice

29. Create a user registration validation function.
30. Create a shopping cart total calculation function.
31. Create a discount calculation function with default parameters.
32. Create a function that generates a user profile object.
33. Create a reusable function to calculate employee salary after deductions.
34. Create a function that checks whether a user has permission to access a feature.

---

## 21. Interview Questions

1. What is a function in JavaScript?
2. Why are functions used?
3. What is the difference between parameters and arguments?
4. What is the purpose of the return statement?
5. What happens if a function does not return anything?
6. What is the difference between `console.log()` and `return`?
7. What is a function declaration?
8. What is a function expression?
9. What is an arrow function?
10. What is an implicit return?
11. What are default parameters?
12. What are rest parameters?
13. What is the difference between rest parameters and the `arguments` object?
14. What is a callback function?
15. What is a higher-order function?
16. What is a pure function?
17. What is recursion?
18. What is a base case in recursion?
19. What is function hoisting?
20. What is the difference between a normal function and an arrow function?
21. Can an arrow function be used as a constructor?
22. What is a method in JavaScript?
23. What is early return?
24. What is the difference between a function returning a value and printing a value?
25. What can cause a stack overflow in recursive functions?

---

## 22. One-Minute Revision

| Concept | Meaning |
|---|---|
| Function | Reusable block of code |
| Declaration | `function greet() {}` |
| Expression | `const greet = function() {}` |
| Arrow function | `const greet = () => {}` |
| Parameter | Variable in function definition |
| Argument | Value passed during function call |
| Return | Sends a value back from a function |
| Default parameter | Fallback for missing or undefined argument |
| Rest parameter | Collects remaining arguments into an array |
| arguments | Array-like object in traditional functions |
| Callback | Function passed to another function |
| Higher-order function | Accepts or returns functions |
| Pure function | Same inputs, same output, no observable side effects |
| Recursion | Function calling itself |
| Base case | Stops recursion |
| Hoisting | Function declarations can be called before declaration |
| Method | Function associated with an object |

---

## 23. Official Documentation

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [MDN: Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN: Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

## Chapter 8 Completion Checklist

- [ ] Understand function declarations
- [ ] Understand function expressions
- [ ] Understand parameters and arguments
- [ ] Understand return statement
- [ ] Understand arrow functions
- [ ] Understand default parameters
- [ ] Understand rest parameters
- [ ] Understand arguments object
- [ ] Understand callbacks
- [ ] Understand higher-order functions
- [ ] Understand pure functions
- [ ] Understand recursion and base cases
- [ ] Understand function hoisting
- [ ] Solve all 15 output questions
- [ ] Complete at least 10 coding problems

**Next Chapter: Chapter 2 — Arrays in JavaScript**

Topics: array creation, indexing, traversal, modification, searching, sorting, multidimensional arrays, and array methods.