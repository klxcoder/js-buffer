// Example functions that:
//    + export key to base64
//    + import base64 to key
// Usage:
//    + bun run src/17.crypt.ts

async function generateKey(): Promise<CryptoKey> {
  return crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

async function exportKeyToBase64(key: CryptoKey): Promise<string> {
  const raw = await crypto.subtle.exportKey('raw', key); // ArrayBuffer
  const uint8 = new Uint8Array(raw);
  return Buffer.from(uint8).toString('base64');
}

async function importKeyFromBase64(base64: string): Promise<CryptoKey> {
  const raw = Buffer.from(base64, 'base64');
  return crypto.subtle.importKey(
    'raw',
    raw,
    { name: 'AES-GCM' },
    true,
    ['encrypt', 'decrypt']
  );
}

async function areKeysEqual(k1: CryptoKey, k2: CryptoKey): Promise<boolean> {
  const raw1 = new Uint8Array(await crypto.subtle.exportKey('raw', k1));
  const raw2 = new Uint8Array(await crypto.subtle.exportKey('raw', k2));
  if (raw1.length !== raw2.length) return false;
  return raw1.every((byte, i) => byte === raw2[i]);
}


(async () => {
  const key1: CryptoKey = await generateKey();
  console.log('key1:', key1);
  const base64: string = await exportKeyToBase64(key1);
  console.log(base64);
  const key2: CryptoKey = await importKeyFromBase64(base64);
  console.log('key2:', key2);
  const key3: CryptoKey = await generateKey();
  console.log(await areKeysEqual(key1, key2)); // true
  console.log(await areKeysEqual(key1, key3)); // false
})();