const score = 400;
const balance = new Number(1000);

console.log(typeof score);  // "number"
console.log(typeof balance); // "object"

console.log(balance.toString().length); // 4
console.log(balance.toFixed(2)); // "1000.00"

const otherNumber = 123.123456789;  
console.log(otherNumber.toPrecision(5)); // "123.12"

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // "10,00,000"   

// *****************************Maths******************************
console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E);  // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.abs(-100)); // 100
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.trunc(4.6)); // 4
console.log(Math.sign(-0)); // -0
console.log(Math.pow(2, 4)); // 16
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3
console.log(Math.min(2, 33, 4, 1, 55, -3, 0)); // -3
console.log(Math.max(2, 33, 4, 1, 55, -3, 0));  // 55
console.log(Math.random()); // random number between 0 and 1    



// Generate random number between a range
const min = 10;
const max = 20; 
const random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random); // random number between 10 and 20 (inclusive)