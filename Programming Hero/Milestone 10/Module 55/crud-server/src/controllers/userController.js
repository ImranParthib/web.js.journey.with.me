const { ObjectId } = require("mongodb");
const database = require("../config/database");

class UserController {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const db = database.getDB();
      const usersCollection = db.collection("users");
      const users = await usersCollection.find().toArray();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  // Create a new user
  async createUser(req, res) {
    try {
      const db = database.getDB();
      const usersCollection = db.collection("users");
      const newUser = req.body;

      // Validation
      if (!newUser.name || !newUser.email) {
        return res.status(400).json({ error: "Name and email are required." });
      }

      const result = await usersCollection.insertOne(newUser);

      // Return the complete user object with the MongoDB _id
      const createdUser = {
        _id: result.insertedId,
        name: newUser.name,
        email: newUser.email,
      };

      res.status(201).json({
        message: "✅ User added successfully!",
        user: createdUser,
      });
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Failed to add user" });
    }
  }

  // Delete a user
  async deleteUser(req, res) {
    try {
      const db = database.getDB();
      const usersCollection = db.collection("users");
      const userId = req.params.id;

      // Validate ObjectId
      if (!ObjectId.isValid(userId)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }

      const result = await usersCollection.deleteOne({
        _id: new ObjectId(userId),
      });

      // Check if user was found and deleted
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ message: "✅ User deleted successfully!" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}

// Export a singleton instance
const userController = new UserController();
module.exports = userController;