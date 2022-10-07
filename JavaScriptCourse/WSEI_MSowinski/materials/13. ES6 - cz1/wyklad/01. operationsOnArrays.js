// node 01. operationsOrArrays.js
/* jshint -W104 */

let arr = [4, 1, 6, 2];
function fn(a, b) {
    return a - b;
}

arr.sort(fn);
console.log(arr);

// Array.sort( sort take functions as parameter, this means, that you can implement your algorithm for sort array )
let stringArr = ["aa", "bbbb", "c", "ddd"];
function strFn(a, b) {
    return a.length - b.length;
}
stringArr.sort(strFn);
console.log(stringArr);


// functional programming
function calc(arg1, arg2, callbackFunc) {
    let numberA = parseInt(arg1, 10);
    let numberB = parseInt(arg2, 10);
    callbackFunc(numberA, numberB);
}

calc('2', '3', (a, b) => console.log(a + b));
calc('2', '3', function (a, b) {
    console.log(a * b);
});


// imperative programming
stringArr = ["aa", "bbbb", "c", "ddd"];

function bubbleSort(array) {
    let length = array.length;
    for (let i = length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (array[j - 1].length > array[j].length) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort(stringArr));
