//complete this code
class Person {
	constructor(name, age) {
    this.Pname = name;
    this.Page = age;
  }

  get name() {
    return this.Pname;
  }

  set age(age) {
    this.Page = age;
  }

  get age() {
    return this.Page;
  }
}

class Student extends Person {
study() {
    console.log(`${this.Pname} is studying.`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.Pname} is teaching.`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
