require("dotenv").config();
const app = require("./src/app");
const database = require("./src/config/database");

// Configuration
const PORT = process.env.PORT || 3000;

// Start server
async function startServer() {
  try {
    // Connect to database
    await database.connect();
    
    // Start Express server
    app.listen(PORT, () => {
      console.log(`🌍 Server running on port ${PORT}`);
      console.log(`📡 API endpoints:`);
      console.log(`   GET    http://localhost:${PORT}/`);
      console.log(`   GET    http://localhost:${PORT}/users`);
      console.log(`   POST   http://localhost:${PORT}/users`);
      console.log(`   DELETE http://localhost:${PORT}/users/:id`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n🛑 Shutting down server...");
  await database.close();
  process.exit(0);
});

// Start the server
startServer();