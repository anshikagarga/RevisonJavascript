# Chapter 5: Operators and Expressions in JavaScript

## 1. What Are Operators?

An **operator** is a special symbol or keyword that performs an operation on one or more values (operands).

An **operand** is the value on which an operator performs an operation.

### Example

```javascript
let a = 10;
let b = 5;

let sum = a + b;

console.log(sum); // 15
```

Here:
- `+` is the operator.
- `a` and `b` are operands.
- `a + b` is an expression.
- `15` is the evaluated result.

## 2. Types of Operators in JavaScript

JavaScript provides several categories of operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators
6. Increment and Decrement Operators
7. Ternary Operator
8. Bitwise Operators
9. Relational Operators
10. Nullish Coalescing Operator
11. Optional Chaining Operator
12. String Operators
13. Comma Operator

---

## 3. Arithmetic Operators

Arithmetic operators perform mathematical operations.

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### 3.1 Addition (+)

Adds two numbers or concatenates strings.

```javascript
console.log(10 + 20);       // 30
console.log("Hello " + "JS"); // Hello JS
console.log("10" + 5);      // 105
console.log(10 + "5");      // 105
```

### 3.2 Subtraction (-)

```javascript
console.log(20 - 10);  // 10
console.log("20" - 5); // 15
```

The subtraction operator converts numeric strings into numbers when possible.

### 3.3 Multiplication (*)

```javascript
console.log(5 * 4);   // 20
console.log("5" * 2); // 10
```

### 3.4 Division (/)

```javascript
console.log(10 / 2); // 5
console.log(10 / 0); // Infinity
console.log(0 / 0);  // NaN
```

### 3.5 Modulus (%)

Returns the remainder after division.

```javascript
console.log(10 % 3); // 1
console.log(15 % 5); // 0
```

**Practical use: Check whether a number is even or odd.**

```javascript
let number = 12;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

### 3.6 Exponentiation (**)

Raises a number to the power of another number.

```javascript
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25
```

---

## 4. Assignment Operators

Assignment operators assign values to variables.

| Operator | Example | Equivalent |
|---|---|---|
| `=` | `a = 10` | Assign 10 |
| `+=` | `a += 5` | `a = a + 5` |
| `-=` | `a -= 5` | `a = a - 5` |
| `*=` | `a *= 5` | `a = a * 5` |
| `/=` | `a /= 5` | `a = a / 5` |
| `%=` | `a %= 5` | `a = a % 5` |
| `**=` | `a **= 2` | `a = a ** 2` |

### Example

```javascript
let marks = 80;

marks += 10;
console.log(marks); // 90

marks -= 5;
console.log(marks); // 85

marks *= 2;
console.log(marks); // 170
```

### Important

The assignment operator `=` assigns a value. It does not compare two values.

```javascript
let a = 10; // Assignment

console.log(a === 10); // Comparison
```

---

## 5. Comparison Operators

Comparison operators compare two values and return a Boolean value (`true` or `false`).

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal value (with coercion) | `5 == "5"` |
| `===` | Strict equality | `5 === "5"` |
| `!=` | Not equal (with coercion) | `5 != "6"` |
| `!==` | Strict not equal | `5 !== "5"` |
| `>` | Greater than | `10 > 5` |
| `<` | Less than | `5 < 10` |
| `>=` | Greater than or equal | `10 >= 10` |
| `<=` | Less than or equal | `5 <= 10` |

### 5.1 Loose Equality (==)

Checks equality after applying JavaScript's equality conversion rules where applicable.

```javascript
console.log(5 == "5");       // true
console.log(0 == false);     // true
console.log(null == undefined); // true
```

### 5.2 Strict Equality (===)

Checks equality without converting operands to the same type.

```javascript
console.log(5 === "5");   // false
console.log(10 === 10);   // true
console.log(true === 1);  // false
```

**Best Practice:** Prefer `===` and `!==` unless you intentionally need loose equality.

### 5.3 Greater Than and Less Than

```javascript
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 10);  // true
```

### Important: String Comparison

Strings are compared lexicographically using their UTF-16 code units.

```javascript
console.log("apple" < "banana"); // true
console.log("20" < "3");         // true
```

The second result is `true` because both operands are strings, so their characters are compared rather than their numeric values.

---

## 6. Logical Operators

Logical operators combine conditions or work with truthy and falsy values.

| Operator | Name | Meaning |
|---|---|---|
| `&&` | AND | Returns the first falsy operand, otherwise the last operand |
| `||` | OR | Returns the first truthy operand, otherwise the last operand |
| `!` | NOT | Converts to Boolean and reverses the result |

### 6.1 Logical AND (&&)

Returns the first falsy operand. If all operands are truthy, it returns the last operand.

```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(10 && 20);       // 20
console.log(0 && 20);        // 0
```

**Practical Example**

```javascript
let age = 22;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}
```

Both conditions must be truthy.

### 6.2 Logical OR (||)

Returns the first truthy operand. If all operands are falsy, it returns the last operand.

```javascript
console.log(false || true); // true
console.log(0 || 10);       // 10
console.log("" || "Hello"); // Hello
console.log(0 || false);    // false
```

**Practical Example**

```javascript
let username = "";

