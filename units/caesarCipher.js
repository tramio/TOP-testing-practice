const caesarCipher = (string) => {
  const indexes = [];
  for (let i = 0; i < string.length; i++) {
    indexes.push(string.charCodeAt(i));
  }
  const ciphered =
  indexes.map(index => index += 1)
    .map(element => element = String.fromCharCode(element))
    .join("");
  return ciphered;
}

export default caesarCipher;