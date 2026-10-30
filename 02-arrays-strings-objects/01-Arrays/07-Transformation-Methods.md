

# Topic 7 — Array Transformation Methods in JavaScript

## 1. Introduction

JavaScript provides methods to transform arrays, calculate values, and flatten nested arrays.

The three important methods are:

1. `reduce()` — combines array elements into a single result.
2. `flat()` — converts nested arrays into a single-level or less-nested array.
3. `flatMap()` — transforms each element and flattens the result by one level.

These methods are commonly used in data processing, React applications, and coding interviews.

---

# Part A — reduce()

## 2. What is reduce()?

The `reduce()` method executes a callback function on every element of an array and reduces the array to a single accumulated result.

The result can be:
- A number
- A string
- An object
- Another array
- Any other value

### Syntax

```javascript
array.reduce((accumulator, currentValue, index, array) => {
    // Return updated accumulator
}, initialValue);
```

### Parameters

| Parameter | Description |
|---|---|
| `accumulator` | Stores the accumulated result |
| `currentValue` | Current element being processed |
| `index` | Index of the current element |
| `array` | Original array |
| `initialValue` | Initial value of the accumulator |

**Important:** Always consider providing an `initialValue`. It makes the behavior predictable, especially for empty arrays.

## 3. How reduce() Works

Example:

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(result); // 100
```

### Step-by-step execution

Initial accumulator = `0`

| Iteration | Accumulator | Current Value | New Accumulator |
|---|---:|---:|---:|
| 1 | 0 | 10 | 10 |
| 2 | 10 | 20 | 30 |
| 3 | 30 | 30 | 60 |
| 4 | 60 | 40 | 100 |

Final result:

```javascript
100
```

The callback's returned value becomes the accumulator for the next iteration.

## 4. Common Uses of reduce()

### 4.1 Calculate Sum

```javascript
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 100
```

### 4.2 Calculate Product

```javascript
const numbers = [2, 3, 4];

const product = numbers.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(product); // 24
```

### 4.3 Find Maximum Value

```javascript
const numbers = [12, 45, 7, 89, 23];

const maximum = numbers.reduce((max, curr) => {
    return curr > max ? curr : max;
}, numbers[0]);

console.log(maximum); // 89
```

For potentially empty arrays, handle the empty case before using `numbers[0]` as the initial value.

### 4.4 Find Minimum Value

```javascript
const numbers = [12, 45, 7, 89, 23];

const minimum = numbers.reduce((min, curr) => {
    return curr < min ? curr : min;
}, numbers[0]);

