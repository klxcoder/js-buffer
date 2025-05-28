const uint8 = new Uint8Array([72, 101, 108, 108, 111]);
console.log(uint8); // Uint8Array(5) [ 72, 101, 108, 108, 111 ]
const arr = [...uint8];
console.log(arr); // [ 72, 101, 108, 108, 111 ]
console.log(...uint8); // 72 101 108 108 111