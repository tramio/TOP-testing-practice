import capitalize from "./capitalize";

test('capitalizes all-letter string"', () => {
  expect(capitalize("bir elma")).toBe("Bir elma");
})

test('capitalizes first letter', () => {
  expect(capitalize("2 elmalar")).toBe("2 Elmalar");
})