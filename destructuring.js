console.log('------------ Destructuring ---------------------------------------------------------------------------------');

var expense = {
    type: 'Business',
    amount: 45
};

//Old ES5 way
//var type = expense.type;
//var amount = expense.amount;

console.log('------------ Using destructuring and pulling off values from an object');
const { type, amount } = expense;
console.log(type, amount);

var savedFile = {
    extension: 'jpg',
    name: 'post',
    size: 150345
};

function fileSummary({ name, extension, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}

console.log('------------ Using destructuring on the passed in argument.');
console.log(fileSummary(savedFile));
