// bun run src/16.crypt.ts

const pako = require('pako');

async function cryptoEncrypt(data: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
  const iv: Uint8Array = crypto.getRandomValues(new Uint8Array(12));
  const encrypted: ArrayBuffer = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    data
  );
  const result: Uint8Array = new Uint8Array(iv.length + encrypted.byteLength);
  result.set(iv, 0);
  result.set(new Uint8Array(encrypted), iv.length);
  return result;
}

async function cryptoDecrypt(encryptedData: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
  const iv: Uint8Array = encryptedData.slice(0, 12);
  const data: Uint8Array = encryptedData.slice(12);
  const decrypted: ArrayBuffer = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    data
  );
  return new Uint8Array(decrypted);
}

async function generateKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

async function encrypt(obj: object, key: CryptoKey): Promise<Uint8Array> {
  const objStringify: string = JSON.stringify(obj);
  const encoder: TextEncoder = new TextEncoder();
  let uint8: Uint8Array = encoder.encode(objStringify);
  uint8 = pako.deflate(uint8);
  uint8 = await cryptoEncrypt(uint8, key);
  return uint8;
}

async function decrypt(uint8: Uint8Array, key: CryptoKey): Promise<object> {
  uint8 = await cryptoDecrypt(uint8, key);
  uint8 = pako.inflate(uint8);
  const decoder: TextDecoder = new TextDecoder();
  const objStringify: string = decoder.decode(uint8);
  const obj: object = JSON.parse(objStringify);
  return obj;
}

(async () => {
  const key: CryptoKey = await generateKey();
  console.log('key:', key);
  const obj = { name: "Alice", age: 30 };
  const uint8 = await encrypt(obj, key);
  console.log(uint8);
  const obj2 = await decrypt(uint8, key);
  console.log(obj2);
})();