

# Topic 13 — Shallow Copy vs Deep Copy in JavaScript

## 1. Introduction

JavaScript arrays and objects are reference types.

When we assign an object or array to another variable, JavaScript copies the reference, not the actual object.

Understanding copying is important for:

- Avoiding unexpected changes.
- Managing nested arrays and objects.
- React state management.
- Working with API data.
- Preventing accidental mutations.

There are two important types of copying:

1. Shallow Copy
2. Deep Copy

---

## 2. Primitive Values vs Reference Values

### Primitive Values

Primitive values include:

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

When a primitive value is assigned to another variable, its value is copied.

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

### Reference Values

Arrays and ordinary objects are reference types.

```javascript
const obj1 = {
    name: "Anu"
};

const obj2 = obj1;

obj2.name = "Riya";

console.log(obj1.name); // Riya
console.log(obj2.name); // Riya
```

Both variables refer to the same object.

Visual representation:

```text
obj1 ──────┐
           ├────> { name: "Riya" }
obj2 ──────┘
```

---

## 3. What is Shallow Copy?

A shallow copy creates a new outer object or array, but nested objects and arrays are still shared references.

In simple terms:

- The outer structure is copied.
- Nested reference values are not recursively copied.

### Example 1: Shallow Copy of an Array

```javascript
const original = [10, 20, 30];

const copy = [...original];

copy[0] = 100;

console.log(original); // [10, 20, 30]
console.log(copy);     // [100, 20, 30]
```

Why?

Because spread creates a new outer array.

### Example 2: Shallow Copy of an Object

```javascript
const original = {
    name: "Anu",
    age: 22
};

const copy = { ...original };

copy.name = "Riya";

console.log(original.name); // Anu
console.log(copy.name);     // Riya
```

The outer objects are different.

---

## 4. The Problem with Nested Objects

Consider:

```javascript
const original = {
    name: "Anu",
    address: {
        city: "Delhi",
        country: "India"
    }
};

const copy = { ...original };

copy.name = "Riya";
copy.address.city = "Noida";

console.log(original);
console.log(copy);
```

Output:

```javascript
{
    name: "Anu",
    address: {
        city: "Noida",
        country: "India"
    }
}

{
    name: "Riya",
    address: {
        city: "Noida",
        country: "India"
    }
}
```

Why did the original city also change?

Because the nested `address` object is shared.

Visual representation:

```text
original ─────> Outer Object A
                    |
                    | address
                    v
                 Address Object
                    ^
                    | address
copy ─────────> Outer Object B
```

The outer objects are different, but both refer to the same nested address object.

---

## 5. Common Methods That Create Shallow Copies

### Arrays

```javascript
const original = [1, 2, 3];

const copy1 = [...original];
const copy2 = original.slice();
const copy3 = original.concat();
const copy4 = Array.from(original);
```

### Objects

```javascript
const original = {
    name: "Anu",
    age: 22
};

const copy1 = { ...original };
const copy2 = Object.assign({}, original);
```

These methods create shallow copies.

### Important

The following array methods also return shallow copies:

- `map()`
- `filter()`
- `flat()`
- `toSorted()`
- `toReversed()`
- `toSpliced()`

For nested objects, their references are generally preserved.

---

## 6. What is Deep Copy?

A deep copy creates a new structure and recursively copies nested objects and arrays.

Changes to the copied nested structures do not affect the original.

Example:

```javascript
const original = {
    name: "Anu",
    address: {
        city: "Delhi"
    }
};

const copy = structuredClone(original);

copy.name = "Riya";
copy.address.city = "Noida";

console.log(original);
console.log(copy);
```

Output:

```javascript
{
    name: "Anu",
    address: {
        city: "Delhi"
    }
}

{
    name: "Riya",
    address: {
        city: "Noida"
    }
}
```

The nested structures are independent.

---

## 7. structuredClone()

`structuredClone()` is the modern built-in method for deep cloning supported structured-cloneable values.

### Syntax

```javascript
const copy = structuredClone(original);
```

### Example 1: Nested Object

```javascript
const original = {
    user: {
        name: "Anu",
        skills: ["Java", "JavaScript"]
    }
};

const copy = structuredClone(original);

copy.user.name = "Riya";
copy.user.skills.push("React");

console.log(original);
console.log(copy);
```

The original remains unchanged.

### Example 2: Nested Array

```javascript
const original = [
    [1, 2],
    [3, 4]
];

const copy = structuredClone(original);

copy[0][0] = 100;

console.log(original);
console.log(copy);
```

Output:

```javascript
[
    [1, 2],
    [3, 4]
]

[
    [100, 2],
    [3, 4]
]
```

### Important Limitations

`structuredClone()`:

- Supports many built-in data types, including arrays, objects, Date, Map and Set.
- Supports circular references.
- Does not clone functions.
- Does not clone DOM nodes.
- Throws `DataCloneError` for unsupported values.
- Does not preserve custom class prototypes and property descriptors as a general-purpose object-cloning mechanism.

Use it when your data is compatible with the structured clone algorithm.

