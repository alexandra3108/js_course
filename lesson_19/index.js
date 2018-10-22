function Human(name, age) {
    this.name = 'Oleksandra'; 
    this.age = 28;
}

Human.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`)
};

function AlevelStudent (name,age,marks) {
	this.name = 'Oleksandra'; 
    this.age = 28;
    this.marks =[1, 2, 3, 4, 5];

AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;

AlevelStudent.prototype.averageMark = function() {
	let sum = 0;
	let result = 0;
	for(let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return result = sum / this.marks.length;
console.log(averageMark)
}