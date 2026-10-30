# Topic 14 — Advanced Array Concepts and Interview Questions

## 1. Mutating vs Non-Mutating Array Methods

JavaScript array methods are divided into two categories:

- **Mutating methods:** Modify the original array.
- **Non-mutating methods:** Return a result without directly modifying the original array.

### Mutating Methods

| Method | Purpose |
|---|---|
| `push()` | Adds elements at the end |
| `pop()` | Removes the last element |
| `shift()` | Removes the first element |
| `unshift()` | Adds elements at the beginning |
| `splice()` | Adds, removes or replaces elements |
| `sort()` | Sorts the original array |
| `reverse()` | Reverses the original array |

```javascript
const numbers = [30, 10, 20];

numbers.sort();

console.log(numbers); // [10, 20, 30]
```

### Non-Mutating Methods

| Method | Purpose |
|---|---|
| `slice()` | Extracts a portion |
| `concat()` | Combines arrays |
| `map()` | Transforms elements |
| `filter()` | Selects elements |
| `reduce()` | Produces an accumulated result |
| `flat()` | Flattens nested arrays |
| `toSorted()` | Returns a sorted copy |
| `toReversed()` | Returns a reversed copy |
| `toSpliced()` | Returns a modified copy |
| `with()` | Returns a copy with one index replaced |

```javascript
const numbers = [30, 10, 20];

const sorted = numbers.toSorted((a, b) => a - b);

console.log(numbers); // [30, 10, 20]
console.log(sorted);  // [10, 20, 30]
```

**Interview point:** `map()` and `filter()` do not directly modify the original array, but their callbacks can still mutate objects or the original array if you explicitly write such code.

---

## 2. Modern Non-Mutating Array Methods

Modern JavaScript provides methods that make immutable array operations easier.

### 2.1 `toSorted()`

Returns a new sorted array.

```javascript
const numbers = [40, 10, 30, 20];

const result = numbers.toSorted((a, b) => a - b);

console.log(result);  // [10, 20, 30, 40]
console.log(numbers); // [40, 10, 30, 20]
```

### 2.2 `toReversed()`

Returns a reversed copy.

```javascript
const numbers = [1, 2, 3];

const result = numbers.toReversed();

console.log(result);  // [3, 2, 1]
console.log(numbers); // [1, 2, 3]
```

### 2.3 `toSpliced()`

Works like `splice()`, but returns a new array instead of modifying the original.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.toSpliced(1, 2, 99);

console.log(result);  // [10, 99, 40]
console.log(numbers); // [10, 20, 30, 40]
```

### 2.4 `with()`

Returns a new array with one index replaced.

```javascript
const numbers = [10, 20, 30];

const result = numbers.with(1, 99);

console.log(result);  // [10, 99, 30]
console.log(numbers); // [10, 20, 30]
```

An invalid index outside the array's valid range throws a `RangeError`.

**Remember:**

| Old method | Modern alternative |
|---|---|
| `sort()` | `toSorted()` |
| `reverse()` | `toReversed()` |
| `splice()` | `toSpliced()` |
| Direct index assignment | `with()` |

These modern methods are part of the newer JavaScript standard. Check your runtime's compatibility before using them in production.

---

## 3. Sparse Arrays and Array Holes

A sparse array contains one or more empty slots called holes.

```javascript
const arr = [10, , 30];

console.log(arr);        // [10, empty, 30]
console.log(arr.length); // 3
```

A hole is different from an explicit `undefined`.

```javascript
const arr1 = [10, , 30];
const arr2 = [10, undefined, 30];

console.log(1 in arr1); // false
console.log(1 in arr2); // true
```

### How Array Methods Handle Holes

| Method | Behavior |
|---|---|
| `map()` | Skips holes and preserves them in the result |
| `filter()` | Skips holes |
| `forEach()` | Skips holes |
| `some()` | Skips holes |
| `every()` | Skips holes |
| `find()` | Visits holes as `undefined` |
| `findIndex()` | Visits holes as `undefined` |
| `findLast()` | Visits holes as `undefined` |
| `includes()` | Treats holes as `undefined` |
| `indexOf()` | Skips holes |
| `flat()` | Removes holes at flattened levels |
| Spread syntax | Converts holes into `undefined` values |
| `Array.from()` | Converts holes into `undefined` values |

Example:

```javascript
const arr = [10, , 30];

console.log(arr.includes(undefined)); // true
console.log(arr.indexOf(undefined));  // -1

console.log([...arr]); // [10, undefined, 30]
```

### Important Interview Question

Why does `includes()` return `true`, but `indexOf()` returns `-1`?

Because `includes()` uses SameValueZero comparison and treats an empty slot as `undefined`, whereas `indexOf()` skips empty slots and uses strict equality.

---

## 4. Array-Like Objects vs Iterables

These two concepts are related but different.

### Array-Like Objects

An array-like object has:

- Numeric property keys.
- A `length` property.

However, it does not necessarily support array methods or iteration.

```javascript
const obj = {
    0: "Java",
    1: "JavaScript",
    2: "Python",
    length: 3
};

