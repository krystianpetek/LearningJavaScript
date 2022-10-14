function funkcjaLosujaca(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(funkcjaLosujaca(1, 9));


function convertToInteger(string) {
    return parseInt(string, 16); // base:16
}
console.log(convertToInteger("AF"));

// operator trójargumentowy
function sprawdzRownosc(a, b) {
    return a === b ? true : false;
}
console.log(sprawdzRownosc(5, 1));

// tenary operator, zagnieżdzony
function sprawdzZnak(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(sprawdzZnak(0));
