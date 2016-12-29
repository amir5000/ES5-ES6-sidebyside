console.log('----------------------------- Arrow Functions -----------------------------');

//------------- ES5
const addOld = function(a, b) {
    return a + b;
}

console.log(`${addOld(2, 1)} this is old way`);

//------------- ES6
const addNew = (a, b) => a + b;

console.log(`${addNew(2, 1)} this is the new compact syntax for arrow functions`);

//-------------- Advanced Arrow Functions
const double = number => 2 * number

console.log(`${double(8)} in this example we omit the perenthesis from the single argument.`);