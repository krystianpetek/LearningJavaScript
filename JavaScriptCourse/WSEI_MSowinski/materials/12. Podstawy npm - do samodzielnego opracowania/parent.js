require('./child');
const validator = require('validator');
console.log('Witaj w pliku parent.js');
const isOk = validator.isEmail('foo@op.pl');
console.log(isOk);