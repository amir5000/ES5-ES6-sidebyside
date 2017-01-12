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