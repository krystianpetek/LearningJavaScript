/**
 * Zdefiniuj funkcję, która zwraca część wspólną dwóch tablic bez powtórzeń.
 * Wynik funkcja należy zwrócić jako zbiór (obiekt klasy Set);
 * Przykład
 * const a1 = ["adam", "ewa", "karol", "beata", "ewa"];
 * const a2 = ["karolina", "eliza", "tomek", "ewa", "karol", "eliza"];
 * const un = union(a1, a2);
 * console.log(un)
 * Set(2) {size: 2, ewa, karol} 
 */

function union(a1, a2) {
    return new Set(a2.filter(arr => a1.includes(arr)));
}

const a1 = [...Array(100_000).keys()];
const a2 = [3, 1, 0, 0, 0, 0, 1, 2];
const start = performance.now();
const r = union(a1, a2);
const end = performance.now();
try {
    if (r.has(3) && r.has(1) && r.has(0) && r.size === 4 && r.has(2)) {
        console.log("Test 21 passed");
    } else {
        console.log("Test 21 failed");
    }
} catch (e) {
    console.log("Test 21 failed");
}
if (end - start < 20) {
    console.log("Test 22 passed");
} else {
    console.log("Test 22 failed");
}