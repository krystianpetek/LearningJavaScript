let firstVariable = 6;
const secondVariable = 10;

for (let x = 0; x < 10; x++) {
    let firstVariable = 10;
    firstVariable++;
    console.log(firstVariable);
}
console.log(firstVariable);

const obj = {
    a: firstVariable++,
    firstVariable: firstVariable,
    func: function (a, b) {
        console.log('');
    }
};

obj.xa = function () {
    console.log('xd');
};

console.log(obj);
console.log(firstVariable);

// task 03
{
    for (var i = 0; i < 10; i++) { }
    console.log(i); // 10

    for (let j = 0; j < 10; j++) { }
    // console.log(j); // error, not defined
}

// task 05
{
    (() => console.log('task 05, Hello World!'))(); // IIFE write 'hello world' in console
}

// task 06
{
    ((name) => console.log(name))('task 06, Krystian'); // IIFE with parameter
}