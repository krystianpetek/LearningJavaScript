console.log("\nPreparation task - spread operator");
const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol"];
console.log(namesB);

console.log("\nPreparation task - rest operator");
function getAverage(...numbers) {
    return (numbers.reduce((a, b) => a + b) / numbers.length).toFixed(2);
}
console.log(getAverage(2, 4, 5, 6, 7, 79));

console.log("\ntask 01");
const myName = "Krystian";
let arrayWithMyName = [...myName];
console.log(arrayWithMyName);

console.log("\ntask 02");
const fruits = ["fruit", "fruit", "fruit"];
const vegetables = ["vegetable", "vegetable", "vegetable"];
const mix = [...fruits, ...vegetables];
console.log(mix);

import { zadanie03 } from "./zadanie03";