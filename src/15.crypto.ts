// Example of encrypt and decrypt Uint8Array in web browser and in nodejs
// Usage in web browser:
//      bun run tsc src/15.crypto.ts
//      Then run the content of src/15.crypto.js in web browser
// Usage in nodejs:
//      bun run src/15.crypto.ts
async function encrypt(data: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
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

async function decrypt(encryptedData: Uint8Array, key: CryptoKey): Promise<Uint8Array> {
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

(async () => {
  const key = await generateKey();
  console.log('key:', key);
  const uint8 = new Uint8Array([1, 2, 3, 4]);
  console.log('uint8:', uint8);
  const encryptedData = await encrypt(uint8, key);
  console.log('encryptedData:', encryptedData);
  const decryptedData = await decrypt(encryptedData, key);
  console.log('decryptedData:', decryptedData);
})();