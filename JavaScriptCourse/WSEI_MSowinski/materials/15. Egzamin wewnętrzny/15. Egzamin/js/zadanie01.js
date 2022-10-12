function getSqrt(n) {
    if (!isNaN(n) && n > 0)
        return Math.sqrt(n);
    throw ('error');
}
const sqrtFrom4 = getSqrt(4);
const sqrtFrom16 = getSqrt(16);

console.log('sqrt from 4: ', sqrtFrom4);
console.log('sqrt from 16: ', sqrtFrom16);