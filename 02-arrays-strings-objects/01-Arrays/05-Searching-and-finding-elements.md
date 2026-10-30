# Topic 5: Searching and Finding Elements in JavaScript Arrays

## 1. Introduction

JavaScript provides several built-in methods to search for elements in an array.

These methods help us:
- Check whether an element exists.
- Find the position of an element.
- Find an element based on a condition.
- Find the first or last matching element.
- Check whether some or all elements satisfy a condition.

Important methods:

| Method | Purpose | Return Value |
|---|---|---|
| `indexOf()` | Find first matching index | Index or -1 |
| `lastIndexOf()` | Find last matching index | Index or -1 |
| `includes()` | Check whether value exists | Boolean |
| `find()` | Find first matching element | Element or undefined |
| `findIndex()` | Find first matching index using condition | Index or -1 |
| `findLast()` | Find last matching element | Element or undefined |
| `findLastIndex()` | Find last matching index using condition | Index or -1 |
| `some()` | Check whether at least one element matches | Boolean |
| `every()` | Check whether all elements match | Boolean |

---

## 2. indexOf() Method

The `indexOf()` method returns the first index at which a specified value is found.

If the value does not exist, it returns `-1`.

### Syntax

```javascript
array.indexOf(searchElement, fromIndex);
```

Parameters:
- `searchElement`: Value to search for.
- `fromIndex`: Optional starting index.

### Example 1: Basic Search

```javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(50)); // 4
console.log(numbers.indexOf(100)); // -1
```

### Example 2: Duplicate Elements

```javascript
let numbers = [10, 20, 30, 20, 40];

console.log(numbers.indexOf(20)); // 1
```

It returns the first matching index.

### Example 3: Using fromIndex

```javascript
let numbers = [10, 20, 30, 20, 40];

console.log(numbers.indexOf(20, 2)); // 3
```

Searching starts at index 2.

### Important: NaN

```javascript
let arr = [10, NaN, 20];

console.log(arr.indexOf(NaN)); // -1
```

`indexOf()` uses strict equality (`===`) for matching, and `NaN === NaN` is false.

---

## 3. lastIndexOf() Method

The `lastIndexOf()` method returns the last index at which a specified element is found.

### Syntax

```javascript
array.lastIndexOf(searchElement, fromIndex);
```

### Example

```javascript
let numbers = [10, 20, 30, 20, 40, 20];

console.log(numbers.lastIndexOf(20)); // 5
console.log(numbers.lastIndexOf(40)); // 4
console.log(numbers.lastIndexOf(100)); // -1
```

### Using fromIndex

```javascript
let arr = [10, 20, 30, 20, 40];

console.log(arr.lastIndexOf(20, 3)); // 3
```

The search proceeds backwards, beginning at index 3.

**Difference between indexOf() and lastIndexOf():**

| indexOf() | lastIndexOf() |
|---|---|
| Searches from left to right | Searches from right to left |
| Returns first matching index | Returns last matching index |
| Default starting position is 0 | Default starting position is the last index |

---

## 4. includes() Method

The `includes()` method checks whether an array contains a particular value.

It returns `true` or `false`.

### Syntax

```javascript
array.includes(searchElement, fromIndex);
```

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false
```

### Using fromIndex

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.includes(20, 2)); // false
console.log(numbers.includes(30, 2)); // true
```

### Important: includes() and NaN

```javascript
let arr = [10, NaN, 20];

console.log(arr.includes(NaN)); // true
```

Unlike `indexOf()`, `includes()` can find `NaN`.

It uses SameValueZero comparison.

---

## 5. find() Method

The `find()` method returns the first element that satisfies a given condition.

It accepts a callback function.

### Syntax

```javascript
array.find(callback(element, index, array));
```

The callback receives:
- `element`: Current element.
- `index`: Current index.
- `array`: Original array.

### Example 1: Find a Number

```javascript
let numbers = [10, 25, 30, 45, 50];

let result = numbers.find(num => num > 30);

console.log(result); // 45
```

Explanation:

- 10 > 30 → false
- 25 > 30 → false
- 30 > 30 → false
- 45 > 30 → true

The method returns 45 and stops searching.

### Example 2: Find an Object

```javascript
let students = [
    { id: 1, name: "Anshika", marks: 85 },
    { id: 2, name: "Rahul", marks: 70 },
    { id: 3, name: "Priya", marks: 92 }
];

let student = students.find(s => s.id === 2);

console.log(student);
// { id: 2, name: "Rahul", marks: 70 }
```

### When No Element Is Found

```javascript
let numbers = [10, 20, 30];

let result = numbers.find(num => num > 100);

console.log(result); // undefined
```

**Important:** `find()` returns the element, not its index.

---

## 6. findIndex() Method

The `findIndex()` method returns the index of the first element satisfying a condition.

### Example

```javascript
let numbers = [10, 25, 30, 45, 50];

let result = numbers.findIndex(num => num > 30);

console.log(result); // 3
```

### When No Element Is Found

```javascript
let numbers = [10, 20, 30];

let result = numbers.findIndex(num => num > 100);

console.log(result); // -1
```

