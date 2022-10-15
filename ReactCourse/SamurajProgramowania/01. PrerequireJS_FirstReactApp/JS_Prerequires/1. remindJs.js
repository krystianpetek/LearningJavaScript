
const argument = "arg";
// zwykla metoda
let fn = function (item) {
    console.log("Podane argumenty to: " + item);
};
fn(argument);

// funkcja strzałkowa
fn = (item) => {
    console.log("Podane argumenty to: " + item);
};

// to samo
fn = (item) => console.log("Podane argumenty to: " + item);

// to samo
fn = (item) => console.log("Podane argumenty to: " + item);

// to samo
fn = (item) => {
    return console.log("Podane argumenty to: " + item);
};

// to samo
fn = (item) => console.log("Podane argumenty to: " + item);
fn(argument);

// 2 parametry
let fn2 = (item, item2) => {
    return `Podany argument to: ${item} i ${item2}`;
};

// to samo
fn2 = (item, item2) => (`Podany argument to: ${item} i ${item2}`);

const result = fn2("Hej!", "Ho!");
console.log(result);

const btn = document.querySelector('button');
btn.addEventListener('click', () => console.log(this));
btn.addEventListener('click', function () {
    console.log(this);
});

let users = ['Teresa', 'Jozef', 'Patrycja', 'Krystian'];
const usersString = users.join(' '); // join
console.log(usersString);

let additionalUser = 'Wojciech';
const usersWithOneMore = users.concat(additionalUser); // concat
console.log(usersWithOneMore);

const allUsers = [...usersWithOneMore, 'Karolina']; // operator spread
console.log(allUsers);

const lowerLetterUsers = allUsers.map(user => user[0].toLowerCase() + (user.substring(1, user.length)));
console.log(lowerLetterUsers);

allUsers.forEach(user => {
    user = user.toUpperCase();
    console.log(user);
});

const numbers = [2, 3, 4];
let doubleNumber = numbers.map(number => {
    return number * 2; // trzeba pisać return jawnie
});
// lub
doubleNumber = numbers.map(number => number * 2); // return niejawny
console.log(doubleNumber);

const usersAge = [20, 21, 23, 43];
let usersTotalAge = 0;
usersAge.forEach(age => {
    console.log(`W przyszłym roku użytkownik będzie miał ${age + 1} lat`)
    usersTotalAge += age;
});
console.log(usersTotalAge);


// new DOM
const section = document.createElement('section');
usersAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<h1> Użytkownik ${index + 1}</h1>
        <p>wiek: ${age}</p>`
    );
    if (index === array.length - 1) {
        document.body.appendChild(section);
    }
});

// filter
const nameWith8Letter = allUsers.filter(user => user.length === 8);
console.log(nameWith8Letter);

// filter with indexOf
const nameWithLetterK = allUsers.filter(user => {
    return user.toLowerCase().indexOf("k") > -1;
});
console.log(nameWithLetterK);

// findIndex()
const customers = [
    { name: "Adam", age: 67 },
    { name: "Basia", age: 27 },
    { name: "Marta", age: 17 }
];

const isUsersAdult = customers.findIndex(customer => {
    return customer.age < 18;
});
console.log(isUsersAdult);

// find()
const firstAdultUser = customers.findIndex(customer => customer.age >= 18);
console.log(firstAdultUser);