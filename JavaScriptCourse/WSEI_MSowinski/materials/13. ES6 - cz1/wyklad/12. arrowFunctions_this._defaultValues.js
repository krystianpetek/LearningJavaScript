let addition = (x, y) => x + y;

// function expression
let foo = function (a, b) {
    if (a > b)
        return a;
    return b;
};

// arrow functions => without parameters
let variantOne = () => 1;

// arrow functions => one parameter but without instruction in body
let variantTwo = (a) => a * 2;

// arrow functions => one parameter and instruction in body
let variantThree = a => {
    return a * 2;
};

// arrow functions => a multiple parameters and multiple instruction in body
let variantFour = (a, b) => {
    if (a > b)
        return a;
    return b;
};

// arrow functions => Immediately Invoked Function Expression
const result = ((a, b) => a * b)(4, 2);

let array = [1, 2, 3];
let newArray = array.map(a => a * 2);
array.forEach((item, index) => newArray.push(item * index));
console.log(newArray);

// ==========================================================================================================================================

// arrow functions & this ( VERY IMPORTANT ! )


// problems with this keyword
const Basket = function (prices) {
    this.prices = prices; // array storing prices
    this.sum = 0; // sum of all prices
};

Basket.prototype.calculatePrices = function () {
    this.prices.forEach(function (element) {
        this.sum += element;
    }, this); // pass in forEach params object, which points this to inside function
    console.log(this.sum.toFixed(2)); // this points to the object we have created
};

const basket = new Basket([9.99, 7.77]);
basket.calculatePrices();



// simple example using assign this to variable
const SimpleBasket = function (prices) {
    this.prices = prices;
    this.sum = 0;
};

SimpleBasket.prototype.calculatePrices = function () {
    let self = this;
    this.prices.forEach(function (element) {
        self.sum += element;
    });
    console.log(this.sum.toFixed(2));
};

const simpleBasket = new SimpleBasket([9.99, 7.77]);
simpleBasket.calculatePrices();



// arrow functions not change context for function - WARNING
const ArrowBasket = function (prices) {
    this.prices = prices;
    this.sum = 0;
};

ArrowBasket.prototype.calculatePrices = function () {
    this.prices.forEach(
        element => this.sum += element // arrow functions not change value this
    );
    console.log(this.sum.toFixed(2));
};

const arrowBasket = new ArrowBasket([9.99, 7.77]);
arrowBasket.calculatePrices();


// default values in ES6
let fn = (a = 10, b = 5) => {
    console.log(a, b);
};
fn(12); // 12 5
fn(); // 10 5
fn(undefined, 10); // 10 10

// default values in ES5
function fn1(a, b) { // here is problem with 0 and ""
    a = a || 10;
    b = b || 5;
    console.log(a, b);
}
fn1(4, 12); // 4 12
fn1(); // 10 5

// default values in ES5 better version
function fn2(a, b) {
    a = typeof a !== 'undefined' ? a : 10;
    b = typeof b !== 'undefined' ? b : 5;
}