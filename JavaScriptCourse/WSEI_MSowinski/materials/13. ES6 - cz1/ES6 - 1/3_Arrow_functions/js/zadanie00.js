var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {

}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);
