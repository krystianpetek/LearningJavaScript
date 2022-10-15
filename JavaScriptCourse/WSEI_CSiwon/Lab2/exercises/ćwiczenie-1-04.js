/**
 * Napisz skrypt, który generuje losowy łańcuch o długości z zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */
let length = 5;
let randomString = '';
const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < length; i++) {
    randomString += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}
console.log(randomString);