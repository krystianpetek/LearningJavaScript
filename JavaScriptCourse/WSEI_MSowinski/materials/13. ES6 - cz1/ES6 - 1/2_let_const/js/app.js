let firstVariable = 6;
const secondVariable = 10;

for (let i = 0; i < 10; i++) {
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
