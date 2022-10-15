/**
 * Operatory arytmetyczne
 */
console.log("Dodawanie i odejmowanie")
console.log(hexVar + binVar - octVar)
console.log("Mnożenie")
console.log(1000 * 60 * 60 * 24)
console.log("Dzielenie")
console.log(24 / 5)                             //dzielenie rzeczywiste
console.log("Reszta")
console.log(24 % 5)                             //reszta z dzielenia całkowitego
console.log("Inkrementacja i dekrementacja")
console.log(hexVar++)                           //inkrementacja postfiksowa, zmiana po odczycie wartości zmiennej
console.log(++hexVar)                           //inkrementacja prefiksowa, zmiana przed odczytem zmiennej
console.log("Przypisanie z operatorem")
console.log(hexVar += 2)                        //zwiększenie zmiennej o wartość, równoważnik hexVar = hexVar operator 2 np. hexVar *= 2, hexVar /= 2 itd.
console.log("Dzielenie całkowite")
console.log(Math.trunc(24 / 5))                 //dzielenie całkowite 
console.log(~~(-24 / 5))                        //dzielenie całkowite
console.log("Potęgowanie")
console.log(2 ** 4)                             //potęgowanie
console.log("Przesunięcia bitowe")
console.log((0b0001 << 2).toString(2))          //przesunięcie bitowe w lewo o dwie pozycje
console.log((0b1000 >> 2).toString(2))          //przesunięcie bitowe w prawo o dwie pozycje
console.log("Iloczyn bitowy")
console.log((0b0110 & 0b1111).toString(2))      //iloczyn bitowy
console.log("Alternatywa bitowa")
console.log((0b0110 | 0b1111).toString(2))      //alternatywa bitowa
console.log("Negacja bitowa")
console.log((~0b1001).toString(2))              //negacja bitowa
console.log("XOR")
console.log((0b1010 ^ 0b1100).toString(2))      //XOR   
console.log("Porównania")
/**
 * Operatory porównania
 */
console.log(1 == "1")                           //równość wartości
console.log(1 === "1")                          //równość wartości i typów
console.log(1 != "1")                           //czy różne wartości
console.log(1 !== "1");                          //czy różne wartości lub różne typy
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
/** 
 * Operator trójwartościowy
*/
let degree = 4
console.log(degree > 2 ? "zaliczone" : "niezaliczone");
/**
 * Typy prymitywne
 */
let age = 10;                                    //number
let big = 10000n;                                //BigInt    
let what;                                       //undefined
let nameVar = "name";                            //string
nameVar = null;                                  //null  
let v = Symbol('a')                             //Symbol                    
let active = true;                               //boolean
/**
 * Operator typeof
 */
console.log(typeof 1);                         //number
console.log(typeof "abc");                       //string
console.log(typeof ("" == ""));                  //boolean
console.log(typeof Symbol(4));                   //Symbol
console.log(typeof what);                        //undefined
console.log(typeof nameVar);                     //null
/**
 * Wartości specjalne
 */
console.log(2 / 0);                              //Infinity
console.log(0 / 0);                              //NaN
/**
 * Nieintuicyjne porównania
 */
let undef1;
let undef2;
console.log(null === null);
console.log((2 / 0) === (2 / 0));
console.log((0 / 0) === (0 / 0));
console.log(undef1 === undef2);
/**
 * Wartości konwertowane do false
 */;=
console.log("Wartości konwertowane na false");
console.log(!"");
console.log(!undefined);
console.log(!null);
console.log(!0);






