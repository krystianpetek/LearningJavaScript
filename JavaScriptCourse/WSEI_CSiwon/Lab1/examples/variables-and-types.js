/**
 * Zmienne typy number i BigInt
 */
let hexVar = 0xFF                               //w kodzie szestnastkowym
console.dir(hexVar)
let binVar = 0b011001100                        //w kodzie binarnym
console.log(binVar)
let octVar = 011                                //w kodzie ósemkowym
console.dir(octVar)
let doubleVar = 1.67;
console.log(doubleVar);
let earthMass = 6e24;                            //notacja wykładnicza
console.log(earthMass);
let bigIntVar = 100000000000000000000000n       //BigInt
console.log(bigIntVar)
let booleanVar = true
console.log(booleanVar);
console.dir(bigIntVar / 10000n)                 //operacje na BigInt
/**
 * Zmienne tpu String
 */
let stringVar1 = "ABCD"                         //podwójny apostrof
let stringVar2 = 'ABCD'                         //popjedynczy apostrof
let stringVar3 = `ABCD`                         //backtick, interpolacja łańcuchów
/**
 * Zmienne typu boolean
 */
let active = false
/**
 * Zmienne undefined i null
 */
let undefindeVar;
console.log(undefindeVar)
let nullVar = null;
console.log(nullVar)
/**
 * Stałe - nie można pominąć ich inicjacji oraz wykonać ponownego przypisania
 */
const earthMassConstant = 6e24;
const undefindeConstant;                        //błąd SyntaxError
earthMassConstant = 5                           //błąd TypeError