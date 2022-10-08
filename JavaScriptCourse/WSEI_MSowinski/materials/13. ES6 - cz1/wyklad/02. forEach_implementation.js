// node 02. forEach_implementation.js
/* jshint -W104 */

// Array.forEach()
const arrayOfNumber = [1, 2, 3];
function fn(element, index, array) {
    console.log('[' + index + '] = ' + element);
}
arrayOfNumber.forEach(fn);

// forEach() implementation
Array.prototype.forEach2 = function (func) { // we extend object Array by one method using prototype
    if (typeof func !== 'function') { // we check using 'typeof' if  that parameter is function
        throw (error); // if parameter isn't function, throw Exception
    }
    let length = this.length; // we take the length

    for (let i = 0; i < length; i++) { // iterate though array
        func(this[i], i, this); // call function
    }
};

arrayOfNumber.forEach2((e, i) => console.log(e + ' = array[' + i + ']'));