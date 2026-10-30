# Chapter 6: Conditional Statements in JavaScript

## 1. What Are Conditional Statements?

Conditional statements allow a program to make decisions based on whether a condition evaluates to `true` or `false`.

They control which block of code executes.

### Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

Output:

```text
You are eligible to vote.
```

Here:
- `age >= 18` is the condition.
- If the condition is `true`, the code inside the `if` block executes.
- If the condition is `false`, the block is skipped.

## 2. Types of Conditional Statements

JavaScript provides the following decision-making structures:

1. `if` statement
2. `if...else` statement
3. `if...else if...else` statement
4. Nested `if` statement
5. `switch` statement
6. Ternary operator (covered in Chapter 5)
7. Conditional logic using logical operators

---

## 3. if Statement

The `if` statement executes a block of code only when its condition is truthy.

### Syntax

```javascript
if (condition) {
    // Code executes when condition is truthy
}
```

### Example 1: Positive Number

```javascript
let number = 10;

if (number > 0) {
    console.log("Positive number");
}
```

Output:

```text
Positive number
```

### Example 2: Check Age

```javascript
let age = 22;

if (age >= 18) {
    console.log("Adult");
}
```

### Important Points

- The condition is evaluated before executing the block.
- If the condition is falsy, the block is skipped.
- Curly braces are recommended even for a single statement.
- JavaScript converts the condition to a Boolean using truthiness rules.

### Example: Truthy and Falsy Conditions

```javascript
if (10) {
    console.log("Executed");
}

if (0) {
    console.log("Not executed");
}

if ("Hello") {
    console.log("Hello");
}
```

Output:

```text
Executed
Hello
```

---

## 4. if...else Statement

The `if...else` statement provides two possible execution paths.

- `if`: Executes when the condition is truthy.
- `else`: Executes when the condition is falsy.

### Syntax

```javascript
if (condition) {
    // True block
} else {
    // False block
}
```

### Example 1: Even or Odd

```javascript
let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

Output:

```text
Odd
```

### Example 2: Voting Eligibility

```javascript
let age = 16;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
```

Output:

```text
Not eligible to vote
```

### Example 3: Login Validation

```javascript
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}
```

---

## 5. if...else if...else Statement

Use this structure when multiple conditions need to be checked.

JavaScript evaluates the conditions from top to bottom. The first truthy condition's block executes, and the remaining branches are skipped.

### Syntax

```javascript
if (condition1) {
    // First condition
} else if (condition2) {
    // Second condition
} else if (condition3) {
    // Third condition
} else {
    // Default block
}
```

### Example 1: Grade Calculator

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}
```

Output:

```text
Grade B
```

### Why Is the Order Important?

Consider:

```javascript
let marks = 95;

if (marks >= 40) {
    console.log("Pass");
} else if (marks >= 90) {
    console.log("Excellent");
}
```

Output:

```text
Pass
```

Why?

Because `marks >= 40` is already true. JavaScript does not check the remaining `else if` conditions.

Correct order:

```javascript
let marks = 95;

if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

Output:

```text
Excellent
```

**Interview Point:** In a sequence of `if...else if...else`, only the first matching branch executes.

---

## 6. Nested if Statements

A nested `if` means placing one `if` statement inside another `if` or `else` block.

Use nested conditions when one decision depends on another decision.

### Syntax

```javascript
if (condition1) {

    if (condition2) {
        // Inner condition is true
    } else {
        // Inner condition is false
    }

} else {
    // Outer condition is false
}
```

### Example 1: Login and Admin Access

```javascript
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Welcome Admin");
    } else {
        console.log("Welcome User");
    }

} else {
    console.log("Please log in first");
}
```

Output:

```text
Welcome Admin
```

### Example 2: Scholarship Eligibility

```javascript
let marks = 85;
let familyIncome = 200000;

