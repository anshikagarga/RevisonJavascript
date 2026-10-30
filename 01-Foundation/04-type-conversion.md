# Chapter 4: Type Conversion and Type Coercion

## 1. What is Type Conversion?

Type conversion means changing a value from one data type to another.

JavaScript supports two forms:

1. Explicit Type Conversion
2. Implicit Type Conversion (Type Coercion)

## 2. Explicit Type Conversion

Explicit conversion happens when the programmer intentionally converts a value using built-in functions or constructors.

### A. Number()

Converts a value into a Number.

```javascript
Number("100");     // 100
Number("10.5");    // 10.5
Number("Hello");   // NaN
Number(true);      // 1
Number(false);     // 0
Number(null);      // 0
Number(undefined); // NaN
```

### B. String()

Converts a value into a string.

```javascript
String(100);       // "100"
String(true);      // "true"
String(null);      // "null"
String(undefined); // "undefined"
```

### C. Boolean()

Converts a value into a Boolean.

```javascript
Boolean(1);        // true
Boolean(0);        // false
Boolean("Hello");  // true
Boolean("");       // false
Boolean(null);     // false
Boolean(undefined);// false
```

## 3. Truthy and Falsy Values

A truthy value becomes true when converted to Boolean.

A falsy value becomes false.

### Falsy values

There are exactly eight falsy values in JavaScript:

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

Everything else is truthy, including:

```javascript
Boolean("0");    // true
Boolean("false");// true
Boolean([]);     // true
Boolean({});     // true
Boolean(" ");    // true
```

**Interview trap:** Empty arrays and empty objects are truthy.

## 4. Implicit Type Conversion (Coercion)

JavaScript automatically converts values during certain operations.

### A. String coercion

When one operand is a string, the `+` operator may perform string concatenation.

```javascript
console.log("5" + 2); // "52"
console.log(5 + "2"); // "52"
console.log("Hello" + 10); // "Hello10"
```

### B. Numeric coercion

Other arithmetic operators generally convert operands to numbers.

```javascript
console.log("5" - 2);  // 3
console.log("5" * 2);  // 10
console.log("10" / 2); // 5
```

### C. Boolean coercion

Conditions automatically convert values to Boolean.

```javascript
if ("Hello") {
    console.log("Executed");
}
```

Output:

```text
Executed
```

## 5. Difference Between == and ===

### Loose equality (==)

Allows type conversion when comparing different types.

```javascript
console.log(5 == "5"); // true
```

### Strict equality (===)

Compares values without performing type coercion between different types.

```javascript
console.log(5 === "5"); // false
```

**Recommendation:** Prefer `===` unless loose equality is specifically intended and understood.

## 6. Comparison Coercion

When comparing values, JavaScript follows different rules depending on the operand types.

```javascript
console.log(10 > 5);    // true
console.log("10" > 5);  // true
console.log("2" > "10");// true
```

The last comparison is lexicographical because both operands are strings.

## 7. Special Conversion Cases

```javascript
console.log(Number(""));       // 0
console.log(Number(" "));      // 0
console.log(Number("123abc")); // NaN

console.log(parseInt("123px"));   // 123
console.log(parseFloat("12.5px"));// 12.5
```

### Number() vs parseInt() vs parseFloat()

| Method | Behavior |
|---|---|
| Number() | Converts the entire input |
| parseInt() | Parses an integer from the beginning |
| parseFloat() | Parses a floating-point number from the beginning |

```javascript
Number("10px");     // NaN
parseInt("10px");   // 10
parseFloat("10.5px");// 10.5
```

## 8. Object to Primitive Conversion

Objects can be converted to primitive values during operations.

JavaScript uses mechanisms involving:

- `Symbol.toPrimitive`
- `valueOf()`
- `toString()`

Example:

```javascript
const obj = {
    valueOf() {
        return 10;
    }
};

console.log(obj + 5); // 15
```

The exact conversion algorithm depends on the operation and conversion hint.

## 9. Common Interview Traps

```javascript
console.log([] + []);       // ""
console.log([] + {});       // "[object Object]"
console.log(true + true);   // 2
console.log("5" - "2");     // 3
console.log("5" + 2);       // "52"
console.log(null == undefined); // true
console.log(null === undefined);// false
```

These results follow JavaScript's operator and coercion rules.

## 10. Interview Questions

1. What is the difference between type conversion and type coercion?
2. What are truthy and falsy values?
3. Why is an empty array truthy?
4. What is the difference between == and ===?
5. What is the difference between Number() and parseInt()?
6. Why does `"5" + 2` produce `"52"`?
7. Why does `"5" - 2` produce 3?
8. What is the result of Boolean("false")?
9. What is the difference between null and undefined during loose equality?
10. How are objects converted into primitive values?

## 11. One-Minute Revision

- Explicit conversion is performed intentionally.
- Implicit conversion is performed automatically.
- `Number()`, `String()` and `Boolean()` perform explicit conversions.
- There are eight falsy values.
- Empty arrays and objects are truthy.
- `+` can concatenate strings.
- Other arithmetic operators generally perform numeric conversion.
- `==` permits coercion; `===` does not.
- `parseInt()` and `parseFloat()` parse from the beginning of a string.

## 12. Documentation

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality