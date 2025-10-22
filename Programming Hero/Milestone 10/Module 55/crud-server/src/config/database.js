const { MongoClient, ServerApiVersion } = require("mongodb");

class Database {
  constructor() {
    this.client = null;
    this.db = null;
  }

  async connect() {
    try {
      const MONGO_URI = process.env.MONGO_URI;
      
      if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined in environment variables");
      }

      this.client = new MongoClient(MONGO_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      await this.client.connect();
      await this.client.db("admin").command({ ping: 1 });
      
      this.db = this.client.db("crudDB");
      console.log("✅ Successfully connected to MongoDB Atlas!");
      
      return this.db;
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
      throw error;
    }
  }

  getDB() {
    if (!this.db) {
      throw new Error("Database not connected. Call connect() first.");
    }
    return this.db;
  }

  async close() {
    if (this.client) {
      await this.client.close();
      console.log("🔌 MongoDB connection closed");
    }
  }
}

// Export a singleton instance
const database = new Database();
module.exports = database;