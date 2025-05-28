// This file can be run on NodeJS environment
const nodeBuffer = Buffer.from("Hello");
console.log('----------nodeBuffer-----------')
console.log(nodeBuffer); // <Buffer 48 65 6c 6c 6f>
console.log(nodeBuffer.byteLength); // 5
console.log(nodeBuffer.length); // 5
console.log('-----------nodeBuffer.buffer----------')
console.log(nodeBuffer.buffer); // ArrayBuffer {...}
console.log(nodeBuffer.buffer.byteLength); // 8192
console.log(nodeBuffer.buffer.length); // undefined
console.log('-----------uint8FromBuf----------')
const uint8FromBuf = new Uint8Array(nodeBuffer.buffer);
console.log(uint8FromBuf);  // Uint8Array(8192) [...]
console.log('-----------actualData----------')
const actualData = new Uint8Array(nodeBuffer.buffer, nodeBuffer.byteOffset, nodeBuffer.byteLength);
console.log(actualData); // Uint8Array(5) [72, 101, 108, 108, 111]