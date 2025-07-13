// how to assign this keyword to the teacher object
// so that we can call the talk method on the teacher object

let student = {
  first_name: "Rex",
  talk() {
    // console.log(this === student);
    console.log(`Hello, my name is ${this.first_name}`);
  },
};

const teacher = {
  first_name: "John",
};

student.talk();
let bound = student.talk.bind(teacher);
// console.log(bound);
bound();
// student.talk.call(teacher);
// student.talk.apply(teacher);
