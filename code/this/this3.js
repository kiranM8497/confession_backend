const student = {
  name: "John",
  siblings: ["Jane", "Alex"],
  showSiblings() {
    this.siblings.forEach(function (sibling) {
      console.log(`${this.name}'s sibling is ${sibling}`); // this is undefined here
      // because the context of 'this' is lost in the forEach callback
    });
  },
};

const student2 = {
  name: "John",
  siblings: ["Jane", "Alex"],
  showSiblings() {
    this.siblings.forEach((sibling) => {
      // using arrow function to maintain the context of 'this'
      // arrow functions do not have their own 'this', they inherit it from the parent scope
      console.log(`${this.name}'s sibling is ${sibling}`);
    });
  },
};

student.showSiblings();
student2.showSiblings();
