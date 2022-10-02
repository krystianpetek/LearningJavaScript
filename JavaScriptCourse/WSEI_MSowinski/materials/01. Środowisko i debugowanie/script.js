let nameGlobal = 'Krystian';

function sayHello(name) {
    let greeting = 'Hello';
    name = `${greeting} ${name}`;
    // debugger;
    return name;
}

const app = document.querySelector('#root');
app.innerHTML = sayHello('Krystian');
