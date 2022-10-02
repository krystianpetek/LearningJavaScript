// prototype
function User(newName) {
    this.name = newName;
}
User.prototype.type = 'basic';
User.prototype.saySomething = function () {
    console.log('Hi ' + this.name);
}

let users = [];
for (let i = 0; i < 1000; i++) {
    users.push(new User('user' + i));
}

let user1 = new User('Ala');
let user2 = new User('Janek');
console.log(user1.type, user2.type);
user1.saySomething();
user2.saySomething();
