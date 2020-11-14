const express = require("express");
const app = express();
const PORT = 8080;

var json = require("./patient.json");

app.get("/", (req, res) => {
  res.json(patient.json);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
