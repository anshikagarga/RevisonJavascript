# Topic 6: Array Iteration Methods in JavaScript

## 1. Introduction to Array Iteration

Iteration means executing an operation for each element of an array.

JavaScript provides several built-in methods to iterate over arrays.

The three important methods are:

1. `forEach()`
2. `map()`
3. `filter()`

These methods accept callback functions.

### What is a Callback Function?

A callback function is a function passed as an argument to another function.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Anshika");
}

processUser(greet);
```

Output:

```text
Hello Anshika
```

Array methods use callbacks to perform operations on individual elements.

---

# 2. forEach() Method

The `forEach()` method executes a callback function once for each element of an array.

### Syntax

```javascript
array.forEach(callback(currentValue, index, array));
```

Callback parameters:

- `currentValue`: Current element being processed.
- `index`: Index of the current element.
- `array`: Original array being traversed.

All three parameters are optional.

### Example 1: Basic Usage

```javascript
let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log(num);
});
```

Output:

```text
10
20
30
40
```

### Example 2: Using Arrow Function

```javascript
let numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num);
});
```

### Example 3: Accessing Index

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Mango
```

### Example 4: Accessing All Three Parameters

```javascript
let numbers = [10, 20, 30];

numbers.forEach((value, index, arr) => {
    console.log("Value:", value);
    console.log("Index:", index);
    console.log("Array:", arr);
});
```

### Example 5: Calculating Sum

```javascript
let numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach(num => {
    sum += num;
});

console.log(sum); // 100
```

### Return Value of forEach()

`forEach()` always returns `undefined`.

```javascript
let numbers = [10, 20, 30];

let result = numbers.forEach(num => num * 2);

console.log(result); // undefined
```

Important:

Even though the callback calculates `num * 2`, `forEach()` does not collect or return those values.

### Can We Modify the Original Array?

Yes, but it depends on what we modify.

```javascript
let numbers = [10, 20, 30];

numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log(numbers); // [20, 40, 60]
```

Here, we directly modify the original array.

However, `forEach()` itself does not automatically transform the array.

### Can We Break a forEach() Loop?

No. We cannot use `break` to stop a `forEach()` iteration.

```javascript
let numbers = [10, 20, 30];

numbers.forEach(num => {
    if (num === 20) {
        return;
    }

    console.log(num);
});
```

Output:

```text
10
30
```

Here, `return` only skips the current callback execution. It does not stop the entire iteration.

If you need early termination, use a regular loop or an appropriate method such as `some()` or `find()`.

### Important Points

- Executes callback for each existing array element.
- Does not return a new array.
- Returns `undefined`.
- Cannot be stopped using `break`.
- Does not automatically modify the original array.
- Is synchronous; it does not wait for asynchronous callbacks.

---

# 3. map() Method

The `map()` method creates a new array by applying a callback function to every existing element of the original array.

It returns a new array containing the callback results.

### Syntax

```javascript
let newArray = array.map(callback(currentValue, index, array));
```

### Example 1: Doubling Numbers

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(num => num * 2);

console.log(result); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4]
```

The original array remains unchanged.

### Example 2: Squaring Numbers

```javascript
let numbers = [2, 3, 4, 5];

let squares = numbers.map(num => num * num);

console.log(squares); // [4, 9, 16, 25]
```

### Example 3: Using Index

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let result = fruits.map((fruit, index) => {
    return index + ": " + fruit;
});

console.log(result);
```

Output:

```javascript
["0: Apple", "1: Banana", "2: Mango"]
```

### Example 4: Extracting Values from Objects

```javascript
let students = [
    { name: "Anshika", marks: 85 },
    { name: "Rahul", marks: 90 },
    { name: "Priya", marks: 78 }
];

let names = students.map(student => student.name);

console.log(names);
// ["Anshika", "Rahul", "Priya"]
```

### Example 5: Transforming Objects

```javascript
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];

let updatedProducts = products.map(product => {
    return {
        name: product.name,
        priceWithTax: product.price * 1.18
    };
});

console.log(updatedProducts);
```

### What Happens If We Do Not Return Anything?

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(num => {
    num * 2;
});

console.log(result); // [undefined, undefined, undefined]
```

Why?

Because the callback does not explicitly return a value.

Correct:

```javascript
let result = numbers.map(num => {
    return num * 2;
});
```

Or:

```javascript
let result = numbers.map(num => num * 2);
```

### Important Points

- Creates and returns a new array.
- Does not automatically modify the original array.
- The returned array has the same length as the original array.
- Each visited element produces one result.
- Use it when you want to transform data.

Note: Sparse slots are preserved as empty slots in the mapped result. The callback is not called for those slots.

---

# 4. filter() Method

The `filter()` method creates a new array containing only the elements that satisfy a given condition.

The callback must return a truthy or falsy value.

### Syntax

```javascript
let newArray = array.filter(callback(currentValue, index, array));
```

### Example 1: Find Even Numbers

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6]
```

### Example 2: Find Odd Numbers

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers);
// [1, 3, 5]
```

### Example 3: Filter Numbers Greater Than 50

```javascript
let numbers = [10, 60, 30, 80, 40, 90];

