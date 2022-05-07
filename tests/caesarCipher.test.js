import caesarCipher from "../units/caesarCipher";

test('shifts all letters from an all a-z-word by 1 character', () => {
  expect(caesarCipher("kedi")).toEqual("lfej");
})

test('wraps from z to a', () => {
  expect(caesarCipher("siz")).toEqual("tja");
})

test('keeps the right case', () => {
  expect(caesarCipher("Iyiyim")).toEqual("Jzjzjn");
  expect(caesarCipher("kItaP")).toEqual("lJubQ");
  expect(caesarCipher("OKURUM")).toEqual("PLVSVN");
})

test('wraps from z to a and keeps the right case', () => {
  expect(caesarCipher("SIZ")).toEqual("TJA");
})

test('ignores punctuation', () => {
  expect(caesarCipher("merhaba,aysel!")).toEqual("nfsibcb,bztfm!");
})

// test('ignores spaces', () => {
//   expect(caesarCipher("merhaba aysel")).toEqual("nfsibcb bztfm");
// })