// Server receives Uint8Array as Buffer
const express = require("express");
const app = express();

// Parse raw binary data
app.use(express.raw({ type: "application/octet-stream" }));

app.post("/api", (req, res) => {
  const receivedBuffer = req.body; // Buffer
  console.log("receivedBuffer:", receivedBuffer);
  const receivedArray = new Uint8Array(receivedBuffer);
  console.log("receivedArray:", receivedArray);
  res.send("Received data");
});

app.listen(3000, () => console.log("Server running on port 3000"));