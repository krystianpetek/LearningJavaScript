/**
 * Tablica - więcej o tablicach będzie po wprowadzeniu funkcji i obiektów
 */
let arr1 = []                         //pusta tablica
let arr2 = ['a', 'b', 'c', 'd', 'e']  //zainicjowana tablica

/**
 * Instrukcja for
 */
for (let i = 0; i < 10; i++) {
    console.log(arr2[i])
}
/**
 * Instrukcja for each
 */
for (let item of arr2) {
    console.log(item)
}
/**
 * Instrukcja for in - iterowanie po indeksach, właściwościach itd.
 */
for (let i in arr2) {
    console.log(i)
}
/**
 * Instrukcja while - losowanie kolejnych liczb mniejszyć od 0.8
 */
console.log("Instrukcja while")
let randomNumber = Math.random();
while (randomNumber < 0.8) {
    console.log(randomNumber = Math.random())
}
/**
 * Instrukcja do .. while - losowanie kolejnych liczb razem z pierwszą liczbą większą od 0.8
 */
console.log("Instrukcja do .. while")
do {
    console.log(randomNumber = Math.random())
} while (randomNumber < 0.8)
/**
 * Instrukcje break i continue
 */
console.log("Instrukcja break")
while (true) {
    if (randomNumber > 0.8) {
        break;                  //przerwanie instrukcji while po napotkaniu liczby większej od 0.8
    }
    console.log(randomNumber = Math.random())
}
console.log("Instrukcja continue")
for (let i = 0; i < 10; i++) {
    randomNumber = Math.random()
    if (randomNumber > 0.8) {
        continue            //pomijamy wyświetlanie liczb większych od 0.8
    }
    console.log(randomNumber)
}