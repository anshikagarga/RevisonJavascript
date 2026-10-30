

# Topic 11 — Spread and Rest with Arrays in JavaScript

## 1. Introduction

Spread and Rest both use three dots (`...`), but they perform different operations depending on where they are used.

- **Spread:** Expands an iterable into individual elements.
- **Rest:** Collects multiple elements into a single array or object.

Example:

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```text
10 20 30
```

Here, spread expands the array elements.

Now consider:

```javascript
function calculateSum(...numbers) {
    console.log(numbers);
}

calculateSum(10, 20, 30);
```

Output:

```javascript
[10, 20, 30]
```

Here, rest collects the arguments into an array.

---

# Part A — Spread Syntax

## 2. What is Spread Syntax?

Spread syntax expands the elements of an iterable, such as an array or string, into individual values.

### Syntax

```javascript
...iterable
```

## 3. Spread with Arrays

### 3.1 Expanding an Array

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```text
10 20 30
```

It expands the array into individual arguments when passed to `console.log()`.

### 3.2 Copying an Array

```javascript
const original = [10, 20, 30];

const copy = [...original];

console.log(copy);
console.log(original === copy); // false
```

A new outer array is created.

**Important:** This is a shallow copy, not a deep copy.

### 3.3 Combining Arrays

```javascript
const first = [1, 2];
const second = [3, 4];

const result = [...first, ...second];

console.log(result);
```

Output:

```javascript
[1, 2, 3, 4]
```

### 3.4 Adding Elements

```javascript
const numbers = [20, 30];

const result = [10, ...numbers, 40];

console.log(result);
```

Output:

```javascript
[10, 20, 30, 40]
```

### 3.5 Creating a Copy Before Sorting

```javascript
const numbers = [40, 10, 30, 20];

const sorted = [...numbers].sort((a, b) => a - b);

console.log(sorted);  // [10, 20, 30, 40]
console.log(numbers); // [40, 10, 30, 20]
```

This is useful when you need to preserve the original array.

## 4. Spread with Strings

Strings are iterable, so spread can expand them into individual characters.

```javascript
const name = "CODE";

const characters = [...name];

console.log(characters);
```

Output:

```javascript
["C", "O", "D", "E"]
```

Note: Spread iterates Unicode code points. Some visible characters, such as emoji made from multiple code points, can still be represented by more than one array element.

## 5. Spread with Function Arguments

Spread can pass array elements as individual function arguments.

```javascript
function add(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];

console.log(add(...numbers)); // 60
```

Without spread, passing the array directly would pass it as one argument:

```javascript
console.log(add(numbers));
```

In this case, `a` receives the array, while `b` and `c` are `undefined`.

## 6. Spread with Math Functions

```javascript
const numbers = [10, 20, 5, 40, 30];

console.log(Math.max(...numbers)); // 40
console.log(Math.min(...numbers)); // 5
```

Be careful with very large arrays: spreading huge numbers of arguments into a function may exceed engine argument limits.

---

# Part B — Rest Parameters

## 7. What are Rest Parameters?

Rest parameters allow a function to accept any number of arguments and collect them into an array.

### Syntax

```javascript
function functionName(...parameters) {
    // parameters is an array
}
```

### Example

```javascript
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20));       // 30
console.log(sum(10, 20, 30));   // 60
console.log(sum(1, 2, 3, 4, 5)); // 15
```

The `numbers` parameter contains all arguments passed after the rest parameter position.

## 8. Rest Parameters with Normal Parameters

Rest parameters can be used after regular parameters.

```javascript
function introduce(role, ...skills) {
    console.log("Role:", role);
    console.log("Skills:", skills);
}

introduce("Developer", "Java", "JavaScript", "React");
```

Output:

```text
Role: Developer
Skills: ["Java", "JavaScript", "React"]
```

Here:
- `role` receives the first argument.
- `skills` collects all remaining arguments.

### Important Rules

1. A function can have only one rest parameter.
2. The rest parameter must be the last parameter.
3. Rest parameters are actual arrays.
4. Rest parameters do not include the arguments already assigned to earlier parameters.

