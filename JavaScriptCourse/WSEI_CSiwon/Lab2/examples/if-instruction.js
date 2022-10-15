/**
 * Instrukcja if
 */
let a = 7
let warunek = a > 5 && a < 10
if (warunek) {
    console.log(`Zmienna a = ${a} w zakresie!`)
} else {
    console.log(`Zmienna a = ${a} poza zakresem!`)
}
/**
 * Czy zmienna jest typu string i ma co najmniej 2 znaki?
 * Do imienia przypisz rózne wartość: udefined, null, "", 2 lub jakieś imię
 */
let firstName
if (firstName && firstName.length >= 2) {
    console.log("Imię poprawne")
} else {
    console.log("Imienia nie ma lub zbyt krótkie")
}

/** 
 * Czy zmienna jest liczbą różną od zera
 */
let counter = "1"
if (typeof counter === 'number' && counter) {
    console.log('Liczba różna od zera')
} else {
    console.log('To nie jest liczba, lub jest to liczba równa zero')
}