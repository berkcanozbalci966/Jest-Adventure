const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "egg",
  "bread",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
