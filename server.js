const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.status(200).json("HELLO WORLD");
});
