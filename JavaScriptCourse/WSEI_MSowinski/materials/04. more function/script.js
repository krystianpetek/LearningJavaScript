doTea(); // ok, hoisting

function doTea() {
    console.log('pour water into keetle');
    console.log('pour the tea into a glass');
    console.log('boil the water');
    console.log('pour the tea');
}


function sayGlobalName() {
    console.log(`global ${name}`);
}
function sayLocalName() {
    var name = 'Janek';
    console.log(`local ${name}`);
}

var name = 'Adam'; // global variable
sayGlobalName();
sayLocalName();
console.log(name);

// call stack
function foo() {
    let i = 0;
    let j = bar(i);
    return j;
}
function bar(i) {
    return i + 5;
}
function basic() {
    let j = foo();
    return j;
}
basic();
// JavaScript context => basic => foo => bar => bar => foo => basic => and finally JavaScript context

tea(); // error, used before init
const tea = doTea;