let displayName = username || "Guest";

console.log(displayName); // Guest
```

### 6.3 Logical NOT (!)

Converts a value to Boolean and reverses it.

```javascript
console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true
console.log(!10);    // false
console.log(!"");    // true
```

### Double NOT (!!)

Converts a value into its Boolean equivalent.

```javascript
console.log(!!10);       // true
console.log(!!0);        // false
console.log(!!"Hello");  // true
console.log(!!"");       // false
```

### Short-Circuit Evaluation

JavaScript stops evaluating logical expressions as soon as the result is determined.

```javascript
console.log(false && console.log("Hello"));
// Hello is not printed

console.log(true || console.log("World"));
// World is not printed
```

This is useful for conditional execution.

---

## 7. Unary Operators

A unary operator works with one operand.

### 7.1 Unary Plus (+)

Converts a value into a number.

```javascript
console.log(+"10");  // 10
console.log(+"abc"); // NaN
console.log(+true);  // 1
console.log(+null);  // 0
```

### 7.2 Unary Negation (-)

Converts a value to a number and negates it.

```javascript
console.log(-10);    // -10
console.log(-"20");  // -20
console.log(-true);  // -1
```

### 7.3 typeof

Returns a string describing the type of a value.

```javascript
console.log(typeof 10);       // number
console.log(typeof "Hello"); // string
console.log(typeof true);    // boolean
console.log(typeof undefined); // undefined
console.log(typeof {});      // object
console.log(typeof function() {}); // function
```

Remember:

```javascript
console.log(typeof null); // object
```

This is a historical JavaScript behavior.

### 7.4 delete

Deletes an object's property.

```javascript
let student = {
    name: "Anu",
    age: 22
};

delete student.age;

console.log(student);
// { name: "Anu" }
```

Important:
- `delete` removes object properties.
- It does not directly delete a variable declared with `let`, `const`, or `var`.
- Deleting an array element leaves a hole; it does not reduce the array's length.

```javascript
let numbers = [10, 20, 30];

delete numbers[1];

console.log(numbers);        // [10, empty, 30]
console.log(numbers.length); // 3
```

### 7.5 void

Evaluates an expression and returns `undefined`.

```javascript
console.log(void 0); // undefined
console.log(void (10 + 20)); // undefined
```

---

## 8. Increment and Decrement Operators

These operators increase or decrease a numeric value by one.

| Operator | Meaning |
|---|---|
| `++` | Increment by 1 |
| `--` | Decrement by 1 |

### 8.1 Pre-Increment (++a)

Increments first, then returns the updated value.

```javascript
let a = 5;

console.log(++a); // 6
console.log(a);   // 6
```

### 8.2 Post-Increment (a++)

Returns the old value first, then increments the variable.

```javascript
let a = 5;

console.log(a++); // 5
console.log(a);   // 6
```

### 8.3 Pre-Decrement (--a)

```javascript
let a = 5;

console.log(--a); // 4
console.log(a);   // 4
```

### 8.4 Post-Decrement (a--)

```javascript
let a = 5;

console.log(a--); // 5
console.log(a);   // 4
```

**Interview Difference**

| Pre-Increment | Post-Increment |
|---|---|
| `++a` | `a++` |
| Updates first | Returns old value first |
| Returns updated value | Returns previous value |

---

## 9. Ternary Operator

The ternary operator is a shorter alternative to a simple `if...else` expression.

### Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult
```

### Nested Ternary

```javascript
let marks = 85;

let grade = marks >= 90
    ? "A"
    : marks >= 75
        ? "B"
        : marks >= 50
            ? "C"
            : "Fail";

console.log(grade); // B
```

**Best Practice:** Avoid deeply nested ternary expressions because they reduce readability.

---

## 10. Bitwise Operators

Bitwise operators perform operations on the binary representation of numbers.