---

## 8. JSON Method for Deep Copy

Another commonly discussed approach is:

```javascript
const copy = JSON.parse(JSON.stringify(original));
```

Example:

```javascript
const original = {
    name: "Anu",
    address: {
        city: "Delhi"
    }
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Noida";

console.log(original.address.city); // Delhi
console.log(copy.address.city);     // Noida
```

This works for many simple JSON-compatible objects, but it has important limitations.

### Limitations of JSON Deep Copy

| Value | JSON Behavior |
|---|---|
| `undefined` object property | Omitted |
| `undefined` array element | Converted to `null` |
| Function | Omitted in objects; becomes `null` in arrays |
| Symbol-keyed property | Not preserved |
| `Date` | Converted to string |
| `Map` | Usually becomes `{}` |
| `Set` | Usually becomes `{}` |
| `BigInt` | Throws TypeError |
| Circular reference | Throws TypeError |

Therefore, JSON cloning is not a universal deep-copy solution.

---

## 9. Object.assign() vs Spread Syntax

Both create shallow copies of objects.

### Spread Syntax

```javascript
const original = {
    name: "Anu",
    age: 22
};

const copy = { ...original };
```

### Object.assign()

```javascript
const original = {
    name: "Anu",
    age: 22
};

const copy = Object.assign({}, original);
```

Comparison:

| Spread Syntax | Object.assign() |
|---|---|
| Creates a new object literal | Copies properties into a target object |
| Shallow copy | Shallow copy |
| Common modern syntax | Useful for copying into an existing target |
| Does not mutate source | Does not mutate source, but mutates its target |

Important: `Object.assign()` copies enumerable own properties. It does not recursively clone nested objects.

---

## 10. Reference Equality

Two different objects with the same properties are not equal by reference.

```javascript
const obj1 = { name: "Anu" };
const obj2 = { name: "Anu" };

console.log(obj1 === obj2); // false
```

They are different objects in memory.

But:

```javascript
const obj1 = { name: "Anu" };
const obj2 = obj1;

console.log(obj1 === obj2); // true
```

Both variables reference the same object.

### Shallow Copy Equality

```javascript
const original = {
    address: {
        city: "Delhi"
    }
};

const copy = { ...original };

console.log(original === copy); // false
console.log(original.address === copy.address); // true
```

This is an important interview example.

---

## 11. Shallow Copy vs Deep Copy

| Feature | Shallow Copy | Deep Copy |
|---|---|---|
| Outer object | New | New |
| Nested objects | Shared references | Recursively copied |
| Nested arrays | Shared references | Recursively copied |
| Original affected by nested mutation? | Can be | No, for cloned supported data |
| Performance | Usually cheaper | Usually more expensive |
| Common methods | Spread, slice, Object.assign | structuredClone |

---

## 12. Copying Arrays of Objects

Consider a list of students:

```javascript
const students = [
    { id: 1, name: "Anu" },
    { id: 2, name: "Riya" }
];
```

### Shallow Copy of the Outer Array

```javascript
const copy = [...students];

console.log(students === copy); // false
console.log(students[0] === copy[0]); // true
```

The outer array is different, but its student objects are shared.

### Updating an Object Immutably

Instead of mutating a shared object, create a new object:

```javascript
const updatedStudents = students.map(student =>
    student.id === 1
        ? { ...student, name: "Priya" }
        : student
);
```

Now:
- The new outer array is independent.
- The updated student object is new.
- Unchanged student objects are still shared.

This is often exactly what React needs.

---

## 13. Immutability in React

React applications commonly use immutable updates.

### Incorrect: Mutating Existing State

```javascript
items[0].name = "Updated";

setItems(items);
```

This modifies the existing array and object.

### Correct: Create a New Array and Object

```javascript
setItems(previousItems =>
    previousItems.map(item =>
        item.id === 1
            ? { ...item, name: "Updated" }
            : item
    )
);
```

### Updating a Nested Property

```javascript
setUser(previousUser => ({
    ...previousUser,
    address: {
        ...previousUser.address,
        city: "Noida"
    }
}));
```

Notice that each level being changed gets a new object.

**Important:** React does not require deep-cloning the entire state for every update. Copy the array and object levels that need to change, while preserving unchanged references.

---

## 14. Common Mistakes

### Mistake 1: Thinking Spread Creates a Deep Copy

```javascript
const original = {
    address: {
        city: "Delhi"
    }
};

const copy = { ...original };

copy.address.city = "Noida";

console.log(original.address.city); // Noida
```

The nested object is shared.

### Mistake 2: Using JSON Cloning for Every Data Type

```javascript
const original = {
    date: new Date()
};

const copy = JSON.parse(JSON.stringify(original));

console.log(typeof copy.date); // string
```

The Date object becomes a string.

### Mistake 3: Assuming map() Deep Copies Objects

```javascript
const original = [{ name: "Anu" }];

const copy = original.map(item => item);

console.log(original[0] === copy[0]); // true
```

`map()` creates a new array, but the object references are the same.

Correct for a one-level object copy:

