console.log('------------ Generators ---------------------------------------------------------------------------------');

function* colorsGen() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

//stuff in the store.
const gen = colorsGen();

const myColors = [];
for (let color of colorsGen()) {
    myColors.push(color);
}

console.log('------------ Using Generators and for...of loop to iterate over different yeild properties in the generator.');
console.log(myColors);
