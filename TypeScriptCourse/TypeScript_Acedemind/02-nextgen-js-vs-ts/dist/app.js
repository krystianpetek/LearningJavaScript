"use strict";
const userName = "Krystian";
let age = 30;
age = 24;
function add(a, b) {
    let result;
    result = a + b;
    return result;
}
if (age > 20) {
    console.log("older than me");
}
const anotherAdd = (a, b = 1) => {
    return a + b;
};
console.log(anotherAdd(2, 5));
const printOutput = (output) => console.log(output);
printOutput(anotherAdd(14));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
    });
}
const hobbies = ["Sports", "Cookies"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(...activeHobbies);
const person = {
    name: "Krystian",
    age: 24,
};
const copiedPerson = { ...person };
console.log(Object.is(person, copiedPerson));
const restAdd = (...numbers) => {
    return numbers.reduce((prevVal, currVal) => {
        return prevVal + currVal;
    }, 0);
};
const addedNumbers = restAdd(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(remainingHobbies);
const { name: personName, age: personAge } = person;
console.log(personName, personAge);
