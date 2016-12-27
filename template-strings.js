console.log('----------------------------- Template Strings -----------------------------');

// ------------- ES5
function getYear() {
    const year = new Date().getFullYear();
    
    return "The year is " + year;
}

console.log(getYear());

