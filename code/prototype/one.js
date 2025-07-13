//given a code below add a  function called getDetails  on the prototype object
//of thw user function . getDetails returns the age and the name of the user instance defined in the code

function User(age, name) {
  this.age = age;
  this.name = name;
}
User.prototype.getDetails = function () {
  return {
    age: this.age,
    name: this.name,
  };
};
const tom = new User(22, "Tom");
let details = tom.getDetails();
console.log(details);
