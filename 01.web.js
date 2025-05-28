// This file can be run on web browser
(() => {
  const uint8 = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]); // Hello world
  console.log('uint8 = ', uint8); // Uint8Array(11) [ 72, 101, 108, 108, 111, 32, 119, 111, 114, 108, … ]
  console.log('uint8.buffer = ', uint8.buffer); // ArrayBuffer { byteLength: 11 }
  console.log('uint8.byteLength = ', uint8.byteLength); // 11
  console.log('uint8.byteOffset = ', uint8.byteOffset); // 0
  console.log('uint8.length = ', uint8.length); // 11
  console.log('uint8.buffer.byteLength = ', uint8.buffer.byteLength); // 11
  console.log('uint8[0] = ', uint8[0]); // 72
  console.log('typeof uint8[0] = ', typeof uint8[0]); // number
  uint8[0] = 74;
  for (const byte of uint8) {
    console.log(byte);
  }
  const s = uint8.toString();
  console.log('s = ', s); // 74,101,108,108,111,32,119,111,114,108,100
  console.log('s.length = ', s.length); // 41
  console.log('"74,101,108,108,111,32,119,111,114,108,100".length = ', "74,101,108,108,111,32,119,111,114,108,100".length);
  const decoder = new TextDecoder('utf-8');
  const str = decoder.decode(uint8);
  console.log('str = ', str); // Jello world
  const encoder = new TextEncoder();
  const newUint8 = encoder.encode("Hello");
  console.log('newUint8 = ', newUint8); // Uint8Array(5) [ 72, 101, 108, 108, 111 ]
})();
