let nameGlobal = 'Krystian';

function sayHello(name) {
    let greeting = 'Hello';
    name = `${greeting} ${name}`;
    // debugger;
    return name;
}

const app = document.querySelector('#root');
app.innerHTML = sayHello('Krystian');

// typeof 
let number = 2;
let text = 'text';
let condition = true;
number++;

display(number + ' ' + typeof (number));
display(typeof (text));
display(typeof (condition));

function display(type) {
    console.log(type);
}

let weather = 'rain'

if (weather === 'rain')
    console.log('take umbrella');
else if (weather === 'snow')
    console.log('take hat');
else
    console.log('take sunglasses');

weather = 'snow';
switch (weather) {
    case 'rain':
        console.log('take umbrella');
        break;
    case 'snow':
        console.log('take hat');
        break;
    default:
        console.log('take sunglasses');
        break;
}

display('while');
let i = 0;
while (i != 5) {
    i = Math.floor(Math.random() * 10);
    console.log(i);
}

display('for');
for (let i = 0; i < 10; i++) {
    if (i % 5 == 0)
        console.log(i);
}

display('nested for');
for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 4; l++) {
        display(`k = ${k}, l = ${l}`);
    }
}

display('arrays');
let myNumbers = [1, 2, 3, 4, 5, 6, 7];
let emptyArray = [];

const users = ["Ala", "John", "Naomi", "Adam"];
const prices = [23, 12, 9.40];
display(users[0]);
display(users[2]);
display(users[4]);
display(prices.length);
