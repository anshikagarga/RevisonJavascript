

# Topic 9 — Slicing, Splicing and Copying Arrays in JavaScript

## 1. Introduction

JavaScript provides different methods to extract, modify and copy array elements.

Important methods:

1. `slice()` — extracts a portion of an array without modifying the original.
2. `splice()` — adds, removes or replaces elements in the original array.
3. `toSpliced()` — returns a modified copy without changing the original.
4. `concat()` — combines arrays into a new array.
5. Spread syntax (`...`) — creates shallow copies and combines arrays.

Understanding these methods is essential for JavaScript interviews and React state management.

---

# Part A — slice()

## 2. What is slice()?

The `slice()` method returns a shallow copy of a selected portion of an array.

It does not modify the original array.

### Syntax

```javascript
array.slice(start, end);
```

Parameters:

| Parameter | Description |
|---|---|
| `start` | Starting index, inclusive |
| `end` | Ending index, exclusive |

If `end` is omitted, extraction continues to the end of the array.

### 2.1 Basic Example

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
console.log(numbers);
```

Output:

```javascript
[20, 30, 40]
[10, 20, 30, 40, 50]
```

Explanation:

- Start index is `1`.
- End index is `4`.
- Index `4` is excluded.
- The original array remains unchanged.

### 2.2 slice() with One Argument

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(2));
```

Output:

```javascript
[30, 40, 50]
```

### 2.3 slice() with Negative Index

Negative indexes count from the end.

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(-3));
```

Output:

```javascript
[30, 40, 50]
```

Another example:

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(-4, -1));
```

Output:

```javascript
[20, 30, 40]
```

### 2.4 slice() with No Arguments

```javascript
const numbers = [10, 20, 30];

const copy = numbers.slice();

console.log(copy); // [10, 20, 30]
console.log(copy === numbers); // false
```

This creates a shallow copy of the array.

---

# Part B — splice()

## 3. What is splice()?

The `splice()` method changes the contents of an array by:
- Removing elements.
- Adding elements.
- Replacing elements.

Unlike `slice()`, `splice()` modifies the original array.

### Syntax

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

Parameters:

| Parameter | Description |
|---|---|
| `start` | Index where modification begins |
| `deleteCount` | Number of elements to remove |
| `item1, item2...` | Elements to insert |

The method returns a new array containing the removed elements.

### 3.1 Remove Elements

```javascript
const numbers = [10, 20, 30, 40, 50];

const removed = numbers.splice(1, 2);

console.log(numbers);
console.log(removed);
```

Output:

```javascript
[10, 40, 50]
[20, 30]
```

Explanation:

- Start at index `1`.
- Remove two elements.
- The original array is modified.
- Removed elements are returned.

### 3.2 Add Elements

To insert elements without removing anything, use `deleteCount = 0`.

```javascript
const numbers = [10, 20, 40, 50];

numbers.splice(2, 0, 25, 30);

console.log(numbers);
```

Output:

```javascript
[10, 20, 25, 30, 40, 50]
```

### 3.3 Replace Elements

```javascript
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2, 100, 200);

console.log(numbers);
```

Output:

```javascript
[10, 100, 200, 40]
```

Explanation:

- Start at index `1`.
- Remove two elements.
- Insert `100` and `200`.

### 3.4 Remove Elements from the End

```javascript
const numbers = [10, 20, 30, 40, 50];

numbers.splice(-2, 1);

console.log(numbers);
```

Output:

```javascript
[10, 20, 30, 50]
```

Negative start indexes count from the end.

### 3.5 Omitted deleteCount

If `deleteCount` is omitted, all elements from `start` to the end are removed.

```javascript
const numbers = [10, 20, 30, 40, 50];

numbers.splice(2);

console.log(numbers);
```

Output:

```javascript
[10, 20]
```

Be careful: omitting `deleteCount` is not the same as passing `0`.

```javascript
const a = [1, 2, 3];
a.splice(1, 0, 9);

console.log(a); // [1, 9, 2, 3]
```

---

# Part C — slice() vs splice()

## 4. Important Differences

| Feature | slice() | splice() |
|---|---|---|
| Purpose | Extract elements | Add, remove or replace |
| Modifies original? | No | Yes |
| Returns | Extracted elements | Removed elements |
| Parameters | `start, end` | `start, deleteCount, items...` |
| End index | Exclusive | Not used |
| Negative indexes | Supported | Supported for start |

### Example

```javascript
const arr1 = [10, 20, 30, 40];

const result1 = arr1.slice(1, 3);

console.log(arr1);   // [10, 20, 30, 40]
console.log(result1); // [20, 30]
```