Invalid:

```javascript
function example(...values, last) {
    // SyntaxError
}
```

Valid:

```javascript
function example(first, ...values) {
    console.log(first, values);
}
```

## 9. Rest Parameters vs arguments Object

Traditional JavaScript functions provide an `arguments` object.

```javascript
function showValues() {
    console.log(arguments);
}

showValues(10, 20, 30);
```

However, `arguments` is not a real array.

Rest parameters are usually more convenient:

```javascript
function showValues(...values) {
    console.log(Array.isArray(values)); // true
}

showValues(10, 20, 30);
```

| Rest Parameters | arguments |
|---|---|
| Real array | Array-like object |
| Can be used with arrow functions | Not available in arrow functions |
| Supports array methods directly | Does not directly support array methods |
| Explicit in function signature | Implicit |

## 10. Rest in Array Destructuring

Rest can collect remaining array elements.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]
```

Here, `...remaining` is a rest pattern.

It is not spread syntax because it collects the remaining values instead of expanding them.

---

# Part C — Spread vs Rest

## 11. Important Differences

| Spread | Rest |
|---|---|
| Expands values | Collects values |
| Used in function calls, array literals and object literals | Used in function parameters and destructuring patterns |
| Takes an iterable and expands it | Collects remaining arguments or elements |
| Example: `[...arr]` | Example: `function test(...args)` |

### Easy Way to Remember

```javascript
// Spread: expands
const first = [1, 2, 3];
const second = [...first];

// Rest: collects
function show(...values) {
    console.log(values);
}
```

---

# Part D — Practical Applications

## 12. Remove Duplicate Values Using Set and Spread

```javascript
const numbers = [1, 2, 2, 3, 3, 4];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
```

Output:

```javascript
[1, 2, 3, 4]
```

`Set` stores unique values, and spread converts its iterable values back into an array.

## 13. Find Maximum and Minimum

```javascript
const numbers = [10, 50, 20, 5, 40];

const maximum = Math.max(...numbers);
const minimum = Math.min(...numbers);

console.log(maximum); // 50
console.log(minimum); // 5
```

## 14. Merge Two Arrays Without Mutation

```javascript
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Java", "Spring Boot", "Node.js"];

const skills = [...frontend, ...backend];

console.log(skills);
```

The original arrays remain unchanged.

## 15. Create a Flexible Function

```javascript
function calculateAverage(...marks) {
    if (marks.length === 0) {
        return 0;
    }

    const total = marks.reduce((acc, mark) => acc + mark, 0);

    return total / marks.length;
}

console.log(calculateAverage(80, 90, 70)); // 80
console.log(calculateAverage(50, 60));     // 55
```

This function accepts any number of marks.

## 16. Practical React Example

Spread syntax is commonly used to update React state immutably.

### Adding an Item

```javascript
setItems(previousItems => [
    ...previousItems,
    newItem
]);
```

### Updating an Array Element

```javascript
setItems(previousItems =>
    previousItems.map(item =>
        item.id === id
            ? { ...item, completed: true }
            : item
    )
);
```

### Removing an Item

```javascript
setItems(previousItems =>
    previousItems.filter(item => item.id !== id)
);
```

These patterns create new arrays instead of mutating the previous state.

---

# Part E — Important Concepts

## 17. Spread Creates a Shallow Copy

```javascript
const original = [
    10,
    20,
    { name: "Anu" }
];

const copy = [...original];

copy[0] = 100;
copy[2].name = "Riya";

console.log(original);
console.log(copy);
```

Output:

```javascript
[10, 20, { name: "Riya" }]

[100, 20, { name: "Riya" }]
```

Why?

- The outer arrays are different.
- The nested object is shared.
- Changing a nested object property affects both arrays.

Spread syntax does not perform deep cloning.

## 18. Spread and Sparse Arrays

Spread converts array holes into explicit `undefined` values.

```javascript
const arr = [1, , 3];

const copy = [...arr];

