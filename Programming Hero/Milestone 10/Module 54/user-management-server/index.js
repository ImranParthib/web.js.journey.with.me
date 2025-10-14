const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: "Imran", role: "Frontend Developer" },
  { id: 2, name: "Parthib", role: "React Engineer" },
  { id: 3, name: "Ayan", role: "Backend Developer" },
  { id: 4, name: "Sara", role: "UI/UX Designer" },
  { id: 5, name: "Rafi", role: "Full Stack Developer" },
  { id: 6, name: "Nabila", role: "Project Manager" },
  { id: 7, name: "Jahid", role: "QA Engineer" },
  { id: 8, name: "Tania", role: "DevOps Engineer" },
  { id: 9, name: "Arif", role: "Mobile App Developer" },
  { id: 10, name: "Fahim", role: "Data Analyst" },
  { id: 11, name: "Rumana", role: "Content Writer" },
  { id: 12, name: "Sabbir", role: "Backend Developer" },
];

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/users", (req, res) => {
  res.send(users);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => console.log(`The App is running on Port ${PORT}`));
