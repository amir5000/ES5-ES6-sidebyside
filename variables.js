console.log('----------------------------- Variables -----------------------------');

//------------ ES5
var nameOld = 'Jane';
var titleOld = 'Software Engineer';
var hourlyWageOld = 40;

//------------ ES6
const nameNew = 'Jane'; // When the variable isn't expected to change throughout the lifespan of the application. 
// we can not chane the value nameNew later on like this: nameNew = 'Abby';
let titleNew = 'Software Engineer' // When the variable is expected to change at some point in the application. This is similar to the old var variable.
titleNew = 'Senior Software Engineer';
let hourlyWageNew = 40;
hourlyWageNew = 40;

console.log('const nameNew = \'Jane\'; When the variable isn\'t expected to change throughout the lifespan of the application. ');
console.log('let titleNew = \'Software Engineer\' When the variable is expected to change at some point in the application. This is similar to the old var variable.');

console.log('----------------------------- Advanced Variables -----------------------------');
let tt = "tt";
var dd = "dd"
console.log(`${tt} declared the let`);
console.log(`${dd} declared the var`);

{
    
    let tt = "tttttttt"
    var dd = "dddddddd"
    console.log(`${tt} here the new let declaration is set`);
    console.log(`${dd} here the new variable declaration overrides the old one outside the block`);
    
}

console.log(`${tt} here the let is blocked scoped so it has no reference to the let variable inside the block and uses the old value.`);
console.log(`${dd} here the var was overriden in the block and it displaye the new value.`);