//uy ishi 1

const myArrey = function(array, element) {
    if (element == array) {
        let join = element.split('');
        console.log(`${[join]}`);
    }
    return array.indexOf(element)
}

console.log(myArrey([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 11));


// const checkAge = (currentValue) => currentValue < 30;

// const array1 = [
//     Alice = 25,
//     Bob = 30,
//     Charlie = 35
// ];

// console.log(array1.every(checkAge));

// if (array1.every(checkAge) == false) {
//     console.log('kotta bolla');
// } else {
//     console.log('yosh bolla');
// }