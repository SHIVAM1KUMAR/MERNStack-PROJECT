// controllers/studentController.js

const Student = require("../models/studentModel");

// Add student
const addStudent = async (req, res) => {
  try {
    const { name, rollNumber, grades } = req.body;

    const existing = await Student.findOne({ rollNumber });
    if (existing) {
      return res.status(400).json({ message: "Roll number already exists." });
    }

    const gradeValues = Object.values(grades);
    const average = gradeValues.reduce((a, b) => a + b, 0) / gradeValues.length;
    const result = average >= 50 ? "Passed" : "Failed";

    const student = new Student({ name, rollNumber, grades });
    await student.save();

    res.status(201).json({ average: average.toFixed(2), result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get student by name
const getStudentResult = async (req, res) => {
  try {
    const { name } = req.params;
    const student = await Student.findOne({ name: { $regex: new RegExp(name, "i") } });

    if (!student) return res.status(404).json({ message: "Student not found" });

    const grades = Object.values(student.grades);
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    const result = average >= 50 ? "Passed" : "Failed";

    res.json({
      name: student.name,
      rollNumber: student.rollNumber,
      grades: student.grades,
      average: average.toFixed(2),
      result
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete student by roll number
const removeStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ rollNumber: req.params.roll });
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json({ message: "Student removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get student with highest average
const getTopper = async (req, res) => {
  try {
    const students = await Student.find();

    if (!students || students.length === 0)
      return res.status(404).json({ message: "No students found" });

    let topper = null;
    let maxAvg = 0;

    students.forEach((student) => {
      const grades = Object.values(student.grades);
      const avg = grades.reduce((a, b) => a + b, 0) / grades.length;

      if (avg > maxAvg) {
        maxAvg = avg;
        topper = student;
      }
    });

    res.json({
      name: topper.name,
      rollNumber: topper.rollNumber,
      average: maxAvg.toFixed(2)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addStudent,
  getStudentResult,
  removeStudent,
  getTopper
};
