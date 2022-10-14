const person = {
    name: "Krystian Petek",
    age: 24
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

//template literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(array) {
    const resultDisplayArray = [];
    for (let i = 0; i < array.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${array[i]}</li>`);
    }
    return resultDisplayArray;
}
const returnDisplayArray = makeList(result.success);
console.log(returnDisplayArray);

// write concise obj literal declarations using simple fields
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Krystian Petek", 24, "male"));

// lub prościej
const createPersonSimple = (name, age, gender) => ({ name, age, gender });
console.log(createPersonSimple("Krystian", 23, "male"));

// pisanie zwięzłej, deklaratywnej funkcji
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// create object using class keywords
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
};
var zeus = new SpaceShuttle("target");
console.log(zeus);

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// setter and getter
class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClassThermostat() {
    class Thermostat {
        constructor(temperature) {
            this._temp = temperature;
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    };
    return Thermostat;
}
const Thermostat = makeClassThermostat();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// difference between import and require
import * as importowanie from './export.js';
const capitalize = importowanie.capitalizeString("hello!");
console.log(capitalize);
