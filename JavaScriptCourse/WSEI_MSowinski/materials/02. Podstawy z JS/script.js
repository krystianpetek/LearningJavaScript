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

let i = 0;
while (i != 5) {
    i = Math.floor(Math.random() * 10);
}