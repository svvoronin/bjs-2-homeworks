function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (Mark) {
  if (this.marks === undefined) {
    this.marks = [Mark];
  } else {
    this.marks.push(Mark);
  }
};

Student.prototype.addMarks = function (...Marks) {
  if (this.marks === undefined) {
    this.marks = Marks;
  } else {
    this.marks.push(...Marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks !== undefined) {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  if (this.marks !== undefined && this.subject !== undefined) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  }
};
