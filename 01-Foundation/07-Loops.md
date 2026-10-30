# Chapter 7: Loops in JavaScript

## 1. What Are Loops?

Loops are programming structures that execute a block of code repeatedly as long as a specified condition is satisfied.

Instead of writing the same code multiple times, we can use loops to automate repetition.

### Without a Loop

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

### With a Loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

### Why Do We Need Loops?

- Reduce repetitive code.
- Process arrays and strings.
- Perform calculations.
- Search for elements.
- Solve DSA problems.
- Automate repetitive operations.

---

## 2. Types of Loops in JavaScript

JavaScript provides several looping structures:

1. `for` loop
2. `while` loop
3. `do...while` loop
4. `for...of` loop
5. `for...in` loop

Other important loop-control concepts:

- `break`
- `continue`
- Nested loops
- Infinite loops

---

## 3. for Loop

The `for` loop is used when we generally know how many times a block of code should execute.

### Syntax

```javascript
for (initialization; condition; update) {
    // Code to execute
}
```

It has three main parts:

| Part | Purpose |
|---|---|
| Initialization | Creates and initializes the loop variable |
| Condition | Determines whether the loop should continue |
| Update | Changes the loop variable after each iteration |

### Example 1: Print Numbers from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

### How Does It Work?

| Iteration | i | Condition `i <= 5` | Output | Update |
|---|---:|---|---:|---|
| 1 | 1 | true | 1 | i = 2 |
| 2 | 2 | true | 2 | i = 3 |
| 3 | 3 | true | 3 | i = 4 |
| 4 | 4 | true | 4 | i = 5 |
| 5 | 5 | true | 5 | i = 6 |
| 6 | 6 | false | No output | Stop |

### Example 2: Print Numbers from 10 to 1

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

### Example 3: Sum of First N Natural Numbers

```javascript
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum); // 15
```

Explanation:

```text
1 + 2 + 3 + 4 + 5 = 15
```

### Example 4: Multiplication Table

```javascript
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

### Example 5: Even Numbers

```javascript
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
```

### Important Points

- Initialization generally runs once.
- The condition is checked before every iteration.
- Update executes after the loop body.
- If the initial condition is false, the body does not execute.
- The three expressions in the `for` header are optional, but the semicolons are required.

Example:

```javascript
let i = 1;

for (; i <= 3;) {
    console.log(i);
    i++;
}
```

---

## 4. while Loop

The `while` loop executes as long as its condition is truthy.

It is useful when the number of iterations is not known beforehand.

### Syntax

```javascript
initialization;

while (condition) {
    // Code

    update;
}
```

### Example 1: Print Numbers from 1 to 5

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
```

### Working

1. Initialize the variable.
2. Check the condition.
3. Execute the loop body if the condition is truthy.
4. Update the variable.
5. Check the condition again.
6. Stop when the condition becomes falsy.

### Example 2: Sum of Digits

```javascript
let number = 1234;
let sum = 0;

while (number > 0) {
    let digit = number % 10;

    sum += digit;

    number = Math.floor(number / 10);
}

console.log(sum); // 10
```

Explanation:

```text
1234 % 10 = 4
123 % 10  = 3
12 % 10   = 2
1 % 10    = 1

Sum = 4 + 3 + 2 + 1 = 10
```

### Example 3: Reverse a Number

```javascript
let number = 1234;
let reverse = 0;

while (number > 0) {
    let digit = number % 10;

    reverse = reverse * 10 + digit;

    number = Math.floor(number / 10);
}

console.log(reverse); // 4321
```

Note: These examples assume a non-negative integer. Negative numbers need additional handling.

---

## 5. do...while Loop

The `do...while` loop executes its body at least once, even if the condition is initially false.

### Syntax

```javascript
do {
    // Code
} while (condition);
```

Notice the semicolon after the `while` condition.

### Example 1

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output:

```text
1
2
3
4
5
```

### Example 2: Condition Initially False

```javascript
let i = 10;

do {
    console.log("Executed");
} while (i < 5);
```

Output:

```text
Executed
```

Why?

Because the body executes before the condition is checked.

### Example 3: Menu-Based Program

```javascript
let choice = 1;

do {
    console.log("1. View Profile");
    console.log("2. Settings");
    console.log("3. Exit");

    choice++;
} while (choice <= 3);
```

This demonstrates repeated menu output. A real interactive menu would obtain the user's choice through an input mechanism.

---

## 6. Difference Between for, while and do...while

