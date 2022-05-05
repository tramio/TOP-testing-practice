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

test('divides two divisible integers', () => {
  expect(calculator.divide(25, 5)).toBe(5);
})

test('divides two indivisible integers', () => {
  expect(calculator.divide(26, 5)).toBe(5.2);
})

test('divides two indivisible integers', () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
})

test('multiplies two integers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
})

test('multiplies two floats', () => {
  expect(calculator.multiply(3.3, 4.678)).toBeCloseTo(15.437);
})
