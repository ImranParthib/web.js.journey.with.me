const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const user = [
  {
    id:1,
    name:"Imran Parthin"
  },
  {
    id:2,
    name:"Mehedi Hasan Khan"
  }
]

app.get("/", (req, res) => {
  res.send("User Management Server, Go the /user route");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.listen(PORT, () => {
  console.log(`The app is running on ${PORT}`);
});
