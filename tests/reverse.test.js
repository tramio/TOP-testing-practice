import reverse from "../units/reverse";

test('reverse all-letters word', () => {
  expect(reverse("ekmek")).toBe("kemke");
});