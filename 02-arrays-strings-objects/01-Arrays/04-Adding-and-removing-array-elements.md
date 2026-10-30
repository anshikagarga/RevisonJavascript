# Topic 4: Adding and Removing Array Elements

## 1. Introduction

JavaScript provides built-in array methods to add and remove elements.

These methods can modify the original array.

The five important methods are:

| Method | Purpose | Position |
|---|---|---|
| `push()` | Adds elements | End |
| `pop()` | Removes an element | End |
| `unshift()` | Adds elements | Beginning |
| `shift()` | Removes an element | Beginning |
| `splice()` | Adds, removes, or replaces elements | Any position |

These methods are generally known as **mutating methods** because they modify the original array.

---

## 2. push() Method

The `push()` method adds one or more elements to the end of an array.

### Syntax

```javascript
array.push(element1, element2, ...);
```

### Example 1: Adding One Element

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]
```

### Example 2: Adding Multiple Elements

```javascript
let numbers = [10, 20];

numbers.push(30, 40, 50);

console.log(numbers);
// [10, 20, 30, 40, 50]
```

### Return Value

`push()` returns the new length of the array.

```javascript
let numbers = [10, 20, 30];

let result = numbers.push(40);

console.log(result); // 4
console.log(numbers); // [10, 20, 30, 40]
```

**Important:** `push()` does not return the modified array. It returns the new array length.

---

## 3. pop() Method

The `pop()` method removes the last element from an array.

### Syntax

```javascript
array.pop();
```

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
// ["Apple", "Banana"]
```

### Return Value

`pop()` returns the removed element.

```javascript
let numbers = [10, 20, 30];

let removed = numbers.pop();

console.log(removed); // 30
console.log(numbers); // [10, 20]
```

### Removing from an Empty Array

```javascript
let arr = [];

let result = arr.pop();

console.log(result); // undefined
console.log(arr); // []
```

---

## 4. unshift() Method

The `unshift()` method adds one or more elements at the beginning of an array.

### Syntax

```javascript
array.unshift(element1, element2, ...);
```

### Example 1: Adding One Element

```javascript
let numbers = [20, 30, 40];

numbers.unshift(10);

console.log(numbers);
// [10, 20, 30, 40]
```

### Example 2: Adding Multiple Elements

```javascript
let numbers = [30, 40];

numbers.unshift(10, 20);

console.log(numbers);
// [10, 20, 30, 40]
```

### Return Value

`unshift()` returns the new length of the array.

```javascript
let arr = [20, 30];

let result = arr.unshift(10);

console.log(result); // 3
console.log(arr); // [10, 20, 30]
```

**Important:** When multiple elements are passed, their order in the argument list is preserved.

---

## 5. shift() Method

The `shift()` method removes the first element from an array.

### Syntax

```javascript
array.shift();
```

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
// ["Banana", "Mango"]
```

### Return Value

`shift()` returns the removed element.

```javascript
let numbers = [10, 20, 30];

let removed = numbers.shift();

console.log(removed); // 10
console.log(numbers); // [20, 30]
```

### Removing from an Empty Array

```javascript
let arr = [];

console.log(arr.shift()); // undefined
```

---

## 6. Difference Between push(), pop(), shift() and unshift()

| Method | Operation | Return Value |
|---|---|---|
| `push()` | Adds at the end | New length |
| `pop()` | Removes from the end | Removed element |
| `unshift()` | Adds at the beginning | New length |
| `shift()` | Removes from the beginning | Removed element |

### Visual Understanding

```text
Original Array:
[10, 20, 30]

push(40):
[10, 20, 30, 40]

pop():
[10, 20]

unshift(5):
[5, 10, 20, 30]

shift():
[20, 30]
```

---

## 7. splice() Method

The `splice()` method can add, remove, and replace elements at any position in an array.

Unlike `slice()`, `splice()` modifies the original array.

### Syntax

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

Parameters:

- `start`: Index where the operation begins.
- `deleteCount`: Number of elements to remove.
- `item1, item2`: Optional elements to insert.

### 7.1 Removing Elements

```javascript
let numbers = [10, 20, 30, 40, 50];

numbers.splice(1, 2);

console.log(numbers);
// [10, 40, 50]
```

Explanation:

- Start index = 1
- Delete count = 2
- Removed elements = 20 and 30

### 7.2 Adding Elements

We can insert elements without removing existing elements by setting `deleteCount` to zero.

```javascript
let numbers = [10, 20, 40, 50];

numbers.splice(2, 0, 30);

console.log(numbers);
// [10, 20, 30, 40, 50]
```

Explanation:

- Start index = 2
- Delete count = 0
- Insert 30 at index 2.

### 7.3 Replacing Elements

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
// ["Apple", "Orange", "Mango"]
```

Explanation:

- Start index = 1
- Delete count = 1
- Insert "Orange" at index 1.

### 7.4 Removing All Elements from a Position

```javascript
let numbers = [10, 20, 30, 40, 50];

numbers.splice(2);

console.log(numbers);
// [10, 20]
```

When `deleteCount` is omitted, all elements from the starting index to the end are removed.

### 7.5 Using Negative Start Index

Negative indexes count from the end.

```javascript
let numbers = [10, 20, 30, 40, 50];

numbers.splice(-2, 1);

console.log(numbers);
// [10, 20, 30, 50]
```

Here, `-2` represents index 3.

### 7.6 Return Value of splice()

`splice()` returns a new array containing the removed elements.

```javascript
let numbers = [10, 20, 30, 40];

let removed = numbers.splice(1, 2);

console.log(removed); // [20, 30]
console.log(numbers); // [10, 40]
```

