// function display console log
function display(name) {
    console.log(name);
}

// admin object with method inside (this in context)
const admin = {
    name: 'Janusz',
    age: 67,
    sayName: function () {
        console.log(this.name);
    }
}
admin.sayName();


let cat = {
    name: 'Filemon'
};
let dog = {
    name: 'Reksio'
}

// this without context, describe globally object 'window'
function sayName() {
    console.log(this.name);
}
cat.someF = sayName;
dog.someF = sayName;
cat.someF();
dog.someF();

// constructor function, name with Uppercase !
function User(newName) {
    this.name = newName;
    this.type = 'basic';
    this.saySomething = function () {
        console.log('Everyone knows all about my direction ' + this.name);
    }
}
let user11 = new User('Ala');
let user12 = new User('Janek');
let user13 = new User('Bartek');
display([user11, user12, user13]);
user11.saySomething();
user12.saySomething();
user13.saySomething();

// new => constructor - Constructor function
function Car(type, hp, color) {
    this.type = type;
    this.hp = hp;
    this.color = color;
}
const fiat = new Car('fiat', 125, 'red');
console.log(`${fiat.type} ${fiat.hp} ${fiat.color}`);