```javascript
const arr2 = [10, 20, 30, 40];

const result2 = arr2.splice(1, 2);

console.log(arr2);   // [10, 40]
console.log(result2); // [20, 30]
```

**Interview tip:** Remember this simple distinction:

- `slice()` = extract without modifying.
- `splice()` = modify the original array.

---

# Part D — toSpliced()

## 5. What is toSpliced()?

`toSpliced()` is the non-mutating version of `splice()`.

It returns a new array containing the result of the requested changes.

### Syntax

```javascript
array.toSpliced(start, deleteCount, item1, item2, ...);
```

### Example 1: Remove Elements

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.toSpliced(1, 2);

console.log(result);  // [10, 40]
console.log(numbers); // [10, 20, 30, 40]
```

### Example 2: Add Elements

```javascript
const numbers = [10, 20, 40];

const result = numbers.toSpliced(2, 0, 30);

console.log(result); // [10, 20, 30, 40]
```

### Example 3: Replace Elements

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.toSpliced(1, 2, 100);

console.log(result); // [10, 100, 40]
```

### Comparison

| Method | Modifies Original? |
|---|---|
| `splice()` | Yes |
| `toSpliced()` | No |

For older environments, use a copy before calling `splice()`:

```javascript
const result = [...numbers];
result.splice(1, 2);
```

---

# Part E — concat()

## 6. What is concat()?

The `concat()` method combines two or more arrays and returns a new array.

It does not modify the original arrays.

### Syntax

```javascript
array1.concat(array2, array3, ...);
```

### Example 1: Combine Two Arrays

```javascript
const first = [10, 20];
const second = [30, 40];

const result = first.concat(second);

console.log(result);
```

Output:

```javascript
[10, 20, 30, 40]
```

### Example 2: Combine Multiple Arrays

```javascript
const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const result = a.concat(b, c);

console.log(result);
```

Output:

```javascript
[1, 2, 3, 4, 5, 6]
```

### Example 3: Add Individual Values

```javascript
const numbers = [1, 2, 3];

const result = numbers.concat(4, 5);

console.log(result);
```

Output:

```javascript
[1, 2, 3, 4, 5]
```

### Important Note

`concat()` creates a shallow result. Nested objects and arrays are not deeply cloned.

---

# Part F — Spread Syntax for Arrays

## 7. What is Spread Syntax?

Spread syntax (`...`) expands an iterable into individual elements.

It is commonly used to:
- Copy arrays.
- Merge arrays.
- Add elements.
- Create new arrays without directly modifying the original.

### 7.1 Copy an Array

```javascript
const original = [10, 20, 30];

const copy = [...original];

console.log(copy);
console.log(original === copy); // false
```

### 7.2 Merge Arrays

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

### 7.3 Add Elements

```javascript
const numbers = [20, 30];

const result = [10, ...numbers, 40];

console.log(result);
```

Output:

```javascript
[10, 20, 30, 40]
```

### 7.4 Insert an Element at a Particular Index Without Mutation

```javascript
const numbers = [10, 20, 40, 50];

const result = [
    ...numbers.slice(0, 2),
    30,
    ...numbers.slice(2)
];

console.log(result);
```

Output:

```javascript
[10, 20, 30, 40, 50]
```

---

# Part G — Shallow Copy and Reference Behavior

## 8. What is a Shallow Copy?

A shallow copy creates a new outer array, but nested objects and arrays are still shared references.

Example:

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

Explanation:

- `copy[0] = 100` changes only the copied array.
- `copy[2].name = "Riya"` changes the shared nested object.
- Both arrays refer to the same object at index `2`.

The following methods create shallow results:

- `slice()`
- `concat()`
- Spread syntax
- `toSpliced()`

For ordinary arrays, these methods create a new outer array, but they do not recursively clone nested objects.

Deep copying will be covered in detail in Topic 13.

---

# Part H — Practical React Examples

## 9. Why Are Non-Mutating Methods Important in React?

React state should be treated as immutable.

Instead of modifying the existing array, create a new array and update the state.

### Example: Add an Item

```javascript
setItems(previousItems => [
    ...previousItems,
    newItem
]);
```

### Example: Remove an Item

```javascript
setItems(previousItems =>
    previousItems.filter(item => item.id !== id)
);
```

### Example: Update an Item

```javascript
setItems(previousItems =>
    previousItems.map(item =>
        item.id === id
            ? { ...item, completed: true }
            : item
    )
);
```

### Example: Sort Items

```javascript
setItems(previousItems =>
    previousItems.toSorted((a, b) =>
        a.name.localeCompare(b.name)
    )
);
```

These patterns create new array references and help React detect state changes correctly.

---

# Part I — Complexity

## 10. Time Complexity

