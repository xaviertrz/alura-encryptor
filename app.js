const toEncrypt = document.querySelector(".to__encrypt");
const output = document.querySelector(".output");

function encrypt(toEncryptInput) {
  toEncryptInput = toEncryptInput.toLowerCase();
  let encrypts = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < encrypts.length; i++) {
    if (toEncryptInput?.includes(encrypts[i][0])) {
      toEncryptInput = toEncryptInput.replaceAll(
        encrypts[i][0],
        encrypts[i][1]
      );
    }
  }
  return toEncryptInput;
}

function decrypt(toDecryptInput) {
  toDecryptInput = toDecryptInput.toLowerCase();
  let encrypts = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < encrypts.length; i++) {
    if (toDecryptInput?.includes(encrypts[i][1])) {
      toDecryptInput = toDecryptInput.replaceAll(
        encrypts[i][1],
        encrypts[i][0]
      );
    }
  }
  return toDecryptInput;
}

function encryptText() {
  const encryptedText = encrypt(toEncrypt.value);
  output.value = encryptedText;
  toEncrypt.value = "";
  output.style.backgroundImage = "none";
}

function decryptText() {
  const decryptedText = decrypt(toEncrypt.value);
  output.value = decryptedText;
  toEncrypt.value = "";
}
