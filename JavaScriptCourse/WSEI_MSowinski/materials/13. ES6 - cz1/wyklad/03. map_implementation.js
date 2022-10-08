// node 03. map_implementation.js
/* jshint -W104 */

// Array.map()
const arrayOfNumber = [1, 2, 3];
function fn(element, index, array) {
    return element * index;
}
const result = arrayOfNumber.map(fn);
console.log(result);

// Array.map() - implementation
Array.prototype.map2 = function (func) {
    if (typeof func !== 'function') {
        throw (error);
    }

    let arr = [];
    let length = this.length;

    for (let i = 0; i < length; i++) {
        arr[i] = func(this[i], i, this);
    }
    return arr;
};

const multiplicationBy20 = arrayOfNumber.map2(el => console.log(el * 20));