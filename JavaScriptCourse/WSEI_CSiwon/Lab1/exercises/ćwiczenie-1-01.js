/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 1;
let radius = '';
if (area <= 0) {
    radius = "error";
}
radius = Math.sqrt((area / Math.PI), 2).toFixed(2);
console.log(radius)