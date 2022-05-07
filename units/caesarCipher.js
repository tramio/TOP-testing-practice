const caesarCipher = (string) => {
  const indexes = [];
  for (let i = 0; i < string.length; i++) {
    indexes.push(string.charCodeAt(i));
  }
  const shifted = indexes.map((index) => {
    if (index == 122) {
      index = 97;
    } else if (index == 90) {
      index = 65;
    } else if ((index >= 97 && index < 122) || (index >= 65 && index < 90)) {
      index = index + 1
    }
    return index;
  });
  const ciphered = shifted
    .map(element => element = String.fromCharCode(element))
    .join("");
  return ciphered;
}

export default caesarCipher;