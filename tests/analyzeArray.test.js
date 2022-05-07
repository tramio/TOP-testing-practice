import analyzeArray from "../units/analyzeArray";

let myArray = [1, 2, 34, 56, 789];

test('returns average', () => {
  expect(analyzeArray(myArray)).toBe(176.4);
})

// test('returns min', () => {
//   expect(analyzeArray.getMin(myArray)).tobe(1);
// })

// test('returns max', () => {
//   expect(analyzeArray.getMax(myArray)).tobe(789);
// })

// test('returns length', () => {
//   expect(analyzeArray.getLength(myArray)).tobe(5);
// })