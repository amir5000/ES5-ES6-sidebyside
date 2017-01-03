//Array Helpers
console.log('----------------------------- Array Helpers -----------------------------');

//forEach
console.log('----------------------------- ES5 forEach -----------------------------');
const colors = ['red', 'blue', 'green'];

//old way
for (var i = 0; i < colors.length; i++) {
  console.log(`${colors[i]} - Using old for loop`);
}

//ES6 way
console.log('----------------------------- ES6 forEach -----------------------------');
colors.forEach(function(color) {
  console.log(`${color} - Using forEach Array helper to output all the values in an array`);
});

var numbers = [1,2,3,4,5];
var sum = 0;
function adder(number) {
  sum += number
}
numbers.forEach(adder);
console.log(`${sum} - Using forEach to get the sum of an array.`);

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
    var area = image.height * image.width;
    areas.push(area);
});

console.log(`[${areas}] - Using forEach to loop and the push to a new array the total area of the images.`);

//map
console.log('----------------------------- Old for loop -----------------------------');

var numbers = [1,2,3];
var doubleNumbers = [];

//old way
for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] *2);
}
console.log(`[${doubleNumbers}] - Using old for loop to double each number and then push into an array.`);

//ES6 way
console.log('----------------------------- New map helper for looping -----------------------------');
var doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(`[${doubled}] - Using map array helper to loop through and double each number and automatically return an array with the new values.`);


// implemented previous example in map instead of forEach for correct way of using the correct array helper method
console.log('----------------------------- Using map to replace the forEach method above -----------------------------');
var newArea = images.map(function(image) {
    return image.height * image.width;
});

console.log(`[${newArea}] - Using map instead of forEach is simpler and less code and is faster.`);

//example of plucking
console.log('----------------------------- Using map to pluck values from an array of objects -----------------------------');
var cars = [
  {
	  model: 'buick',
      price: 'Cheap'
  },
  {
    model: 'Camero',
    price: 'Expensive'
  }
];

var prices = cars.map(function(car) {
  return car.price;
});

console.log(`[${prices}] - Old ES5 way`);

function pluck(array, property) {
    var items = array.map(function(item) {
        return item[property];
    });
    return items;
}
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
console.log(`[${pluck(paints, 'color')}] - Using map to create a function that is reusable to pluck away a key/value pair from an array of objects.`);

console.log('----------------------------- Using filter array helper -----------------------------');
//Filter example
var products = [
  {
    name: 'soda',
    price: 2.00,
    qty: 1
  },
  {
    name: 'candy',
    price: 2.00,
    qty: 0
  },
  {
    name: 'medicine',
    price: 1.00,
    qty: 14
  },
  {
    name: 'game',
    price: 1.00,
    qty: 15
  },
];

var filteredProducts = [];

//old way
for (var i = 0; i < products.length; i++) {
  if (products[i].price === 1.00) {
    filteredProducts.push(products[i]);
  }
}

console.log(`[${filteredProducts}] `);

//ES6 way
products.filter(function(product){
  return product.price === 2;
});

//more advanced filter
var filteredProducts = products.filter(function(product) {
  return product.price > 1 && product.qty > 0;
});

console.log(filteredProducts);

// Find Method
var users = [
  {name:'Alex'},
  {name:'Jill'},
  {name:'Kim'}
];
var user;

//old way
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

console.log(user);
// ES6 way
user = users.find(function(user) {
  return user.name === 'Alex';
});

console.log(user);

// a practical example of using the find method
var posts = [
  {id: 1, title: 'Post One'},
  {id: 2, title: 'Post Two'},
  {id: 3, title: 'Post Three'},
];

var comment = {postId: 1, content: 'Great Post'};

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function(account) {
   return  account.balance === 12;
});

console.log(account);


// Every & Some Method
var computers = [
    {name: "Apple", ram: 24},
    {name: "Compaq", ram: 4},
    {name: "Acer", ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

//old way
for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

allComputersCanRunProgram = computers.every(function(computer){
   return computer.ram > 16;
});

onlySomeComputersCanRunProgram = computers.some(function(computer){
   return computer.ram > 16;
});

console.log('using every: ' + allComputersCanRunProgram);
console.log('using some: ' + onlySomeComputersCanRunProgram);

var namesStrings = [
    "John",
    "Peter",
    "Alexa",
    "Danny"
];

var isNameLong = namesStrings.every(function(name){
   return name.length > 4;
});

var isAnyNameLong = namesStrings.some(function(name){
   return name.length > 4;
});

console.log("isNameLong " + isNameLong);
console.log("isAnyNameLong " + isAnyNameLong);

// reduce method
var numbers = [10, 20, 30];
var sum = 0;

//old way
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

sum = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log("reduce method: " +  sum);

var primaryColors = [
    {color: "Red"},
    {color: "Blue"},
    {color: "Green"}
];
var previous = [];

previous = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);    
    return previous;
}, []);

console.log(previous);

//More practical example of reduce to solve balancedParens problem.
function balancedParens(string) {
    return !string.split("").reduce(function(previous, char) {
        if (previous < 0) { return previous; } 
        if (char === "(") { return ++previous; } 
        if (char === ")") { return --previous; }
        return previous;
    }, 0);
}

console.log(balancedParens("(())"));
console.log(balancedParens(")("));

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') {++previous.sitting};
    if (desk.type === 'standing') {++previous.standing};
    return previous;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
  return array.reduce(function(previous, number) {      
        var findNum = previous.find(function(num) {
            return num === number;
        });      
        if (!findNum) {previous.push(number)}   
        return previous;
  }, []);
}

console.log(unique(numbers));









