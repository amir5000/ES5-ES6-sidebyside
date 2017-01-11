console.log('------------ Rest & Spread Operators -----------------------------------------------------------------------');

//ES5 way
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// Rest operator way.
function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

console.log('------------ Using Rest we dont have to worry about the number of arguments we are passing.');
console.log(product(1,2,3,4,5));