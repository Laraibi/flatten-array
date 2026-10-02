# Challenge: Flatten a Nested Array

Write a function `flatten(arr)` that takes an array nested at **any depth** and returns a single flat array, keeping the original order.

```js
flatten([1, [2, 3], [4, [5, 6]], [], "hello", [true, [null, ["end"]]]]);
// → [1, 2, 3, 4, 5, 6, "hello", true, null, "end"]
```

## Rules

1. Do **not** use `Array.prototype.flat()` or `flatMap()`.
2. It must work at any depth, not just for the example.
3. Empty arrays disappear; all other values (`null`, booleans, strings) are kept.
4. Do not modify the original array.

## Bonus

| Level | Goal |
| ----- | ---- |
| ⭐ | Solve it with recursion. |
| ⭐⭐ | Solve it again without recursion (use a stack or a loop). |
| ⭐⭐⭐ | Add a second parameter `depth` so `flatten(arr, 1)` flattens only one level. |

## Files

| File | What it is |
| ---- | ---------- |
| [flatten-challenge.js](flatten-challenge.js) | Your code goes here. |
| [flatten.test.js](flatten.test.js) | The tests. Do not modify. |

## Getting started

You only need [Node.js](https://nodejs.org) (v14 or newer). There are no dependencies to install.

1. **Fork** this repository, then clone your fork:

   ```bash
   git clone https://github.com/<your-username>/flatten-array.git
   cd flatten-array
   ```

2. Open [flatten-challenge.js](flatten-challenge.js) and write your code inside `flatten`:

   ```js
   // ✍️ Write your code here
   function flatten(arr) {
     // TODO
   }
   ```

   Keep the `module.exports = flatten;` line at the bottom — the tests need it.

3. Run the tests:

   ```bash
   node flatten.test.js
   ```

   (`npm test` does the same thing.)

## Expected output

When your solution is correct you will see:

```
✅ Flattens the main nested array
✅ Does not modify the original array
✅ Returns [] for an empty array
✅ Handles very deep nesting
✅ Does not use .flat()

5/5 tests passed
🎉 Well done, challenge completed!
```

## Submitting your solution

1. Create a branch: `git checkout -b solution/<your-name>`
2. Commit your changes to `flatten-challenge.js`.
3. Push the branch to your fork and open a pull request.

The tests run automatically on every pull request, so you will get a green check when all 5 pass.
