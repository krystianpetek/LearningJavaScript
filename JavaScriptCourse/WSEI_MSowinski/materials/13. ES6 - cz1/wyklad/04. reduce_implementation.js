// node 04. redue_implementation.js
/* jshint -W104 */

const array = [1, 2, 3, 4];
function fn(prev, curr, index, array) {
    return prev + curr;
}
let result = array.reduce(fn);
console.log(result);


Array.prototype.reduce2 = function (func, initialValue = null) {
    if (typeof func !== 'function') {
        throw (error);
    }

    let previousValue, startIndex;

    if (initialValue === 'undefined') {
        previousValue = this[0];
        startIndex = 1;
    }
    else {
        previousValue = initialValue;
        startIndex = 0;
    }

    const length = this.length;
    for (let i = startIndex; i < length; i++) {
        let result = func(previousValue, this[i], i, this);
        previousValue = result;
    }
    return previousValue;
};

const resultOfReduce = array.reduce2((a, b) => a + b);
console.log(resultOfReduce);
