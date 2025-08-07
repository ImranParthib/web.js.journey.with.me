const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const users = [
  { id: 1, name: "Imran Parthib" },
  { id: 2, name: "Mehedi Hasan Khan" },
];

app.get("/", (req, res) => {
  res.send(`
    <h1>User Management Server</h1>
    <p>Go to one of the routes below:</p>
    <ul>
      <li><a href="/user">User List</a></li>
      <!-- Add more links here if you add more routes -->
    </ul>
  `);
});

app.get("/user", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
