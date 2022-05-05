import calculator from "./calculator";

test('adds two integers', () => {
  expect(calculator.add(2, 3)).toBe(5);
})

test('adds two floats', () => {
  expect(calculator.add(2.3, 3.6)).toBeCloseTo(5.9);
})

test('substracts two integers', () => {
  expect(calculator.substract(3, 2)).toBe(1);
})

test('substracts two floats', () => {
  expect(calculator.substract(3.2, 2.1)).toBeCloseTo(1.1);
})

test('substracts two negative numbers', () => {
  expect(calculator.substract(-7, -3)).toBe(-4);
})

test('substracts a negative number from a positive number', () => {
  expect(calculator.substract(7, -2)).toBe(9);
})

test('substracts a positive number from a negative number', () => {
  expect(calculator.substract(-7, 2)).toBe(-9);
})