console.log(obj.length); // 3
```

Convert it into an actual array:

```javascript
const arr = Array.from(obj);

console.log(arr);
// ["Java", "JavaScript", "Python"]
```

### Iterables

An iterable provides an iterator through `Symbol.iterator`.

Examples include:

- Arrays
- Strings
- Maps
- Sets

```javascript
const text = "JavaScript";

const arr = Array.from(text);

console.log(arr);
```

### Difference

| Array-Like | Iterable |
|---|---|
| Has a `length` property and indexed values | Provides an iterator |
| Can be converted using `Array.from()` | Can be converted using `Array.from()` |
| Does not necessarily support `for...of` | Supports `for...of` |
| Example: `arguments` | Example: Array, String, Set |

An object can be both array-like and iterable, but neither property automatically guarantees the other.

---

## 5. Array Uniqueness Using Set

A `Set` stores unique values.

```javascript
const numbers = [1, 2, 2, 3, 3, 4];

const unique = [...new Set(numbers)];

console.log(unique); // [1, 2, 3, 4]
```

### Important: Objects Are Compared by Reference

```javascript
const arr = [
    { id: 1 },
    { id: 1 }
];

const unique = [...new Set(arr)];

console.log(unique.length); // 2
```

Both objects have the same property values, but they are different object references.

To remove duplicate objects based on an ID:

```javascript
const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];

const uniqueUsers = [
    ...new Map(users.map(user => [user.id, user])).values()
];

console.log(uniqueUsers);
```

This keeps the last object for each ID.

---

## 6. Frequency Counting Pattern

Frequency counting is one of the most common array interview patterns.

### Using an Object

```javascript
const arr = [1, 2, 2, 3, 3, 3];

const frequency = {};

for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log(frequency);
```

Output:

```javascript
{
    1: 1,
    2: 2,
    3: 3
}
```

### Using Map

```javascript
const arr = [1, 2, 2, 3, 3, 3];

const frequency = new Map();

for (const num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
}

