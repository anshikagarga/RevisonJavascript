

# Topic 12 — Multidimensional Arrays in JavaScript

## 1. Introduction

A multidimensional array is an array that contains other arrays as its elements.

It is useful for representing data in rows and columns, such as:

- Matrices
- Tables
- Game boards
- Student marks
- Seating arrangements
- Graph representations

JavaScript does not have a separate matrix data type. We represent matrices using nested arrays.

### Example

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
```

Visual representation:

```text
        Column
         0  1  2

Row 0   [1, 2, 3]
Row 1   [4, 5, 6]
Row 2   [7, 8, 9]
```

---

## 2. One-Dimensional Array

A one-dimensional array contains elements in a single sequence.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
```

Each element is accessed using one index.

---

## 3. Two-Dimensional Array

A two-dimensional array contains arrays inside an outer array.

```javascript
const matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
```

Think of it as rows and columns.

### Accessing Elements

Syntax:

```javascript
array[rowIndex][columnIndex];
```

Example:

```javascript
console.log(matrix[0][0]); // 10
console.log(matrix[1][2]); // 60
console.log(matrix[2][1]); // 80
```

Explanation:

- `matrix[0]` accesses the first row.
- `matrix[0][1]` accesses the second element of the first row.
- `matrix[2][2]` accesses the third element of the third row.

### Accessing an Entire Row

```javascript
console.log(matrix[1]);
```

Output:

```javascript
[40, 50, 60]
```

### Updating an Element

```javascript
matrix[1][1] = 500;

console.log(matrix[1][1]); // 500
```

This modifies the nested array.

---

## 4. Creating a Two-Dimensional Array

### Method 1: Array Literal

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];
```

This is the simplest and most common approach.

### Method 2: Array.from()

```javascript
const rows = 3;
const columns = 4;

const matrix = Array.from(
    { length: rows },
    () => Array(columns).fill(0)
);

console.log(matrix);
```

Output:

```javascript
[
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
```

Each row is a separate array.

**Important:** Use a function to create each row. Avoid repeating the same nested array reference.

Incorrect:

```javascript
const matrix = Array(3).fill(Array(4).fill(0));

matrix[0][0] = 100;

console.log(matrix);
```

All rows appear changed because every row refers to the same inner array.

Correct:

```javascript
const matrix = Array.from(
    { length: 3 },
    () => Array(4).fill(0)
);

matrix[0][0] = 100;

console.log(matrix);
```

Only the first row changes.

---

## 5. Traversing a Two-Dimensional Array

Nested loops are commonly used to visit every element.

### Using for Loops

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

Explanation:

- Outer loop traverses rows.
- Inner loop traverses columns.
- `matrix[i][j]` accesses each element.

### Using for...of

```javascript
for (const row of matrix) {
    for (const element of row) {
        console.log(element);
    }
}
```

This is often more readable when indexes are not required.

---

## 6. Row-Wise and Column-Wise Traversal

### Row-Wise Traversal

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

Order:

```text
1 2 3 4 5 6 7 8 9
```

### Column-Wise Traversal

For a rectangular matrix:

```javascript
for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][j]);
    }
}
```

Order:

```text
1 4 7 2 5 8 3 6 9
```

For potentially empty or jagged arrays, validate dimensions and row lengths before using this traversal.

---

## 7. Calculating the Sum of Matrix Elements

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}

console.log(sum); // 45
```

Time Complexity: O(rows × columns)

---

## 8. Row Sum

Calculate the sum of every row.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    let sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }

    console.log(sum);
}
```

Output:

```text
6
15
24
```

---

## 9. Column Sum

Calculate the sum of every column in a rectangular matrix.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rows = matrix.length;
const columns = matrix[0].length;

for (let j = 0; j < columns; j++) {
    let sum = 0;

    for (let i = 0; i < rows; i++) {
        sum += matrix[i][j];
    }

    console.log(sum);
}
```

Output:

```text
12
15
18
```

---

## 10. Diagonal Elements

For a square matrix, the primary diagonal contains elements where row index equals column index.

Example:

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Primary diagonal:

```text
1 5 9
```

Code:

```javascript
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
}

console.log(sum); // 15
```

### Secondary Diagonal

The secondary diagonal contains elements where:

```text
columnIndex = n - 1 - rowIndex
```

For the same matrix:

```text
3 5 7
```

Code:

```javascript
const n = matrix.length;
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += matrix[i][n - 1 - i];
}

console.log(sum); // 15
```

These formulas assume a square matrix.

---

## 11. Transpose of a Matrix

Transpose converts rows into columns and columns into rows.

Original:

```text
1 2 3
4 5 6
```

Transpose:

```text
1 4
2 5
3 6
```

Code:

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

const rows = matrix.length;
const columns = matrix[0].length;

const transpose = [];

for (let j = 0; j < columns; j++) {
    const newRow = [];

    for (let i = 0; i < rows; i++) {
        newRow.push(matrix[i][j]);
    }

    transpose.push(newRow);
}

