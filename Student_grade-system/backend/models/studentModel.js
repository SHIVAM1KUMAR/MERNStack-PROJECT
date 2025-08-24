const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: Number,
  grades: {
    hindi: Number,
    english: Number,
    math: Number,
    science: Number,
    sst: Number
  }
});

module.exports = mongoose.model("StudentModel", studentSchema);