console.log(frequency);
```

**When to use Map?**

- When keys can be objects or other non-string values.
- When you want explicit key-value collection behavior.
- When you need convenient methods like `get()`, `set()`, and `has()`.

---

## 7. Common Advanced Array Patterns

### 7.1 Chunk an Array

Divide an array into smaller arrays of a specified size.

```javascript
function chunkArray(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
```

Expected output:

```javascript
[[1, 2], [3, 4], [5]]
```

### 7.2 Rotate an Array

Rotate an array to the right by `k` positions.

```javascript
function rotateArray(arr, k) {
    const n = arr.length;

    if (n === 0) return [];

    k = k % n;

    return [
        ...arr.slice(n - k),
        ...arr.slice(0, n - k)
    ];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

Expected output:

```javascript
[4, 5, 1, 2, 3]
```

### 7.3 Move Zeros to the End

```javascript
function moveZeros(arr) {
    const result = [];
    let zeroCount = 0;

    for (const num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}
```

Expected output for `[0, 1, 0, 3, 12]`:

```javascript
[1, 3, 12, 0, 0]
```

### 7.4 Group Objects by a Property

```javascript
const students = [
    { name: "A", department: "CSE" },
    { name: "B", department: "IT" },
    { name: "C", department: "CSE" }
];

const grouped = Object.groupBy(
    students,
    student => student.department
);

console.log(grouped);
```

`Object.groupBy()` groups elements into an object based on the callback result. Its availability depends on the JavaScript runtime.

---

## 8. Array Performance and Time Complexity

Understanding time complexity helps you choose the right method.

| Operation | Typical complexity |
|---|---|
| Access by index | O(1) |
| Update by index | O(1) |
| Search with `includes()` | O(n) |
| Search with `find()` | O(n) |
| `push()` | Amortized O(1) |
| `pop()` | O(1) |
| `shift()` | O(n) |
| `unshift()` | O(n) |
| `splice()` | O(n) in general |
| `map()` | O(n) |
| `filter()` | O(n) |
| `reduce()` | O(n) |
| `slice()` | O(k), where k is copied length |
| `sort()` | Depends on implementation; commonly O(n log n) |

These are typical algorithmic expectations, not strict performance guarantees for every JavaScript engine.

### Performance Tips

1. Avoid unnecessary nested loops when a `Map` or `Set` can help.
2. Use `Set` for efficient membership checks when appropriate.
3. Avoid repeatedly copying large arrays inside loops.
4. Prefer one-pass solutions when possible.
5. Understand whether an operation mutates the original array.
6. Optimize based on measurement, not assumptions.

---

## 9. Important Array Interview Questions

### Conceptual Questions

1. What is the difference between an array and an object in JavaScript?
2. Why are JavaScript arrays considered objects?
3. What is the difference between `slice()` and `splice()`?
4. What is the difference between `map()` and `forEach()`?
5. What is the difference between `filter()` and `find()`?
6. What is the difference between `find()` and `findIndex()`?
7. What is the difference between `includes()` and `indexOf()`?
8. What is the difference between `sort()` and `toSorted()`?
9. What is a sparse array?
10. What is the difference between a hole and `undefined`?
11. What is the difference between shallow copy and deep copy?
12. Why does spreading an array create only a shallow copy?
13. What is the difference between array-like objects and iterables?
14. How can you remove duplicates from an array?
15. Why does `Set` not remove duplicate objects with identical properties?
16. What happens when `reduce()` is called without an initial value?
17. What is the difference between `Array.of()` and `Array.from()`?
18. How does `flatMap()` differ from `map()`?
19. Which array methods mutate the original array?
20. How can you compare two arrays?

---

## 10. Output-Based Interview Practice

Try predicting each output before running the code.

### Question 1

```javascript
const arr = [1, 2, 3];

const result = arr.map(num => num * 2);

console.log(arr);
console.log(result);
```

### Question 2

```javascript
const arr = [1, 2, 3, 4];

const result = arr.filter(num => num % 2 === 0);

console.log(result);
```

### Question 3

```javascript
const arr = [10, 20, 30];

arr.splice(1, 1, 99);

console.log(arr);
```

### Question 4

```javascript
const arr = [1, 2, 3];

const result = arr.slice(1);

console.log(arr);
console.log(result);
```

### Question 5

```javascript
const arr = [3, 1, 2];

const result = arr.toSorted();

console.log(arr);
console.log(result);
```

### Question 6

```javascript
const arr = [1, , 3];

console.log(arr.includes(undefined));
console.log(arr.indexOf(undefined));
```

### Question 7

```javascript
const arr = [1, 2, 3];

const result = arr.reduce((acc, num) => {
    return acc + num;
});

console.log(result);
```

### Question 8

```javascript
const arr = [1, 2, 2, 3];

console.log([...new Set(arr)]);
```

### Question 9

```javascript
const arr = [1, 2, 3];

const result = arr.map(num => [num, num * 2]);

console.log(result);
console.log(result.flat());
```

### Question 10

```javascript
const arr = [1, 2, 3];

const result = arr.with(1, 100);

console.log(arr);
console.log(result);
```

---

## 11. Coding Interview Practice

Do not look up solutions immediately. First understand the input, expected output, and constraints.

### Beginner Level

1. Find the sum of all elements.
2. Find the maximum and minimum elements.
3. Reverse an array without using `reverse()`.
4. Remove duplicate elements.
5. Count the frequency of each element.
6. Find the second-largest distinct element.
7. Check whether an array is sorted.
8. Move all zeros to the end.

### Intermediate Level

9. Rotate an array by `k` positions.
10. Find the missing number from `0` to `n`.
11. Find the intersection of two arrays.
12. Find the union of two arrays.
13. Find the pair with a given target sum.
14. Find the maximum subarray sum using Kadane's algorithm.
15. Merge two sorted arrays.
16. Find the majority element.

### Advanced Level

17. Find the product of array elements except self.
18. Find the longest consecutive sequence.
19. Find the subarray with the given sum.
20. Find the maximum sum of a sliding window of size `k`.
21. Find the trapped rainwater.
22. Find the maximum area of water container.
23. Find the first missing positive integer.
24. Find the median of two sorted arrays.

For every problem, record:

- Intuition
- Approach
- Code
- Dry run
- Time complexity
- Space complexity
- Edge cases

---

## 12. Quick Revision Sheet

| Concept | Remember |
|---|---|
| Array indexing | Starts from 0 |
| Array length | Number of positions, including holes |
| `push()` | Add at end |
| `pop()` | Remove from end |
| `shift()` | Remove from beginning |
| `unshift()` | Add at beginning |
| `splice()` | Modify original array |
| `slice()` | Return a shallow copy of a portion |
| `map()` | Transform elements |
| `filter()` | Select elements |
| `reduce()` | Accumulate a result |
| `find()` | Return first matching element |
| `some()` | At least one element matches |
| `every()` | Every element matches |
| `flat()` | Flatten nested arrays |
| `flatMap()` | Map and flatten one level |
| `sort()` | Sort original array |
| `toSorted()` | Return sorted copy |
| `Set` | Store unique values |
| `Array.from()` | Create array from iterable or array-like |
| `Array.isArray()` | Check whether value is an array |

---

## 13. Official Documentation

- [MDN — JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [MDN — Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN — Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN — Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## Chapter Completion Checklist

- [ ] I understand mutating and non-mutating methods.
- [ ] I can explain modern array copying methods.
- [ ] I understand sparse arrays and holes.
- [ ] I can distinguish array-like objects from iterables.
- [ ] I can use Set and Map with arrays.
- [ ] I can solve frequency-counting problems.
- [ ] I can implement common array patterns.
- [ ] I can explain array time complexities.
- [ ] I have attempted the output questions.
- [ ] I have practiced coding problems independently.

**End of Part A — Arrays.**

Next: **Topic 15 — Introduction to Strings in JavaScript.**