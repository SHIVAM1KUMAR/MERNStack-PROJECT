const students = [];

document.getElementById("addStudentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const rollNumber = parseInt(document.getElementById("rollNumber").value);
  const marks = [
    parseFloat(document.getElementById("hindi").value),
    parseFloat(document.getElementById("english").value),
    parseFloat(document.getElementById("math").value),
    parseFloat(document.getElementById("science").value),
    parseFloat(document.getElementById("sst").value)
  ];

  const average = marks.reduce((a, b) => a + b, 0) / marks.length;
  const result = average >= 50 ? "Passed" : "Failed";

  students.push({ name, rollNumber, marks, average: average.toFixed(2), result });

  alert(`Student ${name} added successfully!`);
  e.target.reset();
});

function searchStudent() {
  const name = document.getElementById("searchName").value.trim().toLowerCase();
  const student = students.find(s => s.name.toLowerCase() === name);

  const resultBox = document.getElementById("searchResult");
  if (student) {
    resultBox.innerHTML = `
      <strong>Name:</strong> ${student.name} <br/>
      <strong>Roll No:</strong> ${student.rollNumber} <br/>
      <strong>Average:</strong> ${student.average} <br/>
      <strong>Result:</strong> ${student.result}
    `;
  } else {
    resultBox.innerHTML = "❌ Student not found.";
  }
}

function removeStudent() {
  const roll = parseInt(document.getElementById("removeRoll").value);
  const index = students.findIndex(s => s.rollNumber === roll);

  const resultBox = document.getElementById("removeResult");
  if (index !== -1) {
    const removed = students.splice(index, 1);
    resultBox.innerHTML = `✅ Removed ${removed[0].name} (Roll No: ${removed[0].rollNumber})`;
  } else {
    resultBox.innerHTML = "❌ Student not found.";
  }
}

function getTopper() {
  if (students.length === 0) {
    document.getElementById("topperResult").innerText = "No students available.";
    return;
  }

  const topper = students.reduce((top, curr) => (parseFloat(curr.average) > parseFloat(top.average) ? curr : top));
  document.getElementById("topperResult").innerHTML = `
    🏅 <strong>Topper:</strong> ${topper.name}<br/>
    🎯 <strong>Average:</strong> ${topper.average}<br/>
    📘 <strong>Result:</strong> ${topper.result}
  `;
}
