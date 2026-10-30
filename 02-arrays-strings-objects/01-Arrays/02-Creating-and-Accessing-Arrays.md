# Topic 2: Creating and Accessing Arrays in JavaScript

## 1. Creating Arrays

JavaScript provides multiple ways to create arrays.

### 1.1 Array Literal Syntax

This is the most common and recommended way to create an array.

```javascript
let numbers = [10, 20, 30, 40, 50];

let fruits = ["Apple", "Banana", "Mango"];

let emptyArray = [];
```

Advantages:
- Simple and readable.
- Easy to initialize multiple elements.
- Preferred for everyday development.

### 1.2 Using the Array Constructor

JavaScript provides an `Array()` constructor.

```javascript
let numbers = new Array(10, 20, 30);

console.log(numbers); // [10, 20, 30]
```

It can also create an array with a specified length:

```javascript
let arr = new Array(5);

console.log(arr.length); // 5
console.log(arr); // [empty × 5]
```

Important difference:

```javascript
let arr1 = new Array(5);
let arr2 = [5];

console.log(arr1.length); // 5
console.log(arr2.length); // 1
```

- `new Array(5)` creates an array with five empty slots.
- `[5]` creates an array containing one element, the number 5.

**Interview Point:** Be careful when passing a single numeric argument to the Array constructor.

### 1.3 Using Array.of()

`Array.of()` creates an array using the supplied arguments as elements.

```javascript
let arr1 = Array.of(5);

console.log(arr1); // [5]

let arr2 = Array.of(10, 20, 30);

console.log(arr2); // [10, 20, 30]
```

Compare:

```javascript
console.log(new Array(5)); // [empty × 5]

console.log(Array.of(5)); // [5]
```

This avoids the single-number constructor behavior.

### 1.4 Using Array.from()

`Array.from()` creates a new array from an iterable or array-like object.

Example with a string:

```javascript
let result = Array.from("HELLO");

console.log(result);
// ["H", "E", "L", "L", "O"]
```

Example with a Set:

```javascript
let values = new Set([10, 20, 20, 30]);

let arr = Array.from(values);

console.log(arr); // [10, 20, 30]
```

Example with an array-like object:

```javascript
let obj = {
    0: "A",
    1: "B",
    2: "C",
    length: 3
};

let arr = Array.from(obj);

console.log(arr); // ["A", "B", "C"]
```

`Array.from()` can also use a mapping function:

```javascript
let numbers = Array.from([1, 2, 3], num => num * 2);

console.log(numbers); // [2, 4, 6]
```

### 1.5 Using Array.from() to Create Arrays

```javascript
let numbers = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(numbers); // [1, 2, 3, 4, 5]
```

Explanation:

- `{ length: 5 }` represents an array-like object with five positions.
- `Array.from()` creates an array from it.
- `_` represents the current value, which is undefined here.
- `index` represents the current index.
- `index + 1` generates values from 1 to 5.

---

## 2. Accessing Array Elements

We can access array elements using their indexes.

```javascript
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue
```

Remember: Array indexing starts from zero.

### Accessing the Last Element

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers[numbers.length - 1]); // 40
```

Formula:

```javascript
array[array.length - 1]
```

### Accessing an Invalid Index

```javascript
let arr = [10, 20, 30];

console.log(arr[10]); // undefined
```

Accessing an invalid index does not normally throw an error.

---

## 3. Accessing Elements Using at()

The `at()` method accesses an element using an index.

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.at(0));  // Apple
console.log(fruits.at(2));  // Mango
```

The major advantage is that `at()` supports negative indexes.

```javascript
console.log(fruits.at(-1)); // Orange
console.log(fruits.at(-2)); // Mango
```

Comparison:

```javascript
let arr = [10, 20, 30];

console.log(arr[arr.length - 1]); // 30

console.log(arr.at(-1)); // 30
```

**Important:**

- `at(0)` returns the first element.
- `at(-1)` returns the last element.
- `at(-2)` returns the second-last element.
- An out-of-range index returns undefined.

Note: Negative indexes are supported by `at()`, but not by ordinary bracket indexing.

```javascript
console.log(arr[-1]); // undefined
```

---

## 4. Accessing Nested Arrays

An array can contain another array. This is called a nested array.

```javascript
let matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
```

To access an element, use multiple indexes.

```javascript
console.log(matrix[0]);    // [10, 20, 30]

console.log(matrix[0][0]); // 10

console.log(matrix[1][2]); // 60

console.log(matrix[2][1]); // 80
```

Understanding:

```text
matrix[1][2]

      [40, 50, 60]
         0   1   2
         |
         2nd row
             |
             3rd element = 60
```