console.log(transpose);
```

Output:

```javascript
[
    [1, 4],
    [2, 5],
    [3, 6]
]
```

Time Complexity: O(rows × columns)

Space Complexity: O(rows × columns) for the resulting matrix.

---

## 12. Flattening a Two-Dimensional Array

You can convert a two-dimensional array into a one-dimensional array using `flat()`.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = matrix.flat();

console.log(result);
```

Output:

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

For deeper nested arrays:

```javascript
const arr = [1, [2, [3, 4]]];

console.log(arr.flat(Infinity));
```

Output:

```javascript
[1, 2, 3, 4]
```

---

## 13. Three-Dimensional Arrays

A three-dimensional array contains arrays of two-dimensional arrays.

```javascript
const data = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
```

Accessing an element:

```javascript
console.log(data[0][1][0]); // 3
```

Think of the indexes as:

```text
data[layer][row][column]
```

This structure is useful for representing multiple matrices or layers of data.

---

## 14. Jagged Arrays

A jagged array is a nested array in which rows can have different lengths.

```javascript
const arr = [
    [1, 2],
    [3, 4, 5],
    [6]
];
```

Each row has a different number of elements.

Use the current row's length while traversing:

```javascript
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
```

Do not assume every row has the same number of columns.

---

## 15. Common Mistakes

### Mistake 1: Wrong Indexing

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[1]); // [3, 4]
console.log(matrix[1][0]); // 3
```

### Mistake 2: Using the Same Inner Array for Every Row

```javascript
const matrix = Array(3).fill(Array(3).fill(0));
```

All rows refer to the same array.

Use:

```javascript
const matrix = Array.from(
    { length: 3 },
    () => Array(3).fill(0)
);
```

### Mistake 3: Assuming All Rows Have Equal Length

```javascript
const matrix = [
    [1, 2],
    [3, 4, 5]
];
```

Use `matrix[i].length` for row-wise traversal.

### Mistake 4: Accessing an Invalid Index

```javascript
const matrix = [[1, 2], [3, 4]];

console.log(matrix[5][0]); // TypeError
```

The outer index does not exist, so accessing its nested element causes an error.

---

## 16. Interview Questions

1. What is a multidimensional array?
2. How do you access an element in a 2D array?
3. How do you traverse a matrix using nested loops?
4. What is the difference between row-wise and column-wise traversal?
5. How do you calculate the sum of all matrix elements?
6. How do you calculate row sums and column sums?
7. What is a primary diagonal?
8. What is a secondary diagonal?
9. What is matrix transpose?
10. What is a jagged array?
11. Why should we use `Array.from()` when creating independent rows?
12. What is the time complexity of traversing an R × C matrix?
13. How can a 2D array be flattened?
14. How do you represent a 3D array?
15. What happens if all rows share the same inner array reference?

---

## 17. Output-Based Practice

### Q1

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[1][0]);
```

### Q2

```javascript
const matrix = [
    [10, 20, 30],
    [40, 50, 60]
];

console.log(matrix[0].length);
console.log(matrix.length);
```

### Q3

```javascript
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matrix.flat());
```

### Q4

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0] + matrix[1][1] + matrix[2][2]);
```

### Q5

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];

matrix[0][1] = 100;

console.log(matrix);
```

### Q6

```javascript
const matrix = Array(2).fill(Array(2).fill(0));

matrix[0][0] = 5;

console.log(matrix);
```

### Q7

```javascript
const matrix = [
    [1, 2],
    [3, 4, 5],
    [6]
];

for (const row of matrix) {
    console.log(row.length);
}
```

### Q8

```javascript
const data = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];

console.log(data[1][0][1]);
```

---

## 18. Coding Practice

### Beginner

1. Print all elements of a 2D array.
2. Calculate the sum of all elements.
3. Find the maximum element in a matrix.
4. Calculate the sum of every row.
5. Calculate the sum of every column.

### Intermediate

6. Find the primary diagonal sum.
7. Find the secondary diagonal sum.
8. Transpose a rectangular matrix.
9. Flatten a 2D array without using `flat()`.
10. Count even and odd elements in a matrix.
11. Search for a target value in a matrix.
12. Find the largest element in every row.

### Advanced

13. Rotate a square matrix 90 degrees clockwise.
14. Print a matrix in spiral order.
15. Search in a row-wise and column-wise sorted matrix.
16. Set matrix rows and columns to zero when an element is zero.
17. Print matrix elements in diagonal traversal order.

---

## 19. Quick Revision

- A multidimensional array contains nested arrays.
- Access elements using `matrix[row][column]`.
- Nested loops are used for traversal.
- Row-wise traversal processes one row at a time.
- Column-wise traversal processes one column at a time.
- Primary diagonal uses `matrix[i][i]`.
- Secondary diagonal uses `matrix[i][n - 1 - i]`.
- Transpose swaps rows and columns.
- Jagged arrays have rows of different lengths.
- Use `Array.from()` with a callback to create independent rows.

## Official Documentation

- [Array — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.from() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Array.prototype.flat() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

**Topic 12 Complete — Multidimensional Arrays**

