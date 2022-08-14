// "use strict"
const fn = function(){
    console.log(this);
}
fn();

const car = {
    brand: 'opel',
    age: 2018,
    showAge() {
        console.log(`samochód z ${this.age} roku`);
    },
    showBrand: function() {
        console.log(`samochód marki ${this.brand}`);
    },
    showArrowBrand: () => {
        console.log(`global this ${this.brand}`);
    }
}

car.showAge();
car.showBrand();
car.showArrowBrand();

// next this problem
const dog = {
    name: 'rocky',
    showName() {
        console.log(`imię psa to: ${this.name}`);
    }
}
dog.showName();

const dogName = dog.showName;
dogName(); // arrow function

// another this problem - solved
let cat = {
    kids: ['lucek','łapciuch'],
    showKidsNames(){
        console.log(`kot ma potomstwo: ${this.kids}`);
        const showKidsNumber = function() {
            console.log(this.kids.length);
        }.bind(this); // BIND - ważne
        showKidsNumber(); // cannot read property kids
    }
}
cat.showKidsNames();

// another 2 this problem - solved
cat = {
    kids: ['lucek','łapciuch'],
    showKidsNames(){
        console.log(`kot ma potomstwo: ${this.kids}`);
        const showKidsNumber = () => {
            console.log(this.kids.length);
        }; // BIND - ważne
        showKidsNumber(); // cannot read property kids
    }
}
cat.showKidsNames();