if (marks >= 80) {

    if (familyIncome <= 250000) {
        console.log("Eligible for scholarship");
    } else {
        console.log("Income criteria not satisfied");
    }

} else {
    console.log("Marks criteria not satisfied");
}
```

### Important

Nested conditions can make code difficult to read when too many levels are used.

For simpler independent conditions, consider using logical operators or early returns inside functions.

---

## 7. switch Statement

The `switch` statement executes a matching case based on the value of an expression.

It is useful when one expression needs to be compared against several possible values.

### Syntax

```javascript
switch (expression) {
    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Default code
}
```

### Example 1: Day of the Week

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Wednesday
```

### How Does switch Work?

1. JavaScript evaluates the switch expression.
2. It compares the expression against each case using strict equality (`===`).
3. When a matching case is found, execution starts from that case.
4. `break` exits the switch statement.
5. If no case matches, the `default` block executes, if present.

### 7.1 Importance of break

Without `break`, execution continues into subsequent cases. This is called fall-through.

```javascript
let number = 1;

switch (number) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");
}
```

Output:

```text
One
Two
Three
```

Why?

Because there is no `break` after the first case.

### 7.2 default Case

The `default` case executes when no case matches.

```javascript
let day = 10;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Invalid day
```

### 7.3 Multiple Cases with the Same Result

You can group multiple cases together.

```javascript
let day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}
```

Output:

```text
Weekend
```

### 7.4 switch Uses Strict Equality

```javascript
let value = "10";

switch (value) {
    case 10:
        console.log("Number");
        break;

    case "10":
        console.log("String");
        break;

    default:
        console.log("No match");
}
```

Output:

```text
String
```

Because `"10"` and `10` have different types.

---

## 8. Difference Between if...else and switch

| if...else | switch |
|---|---|
| Supports complex conditions | Matches an expression against case values |
| Supports ranges and logical expressions | Best for discrete matching values |
| Uses conditions such as `>`, `<`, `&&` | Uses strict equality for case matching |
| Useful for flexible decision-making | Useful for menus, commands and fixed choices |

### When to Use if...else?

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C or below");
}
```

### When to Use switch?

```javascript
let role = "admin";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("Unknown role");
}
```

---

## 9. Conditional Statements with Logical Operators

Logical operators allow multiple conditions to be combined.

### 9.1 Using AND (&&)

All conditions must be truthy.

```javascript
let age = 22;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}
```

### 9.2 Using OR (||)

At least one condition must be truthy.

```javascript
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
```

### 9.3 Using NOT (!)

Reverses a Boolean condition.

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}
```

### 9.4 Combining Logical Operators

```javascript
let age = 25;
let hasLicense = true;
let hasVehicle = false;

if (age >= 18 && hasLicense && hasVehicle) {
    console.log("Can drive");
} else {
    console.log("Cannot drive");
}
```

Remember that `&&` and `||` can return operands rather than Boolean values. In an `if` condition, JavaScript checks the truthiness of the resulting value.

---

## 10. Truthy and Falsy Values in Conditions

JavaScript does not require every condition to be explicitly Boolean.

It converts the value into a Boolean context.

### Falsy Values

These eight values are falsy:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

All other values are truthy, including empty arrays and empty objects.

### Example

```javascript
if ([]) {
    console.log("Array is truthy");
}

if ({}) {
    console.log("Object is truthy");
}

if ("") {
    console.log("Empty string");
}
```

Output:

```text
Array is truthy
Object is truthy
```

### Practical Example: Check Username

```javascript
let username = "";

if (username) {
    console.log("Username available");
} else {
    console.log("Please enter username");
}
```

Output:

```text
Please enter username
```

**Important:** An empty array `[]` is truthy. Do not use `if (array)` to check whether an array contains elements. Use `array.length > 0`.

---

## 11. Early Return Pattern

Early return is a useful technique inside functions. It handles invalid or special conditions first and reduces unnecessary nesting.

### Without Early Return

```javascript
function checkAge(age) {
    if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not eligible");
    }
}

checkAge(20);
```

