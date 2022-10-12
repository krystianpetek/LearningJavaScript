function concatArray(array1, array2) {
    return [...array1, ...array2];
};

const concattedArray = concatArray([1, 3], [3, 5]);
console.log(concattedArray);