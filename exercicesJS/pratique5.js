//--------------------- Mélanger le tableau V2 / ES6 ----------------------//
function randomize(array) {

    for (let i = 0; i < array.length; i++) {
        const random = Math.floor(Math.random() * array.length);
        [ array[i], array[random] ] = [ array[random], array[i] ];
    }

    return array;
}

console.log(randomize([1, 2, 3, 4, 5]));