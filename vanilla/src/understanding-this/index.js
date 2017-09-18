console.log ("`this` is particularly fraught in javascript");

console.log ("`this` unwrapped:")
console.log (this);

(function () {
  console.log ("`this` wrapped in a standard function");
  console.log (this);
})();

(() => {
  console.log ("`this` wrapped in es2015 function call");
  console.log (this);
})();

