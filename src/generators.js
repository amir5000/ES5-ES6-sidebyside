console.log('------------ Generators ---------------------------------------------------------------------------------');

function* colorsGen() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colorsGen();

const myColors = [];
for (let color of colorsGen()) {
    myColors.push(color);
}

console.log('------------ Using Generators and for...of loop to iterate over different yeild properties in the generator.');
console.log(myColors);



const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}

console.log('------------ Using Generators and generator delegation to run two generators together.');
console.log(names);
