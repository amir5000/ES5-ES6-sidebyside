console.log('----------------------------- Variables -----------------------------');

//------------ ES5
var nameOld = 'Jane';
var titleOld = 'Software Engineer';
var hourlyWageOld = 40;

//------------ ES6
const nameNew = 'Jane'; // When the variable isn't expected to change throughout the lifespan of the application.
// we can not chane the value nameNew later on like this: nameNew = 'Abby';
let titleNew = 'Software Engineer' // When the variable is expected to change at some point in the application. This is similar to the old var variable 
titleNew = 'Senior Software Engineer';
let hourlyWageNew = 40;
hourlyWageNew = 40;