| Feature | for | while | do...while |
|---|---|---|---|
| Condition checked | Before body | Before body | After body |
| Minimum executions | 0 | 0 | 1 |
| Initialization | Usually in header | Usually outside | Usually outside |
| Update | Usually in header | Usually in body | Usually in body |
| Best suited for | Known iteration count | Condition-based repetition | At-least-once execution |

### When to Use Which Loop?

- `for`: When you know the iteration range.
- `while`: When repetition depends on a condition.
- `do...while`: When the body must execute at least once.

---

## 7. break Statement

The `break` statement immediately terminates the nearest enclosing loop or switch statement.

### Example 1

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

When `i` becomes 5, the loop terminates.

### Example 2: Search an Element

```javascript
let numbers = [10, 20, 30, 40, 50];
let target = 30;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log("Element found at index:", i);
        break;
    }
}
```

Output:

```text
Element found at index: 2
```

**Important:** `break` exits only the nearest enclosing loop. A labeled break can exit a specifically labeled outer loop.

---

## 8. continue Statement

The `continue` statement skips the remaining statements in the current iteration and moves to the next iteration.

### Example 1: Skip Number 3

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

### Example 2: Print Only Odd Numbers

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
3
5
7
9
```

### Difference Between break and continue

| break | continue |
|---|---|
| Terminates the loop | Skips the current iteration |
| No more iterations execute | Remaining iterations continue |
| Used to stop searching or processing | Used to skip unwanted values |

**Important:** In a `while` loop, make sure the update still happens when using `continue`; otherwise, you may accidentally create an infinite loop.

---

## 9. Nested Loops

A loop inside another loop is called a nested loop.

### Syntax

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        // Inner loop body
    }

}
```

### Example 1: Print a Grid

```javascript
for (let i = 1; i <= 3; i++) {

    let row = "";

    for (let j = 1; j <= 3; j++) {
        row += "* ";
    }

    console.log(row);
}
```

Output:

```text
* * *
* * *
* * *
```

### How Nested Loops Work

For every iteration of the outer loop, the inner loop completes all its iterations.

If:
- Outer loop runs 3 times.
- Inner loop runs 3 times per outer iteration.

Total inner executions:

```text
3 x 3 = 9
```

### Example 2: Number Pattern

```javascript
for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}
```

Output:

```text
1
1 2
1 2 3
1 2 3 4
```

### Example 3: Multiplication Tables

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log("----------");
}
```

### Time Complexity of Nested Loops

If both loops run `n` times:

```text
O(n * n) = O(n²)
```

If one loop runs `n` times and another runs `m` times:

```text
O(n * m)
```

Remember: Nested loops do not always mean O(n²). Complexity depends on the actual number of iterations.

---

## 10. for...of Loop

The `for...of` loop iterates over the values of an iterable object.

Common iterables include:

- Arrays
- Strings
- Maps
- Sets
- Typed arrays

### Syntax

```javascript
for (let value of iterable) {
    // Code
}
```

### Example 1: Array

```javascript
let numbers = [10, 20, 30, 40];

for (let number of numbers) {
    console.log(number);
}
```

Output:

```text
10
20
30
40
```

### Example 2: String

```javascript
let name = "JavaScript";

for (let character of name) {
    console.log(character);
}
```

Each string character is visited in sequence.

### Example 3: Sum of Array Elements

```javascript
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log(sum); // 100
```

### Important Points

- Iterates over values, not indexes.
- Works with iterable objects.
- Useful for clean array and string traversal.
- Does not directly provide the current index.

If both index and value are needed, use `entries()`:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
```

---

## 11. for...in Loop

The `for...in` loop iterates over enumerable string-keyed property names of an object, including enumerable properties inherited through its prototype chain.

### Syntax

```javascript
for (let key in object) {
    // Code
}
```

### Example 1: Object

```javascript
let student = {
    name: "Anu",
    age: 22,
    course: "CSE"
};

for (let key in student) {
    console.log(key, student[key]);
}
```

Output:

```text
name Anu
age 22
course CSE
```

### Example 2: Object Values

```javascript
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

for (let key in product) {
    console.log(product[key]);
}
```

### Example 3: Checking Own Properties

Because `for...in` can include inherited enumerable properties, use `Object.hasOwn()` when you only want an object's own properties.

```javascript
let student = {
    name: "Anu",
    age: 22
};

for (let key in student) {
    if (Object.hasOwn(student, key)) {
        console.log(key, student[key]);
    }
}
```

### Important Points

- Iterates over property keys, not values.
- Keys are strings (even for array indexes).
- Includes inherited enumerable properties.
- For predictable own-property traversal, use `Object.keys()`, `Object.values()`, or `Object.entries()` when appropriate.

