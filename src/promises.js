console.log('------------ Promises --------------------------------------------------------------------------------------');

const promise = new Promise((resolve, reject) => {
    setTimeout(() => { //simulate an ajax request
        reject();
        resolve();
    }, 1000);
});

console.log('------------ Breakdown of promises and how resolve()/reject() work with .then() and .catch()');
console.log(promise
            .catch(() => console.log('error occured.'))
            .then(() => console.log('resolved after.'))
           );


const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url).then(response => response.json()).then(data => console.log(data));