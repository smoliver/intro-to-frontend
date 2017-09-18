"use strict";

console.group ();
console.log ('The `this` keyword is one of the largest (and most confusing) differences between JS and C based languages');
console.log ('In Javascript functions are treated as first class objects');
console.log ('They can be passed into functions, set as variables, and returne values');
console.log ('As a result, certain types of functions and modes will edit the scope of `this`');
console.groupEnd ();


console.group ("`this` unwrapped in vanilla js:");
console.log (this);
console.groupEnd ();

// Function expressions create a new context in strict mode
(function () {
  console.group ("`this` wrapped in a function expression");
  console.log (this);
  console.groupEnd ();
})();

// ES6 arrow functions never create new context 
(() => {
  console.group ("`this` wrapped in es6 arrow function call");
  console.log (this);
  console.groupEnd ();
})();