---

## 5. Accessing Array Elements Using Loops

### 5.1 Using a for Loop

```javascript
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Output:

```text
10
20
30
40
```

### 5.2 Using a while Loop

```javascript
let numbers = [10, 20, 30];

let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
```

### 5.3 Using for...of

`for...of` directly provides array values.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Banana
Mango
```

### 5.4 Using forEach()

`forEach()` executes a callback function for each array element.

```javascript
let numbers = [10, 20, 30];

numbers.forEach((value, index) => {
    console.log(index, value);
});
```

Output:

```text
0 10
1 20
2 30
```

We will study `forEach()` and other array iteration methods in detail in a later topic.

---

## 6. Array Destructuring — Introduction

Destructuring allows us to extract values from an array into separate variables.

```javascript
let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue
```

Skipping elements:

```javascript
let numbers = [10, 20, 30, 40];

let [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

Default values:

```javascript
let numbers = [10];

let [a, b = 50] = numbers;

console.log(a); // 10
console.log(b); // 50
```

We will cover array destructuring in depth in a separate topic.

---

## 7. Important Differences

| Method | Purpose |
|---|---|
| `[]` | Create an array using literal syntax |
| `new Array()` | Create an array using constructor |
| `Array.of()` | Create an array from supplied arguments |
| `Array.from()` | Create an array from iterable or array-like data |
| `arr[index]` | Access an element using an index |
| `arr.at(index)` | Access an element, including negative indexes |
| `arr.length` | Get the array length |

---

## 8. Interview Questions

**Q1. What are the different ways to create an array in JavaScript?**

Using array literals, the Array constructor, `Array.of()`, and `Array.from()`.

**Q2. What is the difference between `new Array(5)` and `[5]`?**

The first creates five empty slots, while the second creates an array with one element.

**Q3. What is the difference between `Array.of()` and `Array.from()`?**

`Array.of()` creates an array from its arguments, whereas `Array.from()` creates an array from an iterable or array-like object.

**Q4. What is the advantage of `at()` over bracket notation?**

`at()` supports negative indexes, making it easier to access elements from the end.

**Q5. Can we access nested array elements?**

Yes. We use multiple indexes, such as `matrix[0][1]`.

**Q6. What does `Array.from()` return?**

It returns a new array.

**Q7. Does `forEach()` return a new array?**

No. `forEach()` returns undefined.

---

## 9. Output-Based Practice

Predict the output before running each program.

### Question 1

```javascript
let arr = new Array(4);

console.log(arr.length);
console.log(arr[0]);
```

### Question 2

```javascript
let arr1 = new Array(3);
let arr2 = Array.of(3);
let arr3 = [3];

console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
```

### Question 3

```javascript
let arr = ["A", "B", "C", "D"];

console.log(arr.at(-1));
console.log(arr.at(-3));
console.log(arr[-1]);
```

### Question 4

```javascript
let arr = Array.from("CODE");

console.log(arr);
console.log(arr.length);
```

### Question 5

```javascript
let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[1][0]);
console.log(matrix[0][1]);
```

### Question 6

```javascript
let arr = Array.from({ length: 4 }, (_, i) => i * 2);

console.log(arr);
```

---

## 10. Coding Practice

### Beginner

1. Create an array of five student names using array literal syntax.
2. Create an array containing five numbers using `Array.of()`.
3. Convert a string into an array of characters using `Array.from()`.
4. Print the first and last elements of an array.
5. Access the second-last element using `at()`.

### Intermediate

6. Create an array containing numbers from 1 to 10 using `Array.from()`.
7. Print all array elements using a `for` loop.
8. Print all array elements using `for...of`.
9. Find the sum of all elements using a loop.
10. Access the middle element of an odd-length array.

### Advanced

11. Create a 3 × 3 matrix and print its center element.
12. Create an array of squares from 1 to 10 using `Array.from()`.
13. Extract the first, second, and last elements using destructuring.
14. Create an array from a Set and explain why duplicate values disappear.
15. Compare `Array.from()` and `Array.of()` using your own examples.

---

## 11. Quick Revision

- Array literal syntax is the preferred way to create arrays.
- `new Array(5)` creates five empty slots.
- `Array.of(5)` creates an array containing the number 5.
- `Array.from()` creates an array from iterable or array-like values.
- Bracket notation accesses elements by index.
- `at()` supports negative indexes.
- Nested arrays require multiple indexes.
- Arrays can be traversed using loops.
- Destructuring extracts array elements into variables.

## Documentation

- [MDN — Array Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [MDN — Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [MDN — Array.of()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
- [MDN — Array.prototype.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)