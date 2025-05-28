// Try to use Uint8Array in node
const uint8 = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]); // Hello world
console.log('uint8 = ', uint8); // Uint8Array(11) [ 72, 101, 108, 108, 111, 32, 119, 111, 114, 108, … ]

// Conclusion:
// node can use Uint8Array