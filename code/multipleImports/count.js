const counter = require("./Counter"); //imported
const counter1 = require("./Counter"); //uses the same instance
const counter2 = require("./Counter"); //uses the same instance

console.log(counter);
console.log(counter1);
console.log(counter2);
