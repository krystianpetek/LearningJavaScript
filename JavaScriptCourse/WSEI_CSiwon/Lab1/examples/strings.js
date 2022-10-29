/**
 * Podstawowe funkcje łańcuchowe, w większości nie powodują zmiany łańcucha na którym się jej wywołuje,
 * ale zwracany jest nowy łańcuch.
 */
let tokens = 'A, B, C, D, E, F';
console.log(tokens.substring(0, 2));        //zwraca fragment łańcucha od znaku 0 do 1
console.log(tokens.includes('A'));          //czy w łańcuchu jest znak 'A'
console.log(tokens.startsWith('B, C'));     //czy łańcuch zaczyna się łańcuchem 'B, C'
console.log(tokens.endsWith('F'));          //czy łańcuch kończy się łańcuchem 'F'
console.log(tokens.replace(',', ';'));      //zamienia pierwsze wystąpienie podłańcucha ',' na łańcuch ';'
console.log(tokens.repeat(2));              //powtarza łańcuch 2 razy
console.log(tokens.toUpperCase());          //zwraca łańcuch dużymi literami
console.log(tokens.toLowerCase());          //zwraca łańcuch małymi literami 
console.log(tokens.padStart(20, ' '));      //dopełnia na początku łańcuch spacjami, aby otrzymać łańcuch o długości 50 znaków
console.log(tokens.padEnd(20, '-'));        //dopełnia na początku łańcuch myślnikami, aby otrzymać łańcuch o długości 50 znaków
/**
 * Interpolacja łańcuchów
*/
let interpolatedStringVar = `Wartość zmiennej hexVar = ${hexVar} \${hexVar}`;    //w miejscu ${hexVar} zostanie wstaiona wartość w zmiennej

/**
 * Znaki specjalne
 * \t    - tabulator
 * \n    - nowy wiersz
 * \\    - backslash
 */
let escapedString = "colum1\tcolumn2\tcolumnt3\nnext line \x65";
/**
 * Funkcje zwracające łańcuchy dla typu number
 */
let n = 12345.567899
console.log(n.toFixed(2));              //zamiana liczby na łańcuch z określoną liczbą cyfr po przecinku
console.log(n.toPrecision(8));          //zamiana liczby na łańcuch z określoną precyzją, liczbą wszystkich cyfr
console.log(n.toExponential(4));        //zamiana liczby na łańcuch w postaci wykładniczej zokreśloną liczbą cyfr po przecinku
console.log(n.toLocaleString('EN'));    //zamiana liczby na łańcuch zgodnie z ustawieniami lokalnymi
console.log(n.toString(2));             //zamiana liczby na łańcuch w podanym systemie liczbowym

