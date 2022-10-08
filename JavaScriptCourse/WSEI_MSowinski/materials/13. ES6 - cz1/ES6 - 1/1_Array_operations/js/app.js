// task 00
let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
cities = cities.map(x => x.length);
console.log(cities);

// task 01
function randomize(param1, param2, callback) {
    if (typeof callback !== 'function') {
        throw (error);
    }

    if (isNaN(param1) || isNaN(param2)) {
        throw (error);
    }

    let randomize;
    debugger;
    if (param1 > param2)
        randomize = Math.floor(Math.random() * (param1 - param2)) + param2;
    else
        randomize = Math.floor(Math.random() * (param2 - param1)) + param1;

    console.log(randomize);
    callback(randomize);
}

randomize(10, 50, x => console.log(x));

// task 02
const animals = ["cat", "shrimp", "giraffe"];
animals.forEach(x => console.log(x));

// task 03
let years = [1995, 1856, 2014, 1987];
years = years.map(a => new Date().getFullYear() - a);
console.log(years);

// task 04
const arrayOfNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
const resultOfAddition = arrayOfNumbers.reduce((a, b) => a + b);
console.log('result of addition: ', resultOfAddition);

const resultOfMultiplication = arrayOfNumbers.reduce((a, b) => a * b);
console.log('result of multiplication: ', resultOfMultiplication);