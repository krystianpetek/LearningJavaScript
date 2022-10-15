/**
 * Instrukcja swicth
 */
let englishDegree = 'D'
let polishDegree
switch (englishDegree.toUpperCase()) {
    case 'A': polishDegree = 5.0
        break;
    case 'B': polishDegree = 4.5
        break;
    case 'C': polishDegree = 4.0
        break;
    case 'D': polishDegree = 3.5
        break;
    case 'E': polishDegree = 3.0
        break;
    case 'F': polishDegree = 2.0
        break;
    default: polishDegree = undefined;
}

console.log(polishDegree)