console.log(minimum); // 7
```

### 4.5 Count Occurrences of Elements

```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(frequency);
```

Output:

```javascript
{
    apple: 3,
    banana: 2,
    orange: 1
}
```

Here:
- `acc` is an object.
- Each fruit becomes a property.
- Its value stores the number of occurrences.

### 4.6 Convert an Array into an Object

```javascript
const users = [
    { id: 1, name: "Anu" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Priya" }
];

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(userMap);
```

Output:

```javascript
{
    1: "Anu",
    2: "Riya",
    3: "Priya"
}
```

### 4.7 Group Objects by Property

```javascript
const students = [
    { name: "A", department: "CSE" },
    { name: "B", department: "IT" },
    { name: "C", department: "CSE" },
    { name: "D", department: "IT" }
];

const grouped = students.reduce((acc, student) => {
    const department = student.department;

    if (!acc[department]) {
        acc[department] = [];
    }

    acc[department].push(student);

    return acc;
}, {});

console.log(grouped);
```

Output:

```javascript
{
    CSE: [
        { name: "A", department: "CSE" },
        { name: "C", department: "CSE" }
    ],
    IT: [
        { name: "B", department: "IT" },
        { name: "D", department: "IT" }
    ]
}
```

This pattern is useful when processing API data.

## 5. What Happens Without initialValue?

The `initialValue` parameter is optional, but omitting it changes how `reduce()` starts.

```javascript
const numbers = [10, 20, 30];

const result = numbers.reduce((acc, curr) => {
    return acc + curr;
});

console.log(result); // 60
```

When no initial value is provided:
- The first array element becomes the accumulator.
- The callback starts from the second element (index 1).

### Important Edge Cases

| Array | Initial Value | Result |
|---|---|---|
| `[1, 2, 3]` | `0` | `6` |
| `[1, 2, 3]` | Not provided | `6` |
| `[]` | `0` | `0` |
| `[]` | Not provided | TypeError |
| `[5]` | Not provided | `5` |

A single-element array without an initial value returns that element without executing the callback.

## 6. Common Mistakes with reduce()

### Mistake 1: Forgetting to Return the Accumulator

Incorrect:

```javascript
const result = [1, 2, 3].reduce((acc, curr) => {
    acc + curr;
}, 0);
```

Correct:

```javascript
const result = [1, 2, 3].reduce((acc, curr) => {
    return acc + curr;
}, 0);
```

Without a return, the next accumulator becomes `undefined`.

### Mistake 2: Using the Wrong Initial Value

Incorrect:

```javascript
const result = [1, 2, 3].reduce((acc, curr) => {
    return acc + curr;
}, "");
```

This performs string concatenation instead of numeric addition.

Correct:

```javascript
const result = [1, 2, 3].reduce((acc, curr) => {
    return acc + curr;
}, 0);
```

### Mistake 3: Not Returning an Updated Object

Incorrect:

```javascript
const result = [1, 2, 3].reduce((acc, curr) => {
    acc.total += curr;
}, { total: 0 });
```

Correct:

```javascript
const result = [1, 2, 3].reduce((acc, curr) => {
    acc.total += curr;
    return acc;
}, { total: 0 });
```

This example mutates the accumulator object. That is allowed, although immutable approaches may be preferable in some application code.

---

# Part B — reduceRight()

## 7. What is reduceRight()?

`reduceRight()` works like `reduce()`, but processes array elements from right to left.

### Syntax

```javascript
array.reduceRight((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```

### Example

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduceRight((acc, curr) => {
    return acc - curr;
}, 0);

console.log(result); // -2
```

Execution:

| Iteration | Accumulator | Current Value | Result |
|---|---:|---:|---:|
| 1 | 0 | 4 | -4 |
| 2 | -4 | 3 | -7 |
| 3 | -7 | 2 | -9 |
| 4 | -9 | 1 | -10 |

Correction: the final output of this example is **-10**.

### reduce() vs reduceRight()

| reduce() | reduceRight() |
|---|---|
| Iterates left to right | Iterates right to left |
| Starts at first element when no initial value is provided | Starts at last element when no initial value is provided |
| Common for aggregation | Useful when processing order matters |

Both methods skip sparse array holes.

---

# Part C — flat()

## 8. What is flat()?

The `flat()` method creates a new array by flattening nested arrays up to a specified depth.

### Syntax

```javascript
array.flat(depth);
```

- `depth` specifies how many nested levels to flatten.
- Default depth is `1`.
- `Infinity` flattens all nested array levels.

### Example 1: Default Flattening

```javascript
const numbers = [1, 2, [3, 4], [5, 6]];

const result = numbers.flat();

console.log(result);
```

Output:

```javascript
[1, 2, 3, 4, 5, 6]
```

### Example 2: Nested Arrays

```javascript
const numbers = [1, [2, [3, [4]]]];

console.log(numbers.flat());
```

Output:

```javascript
[1, 2, [3, [4]]]
```

Only one level is flattened.

### Example 3: Specify Depth

```javascript
const numbers = [1, [2, [3, [4]]]];

console.log(numbers.flat(2));
```

Output:

```javascript
[1, 2, 3, [4]]
```

### Example 4: Flatten Completely

```javascript
const numbers = [1, [2, [3, [4, 5]]]];

console.log(numbers.flat(Infinity));
```

Output:

```javascript
[1, 2, 3, 4, 5]
```

### Important Properties of flat()

1. It returns a new array.
2. It does not modify the original array.
3. Its default depth is `1`.
4. It removes empty slots (holes) at the levels being flattened.
5. It does not flatten arrays stored inside object properties.
6. Nested objects remain references to the same objects.

Example:

```javascript
const original = [1, [2, 3]];

const flattened = original.flat();

console.log(original);   // [1, [2, 3]]
console.log(flattened);  // [1, 2, 3]
```

---

# Part D — flatMap()

## 9. What is flatMap()?

The `flatMap()` method first maps each element and then flattens the resulting array by exactly one level.

It is equivalent in behavior to:

```javascript
array.map(callback).flat(1);
```

### Syntax

```javascript
array.flatMap((currentValue, index, array) => {
    return transformedValue;
});
```

### Example 1: Basic Example

```javascript
const numbers = [1, 2, 3];

const result = numbers.flatMap(num => {
    return [num, num * 2];
});

console.log(result);
```

Output:

```javascript
[1, 2, 2, 4, 3, 6]
```

Each number becomes an array containing the original number and its double. The resulting nested arrays are flattened by one level.

### Example 2: Convert Words into Characters

```javascript
const words = ["Hi", "Hello"];

const result = words.flatMap(word => {
    return word.split("");
});

console.log(result);
```

Output:

```javascript
["H", "i", "H", "e", "l", "l", "o"]
```

### Example 3: Remove Elements Using flatMap()

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.flatMap(num => {
    return num % 2 === 0 ? [num] : [];
});

console.log(result);
```

Output:

```javascript
[2, 4, 6]
```

Explanation:
- Even numbers return an array containing the number.
- Odd numbers return an empty array.
- `flatMap()` flattens the result by one level.

### Example 4: One-Level Flattening Only

```javascript
const numbers = [1, 2];

const result = numbers.flatMap(num => {
    return [[num, num * 2]];
});

console.log(result);
```

Output:

```javascript
[[1, 2], [2, 4]]
```

It does not flatten recursively. Only one level is removed.

---

# Part E — Choosing the Right Method

## 10. map() vs filter() vs reduce() vs flat() vs flatMap()

| Method | Purpose | Returns |
|---|---|---|
| `map()` | Transform every visited element | New array |
| `filter()` | Select elements based on a condition | New array |
| `reduce()` | Accumulate values into one result | Any value |
| `flat()` | Flatten nested arrays | New array |
| `flatMap()` | Transform and flatten one level | New array |

### When Should You Use Each Method?

- Use `map()` when you want to transform every element.
- Use `filter()` when you want to select matching elements.
- Use `reduce()` when you want to calculate or accumulate a result.
- Use `flat()` when you already have nested arrays.
- Use `flatMap()` when you want to transform each element into zero, one, or multiple elements.

## 11. Method Chaining

You can combine multiple array methods to process data.

Example:

```javascript
const numbers = [10, 15, 20, 25, 30, 35];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result); // 120
```

Execution:

1. `filter()` selects `[10, 20, 30]`.
2. `map()` transforms it into `[20, 40, 60]`.
3. `reduce()` calculates `120`.

### Practical Example: Shopping Cart Total

```javascript
const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 1000, quantity: 2 },
    { product: "Keyboard", price: 2000, quantity: 1 }
];

