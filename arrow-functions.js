console.log('----------------------------- Arrow Functions -----------------------------');

//------------- ES5
const addOld = function(a, b) {
    return a + b;
}

console.log(addOld(2, 1));

//------------- ES6
const addNew = (a, b) => a + b;

console.log(addNew(2, 1));