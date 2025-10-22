require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// App configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to DB
async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
}

connectDB();

// ✅ POST: Add a new user
app.post("/users", async (req, res) => {
  try {
    const usersCollection = client.db("crudDB").collection("users");
    const newUser = req.body; // Expecting { name, email }

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
});

// ✅ Delete: delele a user
app.delete("/users/:id", async (req, res) => {
  try {
    // 1. Get the ID from URL parameter
    const userId = req.params.id;

    // 2. Get the users collection
    const usersCollection = client.db("crudDB").collection("users");

    // 3. Delete the user (you'll need ObjectId here)
    const result = await usersCollection.deleteOne({
      _id: new ObjectId(userId),
    });

    // 4. Check if user was found and deleted
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // 5. Return success response
    res.json({ message: "✅ User deleted successfully!" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// ✅ GET: Fetch all users
app.get("/users", async (req, res) => {
  try {
    const usersCollection = client.db("crudDB").collection("users");
    const users = await usersCollection.find().toArray();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Server is running and connected to MongoDB!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🌍 Server running on port ${PORT}`);
});