JavaScript converts operands to 32-bit integers for most bitwise operations. BigInt also supports bitwise operations, but cannot be mixed with Number operands.

| Operator | Name |
|---|---|
| `&` | Bitwise AND |
| `\|` | Bitwise OR |
| `^` | Bitwise XOR |
| `~` | Bitwise NOT |
| `<<` | Left Shift |
| `>>` | Sign-propagating Right Shift |
| `>>>` | Zero-fill Right Shift |

### 10.1 Bitwise AND (&)

Returns 1 when both corresponding bits are 1.

```javascript
console.log(5 & 3); // 1
```

Binary:

```text
5 = 0101
3 = 0011
    ----
    0001 = 1
```

### 10.2 Bitwise OR (|)

Returns 1 when at least one corresponding bit is 1.

```javascript
console.log(5 | 3); // 7
```

### 10.3 Bitwise XOR (^)

Returns 1 when corresponding bits are different.

```javascript
console.log(5 ^ 3); // 6
```

### 10.4 Bitwise NOT (~)

Inverts the bits of a 32-bit integer.

```javascript
console.log(~5); // -6
```

For Number operands, `~x` is equivalent to `-(x + 1)` after 32-bit conversion.

### 10.5 Left Shift (<<)

Shifts bits to the left.

```javascript
console.log(5 << 1); // 10
```

### 10.6 Right Shift (>>)

Shifts bits to the right while preserving the sign bit.

```javascript
console.log(8 >> 1); // 4
```

### 10.7 Zero-Fill Right Shift (>>>)

Shifts bits to the right and fills the leftmost positions with zeros.

```javascript
console.log(8 >>> 1); // 4
```

**Note:** Bitwise operators are useful in low-level operations, masks, flags and certain algorithmic problems. Most everyday application code does not need them.

---

## 11. Relational Operators: in and instanceof

### 11.1 in Operator

Checks whether a property exists in an object or its prototype chain.

```javascript
let student = {
    name: "Anu",
    age: 22
};

console.log("name" in student); // true
console.log("marks" in student); // false
```

Important: `in` checks property existence, not whether the property's value is truthy.

```javascript
let data = {
    score: 0
};

console.log("score" in data); // true
```

### 11.2 instanceof Operator

Checks whether an object's prototype chain contains the prototype of a constructor's `.prototype` property.

```javascript
let numbers = [];

console.log(numbers instanceof Array);  // true
console.log(numbers instanceof Object); // true
```

Another example:

```javascript
let date = new Date();

console.log(date instanceof Date); // true
```

**Difference between typeof and instanceof**

| typeof | instanceof |
|---|---|
| Returns a type string | Returns a Boolean |
| Useful for primitive type checks | Useful for checking object relationships |
| `typeof 10` gives `"number"` | `[] instanceof Array` gives `true` |

---

## 12. Nullish Coalescing Operator (??)

The nullish coalescing operator returns the right-hand operand only when the left-hand operand is `null` or `undefined`.

### Syntax

```javascript
value ?? defaultValue;
```

### Example

```javascript
let username = null;

let result = username ?? "Guest";

console.log(result); // Guest
```

### Difference Between || and ??

```javascript
let count = 0;

console.log(count || 10); // 10
console.log(count ?? 10); // 0
```

| `||` | `??` |
|---|---|
| Checks truthiness | Checks only nullish values |
| Uses fallback for `0`, `false`, `""`, `null`, `undefined`, `NaN` | Uses fallback only for `null` and `undefined` |

**Practical Example**

```javascript
let userAge = 0;

let age = userAge ?? 18;

console.log(age); // 0
```

This is useful when zero, false, or an empty string is a valid value.

---

## 13. Optional Chaining Operator (?.)

Optional chaining safely accesses properties, methods, or array elements when a value might be `null` or `undefined`.

### Without Optional Chaining

```javascript
let user = {};

console.log(user.address.city);
// TypeError: Cannot read properties of undefined
```

### With Optional Chaining

```javascript
let user = {};

console.log(user.address?.city); // undefined
```

### Nested Properties

```javascript
let user = {
    address: {
        city: "Noida"
    }
};

console.log(user.address?.city); // Noida
```

### Optional Method Calls

```javascript
let user = {};

console.log(user.getName?.()); // undefined
```

### Optional Array Access

```javascript
let users = null;

console.log(users?.[0]); // undefined
```

**Important:** Optional chaining prevents an error when the value immediately before `?.` is `null` or `undefined`. It does not make every possible access safe.

