// ===========================================
//   TESTS — do not modify this file
// ===========================================
const flatten = require("./flatten-challenge");

const nested = [
  1,
  [2, 3],
  [4, [5, 6]],
  [[7], 8, [9, [10, [11, 12]]]],
  [],
  [[[[13]]]],
  "hello",
  [true, [null, ["end"]]]
];

const original = JSON.stringify(nested);
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, "hello", true, null, "end"];

const tests = [
  {
    name: "Flattens the main nested array",
    pass: () => JSON.stringify(flatten(nested)) === JSON.stringify(expected),
  },
  {
    name: "Does not modify the original array",
    pass: () => { flatten(nested); return JSON.stringify(nested) === original; },
  },
  {
    name: "Returns [] for an empty array",
    pass: () => JSON.stringify(flatten([])) === "[]",
  },
  {
    name: "Handles very deep nesting",
    pass: () => JSON.stringify(flatten([[[[[[[["deep"]]]]]]]])) === '["deep"]',
  },
  {
    name: "Does not use .flat()",
    pass: () => !/\.flat(Map)?\s*\(/.test(flatten.toString()),
  },
];

let passed = 0;
for (const t of tests) {
  let ok = false;
  try { ok = t.pass(); } catch (e) { ok = false; }
  console.log(`${ok ? "✅" : "❌"} ${t.name}`);
  if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
if (passed === tests.length) console.log("🎉 Well done, challenge completed!");
else process.exitCode = 1;
