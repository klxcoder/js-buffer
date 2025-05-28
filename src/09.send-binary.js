// Client sends Uint8Array
async function sendBinaryData() {
  const array = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
    body: array.buffer,
  });
  const resText = await response.text();
  console.log("Response:", resText);
}
sendBinaryData();