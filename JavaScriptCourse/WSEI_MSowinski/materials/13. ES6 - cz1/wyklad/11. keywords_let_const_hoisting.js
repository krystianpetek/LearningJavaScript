// let
{
    let x = 5;
    console.log(x);
}
// console.log(x);  // error x above scope, not defined



let c = 3;
let v = 4; // global variable
{
    let v = 5; // local variable
    console.log(c, v); // 3, 5
}
console.log(c, v); // 3, 4


// const
{
    const num = 1; const arr = [1, 2];
    // num = 3; // error
    // num = arr; // error
    // arr = [3, 5]; // error
}

// but you can modify value inner const object
{
    const obj = {
        a: 1
    };
    obj.b = 2;
    console.log(obj); // {a: 1, b: 2}

    const array = [1, 2, 3];
    array.push(4);
    console.log(array); // [1, 2, 3, 4]
}

// var hoisting

console.log(x); //undefined
doTea(); // ok

function doTea() {
    console.log("Nalej wodę");
    console.log("Wsyp do kubka herbatę");
    console.log("Zagotuj wodę");
    console.log("Zalej herbatę");
}
var x = 10;

// hoisting in let or const always ensure error
// TDZ - Temporal Dead Zone


function foo() {
    // declaration var scope using function
    var x = 5;
    console.log(x);
}
foo(); // 5
console.log(x); // undefined


// IIFE - warning!
var x = 3;
(
    function func(param) {
        var x = 5;
        console.log(x);
    }
)(x);
console.log(x); // 3 !!