console.log(this); // {}==> outside of any function this points to module.exports
console.log(module.exports === this); // module.exports is the same as this outside of any function
module.exports.nickName = "Nick";

console.log(this); // this is still the same as module.exports
global.age = 40; // adding a property to the global object
function hi() {
  //this keyword inside a function refers to the global object
  console.log(this.age); // 40
}
hi();
