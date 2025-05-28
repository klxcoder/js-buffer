(() => {
  // `Buffer` → `Uint8Array`
  const buffer = Buffer.from("Hello");
  const uint8 = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  console.log(uint8); // Uint8Array(5) [72, 101, 108, 108, 111]
})();

(() => {
  // `Uint8Array` → `Buffer`
  const uint8 = new Uint8Array([72, 101, 108, 108, 111]);
  const buffer = Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength);
  console.log(buffer); // <Buffer 48 65 6c 6c 6f>
})();