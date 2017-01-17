console.log('------------ Classes ---------------------------------------------------------------------------------------');

//ES5 way
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'zoom';
}

const car = new Car({ title: 'Mazda' });
console.log('------------ Old ES5 way');
console.log(car, car.drive());