### find() vs findIndex()

```javascript
let numbers = [10, 20, 30, 40];

let value = numbers.find(num => num > 20);
let index = numbers.findIndex(num => num > 20);

console.log(value); // 30
console.log(index); // 2
```

| find() | findIndex() |
|---|---|
| Returns matching element | Returns matching index |
| Returns undefined if not found | Returns -1 if not found |
| Uses a callback | Uses a callback |

---

## 7. findLast() Method

The `findLast()` method searches from right to left and returns the last element satisfying the condition.

```javascript
let numbers = [10, 20, 30, 40, 50, 60];

let result = numbers.findLast(num => num > 25);

console.log(result); // 60
```

It checks elements from the end and returns the first match encountered during that backward search.

### Example with Duplicate Values

```javascript
let numbers = [10, 20, 30, 20, 40];

let result = numbers.findLast(num => num === 20);

console.log(result); // 20
```

The returned value is 20, but the matching occurrence is at index 3.

---

## 8. findLastIndex() Method

The `findLastIndex()` method returns the index of the last element satisfying a condition.

```javascript
let numbers = [10, 20, 30, 20, 40];

let result = numbers.findLastIndex(num => num === 20);

console.log(result); // 3
```

If no element matches:

```javascript
let numbers = [10, 20, 30];

console.log(numbers.findLastIndex(num => num > 100)); // -1
```

### findLast() vs findLastIndex()

| findLast() | findLastIndex() |
|---|---|
| Returns matching element | Returns matching index |
| Returns undefined if not found | Returns -1 if not found |
| Searches from right to left | Searches from right to left |

---

## 9. some() Method

The `some()` method checks whether at least one element satisfies a condition.

It returns a boolean.

### Example

```javascript
let numbers = [10, 20, 30, 45];

let result = numbers.some(num => num % 2 !== 0);

console.log(result); // true
```

Explanation:

- 10 is even.
- 20 is even.
- 30 is even.
- 45 is odd.

At least one element satisfies the condition, so the result is true.

### Example: Check Passing Students

```javascript
let marks = [35, 40, 25, 60];

let result = marks.some(mark => mark >= 50);

console.log(result); // true
```

### When No Element Matches

```javascript
let numbers = [2, 4, 6, 8];

console.log(numbers.some(num => num % 2 !== 0)); // false
```

**Important:** `some()` stops as soon as it finds the first matching element.

---

## 10. every() Method

The `every()` method checks whether all elements satisfy a condition.

It returns a boolean.

### Example

```javascript
let numbers = [2, 4, 6, 8];

let result = numbers.every(num => num % 2 === 0);

console.log(result); // true
```

Every element is even, so the result is true.

### Example: Check Passing Students

```javascript
let marks = [60, 75, 80, 90];

let result = marks.every(mark => mark >= 40);

console.log(result); // true
```

### When One Element Does Not Match

```javascript
let numbers = [2, 4, 5, 8];

console.log(numbers.every(num => num % 2 === 0)); // false
```

**Important:** `every()` stops as soon as it finds an element that does not satisfy the condition.

### Empty Array Behavior

```javascript
let arr = [];

console.log(arr.some(num => num > 10));  // false
console.log(arr.every(num => num > 10)); // true
```

Why does `every()` return true?

Because there is no element that violates the condition. This is called vacuous truth.

---

## 11. Difference Between some() and every()

| some() | every() |
|---|---|
| Checks at least one element | Checks all elements |
| Returns true if one matches | Returns true if all match |
| Stops at first true result | Stops at first false result |
| Empty array returns false | Empty array returns true |

Example:

```javascript
let numbers = [2, 4, 5, 8];

console.log(numbers.some(num => num % 2 !== 0));  // true
console.log(numbers.every(num => num % 2 !== 0)); // false
```

---

## 12. Important Difference Between Search Methods

Consider this array:

```javascript
let numbers = [10, 20, 30, 20, 40];
```

| Method | Example | Result |
|---|---|---|
| indexOf | `numbers.indexOf(20)` | 1 |
| lastIndexOf | `numbers.lastIndexOf(20)` | 3 |
| includes | `numbers.includes(20)` | true |
| find | `numbers.find(n => n > 25)` | 30 |
| findIndex | `numbers.findIndex(n => n > 25)` | 2 |
| findLast | `numbers.findLast(n => n < 40)` | 20 |
| findLastIndex | `numbers.findLastIndex(n => n < 40)` | 3 |
| some | `numbers.some(n => n > 35)` | true |
| every | `numbers.every(n => n > 5)` | true |

---

## 13. Important Concepts and Common Mistakes

### 13.1 Searching Objects

```javascript
let students = [
    { id: 1, name: "Anshika" },
    { id: 2, name: "Rahul" }
];

console.log(students.indexOf({ id: 1, name: "Anshika" }));
// -1
```

Why?

Because objects are compared by reference, not by their contents.

Use `find()` instead:

```javascript
let result = students.find(student => student.id === 1);

console.log(result);
// { id: 1, name: "Anshika" }
```

