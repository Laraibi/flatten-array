/*
 * ===========================================
 *   CHALLENGE: Flatten a Nested Array
 * ===========================================
 *
 * Write the function `flatten(arr)` below. It takes an array nested
 * at ANY depth and returns a single flat array, keeping the original order.
 *
 *   flatten([1, [2, 3], [4, [5, 6]], [], "hello", [true, [null, ["end"]]]])
 *   // → [1, 2, 3, 4, 5, 6, "hello", true, null, "end"]
 *
 * RULES
 *   1. Do NOT use Array.prototype.flat() or flatMap().
 *   2. It must work at any depth, not just for this example.
 *   3. Empty arrays disappear; all other values (null, booleans, strings) are kept.
 *   4. Do not modify the original array.
 *
 * BONUS
 *   ⭐    Solve it with recursion.
 *   ⭐⭐   Solve it again without recursion (use a stack or a loop).
 *   ⭐⭐⭐ Add a second parameter `depth` so flatten(arr, 1) flattens only one level.
 *
 * Run the tests with:  node flatten.test.js
 */

// ✍️ Write your code here
function flatten(arr) {
  // TODO
}

// Do not modify this line — the tests need it
module.exports = flatten;
