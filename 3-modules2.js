// Modules

// importing the names variables
const names = require('./4-names');
// console.log(names);

// importing the sayHi function
const sayHi = require('./5-utils');

// importing modules from alternative syntax
const data = require('./6-alternative-syntax')
console.log(data)

// running the function and accessing the imported names from the object

// importing mind-grenade
require('./7-mind-grenade');

sayHi("Jane");
sayHi(names.john);
sayHi(names.peter);
