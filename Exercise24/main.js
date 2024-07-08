"use strict";
//Question24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let language = 'JavaScript';
console.log("Is language == 'JavaScript'? I predict True.");
console.log(language == 'JavaScript'); // True
console.log("Is language == 'Python'? I predict False.");
console.log(language == 'Python'); // False
console.log("Is language != 'Python'? I predict True.");
console.log(language != 'Python'); // True
console.log("Is language != 'JavaScript'? I predict False.");
console.log(language != 'JavaScript'); // False
let framework = 'React';
console.log("Is framework.toLowerCase() == 'react'? I predict True.");
console.log(framework.toLowerCase() == 'react'); // True
console.log("Is framework.toLowerCase() == 'angular'? I predict False.");
console.log(framework.toLowerCase() == 'angular'); // False
let age = 25;
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True
console.log("Is age < 30? I predict True.");
console.log(age < 30); // True
console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
console.log("Is age == 30? I predict False.");
console.log(age == 30); // False
console.log("Is age != 25? I predict False.");
console.log(age != 25); // False
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
console.log("Is age < 20? I predict False.");
console.log(age < 20); // False
console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False
console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False
let score = 85;
let pass = true;
console.log("Is score > 80 and pass == true? I predict True.");
console.log(score > 80 && pass == true); // True
console.log("Is score > 90 and pass == true? I predict False.");
console.log(score > 90 && pass == true); // False
console.log("Is score > 80 or pass is false? I predict True.");
console.log(score > 80 || !pass); // True
console.log("Is score < 80 or pass is false? I predict False.");
console.log(score < 80 || !pass); // False
let fruits = ['apple', 'banana', 'mango'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape')); // False
let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log("Is 'potato' not in vegetables? I predict True.");
console.log(!vegetables.includes('potato')); // True
console.log("Is 'carrot' not in vegetables? I predict False.");
console.log(!vegetables.includes('carrot')); // False
