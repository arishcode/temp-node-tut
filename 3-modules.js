// CommonJS, every file in module by default
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavour')

require('./7-mind-grenade');
// console.log(names);
// console.log(data);
// console.log(data.items[1]);
// console.log(data.singlePerson.salary);

sayHi('Arsh');
sayHi(names.john);
sayHi(names.sera);
