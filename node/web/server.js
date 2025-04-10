const express = require("express");
const { listen } = require("express/lib/application");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
