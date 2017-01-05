console.log('------------ Arrow Functions -------------------------------------------------------------------------------');

//------------- ES5
const addOld = function(a, b) {
    return a + b;
}
console.log(`${addOld(2, 1)} this is old way`);

//------------- ES6
const addNew = (a, b) => a + b;
console.log(`${addNew(2, 1)} this is the new compact syntax for arrow functions`);

//-------------- Advanced Arrow Functions
const double = number => 2 * number
console.log(`${double(8)} in this example we omit the perenthesis from the single argument.`);

const numbers123 = [1,2,3];
console.log(`[${numbers123.map(number => 2 * number)}] - using arrow function with an array helper.`);

const devTeam = {
    members: ['Jill', 'Bill'],
    teamName: 'Power Rangers!',
    teamSummary: function() {
        return this.members.map(member => `${member} is on team ${this.teamName}` );
    }
};

console.log(`[${devTeam.teamSummary()}] - Using arrow function we autobind the 'this' variable and keep the correct context to the map function instead of using .bind(this).`);

var devName = 'David';
const profile = {
    devName: 'Alex',
    getNameOldFunction: function() {
        return this.devName
    },
    getNameNewArrowFunction: () => this.devName, // this context is window.
    prop: {
        devName: 'Amir',
        getNameNewArrowFunctionInOneExtraLayer: () => this.devName
    }
};

console.log(`${profile.getNameOldFunction()} ${profile.getNameNewArrowFunction()} ${profile.prop.getNameNewArrowFunctionInOneExtraLayer()} nesting the arrow function in another object to try it at a deeper level to confirm that its context is still on this level (window) and does not change with nesting in objects.`);
