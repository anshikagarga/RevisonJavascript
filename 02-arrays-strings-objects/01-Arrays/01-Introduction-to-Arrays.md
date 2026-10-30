# Topic 1: Introduction to Arrays in JavaScript

## 1. What is an Array?

An array is a special type of object in JavaScript used to store multiple values in a single variable.

Instead of creating separate variables for related data, we can store all values inside one array.

### Without an Array

```javascript
let student1 = "Anshika";
let student2 = "Rahul";
let student3 = "Priya";
```

### With an Array

```javascript
let students = ["Anshika", "Rahul", "Priya"];
```

**Why use arrays?**

- Store multiple values in one variable.
- Organize related data.
- Access elements using their index.
- Easily add, remove, search, and modify elements.
- Process collections using loops and array methods.

---

## 2. Array Indexing

JavaScript arrays use zero-based indexing.

This means the first element is stored at index `0`, not index `1`.

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

| Element | Index |
|---|---:|
| Apple | 0 |
| Banana | 1 |
| Mango | 2 |
| Orange | 3 |

Accessing elements:

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[3]); // Orange
```

Accessing an index that does not exist:

```javascript
console.log(fruits[10]); // undefined
```

**Important:** An invalid array index generally returns `undefined`; it does not automatically throw an error.

---

## 3. Array Length

The `length` property returns the number of elements represented by the array's length.

```javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length); // 5
```

The last element can be accessed using:

```javascript
console.log(numbers[numbers.length - 1]); // 50
```

**Formula:**

```javascript
lastIndex = array.length - 1;
```

Remember:
- First index = `0`
- Last index = `length - 1`
- Number of elements = `length`

---

## 4. Arrays Can Store Different Data Types

JavaScript arrays can contain values of different data types.

```javascript
let data = [
    "Anshika",
    22,
    true,
    null,
    undefined,
    { city: "Noida" },
    [10, 20, 30]
];
```

An array can contain:

- Strings
- Numbers
- Booleans
- Null
- Undefined
- Objects
- Other arrays
- Functions

Example:

```javascript
let mixed = [10, "Hello", true];

console.log(mixed[0]); // 10
console.log(mixed[1]); // Hello
console.log(mixed[2]); // true
```

**Interview Point:** JavaScript does not require all elements of an array to have the same data type.

---

## 5. Arrays Are Objects in JavaScript

Arrays are special objects in JavaScript.

```javascript
let numbers = [10, 20, 30];

console.log(typeof numbers); // "object"
```

This happens because JavaScript arrays are implemented as specialized objects.

To check whether a value is an array, use:

```javascript
console.log(Array.isArray(numbers)); // true

console.log(Array.isArray({ name: "Anshika" })); // false
console.log(Array.isArray("Hello")); // false
```

**Important Interview Question:**

Why should we use `Array.isArray()` instead of `typeof`?

Because:

```javascript
typeof []           // "object"
typeof {}           // "object"

Array.isArray([])   // true
Array.isArray({})   // false
```

`Array.isArray()` correctly distinguishes arrays from ordinary objects.

---

## 6. Modifying Array Elements

Arrays are mutable, which means their contents can be changed after creation.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```javascript
["Apple", "Orange", "Mango"]
```

The element at index `1` has been replaced.

### Adding an element at an existing next index

```javascript
let numbers = [10, 20, 30];

numbers[3] = 40;

console.log(numbers); // [10, 20, 30, 40]
```

### Creating an empty slot

```javascript
let numbers = [10, 20];

numbers[5] = 60;

console.log(numbers);
console.log(numbers.length); // 6
```

The array now contains empty slots at indexes `2`, `3`, and `4`.

These are called **sparse array slots**.

An empty slot is not exactly the same as an explicitly stored `undefined` value.

---

## 7. Arrays Are Reference Types

Arrays are objects, so variables store references to them rather than independent copies of their contents.

```javascript
let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2[0] = 100;

console.log(arr1); // [100, 20, 30]
console.log(arr2); // [100, 20, 30]
```

Why did both arrays change?

Because both variables refer to the same array in memory.

Conceptually:

```text
arr1 ─────┐
          ├────> [100, 20, 30]
arr2 ─────┘
```

**Important:** Assigning an array to another variable does not create a new independent array.

We will study copying arrays in detail in the later topics.

---

## 8. Important Characteristics of JavaScript Arrays

| Characteristic | Explanation |
|---|---|
| Zero-based indexing | First element has index 0 |
| Dynamic size | Arrays can grow or shrink |
| Mutable | Elements can be modified |
| Mixed data types | Different types can exist together |
| Ordered | Elements have positions |
| Reference type | Variables hold references |
| Special object | `typeof []` returns `"object"` |
| Length property | `length` represents the array length |

---

## 9. Interview Questions

**Q1. What is an array in JavaScript?**

An array is a special object used to store an ordered collection of values in a single variable.

**Q2. What is zero-based indexing?**

It means array indexing starts from zero.

**Q3. Can JavaScript arrays store different data types?**

Yes. A JavaScript array can contain strings, numbers, booleans, objects, and other values.

**Q4. Are arrays mutable?**

Yes. We can modify, add, or remove their elements.

**Q5. What is the difference between `typeof` and `Array.isArray()`?**

`typeof` returns `"object"` for arrays, whereas `Array.isArray()` specifically checks whether a value is an array.

**Q6. What happens when we access an invalid array index?**

It generally returns `undefined`.

**Q7. What happens when one array is assigned to another variable?**

Both variables refer to the same array unless an explicit copy is created.

---

## 10. Output-Based Practice

Try to predict the output before running the code.

### Question 1

```javascript
let arr = [10, 20, 30, 40];

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);
```

### Question 2

```javascript
let arr = [1, 2, 3];

arr[1] = 100;

console.log(arr);
console.log(arr.length);
```

### Question 3

```javascript
let arr = [10, 20];

let copy = arr;

copy[0] = 50;

console.log(arr);
console.log(copy);
```

### Question 4

```javascript
let arr = [10, 20];

arr[5] = 60;

console.log(arr.length);
console.log(arr[2]);
console.log(arr[5]);
```

### Question 5

```javascript
console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray({}));
```

---

## 11. Coding Practice

Solve these independently using JavaScript.

### Beginner Level

1. Create an array containing five numbers and print it.
2. Create an array of five fruits and print the first and last elements.
3. Find the length of an array without manually counting its elements.
4. Update the second element of an array.
5. Print the element at the middle index of an array with an odd number of elements.

### Intermediate Level

6. Write a program to print all elements of an array using a loop.
7. Find the sum of all elements in a numeric array.
8. Find the largest and smallest element in an array.
9. Count how many elements in an array are even.
10. Check whether a given value is an array using `Array.isArray()`.

### Conceptual Practice

11. Explain why `typeof []` returns `"object"`.
12. Explain the difference between an empty array and an array containing `undefined`.
13. Explain why changing `arr2` can also change `arr1` after `arr2 = arr1`.

---

## 12. Quick Revision

- Arrays store multiple values in one variable.
- JavaScript arrays use zero-based indexing.
- `length` gives the array's length.
- Arrays can contain mixed data types.
- Arrays are mutable.
- Arrays are special objects.
- `Array.isArray()` checks whether a value is an array.
- Assigning an array to another variable copies its reference, not its contents.

## Documentation

- [MDN — JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [JavaScript.info — Arrays](https://javascript.info/array)
