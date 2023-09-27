// console.log(arguments);

const Calc = require("./test-module-1.js");

const calc1 = new Calc();
console.log(calc1.add(2, 5));

// const calc2 = require("./test-module-2");
const { add } = require("./test-module-2");
console.log(add(3, 5));

// Caching
require("./test-module-3.js")();
require("./test-module-3.js")();
require("./test-module-3.js")();
