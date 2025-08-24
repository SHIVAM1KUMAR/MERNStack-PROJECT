const StudentModel = require("../models/studentModel");
const Student = require("./Student");

class School {
  async addStudent(name, rollNumber, grades) {
    const student = new Student(name, rollNumber, grades);
    const dbStudent = new StudentModel({ name, rollNumber, grades });
    await dbStudent.save();
    return {
      message: "Student added successfully",
      average: student.getAverage(),
      result: student.hasPassed()
    };
  }

  async removeStudent(rollNumber) {
    const result = await StudentModel.deleteOne({ rollNumber });
    return result.deletedCount > 0
      ? { message: "Student removed" }
      : { message: "Student not found" };
  }

  async getStudentByName(name) {
    const studentData = await StudentModel.findOne({ name });
    if (!studentData) return null;

    const student = new Student(studentData.name, studentData.rollNumber, studentData.grades);
    return {
      name: student.name,
      average: student.getAverage(),
      result: student.hasPassed()
    };
  }

  async getHighestAverageStudent() {
    const students = await StudentModel.find();
    let topStudent = null;
    let highestAvg = 0;

    students.forEach(data => {
      const student = new Student(data.name, data.rollNumber, data.grades);
      const avg = parseFloat(student.getAverage());
      if (avg > highestAvg) {
        highestAvg = avg;
        topStudent = student;
      }
    });

    return topStudent
      ? {
          name: topStudent.name,
          average: highestAvg.toFixed(2)
        }
      : null;
  }
}

module.exports = new School();
