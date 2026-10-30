

# Topic 8 — Sorting and Reversing Arrays in JavaScript

## 1. Introduction

JavaScript provides methods to arrange array elements in a particular order and reverse their positions.

Important methods:

1. `sort()` — sorts array elements.
2. `reverse()` — reverses the order of elements.
3. `toSorted()` — returns a sorted copy.
4. `toReversed()` — returns a reversed copy.

Understanding mutation and non-mutation is especially important when working with React state.

---

## 2. sort() Method

The `sort()` method sorts the elements of an array in place and returns the same array reference.

### Syntax

```javascript
array.sort(compareFunction);
```

The optional `compareFunction` determines the sorting order.

### 2.1 Default Sorting

By default, `sort()` converts elements into strings and sorts them according to their UTF-16 code units.

```javascript
const fruits = ["banana", "apple", "mango", "orange"];

fruits.sort();

console.log(fruits);
```

Output:

```javascript
["apple", "banana", "mango", "orange"]
```

### 2.2 Important: Default Numeric Sorting Problem

```javascript
const numbers = [10, 5, 100, 25, 2];

numbers.sort();

console.log(numbers);
```

Output:

```javascript
[10, 100, 2, 25, 5]
```

Why?

Because default sorting compares string representations:

```text
"10", "100", "2", "25", "5"
```

Therefore, always provide a comparator when sorting numbers numerically.

### 2.3 Ascending Numeric Order

```javascript
const numbers = [10, 5, 100, 25, 2];

numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);
```

Output:

```javascript
[2, 5, 10, 25, 100]
```

Explanation:

- If `a - b` is negative, `a` comes before `b`.
- If `a - b` is positive, `b` comes before `a`.
- If the result is zero, their relative order is treated as equal by the comparator.

### 2.4 Descending Numeric Order

```javascript
const numbers = [10, 5, 100, 25, 2];

numbers.sort((a, b) => {
    return b - a;
});

console.log(numbers);
```

Output:

```javascript
[100, 25, 10, 5, 2]
```

### 2.5 Sorting Strings

```javascript
const names = ["Riya", "Anshika", "Priya", "Aman"];

names.sort();

console.log(names);
```

For locale-aware alphabetical sorting:

```javascript
const names = ["Riya", "Anshika", "Priya", "Aman"];

names.sort((a, b) => a.localeCompare(b));

console.log(names);
```

For case-insensitive comparison:

```javascript
const names = ["riya", "Anshika", "aman", "Priya"];

names.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
);

console.log(names);
```

`localeCompare()` is useful when sorting human-readable text. Its behavior can depend on locale and comparison options.

---

## 3. How the Compare Function Works

A compare function receives two elements: `a` and `b`.

```javascript
(a, b) => a - b
```

| Return Value | Meaning |
|---|---|
| Negative | Place `a` before `b` |
| Positive | Place `a` after `b` |
| Zero | Treat them as equal for ordering |

Example:

```javascript
const numbers = [30, 10, 20];

numbers.sort((a, b) => {
    console.log(a, b);
    return a - b;
});
```

**Important:** JavaScript does not guarantee a particular sequence of comparator calls. Do not depend on their exact order or count.

---

## 4. Sorting an Array of Objects

This is a common real-world and interview use case.

### 4.1 Sort Students by Marks

```javascript
const students = [
    { name: "Aman", marks: 75 },
    { name: "Riya", marks: 90 },
    { name: "Priya", marks: 85 }
];

students.sort((a, b) => a.marks - b.marks);

console.log(students);
```

Ascending order:

```javascript
[
    { name: "Aman", marks: 75 },
    { name: "Priya", marks: 85 },
    { name: "Riya", marks: 90 }
]
```

Descending order:

```javascript
students.sort((a, b) => b.marks - a.marks);
```

### 4.2 Sort Products by Price

```javascript
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

products.sort((a, b) => a.price - b.price);
```

### 4.3 Sort by Multiple Conditions

Suppose students should be sorted by marks in descending order. If marks are equal, sort alphabetically by name.

```javascript
const students = [
    { name: "Riya", marks: 90 },
    { name: "Aman", marks: 85 },
    { name: "Priya", marks: 90 }
];

students.sort((a, b) => {
    if (b.marks !== a.marks) {
        return b.marks - a.marks;
    }

    return a.name.localeCompare(b.name);
});
```

---

## 5. reverse() Method

The `reverse()` method reverses the order of array elements in place.

### Syntax

```javascript
array.reverse();
```

Example:

```javascript
const numbers = [10, 20, 30, 40];

numbers.reverse();

console.log(numbers);
```

Output:

```javascript
[40, 30, 20, 10]
```

**Important:** `reverse()` modifies the original array and returns the same array reference.

---

## 6. toSorted() Method

`toSorted()` returns a new sorted array without modifying the original array.

It is the non-mutating counterpart of `sort()`.

### Syntax

```javascript
const newArray = array.toSorted(compareFunction);
```

Example:

```javascript
const numbers = [40, 10, 30, 20];

const sorted = numbers.toSorted((a, b) => a - b);

console.log(sorted);  // [10, 20, 30, 40]
console.log(numbers); // [40, 10, 30, 20]
```

### Why is toSorted() useful?

In React, directly mutating state arrays can cause bugs and unexpected rendering behavior.

Prefer creating a new sorted array:

```javascript
const sortedProducts = products.toSorted(
    (a, b) => a.price - b.price
);
```

---

## 7. toReversed() Method

`toReversed()` returns a new reversed array without modifying the original array.

It is the non-mutating counterpart of `reverse()`.

Example:

