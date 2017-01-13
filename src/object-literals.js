console.log('------------ Object literals -------------------------------------------------------------------------------');

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Twilight', price: 15},
];

//ES5 way
function createBookShop(invintory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

var bookShop = createBookShop(inventory);
console.log(`------------ Using Old ES5 Object literal.`);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));



//ES6 Object Literal
function createBookShopEs6(invintory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
};

const bookShopEs6 = createBookShopEs6(inventory);
console.log(`------------ Using new ES6 syntax for Object literal.`);
console.log(bookShopEs6.inventoryValue());
console.log(bookShopEs6.priceForTitle('Harry Potter'));