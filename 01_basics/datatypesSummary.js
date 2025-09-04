// Dynamic Language

// Data Types in JavaScript
// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const str = "Hello"; // String
const num = 42; // Number
const bool = true;          
const n = null; // Null
const u = undefined; // Undefined
const sym = Symbol("id"); // Symbol
const bigInt = 9007199254740991n; // BigInt

// Reference/Non-Primitive
// 3 types : Object, Array, Function
const obj = { name: "Alice", age: 30 }; // Object
const arr = [1, 2, 3, 4, 5]; // Array
const func = function() { return "Hello World"; }; // Function

// typeof operator
console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bool); // "boolean"
console.log(typeof n); // "object" (this is a known quirk in JavaScript)
console.log(typeof u); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigInt); // "bigint"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof func); // "function"


// Memory Management
// Primitive types are stored directly in the stack memory.
// Reference/Non-Primitive types are stored in the heap memory, and the stack contains a reference to that memory location. Changes are done in original location only.