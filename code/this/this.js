// loosing scope

const student = {
  name: "John",
  getName() {
    // console.log(this);

    // for (let key in this) {
    //   console.log(key);
    //   if (key === "queueMicrotask") {
    //     console.log(
    //       "queueMicrotask is a method of the global object",
    //       this[key]
    //     );
    //   }
    // }
    return this.name;
  },
};
//we took the reference of the getName method
// and assigned it to a variable
//  getName  is now holding the address of the function
// so we can call it as a standalone function
const getName = student.getName;
//console.log(getName);// we  [Function: getName] address of the function
//lets call the function
console.log(getName()); // undefined
// this is undefined because getName is called as a standalone function
//we lost the context of the student object
// so this is now pointing to the global object
