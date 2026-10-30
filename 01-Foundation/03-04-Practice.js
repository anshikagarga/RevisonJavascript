// CHAPTER 3 — VARIABLES AND DATA TYPES

// Q1. Predict the output
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof function(){});

// Q2. Predict the output
var a = 10;

{
    let b = 20;
    var c = 30;
}

console.log(a);
console.log(c);
// console.log(b);

// Q3. Predict the output
console.log(x);
var x = 100;

// Q4. Predict the output
const user = { name: "Anshi" };
const another = user;

another.name = "Riya";

console.log(user.name);
console.log(user === another);

// Q5. Coding problem
// Create a student object with name, age, marks and
// isPassed properties. Print its data types.

// Q6. Coding problem
// Create a function that checks whether a value
// is a primitive or an object.

// CHAPTER 4 — TYPE CONVERSION AND COERCION

// Q1. Predict the output
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");
console.log("10" / "2");

// Q2. Predict the output
console.log(Boolean("false"));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));

// Q3. Predict the output
console.log(null == undefined);
console.log(null === undefined);
console.log(0 == false);
console.log(0 === false);

// Q4. Predict the output
console.log(Number(""));
console.log(Number(" "));
console.log(Number("Hello"));
console.log(parseInt("25px"));

// Q5. Coding problem
// Write a function that converts a string to a number.
// Return a meaningful result when conversion fails.

// Q6. Coding problem
// Write a function that returns whether a given value
// is truthy or falsy.

// Q7. Coding problem
// Write a function that safely compares two values
// using strict equality.

// Q8. Interview challenge
// Explain why [] + [] and [] + {} produce different results.
