require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

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
    res.status(201).json({
      message: "✅ User added successfully!",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to add user" });
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
 