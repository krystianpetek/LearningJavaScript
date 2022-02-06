// zmienną let sprawdza czy zmienna o tej nazwie już istnieje, var może deklarować zmienną X razy
let catName = "Quincy";
var quote;
catName = "Beau";

function catTalk() {
    "use strict"; // łapie pospolite błędy koderskie i niebezppieczne akcje, np niezadeklarowanie zmiennej
}

function checkVarScope() {
    "use strict";
    console.log("VAR");
    var i = "function scope";
    if (true) {
        var i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkVarScope();

function checkLetScope() {
    "use strict";
    console.log("LET");
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkLetScope();

// const - readonly, ale można zmienić dane w tablicy
const s = [5, 7, 2];

function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

// freeze object
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // zamrozenie obiektu

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// funkcja anonimowa
var magicAnon = function () {
    return Date();
}
// anonimowa przy uzyciu lambdy
const magicLambda = () => new Date();
console.log(magicLambda().toDateString());

// lambda z parametrami, laczenie tablic
const myConcatenate = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcatenate([1,2], [3,4,5]));

// filter
const realNumberArray = [4,5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter( num => Number.isInteger(num) && num > 0).map(num => num*num);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// default value in parameter
const increment = (function(){
    return function increment(number, value=1)
{
    return number + value;
};
})();
console.log(increment(5));
console.log(increment(5,2));

// multiargument, ... rest operator
const sum = (function(){
    return function sum(...args)
    {
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,3,4,5));

// kopiowanie prze spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function()
{
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);

