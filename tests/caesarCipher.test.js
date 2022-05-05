import caesarCipher from "../units/caesarCipher";

test('shifts all letters from an all a-z-word by 1 character', () => {
  expect(caesarCipher("meow")).toEqual("nfpx");
})