Optional chaining cannot be used as an assignment target:

```javascript
// user?.name = "Anu"; // SyntaxError
```

---

## 14. String Operators

The `+` operator can concatenate strings.

```javascript
let firstName = "Anu";
let lastName = "Sharma";

console.log(firstName + " " + lastName);
// Anu Sharma
```

The `+=` operator can append to a string.

```javascript
let message = "Hello";

message += " JavaScript";

console.log(message); // Hello JavaScript
```

### Template Literals

Template literals use backticks and support interpolation.

```javascript
let name = "Anu";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## 15. Comma Operator (,)

The comma operator evaluates multiple expressions from left to right and returns the value of the last expression.

```javascript
let result = (10, 20, 30);

console.log(result); // 30
```

Another example:

```javascript
let a = 1;
let b = (a++, a + 5);

console.log(a); // 2
console.log(b); // 7
```

**Important:** A comma used to separate function arguments or variable declarations is not necessarily the comma operator. Parentheses make the comma operator explicit in the examples above.

---

## 16. Operator Precedence and Associativity

When an expression contains multiple operators, JavaScript follows operator precedence to determine which operation is grouped first.

### Example

```javascript
let result = 10 + 5 * 2;

console.log(result); // 20
```

Multiplication has higher precedence than addition.

### Common Operator Precedence (High to Low)

| Operators | Description |
|---|---|
| `()` | Grouping |
| `x++`, `x--` | Postfix increment/decrement |
| `!`, `~`, `typeof`, `void`, `delete`, unary `+`, unary `-`, `++x`, `--x` | Unary |
| `**` | Exponentiation |
| `*`, `/`, `%` | Multiplication, division, remainder |
| `+`, `-` | Addition, subtraction |
| `<<`, `>>`, `>>>` | Shift |
| `<`, `>`, `<=`, `>=`, `in`, `instanceof` | Relational |
| `==`, `!=`, `===`, `!==` | Equality |
| `&` | Bitwise AND |
| `^` | Bitwise XOR |
| `\|` | Bitwise OR |
| `&&` | Logical AND |
| `\|\|` | Logical OR |
| `??` | Nullish coalescing |
| `?:` | Conditional |
| `=`, `+=`, `-=`, etc. | Assignment |
| `,` | Comma |

This is a simplified reference table, not a complete specification. Parentheses should be used when an expression might be confusing.

### Associativity

Associativity determines how operators of the same precedence are grouped.

**Left-to-right example**

```javascript
console.log(20 - 5 - 3);
// (20 - 5) - 3
// 12
```

**Right-to-left example**

```javascript
console.log(2 ** 3 ** 2);
// 2 ** (3 ** 2)
// 512
```

### Important Tricky Example

```javascript
let result = 10 + 2 * 3 ** 2;

console.log(result); // 28
```

Evaluation:
1. `3 ** 2` = 9
2. `2 * 9` = 18
3. `10 + 18` = 28

---

## 17. Important Interview Concepts

### 17.1 Difference Between == and ===

- `==` performs equality comparison with type conversion rules where applicable.
- `===` compares without converting operands to a common type.
- Prefer strict equality in normal application code.

### 17.2 Difference Between && and &

| `&&` | `&` |
|---|---|
| Logical AND | Bitwise AND |
| Works with truthy/falsy values | Works on binary integer representations |
| Short-circuits | Evaluates both operands |
| Can return an operand | Returns a numeric result for Number operands |

### 17.3 Difference Between || and ??

- `||` uses the right-hand value when the left-hand value is falsy.
- `??` uses the right-hand value only when the left-hand value is nullish.

### 17.4 Difference Between Pre and Post Increment

- `++a`: increments first and returns the updated value.
- `a++`: returns the old value and then increments.

### 17.5 Why Does typeof null Return object?

This is a historical JavaScript behavior retained for compatibility. `null` is a primitive value, not an object.

### 17.6 Why Is 0.1 + 0.2 Not Exactly 0.3?

JavaScript uses IEEE 754 double-precision floating-point numbers for ordinary Number values. Many decimal fractions cannot be represented exactly in binary.

```javascript
console.log(0.1 + 0.2);
// 0.30000000000000004
```

For approximate comparisons:

```javascript
let result = 0.1 + 0.2;

