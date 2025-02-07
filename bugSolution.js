function myFunction(a, b) {
  //Convert both inputs to integers before adding
  return parseInt(a) + parseInt(b);
}

console.log(myFunction(5, '5')); // Output: 10
console.log(myFunction('10', 20)); // Output: 30
console.log(myFunction(5, 'abc')); // Output: NaN - handles non-numeric input gracefully