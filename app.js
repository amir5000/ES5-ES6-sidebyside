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
