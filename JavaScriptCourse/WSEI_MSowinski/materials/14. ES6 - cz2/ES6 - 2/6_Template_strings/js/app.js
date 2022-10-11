console.log("\nPreparation task");
function whoAreYou(person) {
    return `My name is ${person.name} ${person.lastName}.\nI am ${new Date().getFullYear() - person.yearOfBirth} years old.\nMy profession is ${person.proffesion}`;
}

const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    proffesion: "Lord of Wallachia"
};

console.log(whoAreYou(person));

console.log("\ntask 01");
let firstNumber = 2;
let secondNumber = 4;
console.log(`Suma dwóch liczb ${firstNumber} i ${secondNumber} to: ${firstNumber + secondNumber}`);

console.log("\ntask 02");
let myName = "Krystian";
console.log(`Moje imię i nazwisko to: ${myName} Petek`);

console.log("\ntask 03");
(() => {
    console.log(`"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`);
})();

console.log("\ntask 04");
function func(...array) {
    console.log(...array);
}
const array = ['a', 'b', 'c'];
`${(func(array))}`;

console.log("\ntask 05");
const button = {
    value: "Send message",
    idName: "sendMsg",
    width: "100px",
    padding: "20px",
};
console.log(`This is button.\nIt is width is ${parseInt(button.width) + 2 * parseInt(button.padding)}px.\nInscription, which on it is "${button.value}"`);
const objectButton = document.createElement('button');
objectButton.style.width = button.width;
objectButton.style.padding = button.padding;
objectButton.innerText = button.value;
objectButton.setAttribute('idName', button.idName);
document.querySelector('.cite').appendChild(objectButton);
console.log(objectButton);