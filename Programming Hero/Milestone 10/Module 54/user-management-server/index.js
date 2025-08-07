const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("User Management Server is running successfully!");
});

app.listen(PORT, () => {
  console.log(`The app is running on ${PORT}`);
});
