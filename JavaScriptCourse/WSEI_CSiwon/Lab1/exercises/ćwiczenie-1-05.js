/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 34;
let m = 190;
let progressBar = ""

progressBar += "|";
const computedValue = Math.floor((n / m) * 50);
for (let i = 0; i < 50; i++) {

    if (i < computedValue) {
        progressBar += "#";
        continue;
    }
    progressBar += " ";
}
progressBar += "|";

progressBar += "\n0%";
for (let i = 2; i < 47; i++) {

    if (i === 24) {
        progressBar += "50%";
    }
    if (i === 25 || i === 26) { continue; }
    progressBar += " ";
}
progressBar += "100%";
console.log(progressBar)