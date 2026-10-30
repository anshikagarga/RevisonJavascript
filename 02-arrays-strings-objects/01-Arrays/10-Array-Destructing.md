

# Topic 10 — Array Destructuring in JavaScript

## 1. Introduction

Array destructuring is an ES6 feature that allows us to extract values from an array and assign them to variables in a shorter and cleaner way.

Without destructuring:

```javascript
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log(first, second, third);
```

With destructuring:

```javascript
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first, second, third);
```

Output:

```text
10 20 30
```

**Important:** Array destructuring assigns values according to their positions, not their property names.

---

## 2. Basic Array Destructuring

```javascript
const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);  // Apple
console.log(second); // Banana
console.log(third);  // Mango
```

The first variable receives the first element, the second variable receives the second element, and so on.

## 3. Skipping Elements

You can skip array elements by leaving an empty space between commas.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, , third, , fifth] = numbers;

console.log(first); // 10
console.log(third); // 30
console.log(fifth); // 50
```

Here:
- First position is assigned to `first`.
- Second position is skipped.
- Third position is assigned to `third`.
- Fourth position is skipped.
- Fifth position is assigned to `fifth`.

## 4. Default Values

You can provide default values in case an array element is `undefined` or missing.

```javascript
const numbers = [10];

const [first, second = 20, third = 30] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30
```

### Important: Default Value with undefined

```javascript
const numbers = [10, undefined, 30];

const [a = 100, b = 200, c = 300] = numbers;

console.log(a); // 10
console.log(b); // 200
console.log(c); // 30
```

A default value is used only when the corresponding value is `undefined`.

It is not used for `null`, `0`, `false`, or an empty string.

```javascript
const values = [null, 0, false, ""];

const [a = 10, b = 20, c = true, d = "Hello"] = values;

console.log(a); // null
console.log(b); // 0
console.log(c); // false
console.log(d); // ""
```

## 5. Rest Pattern in Array Destructuring

The rest pattern (`...`) collects the remaining elements into a new array.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]
```

### Important Rules

1. Rest must be the last element in a destructuring pattern.
2. Rest collects all remaining elements.
3. Rest creates a new array containing the collected elements.

Invalid example:

```javascript
const [first, ...remaining, last] = numbers;
```

This produces a syntax error because rest must be last.

## 6. Swapping Variables

Array destructuring makes swapping values easy.

Without a temporary variable:

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

This is a common interview question.

## 7. Destructuring Nested Arrays

You can destructure nested arrays by using nested patterns.

```javascript
const numbers = [10, [20, 30], 40];

const [first, [second, third], fourth] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30
console.log(fourth); // 40
```

Another example:

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];

const [[a, b], [c, d]] = matrix;

console.log(a, b, c, d); // 1 2 3 4
```

## 8. Destructuring Function Return Values

A function can return an array, and its values can be extracted using destructuring.

```javascript
function getUser() {
    return ["Anshika", 22, "Developer"];
}

const [name, age, role] = getUser();

console.log(name);
console.log(age);
console.log(role);
```

Output:

```text
Anshika
22
Developer
```

This is useful when a function returns multiple related values.

## 9. Destructuring Function Parameters

You can destructure an array passed as a function argument.

```javascript
function calculateTotal([price, quantity]) {
    return price * quantity;
}

const product = [500, 3];

console.log(calculateTotal(product)); // 1500
```

The function receives an array and extracts its first two elements directly.

## 10. Destructuring with Iterables

Array destructuring works with iterable values, not only arrays.

Example with a string:

```javascript
const [first, second, third] = "CAT";

console.log(first);  // C
console.log(second); // A
console.log(third);  // T
```

Example with a Set:

```javascript
const values = new Set([10, 20, 30]);

const [a, b, c] = values;

console.log(a, b, c); // 10 20 30
```

A plain object is not iterable by default, so it cannot be directly array-destructured.

## 11. Practical Example: Getting First and Remaining Items

```javascript
const tasks = [
    "Learn JavaScript",
    "Practice DSA",
    "Build a project",
    "Revise concepts"
];

const [currentTask, ...upcomingTasks] = tasks;

console.log("Current:", currentTask);
console.log("Upcoming:", upcomingTasks);
```

Output:

```text
Current: Learn JavaScript

