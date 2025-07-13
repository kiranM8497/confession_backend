## Rules 

1) In a normal function / function declaration / named function,
"this" keyword refers to the object that the function is called on.
1) Arrow functions do not have their own bindings, so when
"this" is accesses inside an arrow function, it is taken from
outside.
1) when "this" keyword is used in a named function/function
declaration, the "this" keyword is equal to the global object as
long as the named function is in the global scope and not called
on any object.
1) In the global scope the "this" keyword refers to
module.exports object
1) In a function expression in the global scope, this keyword
refers to module.exports object.