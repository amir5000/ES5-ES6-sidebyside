console.log('------------ Classes ---------------------------------------------------------------------------------------');

//ES5 way
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'zoom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const car = new Car({ title: 'Mazda' });
console.log('------------ Old ES5 way');
console.log(car, car.drive());

const toyota = new Toyota({ color: 'red', title: 'Tacoma' });
console.log('------------ Old ES5 way of prototypla inheritence for the Toyota object to inherit from the Car object');
console.log(toyota, toyota.drive(), toyota.honk());

//ES6 way
class CarNew {
    constructor({ title }) {
        this.title = title;
    }
    
    drive() {
        return 'zoooooom';
    }
}

const newCar = new CarNew({ title: 'Mazda' });
console.log('------------ Using class we can now keep all Car related logic in one constructor object.');
console.log(newCar, newCar.drive());