```javascript
const copy = original.map(item => ({ ...item }));
```

This still does not deeply clone nested objects inside each item.

---

## 15. Interview Questions

1. What is a reference type in JavaScript?
2. What happens when one object is assigned to another variable?
3. What is a shallow copy?
4. What is a deep copy?
5. What is the difference between shallow and deep copying?
6. Does spread syntax create a deep copy?
7. Is `slice()` a shallow or deep copy?
8. Is `Object.assign()` a shallow or deep copy?
9. What does `structuredClone()` do?
10. What are the limitations of `structuredClone()`?
11. Why is JSON serialization not a universal deep-copy solution?
12. What happens when you copy an array containing objects using spread?
13. What is the difference between `obj1 === obj2` and matching object properties?
14. Why is immutability important in React?
15. How do you update a nested object without mutating the original?
16. Does `map()` create deep copies of objects?
17. What is the difference between copying an array and copying its elements?
18. What happens to nested references when using `filter()`?

---

## 16. Output-Based Practice

Predict the output before running each program.

### Q1 — Reference Assignment

```javascript
const a = [10, 20, 30];

const b = a;

b[0] = 100;

console.log(a);
console.log(b);
console.log(a === b);
```

### Q2 — Shallow Copy with Spread

```javascript
const a = [10, 20, 30];

const b = [...a];

b[0] = 100;

console.log(a);
console.log(b);
console.log(a === b);
```

### Q3 — Nested Object

```javascript
const original = {
    name: "Anu",
    address: {
        city: "Delhi"
    }
};

const copy = { ...original };

copy.address.city = "Noida";

console.log(original.address.city);
```

### Q4 — Nested Array

```javascript
const original = [[1, 2], [3, 4]];

const copy = [...original];

copy[0][0] = 100;

console.log(original);
console.log(copy);
```

### Q5 — Object.assign()

```javascript
const original = {
    user: {
        name: "Anu"
    }
};

const copy = Object.assign({}, original);

console.log(original === copy);
console.log(original.user === copy.user);
```

### Q6 — map()

```javascript
const original = [
    { name: "Anu" },
    { name: "Riya" }
];

const copy = original.map(item => item);

copy[0].name = "Priya";

console.log(original[0].name);
```

### Q7 — Deep Copy

```javascript
const original = {
    user: {
        name: "Anu"
    }
};

const copy = structuredClone(original);

copy.user.name = "Riya";

console.log(original.user.name);
console.log(copy.user.name);
```

### Q8 — JSON Copy

```javascript
const original = {
    name: "Anu",
    age: undefined
};

const copy = JSON.parse(JSON.stringify(original));

console.log(copy);
```

### Q9 — Equality

```javascript
const a = { value: 10 };
const b = { value: 10 };
const c = a;

console.log(a === b);
console.log(a === c);
```

### Q10 — Nested Immutable Update

```javascript
const user = {
    name: "Anu",
    address: {
        city: "Delhi"
    }
};

const updated = {
    ...user,
    address: {
        ...user.address,
        city: "Noida"
    }
};

console.log(user.address.city);
console.log(updated.address.city);
console.log(user.address === updated.address);
```

---

## 17. Coding Practice

### Beginner

1. Create a shallow copy of an array using spread syntax.
2. Create a shallow copy of an object using spread syntax.
3. Copy an array using `slice()` and compare references.
4. Copy an object using `Object.assign()` and compare references.
5. Demonstrate the difference between reference assignment and shallow copying.

### Intermediate

6. Create a shallow copy of an array containing nested arrays.
7. Demonstrate how changing a nested object affects a shallow copy.
8. Deep-clone a nested object using `structuredClone()`.
9. Deep-clone a nested array using `structuredClone()`.
10. Update one student object in an array without mutating the original.
11. Update a nested user address without mutating the original.
12. Compare JSON cloning and `structuredClone()` using a Date value.

### Advanced

13. Write a function that performs an immutable update of an object property using a given key.
14. Write a function that updates a nested object property without changing the original.
15. Given an array of products, update the price of one product immutably.
16. Create a nested object and demonstrate reference sharing at multiple levels.
17. Explain and implement the difference between shallow cloning an array of objects and deep cloning it.

---

## 18. Quick Revision

- Arrays and objects are reference types.
- Assignment copies a reference, not the object.
- Shallow copy creates a new outer structure.
- Nested objects and arrays remain shared in shallow copies.
- Spread syntax creates shallow copies.
- `slice()`, `map()` and `filter()` create shallow array results.
- `Object.assign()` creates a shallow object copy.
- `structuredClone()` performs deep cloning for supported structured-cloneable data.
- JSON cloning has limitations.
- Immutability means avoiding changes to existing state.
- In React, create new references for the array and object levels being updated.

## Official Documentation

1. [structuredClone() — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)
2. [Spread Syntax — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
3. [Object.assign() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
4. [Working with Objects — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
5. [Updating Arrays in State — React](https://react.dev/learn/updating-arrays-in-state)

**Topic 13 Complete — Shallow Copy vs Deep Copy**

