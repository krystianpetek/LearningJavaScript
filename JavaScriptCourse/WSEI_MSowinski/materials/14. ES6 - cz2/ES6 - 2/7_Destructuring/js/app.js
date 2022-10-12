console.log("\nPreparation tasks 1");
const arrayItems = ["snow", "rain", "sun"];
let [first, , last] = arrayItems;
console.log(first, last);

console.log("\nPreparation tasks 2");
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
};

const { type: typeOfSlider, autoStart } = slider;
console.log(typeOfSlider, autoStart);

console.log("\ntask 01");
const names = ["Krystian", "Patrycja", "Józef", "Teresa"];
const [name1, name2, name3, name4] = names;
console.log(name1, name2, name3, name4);

console.log("\ntask 02");
function generateRandomNumbers() {
    const tab = [];
    for (let i = 0; i < 6; i++) {
        tab.push(Math.floor(Math.random() * 6));
    }
    const [first, , third] = tab;
    console.log(first, third);
}
generateRandomNumbers();

console.log("\ntask 03");
function getAnimal() {
    return ({
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    });
}
const { name: catName, getVoice: catVoice } = getAnimal();
console.log(catName, catVoice());