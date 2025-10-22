const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// GET /api/users - Fetch all users
router.get("/", userController.getAllUsers);

// POST /api/users - Create a new user
router.post("/", userController.createUser);

// DELETE /api/users/:id - Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;