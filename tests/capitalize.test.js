import capitalize from "../units/capitalize";

test('capitalizes all-letter string"', () => {
  expect(capitalize("bir elma")).toBe("Bir elma");
})

test('capitalizes first letter', () => {
  expect(capitalize("2 elmalar")).toBe("2 Elmalar");
})

test("capitalizes first accentuated letter", () => {
  expect(capitalize("ördek")).toBe("Ördek");
});