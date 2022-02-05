// zmienną let sprawdza czy zmienna o tej nazwie już istnieje, var może deklarować zmienną X razy
let catName = "Quincy";
var quote;
catName = "Beau";
function catTalk(){
    "use strict"; // łapie pospolite błędy koderskie i niebezppieczne akcje, np niezadeklarowanie zmiennej
}

function checkVarScope(){
    "use strict";
    console.log("VAR");
    var i = "function scope";
    if(true)
    {
        var i = "block scope";
        console.log("Block scope i is: ",i);
    }
    console.log("Function scope i is: ",i);
    return i;
}
checkVarScope();

function checkLetScope(){
    "use strict";
    console.log("LET");
    let i = "function scope";
    if(true)
    {
        let i = "block scope";
        console.log("Block scope i is: ",i);
    }
    console.log("Function scope i is: ",i);
    return i;
}
checkLetScope();

// const - readonly, ale można zmienić dane w tablicy
const s = [5,7,2];
function editInPlace(){
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

// freeze object
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // zamrozenie obiektu

    try{
        MATH_CONSTANTS.PI = 99;
    }
    catch(ex){
    console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// https://youtu.be/PkZNo7MFNFg?t=10037