---

## 12. Difference Between for...of and for...in

| for...of | for...in |
|---|---|
| Iterates over values | Iterates over property keys |
| Works with iterables | Works with enumerable string-keyed properties |
| Useful for arrays and strings | Useful for object property traversal |
| Does not traverse an object's prototype properties as ordinary object keys | Can include inherited enumerable properties |

### Example

```javascript
let numbers = [10, 20, 30];

for (let value of numbers) {
    console.log(value);
}

for (let index in numbers) {
    console.log(index);
}
```

Output:

```text
10
20
30

0
1
2
```

**Best Practice:**

- Use `for...of` for array values.
- Use `for...in` for object keys, with care around inherited properties.
- Avoid using `for...in` as the default way to iterate over arrays.

---

## 13. Infinite Loops

An infinite loop occurs when the loop's stopping condition never becomes false, or when the loop is explicitly written without a terminating condition.

### Example 1

```javascript
while (true) {
    console.log("Running");
}
```

This loop never stops on its own.

### Example 2: Missing Update

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

The value of `i` never changes, so the condition remains true.

### Example 3: Incorrect Update Direction

```javascript
for (let i = 1; i <= 5; i--) {
    console.log(i);
}
```

The variable decreases instead of increasing, so the condition remains true.

### How to Avoid Infinite Loops

1. Initialize the loop variable correctly.
2. Check the stopping condition.
3. Ensure the update moves toward termination.
4. Test boundary values.
5. Use a safe exit condition when appropriate.

---

## 14. Looping Through Arrays

Loops are frequently used to process array elements.

### Example 1: Print All Elements

```javascript
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### Example 2: Find Maximum Element

```javascript
let numbers = [10, 50, 20, 80, 30];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // 80
```

### Example 3: Count Even Numbers

```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let count = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        count++;
    }
}

console.log(count); // 3
```

### Example 4: Search an Element

```javascript
let numbers = [10, 20, 30, 40];
let target = 30;
let found = false;

for (let number of numbers) {
    if (number === target) {
        found = true;
        break;
    }
}

console.log(found); // true
```

---

## 15. Looping Through Strings

Strings are iterable, so we can process their characters using loops.

### Example 1: Count Characters

```javascript
let str = "JavaScript";
let count = 0;

for (let character of str) {
    count++;
}

console.log(count); // 10
```

### Example 2: Count Vowels

```javascript
let str = "javascript";
let count = 0;

for (let character of str) {
    if ("aeiou".includes(character)) {
        count++;
    }
}

console.log(count); // 3
```

### Example 3: Reverse a String

```javascript
let str = "hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse); // olleh
```

Note: This simple reverse method works with basic strings, but indexing can split certain Unicode characters such as emoji. More advanced Unicode-aware processing requires different techniques.

---

## 16. Loop Performance and Best Practices

### 16.1 Avoid Unnecessary Work Inside Loops

Instead of repeatedly calculating an unchanged array length:

```javascript
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

For ordinary arrays, JavaScript engines handle this well. Caching the length is sometimes useful in specialized cases, but should not be treated as a universal optimization.

### 16.2 Avoid Modifying Arrays Unexpectedly

Changing array length or removing elements while iterating forward can cause elements to be skipped.

Example:

```javascript
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        numbers.splice(i, 1);
    }
}

console.log(numbers);
```

This pattern can skip elements after a removal because later elements shift left.

### 16.3 Use the Right Loop

| Requirement | Recommended approach |
|---|---|
| Need array index | Traditional `for` |
| Need iterable values | `for...of` |
| Need object property keys | `for...in` or `Object.keys()` |
| Need condition-based repetition | `while` |
| Need at least one execution | `do...while` |
| Need to transform an array | `map()` |
| Need to filter an array | `filter()` |
| Need to accumulate a result | `reduce()` |

Array methods will be covered in the Arrays chapter.

---

## 17. Output-Based Interview Questions

Predict the output before executing the code.

### Level 1: Easy

**Q1.**

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Q2.**

```javascript
let i = 5;

while (i > 0) {
    console.log(i);
    i--;
}
```

**Q3.**

```javascript
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

**Q4.**

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

**Q5.**

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

### Level 2: Medium

**Q6.**

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
```

**Q7.**

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i += 2;
}
```

**Q8.**

```javascript
let numbers = [10, 20, 30];

for (let index in numbers) {
    console.log(typeof index);
}
```

**Q9.**

```javascript
let numbers = [10, 20, 30];

