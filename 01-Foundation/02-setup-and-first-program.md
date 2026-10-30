# Chapter 2: JavaScript Environment Setup, Execution & Syntax

## 1. JavaScript Development Environments

JavaScript can run in different environments.

### A. Browser Environment

Browsers provide a JavaScript engine and browser-specific APIs.

Examples:
- Chrome
- Firefox
- Edge
- Safari

We can execute JavaScript using the browser console.

**Steps:**
1. Open Chrome.
2. Press `F12` or `Ctrl + Shift + J`.
3. Open the Console tab.
4. Write JavaScript code and press Enter.

```javascript
console.log("Hello JavaScript!");
```

### B. Node.js Environment

Node.js allows JavaScript to run outside the browser.

It is commonly used for:
- Backend development
- REST APIs
- File handling
- Server-side applications
- Build tools

Official website: https://nodejs.org/

Check installation:

```bash
node -v
npm -v
```

Create a file named `app.js`:

```javascript
console.log("JavaScript running with Node.js");
```

Execute it:

```bash
node app.js
```

### C. Browser vs Node.js

| Browser | Node.js |
|---|---|
| Runs JavaScript in a browser | Runs JavaScript outside the browser |
| Provides DOM APIs | Provides filesystem APIs |
| Supports `window` | Provides `process` and other Node APIs |
| Used for frontend | Commonly used for backend |

Important: Both environments execute JavaScript, but their host APIs are different.

---

## 2. JavaScript in HTML

JavaScript can be included in HTML using the `<script>` element.

### A. Internal JavaScript

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>

    <script>
        console.log("Hello World");
    </script>

</body>
</html>
```

The JavaScript code is written directly inside the HTML file.

### B. External JavaScript

HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
    <script src="script.js" defer></script>
</head>
<body>

    <h1>Learning JavaScript</h1>

</body>
</html>
```

script.js:

```javascript
console.log("External JavaScript");
```

**Advantages:**
- Separates HTML and JavaScript.
- Improves maintainability.
- Allows code reuse.
- Makes larger projects easier to organize.

### C. The defer Attribute

```html
<script src="script.js" defer></script>
```

`defer` downloads the external script while HTML parsing continues and executes it after HTML parsing completes.

Deferred scripts execute in document order.

### D. The async Attribute

```html
<script src="script.js" async></script>
```

`async` downloads the script while HTML parsing continues and executes it as soon as it is ready.

Its execution order is not guaranteed.

### Defer vs Async

| defer | async |
|---|---|
| Executes after HTML parsing | Executes as soon as downloaded |
| Preserves document order | Does not guarantee order |
| Useful for dependent scripts | Useful for independent scripts |

---

## 3. JavaScript Syntax

Syntax refers to the rules that define how JavaScript code must be written.

### A. Statements

A statement represents an instruction executed by JavaScript.

```javascript
let age = 22;
console.log(age);
```

Here, variable declaration and function call are statements.

### B. Expressions

An expression is code that evaluates to a value.

```javascript
10 + 20
```

Result: `30`

Other examples:

```javascript
age
age > 18
"Hello" + " World"
```

**Interview question:** What is the difference between a statement and an expression?

An expression produces a value. A statement performs an instruction and may contain expressions.

### C. Semicolons

JavaScript allows semicolons to be omitted in many situations through Automatic Semicolon Insertion (ASI).

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

However, semicolons are useful for making statement boundaries explicit.

### D. Comments

Single-line comments:

```javascript
// This is a single-line comment
```

Multi-line comments:

```javascript
/*
This is a
multi-line comment
*/
```

Comments are ignored during normal code execution.

### E. Case Sensitivity

JavaScript is case-sensitive.

```javascript
let name = "Anshi";

console.log(name); // Valid
// console.log(Name); // ReferenceError
```

`name` and `Name` are different identifiers.

### F. Identifiers

Identifiers are names used for variables, functions, classes and other program elements.

Valid examples:

```javascript
let userName;
let _count;
let $price;
let age2;
```

Invalid examples:

```javascript
// let 2age = 22;
// let user-name = "Anshi";
// let let = 10;
```

Identifiers cannot start with a digit, contain a hyphen, or use reserved keywords as ordinary variable names.

---

## 4. Strict Mode

Strict mode enables stricter parsing and error handling for certain JavaScript behaviors.

Enable it using:

```javascript
"use strict";

x = 10; // ReferenceError
```

Without strict mode, assigning to an undeclared identifier in a classic non-module script may create a global property. Strict mode prevents this.

### Benefits

- Prevents accidental global variables.
- Makes certain silent failures throw errors.
- Disallows some problematic legacy syntax.
- Helps catch programming mistakes.

Strict mode is automatically enabled in JavaScript modules and class bodies.

---

## 5. JavaScript Execution Basics

Consider:

```javascript
console.log("First");

let number = 10;

console.log(number);

console.log("Last");
```

JavaScript executes synchronous statements in order within the current execution flow.

Output:

```text
First
10
Last
```

The deeper concepts of execution context, hoisting, scope and call stack will be covered in a later chapter.

---

## 6. Useful Console Methods

### console.log()

Displays information.

```javascript
console.log("Hello");
```

### console.error()

Displays an error message.

```javascript
console.error("Something went wrong");
```

### console.warn()

Displays a warning.

```javascript
console.warn("Check your input");
```

### console.table()

Displays tabular data.

```javascript
const students = [
    { name: "Anshi", score: 90 },
    { name: "Riya", score: 85 }
];

console.table(students);
```

### console.clear()

Clears the console.

```javascript
console.clear();
```

---

## 7. Interview Questions

### Q1. What is the difference between internal and external JavaScript?

Internal JavaScript is written inside an HTML script element. External JavaScript is stored in a separate `.js` file and included using the `src` attribute.

### Q2. What is the difference between async and defer?

Both allow script downloads without blocking HTML parsing. `defer` executes after parsing and preserves document order; `async` executes as soon as downloading finishes.

### Q3. What is Automatic Semicolon Insertion?

ASI is a JavaScript parsing mechanism that inserts semicolons in certain situations when they are omitted.

### Q4. Is JavaScript case-sensitive?

Yes. Identifiers such as `name` and `Name` are treated as different identifiers.

### Q5. What is strict mode?

Strict mode applies stricter language rules and helps catch certain programming mistakes.

### Q6. What is the difference between a statement and an expression?

An expression evaluates to a value, while a statement represents an instruction.

### Q7. Can JavaScript execute without a browser?

Yes. JavaScript runtimes such as Node.js allow JavaScript programs to execute outside browsers.

---

## 8. One-Minute Revision

- Browser and Node.js are different JavaScript runtime environments.
- `script.js` files can be included using the script element.
- `defer` executes after HTML parsing.
- `async` executes when the script is ready.
- JavaScript is case-sensitive.
- Expressions produce values.
- Statements represent instructions.
- Strict mode catches certain programming mistakes.
- Console methods help with debugging.

## 9. Official Documentation

1. MDN — JavaScript basics: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting
2. MDN — Script element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script
3. MDN — Strict mode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
4. MDN — Grammar and types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types