let result = numbers.filter(num => num > 50);

console.log(result);
// [60, 80, 90]
```

### Example 4: Filter Objects

```javascript
let students = [
    { name: "Anshika", marks: 85 },
    { name: "Rahul", marks: 35 },
    { name: "Priya", marks: 92 },
    { name: "Aman", marks: 28 }
];

let passedStudents = students.filter(student => {
    return student.marks >= 40;
});

console.log(passedStudents);
```

Result:

```javascript
[
    { name: "Anshika", marks: 85 },
    { name: "Priya", marks: 92 }
]
```

### Example 5: Filter by Multiple Conditions

```javascript
let students = [
    { name: "Anshika", marks: 85, age: 22 },
    { name: "Rahul", marks: 75, age: 20 },
    { name: "Priya", marks: 92, age: 21 }
];

let result = students.filter(student => {
    return student.marks > 80 && student.age >= 21;
});

console.log(result);
```

### What Does filter() Return?

It returns a new array.

If no elements match, it returns an empty array.

```javascript
let numbers = [1, 3, 5, 7];

let result = numbers.filter(num => num % 2 === 0);

console.log(result); // []
```

### Important Points

- Creates a new array.
- Includes only elements that satisfy the condition.
- Does not modify the original array.
- Can return an empty array.
- Preserves the order of matching elements.

---

# 5. Difference Between forEach(), map() and filter()

| Feature | forEach() | map() | filter() |
|---|---|---|---|
| Main purpose | Execute an operation | Transform elements | Select elements |
| Returns | undefined | New array | New array |
| New array created | No | Yes | Yes |
| Original array changed automatically | No | No | No |
| Result length | No returned array | Same length as source | Same or smaller |
| Callback return used | No | Yes | Yes, as a condition |
| Can stop early | No | No | No |

### Example: Same Array, Three Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach(num => console.log(num * 2));

// map()
let doubled = numbers.map(num => num * 2);

// filter()
let even = numbers.filter(num => num % 2 === 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(even);    // [2, 4]
```

Remember:

- `forEach()` → Perform an action.
- `map()` → Transform values.
- `filter()` → Select values.

---

# 6. Chaining Array Methods

We can combine multiple array methods to perform operations in sequence.

This is called method chaining.

### Example 1: Filter and Then Map

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num);

console.log(result);
// [4, 16, 36]
```

Step-by-step:

1. `filter()` selects even numbers: `[2, 4, 6]`.
2. `map()` squares them: `[4, 16, 36]`.

### Example 2: Filter Students and Extract Names

```javascript
let students = [
    { name: "Anshika", marks: 85 },
    { name: "Rahul", marks: 35 },
    { name: "Priya", marks: 92 }
];

let result = students
    .filter(student => student.marks >= 40)
    .map(student => student.name);

console.log(result);
// ["Anshika", "Priya"]
```

### Example 3: Chaining Multiple Methods

```javascript
let numbers = [10, 15, 20, 25, 30, 35];

let result = numbers
    .filter(num => num > 15)
    .map(num => num * 2)
    .filter(num => num < 60);

console.log(result);
// [40, 50]
```

---

# 7. Important Concept: Callback Execution

Consider this example:

```javascript
let numbers = [10, 20, 30];

let result = numbers.map((num, index) => {
    console.log("Current Value:", num);
    console.log("Current Index:", index);

    return num + index;
});

console.log(result);
```

Output:

```text
Current Value: 10
Current Index: 0

Current Value: 20
Current Index: 1

Current Value: 30
Current Index: 2

[10, 21, 32]
```

The callback executes once for each existing element.

---

# 8. Important Concept: Asynchronous Callbacks

Array methods such as `forEach()` do not automatically wait for asynchronous callbacks.

Incorrect assumption:

```javascript
async function processNumbers() {
    let numbers = [1, 2, 3];

    numbers.forEach(async num => {
        await someAsyncOperation(num);
        console.log(num);
    });

    console.log("Finished");
}
```

The `"Finished"` message can appear before all asynchronous operations complete.

If you need to wait for all operations, use `Promise.all()` with `map()`:

```javascript
async function processNumbers() {
    let numbers = [1, 2, 3];

    await Promise.all(
        numbers.map(num => someAsyncOperation(num))
    );

    console.log("Finished");
}
```

Here, `Promise.all()` waits for all returned promises to settle successfully. If one rejects, the combined promise rejects.

We will study asynchronous JavaScript and promises in detail in a later chapter.

---

# 9. Common Mistakes

### Mistake 1: Expecting forEach() to Return an Array

```javascript
let numbers = [1, 2, 3];

let result = numbers.forEach(num => num * 2);

console.log(result); // undefined
```

Use `map()` when you need a transformed array.

### Mistake 2: Forgetting return in map()

```javascript
let result = [1, 2, 3].map(num => {
    num * 2;
});

console.log(result);
// [undefined, undefined, undefined]
```

Correct:

```javascript
let result = [1, 2, 3].map(num => {
    return num * 2;
});
```

### Mistake 3: Using map() Instead of filter()

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(num => num > 2);

console.log(result);
// [false, false, true, true]
```

