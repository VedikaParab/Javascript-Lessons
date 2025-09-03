let score = "41"
// console.log(typeof score); //string
// console.log(typeof (score)); //string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //41    

// to convert number to string
// "42abc" => NaN (Not a Number)
// "abc42" => NaN
// "abc" => NaN
// " " => 0
// "" => 0
// "42" => 42
// true => 1
// false => 0

let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn); //boolean
// console.log(booleanIsLoggedIn); //true

// to convert to Boolean
// 1 => true
// 0 => false
// "vedika" => true
// "" => false

let someNumber = 31
let stringNumber = String(someNumber)
// console.log(typeof stringNumber); //string
// console.log(stringNumber); //31


// ****************** Operations ******************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2 + 3); //5
// console.log(2-2);
// console.log(2*3);
// console.log(10/2);
// console.log(10%3);
// console.log(2**3); //2^3 = 8

let str1 = "Hello"
let str2 = "Vedika"
// console.log(str1 + str2); //HelloVedika
// console.log(str1 + " " + str2); //Hello Vedika
// console.log(str1 + " " + str2 + " " + 3); //Hello Vedika 3
// console.log(str1 + " " + str2 + " " + (3+4)); //Hello Vedika 7

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

console.log(+true); //1
console.log(+""); //0