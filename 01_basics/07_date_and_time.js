// Dates

let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toDateString()); // Current date
console.log(myDate.toTimeString()); // Current time
console.log(myDate.toISOString()); // ISO standard date
console.log(myDate.toLocaleString());  // Local date and time
console.log(myDate.toLocaleDateString()); // Local date
console.log(myDate.toLocaleTimeString()); // Local time
console.log(myDate.getFullYear()); // Current year
console.log(myDate.getMonth() + 1); // Current month (0-11, so add 1)
console.log(myDate.getDate()); // Current day of the month
console.log(myDate.getHours()); // Current hour
console.log(myDate.getMinutes());   // Current minutes
console.log(myDate.getSeconds());   // Current seconds
console.log(myDate.getMilliseconds()); // Current milliseconds
console.log(myDate.getDay());   // Current day of the week (0-6, 0 is Sunday)
console.log(myDate.getTime());  // Milliseconds since January 1, 1970

console.log(typeof myDate); // object

// Specific date
let specificDate = new Date('2022-01-01'); // Date only
console.log(specificDate.toString());
let specificDateTime = new Date('2022-01-01T10:00:00');
console.log(specificDateTime.toString()); // Date and time

let myCreatedDate = new Date("13-09-2023 04:30:00");
console.log(myCreatedDate.toString());  // Wed Sep 13 2023 04:30:00 GMT+0000 (Coordinated Universal Time)

