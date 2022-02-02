function funcArray(){
var myArray = [["John",23], ["cat",2]];
myArray.push(["dog",3]);
var lastPop = myArray.pop();
var firstShift = myArray.shift();
myArray.unshift(["Krystian",23]);
console.log(myArray);
};
// funcArray();

var myList = [
    ["cereal",3],
    ["milk",2],
    ["bananas",3],
    ["juice",2],
    ["eggs",12]
];

function myFunctionWithArgs(a, b){
    console.log(a + b);
}
// myFunctionWithArgs(10, 5);

// global var
var myGlobal = 10;

function fun1(){
    oopsGlobal = 5; // jesli nie uzyjemy var, to zmienna jest globalna
}
fun1();

function fun2(){
    var output = "";
    if(typeof myGlobal != undefined)
    {
        output += "myGlobal: " + myGlobal;
    };
    if( typeof oopsGlobal != undefined)
    {
        output += "\noopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun2();

// local i global var
var outerWear = "T-Shirt(global)";
function myOutfit(){
    var outerWear =  "sweater(local)";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// queue
function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+ JSON.stringify(testArr));

function equalityTest(a,b)
{
    if(a == b){
        return console.log( a + " == " + b + " = "+true);

    }
    return console.log( a + " == " + b + " = "+false);

}
function strictEqualityTest(a,b){
    if(a === b)
    {
        return console.log( a + " === " + b + " = "+true);
    }
    return console.log( a + " === " + b + " = "+false);

}
equalityTest(3,3);
equalityTest(3,'3');
strictEqualityTest(3,3);
strictEqualityTest(3,'3');

