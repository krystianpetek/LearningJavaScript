/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * #####
 */
let height = 7;
let triangle = '';
for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
        triangle += "#";
    }
    triangle += "\n";
}
console.log(triangle);