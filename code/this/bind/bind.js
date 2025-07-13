let dog = {
  dogName: "Rex",
  bark() {
    console.log(`Woof! My name is ${this.dogName}`);
  },
};

// dog.bark(); // Woof! My name is Rex
//we took the adress of the bark method
// and assigned it to a variable
// we lost the context of the dog object
// so this is now pointing to the global object
let barkFunction = dog.bark;
// barkFunction();
barkFunction = barkFunction.bind(dog);
// now we are binding the barkFunction to the dog object
barkFunction();
