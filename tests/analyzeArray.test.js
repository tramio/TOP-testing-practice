import analyzeArray from "../units/analyzeArray";

let myArray = [1, 2, 34, 56, 789];
let analysis = analyzeArray(myArray);

test('returns average', () => {
  expect(analysis[0]).toBe(176.4);
})

test('returns min', () => {
  expect(analysis[1]).toBe(1);
})

// test('returns max', () => {
//   expect(analysis[2]).toBe(789);
// })

// test('returns length', () => {
//   expect(analysis[3]).toBe(5);
// })