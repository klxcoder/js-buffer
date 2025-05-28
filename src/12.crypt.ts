const pako = require('pako');

function encrypt(obj: object): Uint8Array {
  const objStringify: string = JSON.stringify(obj);
  const encoder: TextEncoder = new TextEncoder();
  let uint8: Uint8Array = encoder.encode(objStringify);
  uint8 = pako.deflate(uint8);
  return uint8;
}

function decrypt(uint8: Uint8Array): object {
  uint8 = pako.inflate(uint8);
  const decoder: TextDecoder = new TextDecoder();
  const objStringify: string = decoder.decode(uint8);
  const obj: object = JSON.parse(objStringify);
  return obj;
}

(() => {
  const obj = { name: "Alice", age: 30 };
  const uint8 = encrypt(obj);
  console.log(uint8);
  const obj2 = decrypt(uint8);
  console.log(obj2);
})();