console.log(Math.abs(result - 0.3) < Number.EPSILON);
```

For financial calculations, use an appropriate decimal or integer-minor-unit strategy rather than relying on floating-point equality.

---

## 18. Common Mistakes

1. Using `=` instead of `===` for comparison.
2. Assuming `&&` and `||` always return Boolean values.
3. Confusing `++a` with `a++`.
4. Assuming `||` and `??` behave identically.
5. Forgetting that `+` can concatenate strings.
6. Assuming `typeof null` is `"null"`.
7. Confusing bitwise `&` with logical `&&`.
8. Forgetting operator precedence.
9. Using deeply nested ternary operators.
10. Assuming `delete array[index]` reduces array length.
11. Assuming `in` checks whether a value is truthy.
12. Using optional chaining without understanding which access is being protected.

---

## 19. Output-Based Practice Questions

**Try these without running the code first.**

### Easy

**Q1.**
```javascript
console.log(10 + 5 * 2);
```

**Q2.**
```javascript
console.log(10 % 3);
console.log(2 ** 4);
```

**Q3.**
```javascript
let a = 10;
a += 5;
console.log(a);
```

**Q4.**
```javascript
console.log(5 == "5");
console.log(5 === "5");
```

**Q5.**
```javascript
console.log(true && false);
console.log(true || false);
console.log(!true);
```

### Medium

**Q6.**
```javascript
let a = 5;

console.log(a++);
console.log(++a);
console.log(a);
```

**Q7.**
```javascript
console.log(0 || 100);
console.log(0 ?? 100);
```

**Q8.**
```javascript
console.log("10" + 5 - 2);
```

**Q9.**
```javascript
console.log(10 > 5 && 5 < 2 || true);
```

**Q10.**
```javascript
console.log(2 ** 3 ** 2);
```

### Advanced

**Q11.**
```javascript
let a = 10;

let result = a++ + ++a;

console.log(result);
console.log(a);
```

**Q12.**
```javascript
console.log([] == false);
console.log([] === false);
```

**Q13.**
```javascript
console.log(null || "JavaScript");
console.log(null ?? "JavaScript");
```

**Q14.**
```javascript
let user = {
    profile: {
        name: "Anu"
    }
};

console.log(user.profile?.name);
console.log(user.address?.city);
```

**Q15.**
```javascript
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
```

---

## 20. Coding Practice

Write the code yourself. Focus on understanding the logic before implementation.

### Level 1: Beginner

1. Write a program to perform addition, subtraction, multiplication and division on two numbers.
2. Check whether a number is even or odd using the modulus operator.
3. Find the square and cube of a number using the exponentiation operator.
4. Compare two numbers and print the greater number.
5. Check whether a person is eligible to vote using comparison and logical operators.

### Level 2: Intermediate

6. Find the largest of three numbers using the ternary operator.
7. Check whether a number is divisible by both 3 and 5.
8. Use `??` to provide a default username when the value is `null` or `undefined`.
9. Use `||` and `??` with `0`, `false`, and `""`. Observe the differences.
10. Create an object and check whether a given property exists using `in`.
11. Check whether an array is an instance of `Array`.
12. Use optional chaining to safely access nested user information.

### Level 3: Advanced

13. Swap two variables using destructuring assignment.
14. Check whether a number is a power of two using bitwise operators.
15. Find whether two integers have different signs using bitwise XOR.
16. Predict the output of expressions involving multiple increment and decrement operators.
17. Evaluate complex expressions by applying precedence and associativity rules.

### Level 4: Real-World Practice

18. Create a shopping cart total using arithmetic and assignment operators.
19. Calculate a discount based on the purchase amount using the ternary operator.
20. Set a default profile name using nullish coalescing.
21. Safely display a user's nested address using optional chaining.
22. Determine whether a user can access a feature using logical operators.

---

## 21. One-Minute Revision

| Concept | Remember |
|---|---|
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=` |
| Comparison | `==`, `===`, `!=`, `!==`, `>`, `<` |
| Logical | `&&`, `||`, `!` |
| Pre-increment | `++a` |
| Post-increment | `a++` |
| Ternary | `condition ? a : b` |
| Bitwise | `&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>` |
| Property existence | `in` |
| Instance checking | `instanceof` |
| Nullish fallback | `??` |
| Safe access | `?.` |
| Type checking | `typeof` |
| Operator grouping | Precedence and associativity |

---

## 22. Official Documentation

- [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN: Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- [MDN: Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [ECMAScript Specification](https://tc39.es/ecma262/)

---

**Chapter 5 Complete: Operators and Expressions**

Before moving to the next chapter, solve the output-based questions and coding exercises. Understanding operators is essential for writing conditions, loops, functions, and complex expressions.