### 13.2 Callback Return Value

Incorrect:

```javascript
let numbers = [10, 20, 30];

let result = numbers.find(num => {
    num > 15;
});

console.log(result); // undefined
```

Why?

The callback does not return anything.

Correct:

```javascript
let result = numbers.find(num => {
    return num > 15;
});

console.log(result); // 20
```

Or:

```javascript
let result = numbers.find(num => num > 15);
```

### 13.3 These Methods Do Not Modify the Original Array

The search methods covered here do not mutate the original array.

They either return:
- An element.
- An index.
- A boolean.
- `undefined` or `-1` when no match is found.

---

## 14. Time Complexity

For a normal dense array:

| Method | Typical Time Complexity |
|---|---|
| indexOf() | O(n) |
| lastIndexOf() | O(n) |
| includes() | O(n) |
| find() | O(n) |
| findIndex() | O(n) |
| findLast() | O(n) |
| findLastIndex() | O(n) |
| some() | O(n) |
| every() | O(n) |

These methods can stop early when a match or failure is found, so actual work may be less than n.

---

## 15. Interview Questions

**Q1. What is the difference between indexOf() and findIndex()?**

`indexOf()` searches for a specific value, while `findIndex()` searches using a condition.

**Q2. What is the difference between find() and filter()?**

`find()` returns the first matching element. `filter()` returns a new array containing all matching elements.

**Q3. What is the difference between some() and every()?**

`some()` checks whether at least one element matches; `every()` checks whether all elements match.

**Q4. Why does indexOf(NaN) return -1?**

Because `indexOf()` uses strict equality, and `NaN === NaN` is false.

**Q5. Why does includes(NaN) return true when NaN exists?**

Because `includes()` uses SameValueZero comparison, which treats NaN as equal to itself.

**Q6. What does find() return if no element matches?**

Undefined.

**Q7. What does findIndex() return if no element matches?**

-1.

**Q8. Do some() and every() modify the original array?**

No.

**Q9. What does every() return for an empty array?**

True.

**Q10. Can find() search for objects based on a property?**

Yes. We can use a callback such as `students.find(s => s.id === 2)`.

---

## 16. Output-Based Practice

Predict the output before executing.

### Question 1

```javascript
let arr = [10, 20, 30, 20, 40];

console.log(arr.indexOf(20));
console.log(arr.lastIndexOf(20));
console.log(arr.includes(20));
```

### Question 2

```javascript
let arr = [5, 10, 15, 20];

console.log(arr.find(num => num > 10));
console.log(arr.findIndex(num => num > 10));
```

### Question 3

```javascript
let arr = [2, 4, 6, 8];

console.log(arr.some(num => num > 5));
console.log(arr.every(num => num > 5));
```

### Question 4

```javascript
let arr = [10, 20, 30, 40, 50];

console.log(arr.findLast(num => num < 40));
console.log(arr.findLastIndex(num => num < 40));
```

### Question 5

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.some(num => num > 10));
console.log(arr.every(num => num > 0));
```

### Question 6

```javascript
let arr = [NaN, 10, 20];

console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));
```

### Question 7

```javascript
let arr = [];

console.log(arr.some(num => num > 0));
console.log(arr.every(num => num > 0));
```

### Question 8

```javascript
let students = [
    { id: 1, marks: 70 },
    { id: 2, marks: 90 },
    { id: 3, marks: 85 }
];

console.log(students.find(s => s.marks > 80));
console.log(students.findIndex(s => s.marks > 80));
```

---

## 17. Coding Practice

### Beginner Level

1. Find the index of a given number using `indexOf()`.
2. Check whether a particular fruit exists using `includes()`.
3. Find the last occurrence of a number using `lastIndexOf()`.
4. Find the first even number using `find()`.
5. Find the index of the first number greater than 50 using `findIndex()`.

### Intermediate Level

6. Check whether an array contains at least one negative number using `some()`.
7. Check whether all numbers are positive using `every()`.
8. Find the first student whose marks are greater than 80.
9. Find the last even number using `findLast()`.
10. Find the last index of a number greater than 25 using `findLastIndex()`.

### Advanced Level

11. Find the second occurrence of a given element.
12. Find all indexes of a particular element without using `filter()`.
13. Check whether all students passed an examination.
14. Check whether at least one product has a price below 500.
15. Find the last student whose marks are greater than 75.
16. Search for an object in an array using multiple conditions.
17. Write your own function that behaves like `find()` using a loop.

---

## 18. Quick Revision

- `indexOf()` returns the first matching index.
- `lastIndexOf()` returns the last matching index.
- `includes()` returns true or false.
- `find()` returns the first matching element.
- `findIndex()` returns the first matching index.
- `findLast()` returns the last matching element.
- `findLastIndex()` returns the last matching index.
- `some()` checks whether at least one element matches.
- `every()` checks whether all elements match.
- These methods do not mutate the original array.
- `indexOf()` cannot find NaN, but `includes()` can.

## Documentation

- [MDN — indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [MDN — lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
- [MDN — includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN — find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN — findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [MDN — some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [MDN — every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)