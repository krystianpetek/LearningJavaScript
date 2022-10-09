console.log('task 00');
const Students = function (students) {
	this.names = students;
	this.numberOfLetters = [];
};


Students.prototype.countLetters = function () {
	this.numberOfLetters = this.names.map(a => a.length);
};

const students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);