```javascript
const numbers = [10, 20, 30, 40];

const reversed = numbers.toReversed();

console.log(reversed); // [40, 30, 20, 10]
console.log(numbers);  // [10, 20, 30, 40]
```

---

## 8. Comparison of Sorting and Reversing Methods

| Method | Modifies Original? | Returns |
|---|---|---|
| `sort()` | Yes | Same array reference |
| `reverse()` | Yes | Same array reference |
| `toSorted()` | No | New array |
| `toReversed()` | No | New array |

### Browser Compatibility

`toSorted()` and `toReversed()` are newer methods than `sort()` and `reverse()`.

For older environments, use a copy:

```javascript
const sorted = [...numbers].sort((a, b) => a - b);

const reversed = [...numbers].reverse();
```

---

## 9. Sorting Stability

Modern JavaScript requires `Array.prototype.sort()` to be stable.

A stable sort preserves the relative order of elements that compare equal.

Example:

```javascript
const students = [
    { name: "Aman", marks: 90 },
    { name: "Riya", marks: 80 },
    { name: "Priya", marks: 90 }
];

students.sort((a, b) => b.marks - a.marks);

console.log(students);
```

Aman remains before Priya because both have equal marks and Aman appeared first.

---

## 10. Time and Space Complexity

| Method | Typical Time Complexity | Mutation |
|---|---|---|
| `sort()` | Engine-dependent; often O(n log n) | Yes |
| `reverse()` | O(n) | Yes |
| `toSorted()` | Sorting cost plus copy allocation | No |
| `toReversed()` | O(n) | No |

Do not assume JavaScript guarantees a specific sorting algorithm or exact complexity for every engine.

---

## 11. Common Mistakes

### Mistake 1: Numeric Sorting Without a Comparator

```javascript
[10, 2, 30].sort();
```

This does not produce numeric ascending order.

Correct:

```javascript
[10, 2, 30].sort((a, b) => a - b);
```

### Mistake 2: Accidentally Mutating the Original Array

```javascript
const original = [3, 1, 2];

const sorted = original.sort((a, b) => a - b);
```

Both variables reference the same array.

Use:

```javascript
const sorted = original.toSorted((a, b) => a - b);
```

Or:

```javascript
const sorted = [...original].sort((a, b) => a - b);
```

### Mistake 3: Assuming reverse() Creates a Copy

```javascript
const arr = [1, 2, 3];

const result = arr.reverse();

console.log(arr); // [3, 2, 1]
```

Use `toReversed()` if the original should remain unchanged.

---

## 12. Interview Questions

1. What does `sort()` return?
2. Why does `[10, 2, 30].sort()` produce unexpected numeric ordering?
3. How do you sort numbers in ascending and descending order?
4. How does a compare function work?
5. What is the difference between `sort()` and `toSorted()`?
6. What is the difference between `reverse()` and `toReversed()`?
7. What is a stable sorting algorithm?
8. How do you sort an array of objects by a property?
9. How do you sort by multiple properties?
10. Why should you avoid mutating React state arrays?
11. How can you sort an array without modifying the original?
12. Does JavaScript guarantee a particular sorting algorithm?

---

## 13. Output-Based Practice

Predict the output before running each snippet.

### Q1

```javascript
const arr = [10, 2, 30, 4];

arr.sort();

console.log(arr);
```

### Q2

```javascript
const arr = [10, 2, 30, 4];

arr.sort((a, b) => a - b);

console.log(arr);
```

### Q3

```javascript
const arr = [5, 1, 4, 2];

arr.sort((a, b) => b - a);

console.log(arr);
```

### Q4

```javascript
const arr = [1, 2, 3];

const result = arr.reverse();

console.log(arr);
console.log(result);
console.log(arr === result);
```

### Q5

```javascript
const arr = [3, 1, 2];

const result = arr.toSorted((a, b) => a - b);

console.log(arr);
console.log(result);
```

### Q6

```javascript
const arr = [1, 2, 3];

const result = arr.toReversed();

console.log(arr);
console.log(result);
```

### Q7

```javascript
const arr = [10, 20, 30];

arr.sort((a, b) => 0);

console.log(arr);
```

### Q8

```javascript
const students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 90 },
    { name: "C", marks: 70 }
];

const result = students.toSorted((a, b) => b.marks - a.marks);

console.log(result.map(student => student.name));
```

---

## 14. Coding Practice

### Beginner

1. Sort an array of numbers in ascending order.
2. Sort an array of numbers in descending order.
3. Reverse an array without using `reverse()`.
4. Sort an array of strings alphabetically.
5. Find the second-largest element after sorting.

### Intermediate

6. Sort an array of students by marks.
7. Sort products by price in ascending order.
8. Sort students by marks, then by name.
9. Reverse an array without modifying the original.
10. Sort an array without modifying the original.

### Advanced

11. Sort an array of objects by multiple properties.
12. Sort strings by their length.
13. Sort an array of numbers according to their frequency.
14. Sort an array containing positive numbers, negative numbers and zero according to a custom rule.
15. Implement a basic sorting algorithm such as Bubble Sort and compare it with built-in `sort()`.

---

## 15. Quick Revision

- `sort()` sorts in place.
- Default `sort()` compares string representations.
- `(a, b) => a - b` sorts numbers ascending.
- `(a, b) => b - a` sorts numbers descending.
- `reverse()` reverses in place.
- `toSorted()` returns a sorted copy.
- `toReversed()` returns a reversed copy.
- Modern JavaScript sorting is stable.
- Use non-mutating methods or copies when preserving original data matters.

## Official Documentation

- [Array.prototype.sort() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.reverse() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.prototype.toSorted() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [Array.prototype.toReversed() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

**Topic 8 Complete — Sorting and Reversing Arrays**