Upcoming:
[
    "Practice DSA",
    "Build a project",
    "Revise concepts"
]
```

## 12. Array Destructuring vs Object Destructuring

| Array Destructuring | Object Destructuring |
|---|---|
| Based on position | Based on property names |
| Uses `[]` | Uses `{}` |
| Variable names can be chosen freely | Variable names usually match property names |
| Can skip elements using commas | Can omit unwanted properties |

Example:

```javascript
const user = {
    name: "Anshika",
    age: 22
};

const { name, age } = user;
```

## 13. Common Mistakes

### Mistake 1: Incorrect Number of Variables

```javascript
const numbers = [10, 20];

const [a, b, c] = numbers;

console.log(c); // undefined
```

Missing array values become `undefined` unless a default value is provided.

### Mistake 2: Confusing Position with Variable Name

```javascript
const fruits = ["Apple", "Banana"];

const [second, first] = fruits;

console.log(second); // Apple
console.log(first);  // Banana
```

Names do not determine positions.

### Mistake 3: Rest Pattern Not at the End

```javascript
// SyntaxError
const [first, ...rest, last] = [1, 2, 3, 4];
```

### Mistake 4: Destructuring undefined

```javascript
const numbers = undefined;

// TypeError
const [a, b] = numbers;
```

Use a fallback when the input may be missing:

```javascript
const numbers = undefined;

const [a, b] = numbers || [];

console.log(a, b); // undefined undefined
```

## 14. Interview Questions

1. What is array destructuring?
2. How does array destructuring work?
3. How can you skip elements during destructuring?
4. What are default values in destructuring?
5. When are default values applied?
6. What is the rest pattern?
7. Why must the rest pattern appear last?
8. How can you swap two variables using destructuring?
9. Can nested arrays be destructured?
10. Can strings be destructured using array destructuring?
11. Can a Set be destructured?
12. What happens if the array contains fewer elements than the variables?
13. What happens when you destructure `null` or `undefined`?
14. What is the difference between array and object destructuring?
15. How can a function return multiple values using an array?

## 15. Output-Based Practice

Predict the output before running the code.

### Q1

```javascript
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a, b, c);
```

### Q2

```javascript
const arr = [10, 20, 30, 40];

const [a, , c] = arr;

console.log(a, c);
```

### Q3

```javascript
const arr = [10];

const [a, b = 20, c = 30] = arr;

console.log(a, b, c);
```

### Q4

```javascript
const arr = [10, undefined, null];

const [a = 1, b = 2, c = 3] = arr;

console.log(a, b, c);
```

### Q5

```javascript
const arr = [1, 2, 3, 4, 5];

const [first, ...rest] = arr;

console.log(first);
console.log(rest);
```

### Q6

```javascript
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b);
```

### Q7

```javascript
const arr = [1, [2, 3], 4];

const [a, [b, c], d] = arr;

console.log(a, b, c, d);
```

### Q8

```javascript
const [a, b, ...rest] = "HELLO";

console.log(a, b, rest);
```

### Q9

```javascript
const arr = [10, 20, 30];

const [a, ...rest] = arr;

rest.push(40);

console.log(arr);
console.log(rest);
```

### Q10

```javascript
const arr = [null, false, 0, undefined];

const [a = 1, b = 2, c = 3, d = 4] = arr;

console.log(a, b, c, d);
```

## 16. Coding Practice

### Beginner

1. Extract the first, second and third elements from an array.
2. Extract the first and last elements using destructuring.
3. Skip the second and fourth elements.
4. Use default values when array elements are missing.
5. Swap two variables using destructuring.

### Intermediate

6. Extract the first element and store the remaining elements in another array.
7. Destructure a nested array.
8. Create a function that returns an array containing name, age and role, then destructure its result.
9. Write a function that accepts an array and calculates the product of its first two elements.
10. Destructure a string and a Set.

### Advanced

11. Write a function that accepts an array of student records and uses destructuring to extract student details.
12. Given a matrix, destructure its first row and second row.
13. Write a function that accepts an array and returns the first element, last element and middle elements.
14. Handle potentially missing array inputs safely using destructuring.
15. Swap three variables using array destructuring.

## 17. Quick Revision

- Array destructuring extracts values based on position.
- It uses square brackets `[]`.
- Empty commas skip elements.
- Default values are used when a value is `undefined`.
- Rest collects remaining elements into a new array.
- Rest must be the last pattern element.
- Nested arrays can be destructured.
- Strings and Sets are iterable and can be destructured.
- Destructuring can simplify variable swapping.

## Official Documentation

- [Destructuring Assignment — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [JavaScript Destructuring — JavaScript.info](https://javascript.info/destructuring-assignment)

**Topic 10 Complete — Array Destructuring**

