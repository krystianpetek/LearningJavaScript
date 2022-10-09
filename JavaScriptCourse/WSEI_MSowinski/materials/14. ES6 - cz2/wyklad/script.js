// Lecturer Objectivity in ES6 - Example

class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let animal = new Animal("Filemon");
console.log(animal);

let cat = new Cat("Mruczek", 4);
console.log(cat);

class Bird extends Animal {
    fly() {
        console.log(`${this.getName()} can fly!`);
    }
}

const bird = new Bird("Gil");
console.log(bird);
bird.fly();



// another example
class Foo {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    multiply() {
        return this.a * this.b;
    }
}

class Bar extends Foo {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    multiply() {
        return super.multiply() * this.c;
    }
}



// spread operator
const array = [1, 2, 3];
console.log(...array);
console.log(array[0], array[1], array[2]); // spread operator doing something what looks like this

function sum(a, b, c) {
    return a + b + c;
}
let result1 = sum(...[1, 2, 3]);
console.log("result1", result1);
let result2 = sum(array[0], array[1], array[2]);
console.log("result2", result2);



// operator apply instead of spread operator
let result3 = sum.apply(null, array);
console.log("result3", result3);



// spread operator for split string and write it to array
const str = "text";
const chars = [1, 2, 3, ...str, 5];
console.log(chars);
chars[4] = [...str];
console.log(chars);



// operator rest in example
// operator rest always must be in last place in passed arguments
function fn(a, b, ...operatorParams) {
    return (a + b) * operatorParams.length;
}
console.log(fn(2, 4, "IT", true, 9));



// template strings
let user = "Agata";
console.log(`Witaj ${user}`);
let a = 23;
console.log(`Suma ${a + 2}`);

console.log(`pierwsza linia tekstu druga linia tekstu,
trzecia linia i zaraz czwarta,
wynik dodawania to ${2 + 2}`);


// array DESTRUCTURING
const fruits = ["Banana", "Apple"];
let [val1, val2] = fruits;
console.log('destructuring', val1, val2);
let value1 = fruits[0];
let value2 = fruits[1]; // or without destructuring we can make it as like that
console.log('conventional approach', value1, value2);

const foo = () => [1, 2, 3];
const [a1, a2] = foo();
console.log(a1, a2); // 1, 2

// omitting some value
const [c1, , c2] = foo();
console.log(c1, c2); // 1, 3

// spread rest operator
const [s1, ...s] = foo();
console.log(s1, s);

// switching value without additionally variables
let q1 = 4, q2 = 2;
[q1, q2] = [q2, q1];
console.log(q1, q2);


// DESTRUCTURING OBJECTS
let point = {
    summary: 42,
    isOk: true
};
let { summary, isOk } = point;
console.log(summary, isOk); // variable must be matched with object variable

// destructuring with changing variable name
let pointClone = {
    summaryClone: 42,
    isOkClone: false
};
let { summaryClone: summaryCloneButChanged, isOkClone } = pointClone;
console.log(summaryCloneButChanged, isOkClone);


// Object notation ES5 vs ES6
// ES5
const colorES5 = "red";
const sizeES5 = 200;
const ballonES5 = {
    color: colorES5,
    size: sizeES5
};
console.log(ballonES5.color);

// ES6
const color = "red";
const size = 200;
const ballon = { color, size };
console.log(ballon.color, ballon.size);


// CommonJS - obsolete
//const add = require("./calc.js");
//console.log('added', add(10, 2));


// Module in ES6
import { subtract, cat as kitty } from "./importES6.js";
console.log(subtract(44, 50));

console.log(kitty);