**Interview Point:** `splice()` modifies the original array and returns the removed elements.

---

## 8. Important splice() Edge Cases

### Case 1: deleteCount = 0

```javascript
let arr = [10, 20, 30];

let removed = arr.splice(1, 0, 100);

console.log(arr); // [10, 100, 20, 30]
console.log(removed); // []
```

### Case 2: deleteCount Greater Than Available Elements

```javascript
let arr = [10, 20, 30];

arr.splice(1, 10);

console.log(arr); // [10]
```

It removes all available elements from the starting position.

### Case 3: Start Index Greater Than Array Length

```javascript
let arr = [10, 20, 30];

arr.splice(10, 0, 40);

console.log(arr); // [10, 20, 30, 40]
```

The starting position is treated as the end of the array.

### Case 4: Negative Start Index

```javascript
let arr = [10, 20, 30, 40];

arr.splice(-1, 0, 35);

console.log(arr); // [10, 20, 30, 35, 40]
```

---

## 9. Mutating vs Non-Mutating Methods

A mutating method changes the original array.

Examples:

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

Non-mutating methods generally return a new value or array without modifying the original array.

Examples:

- `slice()`
- `concat()`
- `map()`
- `filter()`
- `toSorted()`
- `toReversed()`
- `toSpliced()`

Example:

```javascript
let numbers = [10, 20, 30];

let result = numbers.slice(0, 2);

console.log(numbers); // [10, 20, 30]
console.log(result);  // [10, 20]
```

We will study `slice()` and other copying methods separately.

---

## 10. Time Complexity

For ordinary dense arrays, typical performance is:

| Method | Typical Time Complexity |
|---|---|
| `push()` | O(1) amortized |
| `pop()` | O(1) |
| `shift()` | O(n) |
| `unshift()` | O(n) |
| `splice()` | Depends on elements shifted; generally O(n) |

Why are `shift()` and `unshift()` generally O(n)?

Because elements may need to be moved to different indexes.

For example:

```javascript
let arr = [10, 20, 30, 40];

arr.unshift(5);
```

Conceptually, the existing elements need to move one position to the right.

---

## 11. Interview Questions

**Q1. What is the difference between push() and unshift()?**

`push()` adds elements at the end, whereas `unshift()` adds elements at the beginning.

**Q2. What is the difference between pop() and shift()?**

`pop()` removes the last element, whereas `shift()` removes the first element.

**Q3. What does push() return?**

It returns the new length of the array.

**Q4. What does pop() return?**

It returns the removed element.

**Q5. What does splice() return?**

It returns an array containing the removed elements.

**Q6. Does splice() modify the original array?**

Yes.

**Q7. How can we insert an element without deleting anything using splice()?**

Use a delete count of zero.

**Q8. Which methods generally have O(n) time complexity among these methods?**

`shift()`, `unshift()`, and `splice()`.

**Q9. Can splice() use negative indexes?**

Yes. Negative indexes count from the end of the array.

**Q10. What happens when pop() or shift() is called on an empty array?**

Both return `undefined`.

---

## 12. Output-Based Practice

Predict the output before executing each program.

### Question 1

```javascript
let arr = [10, 20, 30];

let result = arr.push(40, 50);

console.log(arr);
console.log(result);
```

### Question 2

```javascript
let arr = [10, 20, 30, 40];

let a = arr.pop();
let b = arr.shift();

console.log(a);
console.log(b);
console.log(arr);
```

### Question 3

```javascript
let arr = [10, 20, 30];

let result = arr.unshift(5, 0);

console.log(result);
console.log(arr);
```

### Question 4

```javascript
let arr = [10, 20, 30, 40, 50];

let removed = arr.splice(1, 2, 100, 200);

console.log(arr);
console.log(removed);
```

### Question 5

```javascript
let arr = [1, 2, 3, 4, 5];

arr.splice(-2, 1);

console.log(arr);
```

### Question 6

```javascript
let arr = [10, 20, 30];

let result = arr.splice(1, 0, 100);

console.log(result);
console.log(arr);
```

### Question 7

```javascript
let arr = [10, 20, 30];

let first = arr.push(40);
let second = arr.pop();

console.log(first);
console.log(second);
console.log(arr);
```

### Question 8

```javascript
let arr = [10, 20, 30, 40];

let removed = arr.splice(2);

console.log(removed);
console.log(arr);
```

---

## 13. Coding Practice

### Beginner Level

1. Add an element at the end of an array using `push()`.
2. Remove the last element using `pop()`.
3. Add an element at the beginning using `unshift()`.
4. Remove the first element using `shift()`.
5. Add three elements to an array using one `push()` call.

### Intermediate Level

6. Remove the second element using `splice()`.
7. Insert an element at index 2 without removing existing elements.
8. Replace the third element with a new value.
9. Remove the last three elements using `splice()`.
10. Remove an element using a negative starting index.

### Advanced Level

11. Remove all occurrences of a given number from an array using `splice()` and a loop.
12. Insert an element at a user-provided index.
13. Remove duplicate values from an array.
14. Implement a function that removes an element at a given index without using `filter()`.
15. Implement your own simplified version of a function that inserts an element at a given position.

---

## 14. Quick Revision

- `push()` adds elements at the end and returns the new length.
- `pop()` removes the last element and returns it.
- `unshift()` adds elements at the beginning and returns the new length.
- `shift()` removes the first element and returns it.
- `splice()` can add, remove, and replace elements.
- `splice()` returns the removed elements.
- These five methods mutate the original array.
- `shift()`, `unshift()`, and `splice()` generally require O(n) work.

## Documentation

- [MDN — push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN — pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [MDN — unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [MDN — shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [MDN — splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)