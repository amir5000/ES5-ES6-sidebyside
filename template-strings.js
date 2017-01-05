console.log('------------ Template Strings ------------------------------------------------------------------------------');

// ------------- ES5
function getYearOld() {
    const year = new Date().getFullYear();
    
    return "The year is " + year + " - ES5";
}

console.log(getYearOld());

// --------------- ES6
function getYearNew() {
    const year = new Date().getFullYear();
    
    return `The year is ${year} - ES6`;
}

console.log(getYearNew());
