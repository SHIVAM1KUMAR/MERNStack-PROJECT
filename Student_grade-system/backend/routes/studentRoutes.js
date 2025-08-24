// routes/studentRoutes.js

const express = require("express");
const router = express.Router();
const {
  addStudent,
  getStudentResult,
  removeStudent,
  getTopper
} = require("../controllers/studentController");

router.post("/add", addStudent);
router.get("/result/:name", getStudentResult); // SEARCH BY NAME
router.delete("/remove/:roll", removeStudent);
router.get("/highest", getTopper);

module.exports = router;