const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);

console.log(total); // 54000
```

This pattern is useful for calculating totals from API data in React applications.

---

# Part F — Complexity and Best Practices

## 12. Time and Space Complexity

| Method | Approximate Time Complexity | Additional Space |
|---|---|---|
| `reduce()` | O(n) | Depends on accumulator |
| `reduceRight()` | O(n) | Depends on accumulator |
| `flat()` | Depends on nested elements traversed | O(k) for output |
| `flatMap()` | O(n + k) | O(k) for output |

Here:
- `n` = number of visited input elements.
- `k` = number of elements in the resulting array.

Actual costs depend on callback work, nesting depth, and output size.

## 13. Best Practices

1. Prefer providing an initial value to `reduce()`.
2. Keep reducer callbacks readable.
3. Do not use `reduce()` just to replace every `for` loop.
4. Use `map()` for straightforward transformations.
5. Use `filter()` for straightforward selection.
6. Use `flat()` when flattening existing nested arrays.
7. Use `flatMap()` when transformation and one-level flattening belong together.
8. Avoid unnecessary intermediate arrays when processing large datasets.
9. Remember that these methods are synchronous.
10. Choose readability over clever one-liners.

---

# Part G — Interview Questions

## 14. Conceptual Questions

1. What is the purpose of `reduce()`?
2. What are the four callback parameters of `reduce()`?
3. Why is providing an initial value recommended?
4. What happens when `reduce()` is called on an empty array without an initial value?
5. What happens when a single-element array uses `reduce()` without an initial value?
6. What is the difference between `reduce()` and `reduceRight()`?
7. Does `reduce()` modify the original array?
8. What is the purpose of `flat()`?
9. What is the default depth of `flat()`?
10. What does `flat(Infinity)` do?
11. What is the difference between `flat()` and `flatMap()`?
12. Is `flatMap()` equivalent to `map().flat()`?
13. Does `flatMap()` flatten multiple nested levels?
14. Can `reduce()` return an object or an array?
15. When should you prefer `map()` over `reduce()`?

## 15. Output-Based Practice

Try to predict each output before running the code.

### Question 1

```javascript
const arr = [1, 2, 3, 4];