for (let value of numbers) {
    console.log(value);
}
```

**Q10.**

```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i * 2);
}
```

### Level 3: Advanced

**Q11.**

```javascript
for (let i = 0; i < 3; i++) {
    console.log("Outer", i);

    for (let j = 0; j < 2; j++) {
        if (j === 1) {
            break;
        }

        console.log("Inner", j);
    }
}
```

**Q12.**

```javascript
let i = 1;

while (i <= 5) {
    if (i === 3) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}
```

**Q13.**

```javascript
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);
```

**Q14.**

```javascript
let count = 0;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        count++;
    }
}

console.log(count);
```

**Q15.**

```javascript
let i = 1;

for (; i <= 3; i++) {
    console.log(i);
}

console.log(i);
```

---

## 18. Coding Practice Questions

Write your own code. Focus on logic, dry runs and edge cases.

### Level 1: Beginner

1. Print numbers from 1 to 100.
2. Print numbers from 100 to 1.
3. Print all even numbers between 1 and 100.
4. Print all odd numbers between 1 and 100.
5. Find the sum of the first N natural numbers.
6. Print the multiplication table of a given number.
7. Find the factorial of a number.
8. Count the number of digits in an integer.
9. Find the sum of digits of a number.
10. Reverse a number.

### Level 2: Intermediate

11. Check whether a number is a palindrome.
12. Check whether a number is prime.
13. Print all prime numbers in a given range.
14. Print the Fibonacci sequence up to N terms.
15. Find the GCD of two numbers.
16. Find the LCM of two numbers.
17. Count the vowels in a string.
18. Reverse a string using a loop.
19. Find the maximum and minimum in an array.
20. Count positive, negative and zero elements in an array.

### Level 3: Advanced

21. Check whether a number is an Armstrong number.
22. Find the second-largest distinct element in an array.
23. Remove duplicate elements from an array using loops.
24. Find the frequency of each element in an array.
25. Check whether a string is a palindrome.
26. Find the first non-repeating character in a string.
27. Find all pairs whose sum equals a target.
28. Rotate an array by one position.
29. Find the missing number from an array containing numbers from 1 to N.
30. Find the intersection of two arrays.

### Level 4: Nested Loop and Pattern Practice

31. Print a square star pattern.
32. Print a right-angled triangle.
33. Print an inverted triangle.
34. Print a pyramid pattern.
35. Print a number triangle.
36. Print Floyd's triangle.
37. Print a multiplication grid.
38. Print a hollow square.

---

## 19. Interview Questions

1. What is a loop in JavaScript?
2. What are the different types of loops?
3. What is the difference between `for` and `while`?
4. What is the difference between `while` and `do...while`?
5. Which loop executes at least once?
6. What is an infinite loop?
7. What is the difference between `break` and `continue`?
8. What is a nested loop?
9. What is the time complexity of two nested loops?
10. What is the difference between `for...of` and `for...in`?
11. Can we use `break` inside a `for...of` loop?
12. Can we iterate over a string using `for...of`?
13. Does `for...in` return array values?
14. What happens if the update statement is missing?
15. How can loops be used to traverse an array?
16. What is the difference between loop statements and array iteration methods?
17. What happens when `continue` is used inside a `while` loop?
18. Can a loop have more than one initialization or update expression?

---

## 20. One-Minute Revision

| Concept | Purpose |
|---|---|
| `for` | Repeat with initialization, condition and update |
| `while` | Repeat while condition is truthy |
| `do...while` | Execute body at least once |
| `break` | Exit the nearest loop |
| `continue` | Skip current iteration |
| Nested loops | Loop inside another loop |
| `for...of` | Iterate over iterable values |
| `for...in` | Iterate over enumerable property keys |
| Infinite loop | Loop without a terminating condition |
| `array.length` | Get array length |
| `i++` | Increment by one |
| `i--` | Decrement by one |

---

## 21. Official Documentation

- [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN: for statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [MDN: while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN: do...while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

---

## Chapter 7 Completion Checklist

- [ ] Understand for loop
- [ ] Understand while loop
- [ ] Understand do...while
- [ ] Understand break and continue
- [ ] Understand nested loops
- [ ] Understand for...of
- [ ] Understand for...in
- [ ] Practice array traversal
- [ ] Practice string traversal
- [ ] Solve all 15 output questions
- [ ] Complete at least 10 coding problems
- [ ] Understand basic loop time complexity

**Next Chapter: Chapter 8 — Functions in JavaScript**

Topics: function declarations, function expressions, parameters, arguments, return, default parameters, arrow functions, callbacks, and function scope.