// Expressjs server that send raw binary data

const express = require('express');
const app = express();
const port = 3000;

app.get('/send-uint8array', (req, res) => {
  // Create a Uint8Array
  const uint8Array = new Uint8Array([1, 2, 3, 4, 5]);

  // Convert Uint8Array to Buffer
  const buffer = Buffer.from(uint8Array);

  // Set the appropriate headers
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Length', buffer.length);

  // Send the buffer as a response
  res.send(buffer);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
