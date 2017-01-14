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

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ firstCompany, ...rest ] = companies;
console.log('------------ Using destructuring on an array along with the rest operator to pull off the rest of the array.');
console.log(firstCompany, rest);

const techCompanies = [
    { name: 'Google', city: 'Mountain View' },
    { name: 'Facebook', city: 'Menlo Park' },
    { name: 'Uber', city: 'San Francisco' }
];

const [company1, { city }] = techCompanies;
console.log('------------ Using destructuring to destructure an object inside an array.');
console.log(city);

const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ locationCity ] } = Google;
console.log('------------ Using destructuring to destructure an array inside of an object which is less common.');
console.log(locationCity);

const points = [
    [4, 5],
    [29, 18],
    [48, 39]
];

const pairs = points.map( ([ x, y ]) => {
    return { x, y };
});

console.log('------------ Using destructuring to create a new array of objects and assigning values to new keys.');
console.log(pairs);
