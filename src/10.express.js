// Express server can handle both json and binary
const express = require("express");
const app = express();

app.use(express.json()); // Parses JSON
app.use(express.raw({ type: "application/octet-stream" })); // Parses binary


app.post("/endpoint", (req, res) => {
  if (req.is("application/json")) {
    console.log("JSON:", req.body); // Parsed JSON
  } else if (req.is("application/octet-stream")) {
    console.log("req.body:", req.body); // Buffer
    const uint8 = new Uint8Array(req.body);
    console.log("uint8:", uint8); // Uint8Array
  }
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running on port 3000"));