| Method | Typical Time Complexity | Mutation |
|---|---|---|
| `slice()` | O(k) | No |
| `splice()` | O(n) in general | Yes |
| `toSpliced()` | O(n) | No |
| `concat()` | O(n + m) | No |
| Spread copy | O(n) | No |

Where:
- `n` = original array length.
- `m` = additional array length.
- `k` = number of elements copied by `slice()`.

Actual performance depends on the operation and JavaScript engine.

---

# Part J — Interview Questions

## 11. Conceptual Questions

1. What is the difference between `slice()` and `splice()`?
2. Does `slice()` modify the original array?
3. Does `splice()` modify the original array?
4. What does `splice()` return?
5. What happens when `deleteCount` is omitted?
6. How do negative indexes work in `slice()`?
7. What is the difference between `splice()` and `toSpliced()`?
8. What is the purpose of `concat()`?
9. How can spread syntax copy an array?
10. What is a shallow copy?
11. Why does modifying a nested object in a copied array affect the original?
12. What is the difference between `slice()` and spread syntax?
13. Why is immutability important in React?
14. How can you insert an element at a specific index without mutation?
15. Which array methods return a new array?

---

# Part K — Output-Based Practice

Predict the output before running each program.

### Q1

```javascript
const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(result);
console.log(arr);
```

### Q2

```javascript
const arr = [10, 20, 30, 40, 50];

const result = arr.slice(-3, -1);

console.log(result);
```

### Q3

```javascript
const arr = [1, 2, 3, 4];

const result = arr.splice(1, 2);

console.log(arr);
console.log(result);
```

### Q4

```javascript
const arr = [1, 2, 3, 4];

arr.splice(2, 0, 10, 20);

console.log(arr);
```

### Q5

```javascript
const arr = [1, 2, 3, 4];

arr.splice(1, 2, 100);

console.log(arr);
```

### Q6

```javascript
const arr = [1, 2, 3, 4];

const result = arr.toSpliced(1, 2);

console.log(arr);
console.log(result);
```

### Q7

```javascript
const first = [1, 2];
const second = [3, 4];

const result = first.concat(second);

console.log(result);
console.log(first);
```

### Q8

```javascript
const original = [1, 2, 3];

const copy = [...original];

console.log(original === copy);
```

### Q9

```javascript
const original = [
    { name: "Aman" },
    { name: "Riya" }
];

const copy = [...original];

copy[0].name = "Priya";

console.log(original[0].name);
console.log(copy[0].name);
```

### Q10

```javascript
const arr = [10, 20, 30, 40];

const result = [
    ...arr.slice(0, 2),
    25,
    ...arr.slice(2)
];

console.log(result);
console.log(arr);
```

---

# Part L — Coding Practice

## Beginner Level

1. Extract the first three elements using `slice()`.
2. Extract the last two elements using negative indexes.
3. Remove the first two elements using `splice()`.
4. Insert an element at index 2 using `splice()`.
5. Replace an element at a given index.
6. Combine two arrays using `concat()`.

## Intermediate Level

7. Create a copy of an array using spread syntax.
8. Insert an element at a given index without modifying the original array.
9. Remove an element at a given index without modifying the original array.
10. Replace an element without using `splice()`.
11. Merge three arrays and remove duplicate primitive values.
12. Create a shallow copy of an array of objects and demonstrate reference behavior.

## Advanced Level

13. Implement a custom version of `slice()` without using the built-in method.
14. Implement a custom array insertion function without modifying the original array.
15. Given an array of objects, remove an object using its ID without modifying the original.
16. Given a list of tasks, create a new array with one task updated while preserving all other objects.
17. Implement a function that moves an array element from one index to another without mutating the original array.

---

# Part M — Quick Revision

## 12. Important Points

| Method | Main Purpose | Modifies Original? |
|---|---|---|
| `slice()` | Extract a portion | No |
| `splice()` | Add, remove, replace | Yes |
| `toSpliced()` | Non-mutating splice | No |
| `concat()` | Combine arrays | No |
| Spread `...` | Copy and combine arrays | No |

### One-Line Interview Answers

- **slice():** Returns a shallow copy of a selected array portion.
- **splice():** Adds, removes or replaces elements in the original array.
- **toSpliced():** Returns a new array with splice-like changes.
- **concat():** Combines arrays into a new array.
- **Spread syntax:** Expands array elements and can create shallow copies.

---

# Official Documentation

1. [Array.prototype.slice() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
2. [Array.prototype.splice() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
3. [Array.prototype.toSpliced() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
4. [Array.prototype.concat() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
5. [Spread Syntax — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Topic 9 Complete — Slicing, Splicing and Copying Arrays**

