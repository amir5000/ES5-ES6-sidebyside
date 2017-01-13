console.log('------------ Default function arguments --------------------------------------------------------------------');

// ES5 way
function makeAjaxRequestEs5(url, method) {
    
    if (!method) {
        method = 'GET';
    }
    
    // Rest of Ajax request
}

// ES6 way
function makeAjaxRequest(url, method = 'GET') {
    
    // Rest of Ajax request
    return method;
}

console.log(`------------ Using default function argument to always set a second argument when we don't provide one.`);
console.log(makeAjaxRequest('url.com'));
console.log(`------------ Still being able to override the default argument.`);
console.log(makeAjaxRequest('url.com', 'POST'));