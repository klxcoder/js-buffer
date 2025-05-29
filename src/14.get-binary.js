fetch('http://localhost:3000/send-uint8array')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    const uint8Array = new Uint8Array(arrayBuffer);
    console.log(uint8Array); // Output: Uint8Array(5) [1, 2, 3, 4, 5]
  })
  .catch(error => console.error('Error:', error));