console.log(copy);
console.log(1 in arr);  // false
console.log(1 in copy); // true
```

Output:

```javascript
[1, undefined, 3]
```

This is a subtle but useful interview concept.

---

# Part F — Interview Questions

## 19. Conceptual Questions

1. What is spread syntax in JavaScript?
2. What are rest parameters?
3. What is the difference between spread and rest?
4. Can spread syntax copy an array?
5. Does spread create a deep copy?
6. How can you merge two arrays using spread?
7. How can you pass array elements as function arguments?
8. How can you find the maximum value using spread?
9. What are rest parameters used for?
10. Can a function have multiple rest parameters?
11. Why must a rest parameter appear last?
12. What is the difference between rest parameters and `arguments`?
13. Can arrow functions use rest parameters?
14. Can arrow functions use the `arguments` object?
15. What happens when spread is used with a string?
16. How can you remove duplicates using spread and Set?
17. What happens to nested objects when an array is copied using spread?
18. What happens to holes in a sparse array when spread is used?

## 20. Output-Based Practice

Predict the output before running each program.

### Q1

```javascript
const arr = [10, 20, 30];

console.log(...arr);
```

### Q2

```javascript
const arr = [1, 2, 3];

const copy = [...arr];

console.log(arr === copy);
```

### Q3

```javascript
const a = [1, 2];
const b = [3, 4];

const result = [...a, 10, ...b];

console.log(result);
```

### Q4

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20, 30));
```

### Q5

```javascript
function test(first, ...rest) {
    console.log(first);
    console.log(rest);
}

test(10, 20, 30, 40);
```

### Q6

```javascript
const numbers = [10, 20, 30];

function add(a, b, c) {
    return a + b + c;
}

console.log(add(...numbers));
```

### Q7

```javascript
const numbers = [1, 2, 2, 3, 3];

const result = [...new Set(numbers)];

console.log(result);
```

### Q8

```javascript
const arr = [1, 2, 3, 4, 5];

const [first, ...rest] = arr;

console.log(first);
console.log(rest);
```

### Q9

```javascript
const original = [10, { value: 20 }];

const copy = [...original];

copy[0] = 100;
copy[1].value = 200;

console.log(original);
```

### Q10

```javascript
const arr = [1, , 3];

const copy = [...arr];

console.log(copy);
console.log(1 in copy);
```

---

# Part G — Coding Practice

## Beginner Level

1. Copy an array using spread syntax.
2. Merge two arrays using spread syntax.
3. Add elements at the beginning and end of an array.
4. Find the maximum and minimum elements using spread.
5. Convert a string into an array of characters using spread.

## Intermediate Level

6. Remove duplicate values from an array using Set and spread.
7. Write a function that accepts any number of arguments and returns their sum.
8. Write a function that accepts a name and any number of skills using rest parameters.
9. Merge three arrays and sort the resulting array.
10. Create a new array with an element inserted at a particular index using spread and slice.
11. Write a function that returns the average of any number of numeric arguments.

## Advanced Level

12. Implement a custom function that accepts any number of arrays and merges them.
13. Write a function that finds the second-largest distinct number using rest parameters.
14. Write a function that accepts a first argument as a multiplier and collects the remaining numbers using rest parameters.
15. Create a new array with duplicate objects removed based on their IDs.
16. Given an array of nested objects, demonstrate the difference between shallow copying and deep copying.
17. Implement an immutable array update function that changes one element by index.

---

# Part H — Quick Revision

## 21. Important Points

- Spread syntax expands iterable values.
- Rest syntax collects remaining values.
- Both use `...`.
- Spread can copy, merge and expand arrays.
- Rest parameters collect function arguments into an actual array.
- Rest must be the last function parameter.
- Spread creates shallow copies, not deep copies.
- Spread works with arrays and strings because they are iterable.
- `arguments` is not a real array.
- Rest parameters work with normal and arrow functions.
- Spread is commonly used for immutable React state updates.

## Official Documentation

1. [Spread Syntax — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
2. [Rest Parameters — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
3. [Destructuring Assignment — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

**Topic 11 Complete — Spread and Rest with Arrays**

