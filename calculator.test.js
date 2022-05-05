import calculator from "./calculator";

test('adds two integers', () => {
  expect(calculator.add(2, 3)).toBe(5);
})

test('adds two floats', () => {
  expect(calculator.add(2.3, 3.6)).toBeCloseTo(5.9);
})