### With Early Return

```javascript
function checkAge(age) {
    if (age < 18) {
        return "Not eligible";
    }

    return "Eligible";
}

console.log(checkAge(20));
```

### Practical Example: Login Validation

```javascript
function login(username, password) {
    if (!username) {
        return "Username is required";
    }

    if (!password) {
        return "Password is required";
    }

    return "Login validation successful";
}

console.log(login("", "12345"));
```

Output:

```text
Username is required
```

**Important:** `return` exits the current function, not just the `if` block.

---

## 12. Conditional Operator vs Conditional Statement

The ternary operator is an expression, whereas `if...else` is a statement.

### Ternary

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

### if...else

```javascript
let age = 20;

let result;

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}
```

Use ternary for short expressions and `if...else` for more complex logic.

---

## 13. Common Mistakes

### Mistake 1: Using Assignment Instead of Comparison

```javascript
let age = 18;

if (age = 20) {
    console.log("Eligible");
}
```

This assigns `20` to age and then checks its truthiness.

Correct:

```javascript
if (age === 20) {
    console.log("Eligible");
}
```

### Mistake 2: Incorrect Condition Order

```javascript
let marks = 95;

if (marks >= 40) {
    console.log("Pass");
} else if (marks >= 90) {
    console.log("Excellent");
}
```

The first condition matches, so the second branch never executes.

### Mistake 3: Forgetting break in switch

Without `break`, execution may continue into later cases.

### Mistake 4: Confusing Empty Array with Falsy Value

```javascript
if ([]) {
    console.log("Executed");
}
```

This executes because an empty array is truthy.

### Mistake 5: Comparing Different Types in switch

```javascript
switch (10) {
    case "10":
        console.log("Matched");
        break;
}
```

This does not match because `switch` uses strict equality.

### Mistake 6: Too Many Nested Conditions

Use early returns or logical operators when they make the code easier to understand.

---

## 14. Output-Based Interview Questions

Try predicting the output before running each program.

### Level 1: Easy

**Q1.**

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

**Q2.**

```javascript
let number = 0;

if (number) {
    console.log("True");
} else {
    console.log("False");
}
```

**Q3.**

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}
```

**Q4.**

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}
```

### Level 2: Medium

**Q5.**

```javascript
let value = [];

if (value) {
    console.log("Hello");
} else {
    console.log("Bye");
}
```

**Q6.**

```javascript
let number = 10;

if (number > 5) {
    if (number < 15) {
        console.log("A");
    } else {
        console.log("B");
    }
} else {
    console.log("C");
}
```

**Q7.**

```javascript
let value = "10";

switch (value) {
    case 10:
        console.log("Number");
        break;

    case "10":
        console.log("String");
        break;

    default:
        console.log("Other");
}
```

**Q8.**

```javascript
let marks = 85;

if (marks >= 40)
    if (marks >= 90)
        console.log("Excellent");
    else
        console.log("Pass");
```

**Q9.**

```javascript
let a = 10;
let b = 20;

if (a > 5 && b < 15 || a === 10) {
    console.log("Yes");
} else {
    console.log("No");
}
```

### Level 3: Advanced

**Q10.**

```javascript
let x = 0;

if (x === 0) {
    console.log("Zero");
} else if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

**Q11.**

```javascript
let result = "";

switch (2) {
    case 1:
        result += "A";

    case 2:
        result += "B";

    case 3:
        result += "C";
        break;

    default:
        result += "D";
}

console.log(result);
```

**Q12.**

```javascript
let user = {
    name: "Anu",
    isAdmin: false
};

if (user && user.isAdmin) {
    console.log("Admin");
} else if (user?.name) {
    console.log("User");
} else {
    console.log("Guest");
}
```

**Q13.**

```javascript
let age = 20;
let hasID = false;
let specialPermission = true;

if (age >= 18 && hasID || specialPermission) {
    console.log("Allowed");
} else {
    console.log("Denied");
}
```

**Q14.**

```javascript
let score = 0;

