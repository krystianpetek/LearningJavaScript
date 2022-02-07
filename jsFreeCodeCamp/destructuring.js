
// destructuring assignment - destrukturyzacja zmiennych?
const AVG_TEMP = {today: 77.5, tomorrow: 79};
function getTempOfTomorrow(avgTEMP)
{
    "use strict";
    const {tomorrow : tempOfTomorrow} = avgTEMP;
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMP));

// destrukturyzacja zagnieżdzeń
const LOCAL_FORECAST = {
    today : {min:72, max:83},
    tomorrow : {min:73.3, max: 84.6}
};
function getMaxOfTomorrow(forecast)
{
    "use strict";
    const {tomorrow : {min: minOfTomorrow}} = forecast;
    return minOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST));

// destrukturyzacja danych z tablicy
const [z,x, , y] = [1,2,3,4,5,6];
console.log(z,x,y);

// zamiana wartosci zmiennych funkcją anonimową automatyczną
let a = 8, b = 6;
console.log("a:",a,"b:",b);
(()=>{
    "use strict";
    [a,b] = [b,a];
})(); 
console.log("a:",a,"b:",b);

//destrukturytzacja danych z operatorem rest, w celu ponownego przypiswania danych
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){ 
    const [ , , ...arr] = list; // usuwanie 2 pierwszych elementow
    return arr;
}
const array = removeFirstTwo(source);
console.log("array deleted:",array);
console.log("array source:",source);

// destrukturyzacja przypisania aby przekazac dane jako parametr wywolania funkcji
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function()
{
    return function half({max,min}){
        return (max + min)/2.0;
    }
})();
console.log(stats);
console.log(half(stats));