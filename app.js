//Array Helpers

//forEach
const colors = ['red', 'blue', 'green'];

//old way
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//ES6 way
colors.forEach(function(color) {
  console.log(color);
});

var numbers = [1,2,3,4,5];
var sum = 0;
function adder(number) {
  sum += number
}
numbers.forEach(adder);
console.log(sum);

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

console.log(areas);

//map

var numbers = [1,2,3];
var doubleNumbers = [];
//old way
for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] *2);
}
//ES6 way
var doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);
console.log(doubleNumbers);

// implemented previous example in map instead of forEach for correct way of using the correct array helper method
var newArea = images.map(function(image) {
    return image.height * image.width;
});

console.log(newArea);

var cars = [
  {
	  model: 'buick',
    price: 'CHEAP'
  },
  {
    model: 'Camero',
    price: 'Expensive'
  }
];

//example of plucking
var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);

function pluck(array, property) {
    var items = array.map(function(item) {
        return item[property];
    });
    
    console.log(items);
}
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color');

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

console.log(filteredProducts);

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

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

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













































































