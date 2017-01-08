console.log('------------ Object literals -------------------------------------------------------------------------------');

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

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Twilight', price: 15},
]

const bookShop = createBookShop(inventory);

//ES6 Object Literal
function createBookShop(invintory) {
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

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));