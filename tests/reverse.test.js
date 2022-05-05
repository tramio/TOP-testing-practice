import reverse from "../units/reverse";

test('reverse all-letters word', () => {
  expect(reverse("ekmek")).toBe("kemke");
});

test('reverse numbers into string', () => {
  expect(reverse(123456)).toBe("654321");
});