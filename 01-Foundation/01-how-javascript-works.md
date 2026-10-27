# 01. How JavaScript Works

## 1. What is JavaScript?

JavaScript is a high-level, dynamically typed, multi-paradigm programming language that supports event-driven, functional, and object-oriented programming.

It is commonly used to create interactive web pages, build server-side applications with environments such as Node.js, and develop full-stack applications.

### Interview answer

JavaScript is a programming language that can run in browsers and other JavaScript runtimes. It supports synchronous and asynchronous programming and is widely used for both frontend and backend development.

## 2. Where does JavaScript run?

JavaScript needs a runtime environment to execute.

Examples:

- **Browser:** Chrome, Firefox, Edge.
- **Server:** Node.js.
- **Other runtimes:** Deno and Bun.

A runtime provides the JavaScript engine and additional APIs.

For example, a browser provides APIs such as the DOM and timers. Node.js provides APIs for filesystem access and server development.

**Important:** The DOM is a browser API, not part of the JavaScript language itself.

## 3. What is a JavaScript engine?

A JavaScript engine parses and executes JavaScript code.

Examples include:

- V8 — used by Chrome and Node.js.
- SpiderMonkey — used by Firefox.
- JavaScriptCore — used by Safari.

Modern engines typically use a combination of interpretation and just-in-time (JIT) compilation techniques to execute code efficiently.

## 4. How does JavaScript execute code?

A simplified model:

1. The engine parses source code and checks its syntax.
2. It prepares the program for execution.
3. Execution contexts are created as needed.
4. The call stack tracks active function calls.
5. The engine executes code and handles function calls.
6. Asynchronous operations interact with runtime APIs and scheduling mechanisms.

This is a conceptual overview; the precise internal implementation varies between engines.

## 5. Is JavaScript single-threaded?

JavaScript execution in a typical browser page or Node.js isolate normally runs on one main JavaScript thread.

However, the surrounding runtime can perform other work concurrently, such as network operations, timers, or worker tasks.

The event loop coordinates when queued callbacks can run. JavaScript also supports workers for certain kinds of parallel execution.

**Interview takeaway:** Single-threaded JavaScript execution does not mean the entire runtime can only perform one operation at a time.

## 6. Is JavaScript interpreted or compiled?

JavaScript is often described as an interpreted language, but modern engines may compile code into machine code using JIT techniques.

A more accurate interview answer is:

Modern JavaScript engines use a combination of parsing, interpretation and compilation techniques to execute code efficiently.

## 7. JavaScript vs ECMAScript

- **ECMAScript:** The language specification that defines core JavaScript language behavior.
- **JavaScript:** The language implementation commonly used in browsers and other runtimes.
- **Runtime APIs:** Additional capabilities supplied by the host environment.

For example, `Promise` is part of the ECMAScript language specification, whereas `document.querySelector()` is a browser DOM API.

## 8. Interview questions

### Q1. What is a JavaScript engine?
A program that parses and executes JavaScript code.

### Q2. What is a JavaScript runtime?
An execution environment consisting of an engine and supporting APIs and services.

### Q3. Is JavaScript single-threaded?
Its ordinary execution in a given isolate is typically single-threaded, while the runtime may handle other work concurrently.

### Q4. What is the difference between ECMAScript and JavaScript?
ECMAScript defines the core language specification; JavaScript is the language implemented according to that specification, with host-provided APIs available in its runtime.

### Q5. Is JavaScript interpreted or compiled?
Modern engines can use both interpretation and compilation techniques, including JIT compilation.

## 9. One-minute revision

- JavaScript runs in environments such as browsers and Node.js.
- A JavaScript engine executes JavaScript code.
- A runtime supplies the engine and additional APIs.
- The call stack tracks active function calls.
- The event loop coordinates queued asynchronous callbacks.
- ECMAScript specifies core language behavior.
- Modern engines use interpretation and compilation techniques.

## 10. Official documentation

- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- ECMAScript specification: https://tc39.es/ecma262/
- Node.js documentation: https://nodejs.org/docs/