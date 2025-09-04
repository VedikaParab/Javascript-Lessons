const name = "Vedika";
const age = 18;

// Concatenation
console.log("My name is " + name + " and I am " + age + " years old.");

// String Interpolation
// Template Literals (Template Strings)
console.log(`My name is ${name} and I am ${age} years old.`);

const city = new String("Pune");
//doesn't change the original string
console.log(city); //String {"Pune"}
console.log(city[0]); //P
console.log(city.length); //4
console.log(city.toUpperCase()); //PUNE
console.log(city.toLowerCase()); //pune
console.log(city.includes("ne")); //true
console.log(city.startsWith("Pu")); //true
console.log(city.endsWith("ne")); //true
console.log(city.indexOf("n")); //2
console.log(city.charAt(2)); //n
console.log(city.substring(1, 3)); //un
console.log(city.slice(1, 3)); //un
console.log(city.slice(-3)); //une  //can give negative index also
console.log(city.split("")); //["P", "u", "n", "e"]
console.log(city.trim()); //Pune  //removes whitespace from both ends
console.log(city.replace("P", "B")); //Bune  //replaces only first occurrence
console.log(city.replaceAll("e", "a")); //Puna  //replaces all occurrences  


//Refer docs for more string methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
