console.log('------------ for...of loop ---------------------------------------------------------------------------------');

{ //new block to not be in global scope.
    const numbers = [1,2,3,4,5];

    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    
    console.log('------------ Using for...of to iterate over an array and add up all the numbers in it.');
    console.log(total);
}