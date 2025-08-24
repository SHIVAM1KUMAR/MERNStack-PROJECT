class Student {
    constructor(name, rollNumber, grades) {
      this.name = name;
      this.rollNumber = rollNumber;
      this.grades = grades;
    }
  
    getAverage() {
      const gradeList = Object.values(this.grades);
      const sum = gradeList.reduce((a, b) => a + b, 0);
      return (sum / gradeList.length).toFixed(2);
    }
  
    hasPassed() {
      return this.getAverage() >= 50 ? "Passed" : "Failed";
    }
  }
  
  module.exports = Student;
  