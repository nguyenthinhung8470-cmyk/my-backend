const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "An" },
    { id: 2, name: "Binh" },
    { id: 3, name: "Chi" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running");
});