This is not filtering. It transforms every element into a boolean.

Correct:

```javascript
let result = numbers.filter(num => num > 2);

console.log(result);
// [3, 4]
```

### Mistake 4: Assuming map() Deep Copies Objects

```javascript
let users = [{ name: "Anshika" }];

let result = users.map(user => user);

result[0].name = "Rahul";

console.log(users[0].name); // Rahul
```

The new array contains references to the same objects. `map()` does not automatically deep-copy nested objects.

---

# 10. Time Complexity

For a normal dense array:

| Method | Time Complexity |
|---|---|
| forEach() | O(n) |
| map() | O(n) |
| filter() | O(n) |

All three generally traverse the entire array.

Space complexity:

- `forEach()` → O(1) additional space, excluding callback allocations.
- `map()` → O(n) for the returned array.
- `filter()` → O(k), where k is the number of matching elements.

---

# 11. Interview Questions

**Q1. What is the difference between map() and forEach()?**

`map()` creates and returns a new array. `forEach()` executes a callback but returns undefined.

**Q2. What is the difference between map() and filter()?**

`map()` transforms each element, while `filter()` selects elements based on a condition.

**Q3. Does map() modify the original array?**

No, not automatically. However, a callback can still mutate referenced objects or the original array if explicitly written to do so.

**Q4. What happens if we forget to return a value inside map()?**

The mapped result for that callback execution becomes undefined.

**Q5. Can we use break inside forEach()?**

No. Use a loop when you need break.

**Q6. Can we chain map() and filter()?**

Yes. Both return arrays, so they can be chained.

**Q7. Does filter() preserve the order of elements?**

Yes. Matching elements retain their original relative order.

**Q8. Can forEach() return a new array?**

No. It always returns undefined.

**Q9. What is the difference between map() and a regular for loop?**

Both can transform values. `map()` provides a functional approach and returns a new array, while a regular loop offers more control over execution.

**Q10. Does forEach() wait for async callbacks?**

No. It does not automatically await promises returned by its callback.

---

# 12. Output-Based Practice

Predict the output before running the programs.

### Question 1

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.forEach(num => num * 2);

console.log(result);
```

### Question 2

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(num => {
    return num * 3;
});

console.log(result);
```

### Question 3

```javascript
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(num => num > 20);

console.log(result);
```

### Question 4

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(num => num % 2 === 0);

console.log(result);
```

### Question 5

```javascript
let numbers = [1, 2, 3, 4, 5];

let result = numbers
    .filter(num => num % 2 !== 0)
    .map(num => num * 10);

console.log(result);
```

### Question 6

```javascript
let numbers = [10, 20, 30];

numbers.forEach((num, index, arr) => {
    arr[index] = num + 5;
});

console.log(numbers);
```

### Question 7

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num, index) => {
    return num + index;
});

console.log(result);
```

### Question 8

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(num => num > 2)
    .map(num => num * 2)
    .filter(num => num < 10);

console.log(result);
```

### Question 9

```javascript
let arr = [1, 2, 3];

let result = arr.map(num => {
    if (num > 1) {
        return num * 2;
    }
});

console.log(result);
```

### Question 10

```javascript
let students = [
    { name: "A", marks: 80 },
    { name: "B", marks: 35 },
    { name: "C", marks: 90 }
];

let result = students
    .filter(student => student.marks >= 40)
    .map(student => student.name);

console.log(result);
```

---

# 13. Coding Practice

## Beginner Level

1. Print every element of an array using `forEach()`.
2. Create a new array containing the squares of all numbers using `map()`.
3. Extract all even numbers using `filter()`.
4. Convert an array of names into uppercase using `map()`.
5. Find all numbers greater than 50 using `filter()`.

## Intermediate Level

6. Given an array of prices, create a new array with a 10% discount applied to every price.
7. Given an array of students, extract only the names of students who passed.
8. Given an array of numbers, filter positive numbers and then calculate their squares.
9. Convert an array of objects into an array containing only their IDs.
10. Given an array of products, filter products costing less than 1000 and extract their names.

## Advanced Level

11. Given an array of numbers, return the squares of only the even numbers.
12. Given an array of employees, select employees with salaries above 50,000 and extract their names.
13. Given an array of strings, return a new array containing only strings longer than five characters, converted to uppercase.
14. Given an array of transactions, select successful transactions and extract their amounts.
15. Implement your own simplified versions of `map()` and `filter()` using loops.

---

# 14. Quick Revision

- `forEach()` executes a callback for each existing element.
- `forEach()` returns undefined.
- `map()` transforms elements and returns a new array.
- `filter()` selects matching elements and returns a new array.
- `map()` and `filter()` do not automatically mutate the original array.
- Callback return values are important in `map()` and `filter()`.
- `map()` is used for transformation.
- `filter()` is used for selection.
- `forEach()` is used for performing actions.
- All three methods can be chained where appropriate.

## Documentation

- [MDN — forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN — map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN — filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)