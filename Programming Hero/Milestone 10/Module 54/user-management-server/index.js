const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Path to JSON file
const filePath = path.join(__dirname, "database", "users.json");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Pretty JSON output
app.set("json spaces", 2);

// Helper: read users
const readUsers = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Helper: save users
const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

// GET all users
app.get("/users", (req, res) => {
  const users = readUsers();
  res.json(users);
});

// GET single user by ID
app.get("/users/:id", (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST new user
app.post("/users", (req, res) => {
  const users = readUsers();
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    ...req.body,
  };

  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
});

// PUT / update existing user
app.put("/users/:id", (req, res) => {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: "User not found" });

  users[idx] = { ...users[idx], ...req.body }; // merge existing + new data
  saveUsers(users);
  res.json(users[idx]);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const users = readUsers();
  const filteredUsers = users.filter((u) => u.id !== parseInt(req.params.id));
  if (filteredUsers.length === users.length)
    return res.status(404).json({ message: "User not found" });

  saveUsers(filteredUsers);
  res.json({ message: "User deleted successfully" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
