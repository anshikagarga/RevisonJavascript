# Chapter 3: Variables and Data Types

## 1. What is a Variable?

A variable is a named storage reference used to access data during program execution.

In JavaScript, variables can be declared using:

- `var`
- `let`
- `const`

```javascript
let name = "Anshi";
const age = 22;
var city = "Noida";
```

## 2. Variable Declaration, Initialization and Assignment

### Declaration
Creating a variable.

```javascript
let score;
```

### Initialization
Assigning its first value.

```javascript
score = 100;
```

### Declaration and initialization together

```javascript
let marks = 95;
```

### Reassignment

```javascript
let marks = 95;
marks = 98;
```

The value of `marks` is now 98.

## 3. Difference Between var, let and const

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function | Block | Block |
| Redeclaration in same scope | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisting | Yes | Yes | Yes |
| Before declaration access | undefined | ReferenceError | ReferenceError |

### var example

```javascript
var x = 10;
var x = 20;

console.log(x); // 20
```

### let example

```javascript
let age = 22;
age = 23;

// let age = 24; // SyntaxError in same scope
```

### const example

```javascript
const PI = 3.14159;

// PI = 3.14; // TypeError
```

**Important:** `const` requires initialization at declaration.

## 4. Scope of Variables

Scope determines where a variable can be accessed.

### A. Global Scope

A variable declared outside functions and blocks is generally accessible throughout its applicable scope.

```javascript
let username = "Anshi";

function greet() {
    console.log(username);
}

greet(); // Anshi
```

### B. Function Scope

Variables declared with `var` inside a function are accessible throughout that function.

```javascript
function demo() {
    var message = "Hello";
    console.log(message);
}

demo();

// console.log(message); // ReferenceError
```

### C. Block Scope

Variables declared with `let` and `const` inside a block are accessible only within that block.

```javascript
{
    let x = 10;
    const y = 20;
}

// console.log(x); // ReferenceError
```

## 5. Hoisting

Hoisting describes how JavaScript processes declarations before executing code.

### var hoisting

```javascript
console.log(a); // undefined

var a = 10;
```

Conceptually, the declaration is processed before execution, while the assignment occurs at its original position.

### let and const hoisting

```javascript
// console.log(b); // ReferenceError

let b = 20;
```

`let` and `const` declarations are also processed before execution, but they cannot be accessed before initialization.

This inaccessible period is called the Temporal Dead Zone (TDZ).

**Important:** Hoisting does not mean JavaScript physically moves code to the top.

## 6. Temporal Dead Zone (TDZ)

TDZ is the period between entering a scope and initializing a `let` or `const` binding.

```javascript
{
    // TDZ starts

    // console.log(value); // ReferenceError

    let value = 100;

    console.log(value); // 100
}
```

## 7. JavaScript Data Types

JavaScript has seven primitive types and one non-primitive category: objects.

### Primitive Data Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

### A. String

Represents textual data.

```javascript
let name = "Anshi";
let city = 'Noida';
let message = `Hello ${name}`;
```

### B. Number

Represents integers and floating-point numbers.

```javascript
let age = 22;
let price = 99.99;
let result = Infinity;
let invalid = NaN;
```

JavaScript uses the Number type for ordinary numeric values.

### C. Boolean

Represents true or false.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

### D. Undefined

A variable declared without an assigned value has the value `undefined`.

```javascript
let score;

console.log(score); // undefined
```

### E. Null

Represents an intentional absence of a value.

```javascript
let selectedUser = null;
```

### F. BigInt

Represents integers larger than the safe integer range of Number.

```javascript
let bigNumber = 12345678901234567890n;
```

### G. Symbol

Creates unique primitive values, often used as object property keys.

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

## 8. Non-Primitive Data Type: Object

Objects store collections of properties.

Examples:

```javascript
const user = {
    name: "Anshi",
    age: 22
};

const numbers = [10, 20, 30];

function greet() {
    console.log("Hello");
}
```

Arrays and functions are also objects in JavaScript's type system.

## 9. Primitive vs Reference Values

### Primitive values

Primitive values are immutable values.

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

### Object reference behavior

```javascript
const obj1 = { value: 10 };
const obj2 = obj1;

obj2.value = 50;

console.log(obj1.value); // 50
```

Both variables refer to the same object.

**Important:** JavaScript passes arguments by value. When an object is passed, the copied value is its reference.

## 10. typeof Operator

The `typeof` operator returns a string describing the type of a value.

```javascript
typeof "Hello";      // "string"
typeof 10;           // "number"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof 10n;          // "bigint"
typeof Symbol();     // "symbol"
typeof {};           // "object"
typeof function(){}; // "function"
```

### Famous JavaScript Interview Traps

```javascript
typeof null; // "object"
```

This is a historical behavior in JavaScript.

```javascript
typeof NaN; // "number"
```

`NaN` is a special numeric value.

## 11. Dynamic Typing

JavaScript is dynamically typed. A variable can hold values of different types at different points in execution.

```javascript
let value = 10;

value = "JavaScript";

value = true;
```

The variable itself does not have a fixed declared type.

## 12. const with Objects and Arrays

```javascript
const user = {
    name: "Anshi"
};

user.name = "Riya"; // Allowed
```

But:

```javascript
// user = {}; // TypeError
```

The binding cannot be reassigned, but the referenced object can be modified.

To prevent certain modifications to an object, use:

```javascript
Object.freeze(user);
```

`Object.freeze()` is shallow, not deep.

## 13. Interview Questions

1. Difference between var, let and const?
2. What is hoisting?
3. What is the Temporal Dead Zone?
4. How many primitive data types exist in JavaScript?
5. Why does `typeof null` return object?
6. Why is `typeof NaN` equal to number?
7. Is JavaScript statically or dynamically typed?
8. What happens when an object is assigned to another variable?
9. Can a const object be modified?
10. What is the difference between undefined and null?

## 14. One-Minute Revision

- `var` is function-scoped.
- `let` and `const` are block-scoped.
- `const` prevents reassignment.
- Hoisting processes declarations before execution.
- TDZ prevents early access to let and const bindings.
- JavaScript has seven primitive types.
- Objects are non-primitive values.
- JavaScript is dynamically typed.
- `typeof null` returns `"object"`.
- Object references can be shared between variables.

## 15. Documentation

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var