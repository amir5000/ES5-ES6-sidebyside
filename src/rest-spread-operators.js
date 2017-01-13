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

console.log('------------ Using old .concat() method to concat two arrays together');
//ES5 way
function joinOld(array1, array2) {
  return array1.concat(array2);
}

//ES6 way
function joinNew(array1, array2) {
  return [...array1, ...array2];
}

console.log(joinOld(primaryColors, numbers));
console.log('------------ Using spread operator method to concat two arrays together');
console.log(joinNew(primaryColors, numbers));

console.log('------------ Using old .concat() and no rest operator to handle the multiple argumants and adding them to an array to concat two arrays together');
//ES5 way
function unshiftOld(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

//ES6 way
function unshiftNew(array, ...array2) {
  return [ ...array2, ...array];
}

console.log(unshiftOld(primaryColors, 1,2,3,4,5,6));
console.log('------------ Using both rest and spread operators to make the code more legiable when combining two arrays.');
console.log(unshiftOld(primaryColors, 1,2,3,4,5,6));