const result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 5);

console.log(result);
```

### Question 2

```javascript
const arr = [2, 3, 4];

const result = arr.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(result);
```

### Question 3

```javascript
const arr = [10, 20, 30];

const result = arr.reduce((acc, curr, index) => {
    return acc + curr + index;
}, 0);

console.log(result);
```

### Question 4

```javascript
const arr = [1, 2, 3];

const result = arr.reduce((acc, curr) => {
    return acc + curr;
});

console.log(result);
```

### Question 5

```javascript
const arr = [];

const result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 100);

console.log(result);
```

### Question 6

```javascript
const arr = [1, [2, 3], [4, [5]]];

console.log(arr.flat());
```

### Question 7

```javascript
const arr = [1, [2, [3, 4]]];

console.log(arr.flat(2));
```

### Question 8

```javascript
const arr = [1, 2, 3];

const result = arr.flatMap(num => [num, num + 10]);

console.log(result);
```

### Question 9

```javascript
const arr = [1, 2, 3];

const result = arr.flatMap(num => [[num * 2]]);

console.log(result);
```

### Question 10

```javascript
const arr = ["a", "b", "a", "c", "b", "a"];

const result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(result);
```

---

# Part H — Coding Practice

**Do not look for solutions immediately. Implement these independently.**

## Beginner Level

1. Calculate the sum of all elements using `reduce()`.
2. Calculate the product of all elements using `reduce()`.
3. Find the maximum element using `reduce()`.
4. Find the minimum element using `reduce()`.
5. Count the number of even and odd elements using `reduce()`.

## Intermediate Level

6. Count the frequency of each element in an array.
7. Calculate the total price of products in a shopping cart.
8. Convert an array of student objects into an object using student IDs as keys.
9. Group students according to their department using `reduce()`.
10. Flatten a nested array using `flat(Infinity)`.
11. Flatten a nested array by one level using `flat()`.

## Advanced Level

12. Implement a custom version of `reduce()` without using the built-in method.
13. Implement a custom flatten function that supports a specified depth.
14. Use `flatMap()` to generate all pairs of elements from two arrays.
15. Given an array of transactions, calculate the total amount for each transaction type.
16. Given an array of products, group them by category and calculate the total price per category.

---

# Part I — Quick Revision

## 16. Important Points to Remember

| Method | Key Point |
|---|---|
| `reduce()` | Accumulates elements into a single result |
| `reduceRight()` | Reduces from right to left |
| `flat()` | Flattens nested arrays |
| `flat(Infinity)` | Flattens all array nesting levels |
| `flatMap()` | Maps and flattens one level |
| `initialValue` | Sets the starting accumulator |
| `map()` | Transforms each visited element |
| `filter()` | Selects matching elements |

### One-Line Interview Answers

- **reduce():** Processes array elements and combines them into one accumulated result.
- **reduceRight():** Performs reduction from right to left.
- **flat():** Creates a new array with nested arrays flattened to a specified depth.
- **flatMap():** Maps elements and flattens the result by one level.

---

# Part J — Official Documentation

1. [Array.prototype.reduce() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
2. [Array.prototype.reduceRight() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
3. [Array.prototype.flat() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
4. [Array.prototype.flatMap() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

---

**Topic 7 Complete — Array Transformation Methods**

Next topic: **Topic 8 — Sorting and Reversing Arrays (`sort()`, `reverse()`, `toSorted()`, `toReversed()`).**