if (score || score === 0) {
    console.log("Score exists");
} else {
    console.log("No score");
}
```

**Q15.**

```javascript
let temperature = 35;

let status = temperature > 40
    ? "Very Hot"
    : temperature > 30
        ? "Hot"
        : "Normal";

console.log(status);
```

---

## 15. Coding Practice Questions

Write the programs yourself. Do not jump directly to solutions.

### Level 1: Beginner

1. Check whether a number is positive, negative, or zero.
2. Check whether a number is even or odd.
3. Check whether a person is eligible to vote.
4. Find the greater of two numbers.
5. Find the greatest of three numbers.
6. Check whether a year is a leap year.
7. Check whether a character is a vowel or consonant.
8. Check whether a number is divisible by both 5 and 11.

### Level 2: Intermediate

9. Create a grade calculator using marks.
10. Create a simple calculator using `switch` for `+`, `-`, `*`, and `/`.
11. Check whether a triangle is valid using its three angles.
12. Check whether a triangle is equilateral, isosceles, or scalene using its side lengths.
13. Create an electricity bill calculator using different unit slabs.
14. Check whether a given character is uppercase, lowercase, a digit, or a special character.
15. Create a login validation program using username and password conditions.
16. Check eligibility for a scholarship using marks and family income.

### Level 3: Advanced

17. Find the middle value among three different numbers.
18. Create a date validation program for day, month, and year.
19. Create a discount calculator based on purchase amount and membership status.
20. Create a ticket pricing system based on age and category.
21. Create a role-based access system using `switch`.
22. Create a grading system with input validation (marks must be between 0 and 100).
23. Build a simple ATM withdrawal validation flow using balance, withdrawal amount, and transaction limits.

### Level 4: Real-World Scenarios

24. Build an e-commerce free-shipping eligibility checker.
25. Build a password strength category checker using multiple conditions.
26. Build a student admission eligibility checker.
27. Build a weather-based recommendation system.
28. Build a user access system with admin, manager, and normal-user roles.

---

## 16. Interview Questions

1. What are conditional statements in JavaScript?
2. What is the difference between `if`, `if...else`, and `if...else if`?
3. What is a nested if statement?
4. What is the difference between `switch` and `if...else`?
5. Why is `break` used in a switch statement?
6. What happens when `break` is omitted?
7. Does switch use loose or strict equality?
8. Can multiple cases execute in a switch statement?
9. What happens when no switch case matches?
10. Can we use logical operators inside an if condition?
11. What are truthy and falsy values?
12. Why is an empty array truthy?
13. What is the difference between a ternary operator and an if statement?
14. What is an early return pattern?
15. How can deeply nested conditions be simplified?

---

## 17. One-Minute Revision

| Concept | Purpose |
|---|---|
| `if` | Execute code when a condition is truthy |
| `if...else` | Choose between two paths |
| `else if` | Check multiple conditions |
| Nested `if` | Make dependent decisions |
| `switch` | Match one expression against multiple cases |
| `break` | Exit a switch block |
| `default` | Handle unmatched switch cases |
| `&&` | Require all conditions to be truthy |
| `||` | Require at least one condition to be truthy |
| `!` | Reverse truthiness |
| `?:` | Short conditional expression |
| Early return | Exit a function when a condition is met |

---

## 18. Official Documentation

- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [MDN: Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

---

## Chapter 6 Completion Checklist

- [ ] Understand if statement
- [ ] Understand if...else
- [ ] Understand if...else if...else
- [ ] Understand nested if
- [ ] Understand switch and fall-through
- [ ] Understand break and default
- [ ] Practice logical conditions
- [ ] Solve all 15 output questions
- [ ] Complete at least 10 coding problems
- [ ] Revise common mistakes

**Next Chapter: Chapter 7 — Loops in JavaScript**

Topics: for loop, while loop, do...while loop, for...of, for...in, break, continue, nested loops, and loop control.