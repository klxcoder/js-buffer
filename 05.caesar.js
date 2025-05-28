function caesarCipher(input, shift) {
  // Create a Uint8Array from the input string
  const inputArray = new Uint8Array(input.length);
  for (let i = 0; i < input.length; i++) {
    inputArray[i] = input.charCodeAt(i);
  }

  // Encrypt the input
  const encryptedArray = new Uint8Array(inputArray.length);
  for (let i = 0; i < inputArray.length; i++) {
    // Shift only alphabetic characters
    if (inputArray[i] >= 65 && inputArray[i] <= 90) { // Uppercase A-Z
      encryptedArray[i] = ((inputArray[i] - 65 + shift) % 26) + 65;
    } else if (inputArray[i] >= 97 && inputArray[i] <= 122) { // Lowercase a-z
      encryptedArray[i] = ((inputArray[i] - 97 + shift) % 26) + 97;
    } else {
      encryptedArray[i] = inputArray[i]; // Non-alphabetic characters remain unchanged
    }
  }

  // Convert the encrypted Uint8Array back to a string
  return String.fromCharCode(...encryptedArray);
}

function decryptCaesarCipher(input, shift) {
  // Decrypt by shifting in the opposite direction
  return caesarCipher(input, 26 - (shift % 26));
}

// Example usage
const originalText = "Hello, World!";
const shift = 3;

const encryptedText = caesarCipher(originalText, shift);
console.log("Encrypted:", encryptedText);

const decryptedText = decryptCaesarCipher(encryptedText, shift);
console.log("Decrypted:", decryptedText);
